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

  var onFinish = function onFinish(values) {
    console.log(values);
    var formData = new FormData();
    formData.append('title', values.title);
    formData.append('content', values.content);
    formData.append('category', category);
    imagePaths.forEach(function (p) {
      formData.append('image', p);
    });
    console.log(formData.title);
    console.log(formData.content);
    console.log(formData.image);
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
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(TextArea, {
    name: "content",
    rows: 4,
    placeholder: "\uC5EC\uAE30\uB97C \uB20C\uB7EC\uC11C \uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, " \uAC8C\uC2DC\uD558\uAE30 "), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
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
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
        lineNumber: 78,
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
        lineNumber: 79,
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
        lineNumber: 80,
        columnNumber: 15
      }
    }));
  }))));
};

_s(PostForm, "gL8rLG/riGWlj3C9EcAEST03/j0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], antd__WEBPACK_IMPORTED_MODULE_4__["Form"].useForm, react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQb3N0Rm9ybSIsImNhdGVnb3J5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0aXRsZSIsImNvbnRlbnQiLCJmb3JFYWNoIiwicCIsImltYWdlIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJkYXRhIiwicmVzZXRGaWVsZHMiLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7O0FBRVIsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDakMsTUFBTUMsUUFBUSxH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RUgsQ0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUUsTUFBQyxnRUFBRDtBQUFnQixhQUFPLEVBQUVKLGFBQWEsQ0FBQ0ssQ0FBRCxDQUF0QztBQUEyQyxXQUFLLEVBQUU7QUFBRU0sa0JBQVUsRUFBRTtBQUFkLE9BQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURjO0FBQUEsR0FBZixDQURILENBUEYsQ0FERixDQURGO0FBc0JELENBL0VEOztHQUFNdEQsUTtVQUNhRyx1RCxFQUNGQyx5Q0FBSSxDQUFDQyxPLEVBQ0dFLHVEOzs7S0FIbkJQLFE7QUFpRk5BLFFBQVEsQ0FBQ3VELFNBQVQsR0FBcUI7QUFDbkJ0RCxVQUFRLEVBQUV1RCxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXJCO0FBSWUxRCx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuY2YxOTc5OTZlMzlkYzRmZWUwZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBEZWxldGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBSRU1PVkVfSU1BR0UsIEFERF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoeyBjYXRlZ29yeSB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG4gIGNvbnN0IHsgaW1hZ2VQYXRocyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdmFsdWVzLnRpdGxlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHZhbHVlcy5jb250ZW50KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY2F0ZWdvcnknLCBjYXRlZ29yeSk7XHJcbiAgICBpbWFnZVBhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHApO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS50aXRsZSk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS5jb250ZW50KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmltYWdlKTtcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQ6JywgZXJyb3JJbmZvKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2ltYWdlcycsIGUudGFyZ2V0LmZpbGVzKTtcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7XHJcbiAgICB9KTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIG1hcCDslYjsl5Ag642w7J207YSw66W8IO2VqOyImOyXkCDrhKPqs6Ag7Iu27Jy866m0IOqzoOywqO2VqOyImCDsgqzsmqlcclxuICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgZGF0YTogaW5kZXgsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIGZvcm09e2Zvcm19IG9uRmluaXNoPXtvbkZpbmlzaH0gb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgIDxUZXh0QXJlYSBuYW1lPVwiY29udGVudFwiIHJvd3M9ezR9IHBsYWNlaG9sZGVyPVwi7Jes6riw66W8IOuIjOufrOyEnCDquIDsnYQg7J6R7ISx7ZWgIOyImCDsnojsirXri4jri6RcIiAvPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPiDqsozsi5ztlZjquLAgPC9CdXR0b24+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiAnMjgwcHgnLCBib3JkZXJSYWRpdXM6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2MwYzBjMCcsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Z9YH0gc3R5bGU9e3sgd2lkdGg6ICc1MHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMzBweCcgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdEZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==