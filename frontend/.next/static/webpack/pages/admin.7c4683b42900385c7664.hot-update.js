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
            className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.text,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 43
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4uanMiXSwibmFtZXMiOlsiVVJMIiwiYWRtaW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJDdXN0b21lcklEIiwic2V0Q3VzdG9tZXJJRCIsIm5hbWUiLCJzZXROYW1lIiwic3VybmFtZSIsInNldFN1cm5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJwcmljZSIsInNldFByaWNlIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInVzZUVmZmVjdCIsImdldEN1c3RvbWVycyIsInByb2ZpbGVVc2VyIiwiYXhpb3MiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXN0b21lciIsImlkIiwicmVzdWx0IiwibGlzdCIsImFkZEN1c3RvbWVyIiwicG9zdCIsImRlbGV0ZUN1c3RvbWVyIiwidXBkYXRlQ3VzdG9tZXIiLCJwdXQiLCJzaG93Q3VzdG9tZXJzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3R5bGVzIiwibGlzdEl0ZW0iLCJ0ZXh0IiwiZWRpdF9idXR0b24iLCJidXR0b25fZ2V0IiwiYnV0dG9uX3VwZGF0ZSIsImJ1dHRvbl9kZWxldGUiLCJjb250YWluZXIiLCJmb250VGl0bGUiLCJmb3JtIiwiZm9ybV9hZGQiLCJhZG1pblBhZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b25fYWRkIiwiZm9ybV9hZGQxIiwidGV4dHN0YXR1c0lEIiwic3RhdHVzSUQiLCJzdGF0dXNGaW5pc2hlZCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsR0FBRyxHQUFHLG1DQUFa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QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdHRCxDQWpORDs7R0FBTXhDLEs7OztBQWtOU2lFLG1JQUFRLENBQUNqRSxLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLjdjNDY4M2I0MjkwMDM4NWM3NjY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi9jb21wb25lbnRzL3dpdGhBdXRoXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnJ1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2FkbWluLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5cbmNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sYXVuZHJ5XCI7XG5cbmNvbnN0IGFkbWluID0gKHsgdG9rZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtDdXN0b21lcklELCBzZXRDdXN0b21lcklEXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1cm5hbWUsIHNldFN1cm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDdXN0b21lcnMoKTtcbiAgICBwcm9maWxlVXNlcigpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcHJvZmlsZVVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2NvbmZpZy5VUkx9L3Byb2ZpbGVgLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0VXNlcih1c2Vycy5kYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Q3VzdG9tZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYCR7VVJMfS8ke2lkfWApXG4gICAgY29uc29sZS5sb2coJ2N1c3RvbWVycyBJRDogJywgcmVzdWx0LmRhdGEpXG4gICAgc2V0Q3VzdG9tZXIocmVzdWx0LmRhdGEpXG4gICAgc2V0Q3VzdG9tZXJJRChyZXN1bHQuZGF0YS5DdXN0b21lcklEKVxuICAgIHNldE5hbWUocmVzdWx0LmRhdGEubmFtZSlcbiAgICBzZXRTdXJuYW1lKHJlc3VsdC5kYXRhLnN1cm5hbWUpXG4gICAgc2V0U3RhdHVzKHJlc3VsdC5kYXRhLnN0YXR1cylcbiAgICBzZXRQcmljZShyZXN1bHQuZGF0YS5wcmljZSlcbiAgfVxuXG4gIGNvbnN0IGdldEN1c3RvbWVycyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTCk7XG4gICAgc2V0Q3VzdG9tZXJzKHJlc3VsdC5kYXRhLmxpc3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCwge1xuICAgICAgQ3VzdG9tZXJJRCxcbiAgICAgIG5hbWUsXG4gICAgICBzdXJuYW1lLFxuICAgICAgc3RhdHVzLFxuICAgICAgcHJpY2UsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBnZXRDdXN0b21lcnMoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVDdXN0b21lciA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7VVJMfS8ke2lkfWApO1xuICAgIGdldEN1c3RvbWVycygpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUN1c3RvbWVyID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dChgJHtVUkx9LyR7aWR9YCwge1xuICAgICAgQ3VzdG9tZXJJRCxcbiAgICAgIG5hbWUsXG4gICAgICBzdXJuYW1lLFxuICAgICAgc3RhdHVzLFxuICAgICAgcHJpY2UsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBnZXRDdXN0b21lcnMoKTtcbiAgfTtcblxuICBjb25zdCBzaG93Q3VzdG9tZXJzID0gKCkgPT4ge1xuICAgIGlmIChjdXN0b21lcnMgJiYgY3VzdG9tZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGN1c3RvbWVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8ZGl2PjxiPkN1c3RvbWVySUQ6PC9iPiB7aXRlbS5DdXN0b21lcklEfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj48Yj5OYW1lOjwvYj4ge2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGI+U3VybmFtZTo8L2I+IHtpdGVtLnN1cm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT48Yj5TdGF0dXM6PC9iPiB7aXRlbS5zdGF0dXN9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxiPlByaWNlOjwvYj4ge2l0ZW0ucHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRfYnV0dG9ufT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fZ2V0fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldEN1c3RvbWVyKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgR2V0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl91cGRhdGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlQ3VzdG9tZXIoaXRlbS5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2RlbGV0ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVDdXN0b21lcihpdGVtLmlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWRtaW48L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL2xhdW5kcnkucG5nXCJcbiAgICAgICAgICBhbHQ9XCJQaWN0dXJlXCJcbiAgICAgICAgICB3aWR0aD17OTAwfVxuICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNTAwcHgpIDEwMHB4XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9udFRpdGxlfT48aDE+Rm9yIEFkbWluIEVkaXQgRGF0YTwvaDE+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fYWRkfT5cbiAgICAgICAgICAgICAgICA8aDI+QWRkIGN1c3RvbWVyczwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZG1pblBhZ2V9PlxuICAgICAgICAgICAgICAgICAgPGRpdj48Yj5DdXN0b21lcklEOiA8L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkN1c3RvbWVySURcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtDdXN0b21lcklEfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXJJRChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+PGI+TmFtZTo8L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+PGI+U3VybmFtZTo8L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN1cm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+PGI+U3RhdHVzOjwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdHVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj48Yj5QcmljZTo8L2I+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2FkZH0gb25DbGljaz17KCkgPT4gYWRkQ3VzdG9tZXIoQ3VzdG9tZXJJRCwgbmFtZSwgc3VybmFtZSwgc3RhdHVzLCBwcmljZSl9PlxuICAgICAgICAgICAgICAgICAgQWRkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGQxfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0c3RhdHVzSUR9PjxoMj5TVEFUVVM8L2gyPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzSUR9IG9uQ2xpY2s9eygpID0+IHNldFN0YXR1cyhcIldhc2hpbmdcIil9PlxuICAgICAgICAgICAgICAgICAgV2FzaGluZ1xuICAgICAgICAgICAgICA8L2J1dHRvbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNJRH0gb25DbGljaz17KCkgPT4gc2V0U3RhdHVzKFwiUmluc2VcIil9PlxuICAgICAgICAgICAgICAgICAgUmluc2VcbiAgICAgICAgICAgICAgPC9idXR0b24+IDxiciAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzSUR9IG9uQ2xpY2s9eygpID0+IHNldFN0YXR1cyhcIkFpciBEcnlcIil9PlxuICAgICAgICAgICAgICAgICAgQWlyIERyeVxuICAgICAgICAgICAgICA8L2J1dHRvbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNJRH0gb25DbGljaz17KCkgPT4gc2V0U3RhdHVzKFwiU3BpbiBkcnllclwiKX0+XG4gICAgICAgICAgICAgICAgICBTcGluIGRyeWVyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPiA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c0ZpbmlzaGVkfSBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0dXMoXCJGaW5pc2hlZFwiKX0+XG4gICAgICAgICAgICAgICAgICBGaW5pc2hlZFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+e3Nob3dDdXN0b21lcnMoKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGFkbWluKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==