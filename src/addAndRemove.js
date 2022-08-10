
let arrayList = [
  {
    description: 'Wash the dishes',
    complete: false,
    index: 0,
  },
  {
    description: 'Fly for the sky',
    complete: false,
    index: 0,
  }
];

export default class Crud  {
  constructor (description, status = false , index ) {
    this.description = description;
    this.complete = status;
    this.index = index;
  }

  static add () {
    if(localStorage.getItem('data')){
      const oldElement = JSON.parse(localStorage.getItem('data'));
      arrayList = oldElement;
    }

    console.log(arrayList.length);

    const input = document.getElementById('input-list').value;
    if( input === '') return arrayList;

    document.getElementById('input-list').value= '';

    arrayList.push(new Crud(input));
    localStorage.setItem('data', JSON.stringify(arrayList));
    return arrayList;
  }

  static delete () {

  }
}

