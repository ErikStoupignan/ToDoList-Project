import AddAndRemove from './addAndRemove.js';

let checkboxArray;

export default class Checkbox {
  static testCheckbox() {
    AddAndRemove.showChecked();

    document.getElementById('ul-container-list').addEventListener('click', (e) => {
      const { id } = e.target;
      const regex = /(?<=listElement)\d+$/;
      checkboxArray = AddAndRemove.add();

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
    checkboxArray = AddAndRemove.add();
    checkboxArray = checkboxArray.filter((item) => item.complete !== true);
    AddAndRemove.update(checkboxArray);
    localStorage.setItem('data', JSON.stringify(checkboxArray));
    AddAndRemove.displayList(AddAndRemove.add());
  }
}
