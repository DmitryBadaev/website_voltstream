/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const accordion = () => {
  const triggers = document.querySelectorAll('.questions-block'),
        contentAccordion = document.querySelectorAll('.questions-block__descr');
  triggers.forEach((e, i) => {
    e.addEventListener('click', () => {
      e.classList.toggle('active');
      contentAccordion[i].classList.toggle('active');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/calcScroll */ "./src/js/modules/calcScroll.js");


function burger() {
  const burgerBtn = document.querySelector('.menu__burger'),
        burgerMenu = document.querySelector('.menu__body'),
        menuLink = document.querySelectorAll('.menu__link'),
        body = document.querySelector('body'),
        phone = document.querySelector('.menu-block__tel'),
        linkDescr = document.querySelector('.menu-block__descr'),
        scroll = (0,_modules_calcScroll__WEBPACK_IMPORTED_MODULE_0__.calcScroll)();

  function openMenu() {
    burgerBtn.classList.add('active');
    burgerMenu.classList.add('active');
    body.classList.add('lock');
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
  }

  function closeMenu() {
    burgerBtn.classList.remove('active');
    burgerMenu.classList.remove('active');
    body.classList.remove('lock');
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
  }

  burgerBtn.addEventListener('click', () => {
    if (burgerBtn.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  menuLink.forEach(e => {
    e.addEventListener('click', () => {
      closeMenu();
    });
  });
  phone.addEventListener('click', () => {
    closeMenu();
  });
  linkDescr.addEventListener('click', () => {
    closeMenu();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calcScroll.js":
/*!**************************************!*\
  !*** ./src/js/modules/calcScroll.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcScroll": function() { return /* binding */ calcScroll; }
/* harmony export */ });
function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}



/***/ }),

/***/ "./src/js/modules/map.js":
/*!*******************************!*\
  !*** ./src/js/modules/map.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function map() {}

/* harmony default export */ __webpack_exports__["default"] = (map);

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/calcScroll */ "./src/js/modules/calcScroll.js");


function popup(triggerSelector, popupSelector) {
  const trigger = document.querySelectorAll(triggerSelector),
        popup = document.querySelector(popupSelector),
        btnClose = document.querySelector('.popup__close'),
        popupImage = document.querySelector('.popup__image'),
        scroll = (0,_modules_calcScroll__WEBPACK_IMPORTED_MODULE_0__.calcScroll)();
  trigger.forEach(i => {
    i.addEventListener('click', () => {
      popup.classList.add('active');
      document.querySelector('body').classList.add('lock');
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;

      if (i.classList.contains('slider__slide')) {
        popupImage.src = i.childNodes[1].src;
      }
    });
  });
  document.addEventListener('click', e => {
    if (e.target == btnClose || e.target == popup) {
      popup.classList.remove('active');
      document.querySelector('body').classList.remove('lock');
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (popup);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup */ "./src/js/modules/popup.js");
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/map */ "./src/js/modules/map.js");




window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_popup__WEBPACK_IMPORTED_MODULE_2__["default"])('.header__button', '.popup__consultation');
  (0,_modules_popup__WEBPACK_IMPORTED_MODULE_2__["default"])('.menu-block__descr', '.popup__consultation');
  (0,_modules_popup__WEBPACK_IMPORTED_MODULE_2__["default"])('.slider__slide', '.popup__img');
  (0,_modules_map__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map