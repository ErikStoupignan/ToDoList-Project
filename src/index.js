import './style.css';
import Checkbox from './checkbox.js';
import AddAndRemove from './addAndRemove.js';
import Modal from './modalMenu.js';

window.addEventListener('DOMContenLoaded', AddAndRemove.displayList(AddAndRemove.add()));
window.addEventListener('DOMContenLoaded', Checkbox.testCheckbox());

// Call the function Add
document.getElementById('input-list').addEventListener('change', () => {
  AddAndRemove.displayList(AddAndRemove.add());
  AddAndRemove.showChecked();
});

// Refresh the list complete
const refreshIcons = document.getElementById('refresh-list');
const updatingMessage = document.getElementById('updating-list-message');
refreshIcons.addEventListener('click', () => {
  AddAndRemove.displayList(AddAndRemove.add());
  AddAndRemove.showChecked();
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

// Call the function checkbox
document.getElementById('clearbtn-list').addEventListener('click', () => Checkbox.cleanAllChecked());