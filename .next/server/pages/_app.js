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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toastCss\": () => (/* binding */ toastCss),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction toastCss() {\n    return {\n        position: \"top-right\",\n        autoClose: 3000,\n        hideProgressBar: false,\n        closeOnClick: true,\n        pauseOnHover: false,\n        draggable: true,\n        progress: undefined\n    };\n}\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: pageProps.session,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                position: \"top-left\",\n                autoClose: 5000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\_app.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\_app.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBR2tCO0FBQ0E7QUFDRjtBQUV4QyxTQUFTRyxRQUFRLEdBQUc7SUFDekIsT0FBTztRQUNQQyxRQUFRLEVBQUUsV0FBVztRQUNyQkMsU0FBUyxFQUFFLElBQUk7UUFDZkMsZUFBZSxFQUFFLEtBQUs7UUFDdEJDLFlBQVksRUFBRSxJQUFJO1FBQ2xCQyxZQUFZLEVBQUUsS0FBSztRQUNuQkMsU0FBUyxFQUFFLElBQUk7UUFDZkMsUUFBUSxFQUFFQyxTQUFTO0tBQ2xCO0NBRUY7QUFFRCxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUVqRCxxQkFDRSw4REFBQ2IsNERBQWU7UUFBQ2MsT0FBTyxFQUFFRCxTQUFTLENBQUNDLE9BQU87OzBCQUN6Qyw4REFBQ2IsMERBQWM7Z0JBQ2JFLFFBQVEsRUFBQyxVQUFVO2dCQUNuQkMsU0FBUyxFQUFFLElBQUk7Z0JBQ2ZDLGVBQWUsRUFBRSxLQUFLO2dCQUN0QlUsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCVCxZQUFZO2dCQUNaVSxHQUFHLEVBQUUsS0FBSztnQkFDVkMsZ0JBQWdCO2dCQUNoQlQsU0FBUztnQkFDVEQsWUFBWTs7Ozs7b0JBQUc7MEJBQ2pCLDhEQUFDUiwwREFBTTs7OztvQkFBRzswQkFDViw4REFBQ2EsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7O1lBQ1gsQ0FDcEI7Q0FDRjtBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwbmV3cy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xuXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuZXhwb3J0IGZ1bmN0aW9uIHRvYXN0Q3NzKCkge1xuICByZXR1cm4ge1xuICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIixcbiAgYXV0b0Nsb3NlOiAzMDAwLFxuICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgcHJvZ3Jlc3M6IHVuZGVmaW5lZCxcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cbiAgICAgIDxUb2FzdENvbnRhaW5lciBcbiAgICAgICAgcG9zaXRpb249XCJ0b3AtbGVmdFwiXG4gICAgICAgIGF1dG9DbG9zZT17NTAwMH1cbiAgICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgcnRsPXtmYWxzZX1cbiAgICAgICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgcGF1c2VPbkhvdmVyIC8+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TZXNzaW9uUHJvdmlkZXIgPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiU2Vzc2lvblByb3ZpZGVyIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdENzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwicHJvZ3Jlc3MiLCJ1bmRlZmluZWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJuZXdlc3RPblRvcCIsInJ0bCIsInBhdXNlT25Gb2N1c0xvc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/components/Header/SignInButton/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/Header/SignInButton/index.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignInButton\": () => (/* binding */ SignInButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction SignInButton() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    return session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SignInButton),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: session.user.image,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\SignInButton\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            session.user.name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {\n                color: \"#727272\",\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SvgCloseIcon),\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\SignInButton\\\\index.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\SignInButton\\\\index.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().SignInButton),\n        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(\"github, facebook\")\n        ,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaUser, {\n                color: \"#06ccfd\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\SignInButton\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            \"SignIn\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\SignInButton\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvU2lnbkluQnV0dG9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ0g7QUFDeUI7QUFDcEI7QUFFbkMsU0FBU00sWUFBWSxHQUFHO0lBQzNCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEdBQUUsR0FBR0osMkRBQVUsRUFBRTtJQUV0QyxPQUFPSSxPQUFPLGlCQUNWLDhEQUFDQyxRQUFNO1FBQUNDLElBQUksRUFBQyxRQUFRO1FBQUNDLFNBQVMsRUFBRU4seUVBQW1COzswQkFDaEQsOERBQUNPLEtBQUc7Z0JBQUNDLEdBQUcsRUFBRUwsT0FBTyxDQUFDTSxJQUFJLENBQUNDLEtBQUs7Z0JBQUVDLEdBQUcsRUFBQyxFQUFFOzs7OztvQkFBRztZQUN0Q1IsT0FBTyxDQUFDTSxJQUFJLENBQUNHLElBQUk7MEJBQ2xCLDhEQUFDaEIsK0NBQUc7Z0JBQUNpQixLQUFLLEVBQUMsU0FBUztnQkFBQ1AsU0FBUyxFQUFFTix5RUFBbUI7Z0JBQUVlLE9BQU8sRUFBRSxJQUFNakIsd0RBQU8sRUFBRTs7Ozs7b0JBQUk7Ozs7OztZQUM1RSxpQkFFVCw4REFBQ00sUUFBTTtRQUFDQyxJQUFJLEVBQUMsUUFBUTtRQUFDQyxTQUFTLEVBQUVOLHlFQUFtQjtRQUFFZSxPQUFPLEVBQUUsSUFBTWxCLHVEQUFNLENBQUMsa0JBQWtCLENBQUM7UUFBQTs7MEJBQzNGLDhEQUFDRixrREFBTTtnQkFBQ2tCLEtBQUssRUFBQyxTQUFTOzs7OztvQkFBRztZQUFBLFFBRzlCOzs7Ozs7WUFBUyxDQUNaO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBuZXdzLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL1NpZ25JbkJ1dHRvbi9pbmRleC50c3g/OThkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYVVzZXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IEZpWCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lnbkluQnV0dG9uKCkge1xyXG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gICAgcmV0dXJuIHNlc3Npb24gPyAoXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuU2lnbkluQnV0dG9ufSA+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIHtzZXNzaW9uLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgPEZpWCBjb2xvcj0nIzcyNzI3MicgY2xhc3NOYW1lPXtzdHlsZXMuU3ZnQ2xvc2VJY29ufSBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApIDogKFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLlNpZ25JbkJ1dHRvbn0gb25DbGljaz17KCkgPT4gc2lnbkluKCdnaXRodWIsIGZhY2Vib29rJyl9ID5cclxuICAgICAgICAgICAgPEZhVXNlciBjb2xvcj0nIzA2Y2NmZCcgLz5cclxuICAgICAgICAgICAgU2lnbkluXHJcblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJGYVVzZXIiLCJGaVgiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInN0eWxlcyIsIlNpZ25JbkJ1dHRvbiIsImRhdGEiLCJzZXNzaW9uIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInVzZXIiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJjb2xvciIsIlN2Z0Nsb3NlSWNvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/SignInButton/index.tsx\n");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInButton */ \"./src/components/Header/SignInButton/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/logo.svg\",\n                    alt: \"Logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"http://localhost:3000/\",\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active),\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            children: \"Posts\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignInButton__WEBPACK_IMPORTED_MODULE_1__.SignInButton, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ0o7QUFFbkMsU0FBU0UsTUFBTSxHQUFHO0lBQ3JCLHFCQUNBLDhEQUFDQyxRQUFNO1FBQUNDLFNBQVMsRUFBRUgsNEVBQXNCO2tCQUNyQyw0RUFBQ0ssS0FBRztZQUFDRixTQUFTLEVBQUVILDBFQUFvQjs7OEJBQ2hDLDhEQUFDTyxLQUFHO29CQUFDQyxHQUFHLEVBQUMsa0JBQWtCO29CQUFDQyxHQUFHLEVBQUMsTUFBTTs7Ozs7d0JBQUc7OEJBRXpDLDhEQUFDQyxLQUFHOztzQ0FDQSw4REFBQ0MsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLHdCQUF3Qjs0QkFBQ1QsU0FBUyxFQUFFSCxtRUFBYTtzQ0FBRSxNQUFJOzs7OztnQ0FBSTtzQ0FDbkUsOERBQUNXLEdBQUM7NEJBQUNDLElBQUksRUFBQyxFQUFFO3NDQUFDLE9BQUs7Ozs7O2dDQUFJOzs7Ozs7d0JBQ2xCOzhCQUVOLDhEQUFDYix1REFBWTs7Ozt3QkFBRzs7Ozs7O2dCQUNkOzs7OztZQUNELENBQ1I7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcG5ld3MvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4PzQwMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbkluQnV0dG9uIH0gZnJvbSAnLi9TaWduSW5CdXR0b24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250YWluZXJ9ID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiIGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX0+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Qb3N0czwvYT4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxTaWduSW5CdXR0b24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlNpZ25JbkJ1dHRvbiIsInN0eWxlcyIsIkhlYWRlciIsImhlYWRlciIsImNsYXNzTmFtZSIsImhlYWRlckNvbnRhaW5lciIsImRpdiIsImhlYWRlckNvbnRlbnQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYXYiLCJhIiwiaHJlZiIsImFjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

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

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

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