let arrayList = [];

export default class Crud {
  constructor(description, index, status = false) {
    this.description = description;
    this.complete = status;
    this.index = index;
  }

  static add() {
    if (localStorage.getItem('data')) {
      const oldElement = JSON.parse(localStorage.getItem('data'));
      arrayList = oldElement;
    }

    const input = document.getElementById('input-list').value;
    if (input === '') return arrayList;

    document.getElementById('input-list').value = '';

    arrayList.push(new Crud(input));
    this.update(arrayList);

    localStorage.setItem('data', JSON.stringify(arrayList));
    return arrayList;
  }

  static delete(index) {
    arrayList.splice(index, 1);
    this.update(arrayList);
    localStorage.setItem('data', JSON.stringify(arrayList));
    return arrayList;
  }

  static update(array) {
    for (let i = 0; i < array.length; i += 1) {
      array[i].index = i;
    }
  }

  static showChecked() {
    const checkboxArray = Crud.add();
    for (let i = 0; i < checkboxArray.length; i += 1) {
      if (checkboxArray[i].complete === true) {
        document.getElementById(`listElement${i}`).checked = true;
        document.getElementById(`input${i}`).classList.add('line-through');
      }
    }
    return checkboxArray;
  }
}
