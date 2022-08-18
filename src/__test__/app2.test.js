/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import AddAndRemove from '../addAndRemove.js';
import ModalMenu from '../modalMenu.js';
import Checkbox from '../checkbox.js';
import './app.test.js';

let changeArray;
let list;

describe('Testing the Edit Task, updating & Clear all completed', () => {
  it('Edit function', () => {
    //Assign => changed text at specific index
      let index = 0;
      changeArray = ModalMenu.changeValue('changed text', index);

    // Act => Set local storage with new changed array
      AddAndRemove.displayList(changeArray);

    //Assert => expected - the desciption of the task at specific index
    //          recieved - the new text ('changed text')
      list = document.querySelectorAll('#ul-container-list li input');
      expect(list[index*2+1].value).toBe('changed text');
  })

  it('Completed Status function', () => {
    //Assign => Get list from Mock_localstorage and changed complete attribute at specific index
    let index = 0;
    list = JSON.parse(localStorage.getItem('data'));
    list[index].complete = true;

    // Act => Set local storage to new status
    localStorage.setItem('data', JSON.stringify(list));
    AddAndRemove.refresh();

    //Assert => expected - the complete attribute at specific index
    //          recieved - true
    const listAfter = document.querySelectorAll('#ul-container-list li input');
    expect(listAfter[index*2].value).toBe("true");
  })

  it('"Clear all completed" function', () => {
    //Assign => Set checkbox checked to true (Already done)

    // Act => cleanAllChecked checkbox
    Checkbox.cleanAllChecked();

    //Assert => expected - count = 0
    //          recieved - count of checkbox which are checked
    const listAfter = document.querySelectorAll('#ul-container-list li input');
    let count = 0;
    listAfter.forEach((element, idx) => {
      if (element.value === "true" && idx%2 === 0) {
        count += 1;
      }
    });
    expect(count).toBe(0);
  })
});



