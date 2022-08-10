// import _ from 'lodash';
import './style.css';
import Crud  from './addAndRemove.js';

// const arrayList = [
//   {
//     description: 'Wash the dishes',
//     complete: false,
//     index: 0,
//   }
// ];

function displayList() {
  document.getElementById('ul-container-list').innerHTML = arrayList.map((items) => `<li id="listElement${items.index}"><input name="listElement${items.index}" type="checkbox"> ${items.description} <i class="fas fa-ellipsis-v"></i></li>`).join('');
}
displayList();


console.log(Crud.add());


document.getElementById('ul-container-list').addEventListener('click', (e) => {
  document.getElementById(`${e.target.name}`).classList.toggle('text-crossLine');
});

document.getElementById('clearbtn-list').addEventListener('click', () => {
  document.getElementById('ul-container-list').innerHTML = (
    '<li class="testing-btn"> Testing delete list for 2 seconds </li>'
  );
  setInterval(displayList, 2000);
});
