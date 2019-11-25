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

eval("var Son = san.defineComponent({\r\n    template: \r\n    `\r\n    <div class='child'>\r\n            <span>子组件：</span>\r\n            <input type='text' value=\"{= message =}\">\r\n            <button on-click='askParent'>通知父组件</button><br/>  \r\n    </div>\r\n    `,\r\n    initData: function(){\r\n        return {\r\n            message: \"\",\r\n        }\r\n    },\r\n    askParent: function(){\r\n        var msg = this.data.get('message');\r\n        this.dispatch(\"UI:msgChange\",msg);      //向父组件传递信息\r\n    }\r\n})\r\n\r\nvar Father = san.defineComponent({\r\n    components:{\r\n        'son': Son\r\n    },\r\n    template:\r\n    `<div class='father'>\r\n        <son></son>\r\n        <span>我是父组件:</span><input type='text' value=\"{{default}}\">\r\n    </div>\r\n    `,\r\n    initData: function(){\r\n        return {\r\n            default: \"静静等待用户输入\",\r\n        }\r\n    },\r\n    messages: {                //通过messages构建进行一个传递信息的捕获\r\n        \"UI:msgChange\": function(args){\r\n            var text = args.value;\r\n            this.data.set(\"default\",text);\r\n            this.dispatch(\"UI:msgChange\",text);\r\n        }\r\n    }\r\n})\r\nvar MyApp = san.defineComponent({\r\n    components:{\r\n        'father':Father,\r\n    },\r\n    template:\r\n    `<div class='grand'>\r\n        <father></father>\r\n        <span>我是更高级的父组件：</span><input type=\"text\" value=\"{{default}}\">\r\n    </div>\r\n    `,\r\n    initData:function(){\r\n        return{\r\n            default: \"我也静静等待用户输入\" \r\n        }\r\n    },\r\n    messages: {\r\n        \"UI:msgChange\":function(args){\r\n            var text = args.value;\r\n            this.data.set(\"default\",text);\r\n        }\r\n    }\r\n\r\n})\r\nvar myApp = new MyApp();\r\nmyApp.attach(document.body);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });