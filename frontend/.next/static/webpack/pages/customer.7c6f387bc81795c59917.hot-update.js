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
/* harmony import */ var _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/customer.module.css */ "./styles/customer.module.css");
/* harmony import */ var _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);




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
    Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getCustomers();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);

  var machButton = function machButton(name, status, price) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
      disabled: status,
      onClick: function onClick() {
        setCustomerID(name);
        setPrice(price);
      },
      children: [" ", name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this);
  };

  var rendersome = function rendersome() {
    // if (customers && customers.length) {
    return customers.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
        disabled: true,
        onClick: function onClick() {
          setCustomerID(item.CustomerID);
          setPrice(item.price);
        },
        children: [" ", item.CustomerID]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this);
    } // machButton(item.CustomerID, false, item.price)
    ); // }
  };

  var getCustomers = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(URL);

            case 2:
              result = _context2.sent;
              setCustomers(result.data.list);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getCustomers() {
      return _ref3.apply(this, arguments);
    };
  }();

  var addCustomer = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var result;
      return C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(URL, {
                CustomerID: CustomerID,
                name: name,
                surname: surname,
                status: status,
                price: price
              });

            case 2:
              result = _context3.sent;
              console.log(result);
              getCustomers();

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function addCustomer() {
      return _ref4.apply(this, arguments);
    };
  }();

  var showCustomers = function showCustomers() {
    if (customers && customers.length) {
      return customers.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.listItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "CustomerID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 18
            }, _this), " ", item.CustomerID]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 18
            }, _this), " ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Surname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 18
            }, _this), " ", item.surname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 18
            }, _this), " ", item.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Price:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 18
            }, _this), " ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 14
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Customer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
        src: "/laundry.png",
        alt: "Picture",
        width: 900,
        height: 200,
        sizes: "(max-width: 500px) 100px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.fontTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "For Customer Add Data "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 43
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form_add,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Add your Data"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, this), "CustomerID:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                disabled: "disabled",
                name: "CustomerID",
                value: CustomerID,
                onChange: function onChange(e) {
                  return setCustomerID(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "name",
                onChange: function onChange(e) {
                  return setName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this), "Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "surname",
                onChange: function onChange(e) {
                  return setSurname(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this), "Status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.text,
                type: "text",
                name: "status",
                disabled: "disabled",
                value: "Waiting",
                onChange: function onChange(e) {
                  return setStatus(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, this), "Price:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "number",
                name: "price",
                disabled: "disabled",
                value: price,
                onChange: function onChange(e) {
                  return setPrice(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_add,
                onClick: function onClick() {
                  return addCustomer(CustomerID, name, surname, status, price);
                },
                children: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textConfirm,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  children: "Please Wait Admin confirm..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 53
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form_add1,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 25-30 Kg Temperature : HOT Time: 30 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: rendersome()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 25-30 Kg Temperature : Medium Time: 40 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [machButton('B005', false, 100), machButton('B006', false, 100), machButton('B007', false, 100), machButton('B008', false, 100)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 20-25 Kg Temperature : HOT Time: 45 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [machButton('C009', false, 80), machButton('C010', false, 80), machButton('C011', false, 80), machButton('C012', false, 80)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 20-25 Kg Temperature : Medium Time: 50 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [machButton('D013', false, 60), machButton('D014', false, 60), machButton('D015', false, 60), machButton('D016', false, 60)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 15-20 Kg Temperature : Medium Time: 55 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [machButton('E017', false, 50), machButton('E018', false, 50), machButton('E019', false, 50), machButton('E020', false, 50)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 10-15 Kg Temperature : Medium Time: 60 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [machButton('F021', false, 40), machButton('F022', false, 40), machButton('F023', false, 40), machButton('F024', false, 40)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
          children: showCustomers()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXIuanMiXSwibmFtZXMiOlsiQ3VzdG9tZXJQYWdlIiwidG9rZW4iLCJVUkwiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwiQ3VzdG9tZXJJRCIsInNldEN1c3RvbWVySUQiLCJuYW1lIiwic2V0TmFtZSIsInN1cm5hbWUiLCJzZXRTdXJuYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwicHJpY2UiLCJzZXRQcmljZSIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJtYWNoQnV0dG9uIiwic3R5bGVzIiwiYnV0dG9uX0lEIiwicmVuZGVyc29tZSIsIm1hcCIsIml0ZW0iLCJheGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJsaXN0IiwiYWRkQ3VzdG9tZXIiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInNob3dDdXN0b21lcnMiLCJsZW5ndGgiLCJpbmRleCIsImxpc3RJdGVtIiwiY29udGFpbmVyIiwiZm9udFRpdGxlIiwiZm9ybSIsImZvcm1fYWRkIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dCIsImJ1dHRvbl9hZGQiLCJ0ZXh0Q29uZmlybSIsImZvcm1fYWRkMSIsIndpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsWUFBVCxPQUFpQztBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUM5QyxNQUFNQyxHQUFHLEdBQUcsbUNBQVo7O0FBRDhDLGtCQUd0QkMsc0RBQVEsQ0FBQyxFQUFELENBSGM7QUFBQSxNQUd2Q0MsSUFIdUM7QUFBQSxNQUdqQ0MsT0FIaUM7O0FBQUEsbUJBSVpGLHNEQUFRLENBQUMsRUFBRCxDQUpJO0FBQUEsTUFJdkNHLFNB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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jdXN0b21lci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyUGFnZSh7IHRva2VuIH0pIHtcclxuICBjb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbGF1bmRyeVwiO1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbQ3VzdG9tZXJJRCwgc2V0Q3VzdG9tZXJJRF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3VybmFtZSwgc2V0U3VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJXYWl0aW5nXCIpO1xyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBnZXRDdXN0b21lcnMoKTtcclxuICAgIH0pKClcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG1hY2hCdXR0b24gPSAobmFtZSwgc3RhdHVzLCBwcmljZSkgPT4ge1xyXG4gICAgcmV0dXJuICg8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gZGlzYWJsZWQ9e3N0YXR1c30gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKG5hbWUpOyBzZXRQcmljZShwcmljZSkgfX0+IHtuYW1lfTwvYnV0dG9uPilcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlcnNvbWUgPSAoKSA9PiB7XHJcbiAgICAvLyBpZiAoY3VzdG9tZXJzICYmIGN1c3RvbWVycy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBjdXN0b21lcnMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IGRpc2FibGVkPXt0cnVlfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoaXRlbS5DdXN0b21lcklEKTsgc2V0UHJpY2UoaXRlbS5wcmljZSkgfX0+IHtpdGVtLkN1c3RvbWVySUR9PC9idXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgICAvLyBtYWNoQnV0dG9uKGl0ZW0uQ3VzdG9tZXJJRCwgZmFsc2UsIGl0ZW0ucHJpY2UpXHJcbiAgICApXHJcbiAgICAvLyB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q3VzdG9tZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpO1xyXG4gICAgc2V0Q3VzdG9tZXJzKHJlc3VsdC5kYXRhLmxpc3QpO1xyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRDdXN0b21lciA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCwge1xyXG4gICAgICBDdXN0b21lcklELFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBzdXJuYW1lLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHByaWNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgZ2V0Q3VzdG9tZXJzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0N1c3RvbWVycyA9ICgpID0+IHtcclxuICAgIGlmIChjdXN0b21lcnMgJiYgY3VzdG9tZXJzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gY3VzdG9tZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+Q3VzdG9tZXJJRDo8L2I+IHtpdGVtLkN1c3RvbWVySUR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+TmFtZTo8L2I+IHtpdGVtLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+U3VybmFtZTo8L2I+IHtpdGVtLnN1cm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PGI+U3RhdHVzOjwvYj4ge2l0ZW0uc3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxiPlByaWNlOjwvYj4ge2l0ZW0ucHJpY2V9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkN1c3RvbWVyPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPVwiL2xhdW5kcnkucG5nXCJcclxuICAgICAgICAgIGFsdD1cIlBpY3R1cmVcIlxyXG4gICAgICAgICAgd2lkdGg9ezkwMH1cclxuICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA1MDBweCkgMTAwcHhcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9udFRpdGxlfT48aDE+Rm9yIEN1c3RvbWVyIEFkZCBEYXRhIDwvaDE+PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fYWRkfT5cclxuICAgICAgICAgICAgICAgIDxoMj5BZGQgeW91ciBEYXRhPC9oMj5cclxuICAgICAgICAgICAgICAgIEN1c3RvbWVySUQ6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIkN1c3RvbWVySURcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Q3VzdG9tZXJJRH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXN0b21lcklEKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgU3VybmFtZTpcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgU3RhdHVzOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIldhaXRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIFByaWNlOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fYWRkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRDdXN0b21lcihDdXN0b21lcklELCBuYW1lLCBzdXJuYW1lLCBzdGF0dXMsIHByaWNlKX0+XHJcbiAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRDb25maXJtfT48aDU+UGxlYXNlIFdhaXQgQWRtaW4gY29uZmlybS4uLjwvaDU+IDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2FkZDF9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lnaHR9PjxoMj5XaWdodDogMjUtMzAgS2cgVGVtcGVyYXR1cmUgOiBIT1QgVGltZTogMzAgTWludXRlPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3JlbmRlcnNvbWUoKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXN0b21lcnMpXHJcbiAgICAgICAgICAgICAgICAgIGN1c3RvbWVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+SGVsbG8sIHtpdGVtfSBmcm9tIHtpbmRleH0hPC9wPlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfSAqL31cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHttYWNoQnV0dG9uKCdBMDAxJywgZmFsc2UsIDE1MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignQTAwMicsIGZhbHNlLCAxNTApfVxyXG4gICAgICAgICAgICAgICAge21hY2hCdXR0b24oJ0EwMDMnLCBmYWxzZSwgMTUwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdBMDA0JywgZmFsc2UsIDE1MCl9ICovfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfVxyXG4gICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiQTAwMVwiKTsgc2V0UHJpY2UoMTUwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgQTAwMVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJBMDAyXCIpOyBzZXRQcmljZSgxNTApIH19PlxyXG4gICAgICAgICAgICAgICAgICBBMDAyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkEwMDNcIik7IHNldFByaWNlKDE1MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEEwMDNcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiQTAwNFwiKTsgc2V0UHJpY2UoMTUwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgQTAwNFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aWdodH0+PGgyPldpZ2h0OiAyNS0zMCBLZyBUZW1wZXJhdHVyZSA6IE1lZGl1bSBUaW1lOiA0MCBNaW51dGU8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignQjAwNScsIGZhbHNlLCAxMDApfVxyXG4gICAgICAgICAgICAgICAge21hY2hCdXR0b24oJ0IwMDYnLCBmYWxzZSwgMTAwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdCMDA3JywgZmFsc2UsIDEwMCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignQjAwOCcsIGZhbHNlLCAxMDApfVxyXG4gICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJCMDA1XCIpOyBzZXRQcmljZSgxMDApIH19PlxyXG4gICAgICAgICAgICAgICAgICBCMDA1XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkIwMDZcIik7IHNldFByaWNlKDEwMCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEIwMDZcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiQjAwN1wiKTsgc2V0UHJpY2UoMTAwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgQjAwN1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJCMDA4XCIpOyBzZXRQcmljZSgxMDApIH19PlxyXG4gICAgICAgICAgICAgICAgICBCMDA4XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDIwLTI1IEtnIFRlbXBlcmF0dXJlIDogSE9UIFRpbWU6IDQ1IE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdDMDA5JywgZmFsc2UsIDgwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdDMDEwJywgZmFsc2UsIDgwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdDMDExJywgZmFsc2UsIDgwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdDMDEyJywgZmFsc2UsIDgwKX1cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiQzAwOVwiKTsgc2V0UHJpY2UoODApIH19PlxyXG4gICAgICAgICAgICAgICAgICBDMDA5XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkMwMTBcIik7IHNldFByaWNlKDgwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgQTAxMFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJDMDExXCIpOyBzZXRQcmljZSg4MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEMwMTFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiQzAxMlwiKTsgc2V0UHJpY2UoODApIH19PlxyXG4gICAgICAgICAgICAgICAgICBDMDEyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDIwLTI1IEtnIFRlbXBlcmF0dXJlIDogTWVkaXVtIFRpbWU6IDUwIE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdEMDEzJywgZmFsc2UsIDYwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdEMDE0JywgZmFsc2UsIDYwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdEMDE1JywgZmFsc2UsIDYwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdEMDE2JywgZmFsc2UsIDYwKX1cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiRDAxM1wiKTsgc2V0UHJpY2UoNjApIH19PlxyXG4gICAgICAgICAgICAgICAgICBEMDEzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkQwMTRcIik7IHNldFByaWNlKDYwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgRDAxNFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJEMDE1XCIpOyBzZXRQcmljZSg2MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEQwMTVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiRDAxNlwiKTsgc2V0UHJpY2UoNjApIH19PlxyXG4gICAgICAgICAgICAgICAgICBEMDE2XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDE1LTIwIEtnIFRlbXBlcmF0dXJlIDogTWVkaXVtIFRpbWU6IDU1IE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdFMDE3JywgZmFsc2UsIDUwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdFMDE4JywgZmFsc2UsIDUwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdFMDE5JywgZmFsc2UsIDUwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdFMDIwJywgZmFsc2UsIDUwKX1cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiRTAxN1wiKTsgc2V0UHJpY2UoNTApIH19PlxyXG4gICAgICAgICAgICAgICAgICBFMDE3XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkUwMThcIik7IHNldFByaWNlKDUwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgRTAxOFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJFMDE5XCIpOyBzZXRQcmljZSg1MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEUwMTlcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiRTAyMFwiKTsgc2V0UHJpY2UoNTApIH19PlxyXG4gICAgICAgICAgICAgICAgICBFMDIwXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDEwLTE1IEtnIFRlbXBlcmF0dXJlIDogTWVkaXVtIFRpbWU6IDYwIE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdGMDIxJywgZmFsc2UsIDQwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdGMDIyJywgZmFsc2UsIDQwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdGMDIzJywgZmFsc2UsIDQwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdGMDI0JywgZmFsc2UsIDQwKX1cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiRjAyMVwiKTsgc2V0UHJpY2UoNDApIH19PlxyXG4gICAgICAgICAgICAgICAgICBGMDIxXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkYwMjJcIik7IHNldFByaWNlKDQwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgRjAyMlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJGMDIzXCIpOyBzZXRQcmljZSg0MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEYwMjNcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiRjAyNFwiKTsgc2V0UHJpY2UoNDApIH19PlxyXG4gICAgICAgICAgICAgICAgICBGMDI0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+e3Nob3dDdXN0b21lcnMoKX08L2Rpdj5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=