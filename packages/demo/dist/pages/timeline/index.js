(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/timeline/index"],{

/***/ "../../node_modules/babel-loader/lib/index.js!./src/pages/timeline/index.tsx":
/*!************************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/babel-loader/lib!./src/pages/timeline/index.tsx ***!
  \************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_color_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-color-ui */ "../../node_modules/taro-color-ui/dist/index.umd.js");
/* harmony import */ var taro_color_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__);




var Index = function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuNavigation"], {
    color: "#fff",
    bgColor: "linear-gradient(135deg, #65FDF0 10%, #1D6FA3 100%)",
    leftSolt: "\u8FD4\u56DE"
  }, "\u65F6\u95F4\u8F74"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "cu-bar bg-white solid-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u57FA\u7840\u7528\u6CD5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTimeline"], {
    time: "\u6628\u5929"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTimeline"].Item, {
    shadow: true,
    color: "#39b54a",
    left: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
      value: "noticefill",
      size: "15"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "23:59"), " \u3010\u706B\u661F\u3011\u5FEB\u4EF6\u5DF2\u5230\u8FBE\u5730\u7403")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTimeline"].Item, {
    shadow: true,
    color: "#e54d42",
    left: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
      value: "attentionforbidfill",
      size: "15",
      color: "#e54d42"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "15:00"), "\u3010\u5730\u7403\u3011\u5FEB\u4EF6\u63A5\u6536\u4E2D\uFF01")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTimeline"].Item, {
    color: "#0081ff",
    shadow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "20:00"), " \u3010\u5317\u4EAC\u3011\u5FEB\u4EF6\u5DF2\u5230\u8FBE\u5317\u4EAC\uFF0C\u51C6\u5907\u53D1\u5F80\u4E0A\u6D77")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTimeline"].Item, {
    color: "#1cbbb4",
    shadow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "10:00"), "\u3010\u5929\u6D25\u3011\u5FEB\u4EF6\u5DF2\u5230\u8FBE\u5929\u6D25\uFF0C\u51C6\u5907\u53D1\u5F80\u4E0A\u6D77")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTimeline"].Item, {
    color: "#9c26b0",
    shadow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "10:00"), "\u3010\u5357\u4EAC\u3011\u5FEB\u4EF6\u5DF2\u5230\u8FBE\u5357\u4EAC\uFF0C\u51C6\u5907\u53D1\u5F80\u4E0A\u6D77"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTimeline"], {
    time: "6-06"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTimeline"].Item, {
    color: "#8799a3",
    shadow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "10:00"), "\u3010\u4E0A\u6D77\u3011\u5FEB\u4EF6\u5DF2\u5230\u8FBE\u4E0A\u6D77\uFF0C\u51C6\u5907\u914D\u9001"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTimeline"], {
    time: "6-08"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTimeline"].Item, {
    color: "#f1f1f1",
    shadow: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTag"], {
    type: "ghost",
    radius: true,
    color: "blue"
  }, "\u4E0A\u534811\u70B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "margin-top-sm text-black"
  }, "\u5FEB\u4EF6\u5DF2\u88AB\u7B7E\u6536\uFF01"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/timeline/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/timeline/index.tsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../../node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/babel-loader/lib!./index.tsx */ "../../node_modules/babel-loader/lib/index.js!./src/pages/timeline/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/timeline/index', {}, config || {}))



/***/ })

},[["./src/pages/timeline/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map