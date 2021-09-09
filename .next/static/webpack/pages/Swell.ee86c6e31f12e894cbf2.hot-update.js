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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Actions */ \"./utils/Actions.js\");\n/* harmony import */ var _utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GlobalState */ \"./utils/GlobalState.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/bengross/Desktop/Swell Clutch/Swell-Clutch/components/CurrentSwell.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CurrentSwell() {\n  _s();\n\n  var _this = this;\n\n  var _useStoreContext = (0,_utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useStoreContext)(),\n      _useStoreContext2 = (0,_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useStoreContext, 2),\n      state = _useStoreContext2[0],\n      dispatch = _useStoreContext2[1];\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession)(),\n      _useSession2 = (0,_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  console.log(session);\n  var swell_current = state.swell.swell_current;\n  var tides = state.tides;\n\n  var direction = function direction(_direction) {\n    console.log(Math.round(_direction));\n    var x = Number(Math.round(_direction) / 22.5 + 0.5);\n    console.log(x);\n    var arr = [\"N\", \"NNE\", \"NE\", \"ENE\", \"E\", \"ESE\", \"SE\", \"SSE\", \"S\", \"SSW\", \"SW\", \"WSW\", \"W\", \"WNW\", \"NW\", \"NNW\"];\n    var genDirrection = arr[Math.round(x % 16)];\n    return genDirrection;\n  };\n\n  var surfHeight = function surfHeight(min, max) {\n    if (max === min) {\n      return Math.round(min);\n    } else return min.toFixed(1) + \"-\" + max.toFixed(1);\n  };\n\n  var getWind = function getWind(wind) {\n    var x = Math.round(wind.direction) / 22.5 + 0.5;\n    var arr = [\"N\", \"NNE\", \"NE\", \"ENE\", \"E\", \"ESE\", \"SE\", \"SSE\", \"S\", \"SSW\", \"SW\", \"WSW\", \"W\", \"WNW\", \"NW\", \"NNW\"];\n    var genDirrection = arr[Math.round(x % 16)];\n    return Math.round(wind.speed) + \"kts\" + \" \" + genDirrection;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"card\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n      className: \"card-header\",\n      children: \"Surf Report\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"card-body\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n        className: \"card-title\",\n        children: state.spotName\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: [\"surf report: \", surfHeight(state.surf.min, state.surf.max), \"ft\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this), state.swells.map(function (swell, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"card-text\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [\"swell \", index += 1, \": \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 15\n          }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [swell.height.toFixed(1), \"ft \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: direction(swell.direction)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [\"@\", swell.period, \"s\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 15\n          }, _this)]\n        }, index + 1, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: [\"wind: \", getWind(state.currentWind)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"#\",\n        className: \"btn btn-primary\",\n        children: \"Save Swell\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CurrentSwell, \"xM3O3zmz83g/QpcaCSjEwlEeobs=\", false, function () {\n  return [_utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__.useStoreContext, next_auth_client__WEBPACK_IMPORTED_MODULE_5__.useSession];\n});\n\n_c = CurrentSwell;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrentSwell);\n\nvar _c;\n\n$RefreshReg$(_c, \"CurrentSwell\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW50U3dlbGwuanM/MTgwYiJdLCJuYW1lcyI6WyJDdXJyZW50U3dlbGwiLCJ1c2VTdG9yZUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlU2Vzc2lvbiIsInNlc3Npb24iLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInN3ZWxsX2N1cnJlbnQiLCJzd2VsbCIsInRpZGVzIiwiZGlyZWN0aW9uIiwiTWF0aCIsInJvdW5kIiwieCIsIk51bWJlciIsImFyciIsImdlbkRpcnJlY3Rpb24iLCJzdXJmSGVpZ2h0IiwibWluIiwibWF4IiwidG9GaXhlZCIsImdldFdpbmQiLCJ3aW5kIiwic3BlZWQiLCJzcG90TmFtZSIsInN1cmYiLCJzd2VsbHMiLCJtYXAiLCJpbmRleCIsImhlaWdodCIsInBlcmlvZCIsImN1cnJlbnRXaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUFBLHlCQUNJQyxtRUFBZSxFQURuQjtBQUFBO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBQUEsb0JBRUtDLDREQUFVLEVBRmY7QUFBQTtBQUFBLE1BRWZDLE9BRmU7QUFBQSxNQUVOQyxPQUZNOztBQUl0QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVo7QUFKc0IsTUFNZEksYUFOYyxHQU1JUCxLQUFLLENBQUNRLEtBTlYsQ0FNZEQsYUFOYztBQUFBLE1BUWRFLEtBUmMsR0FRSlQsS0FSSSxDQVFkUyxLQVJjOztBQVV0QixNQUFNQyxTQUFTLEdBQUcsbUJBQUNBLFVBQUQsRUFBZTtBQUMvQkwsV0FBTyxDQUFDQyxHQUFSLENBQVlLLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixVQUFYLENBQVo7QUFDQSxRQUFJRyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFVB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QUFBO0FBQUE7QUFBQSxtQkFIRixFQUc0QyxHQUg1QyxlQUlFO0FBQUEsc0JBQU9WLFNBQVMsQ0FBQ0YsS0FBSyxDQUFDRSxTQUFQO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRTtBQUFBLDRCQUFRRixLQUFLLENBQUNzQixNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBLFdBQVFGLEtBQUssR0FBRyxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWQSxDQVJILGVBbUJFO0FBQUEsK0JBQ0U7QUFBQSwrQkFBYVAsT0FBTyxDQUFDckIsS0FBSyxDQUFDK0IsV0FBUCxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGLGVBc0JFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBWSxpQkFBUyxFQUFDLGlCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRDs7R0FwR1FqQyxZO1VBQ21CQywrRCxFQUNDRyx3RDs7O0tBRnBCSixZO0FBc0dULCtEQUFlQSxZQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DdXJyZW50U3dlbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUSURFIH0gZnJvbSBcIi4uL3V0aWxzL0FjdGlvbnNcIjtcbmltcG9ydCB7IHVzZVN0b3JlQ29udGV4dCB9IGZyb20gXCIuLi91dGlscy9HbG9iYWxTdGF0ZVwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmZ1bmN0aW9uIEN1cnJlbnRTd2VsbCgpIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VTdG9yZUNvbnRleHQoKTtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpO1xuXG4gIGNvbnNvbGUubG9nKHNlc3Npb24pO1xuXG4gIGNvbnN0IHsgc3dlbGxfY3VycmVudCB9ID0gc3RhdGUuc3dlbGw7XG5cbiAgY29uc3QgeyB0aWRlcyB9ID0gc3RhdGU7XG5cbiAgY29uc3QgZGlyZWN0aW9uID0gKGRpcmVjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKE1hdGgucm91bmQoZGlyZWN0aW9uKSk7XG4gICAgbGV0IHggPSBOdW1iZXIoTWF0aC5yb3VuZChkaXJlY3Rpb24pIC8gMjIuNSArIDAuNSk7XG4gICAgY29uc29sZS5sb2coeCk7XG4gICAgbGV0IGFyciA9IFtcbiAgICAgIFwiTlwiLFxuICAgICAgXCJOTkVcIixcbiAgICAgIFwiTkVcIixcbiAgICAgIFwiRU5FXCIsXG4gICAgICBcIkVcIixcbiAgICAgIFwiRVNFXCIsXG4gICAgICBcIlNFXCIsXG4gICAgICBcIlNTRVwiLFxuICAgICAgXCJTXCIsXG4gICAgICBcIlNTV1wiLFxuICAgICAgXCJTV1wiLFxuICAgICAgXCJXU1dcIixcbiAgICAgIFwiV1wiLFxuICAgICAgXCJXTldcIixcbiAgICAgIFwiTldcIixcbiAgICAgIFwiTk5XXCIsXG4gICAgXTtcbiAgICBsZXQgZ2VuRGlycmVjdGlvbiA9IGFycltNYXRoLnJvdW5kKHggJSAxNildO1xuXG4gICAgcmV0dXJuIGdlbkRpcnJlY3Rpb247XG4gIH07XG5cbiAgY29uc3Qgc3VyZkhlaWdodCA9IChtaW4sIG1heCkgPT4ge1xuICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQobWluKTtcbiAgICB9IGVsc2UgcmV0dXJuIG1pbi50b0ZpeGVkKDEpICsgXCItXCIgKyBtYXgudG9GaXhlZCgxKTtcbiAgfTtcblxuICBjb25zdCBnZXRXaW5kID0gKHdpbmQpID0+IHtcbiAgICBsZXQgeCA9IE1hdGgucm91bmQod2luZC5kaXJlY3Rpb24pIC8gMjIuNSArIDAuNTtcbiAgICBsZXQgYXJyID0gW1xuICAgICAgXCJOXCIsXG4gICAgICBcIk5ORVwiLFxuICAgICAgXCJORVwiLFxuICAgICAgXCJFTkVcIixcbiAgICAgIFwiRVwiLFxuICAgICAgXCJFU0VcIixcbiAgICAgIFwiU0VcIixcbiAgICAgIFwiU1NFXCIsXG4gICAgICBcIlNcIixcbiAgICAgIFwiU1NXXCIsXG4gICAgICBcIlNXXCIsXG4gICAgICBcIldTV1wiLFxuICAgICAgXCJXXCIsXG4gICAgICBcIldOV1wiLFxuICAgICAgXCJOV1wiLFxuICAgICAgXCJOTldcIixcbiAgICBdO1xuXG4gICAgbGV0IGdlbkRpcnJlY3Rpb24gPSBhcnJbTWF0aC5yb3VuZCh4ICUgMTYpXTtcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHdpbmQuc3BlZWQpICsgXCJrdHNcIiArIFwiIFwiICsgZ2VuRGlycmVjdGlvbjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+U3VyZiBSZXBvcnQ8L2g1PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57c3RhdGUuc3BvdE5hbWV9PC9oNT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBzdXJmIHJlcG9ydDoge3N1cmZIZWlnaHQoc3RhdGUuc3VyZi5taW4sIHN0YXRlLnN1cmYubWF4KX1mdFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAge3N0YXRlLnN3ZWxscy5tYXAoKHN3ZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cCBrZXk9e2luZGV4ICsgMX0gY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4+c3dlbGwgeyhpbmRleCArPSAxKX06IDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuPntzd2VsbC5oZWlnaHQudG9GaXhlZCgxKX1mdCA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICA8c3Bhbj57ZGlyZWN0aW9uKHN3ZWxsLmRpcmVjdGlvbil9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj5Ae3N3ZWxsLnBlcmlvZH1zPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3Bhbj53aW5kOiB7Z2V0V2luZChzdGF0ZS5jdXJyZW50V2luZCl9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgU2F2ZSBTd2VsbFxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudFN3ZWxsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CurrentSwell.js\n");

/***/ })

});