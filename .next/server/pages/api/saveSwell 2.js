module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/saveSwell.js");
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

/***/ "./pages/api/saveSwell.js":
/*!********************************!*\
  !*** ./pages/api/saveSwell.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handle; });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n\n // POST /api/post\n// Required fields in body: title\n// Optional fields in body: content\n\nasync function handle(req, res) {\n  console.log(req.body);\n\n  if (req.method === \"POST\") {\n    try {\n      var _session$user;\n\n      const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__[\"getSession\"])({\n        req\n      });\n      const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].swell.create({\n        data: {\n          spotId: req.body.spotId,\n          spotName: req.body.spotName,\n          report: req.body.report,\n          swell1: req.body.swell1 || \" \",\n          swell2: req.body.swell2 || \" \",\n          swell3: req.body.swell3 || \" \",\n          swell4: req.body.swell4 || \" \",\n          swell5: req.body.swell5 || \" \",\n          swell6: req.body.swell6 || \" \",\n          wind: req.body.wind,\n          tide: req.body.tide,\n          notes: req.body.notes || \" \",\n          account: {\n            connect: {\n              email: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email\n            }\n          }\n        }\n      });\n      res.json(result);\n    } catch (err) {\n      res.send(err);\n      console.log(err);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2F2ZVN3ZWxsLmpzP2RlYzciXSwibmFtZXMiOlsiaGFuZGxlIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJtZXRob2QiLCJzZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInJlc3VsdCIsInByaXNtYSIsInN3ZWxsIiwiY3JlYXRlIiwiZGF0YSIsInNwb3RJZCIsInNwb3ROYW1lIiwicmVwb3J0Iiwic3dlbGwxIiwic3dlbGwyIiwic3dlbGwzIiwic3dlbGw0Iiwic3dlbGw1Iiwic3dlbGw2Iiwid2luZCIsInRpZGUiLCJub3RlcyIsImFjY291bnQiLCJjb25uZWN0IiwiZW1haWwiLCJ1c2VyIiwianNvbiIsImVyciIsInNlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUlBO0FBQ0E7QUFDQTs7QUFDZSxlQUFlQSxNQUFmLENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDN0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLElBQWhCOztBQUNBLE1BQUlKLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUk7QUFBQTs7QUFDRixZQUFNQyxPQUFPLEdBQUcsTUFBTUMsbUVBQVUsQ0FBQztBQUFFUDtBQUFGLE9BQUQsQ0FBaEM7QUFDQSxZQUFNUSxNQUFNLEdBQUcsTUFBTUMsbURBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxNQUFiLENBQW9CO0FBQ3ZDQyxZQUFJLEVBQUU7QUFDSkMsZ0JBQU0sRUFBRWIsR0FBRyxDQUFDSSxJQUFKLENBQVNTLE1BRGI7QUFFSkMsa0JBQVEsRUFBRWQsR0FBRyxDQUFDSSxJQUFKLENBQVNVLFFBRmY7QUFHSkMsZ0JBQU0sRUFBRWYsR0FBRyxDQUFDSSxJQUFKLENBQVNXLE1BSGI7QUFJSkMsZ0JBQU0sRUFBRWhCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTWSxNQUFULElBQW1CLEdBSnZCO0FBS0pDLGdCQUFNLEVBQUVqQixHQUFHLENBQUNJLElBQUosQ0FBU2EsTUFBVCxJQUFtQixHQUx2QjtBQU1KQyxnQkFBTSxFQUFFbEIsR0FBRyxDQUFDSSxJQUFKLENBQVNjLE1BQVQsSUFBbUIsR0FOdkI7QUFPSkMsZ0JBQU0sRUFBRW5CLEdBQUcsQ0FBQ0ksSUFBSixDQUFTZSxNQUFULElBQW1CLEdBUHZCO0FBUUpDLGdCQUFNLEVBQUVwQixHQUFHLENBQUNJLElBQUosQ0FBU2dCLE1BQVQsSUFBbUIsR0FSdkI7QUFTSkMsZ0JBQU0sRUFBRXJCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTaUIsTUFBVCxJQUFtQixHQVR2QjtBQVVKQyxjQUFJLEVBQUV0QixHQUFHLENBQUNJLElBQUosQ0FBU2tCLElBVlg7QUFXSkMsY0FBSSxFQUFFdkIsR0FBRyxDQUFDSSxJQUFKLENBQVNtQixJQVhYO0FBWUpDLGVBQUssRUFBRXhCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTb0IsS0FBVCxJQUFrQixHQVpyQjtBQWFKQyxpQkFBTyxFQUFFO0FBQUVDLG1CQUFPLEVBQUU7QUFBRUMsbUJBQUssRUFBRXJCLE9BQUYsYUFBRUEsT0FBRix3Q0FBRUEsT0FBTyxDQUFFc0IsSUFBWCxrREFBRSxjQUFlRDtBQUF4QjtBQUFYO0FBYkw7QUFEaUMsT0FBcEIsQ0FBckI7QUFpQkExQixTQUFHLENBQUM0QixJQUFKLENBQVNyQixNQUFUO0FBQ0QsS0FwQkQsQ0FvQkUsT0FBT3NCLEdBQVAsRUFBWTtBQUNaN0IsU0FBRyxDQUFDOEIsSUFBSixDQUFTRCxHQUFUO0FBQ0E1QixhQUFPLENBQUNDLEdBQVIsQ0FBWTJCLEdBQVo7QUFDRDtBQUNGO0FBQ0YiLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2F2ZVN3ZWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcblxuLy8gUE9TVCAvYXBpL3Bvc3Rcbi8vIFJlcXVpcmVkIGZpZWxkcyBpbiBib2R5OiB0aXRsZVxuLy8gT3B0aW9uYWwgZmllbGRzIGluIGJvZHk6IGNvbnRlbnRcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5zd2VsbC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc3BvdElkOiByZXEuYm9keS5zcG90SWQsXG4gICAgICAgICAgc3BvdE5hbWU6IHJlcS5ib2R5LnNwb3ROYW1lLFxuICAgICAgICAgIHJlcG9ydDogcmVxLmJvZHkucmVwb3J0LFxuICAgICAgICAgIHN3ZWxsMTogcmVxLmJvZHkuc3dlbGwxIHx8IFwiIFwiLFxuICAgICAgICAgIHN3ZWxsMjogcmVxLmJvZHkuc3dlbGwyIHx8IFwiIFwiLFxuICAgICAgICAgIHN3ZWxsMzogcmVxLmJvZHkuc3dlbGwzIHx8IFwiIFwiLFxuICAgICAgICAgIHN3ZWxsNDogcmVxLmJvZHkuc3dlbGw0IHx8IFwiIFwiLFxuICAgICAgICAgIHN3ZWxsNTogcmVxLmJvZHkuc3dlbGw1IHx8IFwiIFwiLFxuICAgICAgICAgIHN3ZWxsNjogcmVxLmJvZHkuc3dlbGw2IHx8IFwiIFwiLFxuICAgICAgICAgIHdpbmQ6IHJlcS5ib2R5LndpbmQsXG4gICAgICAgICAgdGlkZTogcmVxLmJvZHkudGlkZSxcbiAgICAgICAgICBub3RlczogcmVxLmJvZHkubm90ZXMgfHwgXCIgXCIsXG4gICAgICAgICAgYWNjb3VudDogeyBjb25uZWN0OiB7IGVtYWlsOiBzZXNzaW9uPy51c2VyPy5lbWFpbCB9IH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJlcy5qc29uKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc2VuZChlcnIpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/saveSwell.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCI/ZDNiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/client\n");

/***/ })

/******/ });