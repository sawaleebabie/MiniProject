webpackHotUpdate_N_E("pages/admin",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\sawalee\\Desktop\\MiniProject\\frontend\\pages\\admin.js",
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
              setCustomerID(result.data.CustomerID);
              setName(result.data.name);
              setSurname(result.data.surname);
              setStatus(result.data.status);
              setPrice(result.data.price);

            case 10:
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

  var deleteCustomer = /*#__PURE__*/function () {
    var _ref6 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(id) {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("".concat(URL, "/").concat(id));

            case 2:
              result = _context5.sent;
              getCustomers();

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function deleteCustomer(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  var updateCustomer = /*#__PURE__*/function () {
    var _ref7 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(id) {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("".concat(URL, "/").concat(id), {
                CustomerID: CustomerID,
                name: name,
                surname: surname,
                status: status,
                price: price
              });

            case 2:
              result = _context6.sent;
              console.log(result);
              getCustomers();

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function updateCustomer(_x3) {
      return _ref7.apply(this, arguments);
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
              lineNumber: 87,
              columnNumber: 18
            }, _this), " ", item.CustomerID]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 18
            }, _this), " ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Surname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 18
            }, _this), " ", item.surname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 18
            }, _this), " ", item.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Price:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 18
            }, _this), " ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.edit_button,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_get,
              onClick: function onClick() {
                return getCustomer(item.id);
              },
              children: "Get"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_update,
              onClick: function onClick() {
                return updateCustomer(item.id);
              },
              children: "Update"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_delete,
              onClick: function onClick() {
                return deleteCustomer(item.id);
              },
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 14
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
        src: "/laundry.png",
        alt: "Picture",
        width: 900,
        height: 200,
        sizes: "(max-width: 500px) 100px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.fontTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "For Admin Edit Data"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 43
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.form,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.form_add,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Add customers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.adminPage,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.adminText,
                  children: ["CustomerID: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    name: "CustomerID",
                    value: CustomerID,
                    onChange: function onChange(e) {
                      return setCustomerID(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 97
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 51
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.adminText,
                  children: ["Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.adminInput,
                    type: "text",
                    name: "name",
                    value: name,
                    onChange: function onChange(e) {
                      return setName(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 56
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.adminText,
                  children: ["Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.adminInput,
                    type: "text",
                    name: "surname",
                    value: surname,
                    onChange: function onChange(e) {
                      return setSurname(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.adminText,
                  children: ["Status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    name: "status",
                    value: status,
                    onChange: function onChange(e) {
                      return setStatus(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.adminText,
                  children: ["Price:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "number",
                    name: "price",
                    value: price,
                    onChange: function onChange(e) {
                      return setPrice(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 16
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_add,
                onClick: function onClick() {
                  return addCustomer(CustomerID, name, surname, status, price);
                },
                children: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.form_add1,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textstatusID,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "STATUS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 50
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Washing");
                },
                children: "Washing"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Rinse");
                },
                children: "Rinse"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Air Dry");
                },
                children: "Air Dry"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Spin dryer");
                },
                children: "Spin dryer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.statusFinished,
                onClick: function onClick() {
                  return setStatus("Finished");
                },
                children: "Finished"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
        children: showCustomers()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, _this);
};

_s(admin, "fsNQlL7md1/590E+vT9as6QoAY8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4uanMiXSwibmFtZXMiOlsiVVJMIiwiYWRtaW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJDdXN0b21lcklEIiwic2V0Q3VzdG9tZXJJRCIsIm5hbWUiLCJzZXROYW1lIiwic3VybmFtZSIsInNldFN1cm5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJwcmljZSIsInNldFByaWNlIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInVzZUVmZmVjdCIsImdldEN1c3RvbWVycyIsInByb2ZpbGVVc2VyIiwiYXhpb3MiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXN0b21lciIsImlkIiwicmVzdWx0IiwibGlzdCIsImFkZEN1c3RvbWVyIiwicG9zdCIsImRlbGV0ZUN1c3RvbWVyIiwidXBkYXRlQ3VzdG9tZXIiLCJwdXQiLCJzaG93Q3VzdG9tZXJzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3R5bGVzIiwibGlzdEl0ZW0iLCJlZGl0X2J1dHRvbiIsImJ1dHRvbl9nZXQiLCJidXR0b25fdXBkYXRlIiwiYnV0dG9uX2RlbGV0ZSIsImNvbnRhaW5lciIsImZvbnRUaXRsZSIsImZvcm0iLCJmb3JtX2FkZCIsImFkbWluUGFnZSIsImFkbWluVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkbWluSW5wdXQiLCJidXR0b25fYWRkIiwiZm9ybV9hZGQxIiwidGV4dHN0YXR1c0lEIiwic3RhdHVzSUQiLCJzdGF0dXNGaW5pc2hlZCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFH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QVEsQ0FBQ2xFLEtBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uNTEwZjdmZWEwNWZkZjkwZjU2NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYWRtaW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnIFxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJyBcblxuY29uc3QgVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xhdW5kcnlcIjtcblxuY29uc3QgYWRtaW4gPSAoeyB0b2tlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW0N1c3RvbWVySUQsIHNldEN1c3RvbWVySURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VybmFtZSwgc2V0U3VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEN1c3RvbWVycygpO1xuICAgIHByb2ZpbGVVc2VyKCk7XG4gIH0sIFtdKTtcbiAgXG4gIGNvbnN0IHByb2ZpbGVVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7ICAgIFxuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBheGlvcy5nZXQoYCR7Y29uZmlnLlVSTH0vcHJvZmlsZWAsIHtcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9LFxuICAgICAgfSk7ICBcbiAgICAgIHNldFVzZXIodXNlcnMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEN1c3RvbWVyID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke1VSTH0vJHtpZH1gKVxuICAgIGNvbnNvbGUubG9nKCdjdXN0b21lcnMgSUQ6ICcsIHJlc3VsdC5kYXRhKVxuICAgIHNldEN1c3RvbWVyKHJlc3VsdC5kYXRhKVxuICAgIHNldEN1c3RvbWVySUQocmVzdWx0LmRhdGEuQ3VzdG9tZXJJRClcbiAgICBzZXROYW1lKHJlc3VsdC5kYXRhLm5hbWUpXG4gICAgc2V0U3VybmFtZShyZXN1bHQuZGF0YS5zdXJuYW1lKVxuICAgIHNldFN0YXR1cyhyZXN1bHQuZGF0YS5zdGF0dXMpXG4gICAgc2V0UHJpY2UocmVzdWx0LmRhdGEucHJpY2UpXG59XG4gXG4gIGNvbnN0IGdldEN1c3RvbWVycyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTCk7XG4gICAgc2V0Q3VzdG9tZXJzKHJlc3VsdC5kYXRhLmxpc3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCwge1xuICAgICAgQ3VzdG9tZXJJRCxcbiAgICAgIG5hbWUsXG4gICAgICBzdXJuYW1lLFxuICAgICAgc3RhdHVzLFxuICAgICAgcHJpY2UsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBnZXRDdXN0b21lcnMoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVDdXN0b21lciA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7VVJMfS8ke2lkfWApO1xuICAgIGdldEN1c3RvbWVycygpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUN1c3RvbWVyID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dChgJHtVUkx9LyR7aWR9YCwge1xuICAgICAgQ3VzdG9tZXJJRCxcbiAgICAgIG5hbWUsXG4gICAgICBzdXJuYW1lLFxuICAgICAgc3RhdHVzLFxuICAgICAgcHJpY2UsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBnZXRDdXN0b21lcnMoKTtcbiAgfTtcblxuICBjb25zdCBzaG93Q3VzdG9tZXJzID0gKCkgPT4ge1xuICAgIGlmIChjdXN0b21lcnMgJiYgY3VzdG9tZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGN1c3RvbWVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8ZGl2PjxiPkN1c3RvbWVySUQ6PC9iPiB7aXRlbS5DdXN0b21lcklEfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj48Yj5OYW1lOjwvYj4ge2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGI+U3VybmFtZTo8L2I+IHtpdGVtLnN1cm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxiPlN0YXR1czo8L2I+IHtpdGVtLnN0YXR1c308L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGI+UHJpY2U6PC9iPiB7aXRlbS5wcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdF9idXR0b259PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9nZXR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0Q3VzdG9tZXIoaXRlbS5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHZXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX3VwZGF0ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVDdXN0b21lcihpdGVtLmlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fZGVsZXRlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUN1c3RvbWVyKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuICggXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5BZG1pbjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvbGF1bmRyeS5wbmdcIlxuICAgICAgICAgIGFsdD1cIlBpY3R1cmVcIlxuICAgICAgICAgIHdpZHRoPXs5MDB9XG4gICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA1MDBweCkgMTAwcHhcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb250VGl0bGV9PjxoMT5Gb3IgQWRtaW4gRWRpdCBEYXRhPC9oMT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGR9PlxuICAgICAgICAgICAgICAgIDxoMj5BZGQgY3VzdG9tZXJzPC9oMj4gICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZG1pblBhZ2V9PjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRtaW5UZXh0fT5DdXN0b21lcklEOiA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJDdXN0b21lcklEXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge0N1c3RvbWVySUR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1c3RvbWVySUQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgID48L2lucHV0PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRtaW5UZXh0fT5OYW1lOjxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRtaW5JbnB1dH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgID48L2lucHV0PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRtaW5UZXh0fT5TdXJuYW1lOlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkbWluSW5wdXR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3VybmFtZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdXJuYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICA+PC9pbnB1dD48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkbWluVGV4dH0+U3RhdHVzOlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdGF0dXN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+PC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkbWluVGV4dH0+UHJpY2U6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtwcmljZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgID48L2lucHV0PjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2FkZH1vbkNsaWNrPXsoKSA9PiBhZGRDdXN0b21lcihDdXN0b21lcklELCBuYW1lLCBzdXJuYW1lLCBzdGF0dXMsIHByaWNlKX0+XG4gICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGQxfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dHN0YXR1c0lEfT48aDI+U1RBVFVTPC9oMj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gICBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNJRH0gb25DbGljaz0geygpID0+IHNldFN0YXR1cyhcIldhc2hpbmdcIikgfT5cbiAgICAgICAgICAgICAgICBXYXNoaW5nXG4gICAgICAgICAgICAgIDwvYnV0dG9uPiA8YnIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAgIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c0lEfSBvbkNsaWNrPSB7KCkgPT4gc2V0U3RhdHVzKFwiUmluc2VcIikgfT5cbiAgICAgICAgICAgICAgICBSaW5zZVxuICAgICAgICAgICAgICA8L2J1dHRvbj4gPGJyIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gICBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNJRH0gb25DbGljaz0geygpID0+IHNldFN0YXR1cyhcIkFpciBEcnlcIikgfT5cbiAgICAgICAgICAgICAgICBBaXIgRHJ5XG4gICAgICAgICAgICAgIDwvYnV0dG9uPiA8YnIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAgIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c0lEfSBvbkNsaWNrPSB7KCkgPT4gc2V0U3RhdHVzKFwiU3BpbiBkcnllclwiKSB9PlxuICAgICAgICAgICAgICAgIFNwaW4gZHJ5ZXJcbiAgICAgICAgICAgICAgPC9idXR0b24+IDxiciAvPlxuICAgICAgICAgICAgICA8YnV0dG9uICAgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzRmluaXNoZWR9IG9uQ2xpY2s9IHsoKSA9PiBzZXRTdGF0dXMoXCJGaW5pc2hlZFwiKSB9PlxuICAgICAgICAgICAgICAgIEZpbmlzaGVkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+PC9kaXY+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+e3Nob3dDdXN0b21lcnMoKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PiAgIFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGFkbWluKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==