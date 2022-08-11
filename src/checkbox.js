// import { get } from 'lodash';
import Crud from './addAndRemove.js';
// eslint-disable-next-line
import displayList from './index.js';
let checkboxArray;

export default class Checkbox {
  static testCheckbox() {
    Crud.showChecked();

    document.getElementById('ul-container-list').addEventListener('click', (e) => {
      const { id } = e.target;
      const regex = /(?<=listElement)\d+$/;
      checkboxArray = Crud.add();

      if (regex.test(id)) {
        const position = id.match(regex)[0];
        const check = document.getElementById(id).checked;

        for (let i = 0; i < checkboxArray.length; i += 1) {
          // eslint-disable-next-line
          if (checkboxArray[i].index == position) {
            checkboxArray[i].complete = check;
            localStorage.setItem('data', JSON.stringify(checkboxArray));
            document.getElementById(`input${i}`).classList.toggle('line-through');
          }
        }
      }
    });
  }

  static cleanAllChecked() {
    checkboxArray = Crud.add();
    checkboxArray = checkboxArray.filter((item) => item.complete !== true);
    Crud.update(checkboxArray);
    localStorage.setItem('data', JSON.stringify(checkboxArray));
    displayList(Crud.add());
  }
}
