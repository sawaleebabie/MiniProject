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
        className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.fontTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "For Customer Add Data "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
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
                lineNumber: 78,
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
                lineNumber: 80,
                columnNumber: 17
              }, this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "name",
                onChange: function onChange(e) {
                  return setName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, this), "Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "surname",
                onChange: function onChange(e) {
                  return setSurname(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
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
                lineNumber: 100,
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
                lineNumber: 108,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_add,
                onClick: function onClick() {
                  return addCustomer(CustomerID, name, surname, status, price);
                },
                children: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.textConfirm,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  children: "Please Wait Admin confirm..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 53
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.form_add1,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 25-30 Kg Temperature : HOT Time: 30 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
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
                lineNumber: 126,
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
                lineNumber: 129,
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
                lineNumber: 132,
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
                lineNumber: 135,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 25-30 Kg Temperature : Medium Time: 40 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
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
                lineNumber: 141,
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
                lineNumber: 144,
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
                lineNumber: 147,
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
                lineNumber: 150,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 20-25 Kg Temperature : HOT Time: 45 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
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
                lineNumber: 156,
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
                lineNumber: 159,
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
                lineNumber: 162,
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
                lineNumber: 165,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 20-25 Kg Temperature : Medium Time: 50 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
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
                lineNumber: 171,
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
                lineNumber: 174,
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
                lineNumber: 177,
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
                lineNumber: 180,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 15-20 Kg Temperature : Medium Time: 55 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
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
                lineNumber: 186,
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
                lineNumber: 189,
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
                lineNumber: 192,
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
                lineNumber: 195,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 10-15 Kg Temperature : Medium Time: 60 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 47
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
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
                lineNumber: 201,
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
                lineNumber: 204,
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
                lineNumber: 207,
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
                lineNumber: 210,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
          children: showCustomers()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXIuanMiXSwibmFtZXMiOlsiQ3VzdG9tZXJQYWdlIiwidG9rZW4iLCJVUkwiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwiQ3VzdG9tZXJJRCIsInNldEN1c3RvbWVySUQiLCJuYW1lIiwic2V0TmFtZSIsInN1cm5hbWUiLCJzZXRTdXJuYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwicHJpY2UiLCJzZXRQcmljZSIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJheGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJsaXN0IiwiYWRkQ3VzdG9tZXIiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInNob3dDdXN0b21lcnMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImNvbnRhaW5lciIsImZvbnRUaXRsZSIsImZvcm0iLCJmb3JtX2FkZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHQiLCJidXR0b25fYWRkIiwidGV4dENvbmZpcm0iLCJmb3JtX2FkZDEiLCJ3aWdodCIsImJ1dHRvbl9JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxZQUFULE9BQWlDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQzVDLE1BQU1DLEdBQUcsR0FBRyxtQ0FBWjs7QUFENEMsa0JBR3BCQyxzREFBUSxDQUFDLEVBQUQsQ0FIWTtBQUFBLE1BR3JDQyxJQUhxQztBQUFBLE1BRy9CQyxPQUgrQjs7QUFBQSxtQkFJVkYsc0RBQVEsQ0FBQyxFQUFELENBSkU7QUFBQSxNQUlyQ0csU0FKcUM7QUFBQSxNQUkxQkMsWUFKMEI7O0FB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O0FBQUE7QUFBQSxrQkFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBc0pFO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFbUIsa0VBQU0sQ0FBQ1YsSUFBdkI7QUFBQSxvQkFBOEJLLGFBQWE7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0SkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1S0g7O0dBMU51Qi9CLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3VzdG9tZXIuM2FkMWQyOTE5NjBkOTBmYmU1ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCcgXHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJyBcclxuLy9pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYWRtaW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY3VzdG9tZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyUGFnZSh7IHRva2VuIH0pIHtcclxuICAgIGNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sYXVuZHJ5XCI7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtDdXN0b21lcklELCBzZXRDdXN0b21lcklEXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3VybmFtZSwgc2V0U3VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIldhaXRpbmdcIik7XHJcbiAgICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBnZXRDdXN0b21lcnMoKTtcclxuICAgIH0sIFtdKTtcclxuICBcclxuICAgIGNvbnN0IGdldEN1c3RvbWVycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChVUkwpO1xyXG4gICAgICBzZXRDdXN0b21lcnMocmVzdWx0LmRhdGEubGlzdCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgYWRkQ3VzdG9tZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCwge1xyXG4gICAgICAgIEN1c3RvbWVySUQsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBzdXJuYW1lLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBwcmljZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIGdldEN1c3RvbWVycygpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IHNob3dDdXN0b21lcnMgPSAoKSA9PiB7XHJcbiAgICAgIGlmIChjdXN0b21lcnMgJiYgY3VzdG9tZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBjdXN0b21lcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGRpdj48Yj5DdXN0b21lcklEOjwvYj4ge2l0ZW0uQ3VzdG9tZXJJRH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjxiPk5hbWU6PC9iPiB7aXRlbS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PGI+U3VybmFtZTo8L2I+IHtpdGVtLnN1cm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48Yj5TdGF0dXM6PC9iPiB7aXRlbS5zdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48Yj5QcmljZTo8L2I+IHtpdGVtLnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2xhdW5kcnkucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwiUGljdHVyZVwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs5MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDUwMHB4KSAxMDBweFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT4gICAgICAgIFxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb250VGl0bGV9PjxoMT5Gb3IgQ3VzdG9tZXIgQWRkIERhdGEgPC9oMT48L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2FkZH0+XHJcbiAgICAgICAgICAgICAgICA8aDI+QWRkIHlvdXIgRGF0YTwvaDI+XHJcbiAgICAgICAgICAgICAgICBDdXN0b21lcklEOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJDdXN0b21lcklEXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Q3VzdG9tZXJJRH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXN0b21lcklEKGUudGFyZ2V0LnZhbHVlKX0+ICBcclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICBOYW1lOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICBTdXJuYW1lOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN1cm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN1cm5hbWUoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICBTdGF0dXM6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID1cIldhaXRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIFByaWNlOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX0+ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9hZGR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEN1c3RvbWVyKEN1c3RvbWVySUQsIG5hbWUsIHN1cm5hbWUsIHN0YXR1cywgcHJpY2UpfT5cclxuICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dENvbmZpcm19PjxoNT5QbGVhc2UgV2FpdCBBZG1pbiBjb25maXJtLi4uPC9oNT4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGQxfT4gXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aWdodH0+PGgyPldpZ2h0OiAyNS0zMCBLZyBUZW1wZXJhdHVyZSA6IEhPVCBUaW1lOiAzMCBNaW51dGU8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJBMDAxXCIpO3NldFByaWNlKDE1MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEwMDFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQTAwMlwiKTtzZXRQcmljZSgxNTApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBMDAyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkEwMDNcIik7c2V0UHJpY2UoMTUwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQTAwM1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJBMDA0XCIpO3NldFByaWNlKDE1MCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEEwMDRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lnaHR9PjxoMj5XaWdodDogMjUtMzAgS2cgVGVtcGVyYXR1cmUgOiBNZWRpdW0gVGltZTogNDAgTWludXRlPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQjAwNVwiKTtzZXRQcmljZSgxMDApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCMDA1XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkIwMDZcIik7c2V0UHJpY2UoMTAwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQjAwNlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJCMDA3XCIpO3NldFByaWNlKDEwMCl9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEIwMDdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz0geygpID0+IHtzZXRDdXN0b21lcklEKFwiQjAwOFwiKTtzZXRQcmljZSgxMDApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCMDA4XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDIwLTI1IEtnIFRlbXBlcmF0dXJlIDogSE9UIFRpbWU6IDQ1IE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkMwMDlcIik7c2V0UHJpY2UoODApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDMDA5XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkMwMTBcIik7c2V0UHJpY2UoODApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBMDEwXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkMwMTFcIik7c2V0UHJpY2UoODApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDMDExXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkMwMTJcIik7c2V0UHJpY2UoODApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDMDEyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDIwLTI1IEtnIFRlbXBlcmF0dXJlIDogTWVkaXVtIFRpbWU6IDUwIE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkQwMTNcIik7c2V0UHJpY2UoNjApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEMDEzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkQwMTRcIik7c2V0UHJpY2UoNjApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEMDE0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkQwMTVcIik7c2V0UHJpY2UoNjApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEMDE1XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkQwMTZcIik7c2V0UHJpY2UoNjApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEMDE2XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDE1LTIwIEtnIFRlbXBlcmF0dXJlIDogTWVkaXVtIFRpbWU6IDU1IE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkUwMTdcIik7c2V0UHJpY2UoNTApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFMDE3XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkUwMThcIik7c2V0UHJpY2UoNTApfSB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFMDE4XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkUwMTlcIik7c2V0UHJpY2UoNTApfSAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRTAxOVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJFMDIwXCIpO3NldFByaWNlKDUwKX0gIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEUwMjBcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lnaHR9PjxoMj5XaWdodDogMTAtMTUgS2cgVGVtcGVyYXR1cmUgOiBNZWRpdW0gVGltZTogNjAgTWludXRlPC9oMj48L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9IHsoKSA9PiB7c2V0Q3VzdG9tZXJJRChcIkYwMjFcIik7c2V0UHJpY2UoNDApfSAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRjAyMVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJGMDIyXCIpO3NldFByaWNlKDQwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRjAyMlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJGMDIzXCIpO3NldFByaWNlKDQwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRjAyM1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPSB7KCkgPT4ge3NldEN1c3RvbWVySUQoXCJGMDI0XCIpO3NldFByaWNlKDQwKX0gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRjAyNFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+e3Nob3dDdXN0b21lcnMoKX08L2Rpdj5cclxuICAgICAgICAgIDwvdHI+ICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICApOyAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIHJldHVybiB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB8fCBcIlwiIH0gfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9