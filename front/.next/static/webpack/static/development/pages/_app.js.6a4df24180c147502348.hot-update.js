webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(AddPost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(uploadImages),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUploadImages),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);





function AddPostAPI(data) {
  // 포스트 추가하기
  console.log(data, 'saga');
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post', data);
}

_c = AddPostAPI;

function AddPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function AddPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(AddPostAPI, action.data);

        case 3:
          result = _context.sent;
          console.log(result.data, '유저정보불러오기');
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context.t0.response.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

_c2 = AddPost;

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], AddPost);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
} //----------------------------------------------------------------------


function uploadImagesAPI(data) {
  // image미리보기를 위해 서버에 저장하고 url 받기
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post/images', data);
}

function uploadImages(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function uploadImages$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 13;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_FAILURE"],
            error: _context3.t0.response.data
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function watchUploadImages() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUploadImages$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"], uploadImages);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
} //-------------------------------------------------------------------------


function laodPostsAPI(data) {
  // Post로드하기
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/posts?lastId=".concat(data.lastId || 0), data.category);
}

function loadPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(laodPostsAPI, action.data);

        case 3:
          result = _context5.sent;
          console.log(result, 'result');
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });

        case 7:
          _context5.next = 14;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
            error: _context5.t0.response.data
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 9]]);
}

function watchLoadPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost) // fork(watchUpdatePost),
          // fork(watchDeletePost),
          ]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

var _c, _c2;

$RefreshReg$(_c, "AddPostAPI");
$RefreshReg$(_c2, "AddPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzIl0sIm5hbWVzIjpbIkFkZFBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ1cGxvYWRJbWFnZXMiLCJ3YXRjaFVwbG9hZEltYWdlcyIsImxvYWRQb3N0cyIsIndhdGNoTG9hZFBvc3QiLCJwb3N0U2FnYSIsIkFkZFBvc3RBUEkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicG9zdCIsImFjdGlvbiIsImNhbGwiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwiQUREX1BPU1RfU1VDQ0VTUyIsImVycm9yIiwiQUREX1BPU1RfRkFJTFVSRSIsInJlc3BvbnNlIiwidGFrZUxhdGVzdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJsYW9kUG9zdHNBUEkiLCJnZXQiLCJsYXN0SWQiLCJjYXRlZ29yeSIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWFVQSxPO21HQWlCQUMsWTttR0FVQUMsWTttR0FlQUMsaUI7bUdBVUFDLFM7bUdBaUJBQyxhO21HQUdlQyxROztBQXJGekI7QUFDQTtBQUNBOztBQU1BLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQUU7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBQWtCLE1BQWxCO0FBQ0EsU0FBT0csNENBQUssQ0FBQ0MsSUFBTixDQUFXLE9BQVgsRUFBb0JKLElBQXBCLENBQVA7QUFDRDs7S0FIUUQsVTs7QUFLVCxTQUFVUCxPQUFWLENBQWtCYSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW1CLGlCQUFNQywr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QUFhYjtBQUZaLFdBQUQsQ0FBVDs7QUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQkEsU0FBVUgsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTWlCLHFFQUFVLENBQUNZLGlFQUFELEVBQXFCOUIsU0FBckIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR2UsU0FBVUUsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTTZCLDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ25DLFlBQUQsQ0FESSxFQUVSbUMsK0RBQUksQ0FBQ2pDLGlCQUFELENBRkksRUFHUmlDLCtEQUFJLENBQUMvQixhQUFELENBSEksQ0FJUjtBQUNBO0FBTFEsV0FBRCxDQUFUOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjZhNGRmMjQxODBjMTQ3NTAyMzQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBjYWxsLCBwdXQsIGZvcmssIGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUywgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLCBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBBZGRQb3N0QVBJKGRhdGEpIHsgLy8g7Y+s7Iqk7Yq4IOy2lOqwgO2VmOq4sFxyXG4gIGNvbnNvbGUubG9nKGRhdGEsICdzYWdhJyk7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBBZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLCAn7Jyg7KCA7KCV67O067aI65+s7Jik6riwJyk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZS5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgQWRkUG9zdCk7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHsgLy8gaW1hZ2Xrr7jrpqzrs7TquLDrpbwg7JyE7ZW0IOyEnOuyhOyXkCDsoIDsnqXtlZjqs6AgdXJsIOuwm+q4sFxyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBsYW9kUG9zdHNBUEkoZGF0YSkgeyAvLyBQb3N066Gc65Oc7ZWY6riwXHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2RhdGEubGFzdElkIHx8IDB9YCwgZGF0YS5jYXRlZ29yeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGFvZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQsICdyZXN1bHQnKTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgIC8vIGZvcmsod2F0Y2hVcGRhdGVQb3N0KSxcclxuICAgIC8vIGZvcmsod2F0Y2hEZWxldGVQb3N0KSxcclxuICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9