webpackHotUpdate("static\\development\\pages\\freeBoard.js",{

/***/ "./components/postList.js":
/*!********************************!*\
  !*** ./components/postList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostList = function PostList() {
  var listData = [];

  for (var i = 0; i < 23; i++) {
    listData.push({
      href: 'https://ant.design',
      title: "ant design part ".concat(i),
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    });
  }

  var IconText = function IconText(_ref) {
    var icon = _ref.icon,
        text = _ref.text;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(icon), text);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    style: {
      borderColor: 'red'
    },
    itemLayout: "vertical",
    size: "large",
    pagination: {
      onChange: function onChange(page) {
        console.log(page);
      },
      pageSize: 3
    },
    dataSource: listData,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
        key: item.title,
        actions: [__jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["StarOutlined"],
          text: "156",
          key: "list-vertical-star-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }
        }), __jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LikeOutlined"],
          text: "156",
          key: "list-vertical-like-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }
        }), __jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"],
          text: "2",
          key: "list-vertical-message",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }
        })],
        extra: __jsx("img", {
          width: 272,
          alt: "logo",
          src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          src: item.avatar,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 23
          }
        }),
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 22
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }), item.content);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }));
};

_c = PostList;
/* harmony default export */ __webpack_exports__["default"] = (PostList);

var _c;

$RefreshReg$(_c, "PostList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RMaXN0LmpzIl0sIm5hbWVzIjpbIlBvc3RMaXN0IiwibGlzdERhdGEiLCJpIiwicHVzaCIsImhyZWYiLCJ0aXRsZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsIkljb25UZXh0IiwiaWNvbiIsInRleHQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJib3JkZXJDb2xvciIsIm9uQ2hhbmdlIiwicGFnZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlU2l6ZSIsIml0ZW0iLCJTdGFyT3V0bGluZWQiLCJMaWtlT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixNQUFNQyxRQUFRLEdBQUcsRUFBakI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCRCxZQUFRLENBQUNFLElBQVQsQ0FBYztBQUNaQyxVQUFJLEVBQUUsb0JBRE07QUFFWkMsV0FBSyw0QkFBcUJILENBQXJCLENBRk87QUFHWkksWUFBTSxFQUFFLGtFQUhJO0FBSVpDLGlCQUFXLEVBQ1Qsd0ZBTFU7QUFNWkMsYUFBTyxFQUNMO0FBUFUsS0FBZDtBQVNEOztBQUVELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsV0FDZixNQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkgsSUFBcEIsQ0FESCxFQUVHQyxJQUZILENBRGU7QUFBQSxHQUFqQjs7QUFPQSxTQUNFLG1FQUNFLE1BQUMseUNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUcsaUJBQVcsRUFBRTtBQUFmLEtBRFQ7QUFFRSxjQUFVLEVBQUMsVUFGYjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsY0FBVSxFQUFFO0FBQ1ZDLGNBQVEsRUFBRSxrQkFBQUMsSUFBSSxFQUFJO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELE9BSFM7QUFJVkcsY0FBUSxFQUFFO0FBSkEsS0FKZDtBQVVFLGNBQVUsRUFBRWxCLFFBVmQ7QUFXRSxjQUFVLEVBQUUsb0JBQUFtQixJQUFJO0FBQUEsYUFDZCxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLFdBQUcsRUFBRUEsSUFBSSxDQUFDZixLQURaO0FBRUUsZUFBTyxFQUFFLENBQ1AsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFZ0IsOERBQWhCO0FBQThCLGNBQUksRUFBQyxLQUFuQztBQUF5QyxhQUFHLEVBQUMsc0JBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETyxFQUVQLE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRUMsOERBQWhCO0FBQThCLGNBQUksRUFBQyxLQUFuQztBQUF5QyxhQUFHLEVBQUMsc0JBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGTyxFQUdQLE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRUMsaUVBQWhCO0FBQWlDLGNBQUksRUFBQyxHQUF0QztBQUEwQyxhQUFHLEVBQUMsdUJBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFITyxDQUZYO0FBT0UsYUFBSyxFQUNIO0FBQ0UsZUFBSyxFQUFFLEdBRFQ7QUFFRSxhQUFHLEVBQUMsTUFGTjtBQUdFLGFBQUcsRUFBQyxxRUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWVFLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUNFLGNBQU0sRUFBRSxNQUFDLDJDQUFEO0FBQVEsYUFBRyxFQUFFSCxJQUFJLENBQUNkLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEVjtBQUVFLGFBQUssRUFBRTtBQUFHLGNBQUksRUFBRWMsSUFBSSxDQUFDaEIsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFCZ0IsSUFBSSxDQUFDZixLQUExQixDQUZUO0FBR0UsbUJBQVcsRUFBRWUsSUFBSSxDQUFDYixXQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZkYsRUFvQkdhLElBQUksQ0FBQ1osT0FwQlIsQ0FEYztBQUFBLEtBWGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBd0NELENBOUREOztLQUFNUixRO0FBZ0VTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZnJlZUJvYXJkLmpzLjRjNTg0NmUxNzIzOTkyMmZmMTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0LCBBdmF0YXIsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IE1lc3NhZ2VPdXRsaW5lZCwgTGlrZU91dGxpbmVkLCBTdGFyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFBvc3RMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxpc3REYXRhID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjM7IGkrKykge1xyXG4gICAgbGlzdERhdGEucHVzaCh7XHJcbiAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydCAke2l9YCxcclxuICAgICAgYXZhdGFyOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSksIHRvIGhlbHAgcGVvcGxlIGNyZWF0ZSB0aGVpciBwcm9kdWN0IHByb3RvdHlwZXMgYmVhdXRpZnVsbHkgYW5kIGVmZmljaWVudGx5LicsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IEljb25UZXh0ID0gKHsgaWNvbiwgdGV4dCB9KSA9PiAoXHJcbiAgICA8U3BhY2U+XHJcbiAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICB7dGV4dH1cclxuICAgIDwvU3BhY2U+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6ICdyZWQnIH19XHJcbiAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGFnZVNpemU6IDMsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBkYXRhU291cmNlPXtsaXN0RGF0YX1cclxuICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e1N0YXJPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtc3Rhci1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e0xpa2VPdXRsaW5lZH0gdGV4dD1cIjE1NlwiIGtleT1cImxpc3QtdmVydGljYWwtbGlrZS1vXCIgLz4sXHJcbiAgICAgICAgICAgICAgPEljb25UZXh0IGljb249e01lc3NhZ2VPdXRsaW5lZH0gdGV4dD1cIjJcIiBrZXk9XCJsaXN0LXZlcnRpY2FsLW1lc3NhZ2VcIiAvPixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyNzJ9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9tcWFRc3djeURMY1h5REtuWmZFUy5wbmdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17aXRlbS5hdmF0YXJ9IC8+fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9