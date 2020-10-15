(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!***********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!************************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!****************************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/construct.js":
/*!****************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _construct; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct */ "../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!******************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!******************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct */ "../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, result);
  };
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/get.js":
/*!**********************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/get.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _get; });
/* harmony import */ var _superPropBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase */ "../../node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!***************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!***********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!**********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!***************************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!**********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!************************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!********************************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/set.js":
/*!**********************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/set.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _set; });
/* harmony import */ var _superPropBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase */ "../../node_modules/@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = Object(_superPropBase__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!************************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!*************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!**********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction */ "../../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct */ "../../node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Class, arguments, Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!*********************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!***********************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/object-assign/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "../../node_modules/react/cjs/react.production.min.js":
/*!**********************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/react/cjs/react.production.min.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var l = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    z = n ? Symbol.for("react.memo") : 60115,
    A = n ? Symbol.for("react.lazy") : 60116,
    B = "function" === typeof Symbol && Symbol.iterator;

function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  }

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var D = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    E = {};

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

F.prototype.isReactComponent = {};

F.prototype.setState = function (a, b) {
  if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function G() {}

G.prototype = F.prototype;

function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

var I = H.prototype = new G();
I.constructor = H;
l(I, F.prototype);
I.isPureReactComponent = !0;
var J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, c) {
  var e,
      d = {},
      g = null,
      k = null;
  if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = c;else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) {
      h[m] = arguments[m + 2];
    }

    d.children = h;
  }
  if (a && a.defaultProps) for (e in f = a.defaultProps, f) {
    void 0 === d[e] && (d[e] = f[e]);
  }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: d,
    _owner: J.current
  };
}

function N(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: e,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, c, e) {
  var d = _typeof(a);

  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];
    var f = b + U(d, k);
    g += T(d, f, c, e);
  } else if (null === a || "object" !== _typeof(a) ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) {
    d = d.value, f = b + U(d, k++), g += T(d, f, c, e);
  } else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}

function V(a, b, c) {
  return null == a ? 0 : T(a, "", b, c);
}

function U(a, b) {
  return "object" === _typeof(a) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function W(a, b) {
  a.func.call(a.context, b, a.count++);
}

function aa(a, b, c) {
  var e = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X(a, e, c, function (a) {
    return a;
  }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}

function X(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(P, "$&/") + "/");
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}

var Y = {
  current: null
};

function Z() {
  var a = Y.current;
  if (null === a) throw Error(C(321));
  return a;
}

var ba = {
  ReactCurrentDispatcher: Y,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: J,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: function map(a, b, c) {
    if (null == a) return a;
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function forEach(a, b, c) {
    if (null == a) return a;
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function count(a) {
    return V(a, function () {
      return null;
    }, null);
  },
  toArray: function toArray(a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function only(a) {
    if (!O(a)) throw Error(C(143));
    return a;
  }
};
exports.Component = F;
exports.Fragment = r;
exports.Profiler = u;
exports.PureComponent = H;
exports.StrictMode = t;
exports.Suspense = y;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(C(267, a));
  var e = l({}, a.props),
      d = a.key,
      g = a.ref,
      k = a._owner;

  if (null != b) {
    void 0 !== b.ref && (g = b.ref, k = J.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

    for (h in b) {
      K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
    }
  }

  var h = arguments.length - 2;
  if (1 === h) e.children = c;else if (1 < h) {
    f = Array(h);

    for (var m = 0; m < h; m++) {
      f[m] = arguments[m + 2];
    }

    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: w,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: v,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: x,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: A,
    _ctor: a,
    _status: -1,
    _result: null
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: z,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return Z().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return Z().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return Z().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return Z().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return Z().useRef(a);
};

exports.useState = function (a) {
  return Z().useState(a);
};

exports.version = "16.13.1";

/***/ }),

/***/ "../../node_modules/taro-color-ui/dist/index.umd.js":
/*!********************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/taro-color-ui/dist/index.umd.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! exports used: CuAvatar, CuButton, CuGrid, CuIcon, CuList, CuModal, CuNavigation, CuProgress, CuSteps, CuSwiper, CuSwitch, CuTabs, CuTag, CuTimeline */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! react */ "../../node_modules/react/cjs/react.production.min.js"), __webpack_require__(/*! @tarojs/taro */ "../../node_modules/@tarojs/taro/index.js"), __webpack_require__(/*! @tarojs/components */ "../../node_modules/@tarojs/components/mini/index.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "../../node_modules/react/cjs/react.production.min.js"), __webpack_require__(/*! @tarojs/taro */ "../../node_modules/@tarojs/taro/index.js"), __webpack_require__(/*! @tarojs/components */ "../../node_modules/@tarojs/components/mini/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, React, Taro, components) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      'default': e
    };
  }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var Taro__default = /*#__PURE__*/_interopDefaultLegacy(Taro);
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
    Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */


  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };

  function __rest(s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  }

  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  }

  function createCommonjsModule(fn, basedir, module) {
    return module = {
      path: basedir,
      exports: {},
      require: function require(path, base) {
        return commonjsRequire(path, base === undefined || base === null ? module.path : base);
      }
    }, fn(module, module.exports), module.exports;
  }

  function commonjsRequire() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    /* global define */
    (function () {
      var hasOwn = {}.hasOwnProperty;

      function classNames() {
        var classes = [];

        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;

          var argType = _typeof(arg);

          if (argType === 'string' || argType === 'number') {
            classes.push(arg);
          } else if (Array.isArray(arg) && arg.length) {
            var inner = classNames.apply(null, arg);

            if (inner) {
              classes.push(inner);
            }
          } else if (argType === 'object') {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }

        return classes.join(' ');
      }

      if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  });

  var CuButton = function CuButton(_a) {
    var _b;

    var _c = _a.prefixCls,
        prefixCls = _c === void 0 ? "cu-btn" : _c,
        _d = _a.size,
        size = _d === void 0 ? "normal" : _d,
        _e = _a.type,
        type = _e === void 0 ? "primary" : _e,
        _f = _a.round,
        round = _f === void 0 ? false : _f,
        _g = _a.shadow,
        shadow = _g === void 0 ? false : _g,
        _h = _a.loading,
        loading = _h === void 0 ? false : _h,
        _j = _a.nativeLoading,
        nativeLoading = _j === void 0 ? false : _j,
        _k = _a.disabled,
        disabled = _k === void 0 ? false : _k,
        _l = _a.inline,
        inline = _l === void 0 ? false : _l,
        _m = _a.customStyle,
        customStyle = _m === void 0 ? {} : _m,
        className = _a.className,
        formType = _a.formType,
        openType = _a.openType,
        lang = _a.lang,
        icon = _a.icon,
        color = _a.color,
        customColor = _a.customColor,
        onClick = _a.onClick,
        onContact = _a.onContact,
        onGetUserInfo = _a.onGetUserInfo,
        onGetPhoneNumber = _a.onGetPhoneNumber,
        onOpenSetting = _a.onOpenSetting,
        sessionFrom = _a.sessionFrom,
        sendMessageTitle = _a.sendMessageTitle,
        sendMessagePath = _a.sendMessagePath,
        sendMessageImg = _a.sendMessageImg,
        showMessageCard = _a.showMessageCard,
        appParameter = _a.appParameter,
        children = _a.children;

    var handleClick = function handleClick(event) {
      return !disabled && onClick && onClick(event);
    };

    var wrapCls = classnames(prefixCls, className, (_b = {}, _b[prefixCls + "__" + size] = size !== "normal", _b[prefixCls + "__bg-" + color] = color && type === "primary", _b[prefixCls + "__ghost-bg-" + color] = color && type === "ghost", _b[prefixCls + "__inline"] = inline, _b[prefixCls + "__disabled"] = disabled, _b[prefixCls + "__loading"] = loading, _b[prefixCls + "__round"] = round, _b[prefixCls + "__shadow-" + color] = shadow && !disabled, _b));

    var customColorStyle = function customColorStyle() {
      if (customColor) {
        return type !== "ghost" ? {
          color: "#fff",
          background: customColor
        } : {
          color: customColor,
          border: "1rpx solid " + customColor,
          background: "#fff"
        };
      }

      return {};
    };

    var IS_WEB = Taro__default['default'].getEnv() === Taro__default['default'].ENV_TYPE.WEB;
    var props = IS_WEB ? {
      lang: lang,
      formType: formType
    } : {
      lang: lang,
      formType: formType,
      openType: openType,
      disabled: disabled,
      loading: nativeLoading,
      sessionFrom: sessionFrom,
      sendMessageTitle: sendMessageTitle,
      sendMessagePath: sendMessagePath,
      sendMessageImg: sendMessageImg,
      showMessageCard: showMessageCard,
      appParameter: appParameter,
      onContact: onContact,
      onGetUserInfo: onGetUserInfo,
      onGetPhoneNumber: onGetPhoneNumber,
      onOpenSetting: onOpenSetting
    };
    return React__default['default'].createElement(components.Button, _assign({
      onClick: handleClick,
      className: wrapCls
    }, props, {
      style: Object.assign(customColorStyle(), customStyle)
    }), icon && React__default['default'].createElement(components.Text, {
      className: "cuIcon-" + icon
    }), loading && React__default['default'].createElement(components.Text, {
      className: "cuIcon-loading2 cuIconfont-spin"
    }), children);
  };

  var ListItem = function ListItem(_a) {
    var _b = _a.arrow,
        arrow = _b === void 0 ? false : _b,
        title = _a.title,
        desc = _a.desc,
        action = _a.action,
        swipeAction = _a.swipeAction,
        onClick = _a.onClick;

    var _c = __read(React__default['default'].useState({}), 2),
        touchInfo = _c[0],
        setTouchInfo = _c[1];

    var touchStart = function touchStart(e) {
      setTouchInfo(_assign(_assign({}, touchInfo), {
        startX: e.touches[0].pageX
      }));
    };

    var timer;

    var touchMove = function touchMove(e) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        var direction = e.touches[0].pageX - touchInfo.startX > 0 ? "right" : "left";
        setTouchInfo(_assign(_assign({}, touchInfo), {
          direction: direction
        }));
      }, 100);
    };

    return React__default['default'].createElement(components.View, {
      className: classnames("cu-item", {
        "move-cur": swipeAction && touchInfo.direction === "left",
        arrow: arrow
      }),
      onTouchStart: touchStart,
      onTouchMove: touchMove,
      onClick: onClick
    }, React__default['default'].createElement(components.View, {
      className: classnames("content", {
        "padding-tb-sm": desc
      })
    }, React__default['default'].createElement(components.View, null, React__default['default'].createElement(components.View, {
      className: "text-grey"
    }, title)), desc && React__default['default'].createElement(components.View, {
      className: "text-gray text-sm"
    }, desc)), action && React__default['default'].createElement(components.View, {
      className: "action text-gray text-df"
    }, action), swipeAction && swipeAction && React__default['default'].createElement(components.View, {
      className: "move"
    }, swipeAction));
  };

  var CuList = function CuList(_a) {
    var _b = _a.prefixCls,
        prefixCls = _b === void 0 ? "cu-list" : _b,
        className = _a.className,
        children = _a.children;
    var wrapCls = classnames(prefixCls, "menu", className);
    return React__default['default'].createElement(components.View, {
      className: wrapCls
    }, children);
  };

  CuList.Item = ListItem;

  var CuIcon = function CuIcon(_a) {
    var _b;

    var _c = _a.prefixCls,
        prefixCls = _c === void 0 ? "cuIcon" : _c,
        className = _a.className,
        value = _a.value,
        _d = _a.size,
        size = _d === void 0 ? 24 : _d,
        _e = _a.color,
        color = _e === void 0 ? "#888" : _e;
    var wrapCls = classnames(prefixCls + "-" + value, className, (_b = {}, _b["" + prefixCls] = prefixCls !== "cuIcon", _b));
    var style = {
      color: color,
      fontSize: size + "px"
    };
    return React__default['default'].createElement(components.Text, {
      className: wrapCls,
      style: style
    });
  };

  var CuTag = function CuTag(_a) {
    var _b;

    var _c = _a.prefixCls,
        prefixCls = _c === void 0 ? "cu-tag" : _c,
        className = _a.className,
        _d = _a.round,
        round = _d === void 0 ? false : _d,
        _e = _a.radius,
        radius = _e === void 0 ? false : _e,
        _f = _a.size,
        size = _f === void 0 ? "normal" : _f,
        _g = _a.type,
        type = _g === void 0 ? "primary" : _g,
        color = _a.color,
        children = _a.children,
        capsuleLeft = _a.capsuleLeft,
        onClick = _a.onClick;
    var wrapCls = classnames(prefixCls, (_b = {}, _b["" + className] = type !== "capsule", _b[prefixCls + "__round"] = round && type !== "capsule", _b[prefixCls + "__radius"] = radius && type !== "capsule", _b[prefixCls + "__sm"] = size === "small", _b[prefixCls + "__bg-" + color] = color && type === "primary", _b[prefixCls + "__ghost-bg-" + color] = color && type === "ghost", _b[prefixCls + "__light-bg-" + color] = color && type === "light", _b));
    var capsuleCls = type === "capsule" ? classnames("cu-capsule", className, {
      "cu-capsule__round": round,
      "cu-capsule__radius": radius
    }) : "";
    var tag = React__default['default'].createElement(components.View, {
      className: wrapCls,
      onClick: onClick
    }, children);
    var capsuleTag = React__default['default'].createElement(components.View, {
      className: capsuleCls,
      onClick: onClick
    }, React__default['default'].createElement(components.View, {
      className: wrapCls + " " + prefixCls + "__bg-" + color
    }, capsuleLeft), React__default['default'].createElement(components.View, {
      className: wrapCls + " " + prefixCls + "__ghost-bg-" + color
    }, children));
    return type === "capsule" ? capsuleTag : tag;
  };

  var CuAvatar = function CuAvatar(_a) {
    var _b;

    var _c = _a.prefixCls,
        prefixCls = _c === void 0 ? "cu-avatar" : _c,
        _d = _a.size,
        size = _d === void 0 ? "normal" : _d,
        className = _a.className,
        src = _a.src,
        round = _a.round,
        radius = _a.radius,
        text = _a.text,
        color = _a.color,
        children = _a.children;
    var wrapCls = classnames(prefixCls = "cu-avatar", className, (_b = {}, _b[prefixCls + "__round"] = round, _b[prefixCls + "__radius"] = radius, _b[prefixCls + "__" + size] = size !== "normal", _b[prefixCls + "__bg-" + color] = color, _b));
    return React__default['default'].createElement(components.View, {
      className: wrapCls,
      style: {
        backgroundImage: "url(" + src + ")"
      }
    }, text ? React__default['default'].createElement(components.Text, {
      className: "text"
    }, text) : children);
  };

  CuAvatar.Group = function (_a) {
    var children = _a.children;
    return React__default['default'].createElement(components.View, {
      className: "cu-avatar-group"
    }, children);
  };

  var CuProgress = function CuProgress(_a) {
    var _b;

    var _c = _a.prefixCls,
        prefixCls = _c === void 0 ? "cu-progress" : _c,
        _d = _a.color,
        color = _d === void 0 ? "red" : _d,
        _e = _a.round,
        round = _e === void 0 ? false : _e,
        _f = _a.radius,
        radius = _f === void 0 ? false : _f,
        _g = _a.size,
        size = _g === void 0 ? "normal" : _g,
        _h = _a.striped,
        striped = _h === void 0 ? false : _h,
        _j = _a.showProportion,
        showProportion = _j === void 0 ? true : _j,
        _k = _a.value,
        value = _k === void 0 ? 0 : _k,
        className = _a.className;
    var wrapCls = classnames(prefixCls, className, (_b = {}, _b[prefixCls + "__" + size] = size !== "normal", _b[prefixCls + "__round"] = round, _b[prefixCls + "__radius"] = radius, _b[prefixCls + "__striped"] = striped, _b));
    var proportion;

    if (value <= 1) {
      proportion = +value * 100 + "%";
    } else {
      proportion = "100%";
    }

    return React__default['default'].createElement(components.View, {
      className: wrapCls
    }, React__default['default'].createElement(components.View, {
      className: classnames(prefixCls + "__bg-" + color),
      style: {
        width: proportion
      }
    }, showProportion && proportion));
  };

  var CuSwitch = function CuSwitch(_a) {
    var _b = _a.prefixCls,
        prefixCls = _b === void 0 ? "cu-switch" : _b,
        _c = _a.color,
        color = _c === void 0 ? "#39b54a" : _c,
        _d = _a.checked,
        checked = _d === void 0 ? false : _d,
        _e = _a.showIcon,
        showIcon = _e === void 0 ? true : _e,
        _f = _a.disabled,
        disabled = _f === void 0 ? false : _f,
        className = _a.className,
        onChange = _a.onChange;
    var setStateCallback = React.useRef();

    var _g = __read(React.useState(checked), 2),
        _checked = _g[0],
        set_Checked = _g[1];

    React.useEffect(function () {
      if (setStateCallback.current) {
        setStateCallback.current(_checked);
        setStateCallback.current = undefined;
      }
    }, [_checked]);
    /** 切换状态 */

    var switchState = function switchState() {
      if (disabled) {
        return;
      }

      set_Checked(!_checked);
      setStateCallback.current = onChange;
    };

    var wrapCls = classnames(prefixCls, className, {
      checked: _checked,
      disabled: disabled
    });
    return React__default['default'].createElement(components.View, {
      className: wrapCls,
      style: {
        backgroundColor: _checked ? color : "#8799a3"
      }
    }, React__default['default'].createElement(components.View, {
      className: "fui-switch",
      style: {
        justifyContent: _checked ? "flex-start" : "flex-end"
      },
      onClick: switchState
    }, showIcon && React__default['default'].createElement(CuIcon, {
      value: _checked ? "check" : "close",
      color: "#fff",
      size: "12"
    })));
  };

  var CuTimelineItem = function CuTimelineItem(_a) {
    var left = _a.left,
        _b = _a.color,
        color = _b === void 0 ? "#f1f1f1" : _b,
        _c = _a.shadow,
        shadow = _c === void 0 ? false : _c,
        children = _a.children;
    return React__default['default'].createElement(components.View, {
      className: "cu-item"
    }, React__default['default'].createElement(components.View, {
      className: "left"
    }, left ? left : React__default['default'].createElement(CuIcon, {
      value: "radioboxfill",
      size: "15",
      color: color
    })), children && React__default['default'].createElement(components.View, {
      className: classnames("content", {
        "shadow-blur": shadow
      }),
      style: {
        backgroundColor: color
      }
    }, children));
  };

  var CuTimeline = function CuTimeline(_a) {
    var _b = _a.prefixCls,
        prefixCls = _b === void 0 ? "cu-timeline" : _b,
        className = _a.className,
        time = _a.time,
        children = _a.children;
    var wrapCls = classnames(prefixCls, className);
    return React__default['default'].createElement(components.View, {
      className: wrapCls
    }, React__default['default'].createElement(components.View, {
      className: "cu-time"
    }, time), children);
  };

  CuTimeline.Item = CuTimelineItem;

  var CuTimelineItem$1 = function CuTimelineItem$1(_a) {
    var _b;

    var _c = _a.type,
        type = _c === void 0 ? "normal" : _c,
        _d = _a.activeColor,
        activeColor = _d === void 0 ? "blue" : _d,
        _e = _a.status,
        status = _e === void 0 ? "wait" : _e,
        _f = _a.active,
        active = _f === void 0 ? false : _f,
        _g = _a.index,
        index = _g === void 0 ? 0 : _g,
        title = _a.title,
        children = _a.children;
    var ICONS;

    (function (ICONS) {
      ICONS["wait"] = "radioboxfill";
      ICONS["process"] = "usefullfill";
      ICONS["finish"] = "roundcheckfill";
      ICONS["error"] = "roundclosefill";
    })(ICONS || (ICONS = {}));

    return React__default['default'].createElement(components.View, {
      className: classnames("cu-item", (_b = {}, _b["text-" + activeColor] = active, _b))
    }, type === "normal" ? React__default['default'].createElement(CuIcon, {
      className: "iconfont",
      value: ICONS[status],
      size: "20"
    }) : React__default['default'].createElement(components.Text, {
      className: classnames("num", {
        err: status === "error"
      })
    }, index + 1), title, React__default['default'].createElement(components.View, {
      className: "desc"
    }, children));
  };

  var CuSteps = function CuSteps(_a) {
    var _b = _a.current,
        current = _b === void 0 ? 0 : _b,
        _c = _a.activeColor,
        activeColor = _c === void 0 ? "blue" : _c,
        _d = _a.type,
        type = _d === void 0 ? "normal" : _d,
        _e = _a.arrow,
        arrow = _e === void 0 ? false : _e,
        children = _a.children;

    if (children) {
      children.map(function (item, index) {
        item.props.activeColor = activeColor;
        item.props.type = type;
        item.props.index = index;

        if (index <= current) {
          item.props.active = true;
        }
      });
    }

    return React__default['default'].createElement(components.View, {
      className: classnames("cu-steps", {
        "steps-arrow": arrow
      })
    }, children);
  };

  CuSteps.Item = CuTimelineItem$1;

  var CuModal = function CuModal(_a) {
    var _b = _a.position,
        position = _b === void 0 ? "center" : _b,
        _c = _a.showAction,
        showAction = _c === void 0 ? true : _c,
        _d = _a.cancelText,
        cancelText = _d === void 0 ? "取消" : _d,
        _e = _a.confirmText,
        confirmText = _e === void 0 ? "确定" : _e,
        _f = _a.closeOnClickOverlay,
        closeOnClickOverlay = _f === void 0 ? true : _f,
        cancelColor = _a.cancelColor,
        confirmColor = _a.confirmColor,
        className = _a.className,
        title = _a.title,
        isOpened = _a.isOpened,
        children = _a.children,
        onClose = _a.onClose,
        onCancel = _a.onCancel,
        onConfirm = _a.onConfirm;

    var _g = __read(React__default['default'].useState(isOpened), 2),
        _isOpened = _g[0],
        setOpened = _g[1];

    React__default['default'].useEffect(function () {
      setOpened(isOpened);
    }, [isOpened]);

    var close = function close() {
      setOpened(!_isOpened);
      onClose && onClose();
    };

    var cancel = function cancel(e) {
      e.stopPropagation();
      onCancel && onCancel();
    };

    var confirm = function confirm(e) {
      e.stopPropagation();
      onConfirm && onConfirm();
    };

    return React__default['default'].createElement(components.View, {
      onClick: closeOnClickOverlay ? close : void 0,
      className: classnames("cu-modal", className, {
        "bottom-modal": position === "bottom",
        show: _isOpened
      })
    }, React__default['default'].createElement(components.View, {
      className: "cu-dialog"
    }, title && position === "center" && React__default['default'].createElement(components.View, {
      className: "cu-bar justify-end"
    }, React__default['default'].createElement(components.View, {
      className: "content"
    }, title)), position === "bottom" && showAction && React__default['default'].createElement(components.View, {
      className: "cu-bar"
    }, React__default['default'].createElement(components.View, {
      className: "action text-green",
      style: {
        color: confirmColor
      },
      onClick: confirm
    }, confirmText), React__default['default'].createElement(components.View, {
      className: "action text-blue",
      style: {
        color: cancelColor
      },
      onClick: cancel
    }, cancelText)), React__default['default'].createElement(components.View, {
      className: "padding"
    }, children), position === "center" && showAction && React__default['default'].createElement(components.View, {
      className: "btns flex"
    }, React__default['default'].createElement(components.View, {
      className: "flex-sub padding text-red",
      style: {
        color: cancelColor
      },
      onClick: cancel
    }, cancelText), React__default['default'].createElement(components.View, {
      className: "flex-sub padding text-green",
      style: {
        color: confirmColor
      },
      onClick: confirm
    }, confirmText))));
  };

  var CuGrid = function CuGrid(_a) {
    var className = _a.className,
        _b = _a.columnNum,
        columnNum = _b === void 0 ? 3 : _b,
        _c = _a.border,
        border = _c === void 0 ? true : _c,
        _d = _a.badgeColor,
        badgeColor = _d === void 0 ? "#dd514c" : _d,
        _e = _a.data,
        data = _e === void 0 ? [] : _e,
        _onClick = _a.onClick;
    return React__default['default'].createElement(components.View, {
      className: classnames("grid", "col-" + columnNum, className, {
        "no-border": !border
      })
    }, data.map(function (item, index) {
      return React__default['default'].createElement(components.View, {
        className: "cu-item",
        key: index,
        onClick: function onClick() {
          _onClick && _onClick(item, index);
        }
      }, React__default['default'].createElement(components.View, {
        className: "icon"
      }, typeof item.icon === "string" ? React__default['default'].createElement(components.Image, {
        className: "img",
        src: item.icon
      }) : item.icon, !!item.badge && item.badge > 0 && React__default['default'].createElement(components.View, {
        className: "cu-tag badge",
        style: Object.assign({
          backgroundColor: badgeColor
        }, item.badge === 1 ? {
          width: "16rpx",
          height: "16rpx",
          padding: 0
        } : {})
      }, item.badge > 1 && React__default['default'].createElement(components.Block, null, item.badge > 99 ? "99+" : item.badge))), React__default['default'].createElement(components.Text, null, item.name));
    }));
  };

  var CuSwiper = function CuSwiper(_a) {
    var className = _a.className,
        _b = _a.images,
        images = _b === void 0 ? [] : _b,
        _c = _a.dotStyle,
        dotStyle = _c === void 0 ? "round-dot" : _c,
        _d = _a.type,
        type = _d === void 0 ? "screen" : _d,
        _onClick2 = _a.onClick,
        swiperProps = __rest(_a, ["className", "images", "dotStyle", "type", "onClick"]);

    var _e = __read(React__default['default'].useState(0), 2),
        currentIndex = _e[0],
        setCurrentIndex = _e[1];

    var onChange = function onChange(_a) {
      var _b;

      var current = _a.detail.current;
      (_b = swiperProps.onChange) === null || _b === void 0 ? void 0 : _b.call(swiperProps, current);
      setCurrentIndex(current);
    };

    return React__default['default'].createElement(components.Swiper, _assign({
      className: classnames("cu-swiper", type + "-swiper", dotStyle)
    }, swiperProps, {
      onChange: onChange
    }), images.map(function (src, index) {
      return React__default['default'].createElement(components.SwiperItem, {
        className: classnames("cu-swiper-item", {
          cur: index === currentIndex
        }),
        key: index,
        onClick: function onClick() {
          _onClick2 && _onClick2(index);
        }
      }, type === "card" ? React__default['default'].createElement(components.View, {
        className: "swiper-item"
      }, React__default['default'].createElement(components.Image, {
        src: src,
        mode: "aspectFill"
      })) : React__default['default'].createElement(components.Image, {
        src: src,
        mode: "aspectFill"
      }));
    }));
  };

  var CuTabs = function CuTabs(_a) {
    var className = _a.className,
        _b = _a.center,
        center = _b === void 0 ? false : _b,
        _c = _a.color,
        color = _c === void 0 ? "#000" : _c,
        _d = _a.activeColor,
        activeColor = _d === void 0 ? "#0081ff" : _d,
        _e = _a.tabs,
        tabs = _e === void 0 ? [] : _e,
        _f = _a.current,
        current = _f === void 0 ? 0 : _f,
        _g = _a.swipeable,
        swipeable = _g === void 0 ? true : _g,
        _h = _a.animated,
        animated = _h === void 0 ? true : _h,
        _j = _a.scroll,
        scroll = _j === void 0 ? false : _j,
        _k = _a.height,
        height = _k === void 0 ? "calc(100vh - 45PX)" : _k,
        _l = _a.backgroundColor,
        backgroundColor = _l === void 0 ? "#fff" : _l,
        _m = _a.easingFunction,
        easingFunction = _m === void 0 ? "default" : _m,
        onChange = _a.onChange,
        children = _a.children;

    var _o = __read(React__default['default'].useState(current), 2),
        tabCur = _o[0],
        setTabCur = _o[1];

    var _p = __read(React__default['default'].useState(0), 2),
        srollLeft = _p[0],
        setSrollLeft = _p[1];
    /** 判断是不是第一次渲染组件 */


    var isFirstRender = React__default['default'].useRef(true);
    React__default['default'].useEffect(function () {
      setSrollLeft((tabCur - 1) * 60);

      if (onChange && !isFirstRender.current) {
        onChange(tabs[tabCur], tabCur);
      }

      isFirstRender.current = false;
    }, [tabCur]);

    var tabSelect = function tabSelect(idx) {
      setTabCur(idx);
    };

    var getTabItems = function getTabItems() {
      var _a = __read(React__default['default'].useState([]), 2),
          items = _a[0],
          setItems = _a[1];

      React__default['default'].useEffect(function () {
        if (children) {
          if (!Array.isArray(children)) {
            setItems([children]);
          } else {
            var items_1 = [];
            tabs.map(function (_a) {
              var key = _a.key;
              var item = children.find(function (i) {
                return i.key === key;
              });
              item && items_1.push(item);
            });
            setItems(items_1);
          }
        }
      }, []);
      return items;
    };

    var tabItems = getTabItems();
    var tabItemNode = React__default['default'].createElement(React__default['default'].Fragment, null, tabs.map(function (item, index) {
      return React__default['default'].createElement(components.View, {
        className: classnames("cu-item", {
          cur: tabCur === index
        }),
        style: Object.assign({
          color: tabCur === index ? activeColor : color
        }, !center ? {
          textAlign: "center",
          flex: 1
        } : {}),
        "data-id": index,
        onClick: function onClick(e) {
          return tabSelect(e.currentTarget.dataset.id);
        }
      }, item.title);
    }));
    return React__default['default'].createElement(components.View, null, !scroll && React__default['default'].createElement(components.View, {
      className: classnames("cu-tabs", className, {
        "text-center": center
      }),
      style: Object.assign({
        backgroundColor: backgroundColor
      }, !center ? {
        display: "flex"
      } : {})
    }, tabItemNode), scroll && React__default['default'].createElement(components.ScrollView, {
      scrollX: true,
      className: classnames("cu-scroll-tabs", className, {
        "text-center": center
      }),
      scrollWithAnimation: true,
      scrollLeft: srollLeft,
      style: {
        backgroundColor: backgroundColor
      }
    }, tabItemNode), swipeable && React__default['default'].createElement(components.Swiper, {
      current: tabCur,
      duration: animated ? 300 : 0,
      easingFunction: easingFunction,
      onChange: function onChange(e) {
        return tabSelect(e.detail.current);
      },
      style: {
        height: height
      }
    }, tabItems.map(function (item) {
      return React__default['default'].createElement(components.SwiperItem, {
        key: item.key,
        className: "cu-tabs-pane",
        style: {
          height: height
        }
      }, item);
    })), !swipeable && tabItems.map(function (item, index) {
      return React__default['default'].createElement(React__default['default'].Fragment, {
        key: item.key
      }, index === tabCur && React__default['default'].createElement(components.View, {
        className: "cu-tabs-pane",
        style: {
          height: height
        }
      }, item));
    }));
  };

  var CuNavigation = function CuNavigation(_a) {
    var _b = _a.color,
        color = _b === void 0 ? "#000" : _b,
        _c = _a.isBack,
        isBack = _c === void 0 ? true : _c,
        bgColor = _a.bgColor,
        bgImage = _a.bgImage,
        children = _a.children,
        leftSolt = _a.leftSolt,
        rightSolt = _a.rightSolt;
    var style = React__default['default'].useMemo(function () {
      var systemInfo = Taro__default['default'].getSystemInfoSync();
      var ios = !!(systemInfo.system.toLowerCase().search("ios") + 1);
      var rect;

      try {
        rect = Taro__default['default'].getMenuButtonBoundingClientRect ? Taro__default['default'].getMenuButtonBoundingClientRect() : null;

        if (rect === null) {
          throw "getMenuButtonBoundingClientRect error";
        } //取值为0的情况  有可能width不为0 top为0的情况


        if (!rect.width || !rect.top || !rect.left || !rect.height) {
          throw "getMenuButtonBoundingClientRect error";
        }
      } catch (error) {
        var gap = 0; //胶囊按钮上下间距 使导航内容居中

        var width = 96; //胶囊的宽度

        if (systemInfo.platform === "android") {
          gap = 8;
          width = 96;
        } else if (systemInfo.platform === "devtools") {
          if (ios) {
            gap = 5.5; //开发工具中ios手机
          } else {
            gap = 7.5; //开发工具中android和其他手机
          }
        } else {
          gap = 4;
          width = 88;
        }

        if (!systemInfo.statusBarHeight) {
          //开启wifi的情况下修复statusBarHeight值获取不到
          systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
        }

        rect = {
          //获取不到胶囊信息就自定义重置一个
          bottom: systemInfo.statusBarHeight + gap + 32,
          height: 32,
          left: systemInfo.windowWidth - width - 10,
          right: systemInfo.windowWidth - 10,
          top: systemInfo.statusBarHeight + gap,
          width: width
        };
        console.log("error", error);
        console.log("rect", rect);
      }

      var navBarHeight = "";

      if (!systemInfo.statusBarHeight) {
        systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;

        navBarHeight = function () {
          var gap = rect.top - systemInfo.statusBarHeight;
          return 2 * gap + rect.height;
        }();

        systemInfo.statusBarHeight = 0;
        systemInfo.navBarExtendHeight = 0; //下方扩展4像素高度 防止下方边距太小
      } else {
        navBarHeight = function () {
          var gap = rect.top - systemInfo.statusBarHeight;
          return systemInfo.statusBarHeight + 2 * gap + rect.height;
        }();

        if (ios) {
          systemInfo.navBarExtendHeight = 4; //下方扩展4像素高度 防止下方边距太小
        } else {
          systemInfo.navBarExtendHeight = 0;
        }
      }

      var style = {
        color: color,
        boxSizing: "border-box",
        height: +navBarHeight + "px",
        paddingTop: systemInfo.statusBarHeight + "px"
      };

      if (bgColor && !bgImage) {
        style.background = bgColor;
      }

      if (bgImage) {
        style.backgroundImage = "url(" + bgImage + ")";
        style.backgroundSize = "cover";
      }

      return style;
    }, []);
    return React__default['default'].createElement(components.View, {
      className: "cu-custom",
      style: {
        height: style.height
      }
    }, React__default['default'].createElement(components.View, {
      className: "cu-bar fixed",
      style: style
    }, React__default['default'].createElement(components.View, {
      className: "action",
      onClick: function onClick() {
        return isBack ? Taro__default['default'].navigateBack({
          delta: 1
        }) : void 0;
      }
    }, isBack && React__default['default'].createElement(components.Text, {
      className: "cuIcon-back"
    }), leftSolt), React__default['default'].createElement(components.View, {
      className: "content",
      style: {
        top: style.paddingTop
      }
    }, children), rightSolt));
  };

  exports.CuAvatar = CuAvatar;
  exports.CuButton = CuButton;
  exports.CuGrid = CuGrid;
  exports.CuIcon = CuIcon;
  exports.CuList = CuList;
  exports.CuModal = CuModal;
  exports.CuNavigation = CuNavigation;
  exports.CuProgress = CuProgress;
  exports.CuSteps = CuSteps;
  exports.CuSwiper = CuSwiper;
  exports.CuSwitch = CuSwitch;
  exports.CuTabs = CuTabs;
  exports.CuTag = CuTag;
  exports.CuTimeline = CuTimeline;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "../../node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var _typeof = __webpack_require__(/*! /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "../../node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ })

}]);
//# sourceMappingURL=vendors.js.map