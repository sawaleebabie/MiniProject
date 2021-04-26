webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "C:\\Users\\sawalee\\Desktop\\MiniProject\\frontend\\pages\\login.js",
    _s = $RefreshSig$();










var __N_SSP = true;
function Login(_ref) {
  _s();

  var _this = this;

  var token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      status = _useState3[0],
      setStatus = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      remember = _useState4[0],
      setRemember = _useState4[1];

  var login = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(req, res) {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("".concat(_config_config__WEBPACK_IMPORTED_MODULE_10___default.a.URL, "/login"), {
                username: username,
                password: password,
                remember: remember
              }, {
                withCredentials: true
              });

            case 3:
              result = _context.sent;
              console.log("result: ", result);
              console.log("result.data:  ", result.data);
              console.log("token:  ", token);
              setStatus(result.status + ": " + result.data.user.username);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log("error: ", JSON.stringify(_context.t0.response));
              setStatus(JSON.stringify(_context.t0.response).substring(0, 80) + "...");

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function login(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var reMem = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setRemember(!remember);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function reMem() {
      return _ref3.apply(this, arguments);
    };
  }();

  var loginForm = function loginForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.gridContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Username:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 12
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          name: "username",
          placeholder: "username",
          onChange: function onChange(e) {
            return setUsername(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Password:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 12
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex items-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          id: "remember_me",
          name: "remember_me",
          type: "checkbox",
          onClick: reMem
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Remember Me"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 48
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 43
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 36
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, _this);
  };

  var copyText = function copyText() {
    navigator.clipboard.writeText(token);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Login Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_11___default.a, {
        src: "/page.png",
        alt: "Picture",
        width: 900,
        height: 200,
        sizes: "(max-width: 500px) 100px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Token:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), " ", token.substring(0, 15), "...", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.btn1,
          onClick: copyText,
          children: " Copy token "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: ["Status: ", status]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), loginForm(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/register",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "REGISTER"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 36
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.btn2,
          onClick: login,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

_s(Login, "6Gnhz/5EHapWFFSwOy7DjRfj3j8=");

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJyZW1lbWJlciIsInNldFJlbWVtYmVyIiwibG9naW4iLCJyZXEiLCJyZXMiLCJheGlvcyIsInBvc3QiLCJjb25maWciLCJVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInVzZXIiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJzdWJzdHJpbmciLCJyZU1lbSIsImxvZ2luRm9ybSIsInN0eWxlcyIsImdyaWRDb250YWluZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0IiwiY29weVRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb250YWluZXIiLCJidG4xIiwiYnRuMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsS0FBVCxPQUEwQjtBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxFQUFELENBREQ7QUFBQSxNQUNoQ0MsUUFEZ0M7QUFBQSxNQUN0QkMsV0FEc0I7O0FBQUEsbUJBRVBGLHNEQUFRLENBQUMsRUFBRCxDQUZEO0FBQUEsTUFFaENHLFFBRmdDO0FBQUEsTUFFdEJDLFdBRnNCOztBQUFBLG1CQUdYSixzREFBUSxDQUFDLEVBQUQsQ0FIRztBQUFBLE1BR2hDSyxNQUhnQztBQUFBLE1BR3hCQyxTQUh3Qjs7QUFBQSxtQkFJUE4sc0RBQVEsQ0FBQyxLQUFELENBSkQ7QUFBQSxNQUlo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QWdCLENBQWhCLEVBQW1CLEVBQW5CLENBRGpCLHNCQUVFO0FBQVEsbUJBQVMsRUFBRUcsOERBQU0sQ0FBQ1csSUFBMUI7QUFBZ0MsaUJBQU8sRUFBRUwsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRTtBQUFBLCtCQUFjN0IsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixFQVVHc0IsU0FBUyxFQVZaLGVBV0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBLCtCQUF1QjtBQUFBLHVDQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFZRTtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBRUMsOERBQU0sQ0FBQ1ksSUFBMUI7QUFBZ0MsaUJBQU8sRUFBRS9CLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztHQTVGdUJYLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYTJkN2M3MTQ4YTliMzI2YTFhY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJyBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oeyB0b2tlbiB9KSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlbWVtYmVyLCBzZXRSZW1lbWJlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAke2NvbmZpZy5VUkx9L2xvZ2luYCx7IHVzZXJuYW1lLCBwYXNzd29yZCwgcmVtZW1iZXIgfSx7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0OiBcIiwgcmVzdWx0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0LmRhdGE6ICBcIiwgcmVzdWx0LmRhdGEpO1xuICAgICAgY29uc29sZS5sb2coXCJ0b2tlbjogIFwiLCB0b2tlbik7XG4gICAgICBzZXRTdGF0dXMocmVzdWx0LnN0YXR1cyArIFwiOiBcIiArIHJlc3VsdC5kYXRhLnVzZXIudXNlcm5hbWUpO1xuICAgIH0gXG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCBKU09OLnN0cmluZ2lmeShlLnJlc3BvbnNlKSk7XG4gICAgICBzZXRTdGF0dXMoSlNPTi5zdHJpbmdpZnkoZS5yZXNwb25zZSkuc3Vic3RyaW5nKDAsIDgwKSArIFwiLi4uXCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVNZW0gPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0UmVtZW1iZXIoIXJlbWVtYmVyKTtcbiAgfTtcblxuICBjb25zdCBsb2dpbkZvcm0gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkQ29udGFpbmVyfT5cbiAgICAgIDxkaXY+PGI+VXNlcm5hbWU6PC9iPjwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+PGI+UGFzc3dvcmQ6PC9iPjwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicmVtZW1iZXJfbWVcIlxuICAgICAgICAgIG5hbWU9XCJyZW1lbWJlcl9tZVwiXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBvbkNsaWNrPXtyZU1lbX1cbiAgICAgICAgLz5cbiAgICAgICBcbiAgICAgIDwvZGl2PiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+PGxhYmVsPjxpbnM+PGI+UmVtZW1iZXIgTWU8L2I+PC9pbnM+PC9sYWJlbD48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBjb25zdCBjb3B5VGV4dCA9ICgpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0b2tlbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Mb2dpbiBQYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvcGFnZS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiUGljdHVyZVwiXG4gICAgICAgICAgICB3aWR0aD17OTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDUwMHB4KSAxMDBweFwiXG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGI+VG9rZW46PC9iPiB7dG9rZW4uc3Vic3RyaW5nKDAsIDE1KX0uLi5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bjF9IG9uQ2xpY2s9e2NvcHlUZXh0fT4gQ29weSB0b2tlbiA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2PlN0YXR1czoge3N0YXR1c308L2Rpdj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtsb2dpbkZvcm0oKX1cbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPjxhPiA8Yj5SRUdJU1RFUjwvYj4gPC9hPjwvTGluaz4gXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG4yfSBvbkNsaWNrPXtsb2dpbn0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7IFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xuICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9