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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQb3N0Rm9ybSIsImNhdGVnb3J5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0aXRsZSIsImNvbnRlbnQiLCJmb3JFYWNoIiwicCIsImltYWdlIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJkYXRhIiwicmVzZXRGaWVsZHMiLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7O0FBRVIsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDakMsTUFBTUMsUUFBUSxH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O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsZ0VBQUQ7QUFBZ0IsYUFBTyxFQUFFSixhQUFhLENBQUNLLENBQUQsQ0FBdEM7QUFBMkMsV0FBSyxFQUFFO0FBQUVNLGtCQUFVLEVBQUU7QUFBZCxPQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FEYztBQUFBLEdBQWYsQ0FESCxDQVBGLENBREYsQ0FERjtBQXNCRCxDQS9FRDs7R0FBTXRELFE7VUFDYUcsdUQsRUFDRkMseUNBQUksQ0FBQ0MsTyxFQUNHRSx1RDs7O0tBSG5CUCxRO0FBaUZOQSxRQUFRLENBQUN1RCxTQUFULEdBQXFCO0FBQ25CdEQsVUFBUSxFQUFFdUQsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEUixDQUFyQjtBQUllMUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmNjZTBlMWJmMTg3YjM4Yjk3M2M2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRGVsZXRlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFLCBBRERfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKHsgY2F0ZWdvcnkgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCB7IGltYWdlUGF0aHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCd0aXRsZScsIHZhbHVlcy50aXRsZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB2YWx1ZXMuY29udGVudCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NhdGVnb3J5JywgY2F0ZWdvcnkpO1xyXG4gICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEudGl0bGUpO1xyXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEuY29udGVudCk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS5pbWFnZSk7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkOicsIGVycm9ySW5mbyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbWFnZXMnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBtYXAg7JWI7JeQIOuNsOydtO2EsOulvCDtlajsiJjsl5Ag64Sj6rOgIOyLtuycvOuptCDqs6DssKjtlajsiJgg7IKs7JqpXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybSBmb3JtPXtmb3JtfSBvbkZpbmlzaD17b25GaW5pc2h9IG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH0+XHJcbiAgICAgICAgPFRleHRBcmVhIG5hbWU9XCJjb250ZW50XCIgcm93cz17NH0gcGxhY2Vob2xkZXI9XCLsl6zquLDrpbwg64iM65+s7IScIOq4gOydhCDsnpHshLHtlaAg7IiYIOyeiOyKteuLiOuLpFwiIC8+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+IOqyjOyLnO2VmOq4sCA8L0J1dHRvbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICcyODBweCcsIGJvcmRlclJhZGl1czogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjYzBjMGMwJywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gfSBzdHlsZT17eyB3aWR0aDogJzUwcHgnIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQgb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEzMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9