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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _css_interactions_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/interactions.scss */ \"./src/css/interactions.scss\");\n\n\nvar root = document.querySelector(\":root\");\nvar floorPt1 = document.querySelector(\"#floor-pt1\");\nvar floorPt2 = document.querySelector(\"#floor-pt2\");\nvar buttonStart = document.querySelector(\"#start\");\nvar buttonSound = document.querySelector(\"#sound\");\nvar audioTheme = document.querySelector(\"#theme-song\");\nvar audioPipe = document.querySelector(\"#pipe-audio\");\nvar audioJump = document.querySelector(\"#jump-audio\");\nvar audioMarioDie = document.querySelector(\"#mario-die-audio\");\nvar mario = document.querySelector(\"#mario\");\nvar marioDie = document.querySelector(\"#mario-die\");\nvar piranhaBean = document.querySelector(\"#piranha-bean\");\nvar goomba = document.querySelector(\"#goomba\");\nvar bowser = document.querySelector(\"#bowser\");\nvar princess = document.querySelector(\"#princess\");\nvar carnivorousPlant = document.querySelector(\"#carnivorous-plant\");\nvar controls = document.querySelector(\".controls\");\nvar game = document.querySelector(\".game\");\nvar score = document.querySelectorAll(\".score span\");\nvar hitboxDiv = null;\nvar atackSpeed = 4000;\nvar isStarted = false;\nwindow.addEventListener(\"load\", function () {\n  buttonStart.addEventListener(\"click\", start);\n  buttonSound.addEventListener(\"click\", soundOnOff);\n  document.addEventListener(\"keydown\", jump);\n});\n\nif (localStorage.getItem(\"high-score\")) {\n  score[0].innerHTML = localStorage.getItem(\"high-score\");\n}\n\nvar start = function start() {\n  controls.classList.add(\"hidden\");\n  game.classList.remove(\"hidden\");\n  floorPt1.classList.add(\"floor-move-pt1\");\n  floorPt2.classList.add(\"floor-move-pt2\"); // animation princess running\n\n  princess.classList.remove(\"hidden\");\n  bowser.classList.remove(\"hidden\");\n  princess.classList.add(\"running-away\");\n  bowser.classList.add(\"chasing\");\n  game.classList.add(\"start\");\n  setTimeout(function () {\n    floorPt1.classList.remove(\"floor-move-pt1\");\n    floorPt2.classList.remove(\"floor-move-pt2\");\n    setTimeout(function () {\n      audioPipe.play();\n    }, 1500);\n    setTimeout(function () {\n      mario.style.left = \"10%\";\n      hitbox();\n      floorPt1.classList.add(\"floor-move-pt1\");\n      floorPt2.classList.add(\"floor-move-pt2\");\n      setTimeout(function () {\n        game.classList.remove(\"start\");\n        activateEnemies();\n        isStarted = true;\n      }, 2000);\n    }, 2000);\n  }, 4000);\n};\n\nvar activateEnemies = function activateEnemies() {\n  var enemies = [carnivorousPlant, piranhaBean, goomba];\n  var enemie = null;\n  var especialAtack = null;\n  var loop = setInterval(function () {\n    if (especialAtack) {\n      enemies[enemie].classList.remove(\"jump\");\n      clearInterval(especialAtack);\n    }\n\n    if (!isStarted) {\n      clearInterval(loop);\n    } else {\n      if (enemie != null) {\n        if (enemie === 2) {\n          enemies[enemie].classList.remove(\"special-attack-jump\");\n        } else if (enemie === 1) {\n          enemies[enemie].classList.remove(\"special-attack-forward\");\n        } else {\n          enemies[enemie].classList.remove(\"attack\");\n        }\n\n        point();\n      }\n\n      enemie = getRndInteger(0, 2);\n\n      if (enemie === 2) {\n        enemies[enemie].classList.add(\"special-attack-jump\");\n      } else if (enemie === 1) {\n        enemies[enemie].classList.add(\"special-attack-forward\");\n      } else {\n        enemies[enemie].classList.add(\"attack\");\n      }\n    }\n  }, atackSpeed);\n};\n\nvar hitbox = function hitbox() {\n  hitboxDiv = document.createElement(\"div\");\n  hitboxDiv.id = \"hitbox\";\n  hitboxDiv.style.position = \"absolute\";\n  hitboxDiv.style.bottom = \"\".concat(mario.clientWidth / 4, \"px\");\n  hitboxDiv.style.width = \"\".concat(mario.clientWidth / 2, \"px\");\n  hitboxDiv.style.height = \"\".concat(mario.clientHeight * 2 / 3, \"px\"); //hitboxDiv.style.backgroundColor = \"red\";\n\n  hitboxDiv.style.borderRadius = \"50px\";\n  hitboxDiv.style.left = \"10.5%\";\n  game.appendChild(hitboxDiv);\n};\n\nvar isLive = setInterval(function () {\n  if (isStarted) {\n    if (elementsOverlap(hitboxDiv, carnivorousPlant)) {\n      gameOver(carnivorousPlant);\n    } else if (elementsOverlap(hitboxDiv, piranhaBean)) {\n      gameOver(piranhaBean);\n    } else if (elementsOverlap(hitboxDiv, goomba)) {\n      gameOver(goomba);\n    }\n  }\n}, 1);\n\nvar gameOver = function gameOver(enemy) {\n  audioMarioDie.play();\n  mario.src = marioDie.src;\n  enemy.style.right = window.getComputedStyle(enemy).right;\n  enemy.style.bottom = window.getComputedStyle(enemy).bottom;\n\n  if (enemy.classList.contains(\"special-attack-jump\")) {\n    enemy.classList.remove(\"special-attack-jump\");\n  } else {\n    enemy.classList.remove(\"attack\");\n  }\n\n  floorPt1.classList.remove(\"floor-move-pt1\");\n  floorPt2.classList.remove(\"floor-move-pt2\");\n  isStarted = false;\n  clearInterval(isLive);\n};\n\nvar point = function point() {\n  var onlyNumbers = /\\d+/g;\n  var onlyLetters = /[A-Za-z: ]/g;\n  var scoreNumber = +score[1].innerHTML.match(onlyNumbers).join(\"\") + 1;\n  var highScoreNumber = +score[0].innerHTML.match(onlyNumbers).join(\"\");\n\n  if (scoreNumber > highScoreNumber) {\n    score[0].innerHTML = \"\".concat(score[0].innerHTML.match(onlyLetters).join(\"\")).concat(scoreNumber);\n    localStorage.setItem(\"high-score\", score[0].innerHTML);\n  }\n\n  score[1].innerHTML = \"\".concat(score[1].innerHTML.match(onlyLetters).join(\"\")).concat(scoreNumber);\n};\n\nvar soundOnOff = function soundOnOff() {\n  if (buttonSound.classList.contains(\"fa-volume-high\")) {\n    buttonSound.classList.remove(\"fa-volume-high\");\n    buttonSound.classList.add(\"fa-volume-xmark\");\n    audioTheme.pause();\n  } else {\n    buttonSound.classList.add(\"fa-volume-high\");\n    buttonSound.classList.remove(\"fa-volume-xmark\");\n    audioTheme.play();\n  }\n};\n\nvar jump = function jump() {\n  if (!mario.classList.contains(\"jump\") && isStarted) {\n    mario.classList.add(\"jump\");\n    hitboxDiv.classList.add(\"jump\");\n    setTimeout(function () {\n      mario.classList.remove(\"jump\");\n      hitboxDiv.classList.remove(\"jump\");\n    }, 500);\n  }\n};\n\nfunction getRndInteger(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nfunction elementsOverlap(el1, el2) {\n  var domRect1 = el1.getBoundingClientRect();\n  var domRect2 = el2.getBoundingClientRect();\n  return !(domRect1.top > domRect2.bottom || domRect1.right < domRect2.left || domRect1.bottom < domRect2.top || domRect1.left > domRect2.right);\n}\n\n//# sourceURL=webpack://game-mario-run/./src/js/index.js?");

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