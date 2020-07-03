webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Applayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Applayout */ "./components/Applayout.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\pages\\profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Profile = function Profile() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      info = _useSelector.info;

  var infoData = [['아이디', info.id], ['이메일', info.email], ['닉네임', info.nickname], ['학과', info.department]];
  var PostData = [['질문 수', 10], ['답변 수', 20], ['해결 수:', 30]];
  return __jsx(_components_Applayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "site-card-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      backgroundColor: '#001529',
      height: '120px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "\uBC30\uB108"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 10,
    style: {
      marginTop: '20px',
      marginLeft: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "\uAE30\uBCF8 \uC815\uBCF4"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    bordered: true,
    dataSource: infoData,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }, __jsx("strong", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 19
        }
      }, item[0]), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 19
        }
      }, item[1]));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "\uD65C\uB3D9 \uC815\uBCF4"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    bordered: true,
    dataSource: PostData,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }
      }, __jsx("strong", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 19
        }
      }, item[0]), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 19
        }
      }, item[1]));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })))));
};

_s(Profile, "pLtD9gse/BEf+ZOURU1wB9PnijY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImluZm8iLCJpbmZvRGF0YSIsImlkIiwiZW1haWwiLCJuaWNrbmFtZSIsImRlcGFydG1lbnQiLCJQb3N0RGF0YSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEscUJBQ0hDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRFI7QUFBQSxNQUNaQyxJQURZLGdCQUNaQSxJQURZOztBQUdwQixNQUFNQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUQsRUFBUUQsSUFBSSxDQUFDRSxFQUFiLENBQUQsRUFBbUIsQ0FBQyxLQUFELEVBQVFGLElBQUksQ0FBQ0csS0FBYixDQUFuQixFQUF3QyxDQUFDLEtBQUQsRUFBUUgsSUFBSSxDQUFDSSxRQUFiLENBQXhDLEVBQWdFLENBQUMsSUFBRCxFQUFPSixJQUFJLENBQUNLLFVBQVosQ0FBaEUsQ0FBakI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQUQsRUFBUyxFQUFULENBQUQsRUFBZSxDQUFDLE1BQUQsRUFBUyxFQUFULENBQWYsRUFBNkIsQ0FBQyxPQUFELEVBQVUsRUFBVixDQUE3QixDQUFqQjtBQUNBLFNBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBRUMscUJBQWUsRUFBRSxTQUFuQjtBQUE4QkMsWUFBTSxFQUFFO0FBQXRDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUlFLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsRUFBYjtBQUFpQixTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFLE1BQWI7QUFBcUJDLGdCQUFVLEVBQUU7QUFBakMsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFTLGVBQVcsRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLEVBRUUsTUFBQyx5Q0FBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLGNBQVUsRUFBRVQsUUFGZDtBQUdFLGNBQVUsRUFBRSxvQkFBQ1UsSUFBRDtBQUFBLGFBQ1YsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBU0EsSUFBSSxDQUFDLENBQUQsQ0FBYixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFSLENBRkYsQ0FEVTtBQUFBLEtBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFjRSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFBUyxlQUFXLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixFQUVFLE1BQUMseUNBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxjQUFVLEVBQUVMLFFBRmQ7QUFHRSxjQUFVLEVBQUUsb0JBQUNLLElBQUQ7QUFBQSxhQUNWLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVNBLElBQUksQ0FBQyxDQUFELENBQWIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUEsSUFBSSxDQUFDLENBQUQsQ0FBUixDQUZGLENBRFU7QUFBQSxLQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQWRGLENBSkYsQ0FERixDQURGO0FBcUNELENBMUNEOztHQUFNZixPO1VBQ2FDLHVEOzs7S0FEYkQsTztBQTRDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2ZpbGUuanMuOGVhOGNkYzkxYzRlNTE4OTlhM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgRGl2aWRlciwgTGlzdCwgQ2FyZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwbGF5b3V0JztcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBpbmZvRGF0YSA9IFtbJ+yVhOydtOuUlCcsIGluZm8uaWRdLCBbJ+ydtOuplOydvCcsIGluZm8uZW1haWxdLCBbJ+uLieuEpOyehCcsIGluZm8ubmlja25hbWVdLCBbJ+2VmeqzvCcsIGluZm8uZGVwYXJ0bWVudF1dO1xyXG4gIGNvbnN0IFBvc3REYXRhID0gW1sn7KeI66y4IOyImCcsIDEwXSwgWyfri7Xrs4Ag7IiYJywgMjBdLCBbJ+2VtOqysCDsiJg6JywgMzBdXTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWNhcmQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAwMTUyOScsIGhlaWdodDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgIOuwsOuEiFxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXsxMH0gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcsIG1hcmdpbkxlZnQ6ICcyMHB4JyB9fT5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj7quLDrs7gg7KCV67O0PC9EaXZpZGVyPlxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZT17aW5mb0RhdGF9XHJcbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2l0ZW1bMF19PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtWzFdfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9PlxyXG4gICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIj7tmZzrj5kg7KCV67O0PC9EaXZpZGVyPlxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZT17UG9zdERhdGF9XHJcbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2l0ZW1bMF19PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntpdGVtWzFdfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==