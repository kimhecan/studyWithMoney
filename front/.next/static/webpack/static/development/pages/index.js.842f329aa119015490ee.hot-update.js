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
      style: {
        "float": 'left'
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
        marginLeft: '20px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
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
        lineNumber: 20,
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
        lineNumber: 21,
        columnNumber: 15
      }
    }, Object(_functions_parseDate__WEBPACK_IMPORTED_MODULE_4__["default"])(post.createdAt))), __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, post.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, post.content), post.Images.length > 0 && __jsx(_postImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      alt: "image",
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 40
      }
    })),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {
      key: "setting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      key: "ellipsis",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsIlVzZXIiLCJwcm9maWxlSW1nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwiZmxleCIsIm5pY2tuYW1lIiwicGFyc2VEYXRlIiwiY3JlYXRlZEF0IiwidGl0bGUiLCJjb250ZW50IiwiSW1hZ2VzIiwibGVuZ3RoIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csRUFBakIsRUFBcUIsU0FBckI7QUFFQSxTQUNFLG1FQUNFLE1BQUMseUNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFLE9BQWI7QUFBc0JDLGtCQUFZLEVBQUU7QUFBcEMsS0FEVDtBQUVFLGFBQVMsTUFGWDtBQUdFLFNBQUssRUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUFRLFNBQUcsMENBQW1DTCxJQUFJLENBQUNNLElBQUwsQ0FBVUMsVUFBN0MsQ0FBWDtBQUFzRSxXQUFLLEVBQUU7QUFBRSxpQkFBTztBQUFULE9BQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRSxNQUFYO0FBQW1CQyxxQkFBYSxFQUFFLFFBQWxDO0FBQTRDQyxrQkFBVSxFQUFFO0FBQXhELE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVEsV0FBSyxFQUFFO0FBQUVDLFlBQUksRUFBRSxDQUFSO0FBQVdELGtCQUFVLEVBQUU7QUFBdkIsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlEVixJQUFJLENBQUNNLElBQUwsQ0FBVU0sUUFBM0QsQ0FERixFQUVFO0FBQUcsV0FBSyxFQUFFO0FBQUVELFlBQUksRUFBRSxDQUFSO0FBQVdELGtCQUFVLEVBQUU7QUFBdkIsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTRDRyxvRUFBUyxDQUFDYixJQUFJLENBQUNjLFNBQU4sQ0FBckQsQ0FGRixDQUZGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFTZCxJQUFJLENBQUNlLEtBQWQsQ0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSWYsSUFBSSxDQUFDZ0IsT0FBVCxDQVBGLEVBUUdoQixJQUFJLENBQUNpQixNQUFMLENBQVlDLE1BQVosR0FBcUIsQ0FBckIsSUFBMEIsTUFBQyxtREFBRDtBQUFZLFNBQUcsRUFBQyxPQUFoQjtBQUF3QixZQUFNLEVBQUVsQixJQUFJLENBQUNpQixNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUjdCLENBSko7QUFlRSxXQUFPLEVBQUUsQ0FDUCxNQUFDLGlFQUFEO0FBQWlCLFNBQUcsRUFBQyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRE8sRUFFUCxNQUFDLDhEQUFEO0FBQWMsU0FBRyxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGTyxFQUdQLE1BQUMsa0VBQUQ7QUFBa0IsU0FBRyxFQUFDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFITyxDQWZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBeUJELENBNUJEOztLQUFNbEIsUTtBQThCTkEsUUFBUSxDQUFDb0IsU0FBVCxHQUFxQjtBQUNuQm5CLE1BQUksRUFBRW1CLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREosQ0FBckI7QUFJZXRCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44NDJmMzI5YWExMTkwMTU0OTBlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNldHRpbmdPdXRsaW5lZCwgRWRpdE91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgcGFyc2VEYXRlIGZyb20gJy4uL2Z1bmN0aW9ucy9wYXJzZURhdGUnO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL3Bvc3RJbWFnZXMnO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhwb3N0LmlkLCAncG9zdC5pZCcpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcmRcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMDBweCcsIGJvcmRlclJhZGl1czogJzE1cHgnIH19XHJcbiAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgY292ZXI9eyhcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Byb2ZpbGUvJHtwb3N0LlVzZXIucHJvZmlsZUltZ31gfSBzdHlsZT17eyBmbG9hdDogJ2xlZnQnIH19IC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgZmxleDogMSwgbWFyZ2luTGVmdDogJzEwcHgnIH19Pntwb3N0LlVzZXIubmlja25hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZmxleDogMSwgbWFyZ2luTGVmdDogJzEwcHgnIH19PntwYXJzZURhdGUocG9zdC5jcmVhdGVkQXQpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3Bvc3QudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICB7cG9zdC5JbWFnZXMubGVuZ3RoID4gMCAmJiA8UG9zdEltYWdlcyBhbHQ9XCJpbWFnZVwiIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGtleT1cInNldHRpbmdcIiAvPixcclxuICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPixcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBwcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==