webpackHotUpdate_N_E("pages/customer",{

/***/ "./pages/customer.js":
/*!***************************!*\
  !*** ./pages/customer.js ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/withAuth */ "./components/withAuth.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/admin.module.css */ "./styles/admin.module.css");
/* harmony import */ var _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\Users\\sawalee\\Desktop\\MiniProject\\frontend\\pages\\customer.js",
    _this = undefined,
    _s = $RefreshSig$();






var URL = "http://localhost:8080/api/laundry";

var admin = function admin(_ref) {
  _s();

  var token = _ref.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      customers = _useState2[0],
      setCustomers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      CustomerID = _useState3[0],
      setCustomerID = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      surname = _useState5[0],
      setSurname = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      status = _useState6[0],
      serStatus = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      price = _useState7[0],
      setPrice = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      customer = _useState8[0],
      setCustomer = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getCustomers();
    profileUser();
  }, []);

  var profileUser = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var users;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(config.URL, "/profile"), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 3:
              users = _context.sent;
              setUser(users.data);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function profileUser() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getCustomer = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(URL, "/").concat(id));

            case 2:
              result = _context2.sent;
              console.log('customers ID: ', result.data);
              setCustomer(result.data);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getCustomer(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getCustomers = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(URL);

            case 2:
              result = _context3.sent;
              setCustomers(result.data.list);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getCustomers() {
      return _ref4.apply(this, arguments);
    };
  }();

  var addCustomer = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(URL, {
                CustomerID: CustomerID,
                name: name,
                surname: surname,
                status: status,
                price: price
              });

            case 2:
              result = _context4.sent;
              console.log(result);
              getCustomers();

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function addCustomer() {
      return _ref5.apply(this, arguments);
    };
  }();

  var showCustomers = function showCustomers() {
    if (customers && customers.length) {
      return customers.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.listItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "CustomerID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 18
            }, _this), " ", item.CustomerID]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 18
            }, _this), " ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Surname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 18
            }, _this), " ", item.surname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 18
            }, _this), " ", item.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "price:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 18
            }, _this), " ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 14
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
        children: "customer Data Edit "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.form_add,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Add customers"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), "CustomerID:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "CustomerID",
        onChange: function onChange(e) {
          return setCustomerID(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        onChange: function onChange(e) {
          return setName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), "Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "surname",
        onChange: function onChange(e) {
          return setSurname(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), "status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "status",
        onChange: function onChange(e) {
          return serStatus(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this), "price:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "number",
        name: "price",
        onChange: function onChange(e) {
          return setPrice(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_add,
        onClick: function onClick() {
          return addCustomer(CustomerID, name, surname, status, price);
        },
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
      children: showCustomers()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "(selected customer):"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 36
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "CustomerID:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 15
      }, _this), customer.CustomerID, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }, _this), customer.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Surname:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 15
      }, _this), customer.surname, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 15
      }, _this), customer.status, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "price:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 15
      }, _this), customer.price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, _this);
};

_s(admin, "Kc3OUGTyDK9NknBgxC/vlgacxRA=");

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(admin));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXIuanMiXSwibmFtZXMiOlsiVVJMIiwiYWRtaW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJDdXN0b21lcklEIiwic2V0Q3VzdG9tZXJJRCIsIm5hbWUiLCJzZXROYW1lIiwic3VybmFtZSIsInNldFN1cm5hbWUiLCJzdGF0dXMiLCJzZXJTdGF0dXMiLCJwcmljZSIsInNldFByaWNlIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInVzZUVmZmVjdCIsImdldEN1c3RvbWVycyIsInByb2ZpbGVVc2VyIiwiYXhpb3MiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXN0b21lciIsImlkIiwicmVzdWx0IiwibGlzdCIsImFkZEN1c3RvbWVyIiwicG9zdCIsInNob3dDdXN0b21lcnMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImNvbnRhaW5lciIsImZvcm1fYWRkIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uX2FkZCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHLG1DQUFaOztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDcEJDLElBRG9CO0FBQUEsTUFDZEMsT0FEYzs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVwQkcsU0FGb0I7QUFBQSxNQUVUQyxZQUZTOztB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UixFQUtzQkksUUFBUSxDQUFDRixLQUwvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxREQsQ0F2SEQ7O0dBQU1mLEs7OztBQXdIU2tELG1JQUFRLENBQUNsRCxLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbWVyLmU4MTRiNjk4NjI1OWNlZWVjYzdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy93aXRoQXV0aFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYWRtaW4ubW9kdWxlLmNzc1wiO1xyXG5jb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbGF1bmRyeVwiO1xyXG5cclxuY29uc3QgYWRtaW4gPSAoeyB0b2tlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW0N1c3RvbWVySUQsIHNldEN1c3RvbWVySURdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1cm5hbWUsIHNldFN1cm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXR1cywgc2VyU3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDdXN0b21lcnMoKTtcclxuICAgIHByb2ZpbGVVc2VyKCk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIGNvbnN0IHByb2ZpbGVVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHsgICAgXHJcbiAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2NvbmZpZy5VUkx9L3Byb2ZpbGVgLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9LFxyXG4gICAgICB9KTsgIFxyXG4gICAgICBzZXRVc2VyKHVzZXJzLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDdXN0b21lciA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke1VSTH0vJHtpZH1gKVxyXG4gICAgY29uc29sZS5sb2coJ2N1c3RvbWVycyBJRDogJywgcmVzdWx0LmRhdGEpXHJcbiAgICBzZXRDdXN0b21lcihyZXN1bHQuZGF0YSlcclxufVxyXG4gXHJcbiAgY29uc3QgZ2V0Q3VzdG9tZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpO1xyXG4gICAgc2V0Q3VzdG9tZXJzKHJlc3VsdC5kYXRhLmxpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7XHJcbiAgICAgIEN1c3RvbWVySUQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHN1cm5hbWUsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcHJpY2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBnZXRDdXN0b21lcnMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93Q3VzdG9tZXJzID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1c3RvbWVycyAmJiBjdXN0b21lcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBjdXN0b21lcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdj48Yj5DdXN0b21lcklEOjwvYj4ge2l0ZW0uQ3VzdG9tZXJJRH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Yj5OYW1lOjwvYj4ge2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Yj5TdXJuYW1lOjwvYj4ge2l0ZW0uc3VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Yj5zdGF0dXM6PC9iPiB7aXRlbS5zdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+cHJpY2U6PC9iPiB7aXRlbS5wcmljZX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8aDE+PGlucz5jdXN0b21lciBEYXRhIEVkaXQgPC9pbnM+PC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2FkZH0+XHJcbiAgICAgICAgPGgyPkFkZCBjdXN0b21lcnM8L2gyPlxyXG4gICAgICAgIEN1c3RvbWVySUQ6XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiQ3VzdG9tZXJJRFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1c3RvbWVySUQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIE5hbWU6XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIFN1cm5hbWU6XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwic3VybmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN1cm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIHN0YXR1czpcclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXJTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIHByaWNlOlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fYWRkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkQ3VzdG9tZXIoQ3VzdG9tZXJJRCwgbmFtZSwgc3VybmFtZSwgc3RhdHVzLCBwcmljZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57c2hvd0N1c3RvbWVycygpfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PjxiPihzZWxlY3RlZCBjdXN0b21lcik6PC9iPiBcclxuICAgICAgICAgICAgICA8Yj5DdXN0b21lcklEOjwvYj57Y3VzdG9tZXIuQ3VzdG9tZXJJRH0gXHJcbiAgICAgICAgICAgICAgPGI+TmFtZTo8L2I+e2N1c3RvbWVyLm5hbWV9IFxyXG4gICAgICAgICAgICAgIDxiPlN1cm5hbWU6PC9iPntjdXN0b21lci5zdXJuYW1lfSAgXHJcbiAgICAgICAgICAgICAgPGI+c3RhdHVzOjwvYj57Y3VzdG9tZXIuc3RhdHVzfSAgXHJcbiAgICAgICAgICAgICAgPGI+cHJpY2U6PC9iPntjdXN0b21lci5wcmljZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChhZG1pbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB8fCBcIlwiIH0gfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9