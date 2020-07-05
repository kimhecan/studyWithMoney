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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Applayout.js":
/*!*********************************!*\
  !*** ./components/Applayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\Applayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_4__["Menu"];

const AppLayout = ({
  children
}) => {
  const {
    info
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // SSR처리해야함

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_USER_REQUEST"]
    });
  }, []);

  const handleClick = e => {
    console.log(e.key);

    switch (e.key) {
      case 'home':
        router.push('/main');
        break;

      case 'user':
        router.push('/profile');
        break;

      case 'problem':
        router.push('/problem');
        break;

      case 'concept':
        router.push('/concept');
        break;

      case 'freedom':
        router.push('/freeBoard');
        break;

      case 'information':
        router.push('/infoBoard');
        break;

      case 'club':
        router.push('/clubBoard');
        break;

      case 'inquiry':
        break;

      case 'logout':
        router.replace('/');
        dispatch({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOG_OUT_REQUEST"]
        });
        break;

      default:
        break;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, info.id !== null ? __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 4,
    style: {
      backgroundColor: '#001529'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    onClick: handleClick,
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: [''],
    mode: "inline",
    theme: "dark",
    forceSubMenuRender: "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      height: '130px',
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://user-images.githubusercontent.com/39295881/86248913-7f8de080-bbe9-11ea-801a-73f4f426ed0d.png",
    alt: "img",
    style: {
      width: '150px',
      marginTop: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "home",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HomeOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 45
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "user",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 45
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, info && info.nickname, "\uB2D8"), __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["BulbOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 43
      }
    }),
    title: "\uACF5\uBD80\uD558\uB0E5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "problem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, "\uBB38\uC81C\uD480\uC774"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "concept",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, "\uAC1C\uB150\uC774\uD574")), __jsx(SubMenu, {
    key: "sub2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["AppstoreOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 43
      }
    }),
    title: "\uAC8C\uC2DC\uD310",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "freedom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "information",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, "\uC815\uBCF4\uAC8C\uC2DC\uD310"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "club",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, "\uB3D9\uC544\uB9AC\xB7\uD559\uD68C")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "inquiry",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ContainerOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 48
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, "\uBB38\uC758\uD558\uAE30"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "logout",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LogoutOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 47
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "\uB85C\uADF8\uC544\uC6C3"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: {
      backgroundColor: 'blue',
      height: '120px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, "\uBC30\uB108"), children)) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "\uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/postForm.js":
/*!********************************!*\
  !*** ./components/postForm.js ***!
  \********************************/
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
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];

const PostForm = () => {
  const [form] = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm();

  const onFinish = values => {
    console.log('Success:', values);
    form.resetFields();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const normFile = e => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    name: "basic",
    form: form,
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "title",
    rules: [{
      required: true,
      message: '제목을 입력해 주세요!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "\uAE00 \uC81C\uBAA9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "content",
    rules: [{
      required: true,
      message: '내용을 입력해주세요!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(TextArea, {
    rows: 4,
    placeholder: "\uC5EC\uAE30\uB97C \uB20C\uB7EC\uC11C \uAE00\uC744 \uC791\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    style: {
      flex: '1'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "\uAC8C\uC2DC\uD558\uAE30")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    style: {
      flex: '1'
    },
    name: "upload",
    valuePropName: "fileList",
    getValueFromEvent: normFile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
    name: "logo",
    listType: "picture",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UploadOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 24
    }
  }), " \uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC "))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./components/postList.js":
/*!********************************!*\
  !*** ./components/postList.js ***!
  \********************************/
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
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\components\\postList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PostList = () => {
  const listData = [];

  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'https://ant.design',
      title: `ant design part ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design re'
    });
  }

  const IconText = ({
    icon,
    text
  }) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(icon), text);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    itemLayout: "vertical",
    dataSource: listData,
    renderItem: item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      style: {
        borderColor: 'red'
      },
      key: item.title,
      actions: [__jsx(IconText, {
        icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LikeOutlined"],
        text: "156",
        key: "list-vertical-like-o",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      }), __jsx(IconText, {
        icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"],
        text: "2",
        key: "list-vertical-message",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }
      })],
      extra: __jsx("img", {
        width: 150,
        alt: "logo",
        src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 15
        }
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        src: item.avatar,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 23
        }
      }),
      title: __jsx("a", {
        href: item.href,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 22
        }
      }, item.title),
      description: item.description,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }), item.content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ }),

/***/ "./pages/clubBoard.js":
/*!****************************!*\
  !*** ./pages/clubBoard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Applayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Applayout */ "./components/Applayout.js");
/* harmony import */ var _components_postForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/postForm */ "./components/postForm.js");
/* harmony import */ var _components_postList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/postList */ "./components/postList.js");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\TodoList\\front\\pages\\clubBoard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ClubBoard = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Applayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      marginLeft: '20px',
      marginTop: '10px',
      marginRight: '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], {
    className: "site-page-header",
    title: "\uB3D9\uC544\uB9AC\xB7\uD559\uD68C",
    subTitle: "\uB3D9\uC544\uB9AC\xB7\uD559\uD68C \uD64D\uBCF4\uD574\uC8FC\uC138\uC694",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }), __jsx(_components_postForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }), __jsx(_components_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 4,
    style: {
      backgroundColor: 'green'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ClubBoard);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, RESET_SIGN_UP_MESSAGE, RESET_LOG_IN_MESSAGE, loginRequestAction, joinRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_SIGN_UP_MESSAGE", function() { return RESET_SIGN_UP_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_LOG_IN_MESSAGE", function() { return RESET_LOG_IN_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinRequestAction", function() { return joinRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  info: {},
  signUpMessage: null,
  logInMessage: null,
  loadUserMessage: null
};
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const RESET_SIGN_UP_MESSAGE = 'RESET_SIGN_UP_MESSAGE';
const RESET_LOG_IN_MESSAGE = 'RESET_LOG_IN_MESSAGE';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const joinRequestAction = data => ({
  type: SIGN_UP_REQUEST,
  data
});

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpMessage = action.data;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpMessage = action.error;
      break;

    case LOG_IN_REQUEST:
      break;

    case LOG_IN_SUCCESS:
      draft.info = action.data;
      break;

    case LOG_IN_FAILURE:
      draft.logInMessage = action.error;
      break;

    case LOG_OUT_REQUEST:
      break;

    case LOG_OUT_SUCCESS:
      draft.info = {};
      break;

    case LOG_OUT_FAILURE:
      break;

    case LOAD_USER_REQUEST:
      break;

    case LOAD_USER_SUCCESS:
      draft.info = action.data;
      break;

    case LOAD_USER_FAILURE:
      draft.loadUserMessage = action.data;
      break;

    case RESET_SIGN_UP_MESSAGE:
      draft.signUpMessage = null;
      break;

    case RESET_LOG_IN_MESSAGE:
      draft.logInMessage = null;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/clubBoard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\TodoList\front\pages\clubBoard.js */"./pages/clubBoard.js");


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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHBsYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3RMaXN0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NsdWJCb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIlN1Yk1lbnUiLCJNZW51IiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJpbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsImtleSIsInB1c2giLCJyZXBsYWNlIiwiTE9HX09VVF9SRVFVRVNUIiwiaWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJUZXh0QXJlYSIsIklucHV0IiwiUG9zdEZvcm0iLCJmb3JtIiwiRm9ybSIsInVzZUZvcm0iLCJvbkZpbmlzaCIsInZhbHVlcyIsInJlc2V0RmllbGRzIiwib25GaW5pc2hGYWlsZWQiLCJlcnJvckluZm8iLCJub3JtRmlsZSIsIkFycmF5IiwiaXNBcnJheSIsImZpbGVMaXN0IiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiUG9zdExpc3QiLCJsaXN0RGF0YSIsImkiLCJocmVmIiwidGl0bGUiLCJhdmF0YXIiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJJY29uVGV4dCIsImljb24iLCJ0ZXh0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaXRlbSIsImJvcmRlckNvbG9yIiwiTGlrZU91dGxpbmVkIiwiTWVzc2FnZU91dGxpbmVkIiwiQ2x1YkJvYXJkIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiaW5pdGlhbFN0YXRlIiwic2lnblVwTWVzc2FnZSIsImxvZ0luTWVzc2FnZSIsImxvYWRVc2VyTWVzc2FnZSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJSRVNFVF9TSUdOX1VQX01FU1NBR0UiLCJSRVNFVF9MT0dfSU5fTUVTU0FHRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJqb2luUmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztR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QUE2Q2VpQixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2x1YkJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IE1lbnUsIENvbCwgUm93IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7XHJcbiAgQXBwc3RvcmVPdXRsaW5lZCxcclxuICBIb21lT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIENvbnRhaW5lck91dGxpbmVkLFxyXG4gIEJ1bGJPdXRsaW5lZCxcclxuICBMb2dvdXRPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IExPQURfVVNFUl9SRVFVRVNULCBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGluZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBTU1LsspjrpqztlbTslbztlahcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS5rZXkpO1xyXG4gICAgc3dpdGNoIChlLmtleSkge1xyXG4gICAgICBjYXNlICdob21lJzpcclxuICAgICAgICByb3V0ZXIucHVzaCgnL21haW4nKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndXNlcic6XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3Byb2JsZW0nOlxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvYmxlbScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjb25jZXB0JzpcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2NvbmNlcHQnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZnJlZWRvbSc6XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9mcmVlQm9hcmQnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaW5mb3JtYXRpb24nOlxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvaW5mb0JvYXJkJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NsdWInOlxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvY2x1YkJvYXJkJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2lucXVpcnknOlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsb2dvdXQnOlxyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aW5mby5pZCAhPT0gbnVsbFxyXG4gICAgICAgID8gKFxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBzcGFuPXs0fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAxNTI5JyB9fT5cclxuICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzEnXX1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WycnXX1cclxuICAgICAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgIGZvcmNlU3ViTWVudVJlbmRlcj1cInRydWVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTMwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMzkyOTU4ODEvODYyNDg5MTMtN2Y4ZGUwODAtYmJlOS0xMWVhLTgwMWEtNzNmNGY0MjZlZDBkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzE1MHB4JywgbWFyZ2luVG9wOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJob21lXCIgaWNvbj17PEhvbWVPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJ1c2VyXCIgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgIHtpbmZvICYmIGluZm8ubmlja25hbWV964uYXHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjFcIiBpY29uPXs8QnVsYk91dGxpbmVkIC8+fSB0aXRsZT1cIuqzteu2gO2VmOuDpVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cInByb2JsZW1cIj7rrLjsoJztkoDsnbQ8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJjb25jZXB0XCI+6rCc64WQ7J207ZW0PC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICAgICAgICA8U3ViTWVudSBrZXk9XCJzdWIyXCIgaWNvbj17PEFwcHN0b3JlT3V0bGluZWQgLz59IHRpdGxlPVwi6rKM7Iuc7YyQXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiZnJlZWRvbVwiPuyekOycoOqyjOyLnO2MkDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImluZm9ybWF0aW9uXCI+7KCV67O06rKM7Iuc7YyQPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiY2x1YlwiPuuPmeyVhOumrMK37ZWZ7ZqMPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImlucXVpcnlcIiBpY29uPXs8Q29udGFpbmVyT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICDrrLjsnZjtlZjquLBcclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJsb2dvdXRcIiBpY29uPXs8TG9nb3V0T3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgICDroZzqt7jslYTsm4NcclxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MjB9PlxyXG4gICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsIGhlaWdodDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIOuwsOuEiFxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApXHJcbiAgICAgICAgOiA8cD7qtoztlZzsnbQg7JeG7Iq164uI64ukLjwvcD59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgVXBsb2FkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIHZhbHVlcyk7XHJcbiAgICBmb3JtLnJlc2V0RmllbGRzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25GaW5pc2hGYWlsZWQgPSAoZXJyb3JJbmZvKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkOicsIGVycm9ySW5mbyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgbm9ybUZpbGUgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1VwbG9hZCBldmVudDonLCBlKTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gbmFtZT1cImJhc2ljXCIgZm9ybT17Zm9ybX0gb25GaW5pc2g9e29uRmluaXNofSBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9PlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInRpdGxlXCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn7KCc66qp7J2EIOyeheugpe2VtCDso7zshLjsmpQhJyB9XX0+XHJcbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLquIAg7KCc66qpXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjb250ZW50XCIgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn64K07Jqp7J2EIOyeheugpe2VtOyjvOyEuOyalCEnIH1dfT5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSBwbGFjZWhvbGRlcj1cIuyXrOq4sOulvCDriIzrn6zshJwg6riA7J2EIOyekeyEse2VoCDsiJgg7J6I7Iq164uI64ukXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycgfX0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIHN0eWxlPXt7IGZsZXg6ICcxJyB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAg6rKM7Iuc7ZWY6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIHN0eWxlPXt7IGZsZXg6ICcxJyB9fSBuYW1lPVwidXBsb2FkXCIgdmFsdWVQcm9wTmFtZT1cImZpbGVMaXN0XCIgZ2V0VmFsdWVGcm9tRXZlbnQ9e25vcm1GaWxlfT5cclxuICAgICAgICAgICAgPFVwbG9hZCBuYW1lPVwibG9nb1wiIGxpc3RUeXBlPVwicGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24+IDxVcGxvYWRPdXRsaW5lZCAvPiDsnbTrr7jsp4Ag7JeF66Gc65OcIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpc3QsIEF2YXRhciwgU3BhY2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgTWVzc2FnZU91dGxpbmVkLCBMaWtlT3V0bGluZWQsIFN0YXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcblxyXG5cclxuY29uc3QgUG9zdExpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGlzdERhdGEgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMzsgaSsrKSB7XHJcbiAgICBsaXN0RGF0YS5wdXNoKHtcclxuICAgICAgaHJlZjogJ2h0dHBzOi8vYW50LmRlc2lnbicsXHJcbiAgICAgIHRpdGxlOiBgYW50IGRlc2lnbiBwYXJ0ICR7aX1gLFxyXG4gICAgICBhdmF0YXI6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nJyxcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ0FudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uJyxcclxuICAgICAgY29udGVudDpcclxuICAgICAgICAnV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ24gcmUnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBJY29uVGV4dCA9ICh7IGljb24sIHRleHQgfSkgPT4gKFxyXG4gICAgPFNwYWNlPlxyXG4gICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChpY29uKX1cclxuICAgICAge3RleHR9XHJcbiAgICA8L1NwYWNlPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdFxyXG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgZGF0YVNvdXJjZT17bGlzdERhdGF9XHJcbiAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckNvbG9yOiAncmVkJyB9fVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17TGlrZU91dGxpbmVkfSB0ZXh0PVwiMTU2XCIga2V5PVwibGlzdC12ZXJ0aWNhbC1saWtlLW9cIiAvPixcclxuICAgICAgICAgICAgICA8SWNvblRleHQgaWNvbj17TWVzc2FnZU91dGxpbmVkfSB0ZXh0PVwiMlwiIGtleT1cImxpc3QtdmVydGljYWwtbWVzc2FnZVwiIC8+LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE1MH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL21xYVFzd2N5RExjWHlES25aZkVTLnBuZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtpdGVtLmF2YXRhcn0gLz59XHJcbiAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0udGl0bGV9PC9hPn1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2l0ZW0uY29udGVudH1cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBQYWdlSGVhZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBsYXlvdXQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RMaXN0JztcclxuXHJcbmNvbnN0IENsdWJCb2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEFwcExheW91dD5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBzcGFuPXsyMH0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzIwcHgnLCBtYXJnaW5Ub3A6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICA8UGFnZUhlYWRlciBjbGFzc05hbWU9XCJzaXRlLXBhZ2UtaGVhZGVyXCIgdGl0bGU9XCLrj5nslYTrpqzCt+2Vme2ajFwiIHN1YlRpdGxlPVwi64+Z7JWE66aswrftlZntmowg7ZmN67O07ZW07KO87IS47JqUXCIgLz5cclxuICAgICAgICAgICAgICA8UG9zdEZvcm0gLz5cclxuICAgICAgICAgICAgICA8UG9zdExpc3QgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17NH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nIH19IC8+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsdWJCb2FyZDtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpbmZvOiB7fSxcclxuICBzaWduVXBNZXNzYWdlOiBudWxsLFxyXG4gIGxvZ0luTWVzc2FnZTogbnVsbCxcclxuICBsb2FkVXNlck1lc3NhZ2U6IG51bGwsXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVNFVF9TSUdOX1VQX01FU1NBR0UgPSAnUkVTRVRfU0lHTl9VUF9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IFJFU0VUX0xPR19JTl9NRVNTQUdFID0gJ1JFU0VUX0xPR19JTl9NRVNTQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBqb2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFNJR05fVVBfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcE1lc3NhZ2UgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTWVzc2FnZSA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dJbk1lc3NhZ2UgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmluZm8gPSB7fTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlck1lc3NhZ2UgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFU0VUX1NJR05fVVBfTUVTU0FHRTpcclxuICAgICAgZHJhZnQuc2lnblVwTWVzc2FnZSA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVNFVF9MT0dfSU5fTUVTU0FHRTpcclxuICAgICAgZHJhZnQubG9nSW5NZXNzYWdlID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9