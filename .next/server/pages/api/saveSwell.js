"use strict";
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
exports.id = "pages/api/saveSwell";
exports.ids = ["pages/api/saveSwell"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma = _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBTSxHQUFHRCx3REFBYjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNFLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3dlbGwtY2x1Y3RoLy4vbGliL3ByaXNtYS5qcz9jNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgcHJpc21hID0gUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/saveSwell.js":
/*!********************************!*\
  !*** ./pages/api/saveSwell.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.js\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n\n // POST /api/post\n// Required fields in body: title\n// Optional fields in body: content\n\nasync function handle(req, res) {\n  console.log(req.body);\n\n  if (req.method === \"POST\") {\n    try {\n      var _session$user;\n\n      const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n      });\n      const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.swell.create({\n        data: {\n          spotId: req.body.spotId,\n          spotName: req.body.spotName,\n          swell1: req.body.swell1 || \" \",\n          swell2: req.body.swell2 || \" \",\n          swell3: req.body.swell3 || \" \",\n          swell4: req.body.swell4 || \" \",\n          swell5: req.body.swell5 || \" \",\n          swell6: req.body.swell6 || \" \",\n          wind: req.body.wind,\n          tide: req.body.tide,\n          notes: req.body.notes || \" \",\n          account: {\n            connect: {\n              email: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email\n            }\n          }\n        }\n      });\n      res.json(result);\n    } catch (err) {\n      res.send(err);\n      console.log(err);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2F2ZVN3ZWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtDQUlBO0FBQ0E7QUFDQTs7QUFDZSxlQUFlRSxNQUFmLENBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDN0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLENBQUNJLElBQWhCOztBQUNBLE1BQUlKLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUk7QUFBQTs7QUFDRixZQUFNQyxPQUFPLEdBQUcsTUFBTVIsNERBQVUsQ0FBQztBQUFFRSxRQUFBQTtBQUFGLE9BQUQsQ0FBaEM7QUFDQSxZQUFNTyxNQUFNLEdBQUcsTUFBTVYsNkRBQUEsQ0FBb0I7QUFDdkNhLFFBQUFBLElBQUksRUFBRTtBQUNKQyxVQUFBQSxNQUFNLEVBQUVYLEdBQUcsQ0FBQ0ksSUFBSixDQUFTTyxNQURiO0FBRUpDLFVBQUFBLFFBQVEsRUFBRVosR0FBRyxDQUFDSSxJQUFKLENBQVNRLFFBRmY7QUFHSkMsVUFBQUEsTUFBTSxFQUFFYixHQUFHLENBQUNJLElBQUosQ0FBU1MsTUFBVCxJQUFtQixHQUh2QjtBQUlKQyxVQUFBQSxNQUFNLEVBQUVkLEdBQUcsQ0FBQ0ksSUFBSixDQUFTVSxNQUFULElBQW1CLEdBSnZCO0FBS0pDLFVBQUFBLE1BQU0sRUFBRWYsR0FBRyxDQUFDSSxJQUFKLENBQVNXLE1BQVQsSUFBbUIsR0FMdkI7QUFNSkMsVUFBQUEsTUFBTSxFQUFFaEIsR0FBRyxDQUFDSSxJQUFKLENBQVNZLE1BQVQsSUFBbUIsR0FOdkI7QUFPSkMsVUFBQUEsTUFBTSxFQUFFakIsR0FBRyxDQUFDSSxJQUFKLENBQVNhLE1BQVQsSUFBbUIsR0FQdkI7QUFRSkMsVUFBQUEsTUFBTSxFQUFFbEIsR0FBRyxDQUFDSSxJQUFKLENBQVNjLE1BQVQsSUFBbUIsR0FSdkI7QUFTSkMsVUFBQUEsSUFBSSxFQUFFbkIsR0FBRyxDQUFDSSxJQUFKLENBQVNlLElBVFg7QUFVSkMsVUFBQUEsSUFBSSxFQUFFcEIsR0FBRyxDQUFDSSxJQUFKLENBQVNnQixJQVZYO0FBV0pDLFVBQUFBLEtBQUssRUFBRXJCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTaUIsS0FBVCxJQUFrQixHQVhyQjtBQVlKQyxVQUFBQSxPQUFPLEVBQUU7QUFBRUMsWUFBQUEsT0FBTyxFQUFFO0FBQUVDLGNBQUFBLEtBQUssRUFBRWxCLE9BQUYsYUFBRUEsT0FBRix3Q0FBRUEsT0FBTyxDQUFFbUIsSUFBWCxrREFBRSxjQUFlRDtBQUF4QjtBQUFYO0FBWkw7QUFEaUMsT0FBcEIsQ0FBckI7QUFnQkF2QixNQUFBQSxHQUFHLENBQUN5QixJQUFKLENBQVNuQixNQUFUO0FBQ0QsS0FuQkQsQ0FtQkUsT0FBT29CLEdBQVAsRUFBWTtBQUNaMUIsTUFBQUEsR0FBRyxDQUFDMkIsSUFBSixDQUFTRCxHQUFUO0FBQ0F6QixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXdCLEdBQVo7QUFDRDtBQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2VsbC1jbHVjdGgvLi9wYWdlcy9hcGkvc2F2ZVN3ZWxsLmpzP2RlYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcblxuLy8gUE9TVCAvYXBpL3Bvc3Rcbi8vIFJlcXVpcmVkIGZpZWxkcyBpbiBib2R5OiB0aXRsZVxuLy8gT3B0aW9uYWwgZmllbGRzIGluIGJvZHk6IGNvbnRlbnRcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5zd2VsbC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc3BvdElkOiByZXEuYm9keS5zcG90SWQsXG4gICAgICAgICAgc3BvdE5hbWU6IHJlcS5ib2R5LnNwb3ROYW1lLFxuICAgICAgICAgIHN3ZWxsMTogcmVxLmJvZHkuc3dlbGwxIHx8IFwiIFwiLFxuICAgICAgICAgIHN3ZWxsMjogcmVxLmJvZHkuc3dlbGwyIHx8IFwiIFwiLFxuICAgICAgICAgIHN3ZWxsMzogcmVxLmJvZHkuc3dlbGwzIHx8IFwiIFwiLFxuICAgICAgICAgIHN3ZWxsNDogcmVxLmJvZHkuc3dlbGw0IHx8IFwiIFwiLFxuICAgICAgICAgIHN3ZWxsNTogcmVxLmJvZHkuc3dlbGw1IHx8IFwiIFwiLFxuICAgICAgICAgIHN3ZWxsNjogcmVxLmJvZHkuc3dlbGw2IHx8IFwiIFwiLFxuICAgICAgICAgIHdpbmQ6IHJlcS5ib2R5LndpbmQsXG4gICAgICAgICAgdGlkZTogcmVxLmJvZHkudGlkZSxcbiAgICAgICAgICBub3RlczogcmVxLmJvZHkubm90ZXMgfHwgXCIgXCIsXG4gICAgICAgICAgYWNjb3VudDogeyBjb25uZWN0OiB7IGVtYWlsOiBzZXNzaW9uPy51c2VyPy5lbWFpbCB9IH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJlcy5qc29uKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc2VuZChlcnIpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJnZXRTZXNzaW9uIiwiaGFuZGxlIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJtZXRob2QiLCJzZXNzaW9uIiwicmVzdWx0Iiwic3dlbGwiLCJjcmVhdGUiLCJkYXRhIiwic3BvdElkIiwic3BvdE5hbWUiLCJzd2VsbDEiLCJzd2VsbDIiLCJzd2VsbDMiLCJzd2VsbDQiLCJzd2VsbDUiLCJzd2VsbDYiLCJ3aW5kIiwidGlkZSIsIm5vdGVzIiwiYWNjb3VudCIsImNvbm5lY3QiLCJlbWFpbCIsInVzZXIiLCJqc29uIiwiZXJyIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/saveSwell.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/saveSwell.js"));
module.exports = __webpack_exports__;

})();