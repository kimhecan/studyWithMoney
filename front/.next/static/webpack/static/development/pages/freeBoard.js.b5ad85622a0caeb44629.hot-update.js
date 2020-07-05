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
            lineNumber: 45,
            columnNumber: 15
          }
        }), __jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LikeOutlined"],
          text: "156",
          key: "list-vertical-like-o",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }
        }), __jsx(IconText, {
          icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"],
          text: "2",
          key: "list-vertical-message",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
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
            lineNumber: 50,
            columnNumber: 15
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          src: item.avatar,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 23
          }
        }),
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 22
          }
        }, item.title),
        description: item.description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RMaXN0LmpzIl0sIm5hbWVzIjpbIlBvc3RMaXN0IiwibGlzdERhdGEiLCJpIiwicHVzaCIsImhyZWYiLCJ0aXRsZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsIkljb25UZXh0IiwiaWNvbiIsInRleHQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoYW5nZSIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicGFnZVNpemUiLCJpdGVtIiwiU3Rhck91dGxpbmVkIiwiTGlrZU91dGxpbmVkIiwiTWVzc2FnZU91dGxpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsTUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQkQsWUFBUSxDQUFDRSxJQUFULENBQWM7QUFDWkMsVUFBSSxFQUFFLG9CQURNO0FBRVpDLFdBQUssNEJBQXFCSCxDQUFyQixDQUZPO0FBR1pJLFlBQU0sRUFBRSxrRUFISTtBQUlaQyxpQkFBVyxFQUNULHdGQUxVO0FBTVpDLGFBQU8sRUFDTDtBQVBVLEtBQWQ7QUFTRDs7QUFFRCxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFFBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFFBQVNDLElBQVQsUUFBU0EsSUFBVDtBQUFBLFdBQ2YsTUFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JILElBQXBCLENBREgsRUFFR0MsSUFGSCxDQURlO0FBQUEsR0FBakI7O0FBT0EsU0FDRSxtRUFDRSxNQUFDLHlDQUFEO0FBQ0UsY0FBVSxFQUFDLFVBRGI7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLGNBQVUsRUFBRTtBQUNWRyxjQUFRLEVBQUUsa0JBQUFDLElBQUksRUFBSTtBQUNoQkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDRCxPQUhTO0FBSVZHLGNBQVEsRUFBRTtBQUpBLEtBSGQ7QUFTRSxjQUFVLEVBQUVqQixRQVRkO0FBVUUsY0FBVSxFQUFFLG9CQUFBa0IsSUFBSTtBQUFBLGFBQ2QsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxXQUFHLEVBQUVBLElBQUksQ0FBQ2QsS0FEWjtBQUVFLGVBQU8sRUFBRSxDQUNQLE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRWUsOERBQWhCO0FBQThCLGNBQUksRUFBQyxLQUFuQztBQUF5QyxhQUFHLEVBQUMsc0JBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETyxFQUVQLE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRUMsOERBQWhCO0FBQThCLGNBQUksRUFBQyxLQUFuQztBQUF5QyxhQUFHLEVBQUMsc0JBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGTyxFQUdQLE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRUMsaUVBQWhCO0FBQWlDLGNBQUksRUFBQyxHQUF0QztBQUEwQyxhQUFHLEVBQUMsdUJBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFITyxDQUZYO0FBT0UsYUFBSyxFQUNIO0FBQ0UsZUFBSyxFQUFFLEdBRFQ7QUFFRSxhQUFHLEVBQUMsTUFGTjtBQUdFLGFBQUcsRUFBQyxxRUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWVFLE1BQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUNFLGNBQU0sRUFBRSxNQUFDLDJDQUFEO0FBQVEsYUFBRyxFQUFFSCxJQUFJLENBQUNiLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEVjtBQUVFLGFBQUssRUFBRTtBQUFHLGNBQUksRUFBRWEsSUFBSSxDQUFDZixJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBcUJlLElBQUksQ0FBQ2QsS0FBMUIsQ0FGVDtBQUdFLG1CQUFXLEVBQUVjLElBQUksQ0FBQ1osV0FIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWZGLEVBb0JHWSxJQUFJLENBQUNYLE9BcEJSLENBRGM7QUFBQSxLQVZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQXVDRCxDQTdERDs7S0FBTVIsUTtBQStEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGZyZWVCb2FyZC5qcy5iNWFkODU2MjJhMGNhZWI0NDYyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGlzdCwgQXZhdGFyLCBTcGFjZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlT3V0bGluZWQsIExpa2VPdXRsaW5lZCwgU3Rhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBQb3N0TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBsaXN0RGF0YSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDIzOyBpKyspIHtcclxuICAgIGxpc3REYXRhLnB1c2goe1xyXG4gICAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgICAgdGl0bGU6IGBhbnQgZGVzaWduIHBhcnQgJHtpfWAsXHJcbiAgICAgIGF2YXRhcjogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmcnLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4nLFxyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgICdXZSBzdXBwbHkgYSBzZXJpZXMgb2YgZGVzaWduIHByaW5jaXBsZXMsIHByYWN0aWNhbCBwYXR0ZXJucyBhbmQgaGlnaCBxdWFsaXR5IGRlc2lnbiByZXNvdXJjZXMgKFNrZXRjaCBhbmQgQXh1cmUpLCB0byBoZWxwIHBlb3BsZSBjcmVhdGUgdGhlaXIgcHJvZHVjdCBwcm90b3R5cGVzIGJlYXV0aWZ1bGx5IGFuZCBlZmZpY2llbnRseS4nLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBJY29uVGV4dCA9ICh7IGljb24sIHRleHQgfSkgPT4gKFxyXG4gICAgPFNwYWNlPlxyXG4gICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChpY29uKX1cclxuICAgICAge3RleHR9XHJcbiAgICA8L1NwYWNlPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdFxyXG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICBvbkNoYW5nZTogcGFnZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBhZ2VTaXplOiAzLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtTdGFyT3V0bGluZWR9IHRleHQ9XCIxNTZcIiBrZXk9XCJsaXN0LXZlcnRpY2FsLXN0YXItb1wiIC8+LFxyXG4gICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtMaWtlT3V0bGluZWR9IHRleHQ9XCIxNTZcIiBrZXk9XCJsaXN0LXZlcnRpY2FsLWxpa2Utb1wiIC8+LFxyXG4gICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtNZXNzYWdlT3V0bGluZWR9IHRleHQ9XCIyXCIga2V5PVwibGlzdC12ZXJ0aWNhbC1tZXNzYWdlXCIgLz4sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjcyfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvbXFhUXN3Y3lETGNYeURLblpmRVMucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2l0ZW0uYXZhdGFyfSAvPn1cclxuICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==