import AddAndRemove from './addAndRemove.js';

let firstTime = true;
let changeArray = [];

// eslint-disable-next-line
export default class Modal {
  static startModal(input) {
    document.getElementById('delet-message-modal').innerHTML = 'To edit the task, just click on X and then click on the task';
    document.getElementById('delet-Container-eachelement').classList.remove('display-none');

    this.index = input;

    // Close the delet menu with the delet button
    const deleteBtn = document.getElementById('delet-btn-eachElement');

    if (firstTime) {
      firstTime = false;
      deleteBtn.addEventListener('click', () => {
        document.getElementById('ul-container-list').innerHTML = '';
        AddAndRemove.delete(this.index);
        document.getElementById('delet-Container-eachelement').classList.add('display-none');
        AddAndRemove.displayList(AddAndRemove.add());
        AddAndRemove.showChecked();
      });
    }

    // Close the menu with the x icon
    document.getElementById('delet-x-icon').addEventListener('click', this.closeModal);
  }

  static closeModal() {
    document.getElementById('delet-Container-eachelement').classList.add('display-none');
    let newValue;
    let path;
    firstTime = true;

    document.getElementById('ul-container-list').addEventListener('click', (e) => {
      const { id } = e.target;
      const regex = /(?<=input)\d+$/;

      if (firstTime) {
        if (regex.test(id)) {
          firstTime = false;
          const index = id.match(regex)[0];
          path = document.getElementById(id);
          path.disabled = false;
          path.style.border = '1px solid black';

          path.addEventListener('change', () => {
            newValue = document.getElementById(id).value;
            path.disabled = 'disabled';
            path.style.border = 'none';
            Modal.changeValue(newValue, index);
          });
        } else {
          firstTime = true;
        }
      }
    });
  }

  static changeValue(newValue, position) {
    changeArray = [];
    if (newValue === '') return;
    if (localStorage.getItem('data')) {
      changeArray = JSON.parse(localStorage.getItem('data'));
    }

    for (let i = 0; i < changeArray.length; i += 1) {
      // eslint-disable-next-line
      if (changeArray[i].index == position) {
        changeArray[i].description = newValue;
        localStorage.setItem('data', JSON.stringify(changeArray));
      }
    }
    return changeArray;
  }
}
