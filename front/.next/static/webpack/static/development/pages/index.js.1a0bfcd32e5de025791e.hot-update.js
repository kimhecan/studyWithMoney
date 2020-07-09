webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/postCard.js":
/*!********************************!*\
  !*** ./components/postCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _functions_parseDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/parseDate */ "./functions/parseDate.js");
/* harmony import */ var _postImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postImages */ "./components/postImages.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var PostCard = function PostCard(_ref) {
  var post = _ref.post;
  console.log(post.id, 'post.id');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      marginTop: '100px',
      borderRadius: '15px'
    },
    hoverable: true,
    cover: __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'row'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      src: "http://localhost:3065/profile/".concat(post.User.profileImg),
      style: {
        width: '60px',
        "float": 'left',
        verticalAlign: 'middle',
        flex: '1'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }), __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '20px',
        flex: '5'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx("strong", {
      style: {
        flex: 1,
        marginLeft: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, post.User.nickname), __jsx("p", {
      style: {
        flex: 1,
        marginLeft: '10px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }, Object(_functions_parseDate__WEBPACK_IMPORTED_MODULE_4__["default"])(post.createdAt))), __jsx("p", {
      style: {
        margin: '3px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, post.content), post.Images.length > 0 && __jsx(_postImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      alt: "image",
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 40
      }
    })),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {
      key: "setting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      key: "ellipsis",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiVXNlciIsInByb2ZpbGVJbWciLCJ3aWR0aCIsInZlcnRpY2FsQWxpZ24iLCJmbGV4IiwibWFyZ2luTGVmdCIsIm5pY2tuYW1lIiwicGFyc2VEYXRlIiwiY3JlYXRlZEF0IiwibWFyZ2luIiwiY29udGVudCIsIkltYWdlcyIsImxlbmd0aCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLEVBQWpCLEVBQXFCLFNBQXJCO0FBRUEsU0FDRSxtRUFDRSxNQUFDLHlDQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRSxPQUFiO0FBQXNCQyxrQkFBWSxFQUFFO0FBQXBDLEtBRFQ7QUFFRSxhQUFTLE1BRlg7QUFHRSxTQUFLLEVBQ0g7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLHFCQUFhLEVBQUU7QUFBbEMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUNFLFNBQUcsMENBQW1DUCxJQUFJLENBQUNRLElBQUwsQ0FBVUMsVUFBN0MsQ0FETDtBQUVFLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsTUFBVDtBQUFpQixpQkFBTyxNQUF4QjtBQUFnQ0MscUJBQWEsRUFBRSxRQUEvQztBQUF5REMsWUFBSSxFQUFFO0FBQS9ELE9BRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBS0U7QUFBSyxXQUFLLEVBQUU7QUFBRU4sZUFBTyxFQUFFLE1BQVg7QUFBbUJDLHFCQUFhLEVBQUUsUUFBbEM7QUFBNENNLGtCQUFVLEVBQUUsTUFBeEQ7QUFBZ0VELFlBQUksRUFBRTtBQUF0RSxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFRLFdBQUssRUFBRTtBQUFFQSxZQUFJLEVBQUUsQ0FBUjtBQUFXQyxrQkFBVSxFQUFFO0FBQXZCLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpRGIsSUFBSSxDQUFDUSxJQUFMLENBQVVNLFFBQTNELENBREYsRUFFRTtBQUFHLFdBQUssRUFBRTtBQUFFRixZQUFJLEVBQUUsQ0FBUjtBQUFXQyxrQkFBVSxFQUFFO0FBQXZCLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE0Q0Usb0VBQVMsQ0FBQ2YsSUFBSSxDQUFDZ0IsU0FBTixDQUFyRCxDQUZGLENBTEYsRUFTRTtBQUFHLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVixPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBOEJqQixJQUFJLENBQUNrQixPQUFuQyxDQVRGLEVBVUdsQixJQUFJLENBQUNtQixNQUFMLENBQVlDLE1BQVosR0FBcUIsQ0FBckIsSUFBMEIsTUFBQyxtREFBRDtBQUFZLFNBQUcsRUFBQyxPQUFoQjtBQUF3QixZQUFNLEVBQUVwQixJQUFJLENBQUNtQixNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVjdCLENBSko7QUFpQkUsV0FBTyxFQUFFLENBQ1AsTUFBQyxpRUFBRDtBQUFpQixTQUFHLEVBQUMsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURPLEVBRVAsTUFBQyw4REFBRDtBQUFjLFNBQUcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRk8sRUFHUCxNQUFDLGtFQUFEO0FBQWtCLFNBQUcsRUFBQyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSE8sQ0FqQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUEyQkQsQ0E5QkQ7O0tBQU1wQixRO0FBZ0NOQSxRQUFRLENBQUNzQixTQUFULEdBQXFCO0FBQ25CckIsTUFBSSxFQUFFcUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESixDQUFyQjtBQUlleEIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjFhMGJmY2QzMmU1ZGUwMjU3OTFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBBdmF0YXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgU2V0dGluZ091dGxpbmVkLCBFZGl0T3V0bGluZWQsIEVsbGlwc2lzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBwYXJzZURhdGUgZnJvbSAnLi4vZnVuY3Rpb25zL3BhcnNlRGF0ZSc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vcG9zdEltYWdlcyc7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBvc3QuaWQsICdwb3N0LmlkJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzEwMHB4JywgYm9yZGVyUmFkaXVzOiAnMTVweCcgfX1cclxuICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICBjb3Zlcj17KFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Byb2ZpbGUvJHtwb3N0LlVzZXIucHJvZmlsZUltZ31gfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNjBweCcsIGZsb2F0OiAnbGVmdCcsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLCBmbGV4OiAnMScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMjBweCcsIGZsZXg6ICc1JyB9fT5cclxuICAgICAgICAgICAgICA8c3Ryb25nIHN0eWxlPXt7IGZsZXg6IDEsIG1hcmdpbkxlZnQ6ICcxMHB4JyB9fT57cG9zdC5Vc2VyLm5pY2tuYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZsZXg6IDEsIG1hcmdpbkxlZnQ6ICcxMHB4JyB9fT57cGFyc2VEYXRlKHBvc3QuY3JlYXRlZEF0KX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46ICczcHgnIH19Pntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICB7cG9zdC5JbWFnZXMubGVuZ3RoID4gMCAmJiA8UG9zdEltYWdlcyBhbHQ9XCJpbWFnZVwiIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGtleT1cInNldHRpbmdcIiAvPixcclxuICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPixcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBwcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==