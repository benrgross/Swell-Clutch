/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Swell",{

/***/ "./components/CurrentSwell.js":
/*!************************************!*\
  !*** ./components/CurrentSwell.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Actions */ \"./utils/Actions.js\");\n/* harmony import */ var _utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GlobalState */ \"./utils/GlobalState.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/bengross/Desktop/Swell Clutch/Swell-Clutch/components/CurrentSwell.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CurrentSwell() {\n  _s();\n\n  var _this = this;\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession)(),\n      _useSession2 = (0,_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  var _useStoreContext = (0,_utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useStoreContext)(),\n      _useStoreContext2 = (0,_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useStoreContext, 2),\n      state = _useStoreContext2[0],\n      dispatch = _useStoreContext2[1];\n\n  var conditionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n  var noteRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n  var swell_current = state.swell.swell_current;\n  var tides = state.tides;\n  var swells = [];\n  console.log(session.id);\n\n  var direction = function direction(swell) {\n    console.log(Math.round(swell.direction));\n    var x = Number(Math.round(swell.direction) / 22.5 + 0.5);\n    console.log(x);\n    var arr = [\"N\", \"NNE\", \"NE\", \"ENE\", \"E\", \"ESE\", \"SE\", \"SSE\", \"S\", \"SSW\", \"SW\", \"WSW\", \"W\", \"WNW\", \"NW\", \"NNW\"];\n    var genDirrection = arr[Math.round(x % 16)];\n    var swellString = swell.height.toFixed(1) + \"ft\" + \" \" + genDirrection + \" \" + \"@\" + \" \" + swell.period + \"s\";\n    swells.push(swellString);\n    console.log(swells);\n    return swellString;\n  };\n\n  var surfHeight = function surfHeight(min, max) {\n    if (max === min) {\n      return Math.round(min);\n    } else return min.toFixed(1) + \"-\" + max.toFixed(1);\n  };\n\n  var getWind = function getWind(wind) {\n    var x = Math.round(wind.direction) / 22.5 + 0.5;\n    var arr = [\"N\", \"NNE\", \"NE\", \"ENE\", \"E\", \"ESE\", \"SE\", \"SSE\", \"S\", \"SSW\", \"SW\", \"WSW\", \"W\", \"WNW\", \"NW\", \"NNW\"];\n    var genDirrection = arr[Math.round(x % 16)];\n    return Math.round(wind.speed) + \"kts\" + \" \" + genDirrection;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"card\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n      className: \"card-header\",\n      children: \"Surf Report\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card-body\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n        className: \"card-title\",\n        children: state.spotName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: [\"surf report: \", surfHeight(state.surf.min, state.surf.max), \"ft\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), state.swells.map(function (swell, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"card-text\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [\"swell \", index += 1, \": \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 15\n          }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: direction(swell)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 15\n          }, _this)]\n        }, index + 1, true, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: [\"wind: \", getWind(state.currentWind)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        \"class\": \"form-select\",\n        \"aria-label\": \"Default select example\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          selected: true,\n          children: \"Select Conditions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Poor\",\n          children: \"Poor\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Fair\",\n          children: \"Fair\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Good\",\n          children: \"Good\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Epic\",\n          children: \"Epic\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"#\",\n        className: \"btn btn-primary\",\n        children: \"Go somewhere\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CurrentSwell, \"tr9SZyqjHdV9TEIKwC6a6tiPcYY=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession, _utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useStoreContext];\n});\n\n_c = CurrentSwell;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrentSwell);\n\nvar _c;\n\n$RefreshReg$(_c, \"CurrentSwell\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW50U3dlbGwuanM/MTgwYiJdLCJuYW1lcyI6WyJDdXJyZW50U3dlbGwiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VTdG9yZUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29uZGl0aW9uUmVmIiwidXNlUmVmIiwibm90ZVJlZiIsInN3ZWxsX2N1cnJlbnQiLCJzd2VsbCIsInRpZGVzIiwic3dlbGxzIiwiY29uc29sZSIsImxvZyIsImlkIiwiZGlyZWN0aW9uIiwiTWF0aCIsInJvdW5kIiwieCIsIk51bWJlciIsImFyciIsImdlbkRpcnJlY3Rpb24iLCJzd2VsbFN0cmluZyIsImhlaWdodCIsInRvRml4ZWQiLCJwZXJpb2QiLCJwdXNoIiwic3VyZkhlaWdodCIsIm1pbiIsIm1heCIsImdldFdpbmQiLCJ3aW5kIiwic3BlZWQiLCJzcG90TmFtZSIsInN1cmYiLCJtYXAiLCJpbmRleCIsImN1cnJlbnRXaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUFBLG9CQUNLQyw0REFBVSxFQURmO0FBQUE7QUFBQSxNQUNmQyxPQURlO0FBQUEsTUFDTkMsT0FETTs7QUFBQSx5QkFFSUMsbUVBQWUsRUFGbkI7QUFBQTtBQUFBLE1BRWZDLEtBRmU7QUFBQSxNQUVSQyxRQUZROztBQUd0QixNQUFNQyxZQUFZLEdBQUdDLDZDQUFNLEVBQTNCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCw2Q0FBTSxFQUF0QjtBQUpzQixNQUtkRSxhQUxjLEdBS0lMLEtBQUssQ0FBQ00sS0FMVixDQUtkRCxhQUxjO0FBQUEsTUFPZEUsS0FQYyxHQU9KUCxLQVBJLENBT2RPLEtBUGM7QUFRdEIsTUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVliLE9BQU8sQ0FB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LGVBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRixlQTJCRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQVksaUJBQVMsRUFBQyxpQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0Q7O0dBdkhRdkMsWTtVQUNvQkMsd0QsRUFDREcsK0Q7OztLQUZuQkosWTtBQXlIVCwrREFBZUEsWUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ3VycmVudFN3ZWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUSURFIH0gZnJvbSBcIi4uL3V0aWxzL0FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZVN0b3JlQ29udGV4dCB9IGZyb20gXCIuLi91dGlscy9HbG9iYWxTdGF0ZVwiO1xuaW1wb3J0IHsgc2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmZ1bmN0aW9uIEN1cnJlbnRTd2VsbCgpIHtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVN0b3JlQ29udGV4dCgpO1xuICBjb25zdCBjb25kaXRpb25SZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgbm90ZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCB7IHN3ZWxsX2N1cnJlbnQgfSA9IHN0YXRlLnN3ZWxsO1xuXG4gIGNvbnN0IHsgdGlkZXMgfSA9IHN0YXRlO1xuICBjb25zdCBzd2VsbHMgPSBbXTtcbiAgY29uc29sZS5sb2coc2Vzc2lvbi5pZCk7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IChzd2VsbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKE1hdGgucm91bmQoc3dlbGwuZGlyZWN0aW9uKSk7XG4gICAgbGV0IHggPSBOdW1iZXIoTWF0aC5yb3VuZChzd2VsbC5kaXJlY3Rpb24pIC8gMjIuNSArIDAuNSk7XG4gICAgY29uc29sZS5sb2coeCk7XG4gICAgbGV0IGFyciA9IFtcbiAgICAgIFwiTlwiLFxuICAgICAgXCJOTkVcIixcbiAgICAgIFwiTkVcIixcbiAgICAgIFwiRU5FXCIsXG4gICAgICBcIkVcIixcbiAgICAgIFwiRVNFXCIsXG4gICAgICBcIlNFXCIsXG4gICAgICBcIlNTRVwiLFxuICAgICAgXCJTXCIsXG4gICAgICBcIlNTV1wiLFxuICAgICAgXCJTV1wiLFxuICAgICAgXCJXU1dcIixcbiAgICAgIFwiV1wiLFxuICAgICAgXCJXTldcIixcbiAgICAgIFwiTldcIixcbiAgICAgIFwiTk5XXCIsXG4gICAgXTtcbiAgICBsZXQgZ2VuRGlycmVjdGlvbiA9IGFycltNYXRoLnJvdW5kKHggJSAxNildO1xuXG4gICAgbGV0IHN3ZWxsU3RyaW5nID1cbiAgICAgIHN3ZWxsLmhlaWdodC50b0ZpeGVkKDEpICtcbiAgICAgIFwiZnRcIiArXG4gICAgICBcIiBcIiArXG4gICAgICBnZW5EaXJyZWN0aW9uICtcbiAgICAgIFwiIFwiICtcbiAgICAgIFwiQFwiICtcbiAgICAgIFwiIFwiICtcbiAgICAgIHN3ZWxsLnBlcmlvZCArXG4gICAgICBcInNcIjtcblxuICAgIHN3ZWxscy5wdXNoKHN3ZWxsU3RyaW5nKTtcbiAgICBjb25zb2xlLmxvZyhzd2VsbHMpO1xuXG4gICAgcmV0dXJuIHN3ZWxsU3RyaW5nO1xuICB9O1xuXG4gIGNvbnN0IHN1cmZIZWlnaHQgPSAobWluLCBtYXgpID0+IHtcbiAgICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKG1pbik7XG4gICAgfSBlbHNlIHJldHVybiBtaW4udG9GaXhlZCgxKSArIFwiLVwiICsgbWF4LnRvRml4ZWQoMSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0V2luZCA9ICh3aW5kKSA9PiB7XG4gICAgbGV0IHggPSBNYXRoLnJvdW5kKHdpbmQuZGlyZWN0aW9uKSAvIDIyLjUgKyAwLjU7XG4gICAgbGV0IGFyciA9IFtcbiAgICAgIFwiTlwiLFxuICAgICAgXCJOTkVcIixcbiAgICAgIFwiTkVcIixcbiAgICAgIFwiRU5FXCIsXG4gICAgICBcIkVcIixcbiAgICAgIFwiRVNFXCIsXG4gICAgICBcIlNFXCIsXG4gICAgICBcIlNTRVwiLFxuICAgICAgXCJTXCIsXG4gICAgICBcIlNTV1wiLFxuICAgICAgXCJTV1wiLFxuICAgICAgXCJXU1dcIixcbiAgICAgIFwiV1wiLFxuICAgICAgXCJXTldcIixcbiAgICAgIFwiTldcIixcbiAgICAgIFwiTk5XXCIsXG4gICAgXTtcblxuICAgIGxldCBnZW5EaXJyZWN0aW9uID0gYXJyW01hdGgucm91bmQoeCAlIDE2KV07XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCh3aW5kLnNwZWVkKSArIFwia3RzXCIgKyBcIiBcIiArIGdlbkRpcnJlY3Rpb247XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlN1cmYgUmVwb3J0PC9oNT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3N0YXRlLnNwb3ROYW1lfTwvaDU+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgc3VyZiByZXBvcnQ6IHtzdXJmSGVpZ2h0KHN0YXRlLnN1cmYubWluLCBzdGF0ZS5zdXJmLm1heCl9ZnRcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIHtzdGF0ZS5zd2VsbHMubWFwKChzd2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHAga2V5PXtpbmRleCArIDF9IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuPnN3ZWxsIHsoaW5kZXggKz0gMSl9OiA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICA8c3Bhbj57ZGlyZWN0aW9uKHN3ZWxsKX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuPndpbmQ6IHtnZXRXaW5kKHN0YXRlLmN1cnJlbnRXaW5kKX08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tc2VsZWN0XCIgYXJpYS1sYWJlbD1cIkRlZmF1bHQgc2VsZWN0IGV4YW1wbGVcIj5cbiAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPlNlbGVjdCBDb25kaXRpb25zPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBvb3JcIj5Qb29yPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZhaXJcIj5GYWlyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdvb2RcIj5Hb29kPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVwaWNcIj5FcGljPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgIEdvIHNvbWV3aGVyZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudFN3ZWxsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CurrentSwell.js\n");

/***/ })

});