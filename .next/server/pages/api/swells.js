/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/swells";
exports.ids = ["pages/api/swells"];
exports.modules = {

/***/ "./pages/api/swells.js":
/*!*****************************!*\
  !*** ./pages/api/swells.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n  console.log(\"req.body\", req.body.spotId);\n\n  if (req.method === \"POST\") {\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=${req.body.spotId}`);\n      res.json(data);\n    } catch (error) {\n      console.log(error);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2VsbC1jbHVjdGgvLi9wYWdlcy9hcGkvc3dlbGxzLmpzPzE1ZWMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5Iiwic3BvdElkIiwibWV0aG9kIiwiZGF0YSIsImF4aW9zIiwianNvbiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVlLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkgsR0FBRyxDQUFDSSxJQUFKLENBQVNDLE1BQWpDOztBQUNBLE1BQUlMLEdBQUcsQ0FBQ00sTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUk7QUFDRixZQUFNO0FBQUVDO0FBQUYsVUFBVyxNQUFNQyxnREFBQSxDQUNwQixrRUFBaUVSLEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxNQUFPLEVBRDdELENBQXZCO0FBSUFKLFNBQUcsQ0FBQ1EsSUFBSixDQUFTRixJQUFUO0FBQ0QsS0FORCxDQU1FLE9BQU9HLEtBQVAsRUFBYztBQUNkUixhQUFPLENBQUNDLEdBQVIsQ0FBWU8sS0FBWjtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zd2VsbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coXCJyZXEuYm9keVwiLCByZXEuYm9keS5zcG90SWQpO1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGBodHRwczovL3NlcnZpY2VzLnN1cmZsaW5lLmNvbS9rYnlnL3Nwb3RzL2ZvcmVjYXN0cy93YXZlP3Nwb3RJZD0ke3JlcS5ib2R5LnNwb3RJZH1gXG4gICAgICApO1xuXG4gICAgICByZXMuanNvbihkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/swells.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/swells.js"));
module.exports = __webpack_exports__;

})();