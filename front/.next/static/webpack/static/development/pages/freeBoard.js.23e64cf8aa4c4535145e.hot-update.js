webpackHotUpdate("static\\development\\pages\\freeBoard.js",{

/***/ "./components/postForm.js":
/*!********************************!*\
  !*** ./components/postForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var TextArea = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

var PostForm = function PostForm() {
  var onFinish = function onFinish(values) {
    console.log('Success:', values);
  };

  var onFinishFailed = function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  var normFile = function normFile(e) {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layout, {
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    label: "Username",
    name: "username",
    rules: [{
      required: true,
      message: 'Please'
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(TextArea, {
    rows: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    name: "upload",
    label: "Upload",
    valuePropName: "fileList",
    getValueFromEvent: normFile,
    extra: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Upload"], {
    name: "logo",
    action: "/upload.do",
    listType: "picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UploadOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 22
    }
  }), " Click to upload "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tailLayout, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Submit"))));
};

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJsYXlvdXQiLCJsYWJlbENvbCIsInNwYW4iLCJ3cmFwcGVyQ29sIiwidGFpbExheW91dCIsIm9mZnNldCIsIlBvc3RGb3JtIiwib25GaW5pc2giLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJub3JtRmlsZSIsImUiLCJBcnJheSIsImlzQXJyYXkiLCJmaWxlTGlzdCIsInJlcXVpcmVkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7QUFDUixJQUFNRSxNQUFNLEdBQUc7QUFDYkMsVUFBUSxFQUFFO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBREc7QUFFYkMsWUFBVSxFQUFFO0FBQUVELFFBQUksRUFBRTtBQUFSO0FBRkMsQ0FBZjtBQUlBLElBQU1FLFVBQVUsR0FBRztBQUNqQkQsWUFBVSxFQUFFO0FBQUVFLFVBQU0sRUFBRSxDQUFWO0FBQWFILFFBQUksRUFBRTtBQUFuQjtBQURLLENBQW5COztBQUlBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzNCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixNQUF4QjtBQUNELEdBRkQ7O0FBSUEsTUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxTQUFELEVBQWU7QUFDcENILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJFLFNBQXZCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEJMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJJLENBQTdCOztBQUNBLFFBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixDQUFkLENBQUosRUFBc0I7QUFDcEIsYUFBT0EsQ0FBUDtBQUNEOztBQUNELFdBQU9BLENBQUMsSUFBSUEsQ0FBQyxDQUFDRyxRQUFkO0FBQ0QsR0FORDs7QUFRQSxTQUNFLG1FQUNFLE1BQUMseUNBQUQseUZBQVVqQixNQUFWO0FBQWtCLFFBQUksRUFBQyxPQUF2QjtBQUErQixZQUFRLEVBQUVPLFFBQXpDO0FBQW1ELGtCQUFjLEVBQUVJLGNBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFNBQUssRUFBQyxVQUFqQjtBQUE0QixRQUFJLEVBQUMsVUFBakM7QUFBNEMsU0FBSyxFQUFFLENBQUM7QUFBRU8sY0FBUSxFQUFFLElBQVo7QUFBa0JDLGFBQU8sRUFBRTtBQUEzQixLQUFELENBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUUsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFFBQUksRUFBQyxRQUFoQjtBQUF5QixTQUFLLEVBQUMsUUFBL0I7QUFBd0MsaUJBQWEsRUFBQyxVQUF0RDtBQUFpRSxxQkFBaUIsRUFBRU4sUUFBcEY7QUFBOEYsU0FBSyxFQUFDLEVBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLE1BQWI7QUFBb0IsVUFBTSxFQUFDLFlBQTNCO0FBQXdDLFlBQVEsRUFBQyxTQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVMsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVQsc0JBREYsQ0FERixDQUpGLEVBVUUsTUFBQyx5Q0FBRCxDQUFNLElBQU4seUZBQWVULFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixZQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBVkYsQ0FERixDQURGO0FBb0JELENBckNEOztLQUFNRSxRO0FBdUNTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZnJlZUJvYXJkLmpzLjIzZTY0Y2Y4YWE0YzQ1MzUxNDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBVcGxvYWQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuY29uc3QgbGF5b3V0ID0ge1xyXG4gIGxhYmVsQ29sOiB7IHNwYW46IDggfSxcclxuICB3cmFwcGVyQ29sOiB7IHNwYW46IDE2IH0sXHJcbn07XHJcbmNvbnN0IHRhaWxMYXlvdXQgPSB7XHJcbiAgd3JhcHBlckNvbDogeyBvZmZzZXQ6IDgsIHNwYW46IDE2IH0sXHJcbn07XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkOicsIGVycm9ySW5mbyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9ybUZpbGUgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1VwbG9hZCBldmVudDonLCBlKTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gey4uLmxheW91dH0gbmFtZT1cImJhc2ljXCIgb25GaW5pc2g9e29uRmluaXNofSBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9PlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJVc2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZScgfV19PlxyXG4gICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidXBsb2FkXCIgbGFiZWw9XCJVcGxvYWRcIiB2YWx1ZVByb3BOYW1lPVwiZmlsZUxpc3RcIiBnZXRWYWx1ZUZyb21FdmVudD17bm9ybUZpbGV9IGV4dHJhPVwiXCI+XHJcbiAgICAgICAgICA8VXBsb2FkIG5hbWU9XCJsb2dvXCIgYWN0aW9uPVwiL3VwbG9hZC5kb1wiIGxpc3RUeXBlPVwicGljdHVyZVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uPiA8VXBsb2FkT3V0bGluZWQgLz4gQ2xpY2sgdG8gdXBsb2FkIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW0gey4uLnRhaWxMYXlvdXR9PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==