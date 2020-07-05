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
        lineNumber: 22,
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
        style: {
          borderColor: 'red'
        },
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
          lineNumber: 41,
          columnNumber: 11
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
        title: __jsx("a", {
          href: item.href,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
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
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RMaXN0LmpzIl0sIm5hbWVzIjpbIlBvc3RMaXN0IiwibGlzdERhdGEiLCJpIiwicHVzaCIsImhyZWYiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsIkljb25UZXh0IiwiaWNvbiIsInRleHQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoYW5nZSIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicGFnZVNpemUiLCJpdGVtIiwiYm9yZGVyQ29sb3IiLCJTdGFyT3V0bGluZWQiLCJMaWtlT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixNQUFNQyxRQUFRLEdBQUcsRUFBakI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCRCxZQUFRLENBQUNFLElBQVQsQ0FBYztBQUNaQyxVQUFJLEVBQUUsb0JBRE07QUFFWkMsV0FBSyw0QkFBcUJILENBQXJCLENBRk87QUFHWkksaUJBQVcsRUFDVCx3RkFKVTtBQUtaQyxhQUFPLEVBQ0w7QUFOVSxLQUFkO0FBUUQ7O0FBRUQsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFFBQVNBLElBQVQ7QUFBQSxXQUNmLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CSCxJQUFwQixDQURILEVBRUdDLElBRkgsQ0FEZTtBQUFBLEdBQWpCOztBQU9BLFNBQ0UsbUVBQ0UsTUFBQyx5Q0FBRDtBQUNFLGNBQVUsRUFBQyxVQURiO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxjQUFVLEVBQUU7QUFDVkcsY0FBUSxFQUFFLGtCQUFBQyxJQUFJLEVBQUk7QUFDaEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0QsT0FIUztBQUlWRyxjQUFRLEVBQUU7QUFKQSxLQUhkO0FBU0UsY0FBVSxFQUFFaEIsUUFUZDtBQVVFLGNBQVUsRUFBRSxvQkFBQWlCLElBQUk7QUFBQSxhQUNkLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsYUFBSyxFQUFFO0FBQUVDLHFCQUFXLEVBQUU7QUFBZixTQURUO0FBRUUsV0FBRyxFQUFFRCxJQUFJLENBQUNiLEtBRlo7QUFHRSxlQUFPLEVBQUUsQ0FDUCxNQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUVlLDhEQUFoQjtBQUE4QixjQUFJLEVBQUMsS0FBbkM7QUFBeUMsYUFBRyxFQUFDLHNCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRE8sRUFFUCxNQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUVDLDhEQUFoQjtBQUE4QixjQUFJLEVBQUMsS0FBbkM7QUFBeUMsYUFBRyxFQUFDLHNCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRk8sRUFHUCxNQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUVDLGlFQUFoQjtBQUFpQyxjQUFJLEVBQUMsR0FBdEM7QUFBMEMsYUFBRyxFQUFDLHVCQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSE8sQ0FIWDtBQVFFLGFBQUssRUFDSDtBQUNFLGVBQUssRUFBRSxHQURUO0FBRUUsYUFBRyxFQUFDLE1BRk47QUFHRSxhQUFHLEVBQUMscUVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FnQkUsTUFBQyx5Q0FBRCxDQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0UsYUFBSyxFQUFFO0FBQUcsY0FBSSxFQUFFSixJQUFJLENBQUNkLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQmMsSUFBSSxDQUFDYixLQUExQixDQURUO0FBRUUsbUJBQVcsRUFBRWEsSUFBSSxDQUFDWixXQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBaEJGLEVBb0JHWSxJQUFJLENBQUNYLE9BcEJSLENBRGM7QUFBQSxLQVZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQXVDRCxDQTVERDs7S0FBTVAsUTtBQThEU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGZyZWVCb2FyZC5qcy5mMjlhYzY0MTNjMzYwNzEwNmI4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGlzdCwgQXZhdGFyLCBTcGFjZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlT3V0bGluZWQsIExpa2VPdXRsaW5lZCwgU3Rhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBQb3N0TGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBsaXN0RGF0YSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDIzOyBpKyspIHtcclxuICAgIGxpc3REYXRhLnB1c2goe1xyXG4gICAgICBocmVmOiAnaHR0cHM6Ly9hbnQuZGVzaWduJyxcclxuICAgICAgdGl0bGU6IGBhbnQgZGVzaWduIHBhcnQgJHtpfWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSksIHRvIGhlbHAgcGVvcGxlIGNyZWF0ZSB0aGVpciBwcm9kdWN0IHByb3RvdHlwZXMgYmVhdXRpZnVsbHkgYW5kIGVmZmljaWVudGx5LicsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IEljb25UZXh0ID0gKHsgaWNvbiwgdGV4dCB9KSA9PiAoXHJcbiAgICA8U3BhY2U+XHJcbiAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICB7dGV4dH1cclxuICAgIDwvU3BhY2U+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGFnZVNpemU6IDMsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBkYXRhU291cmNlPXtsaXN0RGF0YX1cclxuICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6ICdyZWQnIH19XHJcbiAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtTdGFyT3V0bGluZWR9IHRleHQ9XCIxNTZcIiBrZXk9XCJsaXN0LXZlcnRpY2FsLXN0YXItb1wiIC8+LFxyXG4gICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtMaWtlT3V0bGluZWR9IHRleHQ9XCIxNTZcIiBrZXk9XCJsaXN0LXZlcnRpY2FsLWxpa2Utb1wiIC8+LFxyXG4gICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtNZXNzYWdlT3V0bGluZWR9IHRleHQ9XCIyXCIga2V5PVwibGlzdC12ZXJ0aWNhbC1tZXNzYWdlXCIgLz4sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjcyfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvbXFhUXN3Y3lETGNYeURLblpmRVMucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLnRpdGxlfTwvYT59XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9