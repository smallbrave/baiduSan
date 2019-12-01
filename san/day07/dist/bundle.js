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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var sanInput = san.defineComponent({\r\n    template:\r\n    `<input type='text' name='inputs' value='{= inputs =}' placeholder=\"请输入\"><br>\r\n    `,\r\n    initData: function(){\r\n        return {\r\n            inputs:\"\" \r\n        }\r\n    }\r\n});\r\nvar sanCheckbox = san.defineComponent({\r\n    template:\r\n    `<div class='checkboxs'>\r\n        多选框：<br>\r\n        <input type='checkbox' id='kangkang' name='checkbox' value='kangkang' checked='{= checkboxs =}'>\r\n        <lable for='kangkang'>kangkang</lable>\r\n        <input type='checkbox' id='smallbrave' name='checkbox'  value='smallbrave' checked='{= checkboxs =}'>\r\n        <lable for='smallbrave'>smallbrave</lable>\r\n        <input type='checkbox' id='xixihaha' name='checkbox'  value='xixihaha' checked='{= checkboxs =}'>\r\n        <lable for='xixihaha'>xixihaha</lable> \r\n    </div>`,\r\n    initData: function(){\r\n        return {\r\n            checkboxs: []\r\n        }\r\n    }\r\n});\r\n\r\nvar sanRadio = san.defineComponent({\r\n    template:\r\n    `<div class='radios'>\r\n        单选框：<br>\r\n        <input type='radio' name='radio' id='kangkang' value='kangkang' checked='{= radios =}'>\r\n        <lable for='kangkang'>kangkang</lable>\r\n        <input type='radio' name='radio' id='smallbrave' value='smallbrave' checked='{= radios =}'>\r\n        <lable for='smallbrave'>smallbrave</lable>\r\n    </div>\r\n     `,\r\n    initData: function(){\r\n        return {\r\n            radios: \"kangkang\"\r\n        }\r\n    }\r\n});\r\n\r\nvar sanSelect = san.defineComponent({\r\n    template:\r\n    `<select checked='{= selects =}'>\r\n        <option value='kangkang'>kangkang</option>\r\n        <option value='smallbrave'>smallbrave</option>\r\n        <option value='xixihaha'>xixihaha</option>\r\n    </select>\r\n    `,\r\n    initData: function(){\r\n        return {\r\n            selects: \"kangkang\"  \r\n        }\r\n    }\r\n})\r\n\r\nvar MyApp = san.defineComponent({\r\n    components:{\r\n        'san-input': sanInput,\r\n        'san-radio': sanRadio,\r\n        'san-checkbox': sanCheckbox,\r\n        'san-select': sanSelect\r\n    },\r\n    template:\r\n    `\r\n    <div>\r\n       <san-input></san-input>\r\n       <san-radio></san-radio>\r\n       <san-checkbox></san-checkbox>\r\n       <san-select></san-select>\r\n    </div>  \r\n    `,\r\n});\r\n\r\nvar myApp = new MyApp();\r\nmyApp.attach(document.body);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });