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
          className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.listItem,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "CustomerID:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 20
            }, _this), " ", item.CustomerID]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 20
            }, _this), " ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Surname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 20
            }, _this), " ", item.surname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 20
            }, _this), " ", item.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Price:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 20
            }, _this), " ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 16
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Customer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
        src: "/laundry.png",
        alt: "Picture",
        width: 900,
        height: 200,
        sizes: "(max-width: 500px) 100px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.fontTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "For Customer Add Data "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
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
                lineNumber: 81,
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
                lineNumber: 83,
                columnNumber: 17
              }, this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "name",
                onChange: function onChange(e) {
                  return setName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, this), "Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "surname",
                onChange: function onChange(e) {
                  return setSurname(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
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
                lineNumber: 103,
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
                lineNumber: 111,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_add,
                onClick: function onClick() {
                  return addCustomer(CustomerID, name, surname, status, price);
                },
                children: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textConfirm,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  children: "Please Wait Admin confirm..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 53
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form_add1,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 25-30 Kg Temperature : HOT Time: 30 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("A001");
                  setPrice(150);
                },
                children: "A001"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("A002");
                  setPrice(150);
                },
                children: "A002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("A003");
                  setPrice(150);
                },
                children: "A003"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("A004");
                  setPrice(150);
                },
                children: "A004"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 25-30 Kg Temperature : Medium Time: 40 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("B005");
                  setPrice(100);
                },
                children: "B005"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("B006");
                  setPrice(100);
                },
                children: "B006"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("B007");
                  setPrice(100);
                },
                children: "B007"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("B008");
                  setPrice(100);
                },
                children: "B008"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 20-25 Kg Temperature : HOT Time: 45 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("C009");
                  setPrice(80);
                },
                children: "C009"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("C010");
                  setPrice(80);
                },
                children: "A010"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("C011");
                  setPrice(80);
                },
                children: "C011"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("C012");
                  setPrice(80);
                },
                children: "C012"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 20-25 Kg Temperature : Medium Time: 50 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("D013");
                  setPrice(60);
                },
                children: "D013"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("D014");
                  setPrice(60);
                },
                children: "D014"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("D015");
                  setPrice(60);
                },
                children: "D015"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("D016");
                  setPrice(60);
                },
                children: "D016"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 15-20 Kg Temperature : Medium Time: 55 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("E017");
                  setPrice(50);
                },
                children: "E017"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("E018");
                  setPrice(50);
                },
                children: "E018"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("E019");
                  setPrice(50);
                },
                children: "E019"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("E020");
                  setPrice(50);
                },
                children: "E020"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 10-15 Kg Temperature : Medium Time: 60 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("F021");
                  setPrice(40);
                },
                children: "F021"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("F022");
                  setPrice(40);
                },
                children: "F022"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("F023");
                  setPrice(40);
                },
                children: "F023"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("F024");
                  setPrice(40);
                },
                children: "F024"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
          children: showCustomers()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXIuanMiXSwibmFtZXMiOlsiQ3VzdG9tZXJQYWdlIiwidG9rZW4iLCJVUkwiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwiQ3VzdG9tZXJJRCIsInNldEN1c3RvbWVySUQiLCJuYW1lIiwic2V0TmFtZSIsInN1cm5hbWUiLCJzZXRTdXJuYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwicHJpY2UiLCJzZXRQcmljZSIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJheGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJsaXN0IiwiYWRkQ3VzdG9tZXIiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInNob3dDdXN0b21lcnMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImNvbnRhaW5lciIsImZvbnRUaXRsZSIsImZvcm0iLCJmb3JtX2FkZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHQiLCJidXR0b25fYWRkIiwidGV4dENvbmZpcm0iLCJmb3JtX2FkZDEiLCJ3aWdodCIsImJ1dHRvbl9JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFlBQVQsT0FBaUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDNUMsTUFBTUMsR0FBRyxHQUFHLG1DQUFaOztBQUQ0QyxrQkFHcEJDLHNEQUFRLENBQUMsRUFBRCxDQUhZO0FBQUEsTUFHckNDLElBSHFDO0FBQUEsTUFHL0JDLE9BSCtCOztBQUFBLG1CQUlWRixzREFBUSxDQUFDLEVBQUQsQ0FKRTtBQUFBLE1BSXJDRyxTQUpxQztBQUFBLE1BSTFCQyxZQUowQjs7QUFBQSxtQkFLUkosc0RBQVEsQ0FBQyxFQUFELENBTEE7QUFBQSxNQUtyQ0ssVUFMcUM7QUFBQSxNQUt6QkMsYUFMeUI7O0FBQUEsbUJBTXBCTixzREFBUSxDQUFDLEVBQUQsQ0FOWTtBQUFBLE1BTXJDTyxJQU5xQztBQUFBLE1BTS9CQyxPQU4rQjs7QUFBQSxtQkFPZFIsc0RBQVEsQ0FBQyxFQUFELENBUE07QUFBQSxNQU9yQ1MsT0FQcUM7QUFBQSxNQU81QkMsVUFQNEI7O0FBQUEsbUJBUWhCVixzREFBUSxDQUFDLFNBQUQsQ0FSUTtBQUFBLE1BUXJDVyxNQVJxQztBQUFBLE1BUTdCQyxTQVI2Qjs7QUFBQSxtQkFTbEJaLHNEQUFRLENBQUMsQ0FBRCxDQVRVO0FBQUEsTUFTckNhLEtBVHFDO0FBQUEsTUFTOUJDLFFBVDhCOztBQUFBLG1CQVVaZCxzREFBUSxDQUFDLEVBQUQsQ0FWSTtBQUFBLE1BVXJDZSxRQVZxQztBQUFBLE1BVTNCQyxXQVYyQjs7QUFZNUNDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxnQkFBWTtBQUNiLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUEsWUFBWTtBQUFBLG1UQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0FDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVXJCLEdBQVYsQ0FEQTs7QUFBQTtBQUNmc0Isb0JBRGU7QUFFbkJqQiwwQkFBWSxDQUFDaUIsTUFBTSxDQUFDQyxJQUFQLENBQVlDLElBQWIsQ0FBWjs7QUFGbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkwsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFLQSxNQUFNTSxXQUFXO0FBQUEsbVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ0wsNENBQUssQ0FBQ00sSUFBTixDQUFXMUIsR0FBWCxFQUFnQjtBQUNqQ00sMEJBQVUsRUFBVkEsVUFEaUM7QUFFakNFLG9CQUFJLEVBQUpBLElBRmlDO0FBR2pDRSx1QkFBTyxFQUFQQSxPQUhpQztBQUlqQ0Usc0JBQU0sRUFBTkEsTUFKaUM7QUFLakNFLHFCQUFLLEVBQUxBO0FBTGlDLGVBQWhCLENBREQ7O0FBQUE7QUFDZFEsb0JBRGM7QUFRbEJLLHFCQUFPLENBQUNDLEdBQVIsQ0FBWU4sTUFBWjtBQUNBSCwwQkFBWTs7QUFUTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYTSxXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQVlBLE1BQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFJekIsU0FBUyxJQUFJQSxTQUFTLENBQUMwQixNQUEzQixFQUFtQztBQUNqQyxhQUFPMUIsU0FBUyxDQUFDMkIsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNwQyw0QkFDRTtBQUFLLG1CQUFTLEVBQUVDLGtFQUFNLENBQUNDLFFBQXZCO0FBQUEsa0NBQ0U7QUFBQSxvQ0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBTCxPQUF5QkgsSUFBSSxDQUFDMUIsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxvQ0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBTCxPQUFtQjBCLElBQUksQ0FBQ3hCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUEsb0NBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUwsT0FBc0J3QixJQUFJLENBQUN0QixPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFBLG9DQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFMLE9BQXFCc0IsSUFBSSxDQUFDcEIsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBQSxvQ0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBTCxPQUFvQm9CLElBQUksQ0FBQ2xCLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBLFdBQXNDbUIsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVNELE9BVk0sQ0FBUDtBQVdELEtBWkQsTUFZTztBQUNMLDBCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRDtBQUNGLEdBaEJEOztBQWtCQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBLDZCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsV0FBRyxFQUFDLGNBRE47QUFFRSxXQUFHLEVBQUMsU0FGTjtBQUdFLGFBQUssRUFBRSxHQUhUO0FBSUUsY0FBTSxFQUFFLEdBSlY7QUFLRSxhQUFLLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBYUU7QUFBSyxlQUFTLEVBQUVDLGtFQUFNLENBQUNFLFNBQXZCO0FBQUEsOEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFFRixrRUFBTSxDQUFDRyxTQUF2QjtBQUFBLCtCQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFJRTtBQUFLLGlCQUFTLEVBQUVILGtFQUFNLENBQUNJLElBQXZCO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDQTtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBRUosa0VBQU0sQ0FBQ0ssUUFBdkI7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERiw4QkFHRTtBQUNFLG9CQUFJLEVBQUMsTUFEUDtBQUVFLHdCQUFRLEVBQUMsVUFGWDtBQUdFLG9CQUFJLEVBQUMsWUFIUDtBQUlFLHFCQUFLLEVBQUlqQyxVQUpYO0FBS0Usd0JBQVEsRUFBRSxrQkFBQ2tDLENBQUQ7QUFBQSx5QkFBT2pDLGFBQWEsQ0FBQ2lDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUE7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLHdCQVdFO0FBQ0Usb0JBQUksRUFBQyxNQURQO0FBRUUsb0JBQUksRUFBQyxNQUZQO0FBR0Usd0JBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLHlCQUFPL0IsT0FBTyxDQUFDK0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYRiwyQkFpQkU7QUFDRSxvQkFBSSxFQUFDLE1BRFA7QUFFRSxvQkFBSSxFQUFDLFNBRlA7QUFHRSx3QkFBUSxFQUFFLGtCQUFDRixDQUFEO0FBQUEseUJBQU83QixVQUFVLENBQUM2QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFqQjtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkYsMEJBdUJFO0FBQU8seUJBQVMsRUFBRVIsa0VBQU0sQ0FBQ1MsSUFBekI7QUFDRSxvQkFBSSxFQUFDLE1BRFA7QUFFRSxvQkFBSSxFQUFDLFFBRlA7QUFHRSx3QkFBUSxFQUFDLFVBSFg7QUFJRSxxQkFBSyxFQUFFLFNBSlQ7QUFLRSx3QkFBUSxFQUFFLGtCQUFDSCxDQUFEO0FBQUEseUJBQU8zQixTQUFTLENBQUMyQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF2QkYseUJBK0JFO0FBQ0Usb0JBQUksRUFBQyxRQURQO0FBRUUsb0JBQUksRUFBQyxPQUZQO0FBR0Usd0JBQVEsRUFBQyxVQUhYO0FBSUUscUJBQUssRUFBSTVCLEtBSlg7QUFLRSx3QkFBUSxFQUFFLGtCQUFDMEIsQ0FBRDtBQUFBLHlCQUFPekIsUUFBUSxDQUFDeUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkEvQkYsZUFzQ0U7QUFBUSx5QkFBUyxFQUFFUixrRUFBTSxDQUFDVSxVQUExQjtBQUNFLHVCQUFPLEVBQUU7QUFBQSx5QkFBTW5CLFdBQVcsQ0FBQ25CLFVBQUQsRUFBYUUsSUFBYixFQUFtQkUsT0FBbkIsRUFBNEJFLE1BQTVCLEVBQW9DRSxLQUFwQyxDQUFqQjtBQUFBLGlCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXRDRixlQTBDRTtBQUFLLHlCQUFTLEVBQUVvQixrRUFBTSxDQUFDVyxXQUF2QjtBQUFBLHdDQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBZ0RFO0FBQUsscUJBQVMsRUFBRVgsa0VBQU0sQ0FBQ1ksU0FBdkI7QUFBQSxvQ0FDQTtBQUFLLHVCQUFTLEVBQUVaLGtFQUFNLENBQUNhLEtBQXZCO0FBQUEscUNBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsZUFFRTtBQUFBLHNDQUNFO0FBQVMseUJBQVMsRUFBRWIsa0VBQU0sQ0FBQ2MsU0FBM0I7QUFDQSx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxHQUFELENBQVI7QUFBYyxpQkFEckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFLRTtBQUFTLHlCQUFTLEVBQUVtQixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxHQUFELENBQVI7QUFBYyxpQkFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEYsZUFRRTtBQUFTLHlCQUFTLEVBQUVtQixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxHQUFELENBQVI7QUFBYyxpQkFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkYsZUFXRTtBQUFTLHlCQUFTLEVBQUVtQixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxHQUFELENBQVI7QUFBYyxpQkFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBaUJFO0FBQUssdUJBQVMsRUFBRW1CLGtFQUFNLENBQUNhLEtBQXZCO0FBQUEscUNBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBakJGLGVBa0JFO0FBQUEsc0NBQ0U7QUFBUyx5QkFBUyxFQUFFYixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxHQUFELENBQVI7QUFBYyxpQkFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUFTLHlCQUFTLEVBQUVtQixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxHQUFELENBQVI7QUFBYyxpQkFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkYsZUFPRTtBQUFTLHlCQUFTLEVBQUVtQixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxHQUFELENBQVI7QUFBYyxpQkFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEYsZUFVRTtBQUFTLHlCQUFTLEVBQUVtQixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxHQUFELENBQVI7QUFBYyxpQkFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWxCRixlQWdDRTtBQUFLLHVCQUFTLEVBQUVtQixrRUFBTSxDQUFDYSxLQUF2QjtBQUFBLHFDQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhDRixlQWlDRTtBQUFBLHNDQUNFO0FBQVMseUJBQVMsRUFBRWIsa0VBQU0sQ0FBQ2MsU0FBM0I7QUFBc0MsdUJBQU8sRUFBRyxtQkFBTTtBQUFDekMsK0JBQWEsQ0FBQyxNQUFELENBQWI7QUFBc0JRLDBCQUFRLENBQUMsRUFBRCxDQUFSO0FBQWEsaUJBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBUyx5QkFBUyxFQUFFbUIsa0VBQU0sQ0FBQ2MsU0FBM0I7QUFBc0MsdUJBQU8sRUFBRyxtQkFBTTtBQUFDekMsK0JBQWEsQ0FBQyxNQUFELENBQWI7QUFBc0JRLDBCQUFRLENBQUMsRUFBRCxDQUFSO0FBQWEsaUJBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLGVBT0U7QUFBUyx5QkFBUyxFQUFFbUIsa0VBQU0sQ0FBQ2MsU0FBM0I7QUFBc0MsdUJBQU8sRUFBRyxtQkFBTTtBQUFDekMsK0JBQWEsQ0FBQyxNQUFELENBQWI7QUFBc0JRLDBCQUFRLENBQUMsRUFBRCxDQUFSO0FBQWEsaUJBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGLGVBVUU7QUFBUyx5QkFBUyxFQUFFbUIsa0VBQU0sQ0FBQ2MsU0FBM0I7QUFBc0MsdUJBQU8sRUFBRyxtQkFBTTtBQUFDekMsK0JBQWEsQ0FBQyxNQUFELENBQWI7QUFBc0JRLDBCQUFRLENBQUMsRUFBRCxDQUFSO0FBQWEsaUJBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFqQ0YsZUErQ0U7QUFBSyx1QkFBUyxFQUFFbUIsa0VBQU0sQ0FBQ2EsS0FBdkI7QUFBQSxxQ0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkEvQ0YsZUFnREU7QUFBQSxzQ0FDRTtBQUFTLHlCQUFTLEVBQUViLGtFQUFNLENBQUNjLFNBQTNCO0FBQXNDLHVCQUFPLEVBQUcsbUJBQU07QUFBQ3pDLCtCQUFhLENBQUMsTUFBRCxDQUFiO0FBQXNCUSwwQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUFhLGlCQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUlFO0FBQVMseUJBQVMsRUFBRW1CLGtFQUFNLENBQUNjLFNBQTNCO0FBQXNDLHVCQUFPLEVBQUcsbUJBQU07QUFBQ3pDLCtCQUFhLENBQUMsTUFBRCxDQUFiO0FBQXNCUSwwQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUFhLGlCQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRixlQU9FO0FBQVMseUJBQVMsRUFBRW1CLGtFQUFNLENBQUNjLFNBQTNCO0FBQXNDLHVCQUFPLEVBQUcsbUJBQU07QUFBQ3pDLCtCQUFhLENBQUMsTUFBRCxDQUFiO0FBQXNCUSwwQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUFhLGlCQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQRixlQVVFO0FBQVMseUJBQVMsRUFBRW1CLGtFQUFNLENBQUNjLFNBQTNCO0FBQXNDLHVCQUFPLEVBQUcsbUJBQU07QUFBQ3pDLCtCQUFhLENBQUMsTUFBRCxDQUFiO0FBQXNCUSwwQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUFhLGlCQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaERGLGVBOERFO0FBQUssdUJBQVMsRUFBRW1CLGtFQUFNLENBQUNhLEtBQXZCO0FBQUEscUNBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBOURGLGVBK0RFO0FBQUEsc0NBQ0U7QUFBUyx5QkFBUyxFQUFFYixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxFQUFELENBQVI7QUFBYSxpQkFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUFTLHlCQUFTLEVBQUVtQixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxFQUFELENBQVI7QUFBYSxpQkFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkYsZUFPRTtBQUFTLHlCQUFTLEVBQUVtQixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxFQUFELENBQVI7QUFBYSxpQkFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEYsZUFVRTtBQUFTLHlCQUFTLEVBQUVtQixrRUFBTSxDQUFDYyxTQUEzQjtBQUFzQyx1QkFBTyxFQUFHLG1CQUFNO0FBQUN6QywrQkFBYSxDQUFDLE1BQUQsQ0FBYjtBQUFzQlEsMEJBQVEsQ0FBQyxFQUFELENBQVI7QUFBYSxpQkFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQS9ERixlQTZFRTtBQUFLLHVCQUFTLEVBQUVtQixrRUFBTSxDQUFDYSxLQUF2QjtBQUFBLHFDQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTdFRixlQThFRTtBQUFBLHNDQUNFO0FBQVMseUJBQVMsRUFBRWIsa0VBQU0sQ0FBQ2MsU0FBM0I7QUFBc0MsdUJBQU8sRUFBRyxtQkFBTTtBQUFDekMsK0JBQWEsQ0FBQyxNQUFELENBQWI7QUFBc0JRLDBCQUFRLENBQUMsRUFBRCxDQUFSO0FBQWEsaUJBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBUyx5QkFBUyxFQUFFbUIsa0VBQU0sQ0FBQ2MsU0FBM0I7QUFBc0MsdUJBQU8sRUFBRyxtQkFBTTtBQUFDekMsK0JBQWEsQ0FBQyxNQUFELENBQWI7QUFBc0JRLDBCQUFRLENBQUMsRUFBRCxDQUFSO0FBQWEsaUJBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLGVBT0U7QUFBUyx5QkFBUyxFQUFFbUIsa0VBQU0sQ0FBQ2MsU0FBM0I7QUFBc0MsdUJBQU8sRUFBRyxtQkFBTTtBQUFDekMsK0JBQWEsQ0FBQyxNQUFELENBQWI7QUFBc0JRLDBCQUFRLENBQUMsRUFBRCxDQUFSO0FBQWEsaUJBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGLGVBVUU7QUFBUyx5QkFBUyxFQUFFbUIsa0VBQU0sQ0FBQ2MsU0FBM0I7QUFBc0MsdUJBQU8sRUFBRyxtQkFBTTtBQUFDekMsK0JBQWEsQ0FBQyxNQUFELENBQWI7QUFBc0JRLDBCQUFRLENBQUMsRUFBRCxDQUFSO0FBQWEsaUJBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE5RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUF1SkU7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVtQixrRUFBTSxDQUFDVixJQUF2QjtBQUFBLG9CQUE4QkssYUFBYTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJLSDs7R0E5TnVCL0IsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b21lci44NDNlYjhlYTAyZDRjODg5MWY1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2N1c3RvbWVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZScgXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCcgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lclBhZ2UoeyB0b2tlbiB9KSB7XHJcbiAgICBjb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbGF1bmRyeVwiO1xyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbQ3VzdG9tZXJJRCwgc2V0Q3VzdG9tZXJJRF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N1cm5hbWUsIHNldFN1cm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJXYWl0aW5nXCIpO1xyXG4gICAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0Q3VzdG9tZXJzKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgXHJcbiAgICBjb25zdCBnZXRDdXN0b21lcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoVVJMKTtcclxuICAgICAgc2V0Q3VzdG9tZXJzKHJlc3VsdC5kYXRhLmxpc3QpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGFkZEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChVUkwsIHtcclxuICAgICAgICBDdXN0b21lcklELFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgc3VybmFtZSxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgcHJpY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICBnZXRDdXN0b21lcnMoKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBzaG93Q3VzdG9tZXJzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoY3VzdG9tZXJzICYmIGN1c3RvbWVycy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gY3VzdG9tZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXY+PGI+Q3VzdG9tZXJJRDo8L2I+IHtpdGVtLkN1c3RvbWVySUR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48Yj5OYW1lOjwvYj4ge2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjxiPlN1cm5hbWU6PC9iPiB7aXRlbS5zdXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PGI+U3RhdHVzOjwvYj4ge2l0ZW0uc3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PGI+UHJpY2U6PC9iPiB7aXRlbS5wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5DdXN0b21lcjwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2xhdW5kcnkucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwiUGljdHVyZVwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs5MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDUwMHB4KSAxMDBweFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT4gICAgICAgIFxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb250VGl0bGV9PjxoMT5Gb3IgQ3VzdG9tZXIgQWRkIERhdGEgPC9oMT48L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2FkZH0+XHJcbiAgICAgICAgICAgICAgICA8aDI+QWRkIHlvdXIgRGF0YTwvaDI+XHJcbiAgICAgICAgICAgICAgICBDdXN0b21lcklEOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJDdXN0b21lcklEXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Q3VzdG9tZXJJRH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXN0b21lcklEKGUudGFyZ2V0LnZhbHVlKX0+ICBcclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICBOYW1lOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICBTdXJuYW1lOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN1cm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN1cm5hbWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICBTdGF0dXM6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID1cIldhaXRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIFByaWNlOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX0+ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9hZGR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEN1c3RvbWVyKEN1c3RvbWVySUQsIG5hbWUsIHN1cm5hbWUsIHN0YXR1cywgcHJpY2UpfT5cclxuICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dENvbmZpcm19PjxoNT5QbGVhc2UgV2FpdCBBZG1pbiBjb25maXJtLi4uPC9oNT4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGQxfT4gXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aWdodH0+PGgyPldpZ2h0OiAyNS0zMCBLZyBUZW1wZXJhdHVyZSA6IEhPVCBUaW1lOiAzMCBNaW51dGU8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQTAwMVwiKTtzZXRQcmljZSgxNTApfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEwMDFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQTAwMlwiKTtzZXRQcmljZSgxNTApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBMDAyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkEwMDNcIik7c2V0UHJpY2UoMTUwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQTAwM1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJBMDA0XCIpO3NldFByaWNlKDE1MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEwMDRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lnaHR9PjxoMj5XaWdodDogMjUtMzAgS2cgVGVtcGVyYXR1cmUgOiBNZWRpdW0gVGltZTogNDAgTWludXRlPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQjAwNVwiKTtzZXRQcmljZSgxMDApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCMDA1XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkIwMDZcIik7c2V0UHJpY2UoMTAwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQjAwNlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJCMDA3XCIpO3NldFByaWNlKDEwMCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEIwMDdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQjAwOFwiKTtzZXRQcmljZSgxMDApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCMDA4XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDIwLTI1IEtnIFRlbXBlcmF0dXJlIDogSE9UIFRpbWU6IDQ1IE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkMwMDlcIik7c2V0UHJpY2UoODApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDMDA5XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkMwMTBcIik7c2V0UHJpY2UoODApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBMDEwXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkMwMTFcIik7c2V0UHJpY2UoODApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDMDExXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkMwMTJcIik7c2V0UHJpY2UoODApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDMDEyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDIwLTI1IEtnIFRlbXBlcmF0dXJlIDogTWVkaXVtIFRpbWU6IDUwIE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkQwMTNcIik7c2V0UHJpY2UoNjApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEMDEzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkQwMTRcIik7c2V0UHJpY2UoNjApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEMDE0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkQwMTVcIik7c2V0UHJpY2UoNjApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEMDE1XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkQwMTZcIik7c2V0UHJpY2UoNjApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEMDE2XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDE1LTIwIEtnIFRlbXBlcmF0dXJlIDogTWVkaXVtIFRpbWU6IDU1IE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkUwMTdcIik7c2V0UHJpY2UoNTApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFMDE3XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkUwMThcIik7c2V0UHJpY2UoNTApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFMDE4XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkUwMTlcIik7c2V0UHJpY2UoNTApfSAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRTAxOVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJFMDIwXCIpO3NldFByaWNlKDUwKX0gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEUwMjBcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lnaHR9PjxoMj5XaWdodDogMTAtMTUgS2cgVGVtcGVyYXR1cmUgOiBNZWRpdW0gVGltZTogNjAgTWludXRlPC9oMj48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkYwMjFcIik7c2V0UHJpY2UoNDApfSAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRjAyMVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJGMDIyXCIpO3NldFByaWNlKDQwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRjAyMlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJGMDIzXCIpO3NldFByaWNlKDQwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRjAyM1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJGMDI0XCIpO3NldFByaWNlKDQwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRjAyNFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+e3Nob3dDdXN0b21lcnMoKX08L2Rpdj5cclxuICAgICAgICAgIDwvdHI+ICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICApOyAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIHJldHVybiB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB8fCBcIlwiIH0gfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9