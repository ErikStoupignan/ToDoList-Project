// import _ from 'lodash';
import './style.css';
import Crud  from './addAndRemove.js';
import { add } from 'lodash';
displayList(Crud.add());

// Print the list
function displayList(input) {
  document.getElementById('ul-container-list').innerHTML = input.map((items,index) => 
  `<li id="${index}"><input name="listElement${index}" type="checkbox"> ${items.description} <i id="icono${index}" class="fas fa-ellipsis-v"></i></li>
  `).join('');
}

// Call the function Add
document.getElementById('input-list').addEventListener('change', (e) => {
  displayList(Crud.add());
});


// Close de delet menu
document.getElementById('delet-btn-eachElement').addEventListener('click', () => {
  document.getElementById('delet-Container-eachelement').classList.add('display-none');
});

document.getElementById('delet-x-icon').addEventListener('click', () => {
  document.getElementById('delet-Container-eachelement').classList.add('display-none');
});

// Refresh the list complete
const refreshIcons = document.getElementById('refresh-list');
const updatingMessage = document.getElementById('updating-list-message');
refreshIcons.addEventListener('click', () => {

  displayList(Crud.add());
  updatingMessage.classList.remove('display-none');
  refreshIcons.classList.add('fa-spin');
  setTimeout(() => {
    refreshIcons.classList.remove('fa-spin');
    updatingMessage.classList.add('display-none');
  }, 1000);
});


