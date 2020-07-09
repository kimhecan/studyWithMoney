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
      data: {
        category: category
      }
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
            data: {
              lastId: lastId,
              category: category
            }
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
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      margin: '10px 300px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], {
    className: "site-page-header",
    title: boardTitle,
    subTitle: subTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx(_postForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    category: category,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), postInfos.map(function (post) {
    return __jsx(_postCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 38
      }
    });
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 4,
    style: {
      backgroundColor: '#F2F3F5'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("h1", {
    style: {
      color: '#65676b'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "Sponsored"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkLmpzIl0sIm5hbWVzIjpbIkJvYXJkIiwiY2F0ZWdvcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsInBvc3RJbmZvcyIsImhhc01vcmVQb3N0cyIsInVzZVN0YXRlIiwiYm9hcmRUaXRsZSIsInNldEJvYXJkVGl0bGUiLCJzdWJUaXRsZSIsInNldFN1YlRpdGxlIiwidXNlRWZmZWN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJkYXRhIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJsZW5ndGgiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFyZ2luIiwibWFwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEscUJBQ01DLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRGpCO0FBQUEsTUFDdEJDLFNBRHNCLGdCQUN0QkEsU0FEc0I7QUFBQSxNQUNYQyxZQURXLGdCQUNYQSxZQURXOztBQUFBLGtCQUdNQyxzREFBUSxDQUFDLEVBQUQsQ0FIZDtBQUFBLE1BR3ZCQyxVQUh1QjtBQUFBLE1BR1hDLGFBSFc7O0FBQUEsbUJBSUVGLHNEQUFRLENBQUMsRUFB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBUkYsQ0FERixDQURGO0FBZ0JELENBakVEOztHQUFNakMsSztVQUNnQ0UsdUQsRUFpQm5CWSx1RDs7O0tBbEJiZCxLO0FBbUVOQSxLQUFLLENBQUNrQyxTQUFOLEdBQWtCO0FBQ2hCakMsVUFBUSxFQUFFa0MsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEWCxDQUFsQjtBQUllckMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjg0OWM1OWRmNzhkNWZjMjJlMTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgUGFnZUhlYWRlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi9wb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuL3Bvc3RDYXJkJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBCb2FyZCA9ICh7IGNhdGVnb3J5IH0pID0+IHtcclxuICBjb25zdCB7IHBvc3RJbmZvcywgaGFzTW9yZVBvc3RzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICBjb25zdCBbYm9hcmRUaXRsZSwgc2V0Qm9hcmRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1YlRpdGxlLCBzZXRTdWJUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2F0ZWdvcnkgPT09ICdmcmVlQm9hcmQnKSB7XHJcbiAgICAgIHNldEJvYXJkVGl0bGUoJ+yekOycoOqyjOyLnO2MkCcpO1xyXG4gICAgICBzZXRTdWJUaXRsZSgn7ZWY64Ol7J2065Ok7J2YIOyekOycoOuhnOyatCDqs7XqsITsnoXri4jri6QnKTtcclxuICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnkgPT09ICdpbmZvQm9hcmQnKSB7XHJcbiAgICAgIHNldEJvYXJkVGl0bGUoJ+ygleuztOqyjOyLnO2MkCcpO1xyXG4gICAgICBzZXRTdWJUaXRsZSgn7ZWY64Ol7J2065Ok7J2YIOygleuztOqzteycoCDqs7XqsITsnoXri4jri6QnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEJvYXJkVGl0bGUoJ+uPmeyVhOumrMK37ZWZ7ZqMIOqyjOyLnO2MkCcpO1xyXG4gICAgICBzZXRTdWJUaXRsZSgn7ZWY64Ol7J2065Ok7J2YIOuPmeyVhOumrMK37ZWZ7ZqMIOqzteqwhOyeheuLiOuLpCcpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cykge1xyXG4gICAgICAgICAgY29uc3QgbGFzdElkID0gcG9zdEluZm9zW3Bvc3RJbmZvcy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGxhc3RJZCxcclxuICAgICAgICAgICAgICBjYXRlZ29yeSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtwb3N0SW5mb3MsIGhhc01vcmVQb3N0c10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgc3Bhbj17MjB9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDMwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXIgY2xhc3NOYW1lPVwic2l0ZS1wYWdlLWhlYWRlclwiIHRpdGxlPXtib2FyZFRpdGxlfSBzdWJUaXRsZT17c3ViVGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDxQb3N0Rm9ybSBjYXRlZ29yeT17Y2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgICAgIHtwb3N0SW5mb3MubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHNwYW49ezR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNGMkYzRjUnIH19PlxyXG4gICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAnIzY1Njc2YicgfX0+U3BvbnNvcmVkPC9oMT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQm9hcmQucHJvcFR5cGVzID0ge1xyXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==