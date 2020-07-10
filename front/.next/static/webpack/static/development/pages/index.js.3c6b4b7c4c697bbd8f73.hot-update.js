webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/postCard.js":
/*!********************************!*\
  !*** ./components/postCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_parseDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/parseDate */ "./functions/parseDate.js");
/* harmony import */ var _postImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postImages */ "./components/postImages.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  console.log(post, 'post');

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      info = _useSelector.info;

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var hide = function hide() {
    setVisible(false);
  };

  var handleVisibleChange = function handleVisibleChange(visible) {
    setVisible(visibl);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    style: {
      marginTop: '100px',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px'
    },
    hoverable: true,
    cover: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'row'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        margin: '15px',
        flex: '1'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      src: "http://localhost:3065/profile/".concat(post.User.profileImg),
      size: "large",
      style: {
        width: '50px',
        height: '50px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    })), __jsx("div", {
      style: {
        flex: '15',
        marginTop: '12px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, __jsx("strong", {
      style: {
        fontSize: '16px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, post.User.nickname), __jsx("p", {
      style: {
        color: 'gray'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, Object(_functions_parseDate__WEBPACK_IMPORTED_MODULE_6__["default"])(post.createdAt)))), __jsx("p", {
      style: {
        margin: '7px 15px',
        fontSize: '18px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, post.content), post.Images.length > 0 && __jsx(_postImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      alt: "image",
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 40
      }
    })),
    actions: info.id === post.UserId ? [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["LikeOutlined"], {
      key: "like",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 14
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CommentOutlined"], {
      key: "comment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
      key: "more",
      content: __jsx("a", {
        onClick: hide,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 40
        }
      }, "Close"),
      trigger: "click",
      visible: visible,
      onVisibleChange: handleVisibleChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EllipsisOutlined"], {
      key: "etc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }))] : [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["LikeOutlined"], {
      key: "like",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 14
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CommentOutlined"], {
      key: "comment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 43
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};

_s(PostCard, "FBN+cDIIWI9mFxIhVO0fEQaNFM0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImluZm8iLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGlkZSIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJ2aXNpYmwiLCJtYXJnaW5Ub3AiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsImZsZXgiLCJVc2VyIiwicHJvZmlsZUltZyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJuaWNrbmFtZSIsImNvbG9yIiwicGFyc2VEYXRlIiwiY3JlYXRlZEF0IiwiY29udGVudCIsIkltYWdlcyIsImxlbmd0aCIsImlkIiwiVXNlcklkIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBQWtCLE1BQWxCOztBQUQ2QixxQkFHWkcsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIQztBQUFBLE1BR3JCQyxJQUhxQixnQkFHckJBLElBSHFCOztBQUFBLGtCQUlDQyxRQUFRLENBQUMsS0FBRCxDQUpUO0FBQUE7QUFBQSxNQUl0QkMsT0FKc0I7QUFBQSxNQUliQyxVQUphOztBQU03QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pC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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0VBQUQ7QUFBa0IsU0FBRyxFQUFDLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUZFLENBREssR0FNTCxDQUFDLE1BQUMsOERBQUQ7QUFBYyxTQUFHLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFELEVBQThCLE1BQUMsaUVBQUQ7QUFBaUIsU0FBRyxFQUFDLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBOUIsQ0E1Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFrQ0QsQ0FoREQ7O0dBQU1aLFE7VUFHYUksdUQ7OztLQUhiSixRO0FBa0ROQSxRQUFRLENBQUNtQyxTQUFULEdBQXFCO0FBQ25CbEMsTUFBSSxFQUFFa0MsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESixDQUFyQjtBQUllckMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjNjNmI0YjdjNGM2OTdiYmQ4ZjczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ2FyZCwgQXZhdGFyLCBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IExpa2VPdXRsaW5lZCwgQ29tbWVudE91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgcGFyc2VEYXRlIGZyb20gJy4uL2Z1bmN0aW9ucy9wYXJzZURhdGUnO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL3Bvc3RJbWFnZXMnO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwb3N0LCAncG9zdCcpO1xyXG5cclxuICBjb25zdCB7IGluZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoaWRlID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVZpc2libGVDaGFuZ2UgPSAodmlzaWJsZSkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZSh2aXNpYmwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzEwMHB4JywgYm9yZGVyVG9wTGVmdFJhZGl1czogJzE1cHgnLCBib3JkZXJUb3BSaWdodFJhZGl1czogJzE1cHgnIH19XHJcbiAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgY292ZXI9eyhcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzE1cHgnLCBmbGV4OiAnMScgfX0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7cG9zdC5Vc2VyLnByb2ZpbGVJbWd9YH1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnNTBweCcgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAnMTUnLCBtYXJnaW5Ub3A6ICcxMnB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fT57cG9zdC5Vc2VyLm5pY2tuYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT57cGFyc2VEYXRlKHBvc3QuY3JlYXRlZEF0KX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46ICc3cHggMTVweCcsIGZvbnRTaXplOiAnMThweCcgfX0+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIHtwb3N0LkltYWdlcy5sZW5ndGggPiAwICYmIDxQb3N0SW1hZ2VzIGFsdD1cImltYWdlXCIgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIGFjdGlvbnM9e2luZm8uaWQgPT09IHBvc3QuVXNlcklkXHJcbiAgICAgICAgICA/IFs8TGlrZU91dGxpbmVkIGtleT1cImxpa2VcIiAvPixcclxuICAgICAgICAgIDxDb21tZW50T3V0bGluZWQga2V5PVwiY29tbWVudFwiIC8+LFxyXG4gICAgICAgICAgPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9ezxhIG9uQ2xpY2s9e2hpZGV9PkNsb3NlPC9hPn0gdHJpZ2dlcj1cImNsaWNrXCIgdmlzaWJsZT17dmlzaWJsZX0gb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVWaXNpYmxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZXRjXCIgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj5dXHJcbiAgICAgICAgICA6IFs8TGlrZU91dGxpbmVkIGtleT1cImxpa2VcIiAvPiwgPENvbW1lbnRPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgLz5dfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBwcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==