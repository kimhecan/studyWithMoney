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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board */ "./components/board.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main */ "./components/main.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\Applayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var SubMenu = antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].SubMenu;

var AppLayout = function AppLayout() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      info = _useSelector.info;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('home'),
      current = _useState[0],
      setCurrent = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // SSR처리해야함

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_USER_REQUEST"]
    });
  }, []);

  var handleClick = function handleClick(e) {
    console.log(e.key);
    setCurrent(e.key);

    if (e.key === 'logout') {
      router.replace('/');
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOG_OUT_REQUEST"]
      });
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, info && info.id !== null ? __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 4,
    style: {
      backgroundColor: '#001529'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
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
      lineNumber: 43,
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
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 19
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "home",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HomeOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 45
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "user",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 45
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, info && info.nickname, "\uB2D8"), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["BulbOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 43
      }
    }),
    title: "\uACF5\uBD80\uD558\uB0E5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "problem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, "\uBB38\uC81C\uD480\uC774"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "concept",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, "\uAC1C\uB150\uC774\uD574")), __jsx(SubMenu, {
    key: "sub2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["AppstoreOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 43
      }
    }),
    title: "\uAC8C\uC2DC\uD310",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "freeBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "infoBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, "\uC815\uBCF4\uAC8C\uC2DC\uD310"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "clubBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, "\uB3D9\uC544\uB9AC\xB7\uD559\uD68C")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "inquiry",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ContainerOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 48
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "\uBB38\uC758\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "logout",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LogoutOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 47
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "\uB85C\uADF8\uC544\uC6C3"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: {
      backgroundColor: '#001529',
      height: '80px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 17
    }
  }, "\uD55C\uC591\uB300\uD559\uAD50")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: {
      backgroundColor: '#F2F3F5'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, current === 'home' && __jsx(_main__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 40
    }
  }), current === 'freeBoard' && __jsx(_board__WEBPACK_IMPORTED_MODULE_7__["default"], {
    category: current,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 45
    }
  }), current === 'infoBoard' && __jsx(_board__WEBPACK_IMPORTED_MODULE_7__["default"], {
    category: current,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 45
    }
  }), current === 'clubBoard' && __jsx(_board__WEBPACK_IMPORTED_MODULE_7__["default"], {
    category: current,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 45
    }
  })))) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "\uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
};

_s(AppLayout, "aRg0vejeMioXzWjbpGYPMm6Mtkw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcGxheW91dC5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiTWVudSIsIkFwcExheW91dCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaW5mbyIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImtleSIsInJlcGxhY2UiLCJMT0dfT1VUX1JFUVVFU1QiLCJpZCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInRleHRBbGlnbiIsIndpZHRoIiwibWFyZ2luVG9wIiwibmlja25hbWUiLCJtYXJnaW4iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxPLEdBQVlDLHlDLENBQVpELE87O0FBRVIsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLHFCQUNMQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUROO0FBQUEsTUFDZEMsSUFEYyxnQkFDZEEsSUFEYzs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxNQUFELENBRmhCO0FBQUEsTUFFZkMsT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBR3RCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSnNCLENBTXRCOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEosWUFBUSxDQUFDO0FBQ1BLLFVBQUksRUFBRUMsZ0VBQWlCQTtBQURoQixLQUFE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LEVBQUU7QUFBOUIsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLENBREYsRUFJRSxNQUFDLHdDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVQLHFCQUFlLEVBQUU7QUFBbkIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dqQixPQUFPLEtBQUssTUFBWixJQUFzQixNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEekIsRUFFR0EsT0FBTyxLQUFLLFdBQVosSUFBMkIsTUFBQyw4Q0FBRDtBQUFPLFlBQVEsRUFBRUEsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUY5QixFQUdHQSxPQUFPLEtBQUssV0FBWixJQUEyQixNQUFDLDhDQUFEO0FBQU8sWUFBUSxFQUFFQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSDlCLEVBSUdBLE9BQU8sS0FBSyxXQUFaLElBQTJCLE1BQUMsOENBQUQ7QUFBTyxZQUFRLEVBQUVBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKOUIsQ0FKRixDQXpDRixDQUZILEdBd0RHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBekROLENBREY7QUE2REQsQ0FyRkQ7O0dBQU1OLFM7VUFDYUMsdUQsRUFFQVEsdUQsRUFDRkUscUQ7OztLQUpYWCxTO0FBdUZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjgyYzFiMmQ4YjM5OWU0MTI3YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTWVudSwgQ29sLCBSb3cgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQXBwc3RvcmVPdXRsaW5lZCwgSG9tZU91dGxpbmVkLCBVc2VyT3V0bGluZWQsIENvbnRhaW5lck91dGxpbmVkLCBCdWxiT3V0bGluZWQsIExvZ291dE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfUkVRVUVTVCwgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkJztcclxuaW1wb3J0IE1haW4gZnJvbSAnLi9tYWluJztcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICgpID0+IHtcclxuICBjb25zdCB7IGluZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoJ2hvbWUnKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIFNTUuyymOumrO2VtOyVvO2VqFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLmtleSk7XHJcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcclxuICAgIGlmIChlLmtleSA9PT0gJ2xvZ291dCcpIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpbmZvICYmIGluZm8uaWQgIT09IG51bGxcclxuICAgICAgICA/IChcclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzAwMTUyOScgfX0+XHJcbiAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17Wydob21lJ119XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1t7IGN1cnJlbnQgfV19XHJcbiAgICAgICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgICBmb3JjZVN1Yk1lbnVSZW5kZXI9XCJ0cnVlXCJcclxuXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMzBweCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8zOTI5NTg4MS84NjI0ODkxMy03ZjhkZTA4MC1iYmU5LTExZWEtODAxYS03M2Y0ZjQyNmVkMGQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImhvbWVcIiBpY29uPXs8SG9tZU91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInVzZXJcIiBpY29uPXs8VXNlck91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAge2luZm8gJiYgaW5mby5uaWNrbmFtZX3ri5hcclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMVwiIGljb249ezxCdWxiT3V0bGluZWQgLz59IHRpdGxlPVwi6rO167aA7ZWY64OlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwicHJvYmxlbVwiPuusuOygnO2SgOydtDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImNvbmNlcHRcIj7qsJzrhZDsnbTtlbQ8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjJcIiBpY29uPXs8QXBwc3RvcmVPdXRsaW5lZCAvPn0gdGl0bGU9XCLqsozsi5ztjJBcIj5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJmcmVlQm9hcmRcIj7snpDsnKDqsozsi5ztjJA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJpbmZvQm9hcmRcIj7soJXrs7Tqsozsi5ztjJA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjbHViQm9hcmRcIj7rj5nslYTrpqzCt+2Vme2ajDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJpbnF1aXJ5XCIgaWNvbj17PENvbnRhaW5lck91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAg66y47J2Y7ZWY6riwXHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibG9nb3V0XCIgaWNvbj17PExvZ291dE91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgICAg66Gc6re47JWE7JuDXHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezIwfT5cclxuICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwMDE1MjknLCBoZWlnaHQ6ICc4MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogJ2F1dG8gYXV0bycsIGNvbG9yOiAnd2hpdGUnIH19Pu2VnOyWkeuMgO2Vmeq1kDwvcD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNGMkYzRjUnIH19PlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnQgPT09ICdob21lJyAmJiA8TWFpbiAvPn1cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSAnZnJlZUJvYXJkJyAmJiA8Qm9hcmQgY2F0ZWdvcnk9e2N1cnJlbnR9IC8+fVxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnQgPT09ICdpbmZvQm9hcmQnICYmIDxCb2FyZCBjYXRlZ29yeT17Y3VycmVudH0gLz59XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gJ2NsdWJCb2FyZCcgJiYgPEJvYXJkIGNhdGVnb3J5PXtjdXJyZW50fSAvPn1cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApXHJcbiAgICAgICAgOiA8cD7qtoztlZzsnbQg7JeG7Iq164uI64ukLjwvcD59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9