/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Header/SignInButton/styles.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/Header/SignInButton/styles.module.scss ***!
  \***************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"SignInButton\": \"styles_SignInButton__RPq5L\",\n\t\"SvgCloseIcon\": \"styles_SvgCloseIcon__9moqQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2lnbkluQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwbmV3cy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TaWduSW5CdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzP2Q5NWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiU2lnbkluQnV0dG9uXCI6IFwic3R5bGVzX1NpZ25JbkJ1dHRvbl9fUlBxNUxcIixcblx0XCJTdmdDbG9zZUljb25cIjogXCJzdHlsZXNfU3ZnQ2xvc2VJY29uX185bW9xUVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/SignInButton/styles.module.scss\n");

/***/ }),

/***/ "./src/components/Header/styles.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/styles.module.scss ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"headerContainer\": \"styles_headerContainer__uAgJk\",\n\t\"headerContent\": \"styles_headerContent__h9eUe\",\n\t\"active\": \"styles_active__l7I1o\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcG5ld3MvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLm1vZHVsZS5zY3NzP2EyMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyQ29udGFpbmVyXCI6IFwic3R5bGVzX2hlYWRlckNvbnRhaW5lcl9fdUFnSmtcIixcblx0XCJoZWFkZXJDb250ZW50XCI6IFwic3R5bGVzX2hlYWRlckNvbnRlbnRfX2g5ZVVlXCIsXG5cdFwiYWN0aXZlXCI6IFwic3R5bGVzX2FjdGl2ZV9fbDdJMW9cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/styles.module.scss\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: pageProps.session,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBR2tCO0FBQ0E7QUFFakQsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNILDREQUFlO1FBQUNJLE9BQU8sRUFBRUQsU0FBUyxDQUFDQyxPQUFPOzswQkFDekMsOERBQUNMLDBEQUFNOzs7O29CQUFHOzBCQUNWLDhEQUFDRyxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7Ozs7WUFDWCxDQUNwQjtDQUNGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBuZXdzLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnXG5cbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Nlc3Npb25Qcm92aWRlciA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/components/Header/SignInButton/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/Header/SignInButton/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignInButton\": () => (/* binding */ SignInButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction SignInButton() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    console.log(session);\n    return session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SignInButton),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: session.user.image,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\SignInButton\\\\index.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            session.user.name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {\n                color: \"#727272\",\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SvgCloseIcon),\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\SignInButton\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\SignInButton\\\\index.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SignInButton),\n        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"github, facebook\")\n        ,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaUser, {\n                color: \"#06ccfd\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\SignInButton\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            \"SignIn\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\SignInButton\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2lnbkluQnV0dG9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0g7QUFDeUI7QUFDcEI7QUFFbkMsU0FBU00sWUFBWSxHQUFHO0lBQzNCLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxPQUFPLEdBQUMsR0FBR0osMkRBQVUsRUFBRTtJQUNwQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQyxDQUFDO0lBSXJCLE9BQU9BLE9BQU8saUJBQ1YsOERBQUNHLFFBQU07UUFBQ0MsSUFBSSxFQUFDLFFBQVE7UUFBQ0MsU0FBUyxFQUFFUix5RUFBbUI7OzBCQUNoRCw4REFBQ1MsS0FBRztnQkFBQ0MsR0FBRyxFQUFFUCxPQUFPLENBQUNRLElBQUksQ0FBQ0MsS0FBSztnQkFBRUMsR0FBRyxFQUFDLEVBQUU7Ozs7O29CQUFHO1lBQ2xDVixPQUFPLENBQUNRLElBQUksQ0FBQ0csSUFBSTswQkFDdEIsOERBQUNsQiwrQ0FBRztnQkFBQ21CLEtBQUssRUFBQyxTQUFTO2dCQUFDUCxTQUFTLEVBQUVSLHlFQUFtQjtnQkFBRWlCLE9BQU8sRUFBRSxJQUFNbkIsd0RBQU8sRUFBRTs7Ozs7b0JBQUc7Ozs7OztZQUMzRSxpQkFFVCw4REFBQ1EsUUFBTTtRQUFDQyxJQUFJLEVBQUMsUUFBUTtRQUFDQyxTQUFTLEVBQUVSLHlFQUFtQjtRQUFFaUIsT0FBTyxFQUFFLElBQU1wQix1REFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQUE7OzBCQUMzRiw4REFBQ0Ysa0RBQU07Z0JBQUNvQixLQUFLLEVBQUMsU0FBUzs7Ozs7b0JBQUc7WUFBQSxRQUc5Qjs7Ozs7O1lBQVMsQ0FDWjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwbmV3cy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9TaWduSW5CdXR0b24vaW5kZXgudHN4Pzk4ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFVc2VyIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBGaVggfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpZ25JbkJ1dHRvbigpIHtcclxuICAgIGNvbnN0IHtkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcclxuICAgIGNvbnNvbGUubG9nKHNlc3Npb24pO1xyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiBzZXNzaW9uID8gKFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLlNpZ25JbkJ1dHRvbn0gPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAge3Nlc3Npb24udXNlci5uYW1lfVxyXG4gICAgICAgICAgICA8RmlYIGNvbG9yPScjNzI3MjcyJyBjbGFzc05hbWU9e3N0eWxlcy5TdmdDbG9zZUljb259IG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0vPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKSA6IChcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5TaWduSW5CdXR0b259IG9uQ2xpY2s9eygpID0+IHNpZ25JbignZ2l0aHViLCBmYWNlYm9vaycpfSA+XHJcbiAgICAgICAgICAgIDxGYVVzZXIgY29sb3I9JyMwNmNjZmQnIC8+XHJcbiAgICAgICAgICAgIFNpZ25JbiBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkZhVXNlciIsIkZpWCIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwic3R5bGVzIiwiU2lnbkluQnV0dG9uIiwiZGF0YSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInVzZXIiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJjb2xvciIsIlN2Z0Nsb3NlSWNvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/SignInButton/index.tsx\n");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInButton */ \"./src/components/Header/SignInButton/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/logo.svg\",\n                    alt: \"Logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active),\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"Posts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignInButton__WEBPACK_IMPORTED_MODULE_1__.SignInButton, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ0o7QUFFbkMsU0FBU0UsTUFBTSxHQUFHO0lBQ3JCLHFCQUNBLDhEQUFDQyxRQUFNO1FBQUNDLFNBQVMsRUFBRUgsNEVBQXNCO2tCQUNyQyw0RUFBQ0ssS0FBRztZQUFDRixTQUFTLEVBQUVILDBFQUFvQjs7OEJBQ2hDLDhEQUFDTyxLQUFHO29CQUFDQyxHQUFHLEVBQUMsa0JBQWtCO29CQUFDQyxHQUFHLEVBQUMsTUFBTTs7Ozs7d0JBQUc7OEJBRXpDLDhEQUFDQyxLQUFHOztzQ0FDQSw4REFBQ0MsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLEVBQUU7NEJBQUNULFNBQVMsRUFBRUgsbUVBQWE7c0NBQUUsTUFBSTs7Ozs7Z0NBQUk7c0NBQzdDLDhEQUFDVyxHQUFDOzRCQUFDQyxJQUFJLEVBQUMsRUFBRTtzQ0FBQyxPQUFLOzs7OztnQ0FBSTs7Ozs7O3dCQUNsQjs4QkFFTiw4REFBQ2IsdURBQVk7Ozs7d0JBQUc7Ozs7OztnQkFDZDs7Ozs7WUFDRCxDQUNSO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBuZXdzLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD80MDAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25JbkJ1dHRvbiB9IGZyb20gJy4vU2lnbkluQnV0dG9uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGFpbmVyfSA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250ZW50fT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiIC8+XHJcblxyXG4gICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX0+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Qb3N0czwvYT4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxTaWduSW5CdXR0b24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlNpZ25JbkJ1dHRvbiIsInN0eWxlcyIsIkhlYWRlciIsImhlYWRlciIsImNsYXNzTmFtZSIsImhlYWRlckNvbnRhaW5lciIsImRpdiIsImhlYWRlckNvbnRlbnQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYXYiLCJhIiwiaHJlZiIsImFjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();