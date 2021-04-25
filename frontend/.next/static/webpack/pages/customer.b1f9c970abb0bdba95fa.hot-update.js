webpackHotUpdate_N_E("pages/customer",{

/***/ "./components/withAuth.js":
/*!********************************!*\
  !*** ./components/withAuth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\sawalee\\Desktop\\MiniProject\\frontend\\components\\withAuth.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var withAuth = function withAuth(WrappedComponent) {
  var _s = $RefreshSig$();

  var Wrapper = function Wrapper(props) {
    _s();

    var token = props.token;
    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
      if (!token) router.push('/login');
    }, [token]);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(WrappedComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, _this);
  };

  _s(Wrapper, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
  });

  return Wrapper;
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

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

/***/ }),

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
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/withAuth */ "./components/withAuth.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/admin.module.css */ "./styles/admin.module.css");
/* harmony import */ var _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\sawalee\\Desktop\\MiniProject\\frontend\\pages\\customer.js",
    _this = undefined,
    _s = $RefreshSig$();






var URL = "http://localhost:8080/api/laundry";

var customerPage = function customerPage(_ref) {
  _s();

  Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      customers = _useState2[0],
      setCustomers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      CustomerID = _useState3[0],
      setCustomerID = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      surname = _useState5[0],
      setSurname = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("Waiting"),
      status = _useState6[0],
      setStatus = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      price = _useState7[0],
      setPrice = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      customer = _useState8[0],
      setCustomer = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    getCustomers();
  }, []);

  var getCustomers = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(URL);

            case 2:
              result = _context.sent;
              setCustomers(result.data.list);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getCustomers() {
      return _ref2.apply(this, arguments);
    };
  }();

  var addCustomer = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(URL, {
                CustomerID: CustomerID,
                name: name,
                surname: surname,
                status: status,
                price: price
              });

            case 2:
              result = _context2.sent;
              console.log(result);
              getCustomers();

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function addCustomer() {
      return _ref3.apply(this, arguments);
    };
  }();

  var showCustomers = function showCustomers() {
    if (customers && customers.length) {
      return customers.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "CustomerID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 18
            }, _this), " ", item.CustomerID]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 18
            }, _this), " ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Surname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 18
            }, _this), " ", item.surname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 18
            }, _this), " ", item.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "price:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 18
            }, _this), " ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 14
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
        children: "customer Data Edit "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.form_add,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Add customers"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), "CustomerID:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "CustomerID",
        onChange: function onChange(e) {
          return setCustomerID(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        onChange: function onChange(e) {
          return setName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), "Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "surname",
        onChange: function onChange(e) {
          return setSurname(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), "status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,
        type: "text",
        name: "status",
        disabled: "disabled",
        value: "Waiting",
        onChange: function onChange(e) {
          return setStatus(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), "price:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "number",
        name: "price",
        onChange: function onChange(e) {
          return setPrice(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.button_add,
        onClick: function onClick() {
          return addCustomer(CustomerID, name, surname, status, price);
        },
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.list,
      children: showCustomers()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "(selected customer):"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 36
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "CustomerID:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }, _this), customer.CustomerID, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }, _this), customer.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Surname:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }, _this), customer.surname, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }, _this), customer.status, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "price:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }, _this), customer.price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(customerPage, "WsrtpZXyf2JJ1jHLOsrf4aSJcxw=");

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_withAuth__WEBPACK_IMPORTED_MODULE_6__["default"])(customerPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93aXRoQXV0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXIuanMiXSwibmFtZXMiOlsid2l0aEF1dGgiLCJXcmFwcGVkQ29tcG9uZW50IiwiV3JhcHBlciIsInByb3BzIiwidG9rZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJwdXNoIiwiVVJMIiwiY3VzdG9tZXJQYWdlIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsImN1c3RvbWVycyIsInNldEN1c3RvbWVycyIsIkN1c3RvbWVySUQiLCJzZXRDdXN0b21lcklEIiwibmFtZSIsInNldE5hbWUiLCJzdXJuYW1lIiwic2V0U3VybmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInByaWNlIiwic2V0UHJpY2UiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwiZ2V0Q3VzdG9tZXJzIiwiYXhpb3MiLCJnZXQiLCJyZXN1bHQiLCJkYXRhIiwibGlzdCIsImFkZEN1c3RvbWVyIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJzaG93Q3VzdG9tZXJzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3R5bGVzIiwibGlzdEl0ZW0iLCJjb250YWluZXIiLCJmb3JtX2FkZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHQiLCJidXR0b25fYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxnQkFBZ0IsRUFBSTtBQUFBOztBQUNqQyxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxRQUNiQyxLQURhLEdBQ0hELEtBREcsQ0FDYkMsS0FEYTtBQUVyQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLDJEQUFTLENBQUMsWUFBTTtBQUNa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QUE7QUFBQTtBQUFBLFdBREY7QUF1REQsQ0F2R0Q7O0dBQU1kLFk7OztBQXdHU1YsbUlBQVEsQ0FBQ1UsWUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b21lci5iMWY5Yzk3MGFiYjBiZGJhOTVmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3Qgd2l0aEF1dGggPSBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgICBjb25zdCBXcmFwcGVyID0gcHJvcHMgPT4ge1xuICAgICAgICBjb25zdCB7IHRva2VuIH0gPSBwcm9wc1xuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0b2tlbilcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICAgICAgfSwgW3Rva2VuXSlcbiAgICAgICAgcmV0dXJuICg8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+KVxuICAgIH1cbiAgICByZXR1cm4gV3JhcHBlclxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aFxuXG5cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hZG1pbi5tb2R1bGUuY3NzXCI7XHJcbmNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sYXVuZHJ5XCI7XHJcblxyXG5jb25zdCBjdXN0b21lclBhZ2UgPSAoe30pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbQ3VzdG9tZXJJRCwgc2V0Q3VzdG9tZXJJRF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3VybmFtZSwgc2V0U3VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJXYWl0aW5nXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDdXN0b21lcnMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldEN1c3RvbWVycyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoVVJMKTtcclxuICAgIHNldEN1c3RvbWVycyhyZXN1bHQuZGF0YS5saXN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRDdXN0b21lciA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCwge1xyXG4gICAgICBDdXN0b21lcklELFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBzdXJuYW1lLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgZ2V0Q3VzdG9tZXJzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0N1c3RvbWVycyA9ICgpID0+IHtcclxuICAgIGlmIChjdXN0b21lcnMgJiYgY3VzdG9tZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gY3VzdG9tZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+Q3VzdG9tZXJJRDo8L2I+IHtpdGVtLkN1c3RvbWVySUR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+TmFtZTo8L2I+IHtpdGVtLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+U3VybmFtZTo8L2I+IHtpdGVtLnN1cm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+c3RhdHVzOjwvYj4ge2l0ZW0uc3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxiPnByaWNlOjwvYj4ge2l0ZW0ucHJpY2V9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGgxPjxpbnM+Y3VzdG9tZXIgRGF0YSBFZGl0IDwvaW5zPjwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGR9PlxyXG4gICAgICAgIDxoMj5BZGQgY3VzdG9tZXJzPC9oMj5cclxuICAgICAgICBDdXN0b21lcklEOlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIkN1c3RvbWVySURcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXN0b21lcklEKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICBOYW1lOlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICBTdXJuYW1lOlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInN1cm5hbWVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICBzdGF0dXM6XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgdmFsdWUgPVwiV2FpdGluZ1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgcHJpY2U6XHJcbiAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fYWRkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkQ3VzdG9tZXIoQ3VzdG9tZXJJRCwgbmFtZSwgc3VybmFtZSwgc3RhdHVzLCBwcmljZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57c2hvd0N1c3RvbWVycygpfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PjxiPihzZWxlY3RlZCBjdXN0b21lcik6PC9iPiBcclxuICAgICAgICAgICAgICA8Yj5DdXN0b21lcklEOjwvYj57Y3VzdG9tZXIuQ3VzdG9tZXJJRH0gXHJcbiAgICAgICAgICAgICAgPGI+TmFtZTo8L2I+e2N1c3RvbWVyLm5hbWV9IFxyXG4gICAgICAgICAgICAgIDxiPlN1cm5hbWU6PC9iPntjdXN0b21lci5zdXJuYW1lfSAgXHJcbiAgICAgICAgICAgICAgPGI+c3RhdHVzOjwvYj57Y3VzdG9tZXIuc3RhdHVzfSAgXHJcbiAgICAgICAgICAgICAgPGI+cHJpY2U6PC9iPntjdXN0b21lci5wcmljZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChjdXN0b21lclBhZ2UpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==