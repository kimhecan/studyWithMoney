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
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      content = _useInput2[0],
      onChangeContent = _useInput2[1];

  var onFinish = function onFinish(values) {
    console.log(values);
    var formData = new FormData();
    formData.append('content', content);
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
      src: "http://localhost:3065/post/".concat(v),
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

_s(PostForm, "kMcnVnF8box4fTQ/alucO2vqclM=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RGb3JtLmpzIl0sIm5hbWVzIjpbIlRleHRBcmVhIiwiSW5wdXQiLCJQb3N0Rm9ybSIsImNhdGVnb3J5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsInVzZUlucHV0IiwiY29udGVudCIsIm9uQ2hhbmdlQ29udGVudCIsIm9uRmluaXNoIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmb3JFYWNoIiwicCIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsInJlc2V0RmllbGRzIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DbGlja0ltYWdlVXBsb2FkIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiY2xpY2siLCJvbkNoYW5nZUltYWdlcyIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImltYWdlRm9ybURhdGEiLCJjYWxsIiwiZiIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwiZmxleCIsIm1hcmdpbkxlZnQiLCJtYXAiLCJ2IiwiaSIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwicGFkZGluZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxRLEdBQWFDLDBDLENBQWJELFE7O0FBRVIsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDakMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEaUMsc0JBRWxCQyx5Q0FBSSxDQUFDQyxPQUFMLEVBRmtCO0FBQUE7QUFBQSxNQUUxQkMsSUFGMEI7O0FBQUEscUJBR1ZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSEQ7QUFBQSxNQUd6QkMsVUFIeUIsZ0JBR3pCQSxVQUh5Qjs7QUFBQSxrQkFJRUMsK0RBQVEsRUFKVjtBQUFBO0FBQUEsTUFJMUJDLE9BSjBCO0FBQUEsTUFJakJDLGVBSmlCOztBQU1qQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVk7QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBRUEsUUFBTUcsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFDQUQsWUFBUSxDQUFDRSxNQUFULENBQWdCLFNBQWhCLEVBQTJCUixPQUEzQjtBQUNBTSxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEJuQixRQUE1QjtBQUNBUyxjQUFVLENBQUNXLE9BQVgsQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hCSixjQUFRLENBQUNFLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJFLENBQXpCO0FBQ0QsS0FGRDtBQUdBcEIsWUFBUSxDQUFDO0FBQ1BxQixVQUFJLEVBQUVDLCtEQURDO0FBRVBDLFVBQUksRUFBRVA7QUFGQyxLQUFELENBQVI7QUFLQSxXQUFPWixJQUFJLENBQUNvQixXQUFMLEVBQVA7QUFDRCxHQWZEOztBQWlCQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFNBQUQsRUFBZTtBQUNwQ1osV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QlcsU0FBdkI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBekI7QUFFQSxNQUFNQyxrQkFBa0IsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQzNDSCxjQUFVLENBQUNJLE9BQVgsQ0FBbUJDLEtBQW5CO0FBQ0QsR0FGcUMsRUFFbkMsQ0FBQ0wsVUFBVSxDQUFDSSxPQUFaLENBRm1DLENBQXRDO0FBSUEsTUFBTUUsY0FBYyxHQUFHSCx5REFBVyxDQUFDLFVBQUNJLENBQUQsRUFBTztBQUN4Q3BCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JtQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBL0I7QUFDQSxRQUFNQyxhQUFhLEdBQUcsSUFBSXBCLFFBQUosRUFBdEI7QUFDQSxPQUFHRSxPQUFILENBQVdtQixJQUFYLENBQWdCSixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBekIsRUFBZ0MsVUFBQ0csQ0FBRCxFQUFPO0FBQ3JDRixtQkFBYSxDQUFDbkIsTUFBZCxDQUFxQixPQUFyQixFQUE4QnFCLENBQTlCO0FBQ0QsS0FGRDtBQUdBdkMsWUFBUSxDQUFDO0FBQ1BxQixVQUFJLEVBQUVtQixvRUFEQztBQUVQakIsVUFBSSxFQUFFYztBQUZDLEtBQUQsQ0FBUjtBQUlELEdBVmlDLENBQWxDLENBakNpQyxDQTZDakM7O0FBQ0EsTUFBTUksYUFBYSxHQUFHWCx5REFBVyxDQUFDLFVBQUNZLEtBQUQ7QUFBQSxXQUFXLFlBQU07QUFDakQxQyxjQUFRLENBQUM7QUFDUHFCLFlBQUksRUFBRXNCLDJEQURDO0FBRVBwQixZQUFJLEVBQUVtQjtBQUZDLE9BQUQsQ0FBUjtBQUlELEtBTGlDO0FBQUEsR0FBRCxDQUFqQztBQU9BLFNBQ0UsbUVBQ0UsTUFBQyx5Q0FBRDtBQUFNLFFBQUksRUFBRXRDLElBQVo7QUFBa0IsWUFBUSxFQUFFUSxRQUE1QjtBQUFzQyxrQkFBYyxFQUFFYSxjQUF0RDtBQUFzRSxXQUFPLEVBQUMscUJBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFFBQUQ7QUFBVSxRQUFJLEVBQUMsU0FBZjtBQUF5QixTQUFLLEVBQUVmLE9BQWhDO0FBQXlDLFlBQVEsRUFBRUMsZUFBbkQ7QUFBb0UsUUFBSSxFQUFFLENBQTFFO0FBQTZFLGVBQVcsRUFBQyx1R0FBekY7QUFBaUgsWUFBUSxNQUF6SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLFNBQUssRUFBRTtBQUFFaUMsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLG1CQUFhLEVBQUUsS0FBbEM7QUFBeUNDLGVBQVMsRUFBRTtBQUFwRCxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBQWY7QUFBNEIsUUFBSSxFQUFDLFNBQWpDO0FBQTJDLFlBQVEsRUFBQyxRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLEVBRUU7QUFBSyxTQUFLLEVBQUU7QUFBRUEsVUFBSSxFQUFFLENBQVI7QUFBV0MsZ0JBQVUsRUFBRTtBQUF2QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsTUFBM0I7QUFBNEIsVUFBTSxNQUFsQztBQUFtQyxPQUFHLEVBQUVyQixVQUF4QztBQUFvRCxZQUFRLEVBQUVNLGNBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVKLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUZGLENBRkYsQ0FGRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3JCLFVBQVUsQ0FBQ3lDLEdBQVgsQ0FBZSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUNkO0FBQUssU0FBRyxFQUFFRCxDQUFWO0FBQWEsV0FBSyxFQUFFO0FBQUVOLGVBQU8sRUFBRSxjQUFYO0FBQTJCUSxhQUFLLEVBQUUsT0FBbEM7QUFBMkNDLG9CQUFZLEVBQUUsS0FBekQ7QUFBZ0VDLGNBQU0sRUFBRSxtQkFBeEU7QUFBNkZDLGVBQU8sRUFBRTtBQUF0RyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLHVDQUFnQ0wsQ0FBaEMsQ0FBUjtBQUE2QyxXQUFLLEVBQUU7QUFBRUUsYUFBSyxFQUFFO0FBQVQsT0FBcEQ7QUFBdUUsU0FBRyxFQUFFRixDQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLGdFQUFEO0FBQWdCLGFBQU8sRUFBRVQsYUFBYSxDQUFDVSxDQUFELENBQXRDO0FBQTJDLFdBQUssRUFBRTtBQUFFSCxrQkFBVSxFQUFFO0FBQWQsT0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBRGM7QUFBQSxHQUFmLENBREgsQ0FURixDQURGLENBREY7QUF3QkQsQ0E3RUQ7O0dBQU1sRCxRO1VBQ2FHLHVELEVBQ0ZDLHlDQUFJLENBQUNDLE8sRUFDR0UsdUQsRUFDWUksdUQ7OztLQUovQlgsUTtBQStFTkEsUUFBUSxDQUFDMEQsU0FBVCxHQUFxQjtBQUNuQnpELFVBQVEsRUFBRTBELGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBckI7QUFJZTdELHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hNzc5NGRhYmViMmE5MmYzZjI0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IERlbGV0ZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSwgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICh7IGNhdGVnb3J5IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IFtjb250ZW50LCBvbkNoYW5nZUNvbnRlbnRdID0gdXNlSW5wdXQoKTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCBjb250ZW50KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY2F0ZWdvcnknLCBjYXRlZ29yeSk7XHJcbiAgICBpbWFnZVBhdGhzLmZvckVhY2goKHApID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIHApO1xyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm0ucmVzZXRGaWVsZHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQ6JywgZXJyb3JJbmZvKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2ltYWdlcycsIGUudGFyZ2V0LmZpbGVzKTtcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7XHJcbiAgICB9KTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIG1hcCDslYjsl5Ag642w7J207YSw66W8IO2VqOyImOyXkCDrhKPqs6Ag7Iu27Jy866m0IOqzoOywqO2VqOyImCDsgqzsmqlcclxuICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgZGF0YTogaW5kZXgsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIGZvcm09e2Zvcm19IG9uRmluaXNoPXtvbkZpbmlzaH0gb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgIDxUZXh0QXJlYSBuYW1lPVwiY29udGVudFwiIHZhbHVlPXtjb250ZW50fSBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50fSByb3dzPXs0fSBwbGFjZWhvbGRlcj1cIuyXrOq4sOulvCDriIzrn6zshJwg6riA7J2EIOyekeyEse2VoCDsiJgg7J6I7Iq164uI64ukXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBmbGV4OiAxIH19IHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj4g6rKM7Iuc7ZWY6riwIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzI4MHB4JywgYm9yZGVyUmFkaXVzOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNjMGMwYzAnLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvcG9zdC8ke3Z9YH0gc3R5bGU9e3sgd2lkdGg6ICc1MHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZU91dGxpbmVkIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMzBweCcgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdEZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==