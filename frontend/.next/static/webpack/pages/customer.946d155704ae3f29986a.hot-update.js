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
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Waiting"),
      status = _useState6[0],
      setStatus = _useState6[1];

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

  var _useSWR = useSWR(URL, fetcher, {
    revalidateOnFocus: false
  }),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: "failed to load"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 21
  }, _this);
  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 21
  }, _this);
  console.log("data", data);

  var getCustomers = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(URL);

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
    var _ref3 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(URL, {
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.listItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
              children: "CustomerID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 18
            }, _this), " ", item.CustomerID]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 18
            }, _this), " ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
              children: "Surname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 18
            }, _this), " ", item.surname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
              children: "status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 18
            }, _this), " ", item.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
              children: "price:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 18
            }, _this), " ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 14
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ins", {
        children: "customer Data Edit "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.form_add,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Add customers"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), "CustomerID:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        name: "CustomerID",
        onChange: function onChange(e) {
          return setCustomerID(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        onChange: function onChange(e) {
          return setName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), "Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "text",
        name: "surname",
        onChange: function onChange(e) {
          return setSurname(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), "status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.text,
        type: "text",
        name: "status",
        disabled: "disabled",
        value: "Waiting",
        onChange: function onChange(e) {
          return setStatus(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), "price:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "number",
        name: "price",
        onChange: function onChange(e) {
          return setPrice(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_add,
        onClick: function onClick() {
          return addCustomer(CustomerID, name, surname, status, price);
        },
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
      children: showCustomers()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: "(selected customer):"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 36
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: "CustomerID:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }, _this), customer.CustomerID, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: "Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }, _this), customer.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: "Surname:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 15
      }, _this), customer.surname, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: "status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }, _this), customer.status, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
        children: "price:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 15
      }, _this), customer.price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
};

_s(admin, "PFk19SIRspBp/kBvkHTr66uDrKY=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXIuanMiXSwibmFtZXMiOlsiVVJMIiwiYWRtaW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJDdXN0b21lcklEIiwic2V0Q3VzdG9tZXJJRCIsIm5hbWUiLCJzZXROYW1lIiwic3VybmFtZSIsInNldFN1cm5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJwcmljZSIsInNldFByaWNlIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInVzZUVmZmVjdCIsImdldEN1c3RvbWVycyIsInByb2ZpbGVVc2VyIiwidXNlU1dSIiwiZmV0Y2hlciIsInJldmFsaWRhdGVPbkZvY3VzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwicmVzdWx0IiwibGlzdCIsImFkZEN1c3RvbWVyIiwicG9zdCIsInNob3dDdXN0b21lcnMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImNvbnRhaW5lciIsImZvcm1fYWRkIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dCIsImJ1dHRvbl9hZGQiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEdBQUcsR0FBRyxtQ0FBWjs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3BCQyxJQURvQjtBQUFBLE1BQ2RDLE9BRGM7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFcEJHLFNBRm9CO0FBQUEsTUFFVEMsWUFGUzs7QUFBQSxtQkFH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RSxNQUE1QixFQUFvQ0UsS0FBcEMsQ0FBakI7QUFBQSxTQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBNENFO0FBQUssZUFBUyxFQUFFeUIsK0RBQU0sQ0FBQ1IsSUFBdkI7QUFBQSxnQkFBOEJHLGFBQWE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVDRixlQTZDRTtBQUFLLGVBQVMsRUFBRUssK0RBQU0sQ0FBQ1IsSUFBdkI7QUFBQSw4QkFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBN0IsZUFDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSLEVBQzJCZixRQUFRLENBQUNWLFVBRHBDLGVBRVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUixFQUVxQlUsUUFBUSxDQUFDUixJQUY5QixlQUdRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSFIsRUFHd0JRLFFBQVEsQ0FBQ04sT0FIakMsZUFJUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpSLEVBSXVCTSxRQUFRLENBQUNKLE1BSmhDLGVBS1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMUixFQUtzQkksUUFBUSxDQUFDRixLQUwvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1REQsQ0E3R0Q7O0dBQU1mLEs7OztBQThHU2lELG1JQUFRLENBQUNqRCxLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbWVyLjk0NmQxNTU3MDRhZTNmMjk5ODZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy93aXRoQXV0aFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYWRtaW4ubW9kdWxlLmNzc1wiO1xyXG5jb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbGF1bmRyeVwiO1xyXG5cclxuY29uc3QgYWRtaW4gPSAoeyB0b2tlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW0N1c3RvbWVySUQsIHNldEN1c3RvbWVySURdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1cm5hbWUsIHNldFN1cm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiV2FpdGluZ1wiKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Q3VzdG9tZXJzKCk7XHJcbiAgICBwcm9maWxlVXNlcigpO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoVVJMLCBmZXRjaGVyLCB7IHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSB9KTtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+O1xyXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgXHJcbiAgY29uc3QgZ2V0Q3VzdG9tZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpO1xyXG4gICAgc2V0Q3VzdG9tZXJzKHJlc3VsdC5kYXRhLmxpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoVVJMLCB7XHJcbiAgICAgIEN1c3RvbWVySUQsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHN1cm5hbWUsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcHJpY2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBnZXRDdXN0b21lcnMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93Q3VzdG9tZXJzID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1c3RvbWVycyAmJiBjdXN0b21lcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBjdXN0b21lcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdj48Yj5DdXN0b21lcklEOjwvYj4ge2l0ZW0uQ3VzdG9tZXJJRH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Yj5OYW1lOjwvYj4ge2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Yj5TdXJuYW1lOjwvYj4ge2l0ZW0uc3VybmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Yj5zdGF0dXM6PC9iPiB7aXRlbS5zdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+cHJpY2U6PC9iPiB7aXRlbS5wcmljZX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8aDE+PGlucz5jdXN0b21lciBEYXRhIEVkaXQgPC9pbnM+PC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2FkZH0+XHJcbiAgICAgICAgPGgyPkFkZCBjdXN0b21lcnM8L2gyPlxyXG4gICAgICAgIEN1c3RvbWVySUQ6XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiQ3VzdG9tZXJJRFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1c3RvbWVySUQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIE5hbWU6XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIFN1cm5hbWU6XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwic3VybmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN1cm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIHN0YXR1czpcclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICB2YWx1ZSA9XCJXYWl0aW5nXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdHVzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICBwcmljZTpcclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9hZGR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRDdXN0b21lcihDdXN0b21lcklELCBuYW1lLCBzdXJuYW1lLCBzdGF0dXMsIHByaWNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PntzaG93Q3VzdG9tZXJzKCl9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+PGI+KHNlbGVjdGVkIGN1c3RvbWVyKTo8L2I+IFxyXG4gICAgICAgICAgICAgIDxiPkN1c3RvbWVySUQ6PC9iPntjdXN0b21lci5DdXN0b21lcklEfSBcclxuICAgICAgICAgICAgICA8Yj5OYW1lOjwvYj57Y3VzdG9tZXIubmFtZX0gXHJcbiAgICAgICAgICAgICAgPGI+U3VybmFtZTo8L2I+e2N1c3RvbWVyLnN1cm5hbWV9ICBcclxuICAgICAgICAgICAgICA8Yj5zdGF0dXM6PC9iPntjdXN0b21lci5zdGF0dXN9ICBcclxuICAgICAgICAgICAgICA8Yj5wcmljZTo8L2I+e2N1c3RvbWVyLnByaWNlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGFkbWluKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=