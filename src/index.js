import _ from 'lodash';
import './style.css';



const arrayList = [
  {
    description: "Wash the dishes",
    complete: false,
    index: 0,
  },
  {
    description: "Complete the project",
    complete: false,
    index: 1,
  },
  {
    description: "Take a walk",
    complete: false,
    index: 2,
  }
];

function displayList () {
  document.getElementById('ul-container-list').innerHTML = arrayList.map((items) => 
    `<li id="listElement${items.index}"><input name="listElement${items.index}" type="checkbox"> ${items.description} <i class="fas fa-ellipsis-v"></i></li>`
  ).join('');
};
displayList ()

document.getElementById('ul-container-list').addEventListener('click',(e) => {
  // document.getElementById(`${e.target.value}`).classList.toggle('text-crossLine');
  console.log(e.target.name);
});

document.getElementById('clearbtn-list').addEventListener('click', () => {
  document.getElementById('ul-container-list').innerHTML = (
    '<li class="testing-btn"> Testing delete list for 2 seconds </li>'
  );
  setInterval(displayList,2000);
});



