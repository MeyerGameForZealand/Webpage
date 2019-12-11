/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Igang.htm":
/*!***********************!*\
  !*** ./src/Igang.htm ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Igang.htm";

/***/ }),

/***/ "./src/index.htm":
/*!***********************!*\
  !*** ./src/index.htm ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.htm";

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* let startElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("knap")
let nyElement: HTMLLinkElement = <HTMLLinkElement>document.getElementById("linkNyt")
let trackElement : HTMLButtonElement = <HTMLButtonElement>document.getElementById("TrackBtn")
nyElement.addEventListener("click", () => {
    let iframeElement: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("imain");
    iframeElement.src = "NytSpil.htm"
})

startElement.addEventListener("click",() => {
    let rundeElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("inputGroupSelectRunder");
    let antalSpillereElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("inputGroupSelectSpillere")
    let alertElement : HTMLDivElement = <HTMLDivElement>document.getElementById("startAlert");
    let iframeElement: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("imain")
    let runde = +rundeElement.value;
    let antal = +antalSpillereElement.value;
    console.log("kartoffel")
    iframeElement.src = "Igang.htm"

})

trackElement.addEventListener("click",() => {
    let iframeElement: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("imain");
    iframeElement.src = "Regler.htm";
    console.log("Fuck dig lorte ting")
})
 */
$('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
});


/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bundle.css";

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************!*\
  !*** multi ./src/index.htm ./src/scss/styles.scss ./src/js/index.ts ./src/NytSpil.htm ./src/Igang.htm ./src/Regler.htm ./src/Spillere.htm ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.htm */"./src/index.htm");
__webpack_require__(/*! ./src/scss/styles.scss */"./src/scss/styles.scss");
__webpack_require__(/*! ./src/js/index.ts */"./src/js/index.ts");
!(function webpackMissingModule() { var e = new Error("Cannot find module './src/NytSpil.htm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
__webpack_require__(/*! ./src/Igang.htm */"./src/Igang.htm");
!(function webpackMissingModule() { var e = new Error("Cannot find module './src/Regler.htm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './src/Spillere.htm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map