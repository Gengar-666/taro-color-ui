(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/button/index"],{

/***/ "../../node_modules/babel-loader/lib/index.js!./src/pages/button/index.tsx":
/*!**********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/babel-loader/lib!./src/pages/button/index.tsx ***!
  \**********************************************************************************************************/
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





var Button = function Button() {
  var btns = [{
    color: "red",
    text: "嫣红"
  }, {
    color: "orange",
    text: "桔橙"
  }, {
    color: "yellow",
    text: "明黄"
  }, {
    color: "olive",
    text: "橄榄"
  }, {
    color: "green",
    text: "森绿"
  }, {
    color: "cyan",
    text: "天青"
  }, {
    color: "blue",
    text: "海蓝"
  }, {
    color: "purple",
    text: "姹紫"
  }, {
    color: "mauve",
    text: "木槿"
  }, {
    color: "pink",
    text: "桃粉"
  }, {
    color: "brown",
    text: "棕褐"
  }, {
    color: "grey",
    text: "玄灰"
  }, {
    color: "gray",
    text: "草灰"
  }, {
    color: "black",
    text: "墨黑"
  }, {
    color: "white",
    text: "雅白"
  }];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_Users_obito_Desktop_demo_taro_color_ui_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      shadow = _React$useState2[0],
      setShadow = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuNavigation"], {
    color: "#fff",
    bgColor: "linear-gradient(135deg, #43CBFF 10%, #9708CC 100%)",
    leftSolt: "\u8FD4\u56DE"
  }, "\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar bg-white solid-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u6309\u94AE\u5F62\u72B6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "padding flex flex-wrap justify-between align-center bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    inline: true
  }, "\u9ED8\u8BA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    round: true,
    inline: true
  }, "\u5706\u89D2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar margin-top bg-white solid-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u6309\u94AE\u5C3A\u5BF8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "padding flex flex-wrap justify-between align-center bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    size: "small",
    round: true,
    inline: true
  }, "\u5C0F\u5C3A\u5BF8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    round: true,
    inline: true
  }, "\u9ED8\u8BA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    size: "large",
    round: true,
    inline: true
  }, "\u5927\u5C3A\u5BF8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar margin-top bg-white solid-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u6309\u94AE\u989C\u8272"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "margin-right"
  }, "\u9634\u5F71"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuSwitch"], {
    checked: shadow,
    onChange: function onChange(checked) {
      return setShadow(checked);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "grid col-5 padding-sm"
  }, btns.map(function (btn) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "margin-tb-sm text-center",
      key: btn.color
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
      color: btn.color,
      shadow: shadow,
      round: true,
      inline: true
    }, btn.text));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar margin-top bg-white solid-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u9542\u7A7A\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "grid col-5 padding-sm"
  }, btns.map(function (btn) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: "margin-tb-sm text-center",
      key: btn.color
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
      color: btn.color,
      type: "ghost",
      round: true,
      inline: true
    }, btn.text));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar margin-top bg-white solid-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u5757\u72B6\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "padding flex flex-direction"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    color: "grey",
    size: "large"
  }, "\u7384\u7070"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    className: "margin-tb-sm",
    color: "red",
    size: "large"
  }, "\u5AE3\u7EA2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar margin-top bg-white solid-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u81EA\u5B9A\u4E49\u989C\u8272")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "padding flex flex-direction"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    customColor: "#1a2a3c",
    size: "large"
  }, "\u81EA\u5B9A\u4E49\u989C\u8272 - \u4E3B\u8981\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    className: "margin-tb-sm",
    customColor: "#1a2a3c",
    type: "ghost",
    size: "large"
  }, "\u81EA\u5B9A\u4E49\u989C\u8272 - \u9542\u7A7A\u6309\u94AE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    className: "margin-tb-sm",
    customColor: "linear-gradient(to right, #ec008c, #6739b6)",
    size: "large"
  }, "\u6E10\u53D8\u8272\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar margin-top bg-white solid-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u6309\u94AE\u52A0\u56FE\u6807")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "padding flex flex-direction"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    color: "orange",
    type: "ghost",
    size: "large",
    icon: "upload"
  }, "\u56FE\u6807"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    className: "margin-tb-sm",
    color: "blue",
    size: "large",
    loading: true
  }, "\u52A0\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    className: "margin-tb-sm",
    color: "green",
    size: "large",
    nativeLoading: true
  }, "\u5FAE\u4FE1\u52A0\u8F7D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "cu-bar margin-top bg-white solid-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "cuIcon-title text-blue"
  }), "\u65E0\u6548\u6309\u94AE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "padding flex flex-direction"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    color: "blue",
    size: "large",
    disabled: true
  }, "\u65E0\u6548\u72B6\u6001"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_3__["CuButton"], {
    className: "margin-tb-sm",
    color: "blue",
    size: "large",
    type: "ghost",
    disabled: true
  }, "\u65E0\u6548\u72B6\u6001")));
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./src/pages/button/index.tsx":
/*!************************************!*\
  !*** ./src/pages/button/index.tsx ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../../node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/babel-loader/lib!./index.tsx */ "../../node_modules/babel-loader/lib/index.js!./src/pages/button/index.tsx");


var config = {"navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/button/index', {}, config || {}))



/***/ })

},[["./src/pages/button/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map