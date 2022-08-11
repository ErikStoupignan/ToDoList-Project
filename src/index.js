// import _ from 'lodash';
// import { add } from 'lodash';
import './style.css';
import Crud from './addAndRemove.js';
// eslint-disable-next-line
import Modal from './modalMenu.js';

// Print the list
export default function displayList(input) {
  document.getElementById('ul-container-list').innerHTML = input.map((items, index) => `
  <li id="${index}"><input id="listElement${index}" type="checkbox"> 
  <input id='input${index}' value="${items.description}" type="text" disabled="disabled" class='input-list'> 
  <i id="iconDots${index}" class="fas fa-ellipsis-v"></i></li>
  `).join('');
}

// Review if we have information in the local Storage
displayList(Crud.add());

// Call the function Add
document.getElementById('input-list').addEventListener('change', () => {
  displayList(Crud.add());
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

// Open de Option menu
document.getElementById('ul-container-list').addEventListener('click', (e) => {
  const { id } = e.target;
  let firstTime = true;
  const regex = /(?<=iconDots)\d+$/;

  if (firstTime) {
    if (regex.test(id)) {
      firstTime = false;
      const index = id.match(regex)[0];
      Modal.startModal(index);
    }
  } else {
    firstTime = true;
  }
});
