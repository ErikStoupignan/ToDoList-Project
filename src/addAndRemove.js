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
    this.update();

    localStorage.setItem('data', JSON.stringify(arrayList));
    return arrayList;
  }

  static delete(index) {
    arrayList.splice(index, 1);
    this.update();
    localStorage.setItem('data', JSON.stringify(arrayList));
    return arrayList;
  }

  static update() {
    for (let i = 0; i < arrayList.length; i += 1) {
      arrayList[i].index = i;
    }
  }
}
