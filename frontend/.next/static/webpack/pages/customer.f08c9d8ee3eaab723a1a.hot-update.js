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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/customer.module.css */ "./styles/customer.module.css");
/* harmony import */ var _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\sawalee\\Desktop\\MiniProject\\frontend\\pages\\customer.js",
    _s = $RefreshSig$();




 //import styles from "../styles/admin.module.css";



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
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(URL);

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
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(URL, {
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
          className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.listItem,
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
        src: "/laundry.png",
        alt: "Picture",
        width: 900,
        height: 200,
        sizes: "(max-width: 500px) 100px"
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
      className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {
          src: "/customer.png",
          alt: "Picture",
          width: 500,
          height: 80
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.form,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.form_add,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Add your Data"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
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
                lineNumber: 87,
                columnNumber: 17
              }, this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "name",
                onChange: function onChange(e) {
                  return setName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this), "Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "surname",
                onChange: function onChange(e) {
                  return setSurname(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, this), "Status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.text,
                type: "text",
                name: "status",
                disabled: "disabled",
                value: "Waiting",
                onChange: function onChange(e) {
                  return setStatus(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
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
                lineNumber: 115,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_add,
                onClick: function onClick() {
                  return addCustomer(CustomerID, name, surname, status, price);
                },
                children: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textConfirm,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  children: "Please Wait Admin confirm..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 53
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.form_add1,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 25-30 Kg Temperature : HOT Time: 30 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("A001");
                  setPrice(150);
                },
                children: "A001"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("A002");
                  setPrice(150);
                },
                children: "A002"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("A003");
                  setPrice(150);
                },
                children: "A003"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("A004");
                  setPrice(150);
                },
                children: "A004"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 25-30 Kg Temperature : Medium Time: 40 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("B005");
                  setPrice(100);
                },
                children: "B005"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("B006");
                  setPrice(100);
                },
                children: "B006"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("B007");
                  setPrice(100);
                },
                children: "B007"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("B008");
                  setPrice(100);
                },
                children: "B008"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 20-25 Kg Temperature : HOT Time: 45 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("C009");
                  setPrice(80);
                },
                children: "C009"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("C010");
                  setPrice(80);
                },
                children: "A010"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("C011");
                  setPrice(80);
                },
                children: "C011"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("C012");
                  setPrice(80);
                },
                children: "C012"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 20-25 Kg Temperature : Medium Time: 50 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("D013");
                  setPrice(60);
                },
                children: "D013"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("D014");
                  setPrice(60);
                },
                children: "D014"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("D015");
                  setPrice(60);
                },
                children: "D015"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("D016");
                  setPrice(60);
                },
                children: "D016"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 15-20 Kg Temperature : Medium Time: 55 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("E017");
                  setPrice(50);
                },
                children: "E017"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("E018");
                  setPrice(50);
                },
                children: "E018"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("E019");
                  setPrice(50);
                },
                children: "E019"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("E020");
                  setPrice(50);
                },
                children: "E020"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 10-15 Kg Temperature : Medium Time: 60 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("F021");
                  setPrice(40);
                },
                children: "F021"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("F022");
                  setPrice(40);
                },
                children: "F022"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("F023");
                  setPrice(40);
                },
                children: "F023"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_ID,
                onClick: function onClick() {
                  setCustomerID("F024");
                  setPrice(40);
                },
                children: "F024"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
          children: showCustomers()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXIuanMiXSwibmFtZXMiOlsiQ3VzdG9tZXJQYWdlIiwidG9rZW4iLCJVUkwiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwiQ3VzdG9tZXJJRCIsInNldEN1c3RvbWVySUQiLCJuYW1lIiwic2V0TmFtZSIsInN1cm5hbWUiLCJzZXRTdXJuYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwicHJpY2UiLCJzZXRQcmljZSIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJheGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJsaXN0IiwiYWRkQ3VzdG9tZXIiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInNob3dDdXN0b21lcnMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImNvbnRhaW5lciIsImZvcm0iLCJmb3JtX2FkZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHQiLCJidXR0b25fYWRkIiwidGV4dENvbmZpcm0iLCJmb3JtX2FkZDEiLCJ3aWdodCIsImJ1dHRvbl9JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxZQUFULE9BQWlDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzVDLE1BQU1DLEdBQUcsR0FBRyxtQ0FBWjs7QUFENEMsa0JBR3BCQyxzREFBUSxDQUFDLEVBQUQsQ0FIWTtBQUFBLE1BR3JDQyxJQUhxQztBQUFBLE1BRy9CQyxPQUgrQjs7QUFBQSxtQkFJVkYsc0RBQVEsQ0FBQyxFQUFELENBSkU7QUFBQSxNQUlyQ0csU0FKcUM7QUFBQSxNQUkxQkMsWUFKMEI7O0FBQUEsbUJBS1JKLHNE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QUE7QUFBQTtBQUFBLG9CQTdFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRixlQTZKRTtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRW1CLGtFQUFNLENBQUNWLElBQXZCO0FBQUEsb0JBQThCSyxhQUFhO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0pGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEtIOztHQWpPdUIvQixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2N1c3RvbWVyLmYwOGM5ZDhlZTNlYWFiNzIzYTFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnIFxyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZScgXHJcbi8vaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2FkbWluLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2N1c3RvbWVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21lclBhZ2UoeyB0b2tlbiB9KSB7XHJcbiAgICBjb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbGF1bmRyeVwiO1xyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtjdXN0b21lcnMsIHNldEN1c3RvbWVyc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbQ3VzdG9tZXJJRCwgc2V0Q3VzdG9tZXJJRF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3N1cm5hbWUsIHNldFN1cm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJXYWl0aW5nXCIpO1xyXG4gICAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0Q3VzdG9tZXJzKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgXHJcbiAgICBjb25zdCBnZXRDdXN0b21lcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoVVJMKTtcclxuICAgICAgc2V0Q3VzdG9tZXJzKHJlc3VsdC5kYXRhLmxpc3QpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGFkZEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChVUkwsIHtcclxuICAgICAgICBDdXN0b21lcklELFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgc3VybmFtZSxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgcHJpY2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICBnZXRDdXN0b21lcnMoKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBzaG93Q3VzdG9tZXJzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoY3VzdG9tZXJzICYmIGN1c3RvbWVycy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gY3VzdG9tZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXY+PGI+Q3VzdG9tZXJJRDo8L2I+IHtpdGVtLkN1c3RvbWVySUR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48Yj5OYW1lOjwvYj4ge2l0ZW0ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjxiPlN1cm5hbWU6PC9iPiB7aXRlbS5zdXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PGI+U3RhdHVzOjwvYj4ge2l0ZW0uc3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PGI+UHJpY2U6PC9iPiB7aXRlbS5wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9sYXVuZHJ5LnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlBpY3R1cmVcIlxyXG4gICAgICAgICAgICB3aWR0aD17OTAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA1MDBweCkgMTAwcHhcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+ICAgICAgICBcclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgIHsvKiA8aDE+Li4uLi4uLi4uLiBGb3IgQ3VzdG9tZXIgQWRkIERhdGEgLi4uLi4uLi4uLjwvaDE+ICovfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2N1c3RvbWVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezgwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fYWRkfT5cclxuICAgICAgICAgICAgICAgIDxoMj5BZGQgeW91ciBEYXRhPC9oMj5cclxuICAgICAgICAgICAgICAgIEN1c3RvbWVySUQ6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIkN1c3RvbWVySURcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtDdXN0b21lcklEfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1c3RvbWVySUQoZS50YXJnZXQudmFsdWUpfT4gIFxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIFN1cm5hbWU6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VybmFtZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIFN0YXR1czpcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWUgPVwiV2FpdGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdHVzKGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgUHJpY2U6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfT4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2FkZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkQ3VzdG9tZXIoQ3VzdG9tZXJJRCwgbmFtZSwgc3VybmFtZSwgc3RhdHVzLCBwcmljZSl9PlxyXG4gICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Q29uZmlybX0+PGg1PlBsZWFzZSBXYWl0IEFkbWluIGNvbmZpcm0uLi48L2g1PiA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2FkZDF9PiBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDI1LTMwIEtnIFRlbXBlcmF0dXJlIDogSE9UIFRpbWU6IDMwIE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkEwMDFcIik7c2V0UHJpY2UoMTUwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQTAwMVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJBMDAyXCIpO3NldFByaWNlKDE1MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEwMDJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQTAwM1wiKTtzZXRQcmljZSgxNTApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBMDAzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkEwMDRcIik7c2V0UHJpY2UoMTUwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQTAwNFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aWdodH0+PGgyPldpZ2h0OiAyNS0zMCBLZyBUZW1wZXJhdHVyZSA6IE1lZGl1bSBUaW1lOiA0MCBNaW51dGU8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJCMDA1XCIpO3NldFByaWNlKDEwMCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEIwMDVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQjAwNlwiKTtzZXRQcmljZSgxMDApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCMDA2XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkIwMDdcIik7c2V0UHJpY2UoMTAwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQjAwN1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJCMDA4XCIpO3NldFByaWNlKDEwMCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEIwMDhcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lnaHR9PjxoMj5XaWdodDogMjAtMjUgS2cgVGVtcGVyYXR1cmUgOiBIT1QgVGltZTogNDUgTWludXRlPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQzAwOVwiKTtzZXRQcmljZSg4MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEMwMDlcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQzAxMFwiKTtzZXRQcmljZSg4MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEwMTBcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQzAxMVwiKTtzZXRQcmljZSg4MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEMwMTFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQzAxMlwiKTtzZXRQcmljZSg4MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEMwMTJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lnaHR9PjxoMj5XaWdodDogMjAtMjUgS2cgVGVtcGVyYXR1cmUgOiBNZWRpdW0gVGltZTogNTAgTWludXRlPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiRDAxM1wiKTtzZXRQcmljZSg2MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEQwMTNcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiRDAxNFwiKTtzZXRQcmljZSg2MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEQwMTRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiRDAxNVwiKTtzZXRQcmljZSg2MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEQwMTVcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiRDAxNlwiKTtzZXRQcmljZSg2MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEQwMTZcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lnaHR9PjxoMj5XaWdodDogMTUtMjAgS2cgVGVtcGVyYXR1cmUgOiBNZWRpdW0gVGltZTogNTUgTWludXRlPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiRTAxN1wiKTtzZXRQcmljZSg1MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEUwMTdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiRTAxOFwiKTtzZXRQcmljZSg1MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEUwMThcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiRTAxOVwiKTtzZXRQcmljZSg1MCl9ICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFMDE5XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkUwMjBcIik7c2V0UHJpY2UoNTApfSAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRTAyMFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aWdodH0+PGgyPldpZ2h0OiAxMC0xNSBLZyBUZW1wZXJhdHVyZSA6IE1lZGl1bSBUaW1lOiA2MCBNaW51dGU8L2gyPjwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiRjAyMVwiKTtzZXRQcmljZSg0MCl9ICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGMDIxXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkYwMjJcIik7c2V0UHJpY2UoNDApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGMDIyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkYwMjNcIik7c2V0UHJpY2UoNDApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGMDIzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkYwMjRcIik7c2V0UHJpY2UoNDApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGMDI0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57c2hvd0N1c3RvbWVycygpfTwvZGl2PlxyXG4gICAgICAgICAgPC90cj4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICk7ICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9rZW46IHJlcS5jb29raWVzLnRva2VuIHx8IFwiXCIgfSB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=