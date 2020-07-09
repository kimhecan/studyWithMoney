webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/postForm.js":
/*!********************************!*\
  !*** ./components/postForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var TextArea = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea;

var PostForm = function PostForm(_ref) {
  _s();

  var category = _ref.category;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      content = _useInput2[0],
      onChangeContent = _useInput2[1],
      setContent = _useInput2[2];

  var onFinish = function onFinish(values) {
    console.log(values);
    var formData = new FormData();
    formData.append('content', values.content);
    formData.append('category', category);
    imagePaths.forEach(function (p) {
      formData.append('image', p);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["ADD_POST_REQUEST"],
      data: formData
    });
    return form.resetFields();
  };

  var onFinishFailed = function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  };

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    console.log('images', e.target.files);
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }); // map 안에 데이터를 함수에 넣고 싶으면 고차함수 사용

  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["REMOVE_IMAGE"],
        data: index
      });
    };
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    form: form,
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(TextArea, {
    name: "content",
    value: content,
    onChange: onChangeContent,
    rows: 4,
    placeholder: "\uC5EC\uAE30\uB97C \uB20C\uB7EC\uC11C \uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      flex: 1
    },
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, " \uAC8C\uC2DC\uD558\uAE30 "), __jsx("div", {
    style: {
      flex: 1,
      marginLeft: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, imagePaths.map(function (v, i) {
    return __jsx("div", {
      key: v,
      style: {
        display: 'inline-block',
        width: '280px',
        borderRadius: '5px',
        border: '1px solid #c0c0c0',
        padding: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "http://localhost:3065/".concat(v),
      style: {
        width: '50px'
      },
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["DeleteOutlined"], {
      onClick: onRemoveImage(i),
      style: {
        marginLeft: '130px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }));
  }))));
};

_s(PostForm, "pOfsZOnRsS4gcWLV1YussfbEVNg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm, react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = PostForm;
PostForm.propTypes = {
  category: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
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

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue),
      value = _useState[0],
      setter = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setter(e.target.value);
  });
  return [value, handler, setter];
}, "jJC7NbJZBwPw2rLfrH4q62FtgpU="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RGb3JtLmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUlucHV0LmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQb3N0Rm9ybSIsImNhdGVnb3J5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsInVzZUlucHV0IiwiY29udGVudCIsIm9uQ2hhbmdlQ29udGVudCIsInNldENvbnRlbnQiLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZm9yRWFjaCIsInAiLCJ0eXBlIiwiQUREX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJyZXNldEZpZWxkcyIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZXMiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJpbWFnZUZvcm1EYXRhIiwiY2FsbCIsImYiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJvblJlbW92ZUltYWdlIiwiaW5kZXgiLCJSRU1PVkVfSU1BR0UiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpblRvcCIsImZsZXgiLCJtYXJnaW5MZWZ0IiwibWFwIiwidiIsImkiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInBhZGRpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiaW5pdFZhbHVlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldHRlciIsImhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFNBQUQsQ0FERztBQUFBLE1BQzVCRSxLQUQ0QjtBQUFBLE1BQ3JCQyxNQURxQjs7QUFFbkMsTUFBTUMsT0FBTyxHQUFHbEMseURBQVcsQ0FBQyxVQUFDSSxDQUFELEVBQU87QUFDakM2QixVQUFNLENBQUM3QixDQUFDLENBQUNDLE1BQUYsQ0FBUzJCLEtBQVYsQ0FBTjtBQUNELEdBRjBCLENBQTNCO0FBR0EsU0FBTyxDQUFDQSxLQUFELEVBQVFFLE9BQVIsRUFBaUJELE1BQWpCLENBQVA7QUFDRCxDQU5EIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42ODA1MDhjMmVjZjE2YzEyYmQ3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IERlbGV0ZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSwgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICh7IGNhdGVnb3J5IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IFtjb250ZW50LCBvbkNoYW5nZUNvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlSW5wdXQoKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB2YWx1ZXMuY29udGVudCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NhdGVnb3J5JywgY2F0ZWdvcnkpO1xyXG4gICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTtcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkOicsIGVycm9ySW5mbyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbWFnZXMnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBtYXAg7JWI7JeQIOuNsOydtO2EsOulvCDtlajsiJjsl5Ag64Sj6rOgIOyLtuycvOuptCDqs6DssKjtlajsiJgg7IKs7JqpXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybSBmb3JtPXtmb3JtfSBvbkZpbmlzaD17b25GaW5pc2h9IG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICA8VGV4dEFyZWEgbmFtZT1cImNvbnRlbnRcIiB2YWx1ZT17Y29udGVudH0gb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudH0gcm93cz17NH0gcGxhY2Vob2xkZXI9XCLsl6zquLDrpbwg64iM65+s7IScIOq4gOydhCDsnpHshLHtlaAg7IiYIOyeiOyKteuLiOuLpFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgZmxleDogMSB9fSB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+IOqyjOyLnO2VmOq4sCA8L0J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgbWFyZ2luTGVmdDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICcyODBweCcsIGJvcmRlclJhZGl1czogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjYzBjMGMwJywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gfSBzdHlsZT17eyB3aWR0aDogJzUwcHgnIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQgb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEzMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaW5pdFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0dGVyXSA9IHVzZVN0YXRlKGluaXRWYWx1ZSk7XHJcbiAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXR0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZXIsIHNldHRlcl07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=