webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/logInOut.module.css */ "./styles/logInOut.module.css");
/* harmony import */ var _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\sawalee\\Desktop\\MiniProject\\frontend\\pages\\register.js",
    _s = $RefreshSig$();









var __N_SSP = true;
function Register(_ref) {
  _s();

  var _this = this;

  var token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      status = _useState4[0],
      setStatus = _useState4[1];

  var profileUser = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var users;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('token: ', token);
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("".concat(_config_config__WEBPACK_IMPORTED_MODULE_8___default.a.URL, "/profile"), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 3:
              users = _context.sent;
              console.log('user: ', users.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function profileUser() {
      return _ref2.apply(this, arguments);
    };
  }();

  var register = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(req, res) {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("".concat(_config_config__WEBPACK_IMPORTED_MODULE_8___default.a.URL, "/register"), {
                username: username,
                email: email,
                password: password
              });

            case 3:
              result = _context2.sent;
              console.log('result: ', result);
              console.log('result.data:  ', result.data);
              console.log('token:  ', token);
              setStatus(result.data.message);
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function register(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var registerForm = function registerForm() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.gridContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Username:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
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
          lineNumber: 46,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Email:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Password:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
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
          lineNumber: 65,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Register Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_10___default.a, {
        src: "/page.png",
        alt: "Picture",
        width: 900,
        height: 200,
        sizes: "(max-width: 500px) 100px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.Login,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            children: "Token:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 26
          }, this), " ", token.substring(0, 15), "...", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn1,
            onClick: function onClick() {
              navigator.clipboard.writeText(token);
            },
            children: "Copy token"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Status: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 37
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 27
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
          children: registerForm()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
            onClick: register,
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }, this);
}

_s(Register, "S9xUVCRXbwhtaOkriTpAWgmQFyQ=");

_c = Register;

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic3RhdHVzIiwic2V0U3RhdHVzIiwicHJvZmlsZVVzZXIiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJjb25maWciLCJVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJzIiwiZGF0YSIsInJlZ2lzdGVyIiwicmVxIiwicmVzIiwicG9zdCIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZWdpc3RlckZvcm0iLCJzdHlsZXMiLCJncmlkQ29udGFpbmVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udGFpbmVyIiwiTG9naW4iLCJzdWJzdHJpbmciLCJidG4xIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY29udGVudCIsImJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxRQUFULE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUVSQyxzREFBUSxDQUFDLEVBQUQsQ0FGQTtBQUFBLE1BRWpDQyxRQUZpQztBQUFBLE1BRXZCQyxXQUZ1Qjs7QUFBQSxtQkFHZEYsc0RBQVEsQ0FBQyxFQUFELENBSE07QUFBQSxNQUdqQ0csS0FIaUM7QUFBQSxNQUcxQkMsUUFIMEI7O0FBQUEsbUJBSVJKLHNEQUFRLENBQUMsRUFBRCxDQUpBO0FBQUEsTUFJakNLLFFBSmlDO0FBQUEsTUFJdkJDLFdBSnVCOztBQUFBLG1CQUtaTixzREFBUSxDQUFDLEVBQUQsQ0FMSTtBQUFBLE1BS2pD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QnZDLEtBQTlCO0FBQXNDLGFBRDNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSixvQkFTb0I7QUFBQSxvQkFBSVE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRwQixlQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUFVVTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZWLGVBV0k7QUFBSyxtQkFBUyxFQUFFb0Isa0VBQU0sQ0FBQ1ksT0FBdkI7QUFBQSxvQkFDS2IsWUFBWTtBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKLGVBZUE7QUFBQSxpQ0FDSTtBQUFRLHFCQUFTLEVBQUVDLGtFQUFNLENBQUNhLEdBQTFCO0FBQ0EsbUJBQU8sRUFBRXBCLFFBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0NIOztHQXpHdUJ0QixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjBjZThkODZiMjBkN2YyNTc5NzdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sb2dJbk91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3Rlcih7IHRva2VuIH0pIHtcblxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IHByb2ZpbGVVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndG9rZW46ICcsIHRva2VuKVxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGF4aW9zLmdldChgJHtjb25maWcuVVJMfS9wcm9maWxlYCwge1xuICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyOiAnLCB1c2Vycy5kYXRhKVxuICAgIH1cblxuICAgIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgJHtjb25maWcuVVJMfS9yZWdpc3RlcmAsXG4gICAgICAgICAgICAgICAgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0OiAnLCByZXN1bHQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0LmRhdGE6ICAnLCByZXN1bHQuZGF0YSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbjogICcsIHRva2VuKVxuICAgICAgICAgICAgc2V0U3RhdHVzKHJlc3VsdC5kYXRhLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGI+VXNlcm5hbWU6PC9iPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxiPkVtYWlsOjwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxiPlBhc3N3b3JkOjwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlJlZ2lzdGVyIFBhZ2U8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3BhZ2UucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs5MDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDUwMHB4KSAxMDBweFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxvZ2lufT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48Yj5Ub2tlbjo8L2I+IHt0b2tlbi5zdWJzdHJpbmcoMCwgMTUpfS4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG4xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodG9rZW4pIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3B5IHRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8Yj5TdGF0dXM6IDwvYj4gPGk+e3N0YXR1c308L2k+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3JlZ2lzdGVyRm9ybSgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRufVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZWdpc3Rlcn0+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==