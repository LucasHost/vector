/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("const burger = document.getElementById('navToggle');\r\nconst navMobile = document.getElementById('navMobile');\r\n\r\nburger.addEventListener('click', event => {\r\n    document.body.classList.toggle('show-nav');\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/scroll.js":
/*!*********************************!*\
  !*** ./src/assets/js/scroll.js ***!
  \*********************************/
/***/ (function() {

eval("const anchors = document.querySelectorAll('a[href*=\"#\"]')\r\n\r\nfor (let anchor of anchors) {\r\n  anchor.addEventListener('click', function (e) {\r\n    e.preventDefault()\r\n    \r\n    const blockID = anchor.getAttribute('href').substr(1)\r\n    \r\n    document.getElementById(blockID).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n    })\r\n    document.body.classList.remove('show-nav');\r\n  })\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/scroll.js"]();
/******/ 	
/******/ })()
;
