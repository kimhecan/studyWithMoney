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

    if (e.key.slice(e.key.length - 5, e.key.length) === 'Board') {
      console.log(current.slice(0, 4));
    } else if (e.key === 'logout') {
      router.replace('/');
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOG_OUT_REQUEST"]
      });
    } else {
      router.push("/".concat(e.key));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, info && info.id !== null ? __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
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
      lineNumber: 47,
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
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 19
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "home",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HomeOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 45
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "user",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 45
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, info && info.nickname, "\uB2D8"), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["BulbOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 43
      }
    }),
    title: "\uACF5\uBD80\uD558\uB0E5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "problem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "\uBB38\uC81C\uD480\uC774"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "concept",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, "\uAC1C\uB150\uC774\uD574")), __jsx(SubMenu, {
    key: "sub2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["AppstoreOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 43
      }
    }),
    title: "\uAC8C\uC2DC\uD310",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "freeBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "infoBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "\uC815\uBCF4\uAC8C\uC2DC\uD310"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "clubBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, "\uB3D9\uC544\uB9AC\xB7\uD559\uD68C")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "inquiry",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ContainerOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 48
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "\uBB38\uC758\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "logout",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LogoutOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 47
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "\uB85C\uADF8\uC544\uC6C3"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 17
    }
  }, "\uD55C\uC591\uB300\uD559\uAD50")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: {
      backgroundColor: '#F2F3F5'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, current === 'home' && __jsx(_main__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 40
    }
  }), current.slice(current.length - 5, current.length) === 'Board' && __jsx(_board__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: current.slice(0, 4),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 83
    }
  })))) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcGxheW91dC5qcyJdLCJuYW1lcyI6WyJTdWJNZW51IiwiTWVudSIsIkFwcExheW91dCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaW5mbyIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImtleSIsInNsaWNlIiwibGVuZ3RoIiwicmVwbGFjZSIsIkxPR19PVVRfUkVRVUVTVCIsInB1c2giLCJpZCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInRleHRBbGlnbiIsIndpZHRoIiwibWFyZ2luVG9wIiwibmlja25hbWUiLCJtYXJnaW4iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxPLEdBQVlDLHlDLENBQVpELE87O0FBRVIsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLHFCQUNMQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUROO0FBQUEsTUFDZEMsSUFEYyxnQkFDZEEsSUFEYzs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxNQUFELENBRmhCO0FBQUEsTUFFZkMsT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBR3RCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSnNCLENBTXRCOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEosWUFBUSxDQUFDO0FBQ1BLLFVBQUks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dGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjgzNjNhNDhmYWEyZGU5MjlhNjU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IE1lbnUsIENvbCwgUm93IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFwcHN0b3JlT3V0bGluZWQsIEhvbWVPdXRsaW5lZCwgVXNlck91dGxpbmVkLCBDb250YWluZXJPdXRsaW5lZCwgQnVsYk91dGxpbmVkLCBMb2dvdXRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QsIExPR19PVVRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vbWFpbic7XHJcblxyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKCdob21lJyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBTU1LsspjrpqztlbTslbztlahcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS5rZXkpO1xyXG4gICAgc2V0Q3VycmVudChlLmtleSk7XHJcbiAgICBpZiAoZS5rZXkuc2xpY2UoZS5rZXkubGVuZ3RoIC0gNSwgZS5rZXkubGVuZ3RoKSA9PT0gJ0JvYXJkJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50LnNsaWNlKDAsIDQpKTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdsb2dvdXQnKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goYC8ke2Uua2V5fWApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aW5mbyAmJiBpbmZvLmlkICE9PSBudWxsXHJcbiAgICAgICAgPyAoXHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHNwYW49ezR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwMDE1MjknIH19PlxyXG4gICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snaG9tZSddfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbeyBjdXJyZW50IH1dfVxyXG4gICAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgZm9yY2VTdWJNZW51UmVuZGVyPVwidHJ1ZVwiXHJcblxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTMwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMzkyOTU4ODEvODYyNDg5MTMtN2Y4ZGUwODAtYmJlOS0xMWVhLTgwMWEtNzNmNGY0MjZlZDBkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJob21lXCIgaWNvbj17PEhvbWVPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJ1c2VyXCIgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgIHtpbmZvICYmIGluZm8ubmlja25hbWV964uYXHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjFcIiBpY29uPXs8QnVsYk91dGxpbmVkIC8+fSB0aXRsZT1cIuqzteu2gO2VmOuDpVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInByb2JsZW1cIj7rrLjsoJztkoDsnbQ8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb25jZXB0XCI+6rCc64WQ7J207ZW0PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIyXCIgaWNvbj17PEFwcHN0b3JlT3V0bGluZWQgLz59IHRpdGxlPVwi6rKM7Iuc7YyQXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZnJlZUJvYXJkXCI+7J6Q7Jyg6rKM7Iuc7YyQPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiaW5mb0JvYXJkXCI+7KCV67O06rKM7Iuc7YyQPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY2x1YkJvYXJkXCI+64+Z7JWE66aswrftlZntmow8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiaW5xdWlyeVwiIGljb249ezxDb250YWluZXJPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgIOusuOydmO2VmOq4sFxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImxvZ291dFwiIGljb249ezxMb2dvdXRPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgIOuhnOq3uOyVhOybg1xyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXsyMH0+XHJcbiAgICAgICAgICAgICAgPFJvdyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAxNTI5JywgaGVpZ2h0OiAnODBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46ICdhdXRvIGF1dG8nLCBjb2xvcjogJ3doaXRlJyB9fT7tlZzslpHrjIDtlZnqtZA8L3A+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPFJvdyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjJGM0Y1JyB9fT5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSAnaG9tZScgJiYgPE1haW4gLz59XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudC5zbGljZShjdXJyZW50Lmxlbmd0aCAtIDUsIGN1cnJlbnQubGVuZ3RoKSA9PT0gJ0JvYXJkJyAmJiA8Qm9hcmQgdGl0bGU9e2N1cnJlbnQuc2xpY2UoMCwgNCl9IC8+fVxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIClcclxuICAgICAgICA6IDxwPuq2jO2VnOydtCDsl4bsirXri4jri6QuPC9wPn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=