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
exports.id = "pages/api/tides";
exports.ids = ["pages/api/tides"];
exports.modules = {

/***/ "./pages/api/tides.js":
/*!****************************!*\
  !*** ./pages/api/tides.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n  console.log(\"req.body\", req.body.spotId);\n\n  if (req.method === \"POST\") {\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://services.surfline.com/kbyg/spots/forecasts/tides?spotId=${req.body.spotId}`);\n      res.json(data);\n    } catch (error) {\n      console.log(error);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGlkZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JILEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxNQUFqQzs7QUFDQSxNQUFJTCxHQUFHLENBQUNNLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixRQUFJO0FBQ0YsWUFBTTtBQUFFQyxRQUFBQTtBQUFGLFVBQVcsTUFBTVQsZ0RBQUEsQ0FDcEIsbUVBQWtFRSxHQUFHLENBQUNJLElBQUosQ0FBU0MsTUFBTyxFQUQ5RCxDQUF2QjtBQUlBSixNQUFBQSxHQUFHLENBQUNRLElBQUosQ0FBU0YsSUFBVDtBQUNELEtBTkQsQ0FNRSxPQUFPRyxLQUFQLEVBQWM7QUFDZFIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7QUFDRDtBQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2VsbC1jbHVjdGgvLi9wYWdlcy9hcGkvdGlkZXMuanM/ZTEwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coXCJyZXEuYm9keVwiLCByZXEuYm9keS5zcG90SWQpO1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGBodHRwczovL3NlcnZpY2VzLnN1cmZsaW5lLmNvbS9rYnlnL3Nwb3RzL2ZvcmVjYXN0cy90aWRlcz9zcG90SWQ9JHtyZXEuYm9keS5zcG90SWR9YFxuICAgICAgKTtcblxuICAgICAgcmVzLmpzb24oZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInNwb3RJZCIsIm1ldGhvZCIsImRhdGEiLCJnZXQiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/tides.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/tides.js"));
module.exports = __webpack_exports__;

})();