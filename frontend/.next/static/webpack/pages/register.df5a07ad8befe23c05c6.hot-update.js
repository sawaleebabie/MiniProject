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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Token:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 22
        }, this), " ", token.substring(0, 15), "...", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn1,
          onClick: function onClick() {
            navigator.clipboard.writeText(token);
          },
          children: "Copy token"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Status: "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        children: status
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 23
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.content,
        children: registerForm()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _styles_logInOut_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
          onClick: register,
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic3RhdHVzIiwic2V0U3RhdHVzIiwicHJvZmlsZVVzZXIiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJjb25maWciLCJVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJzIiwiZGF0YSIsInJlZ2lzdGVyIiwicmVxIiwicmVzIiwicG9zdCIsInJlc3VsdCIsIm1lc3NhZ2UiLCJyZWdpc3RlckZvcm0iLCJzdHlsZXMiLCJncmlkQ29udGFpbmVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29udGFpbmVyIiwic3Vic3RyaW5nIiwiYnRuMSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvbnRlbnQiLCJidG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsUUFBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxrQkFFUkMsc0RBQVEsQ0FBQyxFQUFELENBRkE7QUFBQSxNQUVqQ0MsUUFGaUM7QUFBQSxNQUV2QkMsV0FGdUI7O0FBQUEsbUJBR2RGLHNEQUFRLENBQUMsRUFBRCxDQUhNO0FBQUEsTUFHakNHLEtBSGlDO0FBQUEsTUFHMUJDLFFBSDBCOztBQUFBLG1CQUlSSixzREFBUSxDQUFDLEVBQUQsQ0FKQTtBQUFBLE1BSWpDSyxRQUppQztBQUFBLE1BSXZCQyxXQUp1Qjs7QUFBQSxtQkFLWk4sc0RBQVEsQ0FBQyxFQUFELENBTEk7QUFBQSxNQUtqQ08sTUFMaUM7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REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEosZUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZBLG9CQVVnQjtBQUFBLGtCQUFJUTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWaEIsZUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEosZUFXVTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWFYsZUFZSTtBQUFLLGlCQUFTLEVBQUVvQixrRUFBTSxDQUFDVyxPQUF2QjtBQUFBLGtCQUNLWixZQUFZO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSixlQWdCSTtBQUFBLCtCQUNJO0FBQVEsbUJBQVMsRUFBRUMsa0VBQU0sQ0FBQ1ksR0FBMUI7QUFDQSxpQkFBTyxFQUFFbkIsUUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQ0g7O0dBdEd1QnRCLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuZGY1YTA3YWQ4YmVmZTIzYzA1YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2xvZ0luT3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZScgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKHsgdG9rZW4gfSkge1xuXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgcHJvZmlsZVVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbjogJywgdG9rZW4pXG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2NvbmZpZy5VUkx9L3Byb2ZpbGVgLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXI6ICcsIHVzZXJzLmRhdGEpXG4gICAgfVxuXG4gICAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAke2NvbmZpZy5VUkx9L3JlZ2lzdGVyYCxcbiAgICAgICAgICAgICAgICB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcsIHJlc3VsdClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQuZGF0YTogICcsIHJlc3VsdC5kYXRhKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuOiAgJywgdG9rZW4pXG4gICAgICAgICAgICBzZXRTdGF0dXMocmVzdWx0LmRhdGEubWVzc2FnZSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gKCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Yj5Vc2VybmFtZTo8L2I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGI+RW1haWw6PC9iPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGI+UGFzc3dvcmQ6PC9iPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+UmVnaXN0ZXIgUGFnZTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvcGFnZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezkwMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNTAwcHgpIDEwMHB4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj48Yj5Ub2tlbjo8L2I+IHt0b2tlbi5zdWJzdHJpbmcoMCwgMTUpfS4uLlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuMX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0b2tlbikgfX0+XG4gICAgICAgICAgICAgICAgICAgIENvcHkgdG9rZW5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiPlN0YXR1czogPC9iPiA8aT57c3RhdHVzfTwvaT5cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICB7cmVnaXN0ZXJGb3JtKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVnaXN0ZXJ9PlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xuICAgIHJldHVybiB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB8fCBcIlwiIH0gfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=