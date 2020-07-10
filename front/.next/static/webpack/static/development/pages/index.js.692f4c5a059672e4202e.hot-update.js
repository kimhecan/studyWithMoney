webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Applayout.js":
/*!*********************************!*\
  !*** ./components/Applayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board */ "./components/board.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main */ "./components/main.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\Applayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var SubMenu = antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].SubMenu;

var AppLayout = function AppLayout() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      info = _useSelector.info;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Main'),
      current = _useState[0],
      setCurrent = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // SSR처리해야함

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_USER_REQUEST"]
    });
  }, []);

  var handleClick = function handleClick(e) {
    console.log(e.key);
    setCurrent(e.key);

    if (e.key.slice(4, e.key.length) === 'Board') {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["POST_RESET"]
      });
    }

    if (e.key === 'logout') {
      router.replace('/');
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOG_OUT_REQUEST"]
      });
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, info && info.id !== null ? __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 4,
    style: {
      backgroundColor: '#001529'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    onClick: handleClick,
    defaultSelectedKeys: ['home'],
    defaultOpenKeys: [{
      current: current
    }],
    mode: "inline",
    theme: "dark",
    forceSubMenuRender: "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      height: '130px',
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://user-images.githubusercontent.com/39295881/86248913-7f8de080-bbe9-11ea-801a-73f4f426ed0d.png",
    alt: "img",
    style: {
      width: '150px',
      marginTop: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "main",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["HomeOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 45
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "user",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["UserOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 45
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, info && info.nickname, "\uB2D8"), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["BulbOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 43
      }
    }),
    title: "\uACF5\uBD80\uD558\uB0E5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "problem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, "\uBB38\uC81C\uD480\uC774"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "concept",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, "\uAC1C\uB150\uC774\uD574")), __jsx(SubMenu, {
    key: "sub2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["AppstoreOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 43
      }
    }),
    title: "\uAC8C\uC2DC\uD310",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "freeBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "infoBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, "\uC815\uBCF4\uAC8C\uC2DC\uD310"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "clubBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, "\uB3D9\uC544\uB9AC\xB7\uD559\uD68C")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "inquiry",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ContainerOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 48
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "\uBB38\uC758\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    key: "logout",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["LogoutOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 47
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "\uB85C\uADF8\uC544\uC6C3"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: {
      backgroundColor: '#001529',
      height: '80px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      margin: 'auto auto',
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, "\uD55C\uC591\uB300\uD559\uAD50")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: {
      backgroundColor: '#F2F3F5'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, current === 'main' && __jsx(_main__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 42
    }
  }), current === 'freeBoard' && __jsx(_board__WEBPACK_IMPORTED_MODULE_7__["default"], {
    category: current,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 47
    }
  }), current === 'infoBoard' && __jsx(_board__WEBPACK_IMPORTED_MODULE_7__["default"], {
    category: current,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 47
    }
  }), current === 'clubBoard' && __jsx(_board__WEBPACK_IMPORTED_MODULE_7__["default"], {
    category: current,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 47
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      flex: '1',
      backgroundColor: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, __jsx("h1", {
    style: {
      color: '#65676b'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, "Sponsored")))))) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "\uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
};

_s(AppLayout, "hyijUyFtW7UBTiWNsQDJiRJip9s=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = AppLayout;
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c;

$RefreshReg$(_c, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcGxheW91dC5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiTWVudSIsIkFwcExheW91dCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaW5mbyIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImtleSIsInNsaWNlIiwibGVuZ3RoIiwiUE9TVF9SRVNFVCIsInJlcGxhY2UiLCJMT0dfT1VUX1JFUVVFU1QiLCJpZCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInRleHRBbGlnbiIsIndpZHRoIiwibWFyZ2luVG9wIiwibmlja25hbWUiLCJtYXJnaW4iLCJjb2xvciIsImZsZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxPLEdBQVlDLHlDLENBQVpELE87O0FBRVIsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLHFCQUNMQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUROO0FBQUEsTUFDZEMsSUFEYyxnQkFDZEEsSUFEYzs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxNQUFELENBRmhCO0FBQUEsTUFFZkMsT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBR3RCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSnNCLENBTXRCOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEosWUFBUSxDQUFD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LEVBQUU7QUFBRTRCLFVBQUksRUFBRSxHQUFSO0FBQWFSLHFCQUFlLEVBQUU7QUFBOUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRU8sV0FBSyxFQUFFO0FBQVQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsQ0FQRixDQUpGLENBekNGLENBRkgsR0ErREc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFoRU4sQ0FERjtBQW9FRCxDQWpHRDs7R0FBTWpDLFM7VUFDYUMsdUQsRUFFQVEsdUQsRUFDRkUscUQ7OztLQUpYWCxTO0FBbUdTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjkyZjRjNWEwNTk2NzJlNDIwMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgTWVudSwgQ29sLCBSb3cgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQXBwc3RvcmVPdXRsaW5lZCwgSG9tZU91dGxpbmVkLCBVc2VyT3V0bGluZWQsIENvbnRhaW5lck91dGxpbmVkLCBCdWxiT3V0bGluZWQsIExvZ291dE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfUkVRVUVTVCwgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IFBPU1RfUkVTRVQgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL21haW4nO1xyXG5cclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaW5mbyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgnTWFpbicpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gU1NS7LKY66as7ZW07JW87ZWoXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGUua2V5KTtcclxuICAgIHNldEN1cnJlbnQoZS5rZXkpO1xyXG4gICAgaWYgKGUua2V5LnNsaWNlKDQsIGUua2V5Lmxlbmd0aCkgPT09ICdCb2FyZCcpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFBPU1RfUkVTRVQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGUua2V5ID09PSAnbG9nb3V0Jykge1xyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2luZm8gJiYgaW5mby5pZCAhPT0gbnVsbFxyXG4gICAgICAgID8gKFxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXs0fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAxNTI5JyB9fT5cclxuICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJ2hvbWUnXX1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17W3sgY3VycmVudCB9XX1cclxuICAgICAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgIGZvcmNlU3ViTWVudVJlbmRlcj1cInRydWVcIlxyXG5cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEzMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzM5Mjk1ODgxLzg2MjQ4OTEzLTdmOGRlMDgwLWJiZTktMTFlYS04MDFhLTczZjRmNDI2ZWQwZC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcsIG1hcmdpblRvcDogJzEwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpblwiIGljb249ezxIb21lT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwidXNlclwiIGljb249ezxVc2VyT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICB7aW5mbyAmJiBpbmZvLm5pY2tuYW1lfeuLmFxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIxXCIgaWNvbj17PEJ1bGJPdXRsaW5lZCAvPn0gdGl0bGU9XCLqs7XrtoDtlZjrg6VcIj5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJwcm9ibGVtXCI+66y47KCc7ZKA7J20PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY29uY2VwdFwiPuqwnOuFkOydtO2VtDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMlwiIGljb249ezxBcHBzdG9yZU91dGxpbmVkIC8+fSB0aXRsZT1cIuqyjOyLnO2MkFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImZyZWVCb2FyZFwiPuyekOycoOqyjOyLnO2MkDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImluZm9Cb2FyZFwiPuygleuztOqyjOyLnO2MkDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNsdWJCb2FyZFwiPuuPmeyVhOumrMK37ZWZ7ZqMPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImlucXVpcnlcIiBpY29uPXs8Q29udGFpbmVyT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICDrrLjsnZjtlZjquLBcclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJsb2dvdXRcIiBpY29uPXs8TG9nb3V0T3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICDroZzqt7jslYTsm4NcclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9PlxyXG4gICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAwMTUyOScsIGhlaWdodDogJzgwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luOiAnYXV0byBhdXRvJywgY29sb3I6ICd3aGl0ZScgfX0+7ZWc7JaR64yA7ZWZ6rWQPC9wPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI0YyRjNGNScgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezE2fT5cclxuICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPT09ICdtYWluJyAmJiA8TWFpbiAvPn1cclxuICAgICAgICAgICAgICAgICAge2N1cnJlbnQgPT09ICdmcmVlQm9hcmQnICYmIDxCb2FyZCBjYXRlZ29yeT17Y3VycmVudH0gLz59XHJcbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSAnaW5mb0JvYXJkJyAmJiA8Qm9hcmQgY2F0ZWdvcnk9e2N1cnJlbnR9IC8+fVxyXG4gICAgICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gJ2NsdWJCb2FyZCcgJiYgPEJvYXJkIGNhdGVnb3J5PXtjdXJyZW50fSAvPn1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAnMScsIGJhY2tncm91bmRDb2xvcjogJ3JlZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAnIzY1Njc2YicgfX0+U3BvbnNvcmVkPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApXHJcbiAgICAgICAgOiA8cD7qtoztlZzsnbQg7JeG7Iq164uI64ukLjwvcD59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9