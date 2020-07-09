webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/postImages.js":
/*!**********************************!*\
  !*** ./components/postImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _ImageZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageZoom */ "./components/ImageZoom/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postImages.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      style: {
        width: '100%',
        height: '500px',
        overflow: 'hidden'
      },
      src: "http://localhost:3065/".concat(images[0].src),
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImageZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 28
      }
    }));
  }

  if (images.length === 2) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      style: {
        width: '49.5%',
        display: 'inline-block'
      },
      src: "http://localhost:3065/".concat(images[0].src),
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }), __jsx("p", {
      style: {
        width: '1%',
        display: 'inline-block'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }), __jsx("img", {
      role: "presentation",
      style: {
        width: '49.5%',
        display: 'inline-block'
      },
      src: "http://localhost:3065/".concat(images[1].src),
      alt: images[1].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }), showImagesZoom && __jsx(_ImageZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 28
      }
    }));
  }

  if (images.length === 3) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("div", {
      style: {
        marginBottom: '3px',
        height: '300px',
        overflow: 'hidden'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx("img", {
      role: "presentation",
      style: {
        maxWidth: '100%',
        display: 'inline-block'
      },
      src: "http://localhost:3065/".concat(images[0].src),
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    })), __jsx("div", {
      style: {
        height: '300px',
        overflow: 'hidden'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, __jsx("img", {
      role: "presentation",
      style: {
        width: '49.7%',
        display: 'inline-block'
      },
      src: "http://localhost:3065/".concat(images[1].src),
      alt: images[1].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }), __jsx("p", {
      style: {
        width: '0.6%',
        display: 'inline-block'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }), __jsx("img", {
      role: "presentation",
      style: {
        width: '49.7%',
        display: 'inline-block'
      },
      src: "http://localhost:3065/".concat(images[2].src),
      alt: images[2].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }))), showImagesZoom && __jsx(_ImageZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 28
      }
    }));
  }

  if (images.length === 4) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx("div", {
      style: {
        marginBottom: '3px',
        height: '300px',
        overflow: 'hidden'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, __jsx("img", {
      role: "presentation",
      style: {
        width: '49.7%',
        display: 'inline-block'
      },
      src: "http://localhost:3065/".concat(images[0].src),
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }), __jsx("p", {
      style: {
        width: '0.6%',
        display: 'inline-block'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }), __jsx("img", {
      role: "presentation",
      style: {
        width: '49.7%',
        display: 'inline-block'
      },
      src: "http://localhost:3065/".concat(images[1].src),
      alt: images[1].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    })), __jsx("div", {
      style: {
        height: '300px',
        overflow: 'hidden'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx("img", {
      role: "presentation",
      style: {
        width: '49.7%',
        display: 'inline-block'
      },
      src: "http://localhost:3065/".concat(images[2].src),
      alt: images[2].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }), __jsx("p", {
      style: {
        width: '0.6%',
        display: 'inline-block'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }), __jsx("img", {
      role: "presentation",
      style: {
        width: '49.7%',
        display: 'inline-block'
      },
      src: "http://localhost:3065/".concat(images[3].src),
      alt: images[3].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }))), showImagesZoom && __jsx(_ImageZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 28
      }
    }));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      marginBottom: '3px',
      height: '300px',
      overflow: 'hidden'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("img", {
    role: "presentation",
    style: {
      width: '49.7%',
      display: 'inline-block'
    },
    src: "http://localhost:3065/".concat(images[0].src),
    alt: images[0].src,
    onClick: onZoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), __jsx("p", {
    style: {
      width: '0.6%',
      display: 'inline-block'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }), __jsx("img", {
    role: "presentation",
    style: {
      width: '49.7%',
      display: 'inline-block'
    },
    src: "http://localhost:3065/".concat(images[1].src),
    alt: images[1].src,
    onClick: onZoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      height: '300px',
      overflow: 'hidden'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("img", {
    role: "presentation",
    style: {
      width: '49.7%',
      display: 'inline-block'
    },
    src: "http://localhost:3065/".concat(images[2].src),
    alt: images[2].src,
    onClick: onZoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), __jsx("p", {
    style: {
      width: '0.6%',
      display: 'inline-block'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }), __jsx("img", {
    role: "presentation",
    style: {
      width: '49.7%',
      display: 'inline-block'
    },
    src: "http://localhost:3065/".concat(images[3].src),
    alt: images[3].src,
    onClick: onZoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }))), __jsx("div", {
    role: "presentation",
    style: {
      display: 'inline-block',
      width: '50%',
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    onClick: onZoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"), showImagesZoom && __jsx(_ImageZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    images: images,
    onClose: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 26
    }
  }));
};

_s(PostImages, "xZ+WVc/D16Fmvriq1CwZMW/wLmE=");

_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RJbWFnZXMuanMiXSwibmFtZXMiOlsiUG9zdEltYWdlcyIsImltYWdlcyIsInVzZVN0YXRlIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uWm9vbSIsInVzZUNhbGxiYWNrIiwib25DbG9zZSIsImxlbmd0aCIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJzcmMiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwibWF4V2lkdGgiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxLQUFELENBRG5CO0FBQUEsTUFDMUJDLGNBRDBCO0FBQUEsTUFDVkMsaUJBRFU7O0FBR2pDLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQy9CRixxQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0QsR0FGeUIsRUFFdkIsRUFGdUIsQ0FBMUI7QUFJQSxNQUFNRyxPQUFPLEdBQUdELHlEQUFXLENBQUMsWUFBTTtBQUNoQ0YscUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNELEdBRjBCLEVBRXhCLEVBRndCLENBQTNCOztBQUlBLE1BQUlILE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2QixXQUNFLG1FQUNFO0FBQUssVUFBSSxFQUFDLGNBQVY7QUFBeUIsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxNQUFUO0FBQWlCQyxjQUFNLEVBQUUsT0FBekI7QUFBa0NDLGdCQUFRLEVBQUU7QUFBNUMs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QUFDQyxPQUFWLENBQWtCRCxpREFBUyxDQUFDRSxNQUE1QixFQUFvQ0M7QUFEdkIsQ0FBdkI7QUFJZXRCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hOThlMWMwZDM4ZTA4ZmQ5YWQ2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBJbWFnZXNab29tIGZyb20gJy4vSW1hZ2Vab29tJztcclxuXHJcbmNvbnN0IFBvc3RJbWFnZXMgPSAoeyBpbWFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvblpvb20gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRTaG93SW1hZ2VzWm9vbShmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1MDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiAnNDkuNSUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IHdpZHRoOiAnMSUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSAvPlxyXG4gICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiAnNDkuNSUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMV0uc3JjfWB9IGFsdD17aW1hZ2VzWzFdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnM3B4JywgaGVpZ2h0OiAnMzAwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMzAwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiAnNDkuNyUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMV0uc3JjfWB9IGFsdD17aW1hZ2VzWzFdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyB3aWR0aDogJzAuNiUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSAvPlxyXG4gICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17eyB3aWR0aDogJzQ5LjclJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzJdLnNyY31gfSBhbHQ9e2ltYWdlc1syXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnM3B4JywgaGVpZ2h0OiAnMzAwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiAnNDkuNyUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17eyB3aWR0aDogJzAuNiUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSAvPlxyXG4gICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17eyB3aWR0aDogJzQ5LjclJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzFdLnNyY31gfSBhbHQ9e2ltYWdlc1sxXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczMDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3R5bGU9e3sgd2lkdGg6ICc0OS43JScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1syXS5zcmN9YH0gYWx0PXtpbWFnZXNbMl0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IHdpZHRoOiAnMC42JScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IC8+XHJcbiAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiAnNDkuNyUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbM10uc3JjfWB9IGFsdD17aW1hZ2VzWzNdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICczcHgnLCBoZWlnaHQ6ICczMDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiAnNDkuNyUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgd2lkdGg6ICcwLjYlJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gLz5cclxuICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiAnNDkuNyUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMV0uc3JjfWB9IGFsdD17aW1hZ2VzWzFdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMzAwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17eyB3aWR0aDogJzQ5LjclJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzJdLnNyY31gfSBhbHQ9e2ltYWdlc1syXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IHdpZHRoOiAnMC42JScsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19IC8+XHJcbiAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT17eyB3aWR0aDogJzQ5LjclJywgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzNdLnNyY31gfSBhbHQ9e2ltYWdlc1szXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzUwJScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19IG9uQ2xpY2s9e29uWm9vbX0+XHJcbiAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtpbWFnZXMubGVuZ3RoIC0gMX1cclxuICAgICAgICDqsJzsnZgg7IKs7KeEIOuNlOuztOq4sFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9