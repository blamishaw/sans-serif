// To bypass CORS policy
const proxy_url = 'https://cors-anywhere.herokuapp.com/';

// Base API url
const base_url = "http://api.asg.northwestern.edu/courses/?key=" + config.API_key;

const fetch_courses = async (term, subject) => {
  const url = base_url + "&term=" + term + "&subject=" + subject;

  let response = await fetch(proxy_url + url);
  let json = await response.json();

  for (let course of json){
    console.log(course.title);
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
