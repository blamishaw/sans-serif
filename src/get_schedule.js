// Day constants for matrix accessing
const class_days = {
  "Mo": 0,
  "Tu": 1,
  "We": 2,
  "Th": 3,
  "Fr": 4,
};

// Time constants for matrix using 24hr time -- 8AM to 10PM in half-hour intervals
const class_times = {
  "08:00": 0,
  "08:30": 1,
  "09:00": 2,
  "09:30": 3,
  "10:00": 4,
  "10:30": 5,
  "11:00": 6,
  "11:30": 7,
  "12:00": 8,
  "12:30": 9,
  "13:00": 10,
  "13:30": 11,
  "14:00": 12,
  "14:30": 13,
  "15:00": 14,
  "15:30": 15,
  "16:00": 16,
  "16:30": 17,
  "17:00": 18,
  "17:30": 19,
  "18:00": 20,
  "18:30": 21,
  "19:00": 22,
  "19:30": 23,
  "20:00": 24,
  "20:30": 25,
  "21:00": 26,
  "21:30": 27,
  "22:00": 28,
};

// The quarter constant that API data is sourced -- currently: Fall Quarter 2019
const TERM = 4760;

// Possible credit types
const credit_types = ["Major", "Minor", "Distro", "Credit"];

// To bypass CORS policy
const proxy_url = 'https://cors-anywhere.herokuapp.com/';

// Base API url
const base_url = "http://api.asg.northwestern.edu/courses/details/?key=" + config.API_key;

// To check if a time has already been allocated, we organize the week into a 28x5 matrix
// Length: 28 half-hour intervals between 8AM and 10PM
// Width: 5 days of the school week
let calendar = init_matrix();

function init_matrix() {
  let time_matrix = [];
  for (let i = 0; i < 29; i++){
    time_matrix.push([0, 0, 0, 0, 0]);
  }
  return time_matrix;
}

const alloc_time = (start_time, end_time, meeting_days) => {
  for (let day of meeting_days) {
    for (let i = start_time; i < end_time; i++){
      calendar[class_times[i]][class_days[day]] = 1;
      console.log(calendar);
    }
  }
}

const is_alloc = (start_time, end_time, meeting_days) => {

  for (let day of meeting_days){
    let day_col = calendar.map(col => col[class_days[day]]);
    let time_of_class = day_col.slice(start_time, end_time);

    if (time_of_class.includes(1)) return false;
  }
  return true;

}

// Rounds a class start/end time to the nearest half hour
const round_time = (time) => {
  let [hour, minutes] = time.split(':');
  if (minutes == "20") {
    minutes = "30";
  }
  if (minutes == "50"){
    minutes = "00";
    if (hour == "08"){
      hour = "09";
    }
    else hour = (parseInt(hour) + 1).toString();
  }
}

// Determines course meeting days and start/end times. Calls is_alloc to determine
// if the meeting times of the class are already allocated
const check_availaible = (course) => {
  const meeting_days = course.meeting_days.match(/[A-Z][a-z]+/g);
  const start_time = round_time(course.start_time);
  const end_time = round_time(course.end_time);

  const available = is_alloc(start_time, end_time, meeting_days);
  if (available) {
    alloc_time(start_time, end_time, meeting_days);
    return true;
  }
  else {
    return false;
  }
}

// Removes an item from the user-input course list so it isn't reused
const remove_item_from_courses = (courses, item) => {
  const index = courses.indexOf(item);
  if (index > -1) {
    courses.splice(index, 1);
  }
  return courses;
}

// Selects a random course from the course JSON
// This will need to be changed to accomodate course prerequisites
const select_random_course = (json) => {
  if (json.length == 0){
    console.log(`ERROR: No courses found`);
    return null;
  }

  let course = json[Math.floor(Math.random() * json.length)];

  // Some courses have incomplete data -- no start/end times -- must search the whole list to find one
  let i;
  for (i = 0; (!course.start_time && i < json.length); i++) {
    course = json[Math.floor(Math.random() * json.length)];
    try {
      let allocated = check_availaible(course);
      if (allocated) break;
    }
    catch(err) {
      continue;
    }
  }

  if (i == json.length) {
    console.log(`No courses found in subject ${course.subject}.`);
    return null;
  }

  return course;
}

// Fetches Northwestern course JSON data given a subject and term – then selects
// a random course from this list and returns it
const fetch_courses = async (term, subject) => {
  const url = base_url + "&term=" + term + "&subject=" + subject;

  let response = await fetch(proxy_url + url);
  if (response.ok) {
    let json = await response.json();
    let random_course = select_random_course(json);
    console.log(random_course);
    console.log(calendar);
    return random_course;
  }
  return null;
}

// Takes subject and credit type from user input and fetches API data
const process_courses = async (courses) => {

  for (let credit_type of credit_types){
    let user_type = courses.find(elem => (elem[1] == credit_type));
    let course = "";

    // We can have multiple courses/subjects with the same credit type (e.g. double majors/minors)
    // This checks for all classes with specific credit type, removes the item from the subject list
    // Then fetches API data about the class
    while (user_type != undefined){
      courses = remove_item_from_courses(courses, user_type);
      course = await fetch_courses(TERM, user_type[0]);
      //console.log(course);
      user_type = courses.find(elem => elem[1] == credit_type);
    }

  }
}
