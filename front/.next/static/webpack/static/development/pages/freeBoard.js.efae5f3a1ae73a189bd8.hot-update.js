webpackHotUpdate("static\\development\\pages\\freeBoard.js",{

/***/ "./components/postForm.js":
/*!********************************!*\
  !*** ./components/postForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var TextArea = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea;

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "content",
    rules: [{
      required: true,
      message: '제목을 입력해 주세요!'
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "\uAE00 \uC81C\uBAA9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "content",
    rules: [{
      required: true,
      message: '내용을 입력해주세요!'
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(TextArea, {
    rows: 4,
    placeholder: "\uC5EC\uAE30\uB97C \uB20C\uB7EC\uC11C \uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "upload",
    valuePropName: "fileList",
    getValueFromEvent: normFile,
    extra: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    name: "logo",
    action: "/upload.do",
    listType: "picture",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UploadOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 22
    }
  }), " \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC "))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQb3N0Rm9ybSIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwibm9ybUZpbGUiLCJlIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsZUxpc3QiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFFUUEsUSxHQUFhQywwQyxDQUFiRCxROztBQUdSLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzNCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixNQUF4QjtBQUNELEdBRkQ7O0FBSUEsTUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxTQUFELEVBQWU7QUFDcENILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJFLFNBQXZCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEJMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJJLENBQTdCOztBQUNBLFFBQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixDQUFkLENBQUosRUFBc0I7QUFDcEIsYUFBT0EsQ0FBUDtBQUNEOztBQUNELFdBQU9BLENBQUMsSUFBSUEsQ0FBQyxDQUFDRyxRQUFkO0FBQ0QsR0FORDs7QUFRQSxTQUNFLG1FQUNFLE1BQUMseUNBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFtQixZQUFRLEVBQUVWLFFBQTdCO0FBQXVDLGtCQUFjLEVBQUVJLGNBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLFFBQUksRUFBQyxTQUFoQjtBQUEwQixTQUFLLEVBQUUsQ0FBQztBQUFFTyxjQUFRLEVBQUUsSUFBWjtBQUFrQkMsYUFBTyxFQUFFO0FBQTNCLEtBQUQsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUMscUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxRQUFJLEVBQUMsU0FBaEI7QUFBMEIsU0FBSyxFQUFFLENBQUM7QUFBRUQsY0FBUSxFQUFFLElBQVo7QUFBa0JDLGFBQU8sRUFBRTtBQUEzQixLQUFELENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUUsQ0FBaEI7QUFBbUIsZUFBVyxFQUFDLHVHQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsUUFBSSxFQUFDLFFBQWhCO0FBQXlCLGlCQUFhLEVBQUMsVUFBdkM7QUFBa0QscUJBQWlCLEVBQUVOLFFBQXJFO0FBQStFLFNBQUssRUFBQyxFQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQW9CLFVBQU0sRUFBQyxZQUEzQjtBQUF3QyxZQUFRLEVBQUMsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFTLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFULDRDQURGLENBREYsQ0FQRixFQWFFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFNBQWI7QUFBdUIsWUFBUSxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQWJGLENBREYsQ0FERjtBQXVCRCxDQXhDRDs7S0FBTVAsUTtBQTBDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGZyZWVCb2FyZC5qcy5lZmFlNWYzYTFhZTczYTE4OWJkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgVXBsb2FkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCB2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZDonLCBlcnJvckluZm8pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5vcm1GaWxlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdVcGxvYWQgZXZlbnQ6JywgZSk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIHJldHVybiBlICYmIGUuZmlsZUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIG5hbWU9XCJiYXNpY1wiIG9uRmluaXNoPXtvbkZpbmlzaH0gb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjb250ZW50XCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn7KCc66qp7J2EIOyeheugpe2VtCDso7zshLjsmpQhJyB9XX0+XHJcbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLquIAg7KCc66qpXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjb250ZW50XCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn64K07Jqp7J2EIOyeheugpe2VtOyjvOyEuOyalCEnIH1dfT5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSBwbGFjZWhvbGRlcj1cIuyXrOq4sOulvCDriIzrn6zshJwg6riA7J2EIOyekeyEse2VoCDsiJgg7J6I7Iq164uI64ukXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJ1cGxvYWRcIiB2YWx1ZVByb3BOYW1lPVwiZmlsZUxpc3RcIiBnZXRWYWx1ZUZyb21FdmVudD17bm9ybUZpbGV9IGV4dHJhPVwiXCI+XHJcbiAgICAgICAgICA8VXBsb2FkIG5hbWU9XCJsb2dvXCIgYWN0aW9uPVwiL3VwbG9hZC5kb1wiIGxpc3RUeXBlPVwicGljdHVyZVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uPiA8VXBsb2FkT3V0bGluZWQgLz4g7J2066+47KeAIOyXheuhnOuTnCA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==