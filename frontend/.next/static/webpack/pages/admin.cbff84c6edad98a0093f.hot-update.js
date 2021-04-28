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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/withAuth */ "./components/withAuth.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/admin.module.css */ "./styles/admin.module.css");
/* harmony import */ var _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\sawalee\\Desktop\\MiniProject\\frontend\\pages\\admin.js",
    _this = undefined,
    _s = $RefreshSig$();









var URL = "http://localhost:8080/api/laundry";

var admin = function admin(_ref) {
  _s();

  var token = _ref.token;

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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
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
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(_config_config__WEBPACK_IMPORTED_MODULE_7___default.a.URL, "/profile"), {
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
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(URL, "/").concat(id));

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
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(URL);

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
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(URL, {
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
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a["delete"]("".concat(URL, "/").concat(id));

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
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("".concat(URL, "/").concat(id), {
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
          className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.listItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "CustomerID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 18
            }, _this), " ", item.CustomerID]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 18
            }, _this), " ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Surname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 18
            }, _this), " ", item.surname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 18
            }, _this), " ", item.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Price:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 18
            }, _this), " ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.edit_button,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.button_get,
              onClick: function onClick() {
                return getCustomer(item.id);
              },
              children: "Get"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.button_update,
              onClick: function onClick() {
                return updateCustomer(item.id);
              },
              children: "Update"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.button_delete,
              onClick: function onClick() {
                return deleteCustomer(item.id);
              },
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 14
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_9___default.a, {
        src: "/laundry.png",
        alt: "Picture",
        width: 900,
        height: 200,
        sizes: "(max-width: 500px) 100px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.fontTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "For Admin Edit Data"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 43
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.form,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.form_add,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Add customers"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.adminPage,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: "CustomerID: "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 24
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    name: "CustomerID",
                    value: CustomerID,
                    onChange: function onChange(e) {
                      return setCustomerID(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: "Name:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 24
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    name: "name",
                    value: name,
                    onChange: function onChange(e) {
                      return setName(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: "Surname:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 24
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    name: "surname",
                    value: surname,
                    onChange: function onChange(e) {
                      return setSurname(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: "Status:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 24
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,
                    type: "text",
                    name: "status",
                    value: status,
                    onChange: function onChange(e) {
                      return setStatus(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                    children: "Price:"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 24
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "number",
                    name: "price",
                    value: price,
                    onChange: function onChange(e) {
                      return setPrice(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.button_add,
                onClick: function onClick() {
                  return addCustomer(CustomerID, name, surname, status, price);
                },
                children: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.form_add1,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.textstatusID,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "STATUS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 52
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Washing");
                },
                children: "Washing"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Rinse");
                },
                children: "Rinse"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Air Dry");
                },
                children: "Air Dry"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Spin dryer");
                },
                children: "Spin dryer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.statusFinished,
                onClick: function onClick() {
                  return setStatus("Finished");
                },
                children: "Finished"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.list,
        children: showCustomers()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4uanMiXSwibmFtZXMiOlsiVVJMIiwiYWRtaW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJDdXN0b21lcklEIiwic2V0Q3VzdG9tZXJJRCIsIm5hbWUiLCJzZXROYW1lIiwic3VybmFtZSIsInNldFN1cm5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJwcmljZSIsInNldFByaWNlIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInVzZUVmZmVjdCIsImdldEN1c3RvbWVycyIsInByb2ZpbGVVc2VyIiwiYXhpb3MiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXN0b21lciIsImlkIiwicmVzdWx0IiwibGlzdCIsImFkZEN1c3RvbWVyIiwicG9zdCIsImRlbGV0ZUN1c3RvbWVyIiwidXBkYXRlQ3VzdG9tZXIiLCJwdXQiLCJzaG93Q3VzdG9tZXJzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3R5bGVzIiwibGlzdEl0ZW0iLCJlZGl0X2J1dHRvbiIsImJ1dHRvbl9nZXQiLCJidXR0b25fdXBkYXRlIiwiYnV0dG9uX2RlbGV0ZSIsImNvbnRhaW5lciIsImZvbnRUaXRsZSIsImZvcm0iLCJmb3JtX2FkZCIsImFkbWluUGFnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHQiLCJidXR0b25fYWRkIiwiZm9ybV9hZGQxIiwidGV4dHN0YXR1c0lEIiwic3RhdHVzSUQiLCJzdGF0dXNGaW5pc2hlZCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsR0FBRyxHQUFHLG1DQUFa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QUE7QUFBQTtBQUFBO0FBQUEsZUF0RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3R0QsQ0FqTkQ7O0dBQU14QyxLOzs7QUFrTlNpRSxtSUFBUSxDQUFDakUsS0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi5jYmZmODRjNmVkYWQ5OGEwMDkzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy93aXRoQXV0aFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZydcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hZG1pbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5jb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbGF1bmRyeVwiO1xuXG5jb25zdCBhZG1pbiA9ICh7IHRva2VuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbQ3VzdG9tZXJJRCwgc2V0Q3VzdG9tZXJJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdXJuYW1lLCBzZXRTdXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q3VzdG9tZXJzKCk7XG4gICAgcHJvZmlsZVVzZXIoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHByb2ZpbGVVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGF4aW9zLmdldChgJHtjb25maWcuVVJMfS9wcm9maWxlYCwge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH0sXG4gICAgICB9KTtcbiAgICAgIHNldFVzZXIodXNlcnMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEN1c3RvbWVyID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke1VSTH0vJHtpZH1gKVxuICAgIGNvbnNvbGUubG9nKCdjdXN0b21lcnMgSUQ6ICcsIHJlc3VsdC5kYXRhKVxuICAgIHNldEN1c3RvbWVyKHJlc3VsdC5kYXRhKVxuICAgIHNldEN1c3RvbWVySUQocmVzdWx0LmRhdGEuQ3VzdG9tZXJJRClcbiAgICBzZXROYW1lKHJlc3VsdC5kYXRhLm5hbWUpXG4gICAgc2V0U3VybmFtZShyZXN1bHQuZGF0YS5zdXJuYW1lKVxuICAgIHNldFN0YXR1cyhyZXN1bHQuZGF0YS5zdGF0dXMpXG4gICAgc2V0UHJpY2UocmVzdWx0LmRhdGEucHJpY2UpXG4gIH1cblxuICBjb25zdCBnZXRDdXN0b21lcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpO1xuICAgIHNldEN1c3RvbWVycyhyZXN1bHQuZGF0YS5saXN0KTtcbiAgfTtcblxuICBjb25zdCBhZGRDdXN0b21lciA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChVUkwsIHtcbiAgICAgIEN1c3RvbWVySUQsXG4gICAgICBuYW1lLFxuICAgICAgc3VybmFtZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIHByaWNlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgZ2V0Q3VzdG9tZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlQ3VzdG9tZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke1VSTH0vJHtpZH1gKTtcbiAgICBnZXRDdXN0b21lcnMoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVDdXN0b21lciA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wdXQoYCR7VVJMfS8ke2lkfWAsIHtcbiAgICAgIEN1c3RvbWVySUQsXG4gICAgICBuYW1lLFxuICAgICAgc3VybmFtZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIHByaWNlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgZ2V0Q3VzdG9tZXJzKCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0N1c3RvbWVycyA9ICgpID0+IHtcbiAgICBpZiAoY3VzdG9tZXJzICYmIGN1c3RvbWVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjdXN0b21lcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGRpdj48Yj5DdXN0b21lcklEOjwvYj4ge2l0ZW0uQ3VzdG9tZXJJRH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGI+TmFtZTo8L2I+IHtpdGVtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxiPlN1cm5hbWU6PC9iPiB7aXRlbS5zdXJuYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj48Yj5TdGF0dXM6PC9iPiB7aXRlbS5zdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxiPlByaWNlOjwvYj4ge2l0ZW0ucHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRfYnV0dG9ufT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fZ2V0fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldEN1c3RvbWVyKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgR2V0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl91cGRhdGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQ3VzdG9tZXIoaXRlbS5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2RlbGV0ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVDdXN0b21lcihpdGVtLmlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWRtaW48L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL2xhdW5kcnkucG5nXCJcbiAgICAgICAgICBhbHQ9XCJQaWN0dXJlXCJcbiAgICAgICAgICB3aWR0aD17OTAwfVxuICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNTAwcHgpIDEwMHB4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9udFRpdGxlfT48aDE+Rm9yIEFkbWluIEVkaXQgRGF0YTwvaDE+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fYWRkfT5cbiAgICAgICAgICAgICAgICA8aDI+QWRkIGN1c3RvbWVyczwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZG1pblBhZ2V9PlxuICAgICAgICAgICAgICAgICAgPGRpdj48Yj5DdXN0b21lcklEOiA8L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkN1c3RvbWVySURcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtDdXN0b21lcklEfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXJJRChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+PGI+TmFtZTo8L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+PGI+U3VybmFtZTo8L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1cm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+PGI+U3RhdHVzOjwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdHVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj48Yj5QcmljZTo8L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2FkZH0gb25DbGljaz17KCkgPT4gYWRkQ3VzdG9tZXIoQ3VzdG9tZXJJRCwgbmFtZSwgc3VybmFtZSwgc3RhdHVzLCBwcmljZSl9PlxuICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGQxfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0c3RhdHVzSUR9PjxoMj5TVEFUVVM8L2gyPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzSUR9IG9uQ2xpY2s9eygpID0+IHNldFN0YXR1cyhcIldhc2hpbmdcIil9PlxuICAgICAgICAgICAgICAgICAgV2FzaGluZ1xuICAgICAgICAgICAgICA8L2J1dHRvbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNJRH0gb25DbGljaz17KCkgPT4gc2V0U3RhdHVzKFwiUmluc2VcIil9PlxuICAgICAgICAgICAgICAgICAgUmluc2VcbiAgICAgICAgICAgICAgPC9idXR0b24+IDxiciAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzSUR9IG9uQ2xpY2s9eygpID0+IHNldFN0YXR1cyhcIkFpciBEcnlcIil9PlxuICAgICAgICAgICAgICAgICAgQWlyIERyeVxuICAgICAgICAgICAgICA8L2J1dHRvbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNJRH0gb25DbGljaz17KCkgPT4gc2V0U3RhdHVzKFwiU3BpbiBkcnllclwiKX0+XG4gICAgICAgICAgICAgICAgICBTcGluIGRyeWVyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPiA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c0ZpbmlzaGVkfSBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0dXMoXCJGaW5pc2hlZFwiKX0+XG4gICAgICAgICAgICAgICAgICBGaW5pc2hlZFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+e3Nob3dDdXN0b21lcnMoKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGFkbWluKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==