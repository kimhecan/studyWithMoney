webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./functions/parseDate.js":
/*!********************************!*\
  !*** ./functions/parseDate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var parseDate = function parseDate(date) {
  var koreaDate = new Date(date);
  var hour = koreaDate.getHours() > 12 ? "\uC624\uD6C4 ".concat(koreaDate.getHours() % 12) : koreaDate.getHours();
  var answer = "".concat(koreaDate.getMonth() + 1, "\uC6D4").concat(koreaDate.getDate(), "\uC77C").concat(hour, "\uC2DC").concat(koreaDate.getMinutes(), "\uBD84");
  return answer;
};

/* harmony default export */ __webpack_exports__["default"] = (parseDate);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mdW5jdGlvbnMvcGFyc2VEYXRlLmpzIl0sIm5hbWVzIjpbInBhcnNlRGF0ZSIsImRhdGUiLCJrb3JlYURhdGUiLCJEYXRlIiwiaG91ciIsImdldEhvdXJzIiwiYW5zd2VyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0TWludXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUMxQixNQUFNQyxTQUFTLEdBQUcsSUFBSUMsSUFBSixDQUFTRixJQUFULENBQWxCO0FBQ0EsTUFBTUcsSUFBSSxHQUFHRixTQUFTLENBQUNHLFFBQVYsS0FBdUIsRUFBdkIsMEJBQWtDSCxTQUFTLENBQUNHLFFBQVYsS0FBdUIsRUFBekQsSUFBZ0VILFNBQVMsQ0FBQ0csUUFBVixFQUE3RTtBQUNBLE1BQU1DLE1BQU0sYUFBTUosU0FBUyxDQUFDSyxRQUFWLEtBQXVCLENBQTdCLG1CQUFrQ0wsU0FBUyxDQUFDTSxPQUFWLEVBQWxDLG1CQUF5REosSUFBekQsbUJBQWlFRixTQUFTLENBQUNPLFVBQVYsRUFBakUsV0FBWjtBQUNBLFNBQU9ILE1BQVA7QUFDRCxDQUxEOztBQU9lTix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjVkYzY5ZGQ5NzRlMzlhMjZjZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhcnNlRGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgY29uc3Qga29yZWFEYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgY29uc3QgaG91ciA9IGtvcmVhRGF0ZS5nZXRIb3VycygpID4gMTIgPyBg7Jik7ZuEICR7a29yZWFEYXRlLmdldEhvdXJzKCkgJSAxMn1gIDoga29yZWFEYXRlLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgYW5zd2VyID0gYCR7a29yZWFEYXRlLmdldE1vbnRoKCkgKyAxfeyblCR7a29yZWFEYXRlLmdldERhdGUoKX3snbwke2hvdXJ97IucJHtrb3JlYURhdGUuZ2V0TWludXRlcygpfeu2hGA7XHJcbiAgcmV0dXJuIGFuc3dlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcnNlRGF0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==