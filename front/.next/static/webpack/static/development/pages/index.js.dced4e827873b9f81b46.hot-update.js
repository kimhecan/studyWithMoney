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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkLmpzIl0sIm5hbWVzIjpbIkJvYXJkIiwiY2F0ZWdvcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInBvc3RJbmZvcyIsImhhc01vcmVQb3N0cyIsInVzZVN0YXRlIiwiYm9hcmRUaXRsZSIsInNldEJvYXJkVGl0bGUiLCJzdWJUaXRsZSIsInNldFN1YlRpdGxlIiwidXNlRWZmZWN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJkYXRhIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJsZW5ndGgiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFyZ2luIiwibWFwIiwiYmFja2dyb3VuZENvbG9yIiwicHJvcFR5cGVzIiwidGl0bGUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEscUJBQ01DLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRGpCO0FBQUEsTUFDdEJDLFNBRHNCLGdCQUN0QkEsU0FEc0I7QUFBQSxNQUNYQyxZQURXLGdCQUNYQSxZQURXOztBQUFBLGtCQUdNQyxzREFBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR3ZCQyxVQUh1QjtBQUFBLE1BR1hDLGFBSFc7O0FBQUEsbUJBSUVGLHNEQUFRLENBQUMsRUFB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WSx1RDs7O0tBbEJiZCxLO0FBOEROQSxLQUFLLENBQUNpQyxTQUFOLEdBQWtCO0FBQ2hCQyxPQUFLLEVBQUVDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBbEI7QUFJZXJDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kY2VkNGU4Mjc4NzNiOWY4MWI0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgUm93LCBDb2wsIFBhZ2VIZWFkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4vcG9zdEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi9wb3N0Q2FyZCc7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgQm9hcmQgPSAoeyBjYXRlZ29yeSB9KSA9PiB7XHJcbiAgY29uc3QgeyBwb3N0SW5mb3MsIGhhc01vcmVQb3N0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgY29uc3QgW2JvYXJkVGl0bGUsIHNldEJvYXJkVGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdWJUaXRsZSwgc2V0U3ViVGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNhdGVnb3J5ID09PSAnZnJlZUJvYXJkJykge1xyXG4gICAgICBzZXRCb2FyZFRpdGxlKCfsnpDsnKDqsozsi5ztjJAnKTtcclxuICAgICAgc2V0U3ViVGl0bGUoJ+2VmOuDpeydtOuTpOydmCDsnpDsnKDroZzsmrQg6rO16rCE7J6F64uI64ukJyk7XHJcbiAgICB9IGVsc2UgaWYgKGNhdGVnb3J5ID09PSAnaW5mb0JvYXJkJykge1xyXG4gICAgICBzZXRCb2FyZFRpdGxlKCfsoJXrs7Tqsozsi5ztjJAnKTtcclxuICAgICAgc2V0U3ViVGl0bGUoJ+2VmOuDpeydtOuTpOydmCDsoJXrs7Tqs7XsnKAg6rO16rCE7J6F64uI64ukJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRCb2FyZFRpdGxlKCfrj5nslYTrpqzCt+2Vme2ajCDqsozsi5ztjJAnKTtcclxuICAgICAgc2V0U3ViVGl0bGUoJ+2VmOuDpeydtOuTpOydmCDrj5nslYTrpqzCt+2Vme2ajCDqs7XqsITsnoXri4jri6QnKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGNhdGVnb3J5LFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cykge1xyXG4gICAgICAgICAgY29uc3QgbGFzdElkID0gcG9zdEluZm9zW3Bvc3RJbmZvcy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogbGFzdElkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW3Bvc3RJbmZvcywgaGFzTW9yZVBvc3RzXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBzcGFuPXsyMH0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMTAwcHgnIH19PlxyXG4gICAgICAgICAgICA8UGFnZUhlYWRlciBjbGFzc05hbWU9XCJzaXRlLXBhZ2UtaGVhZGVyXCIgdGl0bGU9e2JvYXJkVGl0bGV9IHN1YlRpdGxlPXtzdWJUaXRsZX0gLz5cclxuICAgICAgICAgICAgPFBvc3RGb3JtIC8+XHJcbiAgICAgICAgICAgIHtwb3N0SW5mb3MubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM1MGJjZGYnIH19PlxyXG4gICAgICAgICAg6rSR6rOg7JiA7Jy866m0IOyii+qyoOuLpFxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Cb2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9