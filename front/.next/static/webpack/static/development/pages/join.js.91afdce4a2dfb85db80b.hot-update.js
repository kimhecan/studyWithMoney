webpackHotUpdate("static\\development\\pages\\join.js",{

/***/ "./node_modules/nanoid/format.browser.js":
false,

/***/ "./node_modules/shortId/index.js":
false,

/***/ "./node_modules/shortId/lib/alphabet.js":
false,

/***/ "./node_modules/shortId/lib/build.js":
false,

/***/ "./node_modules/shortId/lib/generate.js":
false,

/***/ "./node_modules/shortId/lib/index.js":
false,

/***/ "./node_modules/shortId/lib/is-valid.js":
false,

/***/ "./node_modules/shortId/lib/random/random-byte-browser.js":
false,

/***/ "./node_modules/shortId/lib/random/random-from-seed.js":
false,

/***/ "./node_modules/shortId/lib/util/cluster-worker-id-browser.js":
false,

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, loginRequestAction, joinRequestAction, dummyUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinRequestAction", function() { return joinRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyUser", function() { return dummyUser; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);


var initialState = {
  info: {
    id: null,
    password: null,
    nickname: null,
    email: null,
    grade: null,
    department: null
  }
};
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var joinRequestAction = function joinRequestAction(data) {
  return {
    type: SIGN_UP_REQUEST,
    data: data
  };
};
var dummyUser = function dummyUser(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortId.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
    };
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.info.id = action.data.id;
        draft.info.password = action.data.password;
        break;

      case LOG_IN_SUCCESS:
        draft.info.user = dummyUser(action.data);
        break;

      case LOG_IN_FAILURE:
        draft.info.logInError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.info = action.data;
        break;

      case SIGN_UP_SUCCESS:
        draft.info.user = dummyUser(action.data);
        break;

      case SIGN_UP_FAILURE:
        draft.info.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.info = null;
        break;

      case LOG_OUT_SUCCESS:
        break;

      case LOG_OUT_FAILURE:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImluZm8iLCJpZCIsInBhc3N3b3JkIiwibmlja25hbWUiLCJlbWFpbCIsImdyYWRlIiwiZGVwYXJ0bWVudCIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiam9pblJlcXVlc3RBY3Rpb24iLCJkdW1teVVzZXIiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVzZXIiLCJsb2dJbkVycm9yIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsTUFBSSxFQUFFO0FBQ0pDLE1BQUUsRUFBRSxJQURBO0FBRUpDLFlBQVEsRUFBRSxJQUZOO0FBR0pDLFlBQVEsRUFBRSxJQUhOO0FBSUpDLFNBQUssRUFBRSxJQUpIO0FBS0pDLFNBQUssRUFBRSxJQUxIO0FBTUpDLGNBQVUsRUFBRTtBQU5SO0FBRG9CLENBQXJCO0FBV0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUMzQ0MsUUFBSSxFQUFFUixjQURxQztBQUUzQ08sUUFBSSxFQUFKQTtBQUYyQyxHQUFYO0FBQUEsQ0FBM0I7QUFLQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNGLElBQUQ7QUFBQSxTQUFXO0FBQzFDQyxRQUFJLEVBQUVYLGVBRG9DO0FBRTFDVSxRQUFJLEVBQUpBO0FBRjBDLEdBQVg7QUFBQSxDQUExQjtBQUtBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQ7QUFBQSxTQUFZQyxLQUFLLENBQUNELE1BQUQsQ0FBTCxDQUFjRSxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QjtBQUFBLFdBQU87QUFDbkV2QixRQUFFLEVBQUV3QixPQUFPLENBQUNDLFFBQVIsRUFEK0Q7QUFFbkV2QixjQUFRLEVBQUV3Qiw0Q0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVg7QUFGeUQsS0FBUDtBQUFBLEdBQXpCLENBQVo7QUFBQSxDQUFsQjs7QUFLUCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUNDLEtBQUQsdUVBQVNoQyxZQUFUO0FBQUEsTUFBdUJpQyxNQUF2QjtBQUFBLFNBQWtDQyxxREFBTyxDQUFDRixLQUFELEVBQVEsVUFBQ0csS0FBRCxFQUFXO0FBQzFFLFlBQVFGLE1BQU0sQ0FBQ2QsSUFBZjtBQUNFLFdBQUtSLGNBQUw7QUFDRXdCLGFBQUssQ0FBQ2xDLElBQU4sQ0FBV0MsRUFBWCxHQUFnQitCLE1BQU0sQ0FBQ2YsSUFBUCxDQUFZaEIsRUFBNUI7QUFDQWlDLGFBQUssQ0FBQ2xDLElBQU4sQ0FBV0UsUUFBWCxHQUFzQjhCLE1BQU0sQ0FBQ2YsSUFBUCxDQUFZZixRQUFsQztBQUNBOztBQUNGLFdBQUtTLGNBQUw7QUFDRXVCLGFBQUssQ0FBQ2xDLElBQU4sQ0FBV21DLElBQVgsR0FBa0JmLFNBQVMsQ0FBQ1ksTUFBTSxDQUFDZixJQUFSLENBQTNCO0FBQ0E7O0FBQ0YsV0FBS0wsY0FBTDtBQUNFc0IsYUFBSyxDQUFDbEMsSUFBTixDQUFXb0MsVUFBWCxHQUF3QkosTUFBTSxDQUFDSyxLQUEvQjtBQUNBOztBQUNGLFdBQUs5QixlQUFMO0FBQ0UyQixhQUFLLENBQUNsQyxJQUFOLEdBQWFnQyxNQUFNLENBQUNmLElBQXBCO0FBQ0E7O0FBQ0YsV0FBS1QsZUFBTDtBQUNFMEIsYUFBSyxDQUFDbEMsSUFBTixDQUFXbUMsSUFBWCxHQUFrQmYsU0FBUyxDQUFDWSxNQUFNLENBQUNmLElBQVIsQ0FBM0I7QUFDQTs7QUFDRixXQUFLUixlQUFMO0FBQ0V5QixhQUFLLENBQUNsQyxJQUFOLENBQVdvQyxVQUFYLEdBQXdCSixNQUFNLENBQUNLLEtBQS9CO0FBQ0E7O0FBQ0YsV0FBS3hCLGVBQUw7QUFDRXFCLGFBQUssQ0FBQ2xDLElBQU4sR0FBYSxJQUFiO0FBQ0E7O0FBQ0YsV0FBS2MsZUFBTDtBQUNFOztBQUNGLFdBQUtDLGVBQUw7QUFDRTs7QUFDRjtBQUNFO0FBNUJKO0FBOEJELEdBL0J3RCxDQUF6QztBQUFBLENBQWhCOztBQWlDZWUsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGpvaW4uanMuOTFhZmRjZTRhMmRmYjg1ZGI4MGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaW5mbzoge1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICBwYXNzd29yZDogbnVsbCxcclxuICAgIG5pY2tuYW1lOiBudWxsLFxyXG4gICAgZW1haWw6IG51bGwsXHJcbiAgICBncmFkZTogbnVsbCxcclxuICAgIGRlcGFydG1lbnQ6IG51bGwsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgam9pblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZHVtbXlVc2VyID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG59KSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmluZm8uaWQgPSBhY3Rpb24uZGF0YS5pZDtcclxuICAgICAgZHJhZnQuaW5mby5wYXNzd29yZCA9IGFjdGlvbi5kYXRhLnBhc3N3b3JkO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmluZm8udXNlciA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQuaW5mby5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5pbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmluZm8udXNlciA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmluZm8ubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuaW5mbyA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=