/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import AddAndRemove from '../addAndRemove.js';
import ModalMenu from '../modalMenu.js';
let changeArray;

describe('Testing the class Add&Remove', () => {
  it('Edit function', () => {
    // Arrange
    document.body.innerHTML =
      `<input id="input-list" value="first text">` +
      `<ul id="ul-container-list"></ul>`;

      // Act
      AddAndRemove.add();
      changeArray = ModalMenu.changeValue('changed text', 0);
      
      // Assert
      expect(changeArray[0].description).toBe('changed text');
  })

  it('Completed Status function', () => {

  })

  it('"Clear all completed" function', () => {

  })
});



