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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/DemoFlip.tsx":
/*!*************************************!*\
  !*** ./src/components/DemoFlip.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Flip_1 = __webpack_require__(/*! ./Flip */ "./src/components/Flip.tsx");
class DemoFlip extends Flip_1.Flip {
    constructor() {
        const initState = {
            isMutable: false,
            text: "Hello",
            refs: {
                inputRef: React.createRef()
            }
        };
        super({}, initState);
        this.moveInput.bind(this);
        this.combine.bind(this);
        this.mutableJSX.bind(this);
        this.immutableJSX.bind(this);
        this.toROS.bind(this);
    }
    moveInput() {
        this.setState({ text: this.state.refs.inputRef.current.value });
    }
    combine() {
        this.moveInput();
        this.flip();
    }
    mutableJSX(refs) {
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", ref: refs.inputRef, defaultValue: this.state.text }),
            React.createElement("button", { onClick: () => this.combine() }, " Lock ")));
    }
    immutableJSX(ros) {
        return (React.createElement("div", null,
            ros.text + " ",
            React.createElement("button", { onClick: () => this.flip() }, " Unlock ")));
    }
    toROS(s) {
        const t = s.text;
        return { text: t };
    }
}
exports.DemoFlip = DemoFlip;


/***/ }),

/***/ "./src/components/Flip.tsx":
/*!*********************************!*\
  !*** ./src/components/Flip.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class Flip extends React.Component {
    constructor(props, initState) {
        super(props);
        this.state = initState;
        this.flip.bind(this);
    }
    flip() {
        if (this.state.isMutable) {
            this.setState({ isMutable: false });
        }
        else {
            this.setState({ isMutable: true });
        }
    }
    render() {
        if (this.state.isMutable) {
            return (this.mutableJSX(this.state.refs));
        }
        else {
            return (this.immutableJSX(this.toROS(this.state)));
        }
    }
}
exports.Flip = Flip;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDom = __webpack_require__(/*! react-dom */ "react-dom");
const DemoFlip_1 = __webpack_require__(/*! ./components/DemoFlip */ "./src/components/DemoFlip.tsx");
ReactDom.render(React.createElement("div", null,
    React.createElement("p", null, "Fiip Demo"),
    React.createElement(DemoFlip_1.DemoFlip, null)), document.getElementById("demo"));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map