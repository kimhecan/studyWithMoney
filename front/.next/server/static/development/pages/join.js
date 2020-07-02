module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/join.js":
/*!***********************!*\
  !*** ./pages/join.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\pages\\join.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const {
  TreeNode
} = antd__WEBPACK_IMPORTED_MODULE_1__["TreeSelect"];
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}; // Component

const Join = () => {
  const {
    0: selectValue,
    1: setSelectValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  const onSubmit = values => {
    console.log('Success:', values);
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["joinRequestAction"])({
      id: values.id,
      password: values.password,
      nickname: values.nickname,
      email: values.id,
      grade: parseInt(values.id, 10),
      department: values.department
    }));
    alert('로그인에 성공하셨습니다');
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/');
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onChange = value => {
    setSelectValue(value);
  };

  const selectAfter = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: "@google.com",
    className: "select-after",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(Option, {
    value: "@google.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "@google.com"), __jsx(Option, {
    value: "@naver.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "@naver.com"), __jsx(Option, {
    value: "@hanyang.ac.kr",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, "@hanyang.ac.kr"));

  return __jsx("div", {
    style: {
      backgroundColor: '#272727',
      height: '900px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("h1", {
    style: {
      color: 'white',
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "\uC0C8 \uACC4\uC815 \uB9CC\uB4E4\uAE30"), __jsx("h2", {
    style: {
      color: 'white',
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "\uBE60\uB974\uACE0 \uC27D\uC2B5\uB2C8\uB2E4")), __jsx("div", {
    style: {
      backgroundColor: 'white',
      width: '450px',
      height: '500px',
      position: 'absolute',
      top: '20%',
      left: '34%',
      borderRadius: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({}, layout, {
    name: "join",
    initialValues: {
      remember: true
    },
    onFinish: onSubmit,
    onFinishFailed: onFinishFailed,
    style: {
      marginTop: '60px',
      marginRight: '70px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\uC544\uC774\uB514",
    name: "id",
    rules: [{
      required: true,
      message: '아이디를 입력해 주세요!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\uBE44\uBC00\uBC88\uD638",
    name: "password",
    rules: [{
      required: true,
      message: '비밀번호를 입력해 주세요!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "nickname",
    label: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, "\uB2C9\uB124\uC784\xA0", __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      title: "What do you want others to call you?",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["QuestionCircleOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }))),
    rules: [{
      required: true,
      message: 'Please input your nickname!',
      whitespace: true
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\uC774\uBA54\uC77C",
    name: "email",
    rules: [{
      required: true,
      message: '이메일을 입력 해주세요!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    addonAfter: selectAfter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\uD559\uB144",
    name: "grade",
    rules: [{
      required: true,
      message: '학년을 입력해 주세요!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    placeholder: "\uD559\uB144",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "1"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, "2"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, "3"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
    value: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "4"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    label: "\uC18C\uC18D \uD559\uACFC",
    name: "department",
    rules: [{
      required: true,
      message: '소속 학과를 선택해 주세요!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["TreeSelect"], {
    showSearch: true,
    style: {
      width: '100%'
    },
    value: selectValue,
    dropdownStyle: {
      maxHeight: 400,
      overflow: 'auto'
    },
    allowClear: true,
    treeDefaultExpandAll: true,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(TreeNode, {
    value: "software",
    title: "\uC18C\uD504\uD2B8\uC6E8\uC5B4\uB300\uD559",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, __jsx(TreeNode, {
    value: "\uC18C\uD504\uD2B8\uC6E8\uC5B4\uD559\uBD80",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 50
      }
    }, "\uC18C\uD504\uD2B8\uC6E8\uC5B4\uD559\uBD80"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "ICT\uC735\uD569\uD559\uBD80",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 50
      }
    }, "ICT\uC735\uD569\uD559\uBD80"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  })), __jsx(TreeNode, {
    value: "engineering",
    title: "\uACF5\uACFC\uB300\uD559",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx(TreeNode, {
    value: "\uAC74\uCD95\uD559\uBD80",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 47
      }
    }, "\uAC74\uCD95\uD559\uBD80"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uAC74\uC124\uD658\uACBD\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 50
      }
    }, "\uAC74\uC124\uD658\uACBD\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uAD50\uD1B5\xB7\uBB3C\uB958\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 51
      }
    }, "\uAD50\uD1B5\xB7\uBB3C\uB958\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC804\uC790\uACF5\uD559\uBD80",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 48
      }
    }, "\uC804\uC790\uACF5\uD559\uBD80"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC7AC\uB8CC\uD654\uD559\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 50
      }
    }, "\uC7AC\uB8CC\uD654\uD559\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uAE30\uACC4\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 48
      }
    }, "\uAE30\uACC4\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC0B0\uC5C5\uACBD\uC601\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 50
      }
    }, "\uC0B0\uC5C5\uACBD\uC601\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC0DD\uBA85\uB098\uB178\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 50
      }
    }, "\uC0DD\uBA85\uB098\uB178\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uB85C\uBD07\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 48
      }
    }, "\uB85C\uBD07\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC735\uD569\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 48
      }
    }, "\uC735\uD569\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uAD6D\uBC29\uC815\uBCF4\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 50
      }
    }, "\uAD6D\uBC29\uC815\uBCF4\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC2A4\uB9C8\uD2B8\uC735\uD569\uACF5\uD559\uBD80",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 51
      }
    }, "\uC2A4\uB9C8\uD2B8\uC735\uD569\uACF5\uD559\uBD80"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  })), __jsx(TreeNode, {
    value: "science",
    title: "\uACFC\uD559\uAE30\uC220\uC735\uD569\uB300\uD559",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx(TreeNode, {
    value: "\uC751\uC6A9\uC218\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 48
      }
    }, "\uC751\uC6A9\uC218\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC751\uC6A9\uBB3C\uB9AC\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 49
      }
    }, "\uC751\uC6A9\uBB3C\uB9AC\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uBD84\uC790\uC0DD\uBA85\uACFC\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 50
      }
    }, "\uBD84\uC790\uC0DD\uBA85\uACFC\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uD654\uD559\uBD84\uC790\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 50
      }
    }, "\uD654\uD559\uBD84\uC790\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uD574\uC591\uC735\uD569\uACF5\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 50
      }
    }, "\uD574\uC591\uC735\uD569\uACF5\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uB098\uB178\uAD11\uC804\uC790\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 50
      }
    }, "\uB098\uB178\uAD11\uC804\uC790\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  })), __jsx(TreeNode, {
    value: "economic",
    title: "\uACBD\uC0C1\uB300\uD559",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(TreeNode, {
    value: "\uACBD\uC81C\uD559\uBD80",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 47
      }
    }, "\uACBD\uC81C\uD559\uBD80"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uACBD\uC601\uD559\uBD80",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 47
      }
    }, "\uACBD\uC601\uD559\uBD80"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uBCF4\uD5D8\uACC4\uB9AC\uD559\uACFC ",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 50
      }
    }, "\uBCF4\uD5D8\uACC4\uB9AC\uD559\uACFC "),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uD68C\uACC4\uC138\uBB34\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 49
      }
    }, "\uD68C\uACC4\uC138\uBB34\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  })), __jsx(TreeNode, {
    value: "media",
    title: "\uC5B8\uB860\uC815\uBCF4\uB300\uD559",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx(TreeNode, {
    value: "\uAD11\uACE0\uD64D\uBCF4\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 49
      }
    }, "\uAD11\uACE0\uD64D\uBCF4\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC815\uBCF4\uC0AC\uD68C\uBBF8\uB514\uC5B4\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 52
      }
    }, "\uC815\uBCF4\uC0AC\uD68C\uBBF8\uB514\uC5B4\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  })), __jsx(TreeNode, {
    value: "design",
    title: "\uB514\uC790\uC778\uB300\uD559",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx(TreeNode, {
    value: "\uC0B0\uC5C5\uB514\uC790\uC778\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 50
      }
    }, "\uC0B0\uC5C5\uB514\uC790\uC778\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC601\uC0C1\uB514\uC790\uC778\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 50
      }
    }, "\uC601\uC0C1\uB514\uC790\uC778\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158\uB514\uC790\uC778\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 54
      }
    }, "\uCEE4\uBBA4\uB2C8\uCF00\uC774\uC158\uB514\uC790\uC778\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC11C\uD53C\uC2A4\xB7\uC778\uD14C\uB9AC\uC5B4\uB514\uC790\uC778\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 56
      }
    }, "\uC11C\uD53C\uC2A4\xB7\uC778\uD14C\uB9AC\uC5B4\uB514\uC790\uC778\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC8FC\uC5BC\uB9AC\xB7\uD328\uC158\uB514\uC790\uC778\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 54
      }
    }, "\uC8FC\uC5BC\uB9AC\xB7\uD328\uC158\uB514\uC790\uC778\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  })), __jsx(TreeNode, {
    value: "culture",
    title: "\uAD6D\uC81C\uBB38\uD654\uB300\uD559",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(TreeNode, {
    value: "\uD55C\uAD6D\uC5B8\uC5B4\uBB38\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 50
      }
    }, "\uD55C\uAD6D\uC5B8\uC5B4\uBB38\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uBB38\uD654\uC778\uB958\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 49
      }
    }, "\uBB38\uD654\uC778\uB958\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uBB38\uD654\uCF58\uD150\uCE20\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 50
      }
    }, "\uBB38\uD654\uCF58\uD150\uCE20\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC911\uAD6D\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 47
      }
    }, "\uC911\uAD6D\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC77C\uBCF8\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 47
      }
    }, "\uC77C\uBCF8\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC601\uBBF8\uC5B8\uC5B4\xB7\uBB38\uD654\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 52
      }
    }, "\uC601\uBBF8\uC5B8\uC5B4\xB7\uBB38\uD654\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uD504\uB791\uC2A4\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 48
      }
    }, "\uD504\uB791\uC2A4\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  })), __jsx(TreeNode, {
    value: "sport",
    title: "\uC608\uCCB4\uB2A5\uB300\uD559",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(TreeNode, {
    value: "\uC2A4\uD3EC\uCE20\uACFC\uD559\uBD80 ",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 50
      }
    }, "\uC2A4\uD3EC\uCE20\uACFC\uD559\uBD80"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uBB34\uC6A9\uC608\uC220\uD559\uACFC  ",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 51
      }
    }, "\uBB34\uC6A9\uC608\uC220\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }), __jsx(TreeNode, {
    value: "\uC2E4\uC6A9\uC74C\uC545\uD559\uACFC  ",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 51
      }
    }, "\uC2E4\uC6A9\uC74C\uC545\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  })), __jsx(TreeNode, {
    value: "pharmacy",
    title: "\uC57D\uD559\uB300\uD559",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, __jsx(TreeNode, {
    value: "\uC57D\uD559\uACFC",
    title: __jsx("b", {
      style: {
        color: '#08c'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 46
      }
    }, "\uC57D\uD559\uACFC"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, tailLayout, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    style: {
      width: '250px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, "\uAC00\uC785\uD558\uAE30")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Join);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, loginRequestAction, joinRequestAction, dummyUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinRequestAction", function() { return joinRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyUser", function() { return dummyUser; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortId */ "shortId");
/* harmony import */ var shortId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortId__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  id: null,
  password: null,
  nickname: null,
  email: null,
  grade: null,
  department: null
};
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const joinRequestAction = data => ({
  type: SIGN_UP_REQUEST,
  data
});
const dummyUser = number => Array(number).fill().map(() => ({
  id: shortId__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
  nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
}));

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      draft.id = action.data.id;
      draft.password = action.data.password;
      break;

    case LOG_IN_SUCCESS:
      draft.user = dummyUser(action.data);
      break;

    case LOG_IN_FAILURE:
      draft.logInError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.id = action.data.id;
      draft.password = action.data.password;
      draft.nickname = action.data.nickname;
      draft.email = action.data.email;
      draft.grade = action.data.grade;
      draft.department = action.data.department;
      break;

    case SIGN_UP_SUCCESS:
      draft.user = dummyUser(action.data);
      break;

    case SIGN_UP_FAILURE:
      draft.logInError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/join.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\TodoList\front\pages\join.js */"./pages/join.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "shortId":
/*!**************************!*\
  !*** external "shortId" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortId");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydElkXCIiXSwibmFtZXMiOlsiT3B0aW9uIiwiU2VsZWN0IiwiVHJlZU5vZGUiLCJUcmVlU2VsZWN0IiwibGF5b3V0IiwibGFiZWxDb2wiLCJzcGFuIiwid3JhcHBlckNvbCIsInRhaWxMYXlvdXQiLCJvZmZzZXQiLCJKb2luIiwic2VsZWN0VmFsdWUiLCJzZXRTZWxlY3RWYWx1ZSIsInVzZVN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImpvaW5SZXF1ZXN0QWN0aW9uIiwiaWQiLCJwYXNzd29yZCIsIm5pY2tuYW1lIiwiZW1haWwiLCJncmFkZSIsInBhcnNlSW50IiwiZGVwYXJ0bWVudCIsImFsZXJ0IiwiUm91dGVyIiwicmVwbGFjZSIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInNlbGVjdEFmdGVyIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvcmRlclJhZGl1cyIsInJlbWVtYmVyIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJ3aGl0ZXNwYWNlIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJpbml0aWFsU3RhdGUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImR1bW15VXNlciIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwidXNlciIsImxvZ0luRXJyb3IiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtE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dkI7QUFDQXdELFdBQUssQ0FBQ3ZELFFBQU4sR0FBaUJxRCxNQUFNLENBQUNkLElBQVAsQ0FBWXZDLFFBQTdCO0FBQ0F1RCxXQUFLLENBQUN0RCxRQUFOLEdBQWlCb0QsTUFBTSxDQUFDZCxJQUFQLENBQVl0QyxRQUE3QjtBQUNBc0QsV0FBSyxDQUFDckQsS0FBTixHQUFjbUQsTUFBTSxDQUFDZCxJQUFQLENBQVlyQyxLQUExQjtBQUNBcUQsV0FBSyxDQUFDcEQsS0FBTixHQUFja0QsTUFBTSxDQUFDZCxJQUFQLENBQVlwQyxLQUExQjtBQUNBb0QsV0FBSyxDQUFDbEQsVUFBTixHQUFtQmdELE1BQU0sQ0FBQ2QsSUFBUCxDQUFZbEMsVUFBL0I7QUFDQTs7QUFDRixTQUFLNEIsZUFBTDtBQUNFc0IsV0FBSyxDQUFDQyxJQUFOLEdBQWFmLFNBQVMsQ0FBQ1ksTUFBTSxDQUFDZCxJQUFSLENBQXRCO0FBQ0E7O0FBQ0YsU0FBS0wsZUFBTDtBQUNFcUIsV0FBSyxDQUFDRSxVQUFOLEdBQW1CSixNQUFNLENBQUNLLEtBQTFCO0FBQ0E7O0FBQ0Y7QUFDRTtBQTFCSjtBQTRCRCxDQTdCd0QsQ0FBekQ7O0FBK0JlUCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcam9pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgVHJlZVNlbGVjdCwgU2VsZWN0LCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFF1ZXN0aW9uQ2lyY2xlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgam9pblJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmNvbnN0IHsgVHJlZU5vZGUgfSA9IFRyZWVTZWxlY3Q7XHJcblxyXG5jb25zdCBsYXlvdXQgPSB7XHJcbiAgbGFiZWxDb2w6IHsgc3BhbjogOCB9LFxyXG4gIHdyYXBwZXJDb2w6IHsgc3BhbjogMTYgfSxcclxufTtcclxuY29uc3QgdGFpbExheW91dCA9IHtcclxuICB3cmFwcGVyQ29sOiB7IG9mZnNldDogOCwgc3BhbjogMTYgfSxcclxufTtcclxuXHJcbi8vIENvbXBvbmVudFxyXG5jb25zdCBKb2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RWYWx1ZSwgc2V0U2VsZWN0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCB2YWx1ZXMpO1xyXG4gICAgZGlzcGF0Y2goam9pblJlcXVlc3RBY3Rpb24oe1xyXG4gICAgICBpZDogdmFsdWVzLmlkLFxyXG4gICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICBuaWNrbmFtZTogdmFsdWVzLm5pY2tuYW1lLFxyXG4gICAgICBlbWFpbDogdmFsdWVzLmlkLFxyXG4gICAgICBncmFkZTogcGFyc2VJbnQodmFsdWVzLmlkLCAxMCksXHJcbiAgICAgIGRlcGFydG1lbnQ6IHZhbHVlcy5kZXBhcnRtZW50LFxyXG4gICAgfSkpO1xyXG4gICAgYWxlcnQoJ+uhnOq3uOyduOyXkCDshLHqs7XtlZjshajsirXri4jri6QnKTtcclxuICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkOicsIGVycm9ySW5mbyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIHNldFNlbGVjdFZhbHVlKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZWxlY3RBZnRlciA9IChcclxuICAgIDxTZWxlY3QgZGVmYXVsdFZhbHVlPVwiQGdvb2dsZS5jb21cIiBjbGFzc05hbWU9XCJzZWxlY3QtYWZ0ZXJcIj5cclxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIkBnb29nbGUuY29tXCI+QGdvb2dsZS5jb208L09wdGlvbj5cclxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIkBuYXZlci5jb21cIj5AbmF2ZXIuY29tPC9PcHRpb24+XHJcbiAgICAgIDxPcHRpb24gdmFsdWU9XCJAaGFueWFuZy5hYy5rclwiPkBoYW55YW5nLmFjLmtyPC9PcHRpb24+XHJcbiAgICA8L1NlbGVjdD5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjcyNzI3JywgaGVpZ2h0OiAnOTAwcHgnIH19PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT7sg4gg6rOE7KCVIOunjOuTpOq4sDwvaDE+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19Puu5oOultOqzoCDsib3sirXri4jri6Q8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHdpZHRoOiAnNDUwcHgnLCBoZWlnaHQ6ICc1MDBweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcyMCUnLCBsZWZ0OiAnMzQlJywgYm9yZGVyUmFkaXVzOiAnMTBweCcgfX0+XHJcbiAgICAgICAgPEZvcm0gey4uLmxheW91dH0gbmFtZT1cImpvaW5cIiBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19IG9uRmluaXNoPXtvblN1Ym1pdH0gb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfSBzdHlsZT17eyBtYXJnaW5Ub3A6ICc2MHB4JywgbWFyZ2luUmlnaHQ6ICc3MHB4JyB9fT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCLslYTsnbTrlJRcIiBuYW1lPVwiaWRcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfslYTsnbTrlJTrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalCEnIH1dfT5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCLruYTrsIDrsojtmLhcIiBuYW1lPVwicGFzc3dvcmRcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalCEnIH1dfT5cclxuICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbmFtZT1cIm5pY2tuYW1lXCJcclxuICAgICAgICAgICAgbGFiZWw9eyhcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIOuLieuEpOyehCZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJXaGF0IGRvIHlvdSB3YW50IG90aGVycyB0byBjYWxsIHlvdT9cIj5cclxuICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIG5pY2tuYW1lIScsIHdoaXRlc3BhY2U6IHRydWUgfV19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwi7J2066mU7J28XCIgbmFtZT1cImVtYWlsXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn7J2066mU7J287J2EIOyeheugpSDtlbTso7zshLjsmpQhJyB9XX0+XHJcbiAgICAgICAgICAgIDxJbnB1dCBhZGRvbkFmdGVyPXtzZWxlY3RBZnRlcn0gLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIu2VmeuFhFwiIG5hbWU9XCJncmFkZVwiIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+2VmeuFhOydhCDsnoXroKXtlbQg7KO87IS47JqUIScgfV19PlxyXG4gICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwi7ZWZ64WEXCI+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCIxXCI+MTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiM1wiPjM8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCI0XCI+NDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCLshozsho0g7ZWZ6rO8XCIgbmFtZT1cImRlcGFydG1lbnRcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfshozsho0g7ZWZ6rO866W8IOyEoO2Dne2VtCDso7zshLjsmpQhJyB9XX0+XHJcbiAgICAgICAgICAgIDxUcmVlU2VsZWN0XHJcbiAgICAgICAgICAgICAgc2hvd1NlYXJjaFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0VmFsdWV9XHJcbiAgICAgICAgICAgICAgZHJvcGRvd25TdHlsZT17eyBtYXhIZWlnaHQ6IDQwMCwgb3ZlcmZsb3c6ICdhdXRvJyB9fVxyXG4gICAgICAgICAgICAgIGFsbG93Q2xlYXJcclxuICAgICAgICAgICAgICB0cmVlRGVmYXVsdEV4cGFuZEFsbFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cInNvZnR3YXJlXCIgdGl0bGU9XCLshoztlITtirjsm6jslrTrjIDtlZlcIj5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuyGjO2UhO2KuOybqOyWtO2Vmeu2gFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuyGjO2UhO2KuOybqOyWtO2Vmeu2gDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCJJQ1TsnLXtlantlZnrtoBcIiB0aXRsZT17PGIgc3R5bGU9e3sgY29sb3I6ICcjMDhjJyB9fT5JQ1TsnLXtlantlZnrtoA8L2I+fSAvPlxyXG4gICAgICAgICAgICAgIDwvVHJlZU5vZGU+XHJcbiAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwiZW5naW5lZXJpbmdcIiB0aXRsZT1cIuqzteqzvOuMgO2VmVwiPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi6rG07LaV7ZWZ67aAXCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+6rG07LaV7ZWZ67aAPC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuqxtOyEpO2ZmOqyveqzte2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuqxtOyEpO2ZmOqyveqzte2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLqtZDthrXCt+usvOulmOqzte2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19Puq1kO2GtcK366y866WY6rO17ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuyghOyekOqzte2Vmeu2gFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuyghOyekOqzte2Vmeu2gDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLsnqzro4ztmZTtlZnqs7XtlZnqs7xcIiB0aXRsZT17PGIgc3R5bGU9e3sgY29sb3I6ICcjMDhjJyB9fT7snqzro4ztmZTtlZnqs7XtlZnqs7w8L2I+fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi6riw6rOE6rO17ZWZ6rO8XCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+6riw6rOE6rO17ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuyCsOyXheqyveyYgeqzte2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuyCsOyXheqyveyYgeqzte2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLsg53rqoXrgpjrhbjqs7XtlZnqs7xcIiB0aXRsZT17PGIgc3R5bGU9e3sgY29sb3I6ICcjMDhjJyB9fT7sg53rqoXrgpjrhbjqs7XtlZnqs7w8L2I+fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi66Gc67SH6rO17ZWZ6rO8XCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+66Gc67SH6rO17ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuycte2Vqeqzte2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19Puycte2Vqeqzte2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLqta3rsKnsoJXrs7Tqs7XtlZnqs7xcIiB0aXRsZT17PGIgc3R5bGU9e3sgY29sb3I6ICcjMDhjJyB9fT7qta3rsKnsoJXrs7Tqs7XtlZnqs7w8L2I+fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi7Iqk66eI7Yq47Jy17ZWp6rO17ZWZ67aAXCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+7Iqk66eI7Yq47Jy17ZWp6rO17ZWZ67aAPC9iPn0gLz5cclxuICAgICAgICAgICAgICA8L1RyZWVOb2RlPlxyXG4gICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cInNjaWVuY2VcIiB0aXRsZT1cIuqzvO2Vmeq4sOyIoOycte2VqeuMgO2VmVwiPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi7J2R7Jqp7IiY7ZWZ6rO8XCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+7J2R7Jqp7IiY7ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuydkeyaqeusvOumrO2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuydkeyaqeusvOumrO2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLrtoTsnpDsg53rqoXqs7ztlZnqs7xcIiB0aXRsZT17PGIgc3R5bGU9e3sgY29sb3I6ICcjMDhjJyB9fT7rtoTsnpDsg53rqoXqs7ztlZnqs7w8L2I+fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi7ZmU7ZWZ67aE7J6Q6rO17ZWZ6rO8XCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+7ZmU7ZWZ67aE7J6Q6rO17ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIu2VtOyWkeycte2Vqeqzte2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19Pu2VtOyWkeycte2Vqeqzte2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLrgpjrhbjqtJHsoITsnpDtlZnqs7xcIiB0aXRsZT17PGIgc3R5bGU9e3sgY29sb3I6ICcjMDhjJyB9fT7rgpjrhbjqtJHsoITsnpDtlZnqs7w8L2I+fSAvPlxyXG4gICAgICAgICAgICAgIDwvVHJlZU5vZGU+XHJcbiAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwiZWNvbm9taWNcIiB0aXRsZT1cIuqyveyDgeuMgO2VmVwiPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi6rK97KCc7ZWZ67aAXCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+6rK97KCc7ZWZ67aAPC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuqyveyYge2Vmeu2gFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuqyveyYge2Vmeu2gDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLrs7Ttl5jqs4TrpqztlZnqs7wgXCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+67O07ZeY6rOE66as7ZWZ6rO8IDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLtmozqs4TshLjrrLTtlZnqs7xcIiB0aXRsZT17PGIgc3R5bGU9e3sgY29sb3I6ICcjMDhjJyB9fT7tmozqs4TshLjrrLTtlZnqs7w8L2I+fSAvPlxyXG4gICAgICAgICAgICAgIDwvVHJlZU5vZGU+XHJcbiAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwibWVkaWFcIiB0aXRsZT1cIuyWuOuhoOygleuztOuMgO2VmVwiPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi6rSR6rOg7ZmN67O07ZWZ6rO8XCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+6rSR6rOg7ZmN67O07ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuygleuztOyCrO2ajOuvuOuUlOyWtO2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuygleuztOyCrO2ajOuvuOuUlOyWtO2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgPC9UcmVlTm9kZT5cclxuICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCJkZXNpZ25cIiB0aXRsZT1cIuuUlOyekOyduOuMgO2VmVwiPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi7IKw7JeF65SU7J6Q7J247ZWZ6rO8XCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+7IKw7JeF65SU7J6Q7J247ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuyYgeyDgeuUlOyekOyduO2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuyYgeyDgeuUlOyekOyduO2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLsu6TrrqTri4jsvIDsnbTshZjrlJTsnpDsnbjtlZnqs7xcIiB0aXRsZT17PGIgc3R5bGU9e3sgY29sb3I6ICcjMDhjJyB9fT7su6TrrqTri4jsvIDsnbTshZjrlJTsnpDsnbjtlZnqs7w8L2I+fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi7ISc7ZS87IqkwrfsnbjthYzrpqzslrTrlJTsnpDsnbjtlZnqs7xcIiB0aXRsZT17PGIgc3R5bGU9e3sgY29sb3I6ICcjMDhjJyB9fT7shJztlLzsiqTCt+yduO2FjOumrOyWtOuUlOyekOyduO2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLso7zslrzrpqzCt+2MqOyFmOuUlOyekOyduO2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuyjvOyWvOumrMK37Yyo7IWY65SU7J6Q7J247ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICA8L1RyZWVOb2RlPlxyXG4gICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cImN1bHR1cmVcIiB0aXRsZT1cIuq1reygnOusuO2ZlOuMgO2VmVwiPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi7ZWc6rWt7Ja47Ja066y47ZWZ6rO8XCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+7ZWc6rWt7Ja47Ja066y47ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuusuO2ZlOyduOulmO2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuusuO2ZlOyduOulmO2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLrrLjtmZTsvZjthZDsuKDtlZnqs7xcIiB0aXRsZT17PGIgc3R5bGU9e3sgY29sb3I6ICcjMDhjJyB9fT7rrLjtmZTsvZjthZDsuKDtlZnqs7w8L2I+fSAvPlxyXG4gICAgICAgICAgICAgICAgPFRyZWVOb2RlIHZhbHVlPVwi7KSR6rWt7ZWZ6rO8XCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+7KSR6rWt7ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuydvOuzuO2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuydvOuzuO2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLsmIHrr7jslrjslrTCt+usuO2ZlO2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuyYgeuvuOyWuOyWtMK366y47ZmU7ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIu2UhOuekeyKpO2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19Pu2UhOuekeyKpO2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgPC9UcmVlTm9kZT5cclxuICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCJzcG9ydFwiIHRpdGxlPVwi7JiI7LK064ql64yA7ZWZXCI+XHJcbiAgICAgICAgICAgICAgICA8VHJlZU5vZGUgdmFsdWU9XCLsiqTtj6zsuKDqs7ztlZnrtoAgXCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+7Iqk7Y+s7Lig6rO87ZWZ67aAPC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuustOyaqeyYiOyIoO2VmeqzvCAgXCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+66y07Jqp7JiI7Iig7ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuyLpOyaqeydjOyVhe2VmeqzvCAgXCIgdGl0bGU9ezxiIHN0eWxlPXt7IGNvbG9yOiAnIzA4YycgfX0+7Iuk7Jqp7J2M7JWF7ZWZ6rO8PC9iPn0gLz5cclxuICAgICAgICAgICAgICA8L1RyZWVOb2RlPlxyXG4gICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cInBoYXJtYWN5XCIgdGl0bGU9XCLslb3tlZnrjIDtlZlcIj5cclxuICAgICAgICAgICAgICAgIDxUcmVlTm9kZSB2YWx1ZT1cIuyVve2VmeqzvFwiIHRpdGxlPXs8YiBzdHlsZT17eyBjb2xvcjogJyMwOGMnIH19PuyVve2VmeqzvDwvYj59IC8+XHJcbiAgICAgICAgICAgICAgPC9UcmVlTm9kZT5cclxuICAgICAgICAgICAgPC9UcmVlU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIHsuLi50YWlsTGF5b3V0fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgc3R5bGU9e3sgd2lkdGg6ICcyNTBweCcgfX0+XHJcbiAgICAgICAgICAgICAg6rCA7J6F7ZWY6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2luO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0SWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpZDogbnVsbCxcclxuICBwYXNzd29yZDogbnVsbCxcclxuICBuaWNrbmFtZTogbnVsbCxcclxuICBlbWFpbDogbnVsbCxcclxuICBncmFkZTogbnVsbCxcclxuICBkZXBhcnRtZW50OiBudWxsLFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGpvaW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW15VXNlciA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxufSkpO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5pZCA9IGFjdGlvbi5kYXRhLmlkO1xyXG4gICAgICBkcmFmdC5wYXNzd29yZCA9IGFjdGlvbi5kYXRhLnBhc3N3b3JkO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVzZXIgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmlkID0gYWN0aW9uLmRhdGEuaWQ7XHJcbiAgICAgIGRyYWZ0LnBhc3N3b3JkID0gYWN0aW9uLmRhdGEucGFzc3dvcmQ7XHJcbiAgICAgIGRyYWZ0Lm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGRyYWZ0LmVtYWlsID0gYWN0aW9uLmRhdGEuZW1haWw7XHJcbiAgICAgIGRyYWZ0LmdyYWRlID0gYWN0aW9uLmRhdGEuZ3JhZGU7XHJcbiAgICAgIGRyYWZ0LmRlcGFydG1lbnQgPSBhY3Rpb24uZGF0YS5kZXBhcnRtZW50O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC51c2VyID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydElkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=