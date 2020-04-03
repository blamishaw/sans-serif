// Day constants for matrix accessing
const MONDAY = 0;
const TUESDAY = 1;
const WEDNESDAY = 2;
const THURSDAY = 3;
const FRIDAY = 4;

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

const roundTime = (time) => {
  let [hours, minutes] = time.split(':');
  if (minutes == "20") {
    minutes = "30";
  }
  console.log(hours + ":" + minutes);
}

const check_availaible = (course) => {
  console.log(roundTime(course.start_time), roundTime(course.end_time));
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
  const course = json[Math.floor(Math.random() * json.length)];
  check_availaible(course);
  return;
}

// Fetches Northwestern course JSON data given a subject and term – then selects
// a random course from this list and returns it
const fetch_courses = async (term, subject) => {
  const url = base_url + "&term=" + term + "&subject=" + subject;

  let response = await fetch(proxy_url + url);
  if (response.ok) {
    let json = await response.json();
    let random_course = select_random_course(json);
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


let time_matrix = []

const init_matrix = () => {
  for (let i = 0; i < 27; i++){
    time_matrix.push([0, 0, 0, 0, 0]);
  }
}

const alloc_time = (time, days) => {
  time_matrix[class_times[time]][day] = 1;
}

const free_time = (time, day) => {
  time_matrix[class_times[time]][day] = 0;
}

const is_alloc = (start_time, end_time, days) => {
  for (let day of days){
    let day_col = time_matrix.map(col => col[day]);
    console.log(day_col);
  }
  // console.log(time_matrix[class_times[time]][days[0]];
}
