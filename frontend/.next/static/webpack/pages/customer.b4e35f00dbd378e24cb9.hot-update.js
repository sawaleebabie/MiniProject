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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomerPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/admin.module.css */ "./styles/admin.module.css");
/* harmony import */ var _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\Users\\sawalee\\Desktop\\MiniProject\\frontend\\pages\\customer.js",
    _s = $RefreshSig$();





var __N_SSP = true;
function CustomerPage(_ref) {
  _s();

  var _this = this;

  var token = _ref.token;
  var URL = "http://localhost:8080/api/laundry";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      customers = _useState2[0],
      setCustomers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      CustomerID = _useState3[0],
      setCustomerID = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      surname = _useState5[0],
      setSurname = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Waiting"),
      status = _useState6[0],
      setStatus = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      price = _useState7[0],
      setPrice = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      customer = _useState8[0],
      setCustomer = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(URL);

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
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(URL, {
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
          className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.listItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "CustomerID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 20
            }, _this), " ", item.CustomerID]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 20
            }, _this), " ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Surname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 20
            }, _this), " ", item.surname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 20
            }, _this), " ", item.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "price:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 20
            }, _this), " ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 16
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
        children: "For Customer Add Data"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form_add,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        id: "myBtn",
        value: "myvalue",
        onclick: "myFunction()",
        children: "Try it"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Add your Data"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, this), "CustomerID:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "CustomerID",
        onChange: function onChange(e) {
          return setCustomerID(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        onChange: function onChange(e) {
          return setName(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this), "Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        name: "surname",
        onChange: function onChange(e) {
          return setSurname(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, this), "status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.text,
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
        columnNumber: 13
      }, this), "price:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "number",
        name: "price",
        onChange: function onChange(e) {
          return setPrice(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_add,
        onClick: function onClick() {
          return addCustomer(CustomerID, name, surname, status, price);
        },
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: showCustomers()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "(selected customer):"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 40
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "CustomerID:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 19
      }, this), customer.CustomerID, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Name:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 19
      }, this), customer.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "Surname:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }, this), customer.surname, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "status:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }, this), customer.status, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: "price:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }, this), customer.price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

_s(CustomerPage, "WsrtpZXyf2JJ1jHLOsrf4aSJcxw=");

_c = CustomerPage;

var _c;

$RefreshReg$(_c, "CustomerPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXIuanMiXSwibmFtZXMiOlsiQ3VzdG9tZXJQYWdlIiwidG9rZW4iLCJVUkwiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwiQ3VzdG9tZXJJRCIsInNldEN1c3RvbWVySUQiLCJuYW1lIiwic2V0TmFtZSIsInN1cm5hbWUiLCJzZXRTdXJuYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwicHJpY2UiLCJzZXRQcmljZSIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJheGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJsaXN0IiwiYWRkQ3VzdG9tZXIiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInNob3dDdXN0b21lcnMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImNvbnRhaW5lciIsImZvcm1fYWRkIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dCIsImJ1dHRvbl9hZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsWUFBVCxPQUFpQztBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUM1QyxNQUFNQyxHQUFHLEdBQUcsbUNBQVo7O0FBRDRDLGtCQUdwQkMsc0RBQVEsQ0FBQyxFQUFELENBSFk7QUFBQSxNQUdyQ0MsSUFIcUM7QUFBQSxNQUcvQkMsT0FIK0I7O0FBQUEsbUJBSVZGLHNEQUFRLENBQUMsRUFBRCxDQUpFO0FBQUEsTUFJckNHLFNBSnFDO0FBQUEsTUFJMUJDLFlBSjBCOztBQUFBLG1CQUtSSixzREFBUSxDQUFDLEVBQUQsQ0FMQTtBQUFBLE1BS3JDSyxVQUxxQztBQUFBLE1BS3pCQyxhQUx5Qjs7QUFBQSxtQkFNcEJO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LGVBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUixFQUMyQlIsUUFBUSxDQUFDVixVQURwQyxlQUVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlIsRUFFcUJVLFFBQVEsQ0FBQ1IsSUFGOUIsZUFHUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhSLEVBR3dCUSxRQUFRLENBQUNOLE9BSGpDLGVBSVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKUixFQUl1Qk0sUUFBUSxDQUFDSixNQUpoQyxlQUtRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTFIsRUFLc0JJLFFBQVEsQ0FBQ0YsS0FML0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNERIOztHQWhIdUJoQixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbWVyLmI0ZTM1ZjAwZGJkMzc4ZTI0Y2I5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYWRtaW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyUGFnZSh7IHRva2VuIH0pIHtcclxuICAgIGNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sYXVuZHJ5XCI7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtDdXN0b21lcklELCBzZXRDdXN0b21lcklEXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3VybmFtZSwgc2V0U3VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIldhaXRpbmdcIik7XHJcbiAgICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBnZXRDdXN0b21lcnMoKTtcclxuICAgIH0sIFtdKTtcclxuICBcclxuICAgIGNvbnN0IGdldEN1c3RvbWVycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpO1xyXG4gICAgICBzZXRDdXN0b21lcnMocmVzdWx0LmRhdGEubGlzdCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgYWRkQ3VzdG9tZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCwge1xyXG4gICAgICAgIEN1c3RvbWVySUQsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBzdXJuYW1lLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBwcmljZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGdldEN1c3RvbWVycygpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IHNob3dDdXN0b21lcnMgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChjdXN0b21lcnMgJiYgY3VzdG9tZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBjdXN0b21lcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGRpdj48Yj5DdXN0b21lcklEOjwvYj4ge2l0ZW0uQ3VzdG9tZXJJRH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjxiPk5hbWU6PC9iPiB7aXRlbS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PGI+U3VybmFtZTo8L2I+IHtpdGVtLnN1cm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48Yj5zdGF0dXM6PC9iPiB7aXRlbS5zdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48Yj5wcmljZTo8L2I+IHtpdGVtLnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgIDxoMT48aW5zPkZvciBDdXN0b21lciBBZGQgRGF0YTwvaW5zPjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fYWRkfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm15QnRuXCIgdmFsdWU9XCJteXZhbHVlXCIgb25jbGljaz1cIm15RnVuY3Rpb24oKVwiPlRyeSBpdDwvYnV0dG9uPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGgyPkFkZCB5b3VyIERhdGE8L2gyPlxyXG4gICAgICAgICAgICBDdXN0b21lcklEOlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIkN1c3RvbWVySURcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXJJRChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICBOYW1lOlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICBTdXJuYW1lOlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInN1cm5hbWVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICBzdGF0dXM6XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICB2YWx1ZSA9XCJXYWl0aW5nXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICBwcmljZTpcclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9hZGR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkQ3VzdG9tZXIoQ3VzdG9tZXJJRCwgbmFtZSwgc3VybmFtZSwgc3RhdHVzLCBwcmljZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57c2hvd0N1c3RvbWVycygpfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT48Yj4oc2VsZWN0ZWQgY3VzdG9tZXIpOjwvYj4gXHJcbiAgICAgICAgICAgICAgICAgIDxiPkN1c3RvbWVySUQ6PC9iPntjdXN0b21lci5DdXN0b21lcklEfSBcclxuICAgICAgICAgICAgICAgICAgPGI+TmFtZTo8L2I+e2N1c3RvbWVyLm5hbWV9IFxyXG4gICAgICAgICAgICAgICAgICA8Yj5TdXJuYW1lOjwvYj57Y3VzdG9tZXIuc3VybmFtZX0gIFxyXG4gICAgICAgICAgICAgICAgICA8Yj5zdGF0dXM6PC9iPntjdXN0b21lci5zdGF0dXN9ICBcclxuICAgICAgICAgICAgICAgICAgPGI+cHJpY2U6PC9iPntjdXN0b21lci5wcmljZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=