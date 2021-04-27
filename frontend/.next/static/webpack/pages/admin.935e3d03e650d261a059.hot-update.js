webpackHotUpdate_N_E("pages/admin",{

/***/ "./components/withAuth.js":
/*!********************************!*\
  !*** ./components/withAuth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\sawalee\\Desktop\\MiniProject\\frontend\\components\\withAuth.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_sawalee_Desktop_MiniProject_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var withAuth = function withAuth(WrappedComponent) {
  var _s = $RefreshSig$();

  var Wrapper = function Wrapper(props) {
    _s();

    var token = props.token;
    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
      if (!token) router.push('/login');
    }, [token]);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(WrappedComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, _this);
  };

  _s(Wrapper, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
  });

  return Wrapper;
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

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

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/admin.module.css":
/*!*********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/admin.module.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Karantina:wght@300&family=Varela+Round&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".admin_button_get__3GAWk {\n  background-color: rgb(25, 104, 25);\n  border-radius: 10px;\n  border: none;\n  color: white;\n  padding: 10px 18px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px;\n  cursor: pointer;\n}\n.admin_button_delete__2Cp2y {\n  background-color: rgba(206, 68, 68, 0.979);\n  border-radius: 10px;\n  border: none;\n  color: white;\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n.admin_button_update__3nVsd {\n  background-color: rgb(73, 177, 137);\n  border-radius: 10px;\n  border: none;\n  color: white;\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n.admin_button_add__2ZyZF {\n  background-color: rgb(29, 119, 204);\n  border: none;\n  color: white;\n  padding: 5px 5px;\n  text-align: center;\n  font-size: 16px;\n  margin: 4px 2px;\n  margin-top: 15px;\n}\n.admin_edit_button__3voWq {\n  margin-top: 20px;\n}\n.admin_list__2bh4s {\n  display: flex;\n  justify-content: center;\n  font-family: \"Monaco\",  monospace;\n  list-style: none;\n  margin: 10px;\n  padding: 1px;\n  flex-wrap: wrap;\n  width: 80vw;\n}\n.admin_list1__33HSe {\n  background-color: rgb(75, 105, 93);\n  color: aliceblue;\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 35px;\n  padding: 15px;\n  flex-wrap: wrap;\n  width: 80vw;\n} \n.admin_container__1dnVJ {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  /* padding-top: 6%; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(255, 255, 255);\n  font-family: 'Karantina', cursive;\n  font-family: 'Varela Round', sans-serif;\n}\n.admin_listItem__23XTj {\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n  padding: 10px;\n  border: 2px solid rgb(151, 151, 151);\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: 'Karantina', cursive;\n  font-family: 'Varela Round', sans-serif;\n}\n.admin_listItem__23XTj > div{\n  margin: 8px 8px;\n}\n.admin_form_add__1O01G { \n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n  padding: 20px;\n  border: 8px solid rgba(0, 0, 0, 0.205);\n  font-size: 1.4rem;\n  border-radius: 10px;\n  text-align: center;\n}\n.admin_form_add1__2hSc3 {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.4rem;\n  border-radius: 10px;\n  text-align: center;\n  margin-left: 50px;\n}\n\n.admin_text__3kqRX {\n  text-align: center;\n  color: rgb(40, 185, 35);\n  size: 15px;\n}\n\n.admin_statusID__2m014 {\n  background-color: rgb(255, 226, 62);\n  border-radius: 10px;\n  border: none;\n  color: rgb(95, 94, 94);\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  width: 150px;\n}\n\n.admin_statusID__2m014:hover{\n  background-color: #c5c2b1;\n  color: #fff;\n} \n.admin_textstatusID__3WXqP{\n  text-align: center;\n  color: darkgoldenrod;\n}\n\n.admin_statusFinished__2KWDq{\n  background-color: rgb(139, 250, 117);\n  border-radius: 10px;\n  border: none;\n  color: rgb(95, 94, 94);\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  width: 150px;\n}\n\n.admin_statusFinished__2KWDq:hover{\n  background-color: #c5c2b1;\n  color: #fff;\n} \n\n.admin_fontTitle__1_LNa{\n  font-size: 25px;\n  color: rgb(81, 110, 138);\n}", "",{"version":3,"sources":["webpack://styles/admin.module.css"],"names":[],"mappings":"AACA;EACE,kCAAkC;EAClC,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,WAAW;EACX,eAAe;AACjB;AACA;EACE,0CAA0C;EAC1C,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,eAAe;EACf,eAAe;AACjB;AACA;EACE,mCAAmC;EACnC,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,eAAe;EACf,eAAe;AACjB;AACA;EACE,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,WAAW;AACb;AACA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,oCAAoC;EACpC,iCAAiC;EACjC,uCAAuC;AACzC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,eAAe;EACf,iCAAiC;EACjC,uCAAuC;AACzC;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,mCAAmC;EACnC,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,eAAe;EACf,eAAe;EACf,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,eAAe;EACf,eAAe;EACf,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,wBAAwB;AAC1B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Karantina:wght@300&family=Varela+Round&display=swap');\n.button_get {\n  background-color: rgb(25, 104, 25);\n  border-radius: 10px;\n  border: none;\n  color: white;\n  padding: 10px 18px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px;\n  cursor: pointer;\n}\n.button_delete {\n  background-color: rgba(206, 68, 68, 0.979);\n  border-radius: 10px;\n  border: none;\n  color: white;\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n.button_update {\n  background-color: rgb(73, 177, 137);\n  border-radius: 10px;\n  border: none;\n  color: white;\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n.button_add {\n  background-color: rgb(29, 119, 204);\n  border: none;\n  color: white;\n  padding: 5px 5px;\n  text-align: center;\n  font-size: 16px;\n  margin: 4px 2px;\n  margin-top: 15px;\n}\n.edit_button {\n  margin-top: 20px;\n}\n.list {\n  display: flex;\n  justify-content: center;\n  font-family: \"Monaco\",  monospace;\n  list-style: none;\n  margin: 10px;\n  padding: 1px;\n  flex-wrap: wrap;\n  width: 80vw;\n}\n.list1 {\n  background-color: rgb(75, 105, 93);\n  color: aliceblue;\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 35px;\n  padding: 15px;\n  flex-wrap: wrap;\n  width: 80vw;\n} \n.container {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  /* padding-top: 6%; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(255, 255, 255);\n  font-family: 'Karantina', cursive;\n  font-family: 'Varela Round', sans-serif;\n}\n.listItem {\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n  padding: 10px;\n  border: 2px solid rgb(151, 151, 151);\n  border-radius: 10px;\n  font-size: 1rem;\n  font-family: 'Karantina', cursive;\n  font-family: 'Varela Round', sans-serif;\n}\n.listItem > div{\n  margin: 8px 8px;\n}\n.form_add { \n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n  padding: 20px;\n  border: 8px solid rgba(0, 0, 0, 0.205);\n  font-size: 1.4rem;\n  border-radius: 10px;\n  text-align: center;\n}\n.form_add1 {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.4rem;\n  border-radius: 10px;\n  text-align: center;\n  margin-left: 50px;\n}\n\n.text {\n  text-align: center;\n  color: rgb(40, 185, 35);\n  size: 15px;\n}\n\n.statusID {\n  background-color: rgb(255, 226, 62);\n  border-radius: 10px;\n  border: none;\n  color: rgb(95, 94, 94);\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  width: 150px;\n}\n\n.statusID:hover{\n  background-color: #c5c2b1;\n  color: #fff;\n} \n.textstatusID{\n  text-align: center;\n  color: darkgoldenrod;\n}\n\n.statusFinished{\n  background-color: rgb(139, 250, 117);\n  border-radius: 10px;\n  border: none;\n  color: rgb(95, 94, 94);\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  width: 150px;\n}\n\n.statusFinished:hover{\n  background-color: #c5c2b1;\n  color: #fff;\n} \n\n.fontTitle{\n  font-size: 25px;\n  color: rgb(81, 110, 138);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"button_get": "admin_button_get__3GAWk",
	"button_delete": "admin_button_delete__2Cp2y",
	"button_update": "admin_button_update__3nVsd",
	"button_add": "admin_button_add__2ZyZF",
	"edit_button": "admin_edit_button__3voWq",
	"list": "admin_list__2bh4s",
	"list1": "admin_list1__33HSe",
	"container": "admin_container__1dnVJ",
	"listItem": "admin_listItem__23XTj",
	"form_add": "admin_form_add__1O01G",
	"form_add1": "admin_form_add1__2hSc3",
	"text": "admin_text__3kqRX",
	"statusID": "admin_statusID__2m014",
	"textstatusID": "admin_textstatusID__3WXqP",
	"statusFinished": "admin_statusFinished__2KWDq",
	"fontTitle": "admin_fontTitle__1_LNa"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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
                children: ["CustomerID:    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  name: "CustomerID",
                  value: CustomerID,
                  onChange: function onChange(e) {
                    return setCustomerID(e.target.value);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this), "Name:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "name",
                value: name,
                onChange: function onChange(e) {
                  return setName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, _this), "Surname:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "surname",
                value: surname,
                onChange: function onChange(e) {
                  return setSurname(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, _this), "Status:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
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
              }, _this), "Price:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
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
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.button_add,
                onClick: function onClick() {
                  return addCustomer(CustomerID, name, surname, status, price);
                },
                children: "Add"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
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
                lineNumber: 179,
                columnNumber: 50
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
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
                lineNumber: 181,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Rinse");
                },
                children: "Rinse"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Air Dry");
                },
                children: "Air Dry"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.statusID,
                onClick: function onClick() {
                  return setStatus("Spin dryer");
                },
                children: "Spin dryer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 15
              }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 25
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: _styles_admin_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.statusFinished,
                onClick: function onClick() {
                  return setStatus("Finished");
                },
                children: "Finished"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
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
        lineNumber: 199,
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

/***/ }),

/***/ "./styles/admin.module.css":
/*!*********************************!*\
  !*** ./styles/admin.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./admin.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/admin.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./admin.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/admin.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./admin.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/admin.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy93aXRoQXV0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2FkbWluLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvYWRtaW4ubW9kdWxlLmNzcz85Y2U5Il0sIm5hbWVzIjpbIndpdGhBdXRoIiwiV3JhcHBlZENvbXBvbmVudCIsIldyYXBwZXIiLCJwcm9wcyIsInRva2VuIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsIlVSTCIsImFkbWluIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsImN1c3RvbWVycyIsInNldEN1c3RvbWVycyIsIkN1c3RvbWVySUQiLCJzZXRDdXN0b21lcklEIiwibmFtZSIsInNldE5hbWUiLCJzdXJuYW1lIiwic2V0U3VybmFtZSIsInN0YXR1cyIsInNldFN0YXR1cyIsInByaWNlIiwic2V0UHJpY2UiLCJjdXN0b21lciIsInNldEN1c3RvbWVyIiwiZ2V0Q3VzdG9tZXJzIiwicHJvZmlsZVVzZXIiLCJheGlvcyIsImdldCIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlcnMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldEN1c3RvbWVyIiwiaWQiLCJyZXN1bHQiLCJsaXN0IiwiYWRkQ3VzdG9tZXIiLCJwb3N0IiwiZGVsZXRlQ3VzdG9tZXIiLCJ1cGRhdGVDdXN0b21lciIsInB1dCIsInNob3dDdXN0b21lcnMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZXMiLCJsaXN0SXRlbSIsImVkaXRfYnV0dG9uIiwiYnV0dG9uX2dldCIsImJ1dHRvbl91cGRhdGUiLCJidXR0b25fZGVsZXRlIiwiY29udGFpbmVyIiwiZm9udFRpdGxlIiwiZm9ybSIsImZvcm1fYWRkIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uX2FkZCIsImZvcm1fYWRkMSIsInRleHRzdGF0dXNJRCIsInN0YXR1c0lEIiwic3RhdHVzRmluaXNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLGdCQUFnQixFQUFJO0FBQUE7O0FBQ2pDLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUFBLFFBQ2JDLEtBRGEsR0FDSEQsS0FERyxDQUNiQyxLQURhO0FBRXJCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsMkRBQVMsQ0FBQyxZQUFNO0FBQ1osVUFBSSxDQUFDSCxLQUFMLEVBQ0lDLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFFBQVo7QUFDUCxLQUhRLEVBR04sQ0FBQ0osS0FBRCxDQUhNLENBQVQ7QUFJQSx3QkFBUSxxRUFBQyxnQkFBRCxvQkFBc0JELEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUjtBQUNILEdBUkQ7O0FBRGlDLEtBQzNCRCxPQUQyQjtBQUFBLFlBR2RJLHFEQUhjO0FBQUE7O0FBVWpDLFNBQU9KLE9BQVA7QUFDSCxDQVhEOztBQWFlRix1RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQSw4QkFBOEIsUUFBUyw2R0FBNkc7QUFDcEo7QUFDQSw4QkFBOEIsUUFBUyw2QkFBNkIsdUNBQXVDLHdCQUF3QixpQkFBaUIsaUJBQWlCLHVCQUF1Qix1QkFBdUIsMEJBQTBCLDBCQUEwQixvQkFBb0IsZ0JBQWdCLG9CQUFvQixHQUFHLCtCQUErQiwrQ0FBK0Msd0JBQXdCLGlCQUFpQixpQkFBaUIsdUJBQXVCLHVCQUF1QiwwQkFBMEIsMEJBQTBCLG9CQUFvQixvQkFBb0Isb0JBQW9CLEdBQUcsK0JB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QTBCLG1CQUFPLENBQUMsc1RBQXdLOztBQUUxTTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSxzVEFBd0s7QUFDOUs7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxzVEFBd0s7O0FBRWxNOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uOTM1ZTNkMDNlNjUwZDI2MWEwNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHdpdGhBdXRoID0gV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gICAgY29uc3QgV3JhcHBlciA9IHByb3BzID0+IHtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcHJvcHNcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdG9rZW4pXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgIH0sIFt0b2tlbl0pXG4gICAgICAgIHJldHVybiAoPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPilcbiAgICB9XG4gICAgcmV0dXJuIFdyYXBwZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGhcblxuXG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYXJhbnRpbmE6d2dodEAzMDAmZmFtaWx5PVZhcmVsYStSb3VuZCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYWRtaW5fYnV0dG9uX2dldF9fM0dBV2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAxMDQsIDI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkbWluX2J1dHRvbl9kZWxldGVfXzJDcDJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA2LCA2OCwgNjgsIDAuOTc5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDRweCAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZG1pbl9idXR0b25fdXBkYXRlX18zblZzZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzMsIDE3NywgMTM3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDRweCAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZG1pbl9idXR0b25fYWRkX18yWnlaRiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDExOSwgMjA0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDRweCAycHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uYWRtaW5fZWRpdF9idXR0b25fXzN2b1dxIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5hZG1pbl9saXN0X18yYmg0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk1vbmFjb1xcXCIsICBtb25vc3BhY2U7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDgwdnc7XFxufVxcbi5hZG1pbl9saXN0MV9fMzNIU2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAxMDUsIDkzKTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAzNXB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA4MHZ3O1xcbn0gXFxuLmFkbWluX2NvbnRhaW5lcl9fMWRuVkoge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIC8qIHBhZGRpbmctdG9wOiA2JTsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZm9udC1mYW1pbHk6ICdLYXJhbnRpbmEnLCBjdXJzaXZlO1xcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xcbn1cXG4uYWRtaW5fbGlzdEl0ZW1fXzIzWFRqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTEsIDE1MSwgMTUxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogJ0thcmFudGluYScsIGN1cnNpdmU7XFxuICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XFxufVxcbi5hZG1pbl9saXN0SXRlbV9fMjNYVGogPiBkaXZ7XFxuICBtYXJnaW46IDhweCA4cHg7XFxufVxcbi5hZG1pbl9mb3JtX2FkZF9fMU8wMUcgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogOHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMDUpO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWRtaW5fZm9ybV9hZGQxX18yaFNjMyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uYWRtaW5fdGV4dF9fM2txUlgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYig0MCwgMTg1LCAzNSk7XFxuICBzaXplOiAxNXB4O1xcbn1cXG5cXG4uYWRtaW5fc3RhdHVzSURfXzJtMDE0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyNiwgNjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoOTUsIDk0LCA5NCk7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDRweCAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5hZG1pbl9zdGF0dXNJRF9fMm0wMTQ6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjMmIxO1xcbiAgY29sb3I6ICNmZmY7XFxufSBcXG4uYWRtaW5fdGV4dHN0YXR1c0lEX18zV1hxUHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbn1cXG5cXG4uYWRtaW5fc3RhdHVzRmluaXNoZWRfXzJLV0Rxe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMjUwLCAxMTcpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoOTUsIDk0LCA5NCk7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDRweCAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5hZG1pbl9zdGF0dXNGaW5pc2hlZF9fMktXRHE6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjMmIxO1xcbiAgY29sb3I6ICNmZmY7XFxufSBcXG5cXG4uYWRtaW5fZm9udFRpdGxlX18xX0xOYXtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiByZ2IoODEsIDExMCwgMTM4KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9hZG1pbi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQyxpQ0FBaUM7RUFDakMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FyYW50aW5hOndnaHRAMzAwJmZhbWlseT1WYXJlbGErUm91bmQmZGlzcGxheT1zd2FwJyk7XFxuLmJ1dHRvbl9nZXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAxMDQsIDI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1dHRvbl9kZWxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDYsIDY4LCA2OCwgMC45NzkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogNHB4IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1dHRvbl91cGRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCAxNzcsIDEzNyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiA0cHggMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnV0dG9uX2FkZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDExOSwgMjA0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDRweCAycHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uZWRpdF9idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb25hY29cXFwiLCAgbW9ub3NwYWNlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA4MHZ3O1xcbn1cXG4ubGlzdDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCAxMDUsIDkzKTtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAzNXB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA4MHZ3O1xcbn0gXFxuLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgLyogcGFkZGluZy10b3A6IDYlOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBmb250LWZhbWlseTogJ0thcmFudGluYScsIGN1cnNpdmU7XFxuICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsIHNhbnMtc2VyaWY7XFxufVxcbi5saXN0SXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTUxLCAxNTEsIDE1MSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdLYXJhbnRpbmEnLCBjdXJzaXZlO1xcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xcbn1cXG4ubGlzdEl0ZW0gPiBkaXZ7XFxuICBtYXJnaW46IDhweCA4cHg7XFxufVxcbi5mb3JtX2FkZCB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiA4cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIwNSk7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb3JtX2FkZDEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG59XFxuXFxuLnRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYig0MCwgMTg1LCAzNSk7XFxuICBzaXplOiAxNXB4O1xcbn1cXG5cXG4uc3RhdHVzSUQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI2LCA2Mik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYig5NSwgOTQsIDk0KTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogNHB4IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLnN0YXR1c0lEOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzJiMTtcXG4gIGNvbG9yOiAjZmZmO1xcbn0gXFxuLnRleHRzdGF0dXNJRHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xcbn1cXG5cXG4uc3RhdHVzRmluaXNoZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAyNTAsIDExNyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYig5NSwgOTQsIDk0KTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogNHB4IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLnN0YXR1c0ZpbmlzaGVkOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzJiMTtcXG4gIGNvbG9yOiAjZmZmO1xcbn0gXFxuXFxuLmZvbnRUaXRsZXtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiByZ2IoODEsIDExMCwgMTM4KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYnV0dG9uX2dldFwiOiBcImFkbWluX2J1dHRvbl9nZXRfXzNHQVdrXCIsXG5cdFwiYnV0dG9uX2RlbGV0ZVwiOiBcImFkbWluX2J1dHRvbl9kZWxldGVfXzJDcDJ5XCIsXG5cdFwiYnV0dG9uX3VwZGF0ZVwiOiBcImFkbWluX2J1dHRvbl91cGRhdGVfXzNuVnNkXCIsXG5cdFwiYnV0dG9uX2FkZFwiOiBcImFkbWluX2J1dHRvbl9hZGRfXzJaeVpGXCIsXG5cdFwiZWRpdF9idXR0b25cIjogXCJhZG1pbl9lZGl0X2J1dHRvbl9fM3ZvV3FcIixcblx0XCJsaXN0XCI6IFwiYWRtaW5fbGlzdF9fMmJoNHNcIixcblx0XCJsaXN0MVwiOiBcImFkbWluX2xpc3QxX18zM0hTZVwiLFxuXHRcImNvbnRhaW5lclwiOiBcImFkbWluX2NvbnRhaW5lcl9fMWRuVkpcIixcblx0XCJsaXN0SXRlbVwiOiBcImFkbWluX2xpc3RJdGVtX18yM1hUalwiLFxuXHRcImZvcm1fYWRkXCI6IFwiYWRtaW5fZm9ybV9hZGRfXzFPMDFHXCIsXG5cdFwiZm9ybV9hZGQxXCI6IFwiYWRtaW5fZm9ybV9hZGQxX18yaFNjM1wiLFxuXHRcInRleHRcIjogXCJhZG1pbl90ZXh0X18za3FSWFwiLFxuXHRcInN0YXR1c0lEXCI6IFwiYWRtaW5fc3RhdHVzSURfXzJtMDE0XCIsXG5cdFwidGV4dHN0YXR1c0lEXCI6IFwiYWRtaW5fdGV4dHN0YXR1c0lEX18zV1hxUFwiLFxuXHRcInN0YXR1c0ZpbmlzaGVkXCI6IFwiYWRtaW5fc3RhdHVzRmluaXNoZWRfXzJLV0RxXCIsXG5cdFwiZm9udFRpdGxlXCI6IFwiYWRtaW5fZm9udFRpdGxlX18xX0xOYVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uL2NvbXBvbmVudHMvd2l0aEF1dGhcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYWRtaW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnIFxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJyBcblxuY29uc3QgVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xhdW5kcnlcIjtcblxuY29uc3QgYWRtaW4gPSAoeyB0b2tlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2N1c3RvbWVycywgc2V0Q3VzdG9tZXJzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW0N1c3RvbWVySUQsIHNldEN1c3RvbWVySURdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VybmFtZSwgc2V0U3VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY3VzdG9tZXIsIHNldEN1c3RvbWVyXSA9IHVzZVN0YXRlKHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEN1c3RvbWVycygpO1xuICAgIHByb2ZpbGVVc2VyKCk7XG4gIH0sIFtdKTtcbiAgXG4gIGNvbnN0IHByb2ZpbGVVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7ICAgIFxuICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBheGlvcy5nZXQoYCR7Y29uZmlnLlVSTH0vcHJvZmlsZWAsIHtcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9LFxuICAgICAgfSk7ICBcbiAgICAgIHNldFVzZXIodXNlcnMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEN1c3RvbWVyID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke1VSTH0vJHtpZH1gKVxuICAgIGNvbnNvbGUubG9nKCdjdXN0b21lcnMgSUQ6ICcsIHJlc3VsdC5kYXRhKVxuICAgIHNldEN1c3RvbWVyKHJlc3VsdC5kYXRhKVxuICAgIHNldEN1c3RvbWVySUQocmVzdWx0LmRhdGEuQ3VzdG9tZXJJRClcbiAgICBzZXROYW1lKHJlc3VsdC5kYXRhLm5hbWUpXG4gICAgc2V0U3VybmFtZShyZXN1bHQuZGF0YS5zdXJuYW1lKVxuICAgIHNldFN0YXR1cyhyZXN1bHQuZGF0YS5zdGF0dXMpXG4gICAgc2V0UHJpY2UocmVzdWx0LmRhdGEucHJpY2UpXG59XG4gXG4gIGNvbnN0IGdldEN1c3RvbWVycyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFVSTCk7XG4gICAgc2V0Q3VzdG9tZXJzKHJlc3VsdC5kYXRhLmxpc3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCwge1xuICAgICAgQ3VzdG9tZXJJRCxcbiAgICAgIG5hbWUsXG4gICAgICBzdXJuYW1lLFxuICAgICAgc3RhdHVzLFxuICAgICAgcHJpY2UsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBnZXRDdXN0b21lcnMoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVDdXN0b21lciA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7VVJMfS8ke2lkfWApO1xuICAgIGdldEN1c3RvbWVycygpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUN1c3RvbWVyID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnB1dChgJHtVUkx9LyR7aWR9YCwge1xuICAgICAgQ3VzdG9tZXJJRCxcbiAgICAgIG5hbWUsXG4gICAgICBzdXJuYW1lLFxuICAgICAgc3RhdHVzLFxuICAgICAgcHJpY2UsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBnZXRDdXN0b21lcnMoKTtcbiAgfTtcblxuICBjb25zdCBzaG93Q3VzdG9tZXJzID0gKCkgPT4ge1xuICAgIGlmIChjdXN0b21lcnMgJiYgY3VzdG9tZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGN1c3RvbWVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8ZGl2PjxiPkN1c3RvbWVySUQ6PC9iPiB7aXRlbS5DdXN0b21lcklEfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj48Yj5OYW1lOjwvYj4ge2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGI+U3VybmFtZTo8L2I+IHtpdGVtLnN1cm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxiPlN0YXR1czo8L2I+IHtpdGVtLnN0YXR1c308L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGI+UHJpY2U6PC9iPiB7aXRlbS5wcmljZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdF9idXR0b259PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9nZXR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ2V0Q3VzdG9tZXIoaXRlbS5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHZXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX3VwZGF0ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVDdXN0b21lcihpdGVtLmlkKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fZGVsZXRlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUN1c3RvbWVyKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuICggXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5BZG1pbjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvbGF1bmRyeS5wbmdcIlxuICAgICAgICAgIGFsdD1cIlBpY3R1cmVcIlxuICAgICAgICAgIHdpZHRoPXs5MDB9XG4gICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA1MDBweCkgMTAwcHhcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb250VGl0bGV9PjxoMT5Gb3IgQWRtaW4gRWRpdCBEYXRhPC9oMT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9hZGR9PlxuICAgICAgICAgICAgICAgIDxoMj5BZGQgY3VzdG9tZXJzPC9oMj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2PkN1c3RvbWVySUQ6ICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIkN1c3RvbWVySURcIlxuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Q3VzdG9tZXJJRH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXJJRChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIFN1cm5hbWU6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3VybmFtZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdXJuYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICBTdGF0dXM6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0YXR1c31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdHVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICBQcmljZTpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3ByaWNlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fYWRkfW9uQ2xpY2s9eygpID0+IGFkZEN1c3RvbWVyKEN1c3RvbWVySUQsIG5hbWUsIHN1cm5hbWUsIHN0YXR1cywgcHJpY2UpfT5cbiAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX2FkZDF9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0c3RhdHVzSUR9PjxoMj5TVEFUVVM8L2gyPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAgIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c0lEfSBvbkNsaWNrPSB7KCkgPT4gc2V0U3RhdHVzKFwiV2FzaGluZ1wiKSB9PlxuICAgICAgICAgICAgICAgIFdhc2hpbmdcbiAgICAgICAgICAgICAgPC9idXR0b24+IDxiciAvPlxuICAgICAgICAgICAgICA8YnV0dG9uICAgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzSUR9IG9uQ2xpY2s9IHsoKSA9PiBzZXRTdGF0dXMoXCJSaW5zZVwiKSB9PlxuICAgICAgICAgICAgICAgIFJpbnNlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPiA8YnIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiAgIGNsYXNzTmFtZT17c3R5bGVzLnN0YXR1c0lEfSBvbkNsaWNrPSB7KCkgPT4gc2V0U3RhdHVzKFwiQWlyIERyeVwiKSB9PlxuICAgICAgICAgICAgICAgIEFpciBEcnlcbiAgICAgICAgICAgICAgPC9idXR0b24+IDxiciAvPlxuICAgICAgICAgICAgICA8YnV0dG9uICAgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHVzSUR9IG9uQ2xpY2s9IHsoKSA9PiBzZXRTdGF0dXMoXCJTcGluIGRyeWVyXCIpIH0+XG4gICAgICAgICAgICAgICAgU3BpbiBkcnllclxuICAgICAgICAgICAgICA8L2J1dHRvbj4gPGJyIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gICBjbGFzc05hbWU9e3N0eWxlcy5zdGF0dXNGaW5pc2hlZH0gb25DbGljaz0geygpID0+IHNldFN0YXR1cyhcIkZpbmlzaGVkXCIpIH0+XG4gICAgICAgICAgICAgICAgRmluaXNoZWRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj48L2Rpdj5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57c2hvd0N1c3RvbWVycygpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+ICAgXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoYWRtaW4pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xuICByZXR1cm4geyBwcm9wczogeyB0b2tlbjogcmVxLmNvb2tpZXMudG9rZW4gfHwgXCJcIiB9IH07XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2FkbWluLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2FkbWluLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9hZG1pbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=