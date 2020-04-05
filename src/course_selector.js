let num_classes = 1;

// Dynamically creates the dropdown menu with content from macro.js
const create_dropdown = () => {
  let dropdown_list = "";

  for (let subject of Object.entries(courses)){
    dropdown_list += `<li><a class="menu-item" href="#" onClick="return false;">${subject[0]} ${subject[1]}</a></li>`;
  }
  return '<ul class="dropdown-menu scrollable-menu" role="menu">' + dropdown_list + '</ul>';
}

// Creates the HTML for the central class cards
const add_selector_card = (num_classes) => {

  dropdown_menu = create_dropdown();

  const template = `
  <div class="row justify-content-center">
    <div class="course-selector">
    <h2 id="class-num-${num_classes}" class="class-num">Class ${num_classes}</h2>
    <h4 id="subject-${num_classes}"><h6 id="type-${num_classes}"></h6></h4>
      <div class="btn-group">
        <div class="form-check form-check-inline">
            <input id="Major" class="form-check-input" type="radio" name="inlineRadioOptions${num_classes}" value="option1">
            <label class="form-check-label">Major</label>
          </div>
          <div class="form-check form-check-inline">
            <input id="Minor" class="form-check-input" type="radio" name="inlineRadioOptions${num_classes}" value="option2">
            <label class="form-check-label">Minor</label>
          </div>
          <div class="form-check form-check-inline">
            <input id="Distro" class="form-check-input" type="radio" name="inlineRadioOptions${num_classes}" value="option3">
            <label class="form-check-label">Distro</label>
          </div>
          <div class="form-check form-check-inline">
            <input id="Credit" class="form-check-input" type="radio" name="inlineRadioOptions${num_classes}" value="option3">
            <label class="form-check-label">Credit</label>
          </div>
        </div>
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Subject<span class="caret"></span></button>
        ${dropdown_menu}
    </div>
  </div>
  `;
  root.innerHTML += template;

}

// Function to add event handlers to the form checks
const add_form_events = () => {
  let form_checks = document.querySelectorAll('.form-check-input');
  for (let form of form_checks){
    form.addEventListener('click', function(ev) {
      let type = ev.target.id;
      let class_card = ev.target.closest(".course-selector").firstElementChild.id[10];
      document.querySelector(`#type-${class_card}`).innerHTML = type;
    })
  }
}

// Function to add event handlers to the dropdown menu
const add_dropdown_events = () => {
  let menu_items = document.querySelectorAll('.menu-item');
  for (let i = 0; i < menu_items.length; i++){
    menu_items[i].addEventListener('click', function(ev) {
      let subject = ev.target.innerText.split(' ')[0];
      let class_card = ev.target.closest(`div`).firstElementChild.id[10];
      document.querySelector(`#subject-${class_card}`).innerHTML = subject;
    })
  }
}

// Function that collects user input and stores it in localStorage when next button is clicked
const store_user_input = () => {
  for (let i = 0; i < 4; i++){
    let subject = document.querySelector(`#subject-${i}`).innerText;
    let type = document.querySelector(`#type-${i}`).innerText;
  }
}

// This event listener finds the subjects and credit types input by the user and passes them
// to get_schedule.js – the file that runs the course selection algorithm
document.querySelector('#make-schedule-btn').addEventListener('click', function(ev) {
    let user_courses = []

    let courses = document.querySelectorAll('.course-selector');
    for (let course of courses){
      let subject = course.children[1].innerText;
      let type = course.children[2].innerText;

      user_courses.push([subject, type])
    }
    make_schedule(user_courses);
})

document.querySelector("#add-class-btn").addEventListener('click', function(ev) {
  if (num_classes < 6){
    num_classes += 1;
    add_selector_card(num_classes);
    add_form_events();
    add_dropdown_events();
  }

  if (num_classes == 5){
    document.querySelector('#add-class-btn').style.display = "none";
    let elems = document.querySelectorAll(`.course-selector`);
    elems[elems.length-1].style.marginBottom = "3vw";
  }
})

// Creates the necessary HTML when the DOM is loaded
window.addEventListener('DOMContentLoaded', (ev) => {
  // Clear previous class cards
  let root = document.querySelector('#root');
  root.innerHTML = '';

  add_selector_card(num_classes);
  add_form_events();
  add_dropdown_events();
})
