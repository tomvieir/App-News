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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"SubscribeButton\": \"styles_SubscribeButton__sXlro\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwbmV3cy8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9zdHlsZXMubW9kdWxlLnNjc3M/ZGJlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJTdWJzY3JpYmVCdXR0b25cIjogXCJzdHlsZXNfU3Vic2NyaWJlQnV0dG9uX19zWGxyb1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./styles/Home.module.scss":
/*!*********************************!*\
  !*** ./styles/Home.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"Main\": \"Home_Main__nIPsX\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcG5ld3MvLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcz83ZjY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1haW5cIjogXCJIb21lX01haW5fX25JUHNYXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.scss\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _src_services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/services/stripe */ \"./src/services/stripe.ts\");\n\n\n\n\n\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | App.News\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                children: \"Hey, welcome\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"News about \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 26\n                                    }, this),\n                                    \"the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, this),\n                                    \" world\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                children: [\n                                    \"Get acess to all publications \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 45\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"coding img\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getStaticProps = async ()=>{\n    const price = await _src_services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1KkvTIKPePQDBPOfUzrdYFLL\");\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"en-IN\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product,\n            revalidate: 60 * 60 * 24 //24 horas\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQStDO0FBQ2xCO0FBQ3NDO0FBR3BCO0FBU2hDLFNBQVNJLElBQUksQ0FBQyxFQUFFQyxPQUFPLEdBQWEsRUFBRTtJQUNuRCxxQkFDRTs7MEJBQ0UsOERBQUNKLGtEQUFJOzBCQUNILDRFQUFDSyxPQUFLOzhCQUFDLGlCQUFlOzs7Ozt3QkFBUTs7Ozs7b0JBQ3pCOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDQyxTQUFTLEVBQUVSLHNFQUFXOztrQ0FDMUIsOERBQUNVLFNBQU87OzBDQUNOLDhEQUFDQyxJQUFFOzBDQUFDLGNBRUo7Ozs7O29DQUFLOzBDQUVMLDhEQUFDQyxJQUFFOzs7O29DQUFHOzBDQUVOLDhEQUFDQyxJQUFFOztvQ0FBQyxhQUFXO2tEQUFBLDhEQUFDRCxJQUFFOzs7OzRDQUFHO29DQUFBLE1BQ2Y7a0RBQUEsOERBQUNFLE1BQUk7a0RBQUMsT0FBSzs7Ozs7NENBQU87b0NBQUEsUUFDeEI7Ozs7OztvQ0FBSzswQ0FFTCw4REFBQ0gsSUFBRTs7b0NBQUMsZ0NBQThCO2tEQUFBLDhEQUFDQyxJQUFFOzs7OzRDQUFHO2tEQUN0Qyw4REFBQ0UsTUFBSTs7NENBQUMsTUFBSTs0Q0FBQ1QsT0FBTyxDQUFDVSxNQUFNOzRDQUFDLFFBQU07Ozs7Ozs0Q0FBTzs7Ozs7O29DQUNwQzswQ0FJTCw4REFBQ2IsNEVBQWU7Z0NBQUNjLE9BQU8sRUFBRVgsT0FBTyxDQUFDVyxPQUFPOzs7OztvQ0FBRzs7Ozs7OzRCQUVwQztrQ0FFViw4REFBQ0MsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLG9CQUFvQjt3QkFBQ0MsR0FBRyxFQUFDLFlBQVk7Ozs7OzRCQUFHOzs7Ozs7b0JBQzVDOztvQkFDTixDQUNKO0NBQ0Y7QUFFTSxNQUFNQyxjQUFjLEdBQW1CLFVBQVk7SUFDeEQsTUFBTUMsS0FBSyxHQUFHLE1BQU1sQix3RUFBc0IsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUU1RSxNQUFNRSxPQUFPLEdBQUc7UUFDZFcsT0FBTyxFQUFHSyxLQUFLLENBQUNHLEVBQUU7UUFDbEJULE1BQU0sRUFBRyxJQUFJVSxJQUFJLENBQUNDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFBRUMsS0FBSyxFQUFFLFVBQVU7WUFBRUMsUUFBUSxFQUFFLEtBQUs7U0FBRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDUyxXQUFXLEdBQUcsR0FBRyxDQUFDO0tBRWhIO0lBRUQsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTDFCLE9BQU87WUFDUDJCLFVBQVUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVO1NBQ3BDO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcG5ld3MvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgIEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgU3Vic2NyaWJlQnV0dG9uIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uJ1xuXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tICcuLi9zcmMvc2VydmljZXMvc3RyaXBlJ1xuXG5pbnRlcmZhY2UgSG9tZVByb3Bze1xuICBwcm9kdWN0OntcbiAgICBwcmljZUlkOiBzdHJpbmcsXG4gICAgYW1vdW50OiBudW1iZXJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdCB9OiBIb21lUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHwgQXBwLk5ld3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5NYWlufT5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGg2PlxuICAgICAgICAgICAgSGV5LCB3ZWxjb21lIFxuICAgICAgICAgIDwvaDY+XG5cbiAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgIDxoMT5OZXdzIGFib3V0IDxiciAvPlxuICAgICAgICAgICAgdGhlIDxzcGFuPlJlYWN0PC9zcGFuPiB3b3JsZCBcbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPGg2PkdldCBhY2VzcyB0byBhbGwgcHVibGljYXRpb25zIDxiciAvPlxuICAgICAgICAgICAgPHNwYW4+Zm9yIHtwcm9kdWN0LmFtb3VudH0gbW9udGg8L3NwYW4+XG4gICAgICAgICAgPC9oNj5cblxuICAgICAgICAgIFxuXG4gICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiBwcmljZUlkPXtwcm9kdWN0LnByaWNlSWR9Lz5cblxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2F2YXRhci5zdmdcIiBhbHQ9XCJjb2RpbmcgaW1nXCIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUoJ3ByaWNlXzFLa3ZUSUtQZVBRREJQT2ZVenJkWUZMTCcpXG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkIDogcHJpY2UuaWQsXG4gICAgYW1vdW50IDogbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1JTicsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQgLyAxMDApXG4gICBcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQgLy8yNCBob3Jhc1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkhlYWQiLCJTdWJzY3JpYmVCdXR0b24iLCJzdHJpcGUiLCJIb21lIiwicHJvZHVjdCIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsIk1haW4iLCJzZWN0aW9uIiwiaDYiLCJiciIsImgxIiwic3BhbiIsImFtb3VudCIsInByaWNlSWQiLCJpbWciLCJzcmMiLCJhbHQiLCJnZXRTdGF0aWNQcm9wcyIsInByaWNlIiwicHJpY2VzIiwicmV0cmlldmUiLCJpZCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwidW5pdF9hbW91bnQiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github, google\");\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.post(\"subscribe\");\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_4__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId: sessionId\n            });\n        } catch  {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(\"Algo deu errado! Tente novamente\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().SubscribeButton),\n        onClick: handleSubscribe,\n        children: \"Subscribe now\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wever\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\next\\\\appnews\\\\src\\\\components\\\\SubscribeButton\\\\index.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFxRDtBQUNkO0FBQ0U7QUFDYztBQUNiO0FBQ0s7QUFPeEMsU0FBU00sZUFBZSxDQUFDLEVBQUVDLE9BQU8sR0FBbUIsRUFBRTtJQUMxRCxNQUFNLEVBQUNDLElBQUksRUFBRUMsT0FBTyxHQUFDLEdBQUdULDJEQUFVLEVBQUU7SUFFcEMsZUFBZVUsZUFBZSxHQUFHO1FBQzdCLElBQUksQ0FBQ0QsT0FBTyxFQUFFO1lBQ1ZSLHVEQUFNLENBQUMsZ0JBQWdCLENBQUM7WUFDeEIsT0FBTTtTQUNUO1FBRUQsSUFBSTtZQUNBLE1BQU1VLFFBQVEsR0FBRyxNQUFNUixtREFBUSxDQUFDLFdBQVcsQ0FBQztZQUU1QyxNQUFNLEVBQUVVLFNBQVMsR0FBRSxHQUFHRixRQUFRLENBQUNILElBQUk7WUFFbkMsTUFBTU0sTUFBTSxHQUFHLE1BQU1WLGdFQUFXLEVBQUU7WUFDbEMsTUFBTVUsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQztnQkFBQ0YsU0FBUyxFQUFFQSxTQUFTO2FBQUMsQ0FBQztTQUcxRCxRQUFNO1lBQ0hYLHVEQUFXLENBQUMsa0NBQWtDLENBQUM7U0FDbEQ7S0FDSjtJQUNELHFCQUNJLDhEQUFDZSxRQUFNO1FBQUNDLElBQUksRUFBQyxRQUFRO1FBQUNDLFNBQVMsRUFBRWQsNEVBQXNCO1FBQUVlLE9BQU8sRUFBRVYsZUFBZTtrQkFBRSxlQUVuRjs7Ozs7WUFBUyxDQUNaO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBuZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeD85MGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25JbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xyXG5pbXBvcnQgeyBnZXRTdHJpcGVKcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0cmlwZS1qcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuXHJcbmludGVyZmFjZSBTdWJzY3JpYmVCdXR0b24ge1xyXG4gICAgcHJpY2VJZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKHsgcHJpY2VJZCB9OiBTdWJzY3JpYmVCdXR0b24pIHtcclxuICAgIGNvbnN0IHtkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHNpZ25JbignZ2l0aHViLCBnb29nbGUnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJ3N1YnNjcmliZScpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGdldFN0cmlwZUpzKClcclxuICAgICAgICAgICAgYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7c2Vzc2lvbklkOiBzZXNzaW9uSWR9KVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfWNhdGNoIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoJ0FsZ28gZGV1IGVycmFkbyEgVGVudGUgbm92YW1lbnRlJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLlN1YnNjcmliZUJ1dHRvbn0gb25DbGljaz17aGFuZGxlU3Vic2NyaWJlfT5cclxuICAgICAgICAgICAgU3Vic2NyaWJlIG5vd1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJzaWduSW4iLCJ0b2FzdCIsImFwaSIsImdldFN0cmlwZUpzIiwic3R5bGVzIiwiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsImRhdGEiLCJzZXNzaW9uIiwiaGFuZGxlU3Vic2NyaWJlIiwicmVzcG9uc2UiLCJwb3N0Iiwic2Vzc2lvbklkIiwic3RyaXBlIiwicmVkaXJlY3RUb0NoZWNrb3V0IiwiZXJyb3IiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUVuQixNQUFNQyxHQUFHLEdBQUdELG1EQUFZLENBQUM7SUFDNUJHLE9BQU8sRUFBRSxNQUFNO0NBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBuZXdzLy4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogXCIvYXBpXCIsXHJcbn0pIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51KkvQxKPePQDBPOf71fyBKuo0HRCZo5BZJrZdyKbnQYVuBYZYvMaHI9avQUZAyD5m4ViyE9epJJoZhuH9UFW8NB500tZofVOm4\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUV4QyxlQUFlQyxXQUFXLEdBQUU7SUFDL0IsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLDZEQUFVLENBQUNHLDZHQUF5QyxDQUFDO0lBRTVFLE9BQU9ELFFBQVE7Q0FDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBuZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS1qcy50cz81OThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHJpcGVKcygpe1xyXG4gICAgY29uc3Qgc3RyaXBlSnMgPSBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZKVxyXG5cclxuICAgIHJldHVybiBzdHJpcGVKc1xyXG59Il0sIm5hbWVzIjpbImxvYWRTdHJpcGUiLCJnZXRTdHJpcGVKcyIsInN0cmlwZUpzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"subscription\",\n        version: \"0.1.0\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQjtBQUdwQixNQUFNQyxNQUFNLEdBQUcsSUFBSUQsK0NBQU0sQ0FDNUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0lBQ0lDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUU7UUFDTEMsSUFBSSxFQUFFLGNBQWM7UUFDcEJDLE9BQU8sRUFBRSxPQUFPO0tBQ25CO0NBQ0osQ0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcG5ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2FiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXHJcbiAgICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcclxuICAgIHtcclxuICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXHJcbiAgICAgICAgYXBwSW5mbzoge1xyXG4gICAgICAgICAgICBuYW1lOiAnc3Vic2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMS4wJyxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4pIl0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwibmFtZSIsInZlcnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();