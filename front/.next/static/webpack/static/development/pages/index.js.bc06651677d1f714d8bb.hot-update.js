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
    name: "button",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQb3N0Rm9ybSIsImNhdGVnb3J5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0aXRsZSIsImNvbnRlbnQiLCJmb3JFYWNoIiwicCIsImltYWdlIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJkYXRhIiwicmVzZXRGaWVsZHMiLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwibWFwIiwidiIsImkiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLFEsR0FBYUMsMEMsQ0FBYkQsUTs7QUFFUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrQjtBQUFBOztB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QUU7QUFBZCxPQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FEYztBQUFBLEdBQWYsQ0FESCxDQUhGLENBTkYsQ0FQRixDQURGLENBREY7QUErQkQsQ0F4RkQ7O0dBQU0xRCxRO1VBQ2FHLHVELEVBQ0ZDLHlDQUFJLENBQUNDLE8sRUFDR0UsdUQ7OztLQUhuQlAsUTtBQTBGTkEsUUFBUSxDQUFDMkQsU0FBVCxHQUFxQjtBQUNuQjFELFVBQVEsRUFBRTJELGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBckI7QUFJZTlELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iYzA2NjUxNjc3ZDFmNzE0ZDhiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IERlbGV0ZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSwgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICh7IGNhdGVnb3J5IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgndGl0bGUnLCB2YWx1ZXMudGl0bGUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgdmFsdWVzLmNvbnRlbnQpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjYXRlZ29yeScsIGNhdGVnb3J5KTtcclxuICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLnRpdGxlKTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmNvbnRlbnQpO1xyXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEuaW1hZ2UpO1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybS5yZXNldEZpZWxkcygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZDonLCBlcnJvckluZm8pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZikgPT4ge1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKTtcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gbWFwIOyViOyXkCDrjbDsnbTthLDrpbwg7ZWo7IiY7JeQIOuEo+qzoCDsi7bsnLzrqbQg6rOg7LCo7ZWo7IiYIOyCrOyaqVxyXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICBkYXRhOiBpbmRleCxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gbmFtZT1cImJhc2ljXCIgZm9ybT17Zm9ybX0gb25GaW5pc2g9e29uRmluaXNofSBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9PlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInRpdGxlXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn7KCc66qp7J2EIOyeheugpe2VtCDso7zshLjsmpQhJyB9XX0+XHJcbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLquIAg7KCc66qpXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjb250ZW50XCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn64K07Jqp7J2EIOyeheugpe2VtOyjvOyEuOyalCEnIH1dfT5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSBwbGFjZWhvbGRlcj1cIuyXrOq4sOulvCDriIzrn6zshJwg6riA7J2EIOyekeyEse2VoCDsiJgg7J6I7Iq164uI64ukXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycgfX0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJidXR0b25cIiBzdHlsZT17eyBmbGV4OiAnMScgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIOqyjOyLnO2VmOq4sFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBzdHlsZT17eyBmbGV4OiAnMScgfX0gbmFtZT1cImltYWdlXCIgdmFsdWVQcm9wTmFtZT1cImZpbGVMaXN0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgd2lkdGg6ICcyODBweCcsIGJvcmRlclJhZGl1czogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjYzBjMGMwJywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke3Z9YH0gc3R5bGU9e3sgd2lkdGg6ICc1MHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEZWxldGVPdXRsaW5lZCBvbkNsaWNrPXtvblJlbW92ZUltYWdlKGkpfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTMwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RGb3JtLnByb3BUeXBlcyA9IHtcclxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=