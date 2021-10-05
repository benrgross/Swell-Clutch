module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/SavedSwells.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma = _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"];\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcHJpc21hLmpzP2M1NjUiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwiZ2xvYmFsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsMkRBQWI7O0FBRUEsV0FBMkMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRixNQUFaLEVBQW9CO0FBQ2xCRSxVQUFNLENBQUNGLE1BQVAsR0FBZ0IsSUFBSUMsMkRBQUosRUFBaEI7QUFDRDs7QUFDREQsUUFBTSxHQUFHRSxNQUFNLENBQUNGLE1BQWhCO0FBQ0Q7O0FBRWNBLHFFQUFmIiwiZmlsZSI6Ii4vbGliL3ByaXNtYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgcHJpc21hID0gUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/SavedSwells.js":
/*!******************************!*\
  !*** ./pages/SavedSwells.js ***!
  \******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-plugin-superjson-next/tools */ \"babel-plugin-superjson-next/tools\");\n/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GlobalState */ \"./utils/GlobalState.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/bengross/Desktop/Swell Clutch/Swell-Clutch/pages/SavedSwells.js\";\n\n\n\n\n\n\n\nfunction SavedSwells(props) {\n  console.log(props);\n  const {\n    data: session\n  } = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"useSession\"])();\n  const [state, dispatch] = Object(_utils_GlobalState__WEBPACK_IMPORTED_MODULE_4__[\"useStoreContext\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n    children: props.swells\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 10\n  }, this);\n}\n\nconst getServerSideProps = Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__[\"withSuperJSONProps\"])(async function getServerSideProps(context) {\n  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__[\"getSession\"])(context);\n  const swells = await _lib_prisma__WEBPACK_IMPORTED_MODULE_5__[\"default\"].swell.findMany({\n    where: {\n      id: {\n        equals: session.user.id,\n        mode: \"insensitive\"\n      }\n    }\n  });\n  const swellObj = {\n    swellArr: []\n  };\n  swells.map(swell => {\n    swell.createdAt.toString(), swell.updatedAt.toString();\n  });\n  swellObj.swellArr.push(swells);\n  return {\n    props: swellObj\n  };\n}, [\"superJsonSkipped\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_0__[\"withSuperJSONPage\"])(SavedSwells));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9TYXZlZFN3ZWxscy5qcz85YjkzIl0sIm5hbWVzIjpbIlNhdmVkU3dlbGxzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNlc3Npb24iLCJ1c2VTZXNzaW9uIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVN0b3JlQ29udGV4dCIsInN3ZWxscyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJnZXRTZXNzaW9uIiwicHJpc21hIiwic3dlbGwiLCJmaW5kTWFueSIsIndoZXJlIiwiaWQiLCJlcXVhbHMiLCJ1c2VyIiwibW9kZSIsInN3ZWxsT2JqIiwic3dlbGxBcnIiLCJtYXAiLCJjcmVhdGVkQXQiLCJ0b1N0cmluZyIsInVwZGF0ZWRBdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsUUFBTTtBQUFFRyxRQUFJLEVBQUVDO0FBQVIsTUFBb0JDLG1FQUFVLEVBQXBDO0FBQ0EsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLDBFQUFlLEVBQXpDO0FBQ0Esc0JBQU87QUFBQSxjQUFNUixLQUFLLENBQUNTO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRU0sTUFBZUMsa0JBQXRCLCtHQUFzQkEsa0JBQXRCLENBQXlDQyxPQUF6QyxFQUFrRDtBQUNoRCxRQUFNUCxPQUFPLEdBQUcsTUFBTVEsbUVBQVUsQ0FBQ0QsT0FBRCxDQUFoQztBQUVBLFFBQU1GLE1BQU0sR0FBRyxNQUFNSSxtREFBTSxDQUFDQyxLQUFQLENBQWFDLFFBQWIsQ0FBc0I7QUFDekNDLFNBQUssRUFBRTtBQUNMQyxRQUFFLEVBQUU7QUFBRUMsY0FBTSxFQUFFZCxPQUFPLENBQUNlLElBQVIsQ0FBYUYsRUFBdkI7QUFBMkJHLFlBQUksRUFBRTtBQUFqQztBQURDO0FBRGtDLEdBQXRCLENBQXJCO0FBTUEsUUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLFlBQVEsRUFBRTtBQURLLEdBQWpCO0FBSUFiLFFBQU0sQ0FBQ2MsR0FBUCxDQUFZVCxLQUFELElBQVc7QUFDcEJBLFNBQUssQ0FBQ1UsU0FBTixDQUFnQkMsUUFBaEIsSUFBNEJYLEtBQUssQ0FBQ1ksU0FBTixDQUFnQkQsUUFBaEIsRUFBNUI7QUFDRCxHQUZEO0FBR0FKLFVBQVEsQ0FBQ0MsUUFBVCxDQUFrQkssSUFBbEIsQ0FBdUJsQixNQUF2QjtBQUVBLFNBQU87QUFDTFQsU0FBSyxFQUFFcUI7QUFERixHQUFQO0FBR0QsQ0FyQkQ7QUF1QmUsMkpBQUF0QixXQUFmIiwiZmlsZSI6Ii4vcGFnZXMvU2F2ZWRTd2VsbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0b3JlQ29udGV4dCB9IGZyb20gXCIuLi91dGlscy9HbG9iYWxTdGF0ZVwiO1xuXG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi9saWIvcHJpc21hXCI7XG5cbmZ1bmN0aW9uIFNhdmVkU3dlbGxzKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlU3RvcmVDb250ZXh0KCk7XG4gIHJldHVybiA8ZGl2Pntwcm9wcy5zd2VsbHN9PC9kaXY+O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XG5cbiAgY29uc3Qgc3dlbGxzID0gYXdhaXQgcHJpc21hLnN3ZWxsLmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IHsgZXF1YWxzOiBzZXNzaW9uLnVzZXIuaWQsIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHN3ZWxsT2JqID0ge1xuICAgIHN3ZWxsQXJyOiBbXSxcbiAgfTtcblxuICBzd2VsbHMubWFwKChzd2VsbCkgPT4ge1xuICAgIHN3ZWxsLmNyZWF0ZWRBdC50b1N0cmluZygpLCBzd2VsbC51cGRhdGVkQXQudG9TdHJpbmcoKTtcbiAgfSk7XG4gIHN3ZWxsT2JqLnN3ZWxsQXJyLnB1c2goc3dlbGxzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiBzd2VsbE9iaixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2F2ZWRTd2VsbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/SavedSwells.js\n");

/***/ }),

/***/ "./utils/Actions.js":
/*!**************************!*\
  !*** ./utils/Actions.js ***!
  \**************************/
/*! exports provided: LOAD_SWELLS, SET_SWELL, SET_LOCATION, SHOW_CURRENT_SWELL, CURRENT_SWELL, FIND_SWELL, SET_USER, SET_TIMESTAMP, LOADING, LOCATION_STATUS, REGION, REGION2, REGION3, TIDE, SEARCHSPOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_SWELLS\", function() { return LOAD_SWELLS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_SWELL\", function() { return SET_SWELL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_LOCATION\", function() { return SET_LOCATION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHOW_CURRENT_SWELL\", function() { return SHOW_CURRENT_SWELL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_SWELL\", function() { return CURRENT_SWELL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FIND_SWELL\", function() { return FIND_SWELL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_USER\", function() { return SET_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_TIMESTAMP\", function() { return SET_TIMESTAMP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOADING\", function() { return LOADING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOCATION_STATUS\", function() { return LOCATION_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGION\", function() { return REGION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGION2\", function() { return REGION2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGION3\", function() { return REGION3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TIDE\", function() { return TIDE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEARCHSPOT\", function() { return SEARCHSPOT; });\nconst LOAD_SWELLS = \"LOAD_SWELLS\";\nconst SET_SWELL = \"SET_SWELL\";\nconst SET_LOCATION = \"SET_LOCATION\";\nconst SHOW_CURRENT_SWELL = \"SHOW_CURRENT_SWELL\";\nconst CURRENT_SWELL = \"CURRENT_SWELL\";\nconst FIND_SWELL = \"FIND_SWELL\";\nconst SET_USER = \"SET_USER\";\nconst SET_TIMESTAMP = \"SET_TIMESTAMP\";\nconst LOADING = \"LOADING\";\nconst LOCATION_STATUS = \"LOCATION_STATUS\";\nconst REGION = \"REGION\";\nconst REGION2 = \"REGION2\";\nconst REGION3 = \"REGION3\";\nconst TIDE = \"TIDE\";\nconst SEARCHSPOT = \"SEARCHSPOT\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9BY3Rpb25zLmpzPzYwN2MiXSwibmFtZXMiOlsiTE9BRF9TV0VMTFMiLCJTRVRfU1dFTEwiLCJTRVRfTE9DQVRJT04iLCJTSE9XX0NVUlJFTlRfU1dFTEwiLCJDVVJSRU5UX1NXRUxMIiwiRklORF9TV0VMTCIsIlNFVF9VU0VSIiwiU0VUX1RJTUVTVEFNUCIsIkxPQURJTkciLCJMT0NBVElPTl9TVEFUVVMiLCJSRUdJT04iLCJSRUdJT04yIiwiUkVHSU9OMyIsIlRJREUiLCJTRUFSQ0hTUE9UIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLElBQUksR0FBRyxNQUFiO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CIiwiZmlsZSI6Ii4vdXRpbHMvQWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMT0FEX1NXRUxMUyA9IFwiTE9BRF9TV0VMTFNcIjtcbmV4cG9ydCBjb25zdCBTRVRfU1dFTEwgPSBcIlNFVF9TV0VMTFwiO1xuZXhwb3J0IGNvbnN0IFNFVF9MT0NBVElPTiA9IFwiU0VUX0xPQ0FUSU9OXCI7XG5leHBvcnQgY29uc3QgU0hPV19DVVJSRU5UX1NXRUxMID0gXCJTSE9XX0NVUlJFTlRfU1dFTExcIjtcbmV4cG9ydCBjb25zdCBDVVJSRU5UX1NXRUxMID0gXCJDVVJSRU5UX1NXRUxMXCI7XG5leHBvcnQgY29uc3QgRklORF9TV0VMTCA9IFwiRklORF9TV0VMTFwiO1xuZXhwb3J0IGNvbnN0IFNFVF9VU0VSID0gXCJTRVRfVVNFUlwiO1xuZXhwb3J0IGNvbnN0IFNFVF9USU1FU1RBTVAgPSBcIlNFVF9USU1FU1RBTVBcIjtcbmV4cG9ydCBjb25zdCBMT0FESU5HID0gXCJMT0FESU5HXCI7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fU1RBVFVTID0gXCJMT0NBVElPTl9TVEFUVVNcIjtcbmV4cG9ydCBjb25zdCBSRUdJT04gPSBcIlJFR0lPTlwiO1xuZXhwb3J0IGNvbnN0IFJFR0lPTjIgPSBcIlJFR0lPTjJcIjtcbmV4cG9ydCBjb25zdCBSRUdJT04zID0gXCJSRUdJT04zXCI7XG5leHBvcnQgY29uc3QgVElERSA9IFwiVElERVwiO1xuZXhwb3J0IGNvbnN0IFNFQVJDSFNQT1QgPSBcIlNFQVJDSFNQT1RcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/Actions.js\n");

/***/ }),

/***/ "./utils/GlobalState.js":
/*!******************************!*\
  !*** ./utils/GlobalState.js ***!
  \******************************/
/*! exports provided: StoreProvider, useStoreContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StoreProvider\", function() { return StoreProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStoreContext\", function() { return useStoreContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Actions */ \"./utils/Actions.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nconst _excluded = [\"value\"];\nvar _jsxFileName = \"/Users/bengross/Desktop/Swell Clutch/Swell-Clutch/utils/GlobalState.js\";\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst StoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nconst {\n  Provider\n} = StoreContext;\n\n\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case _utils_Actions__WEBPACK_IMPORTED_MODULE_1__[\"SET_LOCATION\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        location: {\n          lat: action.lat,\n          lon: action.lon\n        }\n      });\n\n    case _utils_Actions__WEBPACK_IMPORTED_MODULE_1__[\"LOCATION_STATUS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        locationStatus: action.status\n      });\n\n    case _utils_Actions__WEBPACK_IMPORTED_MODULE_1__[\"REGION\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        region: action.region\n      });\n\n    case _utils_Actions__WEBPACK_IMPORTED_MODULE_1__[\"REGION2\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        region2: action.region\n      });\n\n    case _utils_Actions__WEBPACK_IMPORTED_MODULE_1__[\"REGION3\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        region3: action.region\n      });\n\n    case _utils_Actions__WEBPACK_IMPORTED_MODULE_1__[\"REGION3\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        show_current_swell: action.show_swell\n      });\n\n    case _utils_Actions__WEBPACK_IMPORTED_MODULE_1__[\"CURRENT_SWELL\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        spotId: action.swellObject.spotId,\n        spotName: action.swellObject.spotName,\n        currentTide: action.swellObject.currentTide,\n        swells: action.swellObject.swells,\n        surf: action.swellObject.surf,\n        currentWind: action.swellObject.currentWind\n      });\n\n    case _utils_Actions__WEBPACK_IMPORTED_MODULE_1__[\"SEARCHSPOT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        searchSpots: action.spots\n      });\n\n    case _utils_Actions__WEBPACK_IMPORTED_MODULE_1__[\"SET_USER\"]:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          user: action.email\n        });\n      }\n\n    default:\n      return state;\n  }\n};\n\nconst StoreProvider = _ref => {\n  let {\n    value = []\n  } = _ref,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, {\n    location: {\n      lon: 0,\n      lat: 0\n    },\n    searchSpots: [],\n    locationStatus: \"\",\n    timeStamp: \"\",\n    spotId: \"\",\n    spotName: \"\",\n    swell: {\n      swell_current: {\n        wind: \"\",\n        primarySwell: \"\",\n        secondarySwell: \"\"\n      }\n    },\n    currentTide: {\n      height: 0,\n      status: \"null\"\n    },\n    surf: {\n      min: 0,\n      max: 0,\n      optimalScore: 0\n    },\n    currentWind: {\n      timeStamp: 0,\n      speed: 0,\n      direction: 0,\n      gust: 0\n    },\n    tides: {\n      low: {\n        am_low_time: \"\",\n        am_low_ft: \"\",\n        pm_low_time: \"\",\n        pm_low_ft: \"\"\n      },\n      high: {\n        am_high_time: \"\",\n        am_high_ft: \"\",\n        pm_high_time: \"\",\n        pm_high_ft: \"\"\n      }\n    },\n    swells: [],\n    show_current_swell: false,\n    region: \"select\",\n    region2: \"select\",\n    region3: \"select\",\n    currentTide: \"\",\n    email: \"\"\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Provider, _objectSpread({\n    value: [state, dispatch]\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 10\n  }, undefined);\n};\n\nconst useStoreContext = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(StoreContext);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9HbG9iYWxTdGF0ZS5qcz8zZjFlIl0sIm5hbWVzIjpbIlN0b3JlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfTE9DQVRJT04iLCJsb2NhdGlvbiIsImxhdCIsImxvbiIsIkxPQ0FUSU9OX1NUQVRVUyIsImxvY2F0aW9uU3RhdHVzIiwic3RhdHVzIiwiUkVHSU9OIiwicmVnaW9uIiwiUkVHSU9OMiIsInJlZ2lvbjIiLCJSRUdJT04zIiwicmVnaW9uMyIsInNob3dfY3VycmVudF9zd2VsbCIsInNob3dfc3dlbGwiLCJDVVJSRU5UX1NXRUxMIiwic3BvdElkIiwic3dlbGxPYmplY3QiLCJzcG90TmFtZSIsImN1cnJlbnRUaWRlIiwic3dlbGxzIiwic3VyZiIsImN1cnJlbnRXaW5kIiwiU0VBUkNIU1BPVCIsInNlYXJjaFNwb3RzIiwic3BvdHMiLCJTRVRfVVNFUiIsInVzZXIiLCJlbWFpbCIsIlN0b3JlUHJvdmlkZXIiLCJ2YWx1ZSIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwidGltZVN0YW1wIiwic3dlbGwiLCJzd2VsbF9jdXJyZW50Iiwid2luZCIsInByaW1hcnlTd2VsbCIsInNlY29uZGFyeVN3ZWxsIiwiaGVpZ2h0IiwibWluIiwibWF4Iiwib3B0aW1hbFNjb3JlIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJndXN0IiwidGlkZXMiLCJsb3ciLCJhbV9sb3dfdGltZSIsImFtX2xvd19mdCIsInBtX2xvd190aW1lIiwicG1fbG93X2Z0IiwiaGlnaCIsImFtX2hpZ2hfdGltZSIsImFtX2hpZ2hfZnQiLCJwbV9oaWdoX3RpbWUiLCJwbV9oaWdoX2Z0IiwidXNlU3RvcmVDb250ZXh0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxZQUFZLGdCQUFHQywyREFB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QUdYQyxlQUFTLEVBQUUsQ0FIQTtBQUlYQyxVQUFJLEVBQUU7QUFKSyxLQTFCK0I7QUFnQzVDQyxTQUFLLEVBQUU7QUFDTEMsU0FBRyxFQUFFO0FBQ0hDLG1CQUFXLEVBQUUsRUFEVjtBQUVIQyxpQkFBUyxFQUFFLEVBRlI7QUFHSEMsbUJBQVcsRUFBRSxFQUhWO0FBSUhDLGlCQUFTLEVBQUU7QUFKUixPQURBO0FBT0xDLFVBQUksRUFBRTtBQUNKQyxvQkFBWSxFQUFFLEVBRFY7QUFFSkMsa0JBQVUsRUFBRSxFQUZSO0FBR0pDLG9CQUFZLEVBQUUsRUFIVjtBQUlKQyxrQkFBVSxFQUFFO0FBSlI7QUFQRCxLQWhDcUM7QUE4QzVDckMsVUFBTSxFQUFFLEVBOUNvQztBQStDNUNQLHNCQUFrQixFQUFFLEtBL0N3QjtBQWdENUNMLFVBQU0sRUFBRSxRQWhEb0M7QUFpRDVDRSxXQUFPLEVBQUUsUUFqRG1DO0FBa0Q1Q0UsV0FBTyxFQUFFLFFBbERtQztBQW1ENUNPLGVBQVcsRUFBRSxFQW5EK0I7QUFvRDVDUyxTQUFLLEVBQUU7QUFwRHFDLEdBQVYsQ0FBcEM7QUF1REEsc0JBQU8scUVBQUMsUUFBRDtBQUFVLFNBQUssRUFBRSxDQUFDL0IsS0FBRCxFQUFRbUMsUUFBUjtBQUFqQixLQUF3Q0QsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0F6REQ7O0FBMkRBLE1BQU0yQixlQUFlLEdBQUcsTUFBTTtBQUM1QixTQUFPQyx3REFBVSxDQUFDbEUsWUFBRCxDQUFqQjtBQUNELENBRkQiLCJmaWxlIjoiLi91dGlscy9HbG9iYWxTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTdG9yZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5jb25zdCB7IFByb3ZpZGVyIH0gPSBTdG9yZUNvbnRleHQ7XG5pbXBvcnQge1xuICBMT0NBVElPTl9TVEFUVVMsXG4gIFNFVF9MT0NBVElPTixcbiAgUkVHSU9OLFxuICBSRUdJT04yLFxuICBSRUdJT04zLFxuICBDVVJSRU5UX1NXRUxMLFxuICBTRUFSQ0hTUE9ULFxuICBTRVRfVVNFUixcbn0gZnJvbSBcIi4uL3V0aWxzL0FjdGlvbnNcIjtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9MT0NBVElPTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgIGxhdDogYWN0aW9uLmxhdCxcbiAgICAgICAgICBsb246IGFjdGlvbi5sb24sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgTE9DQVRJT05fU1RBVFVTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvY2F0aW9uU3RhdHVzOiBhY3Rpb24uc3RhdHVzLFxuICAgICAgfTtcbiAgICBjYXNlIFJFR0lPTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWdpb246IGFjdGlvbi5yZWdpb24sXG4gICAgICB9O1xuICAgIGNhc2UgUkVHSU9OMjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZWdpb24yOiBhY3Rpb24ucmVnaW9uLFxuICAgICAgfTtcbiAgICBjYXNlIFJFR0lPTjM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVnaW9uMzogYWN0aW9uLnJlZ2lvbixcbiAgICAgIH07XG4gICAgY2FzZSBSRUdJT04zOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNob3dfY3VycmVudF9zd2VsbDogYWN0aW9uLnNob3dfc3dlbGwsXG4gICAgICB9O1xuICAgIGNhc2UgQ1VSUkVOVF9TV0VMTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzcG90SWQ6IGFjdGlvbi5zd2VsbE9iamVjdC5zcG90SWQsXG4gICAgICAgIHNwb3ROYW1lOiBhY3Rpb24uc3dlbGxPYmplY3Quc3BvdE5hbWUsXG4gICAgICAgIGN1cnJlbnRUaWRlOiBhY3Rpb24uc3dlbGxPYmplY3QuY3VycmVudFRpZGUsXG4gICAgICAgIHN3ZWxsczogYWN0aW9uLnN3ZWxsT2JqZWN0LnN3ZWxscyxcbiAgICAgICAgc3VyZjogYWN0aW9uLnN3ZWxsT2JqZWN0LnN1cmYsXG4gICAgICAgIGN1cnJlbnRXaW5kOiBhY3Rpb24uc3dlbGxPYmplY3QuY3VycmVudFdpbmQsXG4gICAgICB9O1xuICAgIGNhc2UgU0VBUkNIU1BPVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2hTcG90czogYWN0aW9uLnNwb3RzLFxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9VU0VSOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLmVtYWlsLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBTdG9yZVByb3ZpZGVyID0gKHsgdmFsdWUgPSBbXSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgIGxvY2F0aW9uOiB7XG4gICAgICBsb246IDAsXG4gICAgICBsYXQ6IDAsXG4gICAgfSxcbiAgICBzZWFyY2hTcG90czogW10sXG4gICAgbG9jYXRpb25TdGF0dXM6IFwiXCIsXG4gICAgdGltZVN0YW1wOiBcIlwiLFxuICAgIHNwb3RJZDogXCJcIixcbiAgICBzcG90TmFtZTogXCJcIixcbiAgICBzd2VsbDoge1xuICAgICAgc3dlbGxfY3VycmVudDoge1xuICAgICAgICB3aW5kOiBcIlwiLFxuICAgICAgICBwcmltYXJ5U3dlbGw6IFwiXCIsXG4gICAgICAgIHNlY29uZGFyeVN3ZWxsOiBcIlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGN1cnJlbnRUaWRlOiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBzdGF0dXM6IFwibnVsbFwiLFxuICAgIH0sXG4gICAgc3VyZjoge1xuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAwLFxuICAgICAgb3B0aW1hbFNjb3JlOiAwLFxuICAgIH0sXG4gICAgY3VycmVudFdpbmQ6IHtcbiAgICAgIHRpbWVTdGFtcDogMCxcbiAgICAgIHNwZWVkOiAwLFxuICAgICAgZGlyZWN0aW9uOiAwLFxuICAgICAgZ3VzdDogMCxcbiAgICB9LFxuICAgIHRpZGVzOiB7XG4gICAgICBsb3c6IHtcbiAgICAgICAgYW1fbG93X3RpbWU6IFwiXCIsXG4gICAgICAgIGFtX2xvd19mdDogXCJcIixcbiAgICAgICAgcG1fbG93X3RpbWU6IFwiXCIsXG4gICAgICAgIHBtX2xvd19mdDogXCJcIixcbiAgICAgIH0sXG4gICAgICBoaWdoOiB7XG4gICAgICAgIGFtX2hpZ2hfdGltZTogXCJcIixcbiAgICAgICAgYW1faGlnaF9mdDogXCJcIixcbiAgICAgICAgcG1faGlnaF90aW1lOiBcIlwiLFxuICAgICAgICBwbV9oaWdoX2Z0OiBcIlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN3ZWxsczogW10sXG4gICAgc2hvd19jdXJyZW50X3N3ZWxsOiBmYWxzZSxcbiAgICByZWdpb246IFwic2VsZWN0XCIsXG4gICAgcmVnaW9uMjogXCJzZWxlY3RcIixcbiAgICByZWdpb24zOiBcInNlbGVjdFwiLFxuICAgIGN1cnJlbnRUaWRlOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICB9KTtcblxuICByZXR1cm4gPFByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0gey4uLnByb3BzfSAvPjtcbn07XG5cbmNvbnN0IHVzZVN0b3JlQ29udGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KTtcbn07XG5cbmV4cG9ydCB7IFN0b3JlUHJvdmlkZXIsIHVzZVN0b3JlQ29udGV4dCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/GlobalState.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ }),

/***/ "babel-plugin-superjson-next/tools":
/*!****************************************************!*\
  !*** external "babel-plugin-superjson-next/tools" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-plugin-superjson-next/tools\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wbHVnaW4tc3VwZXJqc29uLW5leHQvdG9vbHNcIj81MjJmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJhYmVsLXBsdWdpbi1zdXBlcmpzb24tbmV4dC90b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBsdWdpbi1zdXBlcmpzb24tbmV4dC90b29sc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///babel-plugin-superjson-next/tools\n");

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0XCI/ZWQ4YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });