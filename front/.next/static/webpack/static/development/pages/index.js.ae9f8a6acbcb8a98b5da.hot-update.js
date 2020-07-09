webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/board.js":
/*!*****************************!*\
  !*** ./components/board.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _postForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postForm */ "./components/postForm.js");
/* harmony import */ var _postCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postCard */ "./components/postCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\board.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Board = function Board(_ref) {
  _s();

  var category = _ref.category;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      postInfos = _useSelector.postInfos,
      hasMorePosts = _useSelector.hasMorePosts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      boardTitle = _useState[0],
      setBoardTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      subTitle = _useState2[0],
      setSubTitle = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (category === 'freeBoard') {
      setBoardTitle('자유게시판');
      setSubTitle('하냥이들의 자유로운 공간입니다');
    } else if (category === 'infoBoard') {
      setBoardTitle('정보게시판');
      setSubTitle('하냥이들의 정보공유 공간입니다');
    } else {
      setBoardTitle('동아리·학회 게시판');
      setSubTitle('하냥이들의 동아리·학회 공간입니다');
    }
  }, []);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"],
      data: category
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts) {
          var _postInfos;

          var lastId = (_postInfos = postInfos[postInfos.length - 1]) === null || _postInfos === void 0 ? void 0 : _postInfos.id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"],
            data: lastId
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [postInfos, hasMorePosts]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      margin: '10px 100px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], {
    className: "site-page-header",
    title: boardTitle,
    subTitle: subTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx(_postForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    category: category,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), postInfos.map(function (post) {
    return __jsx(_postCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 38
      }
    });
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 4,
    style: {
      backgroundColor: '#50bcdf'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "\uAD11\uACE0\uC600\uC73C\uBA74 \uC88B\uACA0\uB2E4")));
};

_s(Board, "xz3A6gin4dSiCHQ5V8krZEiu4z0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c = Board;
Board.propTypes = {
  category: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Board);

var _c;

$RefreshReg$(_c, "Board");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkLmpzIl0sIm5hbWVzIjpbIkJvYXJkIiwiY2F0ZWdvcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInBvc3RJbmZvcyIsImhhc01vcmVQb3N0cyIsInVzZVN0YXRlIiwiYm9hcmRUaXRsZSIsInNldEJvYXJkVGl0bGUiLCJzdWJUaXRsZSIsInNldFN1YlRpdGxlIiwidXNlRWZmZWN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJkYXRhIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJsZW5ndGgiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFyZ2luIiwibWFwIiwiYmFja2dyb3VuZENvbG9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLHFCQUNNQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQURqQjtBQUFBLE1BQ3RCQyxTQURzQixnQkFDdEJBLFNBRHNCO0FBQUEsTUFDWEMsWUFEVyxnQkFDWEEsWUFEVzs7QUFBQSxrQkFHTUMsc0RBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUd2QkMsVUFIdUI7QUFBQSxNQUdYQyxhQUhXOztBQUFBLG1CQUlFRixzREFBUSxDQUFDLEVBQUQsQ0FKVjtB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Q2dDRSx1RCxFQWlCbkJZLHVEOzs7S0FsQmJkLEs7QUE4RE5BLEtBQUssQ0FBQ2lDLFNBQU4sR0FBa0I7QUFDaEJoQyxVQUFRLEVBQUVpQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURYLENBQWxCO0FBSWVwQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWU5ZjhhNmFjYmNiOGE5OGI1ZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBQYWdlSGVhZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuL3Bvc3RGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4vcG9zdENhcmQnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IEJvYXJkID0gKHsgY2F0ZWdvcnkgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcG9zdEluZm9zLCBoYXNNb3JlUG9zdHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IFtib2FyZFRpdGxlLCBzZXRCb2FyZFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3ViVGl0bGUsIHNldFN1YlRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXRlZ29yeSA9PT0gJ2ZyZWVCb2FyZCcpIHtcclxuICAgICAgc2V0Qm9hcmRUaXRsZSgn7J6Q7Jyg6rKM7Iuc7YyQJyk7XHJcbiAgICAgIHNldFN1YlRpdGxlKCftlZjrg6XsnbTrk6TsnZgg7J6Q7Jyg66Gc7Jq0IOqzteqwhOyeheuLiOuLpCcpO1xyXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeSA9PT0gJ2luZm9Cb2FyZCcpIHtcclxuICAgICAgc2V0Qm9hcmRUaXRsZSgn7KCV67O06rKM7Iuc7YyQJyk7XHJcbiAgICAgIHNldFN1YlRpdGxlKCftlZjrg6XsnbTrk6TsnZgg7KCV67O06rO17JygIOqzteqwhOyeheuLiOuLpCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Qm9hcmRUaXRsZSgn64+Z7JWE66aswrftlZntmowg6rKM7Iuc7YyQJyk7XHJcbiAgICAgIHNldFN1YlRpdGxlKCftlZjrg6XsnbTrk6TsnZgg64+Z7JWE66aswrftlZntmowg6rO16rCE7J6F64uI64ukJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBjYXRlZ29yeSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMpIHtcclxuICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IHBvc3RJbmZvc1twb3N0SW5mb3MubGVuZ3RoIC0gMV0/LmlkO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGxhc3RJZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtwb3N0SW5mb3MsIGhhc01vcmVQb3N0c10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjB9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDEwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXIgY2xhc3NOYW1lPVwic2l0ZS1wYWdlLWhlYWRlclwiIHRpdGxlPXtib2FyZFRpdGxlfSBzdWJUaXRsZT17c3ViVGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDxQb3N0Rm9ybSBjYXRlZ29yeT17Y2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgICAgIHtwb3N0SW5mb3MubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM1MGJjZGYnIH19PlxyXG4gICAgICAgICAg6rSR6rOg7JiA7Jy866m0IOyii+qyoOuLpFxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Cb2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9