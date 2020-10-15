(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/grid/index"],{

/***/ "../../node_modules/babel-loader/lib/index.js!./src/pages/grid/index.tsx":
/*!********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/babel-loader/lib!./src/pages/grid/index.tsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_color_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-color-ui */ "../../node_modules/taro-color-ui/dist/index.umd.js");
/* harmony import */ var taro_color_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__);



var data = [{
  icon: "https://material.etango.cn/2915%2F1600322372424.png",
  badge: 120,
  name: "图片icon"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
    value: "cardboardfill",
    color: "#e54d42"
  }),
  badge: 120,
  name: "VR"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
    value: "recordfill",
    color: "#f37b1d"
  }),
  badge: 1,
  name: "录像"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
    value: "picfill",
    color: "#fbbd08"
  }),
  name: "图像"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
    value: "noticefill",
    color: "#8dc63f"
  }),
  badge: 22,
  name: "通知"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
    value: "upstagefill",
    color: "#39b54a"
  }),
  name: "排行榜"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
    value: "clothesfill",
    color: "#1cbbb4"
  }),
  name: "皮肤"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
    value: "discoverfill",
    color: "#0081ff"
  }),
  name: "发现"
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
    value: "questionfill",
    color: "#6739b6"
  }),
  name: "帮助"
}];

var Index = function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuNavigation"], {
    color: "#fff",
    bgColor: "linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%)",
    leftSolt: "\u8FD4\u56DE"
  }, "\u6805\u683C\u5E03\u5C40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "cu-bar bg-white solid-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u6709\u8FB9\u6846")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuGrid"], {
    className: "margin-top-sm",
    data: data,
    onClick: function onClick(item, index) {
      return console.log(item, index);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "cu-bar bg-white solid-bottom margin-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u65E0\u8FB9\u6846")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuGrid"], {
    className: "margin-top-sm",
    border: false,
    data: data,
    onClick: function onClick(item, index) {
      return console.log(item, index);
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/grid/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/grid/index.tsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../../node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/babel-loader/lib!./index.tsx */ "../../node_modules/babel-loader/lib/index.js!./src/pages/grid/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/grid/index', {}, config || {}))



/***/ })

},[["./src/pages/grid/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map