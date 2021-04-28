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
            }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ins", {
              children: item.status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 33
            }, _this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4uanMiXSwibmFtZXMiOlsiVVJMIiwiYWRtaW4iLCJ0b2tlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJjdXN0b21lcnMiLCJzZXRDdXN0b21lcnMiLCJDdXN0b21lcklEIiwic2V0Q3VzdG9tZXJJRCIsIm5hbWUiLCJzZXROYW1lIiwic3VybmFtZSIsInNldFN1cm5hbWUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJwcmljZSIsInNldFByaWNlIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsInVzZUVmZmVjdCIsImdldEN1c3RvbWVycyIsInByb2ZpbGVVc2VyIiwiYXhpb3MiLCJnZXQiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInVzZXJzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXN0b21lciIsImlkIiwicmVzdWx0IiwibGlzdCIsImFkZEN1c3RvbWVyIiwicG9zdCIsImRlbGV0ZUN1c3RvbWVyIiwidXBkYXRlQ3VzdG9tZXIiLCJwdXQiLCJzaG93Q3VzdG9tZXJzIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3R5bGVzIiwibGlzdEl0ZW0iLCJlZGl0X2J1dHRvbiIsImJ1dHRvbl9nZXQiLCJidXR0b25fdXBkYXRlIiwiYnV0dG9uX2RlbGV0ZSIsImNvbnRhaW5lciIsImZvbnRUaXRsZSIsImZvcm0iLCJmb3JtX2FkZCIsImFkbWluUGFnZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbl9hZGQiLCJmb3JtX2FkZDEiLCJ0ZXh0c3RhdHVzSUQiLCJzdGF0dXNJRCIsInN0YXR1c0ZpbmlzaGVkIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxHQUFHLEdBQUcsbUNBQVo7O0FBRUEs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QTtBQUFBO0FBQUEsZUF0RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3R0QsQ0FqTkQ7O0dBQU14QyxLOzs7QUFrTlNnRSxtSUFBUSxDQUFDaEUsS0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi43NTViYzhkYTFiODNmMzJjOTdiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy93aXRoQXV0aFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZydcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hZG1pbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5jb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbGF1bmRyeVwiO1xuXG5jb25zdCBhZG1pbiA9ICh7IHRva2VuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbQ3VzdG9tZXJJRCwgc2V0Q3VzdG9tZXJJRF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdXJuYW1lLCBzZXRTdXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q3VzdG9tZXJzKCk7XG4gICAgcHJvZmlsZVVzZXIoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHByb2ZpbGVVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGF4aW9zLmdldChgJHtjb25maWcuVVJMfS9wcm9maWxlYCwge1xuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH0sXG4gICAgICB9KTtcbiAgICAgIHNldFVzZXIodXNlcnMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEN1c3RvbWVyID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke1VSTH0vJHtpZH1gKVxuICAgIGNvbnNvbGUubG9nKCdjdXN0b21lcnMgSUQ6ICcsIHJlc3VsdC5kYXRhKVxuICAgIHNldEN1c3RvbWVyKHJlc3VsdC5kYXRhKVxuICAgIHNldEN1c3RvbWVySUQocmVzdWx0LmRhdGEuQ3VzdG9tZXJJRClcbiAgICBzZXROYW1lKHJlc3VsdC5kYXRhLm5hbWUpXG4gICAgc2V0U3VybmFtZShyZXN1bHQuZGF0YS5zdXJuYW1lKVxuICAgIHNldFN0YXR1cyhyZXN1bHQuZGF0YS5zdGF0dXMpXG4gICAgc2V0UHJpY2UocmVzdWx0LmRhdGEucHJpY2UpXG4gIH1cblxuICBjb25zdCBnZXRDdXN0b21lcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpO1xuICAgIHNldEN1c3RvbWVycyhyZXN1bHQuZGF0YS5saXN0KTtcbiAgfTtcblxuICBjb25zdCBhZGRDdXN0b21lciA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChVUkwsIHtcbiAgICAgIEN1c3RvbWVySUQsXG4gICAgICBuYW1lLFxuICAgICAgc3VybmFtZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIHByaWNlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgZ2V0Q3VzdG9tZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlQ3VzdG9tZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke1VSTH0vJHtpZH1gKTtcbiAgICBnZXRDdXN0b21lcnMoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVDdXN0b21lciA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wdXQoYCR7VVJMfS8ke2lkfWAsIHtcbiAgICAgIEN1c3RvbWVySUQsXG4gICAgICBuYW1lLFxuICAgICAgc3VybmFtZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIHByaWNlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgZ2V0Q3VzdG9tZXJzKCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0N1c3RvbWVycyA9ICgpID0+IHtcbiAgICBpZiAoY3VzdG9tZXJzICYmIGN1c3RvbWVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBjdXN0b21lcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGRpdj48Yj5DdXN0b21lcklEOjwvYj4ge2l0ZW0uQ3VzdG9tZXJJRH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGI+TmFtZTo8L2I+IHtpdGVtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxiPlN1cm5hbWU6PC9iPiB7aXRlbS5zdXJuYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj48Yj5TdGF0dXM6PC9iPiA8aW5zPntpdGVtLnN0YXR1c308L2lucz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGI+UHJpY2U6PC9iPiB7aXRlbS5wcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdF9idXR0b259PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9nZXR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0Q3VzdG9tZXIoaXRlbS5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHZXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX3VwZGF0ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVDdXN0b21lcihpdGVtLmlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fZGVsZXRlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUN1c3RvbWVyKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BZG1pbjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvbGF1bmRyeS5wbmdcIlxuICAgICAgICAgIGFsdD1cIlBpY3R1cmVcIlxuICAgICAgICAgIHdpZHRoPXs5MDB9XG4gICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA1MDBweCkgMTAwcHhcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb250VGl0bGV9PjxoMT5Gb3IgQWRtaW4gRWRpdCBEYXRhPC9oMT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGR9PlxuICAgICAgICAgICAgICAgIDxoMj5BZGQgY3VzdG9tZXJzPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkbWluUGFnZX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PjxiPkN1c3RvbWVySUQ6IDwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ3VzdG9tZXJJRFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0N1c3RvbWVySUR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXN0b21lcklEKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj48Yj5OYW1lOjwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj48Yj5TdXJuYW1lOjwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1cm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj48Yj5TdGF0dXM6PC9iPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PjxiPlByaWNlOjwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fYWRkfSBvbkNsaWNrPXsoKSA9PiBhZGRDdXN0b21lcihDdXN0b21lcklELCBuYW1lLCBzdXJuYW1lLCBzdGF0dXMsIHByaWNlKX0+XG4gICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2FkZDF9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRzdGF0dXNJRH0+PGgyPlNUQVRVUzwvaDI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNJRH0gb25DbGljaz17KCkgPT4gc2V0U3RhdHVzKFwiV2FzaGluZ1wiKX0+XG4gICAgICAgICAgICAgICAgICBXYXNoaW5nXG4gICAgICAgICAgICAgIDwvYnV0dG9uPiA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c0lEfSBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0dXMoXCJSaW5zZVwiKX0+XG4gICAgICAgICAgICAgICAgICBSaW5zZVxuICAgICAgICAgICAgICA8L2J1dHRvbj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNJRH0gb25DbGljaz17KCkgPT4gc2V0U3RhdHVzKFwiQWlyIERyeVwiKX0+XG4gICAgICAgICAgICAgICAgICBBaXIgRHJ5XG4gICAgICAgICAgICAgIDwvYnV0dG9uPiA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c0lEfSBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0dXMoXCJTcGluIGRyeWVyXCIpfT5cbiAgICAgICAgICAgICAgICAgIFNwaW4gZHJ5ZXJcbiAgICAgICAgICAgICAgPC9idXR0b24+IDxiciAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzRmluaXNoZWR9IG9uQ2xpY2s9eygpID0+IHNldFN0YXR1cyhcIkZpbmlzaGVkXCIpfT5cbiAgICAgICAgICAgICAgICAgIEZpbmlzaGVkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57c2hvd0N1c3RvbWVycygpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoYWRtaW4pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xuICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9