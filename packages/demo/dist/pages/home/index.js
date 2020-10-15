(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "../../node_modules/babel-loader/lib/index.js!./src/pages/home/index.tsx":
/*!********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/babel-loader/lib!./src/pages/home/index.tsx ***!
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
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "../../node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/pages/home/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);







var Index = function Index() {
  var components = [{
    name: "图标",
    path: "/pages/icon/index"
  }, {
    name: "按钮",
    path: "/pages/button/index"
  }, {
    name: "头像",
    path: "/pages/avatar/index"
  }, {
    name: "标签",
    path: "/pages/tag/index"
  }, {
    name: "开关",
    path: "/pages/switch/index"
  }, {
    name: "列表",
    path: "/pages/list/index"
  }, {
    name: "标签页",
    path: "/pages/tabs/index"
  }, {
    name: "模态框",
    path: "/pages/modal/index"
  }, {
    name: "时间轴",
    path: "/pages/timeline/index"
  }, {
    name: "步骤条",
    path: "/pages/steps/index"
  }, {
    name: "进度条",
    path: "/pages/progress/index"
  }, {
    name: "栅格布局",
    path: "/pages/grid/index"
  }, {
    name: "轮播",
    path: "/pages/swiper/index"
  }, {
    name: "自定义导航",
    path: "/pages/navigation/index"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "padding-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuNavigation"], {
    color: "#fff",
    bgColor: "linear-gradient(135deg, #81FFEF 10%, #F067B4 100%)",
    isBack: false,
    leftSolt: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
      value: "github",
      color: "#fff"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "flex align-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    className: "logo margin-right-sm",
    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "name"
  }, "Taro Color UI"))), components.map(function (comp) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "cu-bar bg-white margin-bottom-sm",
      key: comp.name,
      onClick: function onClick() {
        return _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
          url: comp.path
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "action"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      className: "cuIcon-title text-blue"
    }), comp.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: "action"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
      value: "right",
      size: "15"
    })));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "assets/logo.png");

/***/ }),

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../../node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/babel-loader/lib!./index.tsx */ "../../node_modules/babel-loader/lib/index.js!./src/pages/home/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/home/index', {}, config || {}))



/***/ })

},[["./src/pages/home/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map