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
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PostCard = function PostCard(_ref) {
  var post = _ref.post;
  console.log(post, 'post'); // const [ info ] = useSelector((state) => state.user);
  // const [ postInfos ] 

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
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SettingOutlined"], {
      key: "setting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 54
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      key: "ellipsis",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 83
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbiIsImZsZXgiLCJVc2VyIiwicHJvZmlsZUltZyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJuaWNrbmFtZSIsImNvbG9yIiwicGFyc2VEYXRlIiwiY3JlYXRlZEF0IiwiY29udGVudCIsIkltYWdlcyIsImxlbmd0aCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBQWtCLE1BQWxCLEVBRDZCLENBRzdCO0FBQ0E7O0FBRUEsU0FDRSxtRUFDRSxNQUFDLHlDQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVHLGVBQVMsRUFBRSxPQUFiO0FBQXNCQyx5QkFBbUIsRUFBRSxNQUEzQztBQUFtREMsMEJBQW9CLEVBQUU7QUFBekUsS0FEVDtBQUVFLGFBQVMsTUFGWDtBQUdFLFNBQUssRUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLHFCQUFhLEVBQUU7QUFBbEMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFLE1BQVY7QUFBa0JDLFlBQUksRUFBRTtBQUF4QixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJDQUFEO0FBQ0UsU0FBRywwQ0FBbUNULElBQUksQ0FBQ1UsSUFBTCxDQUFVQyxVQUE3QyxDQURMO0FBRUUsVUFBSSxFQUFDLE9BRlA7QUFHRSxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQU0sRUFBRTtBQUF6QixPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLEVBUUU7QUFBSyxXQUFLLEVBQUU7QUFBRUosWUFBSSxFQUFFLElBQVI7QUFBY04saUJBQVMsRUFBRTtBQUF6QixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFRLFdBQUssRUFBRTtBQUFFVyxnQkFBUSxFQUFFO0FBQVosT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXNDZCxJQUFJLENBQUNVLElBQUwsQ0FBVUssUUFBaEQsQ0FERixFQUVFO0FBQUcsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE4QkMsb0VBQVMsQ0FBQ2pCLElBQUksQ0FBQ2tCLFNBQU4sQ0FBdkMsQ0FGRixDQVJGLENBREYsRUFjRTtBQUFHLFdBQUssRUFBRTtBQUFFVixjQUFNLEVBQUUsVUFBVjtBQUFzQk0sZ0JBQVEsRUFBRTtBQUFoQyxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcURkLElBQUksQ0FBQ21CLE9BQTFELENBZEYsRUFlR25CLElBQUksQ0FBQ29CLE1BQUwsQ0FBWUMsTUFBWixHQUFxQixDQUFyQixJQUEwQixNQUFDLG1EQUFEO0FBQVksU0FBRyxFQUFDLE9BQWhCO0FBQXdCLFlBQU0sRUFBRXJCLElBQUksQ0FBQ29CLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFmN0IsQ0FKSjtBQXNCRSxXQUFPLEVBQUUsQ0FBQyxNQUFDLGlFQUFEO0FBQWlCLFNBQUcsRUFBQyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUQsRUFBb0MsTUFBQyw4REFBRDtBQUFjLFNBQUcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXBDLEVBQWlFLE1BQUMsa0VBQUQ7QUFBa0IsU0FBRyxFQUFDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBakUsQ0F0Qlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUE0QkQsQ0FsQ0Q7O0tBQU1yQixRO0FBb0NOQSxRQUFRLENBQUN1QixTQUFULEdBQXFCO0FBQ25CdEIsTUFBSSxFQUFFc0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESixDQUFyQjtBQUllekIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjZlNmI2N2EwNDRjNWFmNTZiMzQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ2FyZCwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNldHRpbmdPdXRsaW5lZCwgRWRpdE91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgcGFyc2VEYXRlIGZyb20gJy4uL2Z1bmN0aW9ucy9wYXJzZURhdGUnO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL3Bvc3RJbWFnZXMnO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwb3N0LCAncG9zdCcpO1xyXG5cclxuICAvLyBjb25zdCBbIGluZm8gXSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgLy8gY29uc3QgWyBwb3N0SW5mb3MgXSBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTAwcHgnLCBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMTVweCcsIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnMTVweCcgfX1cclxuICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICBjb3Zlcj17KFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMTVweCcsIGZsZXg6ICcxJyB9fT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Byb2ZpbGUvJHtwb3N0LlVzZXIucHJvZmlsZUltZ31gfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICc1MHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6ICcxNScsIG1hcmdpblRvcDogJzEycHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBzdHlsZT17eyBmb250U2l6ZTogJzE2cHgnIH19Pntwb3N0LlVzZXIubmlja25hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19PntwYXJzZURhdGUocG9zdC5jcmVhdGVkQXQpfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJzdweCAxNXB4JywgZm9udFNpemU6ICcxOHB4JyB9fT57cG9zdC5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAge3Bvc3QuSW1hZ2VzLmxlbmd0aCA+IDAgJiYgPFBvc3RJbWFnZXMgYWx0PVwiaW1hZ2VcIiBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgYWN0aW9ucz17WzxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LCA8RWRpdE91dGxpbmVkIGtleT1cImVkaXRcIiAvPiwgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPl19XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IHByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9