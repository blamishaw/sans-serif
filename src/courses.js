// To bypass CORS policy
const proxy_url = 'https://cors-anywhere.herokuapp.com/';

// Base API url
const base_url = "http://api.asg.northwestern.edu/courses/?key=" + config.API_key;

const make_card = (row_num, course) => {

  const template = `
    <div class="col-lg card" style="width: 18rem; padding: 0;">
      <div class="card-body">
        <div class="card-top">
          <h5 class="course-title">${course.subject} <span style="font-size: 20px">${course.catalog_num}</span></h5>
          <h6 class="instructor-name">${course.title}</h6>
        </div>
        <p class="card-text">${course.instructor}</p>
      </div>
    </div>
    `;

  document.querySelector(`.row${row_num}`).innerHTML += template;
}

const create_cards = (json) => {
  let course_list = document.querySelector('#course-list');
  course_list.innerHTML = '';
  let row_num = 0;

  for (let i = 0; i < json.length; i++){
    if (i % 4 == 0){
      row_num++;
      course_list.innerHTML += `<div class="row row${row_num} justify-content-center"></div>`;
    }
    console.log(json[i]);
    make_card(row_num, json[i]);
  }
}

const fetch_courses = async (term, subject) => {
  const url = base_url + "&term=" + term + "&subject=" + subject;

  let response = await fetch(proxy_url + url);
  if (response.ok) {
    let json = await response.json();

    create_cards(json);
  }
}

const get_courses = () => {
  let input = document.querySelector('#search-input').value.toUpperCase();
  fetch_courses(4760, input);
}

function search_click(ev) {
  get_courses();
}

window.addEventListener('keypress', function(ev){
  if (ev.key == 'Enter'){
    ev.preventDefault();
    get_courses();
  }
})
