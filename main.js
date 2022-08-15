/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addAndRemove.js":
/*!*****************************!*\
  !*** ./src/addAndRemove.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Crud)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar arrayList = [];\n\nvar Crud = /*#__PURE__*/function () {\n  function Crud(description, index) {\n    var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n    _classCallCheck(this, Crud);\n\n    this.description = description;\n    this.complete = status;\n    this.index = index;\n  }\n\n  _createClass(Crud, null, [{\n    key: \"add\",\n    value: function add() {\n      if (localStorage.getItem('data')) {\n        var oldElement = JSON.parse(localStorage.getItem('data'));\n        arrayList = oldElement;\n      }\n\n      var input = document.getElementById('input-list').value;\n      if (input === '') return arrayList;\n      document.getElementById('input-list').value = '';\n      arrayList.push(new Crud(input));\n      this.update(arrayList);\n      localStorage.setItem('data', JSON.stringify(arrayList));\n      return arrayList;\n    }\n  }, {\n    key: \"delete\",\n    value: function _delete(index) {\n      arrayList.splice(index, 1);\n      this.update(arrayList);\n      localStorage.setItem('data', JSON.stringify(arrayList));\n      return arrayList;\n    }\n  }, {\n    key: \"update\",\n    value: function update(array) {\n      for (var i = 0; i < array.length; i += 1) {\n        array[i].index = i;\n      }\n    }\n  }, {\n    key: \"showChecked\",\n    value: function showChecked() {\n      var checkboxArray = Crud.add();\n\n      for (var i = 0; i < checkboxArray.length; i += 1) {\n        if (checkboxArray[i].complete === true) {\n          document.getElementById(\"listElement\".concat(i)).checked = true;\n          document.getElementById(\"input\".concat(i)).classList.add('line-through');\n        }\n      }\n\n      return checkboxArray;\n    }\n  }]);\n\n  return Crud;\n}();\n\n\n\n//# sourceURL=webpack://todolist-project/./src/addAndRemove.js?");

/***/ }),

/***/ "./src/checkbox.js":
/*!*************************!*\
  !*** ./src/checkbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Checkbox)\n/* harmony export */ });\n/* harmony import */ var _addAndRemove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addAndRemove.js */ \"./src/addAndRemove.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// import { get } from 'lodash';\n // eslint-disable-next-line\n\n\nvar checkboxArray;\n\nvar Checkbox = /*#__PURE__*/function () {\n  function Checkbox() {\n    _classCallCheck(this, Checkbox);\n  }\n\n  _createClass(Checkbox, null, [{\n    key: \"testCheckbox\",\n    value: function testCheckbox() {\n      _addAndRemove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showChecked();\n      document.getElementById('ul-container-list').addEventListener('click', function (e) {\n        var id = e.target.id;\n        var regex = /(?<=listElement)\\d+$/;\n        checkboxArray = _addAndRemove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add();\n\n        if (regex.test(id)) {\n          var position = id.match(regex)[0];\n          var check = document.getElementById(id).checked;\n\n          for (var i = 0; i < checkboxArray.length; i += 1) {\n            // eslint-disable-next-line\n            if (checkboxArray[i].index == position) {\n              checkboxArray[i].complete = check;\n              localStorage.setItem('data', JSON.stringify(checkboxArray));\n              document.getElementById(\"input\".concat(i)).classList.toggle('line-through');\n            }\n          }\n        }\n      });\n    }\n  }, {\n    key: \"cleanAllChecked\",\n    value: function cleanAllChecked() {\n      checkboxArray = _addAndRemove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add();\n      checkboxArray = checkboxArray.filter(function (item) {\n        return item.complete !== true;\n      });\n      _addAndRemove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update(checkboxArray);\n      localStorage.setItem('data', JSON.stringify(checkboxArray));\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_addAndRemove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add());\n    }\n  }]);\n\n  return Checkbox;\n}();\n\n\n\n//# sourceURL=webpack://todolist-project/./src/checkbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayList)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.js */ \"./src/checkbox.js\");\n/* harmony import */ var _addAndRemove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addAndRemove.js */ \"./src/addAndRemove.js\");\n/* harmony import */ var _modalMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalMenu.js */ \"./src/modalMenu.js\");\n// import _ from 'lodash';\n// import { add } from 'lodash';\n // eslint-disable-next-line\n\n\n // eslint-disable-next-line\n\n // Print the list\n\nfunction displayList(input) {\n  document.getElementById('ul-container-list').innerHTML = input.map(function (items, index) {\n    return \"\\n  <li id=\\\"\".concat(index, \"\\\"><input id=\\\"listElement\").concat(index, \"\\\" name='\").concat(index, \"' type=\\\"checkbox\\\" value=\").concat(items.complete, \"> \\n  <input id='input\").concat(index, \"' value=\\\"\").concat(items.description, \"\\\" type=\\\"text\\\" disabled=\\\"disabled\\\" class='input-list'> \\n  <i id=\\\"iconDots\").concat(index, \"\\\" class=\\\"fas fa-ellipsis-v\\\"></i></li>\\n  \");\n  }).join('');\n}\nwindow.addEventListener('DOMContenLoaded', displayList(_addAndRemove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add()));\nwindow.addEventListener('DOMContenLoaded', _checkbox_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].testCheckbox()); // Call the function Add\n\ndocument.getElementById('input-list').addEventListener('change', function () {\n  displayList(_addAndRemove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add());\n  _addAndRemove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showChecked();\n}); // Refresh the list complete\n\nvar refreshIcons = document.getElementById('refresh-list');\nvar updatingMessage = document.getElementById('updating-list-message');\nrefreshIcons.addEventListener('click', function () {\n  displayList(_addAndRemove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add());\n  _addAndRemove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showChecked();\n  updatingMessage.classList.remove('display-none');\n  refreshIcons.classList.add('fa-spin');\n  setTimeout(function () {\n    refreshIcons.classList.remove('fa-spin');\n    updatingMessage.classList.add('display-none');\n  }, 1000);\n}); // Open de Option menu\n\ndocument.getElementById('ul-container-list').addEventListener('click', function (e) {\n  var id = e.target.id;\n  var firstTime = true;\n  var regex = /(?<=iconDots)\\d+$/;\n\n  if (firstTime) {\n    if (regex.test(id)) {\n      firstTime = false;\n      var index = id.match(regex)[0];\n      _modalMenu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].startModal(index);\n    }\n  } else {\n    firstTime = true;\n  }\n}); // Call the function checkbox\n\ndocument.getElementById('clearbtn-list').addEventListener('click', function () {\n  return _checkbox_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cleanAllChecked();\n});\n\n//# sourceURL=webpack://todolist-project/./src/index.js?");

/***/ }),

/***/ "./src/modalMenu.js":
/*!**************************!*\
  !*** ./src/modalMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _addAndRemove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addAndRemove.js */ \"./src/addAndRemove.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n // eslint-disable-next-line\n\n\nvar firstTime = true;\nvar changeArray = []; // eslint-disable-next-line\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal() {\n    _classCallCheck(this, Modal);\n  }\n\n  _createClass(Modal, null, [{\n    key: \"startModal\",\n    value: function startModal(input) {\n      var _this = this;\n\n      document.getElementById('delet-message-modal').innerHTML = 'To edit the task, just click on X and then click on the task';\n      document.getElementById('delet-Container-eachelement').classList.remove('display-none');\n      this.index = input; // Close the delet menu with the delet button\n\n      var deleteBtn = document.getElementById('delet-btn-eachElement');\n\n      if (firstTime) {\n        firstTime = false;\n        deleteBtn.addEventListener('click', function () {\n          document.getElementById('ul-container-list').innerHTML = '';\n          _addAndRemove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](_this.index);\n          document.getElementById('delet-Container-eachelement').classList.add('display-none');\n          (0,_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_addAndRemove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add());\n          _addAndRemove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showChecked();\n        });\n      } // Close the menu with the x icon\n\n\n      document.getElementById('delet-x-icon').addEventListener('click', this.closeModal);\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal() {\n      document.getElementById('delet-Container-eachelement').classList.add('display-none');\n      var newValue;\n      var path;\n      firstTime = true;\n      document.getElementById('ul-container-list').addEventListener('click', function (e) {\n        var id = e.target.id;\n        var regex = /(?<=input)\\d+$/;\n\n        if (firstTime) {\n          if (regex.test(id)) {\n            firstTime = false;\n            var index = id.match(regex)[0];\n            path = document.getElementById(id);\n            path.disabled = false;\n            path.style.border = '1px solid black';\n            path.addEventListener('change', function () {\n              newValue = document.getElementById(id).value;\n              path.disabled = 'disabled';\n              path.style.border = 'none';\n              Modal.changeValue(newValue, index);\n            });\n          } else {\n            firstTime = true;\n          }\n        }\n      });\n    }\n  }, {\n    key: \"changeValue\",\n    value: function changeValue(newValue, position) {\n      changeArray = [];\n      if (newValue === '') return;\n\n      if (localStorage.getItem('data')) {\n        changeArray = JSON.parse(localStorage.getItem('data'));\n      }\n\n      for (var i = 0; i < changeArray.length; i += 1) {\n        // eslint-disable-next-line\n        if (changeArray[i].index == position) {\n          changeArray[i].description = newValue;\n          localStorage.setItem('data', JSON.stringify(changeArray));\n        }\n      }\n    }\n  }]);\n\n  return Modal;\n}();\n\n\n\n//# sourceURL=webpack://todolist-project/./src/modalMenu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\ni {\\r\\n  opacity: 50%;\\r\\n}\\r\\n\\r\\ni:hover {\\r\\n  color: rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --width-table-content: 100%;\\r\\n  --padding-table-content: 10px;\\r\\n  --border-bottom-list: 1px solid rgba(128, 128, 128, 0.164);\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100vw;\\r\\n  overflow: hidden;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  font-size: 14px;\\r\\n  background-color: rgba(192, 189, 189, 0.381);\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n/* div container */\\r\\n#container-list {\\r\\n  box-shadow: 0 0 20px;\\r\\n  background-color: white;\\r\\n  width: 80%;\\r\\n  margin: 0 auto;\\r\\n  margin-top: 5vw;\\r\\n  max-width: 500px;\\r\\n  max-height: 80vh;\\r\\n  grid-auto-rows: auto;\\r\\n\\r\\n  /* overflow-y: scroll; */\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* title of the list */\\r\\n#toDoList-title {\\r\\n  font-size: 12px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: var(--padding-table-content);\\r\\n  border-bottom: var(--border-bottom-list);\\r\\n}\\r\\n\\r\\n/* input to add books */\\r\\n#div-container-inputList {\\r\\n  display: flex;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n#icon-input {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  position: absolute;\\r\\n  right: 8px;\\r\\n  top: 50%;\\r\\n  bottom: 50%;\\r\\n  cursor: text;\\r\\n}\\r\\n\\r\\n.input-list-Main {\\r\\n  width: var(--width-table-content);\\r\\n  padding: var(--padding-table-content);\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  border-bottom: var(--border-bottom-list);\\r\\n}\\r\\n\\r\\n.input-list {\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  width: var(--width-table-content);\\r\\n  outline: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  border: none;\\r\\n  font-style: oblique;\\r\\n  opacity: 50%;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n/* ul */\\r\\n#ul-container-list {\\r\\n  list-style: none;\\r\\n  overflow-y: scroll;\\r\\n  max-height: 60vh;\\r\\n}\\r\\n\\r\\n/* li */\\r\\n#ul-container-list li {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  padding: var(--padding-table-content);\\r\\n  border-bottom: var(--border-bottom-list);\\r\\n}\\r\\n\\r\\n#ul-container-list li i {\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n#clearbtn-list {\\r\\n  border: none;\\r\\n  width: var(--width-table-content);\\r\\n  padding: var(--padding-table-content);\\r\\n  color: rgba(128, 128, 128, 0.622);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* Modal menu delet each element */\\r\\n.delet-Container-eachelement {\\r\\n  background-color: rgba(32, 29, 126, 0.084);\\r\\n  backdrop-filter: blur(0.2rem);\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.delet-btn-eachElement {\\r\\n  display: flex;\\r\\n  margin: 300px auto;\\r\\n  border: none;\\r\\n  background-color: rgb(247, 70, 70);\\r\\n  color: white;\\r\\n  border-radius: 20%;\\r\\n  padding: 10px;\\r\\n  font-weight: bold;\\r\\n  font-size: 25px;\\r\\n  box-shadow: 2px 2px 2px black;\\r\\n  text-shadow: 2px 2px 2px black;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.delet-x-icon {\\r\\n  right: 0;\\r\\n  position: absolute;\\r\\n  margin: 130px auto;\\r\\n  text-align: right;\\r\\n  margin-right: 20%;\\r\\n  font-size: 30px;\\r\\n  color: #000;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.delet-x-icon:hover {\\r\\n  color: greenyellow;\\r\\n  text-shadow: 0 0 5px rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n.delet-message-modal {\\r\\n  color: black;\\r\\n  margin: 180px auto;\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  font-size: 30px;\\r\\n  font-weight: 700;\\r\\n  text-shadow: 0 0 10px rgba(243, 9, 9, 0.826);\\r\\n}\\r\\n\\r\\n.delet-btn-eachElement:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.display-none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.updating-list-message {\\r\\n  font-style: italic;\\r\\n  opacity: 50%;\\r\\n  margin-left: auto;\\r\\n  margin-right: 2%;\\r\\n}\\r\\n\\r\\n.line-through {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;