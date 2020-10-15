(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/list/index"],{

/***/ "../../node_modules/babel-loader/lib/index.js!./src/pages/list/index.tsx":
/*!********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/babel-loader/lib!./src/pages/list/index.tsx ***!
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




var Index = function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuNavigation"], {
    color: "#fff",
    bgColor: "linear-gradient(135deg, #3B2667 10%, #BC78EC 100%)",
    leftSolt: "\u8FD4\u56DE"
  }, "\u5217\u8868"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuList"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuList"].Item, {
    title: "\u65E0\u63CF\u8FF0\u65E0\u7BAD\u5934",
    action: "\u6211\u662Faction"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuList"].Item, {
    title: "\u6709\u63CF\u8FF0\u6709\u7BAD\u5934",
    desc: "\u6211\u662F\u63CF\u8FF0\u6211\u662F\u63CF\u8FF0",
    action: "\u6211\u662Faction",
    arrow: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuList"].Item, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
      value: "circlefill",
      color: "#0081ff;",
      size: 16
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "\u5E26icon\u7684\u6807\u9898")),
    desc: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
      value: "infofill",
      color: "e54d42",
      size: 16
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "\u5E26icon\u7684\u63CF\u8FF0\u4FE1\u606F")),
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuButton"], {
      color: "green",
      size: "small",
      shadow: true
    }, "action"),
    arrow: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuList"].Item, {
    title: "switch",
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuSwitch"], null),
    arrow: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuList"].Item, {
    title: "tag",
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTag"], {
      radius: true,
      color: "blue",
      type: "ghost"
    }, "tag-1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTag"], {
      radius: true,
      color: "orange"
    }, "tag-2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuTag"], {
      round: true,
      color: "purple"
    }, "tag-3")),
    arrow: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuList"].Item, {
    title: "avatar",
    action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuAvatar"].Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuAvatar"], {
      src: "https://material.etango.cn/2915%2F1600322372424.png",
      round: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuAvatar"], {
      src: "https://material.etango.cn/2915%2F1600322372424.png",
      round: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuAvatar"], {
      src: "https://material.etango.cn/2915%2F1600322372424.png",
      round: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuAvatar"], {
      src: "https://material.etango.cn/2915%2F1600322372424.png",
      round: true
    })),
    arrow: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuList"].Item, {
    title: "swipeAction",
    arrow: true,
    swipeAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
      style: {
        color: "#fff",
        backgroundColor: "#8799a3"
      }
    }, "\u7F6E\u9876"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], {
      style: {
        color: "#fff",
        backgroundColor: "#e54d42"
      }
    }, "\u5220\u9664"))
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./src/pages/list/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/list/index.tsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../../node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/babel-loader/lib!./index.tsx */ "../../node_modules/babel-loader/lib/index.js!./src/pages/list/index.tsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/list/index', {}, config || {}))



/***/ })

},[["./src/pages/list/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map