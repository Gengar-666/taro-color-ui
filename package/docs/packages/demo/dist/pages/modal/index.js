(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/modal/index"],{

/***/ "../../node_modules/babel-loader/lib/index.js!./src/pages/modal/index.tsx":
/*!*********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/babel-loader/lib!./src/pages/modal/index.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_obito_Desktop_demo_taro_color_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/obito/Desktop/demo/taro-color-ui/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_color_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taro-color-ui */ "../../node_modules/taro-color-ui/dist/index.umd.js");
/* harmony import */ var taro_color_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__);





var Index = function Index() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_Users_obito_Desktop_demo_taro_color_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      showModal1 = _React$useState2[0],
      setModal1State = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = Object(_Users_obito_Desktop_demo_taro_color_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState3, 2),
      showModal2 = _React$useState4[0],
      setModal2State = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = Object(_Users_obito_Desktop_demo_taro_color_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState5, 2),
      showModal3 = _React$useState6[0],
      setModal3State = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState8 = Object(_Users_obito_Desktop_demo_taro_color_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState7, 2),
      showModal4 = _React$useState8[0],
      setModal4State = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState10 = Object(_Users_obito_Desktop_demo_taro_color_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState9, 2),
      showModal5 = _React$useState10[0],
      setModal5State = _React$useState10[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuNavigation"], {
    color: "#fff",
    bgColor: "linear-gradient(135deg, #FD6E6A 10%, #FFC600 100%)",
    leftSolt: "\u8FD4\u56DE"
  }, "\u6A21\u6001\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar bg-white margin-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-orange "
  }), " \u57FA\u7840\u6A21\u6001\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    color: "green",
    shadow: true,
    onClick: function onClick() {
      return setModal1State(true);
    }
  }, "\u6253\u5F00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuModal"], {
    isOpened: showModal1,
    title: "\u63D0\u793A",
    onClose: function onClose() {
      return setModal1State(false);
    },
    onCancel: function onCancel() {
      return setModal1State(false);
    },
    onConfirm: function onConfirm() {
      return setModal1State(false);
    },
    confirmColor: "#0081ff"
  }, "\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u8FD9\u662F\u57FA\u7840\u6A21\u6001\u6846\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar bg-white margin-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-orange "
  }), " \u65E0\u6807\u9898\u6A21\u6001\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    color: "green",
    shadow: true,
    onClick: function onClick() {
      return setModal2State(true);
    }
  }, "\u6253\u5F00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuModal"], {
    isOpened: showModal2,
    onClose: function onClose() {
      return setModal2State(false);
    },
    onCancel: function onCancel() {
      return setModal2State(false);
    },
    onConfirm: function onConfirm() {
      return setModal2State(false);
    },
    confirmColor: "#0081ff"
  }, "\u65E0\u6807\u9898\u6A21\u6001\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar bg-white margin-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-orange "
  }), " \u65E0\u6309\u94AE\u6A21\u6001\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    color: "green",
    shadow: true,
    onClick: function onClick() {
      return setModal3State(true);
    }
  }, "\u6253\u5F00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuModal"], {
    showAction: false,
    isOpened: showModal3,
    title: "\u63D0\u793A",
    onClose: function onClose() {
      return setModal3State(false);
    },
    confirmColor: "#0081ff"
  }, "\u65E0\u6309\u94AE\u6A21\u6001\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar bg-white margin-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-orange "
  }), " \u5E95\u90E8\u6A21\u6001\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    color: "green",
    shadow: true,
    onClick: function onClick() {
      return setModal4State(true);
    }
  }, "\u6253\u5F00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuModal"], {
    position: "bottom",
    isOpened: showModal4,
    onClose: function onClose() {
      return setModal4State(false);
    },
    onCancel: function onCancel() {
      return setModal4State(false);
    },
    onConfirm: function onConfirm() {
      return setModal4State(false);
    },
    cancelColor: "#e54d42",
    confirmColor: "#0081ff"
  }, "\u5E95\u90E8\u6A21\u6001\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar bg-white margin-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-orange "
  }), " \u81EA\u5B9A\u4E49\u6A21\u6001\u6846"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    color: "green",
    shadow: true,
    onClick: function onClick() {
      return setModal5State(true);
    }
  }, "\u6253\u5F00"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuModal"], {
    showAction: false,
    isOpened: showModal5,
    onClose: function onClose() {
      return setModal5State(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "https://material.etango.cn/2915%2F1600322372424.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    onClick: function onClick() {
      return setModal5State(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuIcon"], {
    value: "close"
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/modal/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/modal/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../../node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/babel-loader/lib!./index.tsx */ "../../node_modules/babel-loader/lib/index.js!./src/pages/modal/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/modal/index', {}, config || {}))



/***/ })

},[["./src/pages/modal/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map