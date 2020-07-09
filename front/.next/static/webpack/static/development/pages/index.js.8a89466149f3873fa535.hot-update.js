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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      src: "http://localhost:3065/profile/".concat(post.User.profileImg),
      size: "large",
      style: {
        margin: '10px 15px',
        width: '50px',
        height: '50px',
        display: 'inline-block'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }), __jsx("div", {
      style: {
        display: 'inline-block'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx("strong", {
      style: {
        marginLeft: '5px',
        marginTop: '15px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }, post.User.nickname), __jsx("p", {
      style: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 15
      }
    }, Object(_functions_parseDate__WEBPACK_IMPORTED_MODULE_4__["default"])(post.createdAt))), __jsx("p", {
      style: {
        margin: '3px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, post.content), post.Images.length > 0 && __jsx(_postImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      alt: "image",
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 40
      }
    })),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {
      key: "setting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      key: "ellipsis",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsIlVzZXIiLCJwcm9maWxlSW1nIiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm5pY2tuYW1lIiwicGFyc2VEYXRlIiwiY3JlYXRlZEF0IiwiY29udGVudCIsIkltYWdlcyIsImxlbmd0aCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLEVBQWpCLEVBQXFCLFNBQXJCO0FBRUEsU0FDRSxtRUFDRSxNQUFDLHlDQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRSxPQUFiO0FBQXNCQyxrQkFBWSxFQUFFO0FBQXBDLEtBRFQ7QUFFRSxhQUFTLE1BRlg7QUFHRSxTQUFLLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMkNBQUQ7QUFDRSxTQUFHLDBDQUFtQ0wsSUFBSSxDQUFDTSxJQUFMLENBQVVDLFVBQTdDLENBREw7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUUsV0FBVjtBQUF1QkMsYUFBSyxFQUFFLE1BQTlCO0FBQXNDQyxjQUFNLEVBQUUsTUFBOUM7QUFBc0RDLGVBQU8sRUFBRTtBQUEvRCxPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUssV0FBSyxFQUFFO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVEsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUUsS0FBZDtBQUFxQlIsaUJBQVMsRUFBRTtBQUFoQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMERKLElBQUksQ0FBQ00sSUFBTCxDQUFVTyxRQUFwRSxDQURGLEVBRUU7QUFBRyxXQUFLLEVBQUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWVDLG9FQUFTLENBQUNkLElBQUksQ0FBQ2UsU0FBTixDQUF4QixDQUZGLENBTkYsRUFVRTtBQUFHLFdBQUssRUFBRTtBQUFFUCxjQUFNLEVBQUU7QUFBVixPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBOEJSLElBQUksQ0FBQ2dCLE9BQW5DLENBVkYsRUFXR2hCLElBQUksQ0FBQ2lCLE1BQUwsQ0FBWUMsTUFBWixHQUFxQixDQUFyQixJQUEwQixNQUFDLG1EQUFEO0FBQVksU0FBRyxFQUFDLE9BQWhCO0FBQXdCLFlBQU0sRUFBRWxCLElBQUksQ0FBQ2lCLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYN0IsQ0FKSjtBQWtCRSxXQUFPLEVBQUUsQ0FDUCxNQUFDLGlFQUFEO0FBQWlCLFNBQUcsRUFBQyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRE8sRUFFUCxNQUFDLDhEQUFEO0FBQWMsU0FBRyxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGTyxFQUdQLE1BQUMsa0VBQUQ7QUFBa0IsU0FBRyxFQUFDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFITyxDQWxCWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQTRCRCxDQS9CRDs7S0FBTWxCLFE7QUFpQ05BLFFBQVEsQ0FBQ29CLFNBQVQsR0FBcUI7QUFDbkJuQixNQUFJLEVBQUVtQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURKLENBQXJCO0FBSWV0Qix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOGE4OTQ2NjE0OWYzODczZmE1MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTZXR0aW5nT3V0bGluZWQsIEVkaXRPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHBhcnNlRGF0ZSBmcm9tICcuLi9mdW5jdGlvbnMvcGFyc2VEYXRlJztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9wb3N0SW1hZ2VzJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocG9zdC5pZCwgJ3Bvc3QuaWQnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTAwcHgnLCBib3JkZXJSYWRpdXM6ICcxNXB4JyB9fVxyXG4gICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgIGNvdmVyPXsoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Byb2ZpbGUvJHtwb3N0LlVzZXIucHJvZmlsZUltZ31gfVxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCAxNXB4Jywgd2lkdGg6ICc1MHB4JywgaGVpZ2h0OiAnNTBweCcsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNXB4JywgbWFyZ2luVG9wOiAnMTVweCcgfX0+e3Bvc3QuVXNlci5uaWNrbmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8cCBzdHlsZT17e319PntwYXJzZURhdGUocG9zdC5jcmVhdGVkQXQpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJzNweCcgfX0+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIHtwb3N0LkltYWdlcy5sZW5ndGggPiAwICYmIDxQb3N0SW1hZ2VzIGFsdD1cImltYWdlXCIgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCBrZXk9XCJlbGxpcHNpc1wiIC8+LFxyXG4gICAgICAgIF19XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IHByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9