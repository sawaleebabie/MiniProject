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

  var Gm1 = ["A001", "A002", "A003", "A004"];
  var Gm2 = ["B005", "B006", "B007", "B008"];
  var Gm3 = ["C009", "C010", "C011", "C012"];
  var Gm4 = ["D013", "D014", "D015", "D016"];
  var Gm5 = ["E017", "E018", "E019", "E020"];
  var Gm6 = ["F021", "F022", "F023", "F024"];
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
      lineNumber: 33,
      columnNumber: 13
    }, _this);
  };

  var rendersome = function rendersome(Groupm) {
    return Groupm.map(function (name) {
      if (customers && customers.length) {
        var result = customers.find(function (ans) {
          return ans.CustomerID == name;
        });
        console.log(result);

        if (result == undefined) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_ID,
            onClick: function onClick() {
              setCustomerID(name);
              setPrice(100);
            },
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this);
        } else {
          /*#__PURE__*/
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            disabled: true,
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, _this);
        } //   return customers.map((item) => {
        //     console.log(name, item.CustomerID)
        //     if (name === item.CustomerID) {
        //       return (
        //         <button className={styles.button_ID} disabled={true} onClick={() => { setCustomerID(item.CustomerID); setPrice(item.price) }}> {item.CustomerID}</button>
        //       )
        //     } else {
        //       console.log(name)
        //     }
        //   }
        //   )

      } // return (
      //   <button className={styles.button_ID} disabled={true} onClick={() => { setCustomerID(item.CustomerID); setPrice(000) }}> {Groupm}</button>
      // );

    }); // if (customers && customers.length) {
    //   return customers.map((item) => {
    //     return (
    //       <button className={styles.button_ID} disabled={true} onClick={() => { setCustomerID(item.CustomerID); setPrice(item.price) }}> {item.CustomerID}</button>
    //     );
    //   }
    //   )
    // }
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
              lineNumber: 111,
              columnNumber: 18
            }, _this), " ", item.CustomerID]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Name:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 18
            }, _this), " ", item.name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Surname:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 18
            }, _this), " ", item.surname]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Status:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 18
            }, _this), " ", item.status]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Price:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 18
            }, _this), " ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this);
      });
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
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
        lineNumber: 127,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
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
        lineNumber: 130,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.fontTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "For Customer Add Data "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 43
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
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
                lineNumber: 146,
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
                lineNumber: 148,
                columnNumber: 17
              }, this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "name",
                onChange: function onChange(e) {
                  return setName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 17
              }, this), "Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "surname",
                onChange: function onChange(e) {
                  return setSurname(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
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
                lineNumber: 168,
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
                lineNumber: 176,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.button_add,
                onClick: function onClick() {
                  return addCustomer(CustomerID, name, surname, status, price);
                },
                children: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textConfirm,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  children: "Please Wait Admin confirm..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 53
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.form_add1,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 25-30 Kg Temperature : HOT Time: 30 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: rendersome(Gm1)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 25-30 Kg Temperature : Medium Time: 40 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [machButton('B005', false, 100), machButton('B006', false, 100), machButton('B007', false, 100), machButton('B008', false, 100)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 20-25 Kg Temperature : HOT Time: 45 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [machButton('C009', false, 80), machButton('C010', false, 80), machButton('C011', false, 80), machButton('C012', false, 80)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 20-25 Kg Temperature : Medium Time: 50 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [machButton('D013', false, 60), machButton('D014', false, 60), machButton('D015', false, 60), machButton('D016', false, 60)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 15-20 Kg Temperature : Medium Time: 55 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [machButton('E017', false, 50), machButton('E018', false, 50), machButton('E019', false, 50), machButton('E020', false, 50)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.wight,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "Wight: 10-15 Kg Temperature : Medium Time: 60 Minute"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [machButton('F021', false, 40), machButton('F022', false, 40), machButton('F023', false, 40), machButton('F024', false, 40)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_customer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.list,
          children: showCustomers()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXIuanMiXSwibmFtZXMiOlsiQ3VzdG9tZXJQYWdlIiwidG9rZW4iLCJVUkwiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiY3VzdG9tZXJzIiwic2V0Q3VzdG9tZXJzIiwiQ3VzdG9tZXJJRCIsInNldEN1c3RvbWVySUQiLCJuYW1lIiwic2V0TmFtZSIsInN1cm5hbWUiLCJzZXRTdXJuYW1lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwicHJpY2UiLCJzZXRQcmljZSIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJHbTEiLCJHbTIiLCJHbTMiLCJHbTQiLCJHbTUiLCJHbTYiLCJ1c2VFZmZlY3QiLCJnZXRDdXN0b21lcnMiLCJtYWNoQnV0dG9uIiwic3R5bGVzIiwiYnV0dG9uX0lEIiwicmVuZGVyc29tZSIsIkdyb3VwbSIsIm1hcCIsImxlbmd0aCIsInJlc3VsdCIsImZpbmQiLCJhbnMiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwibGlzdCIsImFkZEN1c3RvbWVyIiwicG9zdCIsInNob3dDdXN0b21lcnMiLCJpdGVtIiwiaW5kZXgiLCJsaXN0SXRlbSIsImNvbnRhaW5lciIsImZvbnRUaXRsZSIsImZvcm0iLCJmb3JtX2FkZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHQiLCJidXR0b25fYWRkIiwidGV4dENvbmZpcm0iLCJmb3JtX2FkZDEiLCJ3aWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFlBQVQsT0FBaUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDOUMsTUFBTUMsR0FBRyxHQUFHLG1DQUFaOztBQUQ4QyxrQkFHdEJDLHNEQUFRLENBQUMsRUFBRCxDQUhjO0FBQUEsTUFHdkNDLElBSHVDO0FBQUEsTUFHakNDLE9BSGlDOztBQUFBLG1CQUlaRixzREFBUSxDQUFDLEVBQUQsQ0FKSTtBQUFBLE1BSXZDRyxTQUp1QztBQUFBLE1BSTVCQyxZQUo0Qjs7QUFBQSxtQkFLVkosc0RBQVEsQ0FBQyxFQUFELENBTEU7QUFBQSxNQUt2Q0ssVUFMdUM7QUFBQSxNQUszQkMsYUFMMkI7O0FBQUEsbUJBTXRCTixzREFBUSxDQUFDLEVBQUQsQ0FOYztBQUFBLE1BTXZDTyxJQU51QztBQUFBLE1BTWpDQyxPQU5pQzs7QUFBQSxtQkFPaEJSLHNEQUFRLENBQUMsRUFBRCxDQVBRO0FBQUEsTUFPdkNTLE9BUHVDO0FBQUEsTUFPOUJDLFVBUDhCOztBQUFBLG1CQVFsQlYsc0RBQVEsQ0FBQyxTQUFELENBUlU7QUFBQSxNQVF2Q1csTUFSdUM7QUFBQSxNQVEvQkMsU0FSK0I7O0FBQUEsbUJBU3BCWixzREFBUSxDQUFDLENBQUQsQ0FUWTtBQUFBLE1BU3ZDYSxLQVR1QztBQUFBLE1BU2hDQyxRQVRnQzs7QUFBQSxtQkFVZGQsc0RBQVEsQ0FBQyxFQUFELENBVk07QUFBQSxNQVV2Q2UsUUFWdUM7QUFBQSxNQVU3QkMsV0FWNkI7O0FBVzlDLE1BQU1DLEdBQUcsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLENBQVo7QUFDQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixDQUFaO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsQ0FBWjtBQUNBLE1BQU1DLEdBQUcsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLENBQVo7QUFDQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixDQUFaO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsQ0FBWjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCx1U0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDT0MsWUFBWSxFQURuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDbEIsSUFBRCxFQUFPSSxNQUFQLEVBQWVFLEtBQWYsRUFBeUI7QUFDMUMsd0JBQVE7QUFBUSxlQUFTLEVBQUVhLGtFQUFNLENBQUNDLFNBQTFCO0FBQXFDLGNBQVEsRUFBRWhCLE1BQS9DO0FBQXVELGFBQU8sRUFBRSxtQkFBTTtBQUFFTCxxQkFBYSxDQUFDQyxJQUFELENBQWI7QUFBcUJPLGdCQUFRLENBQUNELEtBQUQsQ0FBUjtBQUFpQixPQUE5RztBQUFBLHNCQUFrSE4sSUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1xQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQVk7QUFDN0IsV0FBT0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ3ZCLElBQUQsRUFBVTtBQUUxQixVQUFJSixTQUFTLElBQUlBLFNBQVMsQ0FBQzRCLE1BQTNCLEVBQW1DO0FBQ2pDLFlBQU1DLE1BQU0sR0FBRzdCLFNBQVMsQ0FBQzhCLElBQVYsQ0FBZSxVQUFDQyxHQUFELEVBQVM7QUFDckMsaUJBQU9BLEdBQUcsQ0FBQzdCLFVBQUosSUFBa0JFLElBQXpCO0FBQ0QsU0FGYyxDQUFmO0FBR0E0QixlQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjs7QUFDQSxZQUFJQSxNQUFNLElBQUlLLFNBQWQsRUFBeUI7QUFDdkIsOEJBQ0U7QUFBUSxxQkFBUyxFQUFFWCxrRUFBTSxDQUFDQyxTQUExQjtBQUFxQyxtQkFBTyxFQUFFLG1CQUFNO0FBQUVyQiwyQkFBYSxDQUFDQyxJQUFELENBQWI7QUFBcUJPLHNCQUFRLENBQUMsR0FBRCxDQUFSO0FBQWUsYUFBMUY7QUFBQSxzQkFDR1A7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBS0QsU0FORCxNQU1PO0FBQ0w7QUFBQTtBQUFRLG9CQUFRLEVBQUUsSUFBbEI7QUFBQSxzQkFBeUJBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRCxTQWJnQyxDQWlCakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRCxPQTlCeUIsQ0FpQzFCO0FBQ0E7QUFDQTs7QUFDRCxLQXBDTSxDQUFQLENBRDZCLENBd0M3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0QsR0FsREQ7O0FBb0RBLE1BQU1pQixZQUFZO0FBQUEsbVRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQWMsNENBQUssQ0FBQ0MsR0FBTixDQUFVeEMsR0FBVixDQURBOztBQUFBO0FBQ2ZpQyxvQkFEZTtBQUVuQjVCLDBCQUFZLENBQUM0QixNQUFNLENBQUNRLElBQVAsQ0FBWUMsSUFBYixDQUFaOztBQUZtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaakIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFNQSxNQUFNa0IsV0FBVztBQUFBLG1UQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0NKLDRDQUFLLENBQUNLLElBQU4sQ0FBVzVDLEdBQVgsRUFBZ0I7QUFDakNNLDBCQUFVLEVBQVZBLFVBRGlDO0FBRWpDRSxvQkFBSSxFQUFKQSxJQUZpQztBQUdqQ0UsdUJBQU8sRUFBUEEsT0FIaUM7QUFJakNFLHNCQUFNLEVBQU5BLE1BSmlDO0FBS2pDRSxxQkFBSyxFQUFMQTtBQUxpQyxlQUFoQixDQUREOztBQUFBO0FBQ2RtQixvQkFEYztBQVFsQkcscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaO0FBQ0FSLDBCQUFZOztBQVRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhrQixXQUFXO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQVlBLE1BQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFJekMsU0FBUyxJQUFJQSxTQUFTLENBQUM0QixNQUEzQixFQUFtQztBQUNqQyxhQUFPNUIsU0FBUyxDQUFDMkIsR0FBVixDQUFjLFVBQUNlLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNwQyw0QkFDRTtBQUFLLG1CQUFTLEVBQUVwQixrRUFBTSxDQUFDcUIsUUFBdkI7QUFBQSxrQ0FDRTtBQUFBLG9DQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFMLE9BQXlCRixJQUFJLENBQUN4QyxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLG9DQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFMLE9BQW1Cd0MsSUFBSSxDQUFDdEMsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBQSxvQ0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBTCxPQUFzQnNDLElBQUksQ0FBQ3BDLE9BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUEsb0NBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUwsT0FBcUJvQyxJQUFJLENBQUNsQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRTtBQUFBLG9DQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFMLE9BQW9Ca0MsSUFBSSxDQUFDaEMsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUEsV0FBc0NpQyxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWTSxDQUFQO0FBV0QsS0FaRCxNQVlPO0FBQ0wsMEJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNEO0FBQ0YsR0FoQkQ7O0FBa0JBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUEsNkJBQ0UscUVBQUMsaURBQUQ7QUFDRSxXQUFHLEVBQUMsY0FETjtBQUVFLFdBQUcsRUFBQyxTQUZOO0FBR0UsYUFBSyxFQUFFLEdBSFQ7QUFJRSxjQUFNLEVBQUUsR0FKVjtBQUtFLGFBQUssRUFBQztBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFhRTtBQUFLLGVBQVMsRUFBRXBCLGtFQUFNLENBQUNzQixTQUF2QjtBQUFBLDhCQUNFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBRXRCLGtFQUFNLENBQUN1QixTQUF2QjtBQUFBLCtCQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFJRTtBQUFLLGlCQUFTLEVBQUV2QixrRUFBTSxDQUFDd0IsSUFBdkI7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFFeEIsa0VBQU0sQ0FBQ3lCLFFBQXZCO0FBQUEsc0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsOEJBR0U7QUFDRSxvQkFBSSxFQUFDLE1BRFA7QUFFRSx3QkFBUSxFQUFDLFVBRlg7QUFHRSxvQkFBSSxFQUFDLFlBSFA7QUFJRSxxQkFBSyxFQUFFOUMsVUFKVDtBQUtFLHdCQUFRLEVBQUUsa0JBQUMrQyxDQUFEO0FBQUEseUJBQU85QyxhQUFhLENBQUM4QyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRix3QkFXRTtBQUNFLG9CQUFJLEVBQUMsTUFEUDtBQUVFLG9CQUFJLEVBQUMsTUFGUDtBQUdFLHdCQUFRLEVBQUUsa0JBQUNGLENBQUQ7QUFBQSx5QkFBTzVDLE9BQU8sQ0FBQzRDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWEYsMkJBaUJFO0FBQ0Usb0JBQUksRUFBQyxNQURQO0FBRUUsb0JBQUksRUFBQyxTQUZQO0FBR0Usd0JBQVEsRUFBRSxrQkFBQ0YsQ0FBRDtBQUFBLHlCQUFPMUMsVUFBVSxDQUFDMEMsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBakJGLDBCQXVCRTtBQUFPLHlCQUFTLEVBQUU1QixrRUFBTSxDQUFDNkIsSUFBekI7QUFDRSxvQkFBSSxFQUFDLE1BRFA7QUFFRSxvQkFBSSxFQUFDLFFBRlA7QUFHRSx3QkFBUSxFQUFDLFVBSFg7QUFJRSxxQkFBSyxFQUFDLFNBSlI7QUFLRSx3QkFBUSxFQUFFLGtCQUFDSCxDQUFEO0FBQUEseUJBQU94QyxTQUFTLENBQUN3QyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF2QkYseUJBK0JFO0FBQ0Usb0JBQUksRUFBQyxRQURQO0FBRUUsb0JBQUksRUFBQyxPQUZQO0FBR0Usd0JBQVEsRUFBQyxVQUhYO0FBSUUscUJBQUssRUFBRXpDLEtBSlQ7QUFLRSx3QkFBUSxFQUFFLGtCQUFDdUMsQ0FBRDtBQUFBLHlCQUFPdEMsUUFBUSxDQUFDc0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkEvQkYsZUFzQ0U7QUFBUSx5QkFBUyxFQUFFNUIsa0VBQU0sQ0FBQzhCLFVBQTFCO0FBQ0UsdUJBQU8sRUFBRTtBQUFBLHlCQUFNZCxXQUFXLENBQUNyQyxVQUFELEVBQWFFLElBQWIsRUFBbUJFLE9BQW5CLEVBQTRCRSxNQUE1QixFQUFvQ0UsS0FBcEMsQ0FBakI7QUFBQSxpQkFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF0Q0YsZUEwQ0U7QUFBSyx5QkFBUyxFQUFFYSxrRUFBTSxDQUFDK0IsV0FBdkI7QUFBQSx3Q0FBb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQWdERTtBQUFLLHFCQUFTLEVBQUUvQixrRUFBTSxDQUFDZ0MsU0FBdkI7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUVoQyxrRUFBTSxDQUFDaUMsS0FBdkI7QUFBQSxxQ0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUEsd0JBQ0cvQixVQUFVLENBQUNYLEdBQUQ7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBbUNFO0FBQUssdUJBQVMsRUFBRVMsa0VBQU0sQ0FBQ2lDLEtBQXZCO0FBQUEscUNBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkNGLGVBb0NFO0FBQUEseUJBQ0dsQyxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FEYixFQUVHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FGYixFQUdHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FIYixFQUlHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBcENGLGVBc0RFO0FBQUssdUJBQVMsRUFBRUMsa0VBQU0sQ0FBQ2lDLEtBQXZCO0FBQUEscUNBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdERGLGVBdURFO0FBQUEseUJBQ0dsQyxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FEYixFQUVHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FGYixFQUdHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FIYixFQUlHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkRGLGVBeUVFO0FBQUssdUJBQVMsRUFBRUMsa0VBQU0sQ0FBQ2lDLEtBQXZCO0FBQUEscUNBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekVGLGVBMEVFO0FBQUEseUJBQ0dsQyxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FEYixFQUVHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FGYixFQUdHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FIYixFQUlHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBMUVGLGVBNEZFO0FBQUssdUJBQVMsRUFBRUMsa0VBQU0sQ0FBQ2lDLEtBQXZCO0FBQUEscUNBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBNUZGLGVBNkZFO0FBQUEseUJBQ0dsQyxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FEYixFQUVHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FGYixFQUdHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FIYixFQUlHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBN0ZGLGVBK0dFO0FBQUssdUJBQVMsRUFBRUMsa0VBQU0sQ0FBQ2lDLEtBQXZCO0FBQUEscUNBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBL0dGLGVBZ0hFO0FBQUEseUJBQ0dsQyxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FEYixFQUVHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FGYixFQUdHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FIYixFQUlHQSxVQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsRUFBaEIsQ0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaEhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBNkxFO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFQyxrRUFBTSxDQUFDZSxJQUF2QjtBQUFBLG9CQUE4QkcsYUFBYTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlORDs7R0FyVXVCL0MsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jdXN0b21lci5kNDgyYjUyNGQ4ZmNhMGI5ZjE2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2N1c3RvbWVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tZXJQYWdlKHsgdG9rZW4gfSkge1xyXG4gIGNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sYXVuZHJ5XCI7XHJcblxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbY3VzdG9tZXJzLCBzZXRDdXN0b21lcnNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtDdXN0b21lcklELCBzZXRDdXN0b21lcklEXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdXJuYW1lLCBzZXRTdXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIldhaXRpbmdcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBHbTEgPSBbXCJBMDAxXCIsIFwiQTAwMlwiLCBcIkEwMDNcIiwgXCJBMDA0XCJdXHJcbiAgY29uc3QgR20yID0gW1wiQjAwNVwiLCBcIkIwMDZcIiwgXCJCMDA3XCIsIFwiQjAwOFwiXVxyXG4gIGNvbnN0IEdtMyA9IFtcIkMwMDlcIiwgXCJDMDEwXCIsIFwiQzAxMVwiLCBcIkMwMTJcIl1cclxuICBjb25zdCBHbTQgPSBbXCJEMDEzXCIsIFwiRDAxNFwiLCBcIkQwMTVcIiwgXCJEMDE2XCJdXHJcbiAgY29uc3QgR201ID0gW1wiRTAxN1wiLCBcIkUwMThcIiwgXCJFMDE5XCIsIFwiRTAyMFwiXVxyXG4gIGNvbnN0IEdtNiA9IFtcIkYwMjFcIiwgXCJGMDIyXCIsIFwiRjAyM1wiLCBcIkYwMjRcIl1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGdldEN1c3RvbWVycygpO1xyXG4gICAgfSkoKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbWFjaEJ1dHRvbiA9IChuYW1lLCBzdGF0dXMsIHByaWNlKSA9PiB7XHJcbiAgICByZXR1cm4gKDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBkaXNhYmxlZD17c3RhdHVzfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQobmFtZSk7IHNldFByaWNlKHByaWNlKSB9fT4ge25hbWV9PC9idXR0b24+KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyc29tZSA9IChHcm91cG0pID0+IHtcclxuICAgIHJldHVybiBHcm91cG0ubWFwKChuYW1lKSA9PiB7XHJcblxyXG4gICAgICBpZiAoY3VzdG9tZXJzICYmIGN1c3RvbWVycy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBjdXN0b21lcnMuZmluZCgoYW5zKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gYW5zLkN1c3RvbWVySUQgPT0gbmFtZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKG5hbWUpOyBzZXRQcmljZSgxMDApIH19PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dHJ1ZX0+e25hbWV9PC9idXR0b24+XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vICAgcmV0dXJuIGN1c3RvbWVycy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobmFtZSwgaXRlbS5DdXN0b21lcklEKVxyXG4gICAgICAgIC8vICAgICBpZiAobmFtZSA9PT0gaXRlbS5DdXN0b21lcklEKSB7XHJcbiAgICAgICAgLy8gICAgICAgcmV0dXJuIChcclxuICAgICAgICAvLyAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBkaXNhYmxlZD17dHJ1ZX0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKGl0ZW0uQ3VzdG9tZXJJRCk7IHNldFByaWNlKGl0ZW0ucHJpY2UpIH19PiB7aXRlbS5DdXN0b21lcklEfTwvYnV0dG9uPlxyXG4gICAgICAgIC8vICAgICAgIClcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gICApXHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyByZXR1cm4gKFxyXG4gICAgICAvLyAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBkaXNhYmxlZD17dHJ1ZX0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKGl0ZW0uQ3VzdG9tZXJJRCk7IHNldFByaWNlKDAwMCkgfX0+IHtHcm91cG19PC9idXR0b24+XHJcbiAgICAgIC8vICk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvLyBpZiAoY3VzdG9tZXJzICYmIGN1c3RvbWVycy5sZW5ndGgpIHtcclxuICAgIC8vICAgcmV0dXJuIGN1c3RvbWVycy5tYXAoKGl0ZW0pID0+IHtcclxuICAgIC8vICAgICByZXR1cm4gKFxyXG4gICAgLy8gICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IGRpc2FibGVkPXt0cnVlfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoaXRlbS5DdXN0b21lcklEKTsgc2V0UHJpY2UoaXRlbS5wcmljZSkgfX0+IHtpdGVtLkN1c3RvbWVySUR9PC9idXR0b24+XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICApXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEN1c3RvbWVycyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoVVJMKTtcclxuICAgIHNldEN1c3RvbWVycyhyZXN1bHQuZGF0YS5saXN0KTtcclxuXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkQ3VzdG9tZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChVUkwsIHtcclxuICAgICAgQ3VzdG9tZXJJRCxcclxuICAgICAgbmFtZSxcclxuICAgICAgc3VybmFtZSxcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICBwcmljZSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIGdldEN1c3RvbWVycygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dDdXN0b21lcnMgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VzdG9tZXJzICYmIGN1c3RvbWVycy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGN1c3RvbWVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2PjxiPkN1c3RvbWVySUQ6PC9iPiB7aXRlbS5DdXN0b21lcklEfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxiPk5hbWU6PC9iPiB7aXRlbS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxiPlN1cm5hbWU6PC9iPiB7aXRlbS5zdXJuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxiPlN0YXR1czo8L2I+IHtpdGVtLnN0YXR1c308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Yj5QcmljZTo8L2I+IHtpdGVtLnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DdXN0b21lcjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cIi9sYXVuZHJ5LnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJQaWN0dXJlXCJcclxuICAgICAgICAgIHdpZHRoPXs5MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgIHNpemVzPVwiKG1heC13aWR0aDogNTAwcHgpIDEwMHB4XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvbnRUaXRsZX0+PGgxPkZvciBDdXN0b21lciBBZGQgRGF0YSA8L2gxPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2FkZH0+XHJcbiAgICAgICAgICAgICAgICA8aDI+QWRkIHlvdXIgRGF0YTwvaDI+XHJcbiAgICAgICAgICAgICAgICBDdXN0b21lcklEOlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJDdXN0b21lcklEXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e0N1c3RvbWVySUR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXJJRChlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIFN1cm5hbWU6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VybmFtZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIFN0YXR1czpcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJXYWl0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICBQcmljZTpcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2FkZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkQ3VzdG9tZXIoQ3VzdG9tZXJJRCwgbmFtZSwgc3VybmFtZSwgc3RhdHVzLCBwcmljZSl9PlxyXG4gICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Q29uZmlybX0+PGg1PlBsZWFzZSBXYWl0IEFkbWluIGNvbmZpcm0uLi48L2g1PiA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90aD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGQxfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpZ2h0fT48aDI+V2lnaHQ6IDI1LTMwIEtnIFRlbXBlcmF0dXJlIDogSE9UIFRpbWU6IDMwIE1pbnV0ZTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtyZW5kZXJzb21lKEdtMSl9XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VzdG9tZXJzKVxyXG4gICAgICAgICAgICAgICAgICBjdXN0b21lcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkhlbGxvLCB7aXRlbX0gZnJvbSB7aW5kZXh9ITwvcD5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH0gKi99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiB7bWFjaEJ1dHRvbignQTAwMScsIGZhbHNlLCAxNTApfVxyXG4gICAgICAgICAgICAgICAge21hY2hCdXR0b24oJ0EwMDInLCBmYWxzZSwgMTUwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdBMDAzJywgZmFsc2UsIDE1MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignQTAwNCcsIGZhbHNlLCAxNTApfSAqL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH1cclxuICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkEwMDFcIik7IHNldFByaWNlKDE1MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEEwMDFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiQTAwMlwiKTsgc2V0UHJpY2UoMTUwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgQTAwMlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJBMDAzXCIpOyBzZXRQcmljZSgxNTApIH19PlxyXG4gICAgICAgICAgICAgICAgICBBMDAzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkEwMDRcIik7IHNldFByaWNlKDE1MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEEwMDRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2lnaHR9PjxoMj5XaWdodDogMjUtMzAgS2cgVGVtcGVyYXR1cmUgOiBNZWRpdW0gVGltZTogNDAgTWludXRlPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge21hY2hCdXR0b24oJ0IwMDUnLCBmYWxzZSwgMTAwKX1cclxuICAgICAgICAgICAgICAgIHttYWNoQnV0dG9uKCdCMDA2JywgZmFsc2UsIDEwMCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignQjAwNycsIGZhbHNlLCAxMDApfVxyXG4gICAgICAgICAgICAgICAge21hY2hCdXR0b24oJ0IwMDgnLCBmYWxzZSwgMTAwKX1cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiQjAwNVwiKTsgc2V0UHJpY2UoMTAwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgQjAwNVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJCMDA2XCIpOyBzZXRQcmljZSgxMDApIH19PlxyXG4gICAgICAgICAgICAgICAgICBCMDA2XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkIwMDdcIik7IHNldFByaWNlKDEwMCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEIwMDdcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiQjAwOFwiKTsgc2V0UHJpY2UoMTAwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgQjAwOFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aWdodH0+PGgyPldpZ2h0OiAyMC0yNSBLZyBUZW1wZXJhdHVyZSA6IEhPVCBUaW1lOiA0NSBNaW51dGU8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignQzAwOScsIGZhbHNlLCA4MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignQzAxMCcsIGZhbHNlLCA4MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignQzAxMScsIGZhbHNlLCA4MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignQzAxMicsIGZhbHNlLCA4MCl9XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkMwMDlcIik7IHNldFByaWNlKDgwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgQzAwOVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJDMDEwXCIpOyBzZXRQcmljZSg4MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEEwMTBcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiQzAxMVwiKTsgc2V0UHJpY2UoODApIH19PlxyXG4gICAgICAgICAgICAgICAgICBDMDExXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkMwMTJcIik7IHNldFByaWNlKDgwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgQzAxMlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aWdodH0+PGgyPldpZ2h0OiAyMC0yNSBLZyBUZW1wZXJhdHVyZSA6IE1lZGl1bSBUaW1lOiA1MCBNaW51dGU8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRDAxMycsIGZhbHNlLCA2MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRDAxNCcsIGZhbHNlLCA2MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRDAxNScsIGZhbHNlLCA2MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRDAxNicsIGZhbHNlLCA2MCl9XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkQwMTNcIik7IHNldFByaWNlKDYwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgRDAxM1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJEMDE0XCIpOyBzZXRQcmljZSg2MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEQwMTRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiRDAxNVwiKTsgc2V0UHJpY2UoNjApIH19PlxyXG4gICAgICAgICAgICAgICAgICBEMDE1XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkQwMTZcIik7IHNldFByaWNlKDYwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgRDAxNlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aWdodH0+PGgyPldpZ2h0OiAxNS0yMCBLZyBUZW1wZXJhdHVyZSA6IE1lZGl1bSBUaW1lOiA1NSBNaW51dGU8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRTAxNycsIGZhbHNlLCA1MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRTAxOCcsIGZhbHNlLCA1MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRTAxOScsIGZhbHNlLCA1MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRTAyMCcsIGZhbHNlLCA1MCl9XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkUwMTdcIik7IHNldFByaWNlKDUwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgRTAxN1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJFMDE4XCIpOyBzZXRQcmljZSg1MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEUwMThcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiRTAxOVwiKTsgc2V0UHJpY2UoNTApIH19PlxyXG4gICAgICAgICAgICAgICAgICBFMDE5XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkUwMjBcIik7IHNldFByaWNlKDUwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgRTAyMFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53aWdodH0+PGgyPldpZ2h0OiAxMC0xNSBLZyBUZW1wZXJhdHVyZSA6IE1lZGl1bSBUaW1lOiA2MCBNaW51dGU8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRjAyMScsIGZhbHNlLCA0MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRjAyMicsIGZhbHNlLCA0MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRjAyMycsIGZhbHNlLCA0MCl9XHJcbiAgICAgICAgICAgICAgICB7bWFjaEJ1dHRvbignRjAyNCcsIGZhbHNlLCA0MCl9XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkYwMjFcIik7IHNldFByaWNlKDQwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgRjAyMVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX0lEfSBvbkNsaWNrPXsoKSA9PiB7IHNldEN1c3RvbWVySUQoXCJGMDIyXCIpOyBzZXRQcmljZSg0MCkgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEYwMjJcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9JRH0gb25DbGljaz17KCkgPT4geyBzZXRDdXN0b21lcklEKFwiRjAyM1wiKTsgc2V0UHJpY2UoNDApIH19PlxyXG4gICAgICAgICAgICAgICAgICBGMDIzXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fSUR9IG9uQ2xpY2s9eygpID0+IHsgc2V0Q3VzdG9tZXJJRChcIkYwMjRcIik7IHNldFByaWNlKDQwKSB9fT5cclxuICAgICAgICAgICAgICAgICAgRjAyNFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PntzaG93Q3VzdG9tZXJzKCl9PC9kaXY+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHRva2VuOiByZXEuY29va2llcy50b2tlbiB8fCBcIlwiIH0gfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9