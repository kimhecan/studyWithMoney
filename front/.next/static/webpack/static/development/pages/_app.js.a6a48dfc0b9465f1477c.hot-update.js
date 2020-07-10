webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, POST_RESET, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_REQUEST", function() { return UPDATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_FAILURE", function() { return UPDATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_REQUEST", function() { return DELETE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_FAILURE", function() { return DELETE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_RESET", function() { return POST_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  postInfos: [],
  imagePaths: [],
  addPostMessage: null,
  hasMorePosts: true
};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var LOAD_POSTS_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POST_FAILURE';
var UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
var UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
var UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
var DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
var DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
var DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var POST_RESET = 'POST_RESET';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
}; // export const addComment = (data) => ({
//   type: ADD_COMMENT_REQUEST,
//   data,
// });

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case ADD_POST_REQUEST:
        break;

      case ADD_POST_SUCCESS:
        draft.postInfos.unshift(action.data);
        draft.imagePaths = [];
        break;

      case ADD_POST_FAILURE:
        draft.addPostMessage = action.error;
        break;

      case LOAD_POSTS_REQUEST:
        break;

      case LOAD_POSTS_SUCCESS:
        draft.postInfos = draft.postInfos.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_POSTS_FAILURE:
        break;

      case UPDATE_POST_REQUEST:
        break;

      case UPDATE_POST_SUCCESS:
        break;

      case UPDATE_POST_FAILURE:
        break;

      case DELETE_POST_REQUEST:
        break;

      case DELETE_POST_SUCCESS:
        draft.postInfos = draft.postInfos.filter(function (v) {
          return v.id !== action.data.PostId;
        });
        break;

      case DELETE_POST_FAILURE:
        break;

      case UPLOAD_IMAGES_REQUEST:
        break;

      case UPLOAD_IMAGES_SUCCESS:
        draft.imagePaths = action.data;
        break;

      case UPLOAD_IMAGES_FAILURE:
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        break;

      case POST_RESET:
        draft.postInfos = [];
        draft.imagePaths = [];
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInBvc3RJbmZvcyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TWVzc2FnZSIsImhhc01vcmVQb3N0cyIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIlVQREFURV9QT1NUX1JFUVVFU1QiLCJVUERBVEVfUE9TVF9TVUNDRVNTIiwiVVBEQVRFX1BPU1RfRkFJTFVSRSIsIkRFTEVURV9QT1NUX1JFUVVFU1QiLCJERUxFVEVfUE9TVF9TVUNDRVNTIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsIlBPU1RfUkVTRVQiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJjb25jYXQiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ2IiwiaWQiLCJQb3N0SWQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxFQURlO0FBRTFCQyxZQUFVLEVBQUUsRUFGYztBQUcxQkMsZ0JBQWMsRUFBRSxJQUhVO0FBSTFCQyxjQUFZLEVBQUU7QUFKWSxDQUFyQjtBQU9BLElBQU1DLGdCQUFnQixHQUFHLGtC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LENBQW5CO0FBQ0E7O0FBQ0YsV0FBS0YsVUFBTDtBQUNFUSxhQUFLLENBQUM1QixTQUFOLEdBQWtCLEVBQWxCO0FBQ0E0QixhQUFLLENBQUMzQixVQUFOLEdBQW1CLEVBQW5CO0FBQ0E7O0FBQ0Y7QUFDRTtBQTlDSjtBQWdERCxHQWpEd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUFtRGV1QixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5hNmE0OGRmYzBiOTQ2NWYxNDc3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwb3N0SW5mb3M6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGFkZFBvc3RNZXNzYWdlOiBudWxsLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUX1JFUVVFU1QgPSAnVVBEQVRFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9TVUNDRVNTID0gJ1VQREFURV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1RfRkFJTFVSRSA9ICdVUERBVEVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9SRVFVRVNUID0gJ0RFTEVURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfU1VDQ0VTUyA9ICdERUxFVEVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX0ZBSUxVUkUgPSAnREVMRVRFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcbmV4cG9ydCBjb25zdCBQT1NUX1JFU0VUID0gJ1BPU1RfUkVTRVQnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuLy8gICBkYXRhLFxyXG4vLyB9KTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnBvc3RJbmZvcy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkUG9zdE1lc3NhZ2UgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnBvc3RJbmZvcyA9IGRyYWZ0LnBvc3RJbmZvcy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBEQVRFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQREFURV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUERBVEVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgREVMRVRFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERFTEVURV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnBvc3RJbmZvcyA9IGRyYWZ0LnBvc3RJbmZvcy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBERUxFVEVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUE9TVF9SRVNFVDpcclxuICAgICAgZHJhZnQucG9zdEluZm9zID0gW107XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==