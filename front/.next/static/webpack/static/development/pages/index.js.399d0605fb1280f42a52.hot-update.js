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

  var title = _ref.title;

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
    if (title === 'free') {
      setBoardTitle('자유게시판');
      setSubTitle('하냥이들의 자유로운 공간입니다');
    } else if (title === 'info') {
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
      data: title
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
            lastId: lastId
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
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkLmpzIl0sIm5hbWVzIjpbIkJvYXJkIiwidGl0bGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInBvc3RJbmZvcyIsImhhc01vcmVQb3N0cyIsInVzZVN0YXRlIiwiYm9hcmRUaXRsZSIsInNldEJvYXJkVGl0bGUiLCJzdWJUaXRsZSIsInNldFN1YlRpdGxlIiwidXNlRWZmZWN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJkYXRhIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJsZW5ndGgiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFyZ2luIiwibWFwIiwiYmFja2dyb3VuZENvbG9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEscUJBQ1NDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRHBCO0FBQUEsTUFDbkJDLFNBRG1CLGdCQUNuQkEsU0FEbUI7QUFBQSxNQUNSQyxZQURRLGdCQUNSQSxZQURROztBQUFBLGtCQUdTQyxzREFBUSxDQUFDLEVBQUQsQ0FIakI7QUFBQSxNQUdwQkMsVUFIb0I7QUFBQSxNQUdSQyxhQUhROztBQUFBLG1CQUlLRixzREFBUSxDQUFDLEVBQUQsQ0FKYjtBQUFB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LEs7QUE4RE5BLEtBQUssQ0FBQ2lDLFNBQU4sR0FBa0I7QUFDaEJoQyxPQUFLLEVBQUVpQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQWxCO0FBSWVwQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzk5ZDA2MDVmYjEyODBmNDJhNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBQYWdlSGVhZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuL3Bvc3RGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4vcG9zdENhcmQnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IEJvYXJkID0gKHsgdGl0bGUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcG9zdEluZm9zLCBoYXNNb3JlUG9zdHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IFtib2FyZFRpdGxlLCBzZXRCb2FyZFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3ViVGl0bGUsIHNldFN1YlRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0aXRsZSA9PT0gJ2ZyZWUnKSB7XHJcbiAgICAgIHNldEJvYXJkVGl0bGUoJ+yekOycoOqyjOyLnO2MkCcpO1xyXG4gICAgICBzZXRTdWJUaXRsZSgn7ZWY64Ol7J2065Ok7J2YIOyekOycoOuhnOyatCDqs7XqsITsnoXri4jri6QnKTtcclxuICAgIH0gZWxzZSBpZiAodGl0bGUgPT09ICdpbmZvJykge1xyXG4gICAgICBzZXRCb2FyZFRpdGxlKCfsoJXrs7Tqsozsi5ztjJAnKTtcclxuICAgICAgc2V0U3ViVGl0bGUoJ+2VmOuDpeydtOuTpOydmCDsoJXrs7Tqs7XsnKAg6rO16rCE7J6F64uI64ukJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRCb2FyZFRpdGxlKCfrj5nslYTrpqzCt+2Vme2ajCDqsozsi5ztjJAnKTtcclxuICAgICAgc2V0U3ViVGl0bGUoJ+2VmOuDpeydtOuTpOydmCDrj5nslYTrpqzCt+2Vme2ajCDqs7XqsITsnoXri4jri6QnKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHRpdGxlLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cykge1xyXG4gICAgICAgICAgY29uc3QgbGFzdElkID0gcG9zdEluZm9zW3Bvc3RJbmZvcy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgbGFzdElkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW3Bvc3RJbmZvcywgaGFzTW9yZVBvc3RzXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBzcGFuPXsyMH0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMTAwcHgnIH19PlxyXG4gICAgICAgICAgICA8UGFnZUhlYWRlciBjbGFzc05hbWU9XCJzaXRlLXBhZ2UtaGVhZGVyXCIgdGl0bGU9e2JvYXJkVGl0bGV9IHN1YlRpdGxlPXtzdWJUaXRsZX0gLz5cclxuICAgICAgICAgICAgPFBvc3RGb3JtIC8+XHJcbiAgICAgICAgICAgIHtwb3N0SW5mb3MubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM1MGJjZGYnIH19PlxyXG4gICAgICAgICAg6rSR6rOg7JiA7Jy866m0IOyii+qyoOuLpFxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Cb2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9