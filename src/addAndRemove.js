let arrayList = [];

export default class AddAndRemove {
  constructor(description, index, status = false) {
    this.description = description;
    this.complete = status;
    this.index = index;
  }

  static displayList(input) {
    document.querySelector('#ul-container-list').innerHTML = input.map((items, index) => `
    <li id="${index}"><input id="listElement${index}" name='${index}' type="checkbox" value=${items.complete}> 
    <input id='input${index}' value="${items.description}" type="text" disabled="disabled" class='input-list'> 
    <i id="iconDots${index}" class="fas fa-ellipsis-v"></i></li>
    `).join('');
  }

  static add() {
    if (localStorage.getItem('data')) {
      const oldElement = JSON.parse(localStorage.getItem('data'));
      arrayList = oldElement;
    }

    const input = document.getElementById('input-list').value;
    if (input === '') return arrayList;

    arrayList.push(new AddAndRemove(input));
    this.update(arrayList);

    localStorage.setItem('data', JSON.stringify(arrayList));
    this.displayList(arrayList);
    document.getElementById('input-list').value = '';
    return arrayList;
  }

  static delete(index) {
    // arrayList = AddAndRemove.add();
    arrayList.splice(index, 1);
    this.update(arrayList);
    localStorage.setItem('data', JSON.stringify(arrayList));
    // arrayList = JSON.parse(localStorage.getItem('data'));
    this.displayList(arrayList);
    return arrayList;
  }

  static update(array) {
    for (let i = 0; i < array.length; i += 1) {
      array[i].index = i;
    }
    return array;
  }

  static showChecked() {
    const checkboxArray = AddAndRemove.add();
    for (let i = 0; i < checkboxArray.length; i += 1) {
      if (checkboxArray[i].complete === true) {
        document.getElementById(`listElement${i}`).checked = true;
        document.getElementById(`input${i}`).classList.add('line-through');
      }
    }
    return checkboxArray;
  }
}

// export {arrayList};