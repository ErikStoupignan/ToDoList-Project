
const arrayList = [
  {
    description: 'Wash the dishes',
    complete: false,
    index: 0,
  }
];


export default class Crud  {
  constructor () {
  }

  static add () {
    console.log(arrayList);
    return arrayList;
  }
}

