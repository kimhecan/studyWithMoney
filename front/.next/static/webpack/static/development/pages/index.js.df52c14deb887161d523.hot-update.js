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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_parseDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/parseDate */ "./functions/parseDate.js");
/* harmony import */ var _postImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postImages */ "./components/postImages.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  console.log(post, 'post');

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      info = _useSelector.info;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
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
        lineNumber: 21,
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
        lineNumber: 22,
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
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      src: "http://localhost:3065/profile/".concat(post.User.profileImg),
      size: "large",
      style: {
        width: '50px',
        height: '50px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
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
        lineNumber: 30,
        columnNumber: 15
      }
    }, __jsx("strong", {
      style: {
        fontSize: '16px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, post.User.nickname), __jsx("p", {
      style: {
        color: 'gray'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, Object(_functions_parseDate__WEBPACK_IMPORTED_MODULE_5__["default"])(post.createdAt)))), __jsx("p", {
      style: {
        margin: '7px 15px',
        fontSize: '18px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, post.content), post.Images.length > 0 && __jsx(_postImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      alt: "image",
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 40
      }
    })),
    actions: info.id === post.UserId ? [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SettingOutlined"], {
      key: "setting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 12
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 47
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      key: "ellipsis",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 76
      }
    })] : [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SettingOutlined"], {
      key: "setting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 12
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 47
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
};

_s(PostCard, "pLtD9gse/BEf+ZOURU1wB9PnijY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImluZm8iLCJtYXJnaW5Ub3AiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsImZsZXgiLCJVc2VyIiwicHJvZmlsZUltZyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJuaWNrbmFtZSIsImNvbG9yIiwicGFyc2VEYXRlIiwiY3JlYXRlZEF0IiwiY29udGVudCIsIkltYWdlcyIsImxlbmd0aCIsImlkIiwiVXNlcklkIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBQWtCLE1BQWxCOztBQUQ2QixxQkFHWkcsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIQztBQUFBLE1BR3JCQyxJQUhxQixnQkFHckJBLElBSHFCOztBQU03QixTQUNFLG1FQUNFLE1BQUMseUNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFLE9BQWI7QUFBc0JDLHlCQUFtQixFQUFFLE1BQTNDO0FBQW1EQywwQkFBb0IsRUFBRTtBQUF6RSxLQURUO0FBRUUsYUFBUyxNQUZYO0FBR0UsU0FBSyxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUUsTUFBWDtBQUFtQkMscUJBQWEsRUFBRTtBQUFsQyxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUUsTUFBVjtBQUFrQkMsWUFBSSxFQUFFO0FBQXhCLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMkNBQUQ7QUFDRSxTQUFHLDBDQUFtQ2IsSUFBSSxDQUFDYyxJQUFMLENBQVVDLFVBQTdDLENBREw7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsTUFBVDtBQUFpQkMsY0FBTSxFQUFFO0FBQXpCLE9BSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFRRTtBQUFLLFdBQUssRUFBRTtBQUFFSixZQUFJLEVBQUUsSUFBUjtBQUFjTixpQkFBUyxFQUFFO0FBQXpCLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVEsV0FBSyxFQUFFO0FBQUVXLGdCQUFRLEVBQUU7QUFBWixPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0NsQixJQUFJLENBQUNjLElBQUwsQ0FBVUssUUFBaEQsQ0FERixFQUVFO0FBQUcsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE4QkMsb0VBQVMsQ0FBQ3JCLElBQUksQ0FBQ3NCLFNBQU4sQ0FBdkMsQ0FGRixDQVJGLENBREYsRUFjRTtBQUFHLFdBQUssRUFBRTtBQUFFVixjQUFNLEVBQUUsVUFBVjtBQUFzQk0sZ0JBQVEsRUFBRTtBQUFoQyxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcURsQixJQUFJLENBQUN1QixPQUExRCxDQWRGLEVBZUd2QixJQUFJLENBQUN3QixNQUFMLENBQVlDLE1BQVosR0FBcUIsQ0FBckIsSUFBMEIsTUFBQyxtREFBRDtBQUFZLFNBQUcsRUFBQyxPQUFoQjtBQUF3QixZQUFNLEVBQUV6QixJQUFJLENBQUN3QixNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZjdCLENBSko7QUFzQkUsV0FBTyxFQUFFbEIsSUFBSSxDQUFDb0IsRUFBTCxLQUFZMUIsSUFBSSxDQUFDMkIsTUFBakIsR0FFUCxDQUFDLE1BQUMsaUVBQUQ7QUFBaUIsU0FBRyxFQUFDLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBRCxFQUFvQyxNQUFDLDhEQUFEO0FBQWMsU0FBRyxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBcEMsRUFBaUUsTUFBQyxrRUFBRDtBQUFrQixTQUFHLEVBQUMsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFqRSxDQUZPLEdBSVAsQ0FBQyxNQUFDLGlFQUFEO0FBQWlCLFNBQUcsRUFBQyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUQsRUFBb0MsTUFBQyw4REFBRDtBQUFjLFNBQUcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXBDLENBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBaUNELENBdkNEOztHQUFNNUIsUTtVQUdhSSx1RDs7O0tBSGJKLFE7QUF5Q05BLFFBQVEsQ0FBQzZCLFNBQVQsR0FBcUI7QUFDbkI1QixNQUFJLEVBQUU0QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURKLENBQXJCO0FBSWUvQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZGY1MmMxNGRlYjg4NzE2MWQ1MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDYXJkLCBBdmF0YXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgU2V0dGluZ091dGxpbmVkLCBFZGl0T3V0bGluZWQsIEVsbGlwc2lzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBwYXJzZURhdGUgZnJvbSAnLi4vZnVuY3Rpb25zL3BhcnNlRGF0ZSc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vcG9zdEltYWdlcyc7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBvc3QsICdwb3N0Jyk7XHJcblxyXG4gIGNvbnN0IHsgaW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzEwMHB4JywgYm9yZGVyVG9wTGVmdFJhZGl1czogJzE1cHgnLCBib3JkZXJUb3BSaWdodFJhZGl1czogJzE1cHgnIH19XHJcbiAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgY292ZXI9eyhcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzE1cHgnLCBmbGV4OiAnMScgfX0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wcm9maWxlLyR7cG9zdC5Vc2VyLnByb2ZpbGVJbWd9YH1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnNTBweCcgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAnMTUnLCBtYXJnaW5Ub3A6ICcxMnB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgZm9udFNpemU6ICcxNnB4JyB9fT57cG9zdC5Vc2VyLm5pY2tuYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT57cGFyc2VEYXRlKHBvc3QuY3JlYXRlZEF0KX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46ICc3cHggMTVweCcsIGZvbnRTaXplOiAnMThweCcgfX0+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIHtwb3N0LkltYWdlcy5sZW5ndGggPiAwICYmIDxQb3N0SW1hZ2VzIGFsdD1cImltYWdlXCIgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIGFjdGlvbnM9e2luZm8uaWQgPT09IHBvc3QuVXNlcklkXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICBbPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJzZXR0aW5nXCIgLz4sIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LCA8RWxsaXBzaXNPdXRsaW5lZCBrZXk9XCJlbGxpcHNpc1wiIC8+XVxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgWzxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LCA8RWRpdE91dGxpbmVkIGtleT1cImVkaXRcIiAvPl1cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IHByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9