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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Actions */ \"./utils/Actions.js\");\n/* harmony import */ var _utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GlobalState */ \"./utils/GlobalState.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/bengross/Desktop/Swell Clutch/Swell-Clutch/components/CurrentSwell.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction CurrentSwell() {\n  _s();\n\n  var _this = this;\n\n  var _useStoreContext = (0,_utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useStoreContext)(),\n      _useStoreContext2 = (0,_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useStoreContext, 2),\n      state = _useStoreContext2[0],\n      dispatch = _useStoreContext2[1];\n\n  var conditionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n  var noteRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n  var swell_current = state.swell.swell_current;\n  var tides = state.tides;\n  var things = [];\n\n  var direction = function direction(swell) {\n    console.log(Math.round(swell.direction));\n    var x = Number(Math.round(swell.direction) / 22.5 + 0.5);\n    console.log(x);\n    var arr = [\"N\", \"NNE\", \"NE\", \"ENE\", \"E\", \"ESE\", \"SE\", \"SSE\", \"S\", \"SSW\", \"SW\", \"WSW\", \"W\", \"WNW\", \"NW\", \"NNW\"];\n    var genDirrection = arr[Math.round(x % 16)];\n    var string = swell.height.toFixed(1) + \"ft\" + \" \" + genDirrection + \" \" + \"@\" + \" \" + swell.period + \"s\";\n    things.push(string);\n    return string;\n  };\n\n  var surfHeight = function surfHeight(min, max) {\n    if (max === min) {\n      return Math.round(min);\n    } else return min.toFixed(1) + \"-\" + max.toFixed(1);\n  };\n\n  var getWind = function getWind(wind) {\n    var x = Math.round(wind.direction) / 22.5 + 0.5;\n    var arr = [\"N\", \"NNE\", \"NE\", \"ENE\", \"E\", \"ESE\", \"SE\", \"SSE\", \"S\", \"SSW\", \"SW\", \"WSW\", \"W\", \"WNW\", \"NW\", \"NNW\"];\n    var genDirrection = arr[Math.round(x % 16)];\n    return Math.round(wind.speed) + \"kts\" + \" \" + genDirrection;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"card\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n      className: \"card-header\",\n      children: \"Surf Report\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card-body\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n        className: \"card-title\",\n        children: state.spotName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: [\"surf report: \", surfHeight(state.surf.min, state.surf.max), \"ft\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, this), state.swells.map(function (swell, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"card-text\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [\"swell \", index += 1, \": \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 15\n          }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: direction(swell)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 15\n          }, _this)]\n        }, index + 1, true, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: [\"wind: \", getWind(state.currentWind)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        \"class\": \"form-select\",\n        \"aria-label\": \"Default select example\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          selected: true,\n          children: \"Select Conditions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Poor\",\n          children: \"Poor\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Fair\",\n          children: \"Fair\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Good\",\n          children: \"Good\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Epic\",\n          children: \"Epic\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"#\",\n        className: \"btn btn-primary\",\n        children: \"Go somewhere\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CurrentSwell, \"aj/95hX4Jds9EqZGOJDYAg7BBr8=\", false, function () {\n  return [_utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useStoreContext];\n});\n\n_c = CurrentSwell;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrentSwell);\n\nvar _c;\n\n$RefreshReg$(_c, \"CurrentSwell\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW50U3dlbGwuanM/MTgwYiJdLCJuYW1lcyI6WyJDdXJyZW50U3dlbGwiLCJ1c2VTdG9yZUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29uZGl0aW9uUmVmIiwidXNlUmVmIiwibm90ZVJlZiIsInN3ZWxsX2N1cnJlbnQiLCJzd2VsbCIsInRpZGVzIiwidGhpbmdzIiwiZGlyZWN0aW9uIiwiY29uc29sZSIsImxvZyIsIk1hdGgiLCJyb3VuZCIsIngiLCJOdW1iZXIiLCJhcnIiLCJnZW5EaXJyZWN0aW9uIiwic3RyaW5nIiwiaGVpZ2h0IiwidG9GaXhlZCIsInBlcmlvZCIsInB1c2giLCJzdXJmSGVpZ2h0IiwibWluIiwibWF4IiwiZ2V0V2luZCIsIndpbmQiLCJzcGVlZCIsInNwb3ROYW1lIiwic3VyZiIsInN3ZWxscyIsIm1hcCIsImluZGV4IiwiY3VycmVudFdpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQUEseUJBQ0lDLG1FQUFlLEVBRG5CO0FBQUE7QUFBQSxNQUNmQyxLQURlO0FBQUEsTUFDUkMsUUFEUTs7QUFFdEIsTUFBTUMsWUFBWSxHQUFHQyw2Q0FBTSxFQUEzQjtBQUNBLE1BQU1DLE9BQU8sR0FBR0QsNkNBQU0sRUFBdEI7QUFIc0IsTUFJZEUsYUFKYyxHQUlJTCxLQUFLLENBQUNNLEtBSlYsQ0FJZEQsYUFKYztBQUFBLE1BTWRFLEtBTmMsR0FNSlAsS0FOSSxDQU1kTyxLQU5jO0FBT3RCLE1BQU1DLE1BQU0sR0FBRyxFQUFmOztBQUVBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNILEtBQUQsRUFBVztBQUMzQkksV0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxLQUFLLENBQUNHLFNBQWpCLENBQVo7QUFDQSxRQUFJSyxDQUFD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QUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0Q7O0dBckhRcEMsWTtVQUNtQkMsK0Q7OztLQURuQkQsWTtBQXVIVCwrREFBZUEsWUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ3VycmVudFN3ZWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUSURFIH0gZnJvbSBcIi4uL3V0aWxzL0FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZVN0b3JlQ29udGV4dCB9IGZyb20gXCIuLi91dGlscy9HbG9iYWxTdGF0ZVwiO1xuXG5mdW5jdGlvbiBDdXJyZW50U3dlbGwoKSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlU3RvcmVDb250ZXh0KCk7XG4gIGNvbnN0IGNvbmRpdGlvblJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBub3RlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHsgc3dlbGxfY3VycmVudCB9ID0gc3RhdGUuc3dlbGw7XG5cbiAgY29uc3QgeyB0aWRlcyB9ID0gc3RhdGU7XG4gIGNvbnN0IHRoaW5ncyA9IFtdO1xuXG4gIGNvbnN0IGRpcmVjdGlvbiA9IChzd2VsbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKE1hdGgucm91bmQoc3dlbGwuZGlyZWN0aW9uKSk7XG4gICAgbGV0IHggPSBOdW1iZXIoTWF0aC5yb3VuZChzd2VsbC5kaXJlY3Rpb24pIC8gMjIuNSArIDAuNSk7XG4gICAgY29uc29sZS5sb2coeCk7XG4gICAgbGV0IGFyciA9IFtcbiAgICAgIFwiTlwiLFxuICAgICAgXCJOTkVcIixcbiAgICAgIFwiTkVcIixcbiAgICAgIFwiRU5FXCIsXG4gICAgICBcIkVcIixcbiAgICAgIFwiRVNFXCIsXG4gICAgICBcIlNFXCIsXG4gICAgICBcIlNTRVwiLFxuICAgICAgXCJTXCIsXG4gICAgICBcIlNTV1wiLFxuICAgICAgXCJTV1wiLFxuICAgICAgXCJXU1dcIixcbiAgICAgIFwiV1wiLFxuICAgICAgXCJXTldcIixcbiAgICAgIFwiTldcIixcbiAgICAgIFwiTk5XXCIsXG4gICAgXTtcbiAgICBsZXQgZ2VuRGlycmVjdGlvbiA9IGFycltNYXRoLnJvdW5kKHggJSAxNildO1xuXG4gICAgbGV0IHN0cmluZyA9XG4gICAgICBzd2VsbC5oZWlnaHQudG9GaXhlZCgxKSArXG4gICAgICBcImZ0XCIgK1xuICAgICAgXCIgXCIgK1xuICAgICAgZ2VuRGlycmVjdGlvbiArXG4gICAgICBcIiBcIiArXG4gICAgICBcIkBcIiArXG4gICAgICBcIiBcIiArXG4gICAgICBzd2VsbC5wZXJpb2QgK1xuICAgICAgXCJzXCI7XG5cbiAgICB0aGluZ3MucHVzaChzdHJpbmcpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICBjb25zdCBzdXJmSGVpZ2h0ID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChtaW4pO1xuICAgIH0gZWxzZSByZXR1cm4gbWluLnRvRml4ZWQoMSkgKyBcIi1cIiArIG1heC50b0ZpeGVkKDEpO1xuICB9O1xuXG4gIGNvbnN0IGdldFdpbmQgPSAod2luZCkgPT4ge1xuICAgIGxldCB4ID0gTWF0aC5yb3VuZCh3aW5kLmRpcmVjdGlvbikgLyAyMi41ICsgMC41O1xuICAgIGxldCBhcnIgPSBbXG4gICAgICBcIk5cIixcbiAgICAgIFwiTk5FXCIsXG4gICAgICBcIk5FXCIsXG4gICAgICBcIkVORVwiLFxuICAgICAgXCJFXCIsXG4gICAgICBcIkVTRVwiLFxuICAgICAgXCJTRVwiLFxuICAgICAgXCJTU0VcIixcbiAgICAgIFwiU1wiLFxuICAgICAgXCJTU1dcIixcbiAgICAgIFwiU1dcIixcbiAgICAgIFwiV1NXXCIsXG4gICAgICBcIldcIixcbiAgICAgIFwiV05XXCIsXG4gICAgICBcIk5XXCIsXG4gICAgICBcIk5OV1wiLFxuICAgIF07XG5cbiAgICBsZXQgZ2VuRGlycmVjdGlvbiA9IGFycltNYXRoLnJvdW5kKHggJSAxNildO1xuXG4gICAgcmV0dXJuIE1hdGgucm91bmQod2luZC5zcGVlZCkgKyBcImt0c1wiICsgXCIgXCIgKyBnZW5EaXJyZWN0aW9uO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5TdXJmIFJlcG9ydDwvaDU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntzdGF0ZS5zcG90TmFtZX08L2g1PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHN1cmYgcmVwb3J0OiB7c3VyZkhlaWdodChzdGF0ZS5zdXJmLm1pbiwgc3RhdGUuc3VyZi5tYXgpfWZ0XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICB7c3RhdGUuc3dlbGxzLm1hcCgoc3dlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxwIGtleT17aW5kZXggKyAxfSBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICA8c3Bhbj5zd2VsbCB7KGluZGV4ICs9IDEpfTogPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4+e2RpcmVjdGlvbihzd2VsbCl9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Bhbj53aW5kOiB7Z2V0V2luZChzdGF0ZS5jdXJyZW50V2luZCl9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLXNlbGVjdFwiIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCI+XG4gICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5TZWxlY3QgQ29uZGl0aW9uczwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQb29yXCI+UG9vcjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGYWlyXCI+RmFpcjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHb29kXCI+R29vZDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFcGljXCI+RXBpYzwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICBHbyBzb21ld2hlcmVcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRTd2VsbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CurrentSwell.js\n");

/***/ })

});