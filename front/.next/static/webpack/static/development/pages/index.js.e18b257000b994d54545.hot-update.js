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
    name: "basic",
    form: form,
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "title",
    rules: [{
      required: true,
      message: '제목을 입력해 주세요!'
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "\uAE00 \uC81C\uBAA9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "content",
    rules: [{
      required: true,
      message: '내용을 입력해주세요!'
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(TextArea, {
    rows: 4,
    placeholder: "\uC5EC\uAE30\uB97C \uB20C\uB7EC\uC11C \uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    style: {
      flex: '1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "\uAC8C\uC2DC\uD558\uAE30")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    style: {
      flex: '1'
    },
    name: "image",
    valuePropName: "fileList",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
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
        lineNumber: 87,
        columnNumber: 17
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
        lineNumber: 88,
        columnNumber: 19
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["DeleteOutlined"], {
      onClick: onRemoveImage(i),
      style: {
        marginLeft: '130px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 19
      }
    }));
  }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQb3N0Rm9ybSIsImNhdGVnb3J5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0aXRsZSIsImNvbnRlbnQiLCJmb3JFYWNoIiwicCIsImltYWdlIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJkYXRhIiwicmVzZXRGaWVsZHMiLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwibWFwIiwidiIsImkiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTs7QUFFUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrQjtBQUFBOztB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURjO0FBQUEsR0FBZixDQURILENBSEYsQ0FORixDQVBGLENBREYsQ0FERjtBQStCRCxDQXhGRDs7R0FBTTFELFE7VUFDYUcsdUQsRUFDRkMseUNBQUksQ0FBQ0MsTyxFQUNHRSx1RDs7O0tBSG5CUCxRO0FBMEZOQSxRQUFRLENBQUMyRCxTQUFULEdBQXFCO0FBQ25CMUQsVUFBUSxFQUFFMkQsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEUixDQUFyQjtBQUllOUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmUxOGIyNTcwMDBiOTk0ZDU0NTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRGVsZXRlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFLCBBRERfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKHsgY2F0ZWdvcnkgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCB7IGltYWdlUGF0aHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCd0aXRsZScsIHZhbHVlcy50aXRsZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB2YWx1ZXMuY29udGVudCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NhdGVnb3J5JywgY2F0ZWdvcnkpO1xyXG4gICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEudGl0bGUpO1xyXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEuY29udGVudCk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS5pbWFnZSk7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkOicsIGVycm9ySW5mbyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbWFnZXMnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBtYXAg7JWI7JeQIOuNsOydtO2EsOulvCDtlajsiJjsl5Ag64Sj6rOgIOyLtuycvOuptCDqs6DssKjtlajsiJgg7IKs7JqpXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybSBuYW1lPVwiYmFzaWNcIiBmb3JtPXtmb3JtfSBvbkZpbmlzaD17b25GaW5pc2h9IG9uRmluaXNoRmFpbGVkPXtvbkZpbmlzaEZhaWxlZH0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidGl0bGVcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfsoJzrqqnsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalCEnIH1dfT5cclxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuq4gCDsoJzrqqlcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImNvbnRlbnRcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfrgrTsmqnsnYQg7J6F66Cl7ZW07KO87IS47JqUIScgfV19PlxyXG4gICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IHBsYWNlaG9sZGVyPVwi7Jes6riw66W8IOuIjOufrOyEnCDquIDsnYQg7J6R7ISx7ZWgIOyImCDsnojsirXri4jri6RcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgZmxleDogJzEnIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICDqsozsi5ztlZjquLBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgZmxleDogJzEnIH19IG5hbWU9XCJpbWFnZVwiIHZhbHVlUHJvcE5hbWU9XCJmaWxlTGlzdFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiAnMjgwcHgnLCBib3JkZXJSYWRpdXM6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2MwYzBjMCcsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHt2fWB9IHN0eWxlPXt7IHdpZHRoOiAnNTBweCcgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQgb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEzMHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9