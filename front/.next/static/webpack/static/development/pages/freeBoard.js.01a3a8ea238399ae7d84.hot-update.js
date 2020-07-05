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
          lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RMaXN0LmpzIl0sIm5hbWVzIjpbIlBvc3RMaXN0IiwibGlzdERhdGEiLCJpIiwicHVzaCIsImhyZWYiLCJ0aXRsZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsIkljb25UZXh0IiwiaWNvbiIsInRleHQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoYW5nZSIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicGFnZVNpemUiLCJpdGVtIiwiYm9yZGVyQ29sb3IiLCJTdGFyT3V0bGluZWQiLCJMaWtlT3V0bGluZWQiLCJNZXNzYWdlT3V0bGluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixNQUFNQyxRQUFRLEdBQUcsRUFBakI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCRCxZQUFRLENBQUNFLElBQVQsQ0FBYztBQUNaQyxVQUFJLEVBQUUsb0JBRE07QUFFWkMsV0FBSyw0QkFBcUJILENBQXJCLENBRk87QUFHWkksWUFBTSxFQUFFLGtFQUhJO0FBSVpDLGlCQUFXLEVBQ1Qsd0ZBTFU7QUFNWkMsYUFBTyxFQUNMO0FBUFUsS0FBZDtBQVNEOztBQUVELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU0MsSUFBVCxRQUFTQSxJQUFUO0FBQUEsV0FDZixNQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkgsSUFBcEIsQ0FESCxFQUVHQyxJQUZILENBRGU7QUFBQSxHQUFqQjs7QUFPQSxTQUNFLG1FQUNFLE1BQUMseUNBQUQ7QUFDRSxjQUFVLEVBQUMsVUFEYjtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsY0FBVSxFQUFFO0FBQ1ZHLGNBQVEsRUFBRSxrQkFBQUMsSUFBSSxFQUFJO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELE9BSFM7QUFJVkcsY0FBUSxFQUFFO0FBSkEsS0FIZDtBQVNFLGNBQVUsRUFBRWpCLFFBVGQ7QUFVRSxjQUFVLEVBQUUsb0JBQUFrQixJQUFJO0FBQUEsYUFDZCxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLGFBQUssRUFBRTtBQUFFQyxxQkFBVyxFQUFFO0FBQWYsU0FEVDtBQUVFLFdBQUcsRUFBRUQsSUFBSSxDQUFDZCxLQUZaO0FBR0UsZUFBTyxFQUFFLENBQ1AsTUFBQyxRQUFEO0FBQVUsY0FBSSxFQUFFZ0IsOERBQWhCO0FBQThCLGNBQUksRUFBQyxLQUFuQztBQUF5QyxhQUFHLEVBQUMsc0JBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFETyxFQUVQLE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRUMsOERBQWhCO0FBQThCLGNBQUksRUFBQyxLQUFuQztBQUF5QyxhQUFHLEVBQUMsc0JBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGTyxFQUdQLE1BQUMsUUFBRDtBQUFVLGNBQUksRUFBRUMsaUVBQWhCO0FBQWlDLGNBQUksRUFBQyxHQUF0QztBQUEwQyxhQUFHLEVBQUMsdUJBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFITyxDQUhYO0FBUUUsYUFBSyxFQUNIO0FBQ0UsZUFBSyxFQUFFLEdBRFQ7QUFFRSxhQUFHLEVBQUMsTUFGTjtBQUdFLGFBQUcsRUFBQyxxRUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWdCRSxNQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDRSxjQUFNLEVBQUUsTUFBQywyQ0FBRDtBQUFRLGFBQUcsRUFBRUosSUFBSSxDQUFDYixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFY7QUFFRSxhQUFLLEVBQUU7QUFBRyxjQUFJLEVBQUVhLElBQUksQ0FBQ2YsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFCZSxJQUFJLENBQUNkLEtBQTFCLENBRlQ7QUFHRSxtQkFBVyxFQUFFYyxJQUFJLENBQUNaLFdBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFoQkYsRUFxQkdZLElBQUksQ0FBQ1gsT0FyQlIsQ0FEYztBQUFBLEtBVmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBd0NELENBOUREOztLQUFNUixRO0FBZ0VTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZnJlZUJvYXJkLmpzLjAxYTNhOGVhMjM4Mzk5YWU3ZDg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0LCBBdmF0YXIsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IE1lc3NhZ2VPdXRsaW5lZCwgTGlrZU91dGxpbmVkLCBTdGFyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IFBvc3RMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxpc3REYXRhID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjM7IGkrKykge1xyXG4gICAgbGlzdERhdGEucHVzaCh7XHJcbiAgICAgIGhyZWY6ICdodHRwczovL2FudC5kZXNpZ24nLFxyXG4gICAgICB0aXRsZTogYGFudCBkZXNpZ24gcGFydCAke2l9YCxcclxuICAgICAgYXZhdGFyOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLicsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgJ1dlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSksIHRvIGhlbHAgcGVvcGxlIGNyZWF0ZSB0aGVpciBwcm9kdWN0IHByb3RvdHlwZXMgYmVhdXRpZnVsbHkgYW5kIGVmZmljaWVudGx5LicsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IEljb25UZXh0ID0gKHsgaWNvbiwgdGV4dCB9KSA9PiAoXHJcbiAgICA8U3BhY2U+XHJcbiAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24pfVxyXG4gICAgICB7dGV4dH1cclxuICAgIDwvU3BhY2U+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgaXRlbUxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIHBhZ2luYXRpb249e3tcclxuICAgICAgICAgIG9uQ2hhbmdlOiBwYWdlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGFnZVNpemU6IDMsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBkYXRhU291cmNlPXtsaXN0RGF0YX1cclxuICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6ICdyZWQnIH19XHJcbiAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtTdGFyT3V0bGluZWR9IHRleHQ9XCIxNTZcIiBrZXk9XCJsaXN0LXZlcnRpY2FsLXN0YXItb1wiIC8+LFxyXG4gICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtMaWtlT3V0bGluZWR9IHRleHQ9XCIxNTZcIiBrZXk9XCJsaXN0LXZlcnRpY2FsLWxpa2Utb1wiIC8+LFxyXG4gICAgICAgICAgICAgIDxJY29uVGV4dCBpY29uPXtNZXNzYWdlT3V0bGluZWR9IHRleHQ9XCIyXCIga2V5PVwibGlzdC12ZXJ0aWNhbC1tZXNzYWdlXCIgLz4sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjcyfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvbXFhUXN3Y3lETGNYeURLblpmRVMucG5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2l0ZW0uYXZhdGFyfSAvPn1cclxuICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==