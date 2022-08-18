/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import AddAndRemove from '../addAndRemove.js';
import ModalMenu from '../modalMenu.js';
import './app.test.js';

let changeArray;
let list;

describe('Testing the class Add&Remove', () => {
  it('Edit function', () => {
      let index = 0;
      changeArray = ModalMenu.changeValue('changed text', index);
      AddAndRemove.displayList(changeArray);
      list = document.querySelectorAll('#ul-container-list li input');
      expect(list[index*2+1].value).toBe('changed text');
  })

  // it('Completed Status function', () => {

  // })

  // it('"Clear all completed" function', () => {

  // })
});



