(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/steps/index"],{

/***/ "../../node_modules/babel-loader/lib/index.js!./src/pages/steps/index.tsx":
/*!*********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/babel-loader/lib!./src/pages/steps/index.tsx ***!
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
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_Users_obito_Desktop_demo_taro_color_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      current = _React$useState2[0],
      setCurrent = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState4 = Object(_Users_obito_Desktop_demo_taro_color_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState3, 2),
      current2 = _React$useState4[0],
      setCurrent2 = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setTimeout(function () {
      setCurrent(3);
    }, 1000);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuNavigation"], {
    color: "#fff",
    bgColor: "linear-gradient(135deg, #FFA6B7 10%, #1E2AD2 100%)",
    leftSolt: "\u8FD4\u56DE"
  }, "\u6B65\u9AA4\u6761"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-orange "
  }), " \u57FA\u672C\u7528\u6CD5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bg-white padding margin-top-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"], {
    current: current
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u8FDB\u884C\u4E2D",
    status: "process"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u7B49\u5F85",
    status: "wait"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u9519\u8BEF",
    status: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u5B8C\u6210",
    status: "finish"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bg-white padding margin-top-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"], {
    current: current,
    activeColor: "red"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u8FDB\u884C\u4E2D",
    status: "process"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u7B49\u5F85",
    status: "wait"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u9519\u8BEF",
    status: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u5B8C\u6210",
    status: "finish"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar bg-white margin-top-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-orange "
  }), " \u7BAD\u5934\u8FDE\u63A5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bg-white padding margin-top-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"], {
    current: current,
    activeColor: "orange",
    arrow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u8FDB\u884C\u4E2D",
    status: "process"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u7B49\u5F85",
    status: "wait"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u9519\u8BEF",
    status: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u5B8C\u6210",
    status: "finish"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar bg-white margin-top-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-orange"
  }), " \u6570\u5B57\u5B8C\u6210"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    color: "green",
    shadow: true,
    onClick: function onClick() {
      return setCurrent2(current2 + 1);
    }
  }, "\u4E0B\u4E00\u6B65"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bg-white padding margin-top-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"], {
    current: current2,
    activeColor: "green",
    type: "number"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u8FDB\u884C\u4E2D",
    status: "process"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u7B49\u5F85",
    status: "wait"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u9519\u8BEF",
    status: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u5B8C\u6210",
    status: "finish"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar bg-white margin-top-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-orange"
  }), " \u63CF\u8FF0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "bg-white padding margin-top-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"], {
    current: current,
    activeColor: "green"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u8FDB\u884C\u4E2D"
  }, "\u63CF\u8FF01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u7B49\u5F85"
  }, "\u63CF\u8FF02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u9519\u8BEF"
  }, "\u63CF\u8FF03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSteps"].Item, {
    title: "\u5B8C\u6210"
  }, "\u63CF\u8FF04"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/steps/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/steps/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../../node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/babel-loader/lib!./index.tsx */ "../../node_modules/babel-loader/lib/index.js!./src/pages/steps/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/steps/index', {}, config || {}))



/***/ })

},[["./src/pages/steps/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map