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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



window.onload = function () {
  "use strict";

  var csInterface = new CSInterface();
  themeManager.init();
  var getColor = document.getElementById("getColor");
  var colorObj = document.getElementById("colorObj");
  var reflect = document.getElementById("reflect");
  var saveJSON = document.getElementById("saveJSON");
  var savedList = document.getElementById("savedList");

  var fs = __webpack_require__(/*! fs */ "fs");

  var filePath = csInterface.getSystemPath(SystemPath.EXTENSION) + "/js/";
  var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
  csInterface.evalScript("$.evalFile(\"".concat(extensionRoot, "json2.js\")")); //json2読み込み

  var json_path = "".concat(extensionRoot, "colorData.json");
  getColor.addEventListener("click", function () {
    csInterface.evalScript("$.evalFile(\"".concat(extensionRoot, "readColor.jsx\")"), function (o) {
      var obj = JSON.parse(o);
      console.log(obj);
      removeChildren(colorObj);
      Object.entries(obj).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        writeList(colorObj, value, key);
      });
    });
  });

  function removeChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  function writeList(parent, value, key) {
    var li = document.createElement("li");
    li.textContent = "".concat(key, ":").concat(value);
    parent.appendChild(li);
    li.dataset.value = value;
    li.dataset.key = key;
  }

  var CreateColorObj =
  /*#__PURE__*/
  function () {
    function CreateColorObj(btn) {
      _classCallCheck(this, CreateColorObj);

      this.btn = btn;
    }

    _createClass(CreateColorObj, [{
      key: "getColorProp",
      value: function getColorProp() {
        if (!colorObj.firstChild) {
          alert("カラー情報が登録されていません");
          return false;
        }

        var lists = document.querySelectorAll("#colorObj li");
        console.log(lists);
        var colorData = {};
        lists.forEach(function (v) {
          colorData[v.dataset.key] = v.dataset.value;
        });
        return colorData;
      }
    }]);

    return CreateColorObj;
  }();

  var AdoptColor =
  /*#__PURE__*/
  function (_CreateColorObj) {
    _inherits(AdoptColor, _CreateColorObj);

    function AdoptColor(btn) {
      var _this;

      _classCallCheck(this, AdoptColor);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AdoptColor).call(this, btn));

      _this.btn.addEventListener("click", _assertThisInitialized(_this));

      return _this;
    }

    _createClass(AdoptColor, [{
      key: "handleEvent",
      value: function handleEvent() {
        var colorData = this.getColorProp();
        Array.from(document.getElementsByClassName("adoptColor")).forEach(function (v) {
          colorData[v.id] = v.checked;
        });

        if (!colorData) {
          return;
        }

        if (!colorData.fillIn && !colorData.stroke) {
          alert("線か塗りのどちらかにチェックをつけてください");
          return false;
        }

        csInterface.evalScript("setColor(".concat(JSON.stringify(colorData), ")"));
      }
    }]);

    return AdoptColor;
  }(CreateColorObj);

  var fillIn = new AdoptColor(reflect);

  var SaveJson =
  /*#__PURE__*/
  function (_CreateColorObj2) {
    _inherits(SaveJson, _CreateColorObj2);

    function SaveJson(btn) {
      var _this2;

      _classCallCheck(this, SaveJson);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SaveJson).call(this, btn));

      _this2.btn.addEventListener("click", _assertThisInitialized(_this2));

      return _this2;
    }

    _createClass(SaveJson, [{
      key: "handleEvent",
      value: function () {
        var _handleEvent = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var colorData, jsonList;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  colorData = this.getColorProp();
                  colorData.name = document.getElementById("colorName").value;

                  if (colorData) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return");

                case 4:
                  _context.next = 6;
                  return readJson();

                case 6:
                  jsonList = _context.sent;
                  jsonList.push(colorData);
                  _context.next = 10;
                  return writeJson(JsonList);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function handleEvent() {
          return _handleEvent.apply(this, arguments);
        }

        return handleEvent;
      }()
    }, {
      key: "loadJson",
      value: function () {
        var _loadJson = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var jsonList;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return readJson();

                case 2:
                  jsonList = _context2.sent;
                  removeChildren(savedList);
                  jsonList.forEach(function (v) {
                    var topLi = document.createElement("li");
                    savedList.appendChild(topLi);
                    var radioBtn = makeRadio();
                    savedList.appendChild(radioBtn);
                    var ul = document.createElement("ul");
                    topLi.appendChild(ul);
                    Object.entries(v).forEach(function (_ref3) {
                      var _ref4 = _slicedToArray(_ref3, 2),
                          key = _ref4[0],
                          value = _ref4[1];

                      writeList(ul, value, key);
                    });
                  });

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function loadJson() {
          return _loadJson.apply(this, arguments);
        }

        return loadJson;
      }()
    }]);

    return SaveJson;
  }(CreateColorObj);

  function makeRadio() {
    var label = document.createElement("label");
    label.classList.add("topcoat-radio-button");

    var _input = document.createElement("input");

    _input.type = "radio";
    _input.name = "preset";
    label.appendChild(_input);
    var div = document.createElement("div");
    div.classList.add("topcoat-radio-button__checkmark");
    label.appendChild(div);
    return label;
  }

  function writeJson(json) {
    return new Promise(function (resolve, reject) {
      fs.writeFile(json_path, JSON.stringify(json, null, 4), function (err) {
        if (err) {
          alert(err);
          reject(false);
        } else {
          csInterface.evalScript("alert(\"your preset is saved\")");
        }

        resolve(true);
      });
    });
  }

  function readJson() {
    return new Promise(function (resolve, reject) {
      fs.readFile(json_path, "utf-8", function (err, data) {
        if (err) {
          alert(err);
          reject(false);
        }

        var objects = JSON.parse(data);
        resolve(objects);
      });
    });
  }

  var pickJson = new SaveJson(saveJSON);
  pickJson.loadJson();
};

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=dist.js.map