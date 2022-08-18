/**
 * @jest-environment jsdom
 */
/* eslint-disable*/

import AddAndRemove from '../addAndRemove.js';
let list;

describe('Testing the class Add&Remove', () => {
  it('Add function', () => {

    // Add 5 books 
    for (let i = 1 ; i <= 5 ; i += 1) {
      document.body.innerHTML =
      `<input id="input-list" value="libro${i}-add">` +
      `<ul id="ul-container-list"></ul>`;
      AddAndRemove.add();
    }

    list = document.querySelectorAll('#ul-container-list li');
    expect(list).toHaveLength(5);
  })

  it('Remove function', () => {
    
    // Delet 2 books in the index [0] and [3]
    AddAndRemove.delete(0);
    AddAndRemove.delete(3);
        
    list = document.querySelectorAll('#ul-container-list li');
    expect(list).toHaveLength(3);
  })

  it('update the index function', () => {
    const array = [{index: 5}, {index: 7}, {index: 500}, {index: 'go'} , {index: 3}];
    const output = [{index: 0}, {index: 1}, {index: 2}, {index: 3} , {index: 4}];
    expect(AddAndRemove.update(array)).toStrictEqual(output);
  })
});



