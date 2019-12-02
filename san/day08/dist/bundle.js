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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var task = san.defineComponent({\n  template: `<div class=\"container\">\n       <div class=\"detail\">\n           <h3>{{title}}</h3>\n           <div class=\"content\">\n               <p>标题：<slot name=\"title\"/></p>\n               <p>内容：<slot name=\"content\"/></p>\n               <p>时间：<slot name=\"time\"/></p>\n           </div> \n       </div>\n    </div>`,\n  initData: function () {\n    return {\n      title: \"\"\n    };\n  }\n});\nvar Menu = san.defineComponent({\n  template: `<div class='box'>\n        <h1>任务栏</h1>\n        <div class='box-content'>     \n        <task-menu s-for=\"item in items\" title=\"{{item.h1}}\">\n              <span slot='title'>{{item.title}}</span>\n              <span slot='content'>{{item.content}}</span>\n              <span slot='time'>{{item.time}}</span>\n        </task-menu>\n        </div>\n    </div>`,\n  components: {\n    'task-menu': task\n  },\n  initData: function () {\n    return {\n      items: []\n    };\n  }\n});\nvar App = new Menu({\n  data: {\n    items: [{\n      h1: \"任务一\",\n      title: \"你不知道的事儿\",\n      content: \"多的是，你不知道的是\",\n      time: \"2019-12-01 12:00:00\"\n    }, {\n      h1: \"任务二\",\n      title: \"在一起\",\n      content: \"就在一起，希望与你相遇\",\n      time: \"2019-12-01 12:00:02\"\n    }, {\n      h1: \"任务三\",\n      title: \"星月神话\",\n      content: \"等待你，不朽的神话，不知道\",\n      time: \"2019-12-02 13:00:00\"\n    }, {\n      h1: \"任务四\",\n      title: \"go back\",\n      content: \"i will catch you ,please stop\",\n      time: \"2019-12-02 14:00:00\"\n    }, {\n      h1: \"任务五\",\n      title: \"一点一点\",\n      content: \"爱你又像魔力，一点一点不记得\",\n      time: \"2019-12-10 09:00:00\"\n    }, {\n      h1: \"任务六\",\n      title: \"天天\",\n      content: \"天天想你，天天问自己，我爱你\",\n      time: \"2019-12-20 11:00:00\"\n    }]\n  }\n});\nApp.attach(document.body);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });