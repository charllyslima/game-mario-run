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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _css_interactions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/interactions.scss */ \"./src/css/interactions.scss\");\n\n\nvar floorPt1 = document.querySelector(\"#floor-pt1\");\nvar floorPt2 = document.querySelector(\"#floor-pt2\");\nvar buttonStart = document.querySelector(\"#start\");\nvar buttonSound = document.querySelector(\"#sound\");\nvar audioTheme = document.querySelector(\"#theme-song\");\nvar audioPipe = document.querySelector(\"#pipe\");\nvar audioJump = document.querySelector(\"#jump\");\nvar audioMarioDie = document.querySelector(\"#mario-die\");\nwindow.addEventListener(\"load\", function () {\n  buttonStart.addEventListener(\"click\", start);\n  buttonSound.addEventListener(\"click\", soundOnOff);\n});\n\nvar start = function start() {\n  floorPt1.classList.add(\"floor-move-pt1\");\n  floorPt2.classList.add(\"floor-move-pt2\");\n};\n\nvar soundOnOff = function soundOnOff() {\n  if (buttonSound.classList.contains(\"fa-volume-high\")) {\n    buttonSound.classList.remove(\"fa-volume-high\");\n    buttonSound.classList.add(\"fa-volume-xmark\");\n    audioTheme.pause();\n  } else {\n    buttonSound.classList.add(\"fa-volume-high\");\n    buttonSound.classList.remove(\"fa-volume-xmark\");\n    audioTheme.play();\n  }\n};\n\n//# sourceURL=webpack://game-mario-run/./src/js/index.js?");

/***/ }),

/***/ "./src/css/interactions.scss":
/*!***********************************!*\
  !*** ./src/css/interactions.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://game-mario-run/./src/css/interactions.scss?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://game-mario-run/./src/css/style.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;