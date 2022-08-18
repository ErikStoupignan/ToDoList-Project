/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import AddAndRemove from '../addAndRemove.js';
import ModalMenu from '../modalMenu.js';
import './app.test.js';

let changeArray;
let list;

describe('Testing the Edit Task, updating & Clear all completed', () => {
  it('Edit function', () => {
      let index = 0;
      changeArray = ModalMenu.changeValue('changed text', index);
      AddAndRemove.displayList(changeArray);
      list = document.querySelectorAll('#ul-container-list li input');
      expect(list[index*2+1].value).toBe('changed text');
  })

  it('Completed Status function', () => {
    let index = 0;
    list = JSON.parse(localStorage.getItem('data'));
    list[index].complete = true;
    localStorage.setItem('data', JSON.stringify(list));
    AddAndRemove.refresh();
    const listAfter = document.querySelectorAll('#ul-container-list li input');
    expect("true").toBe(listAfter[index*2].value);
  })

  // it('"Clear all completed" function', () => {

  // })
});



