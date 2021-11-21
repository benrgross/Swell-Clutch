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
exports.id = "pages/api/winds";
exports.ids = ["pages/api/winds"];
exports.modules = {

/***/ "./pages/api/winds.js":
/*!****************************!*\
  !*** ./pages/api/winds.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n  if (req.method === \"POST\") {\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://services.surfline.com/kbyg/spots/forecasts/wind?spotId=${req.body.spotId}`);\n      res.json(data);\n    } catch (error) {\n      console.log(error);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvd2luZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsUUFBSTtBQUNGLFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUFXLE1BQU1MLGdEQUFBLENBQ3BCLGtFQUFpRUUsR0FBRyxDQUFDSyxJQUFKLENBQVNDLE1BQU8sRUFEN0QsQ0FBdkI7QUFJQUwsTUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVNKLElBQVQ7QUFDRCxLQU5ELENBTUUsT0FBT0ssS0FBUCxFQUFjO0FBQ2RDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3dlbGwtY2x1Y3RoLy4vcGFnZXMvYXBpL3dpbmRzLmpzPzk3ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYGh0dHBzOi8vc2VydmljZXMuc3VyZmxpbmUuY29tL2tieWcvc3BvdHMvZm9yZWNhc3RzL3dpbmQ/c3BvdElkPSR7cmVxLmJvZHkuc3BvdElkfWBcbiAgICAgICk7XG5cbiAgICAgIHJlcy5qc29uKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImdldCIsImJvZHkiLCJzcG90SWQiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/winds.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/winds.js"));
module.exports = __webpack_exports__;

})();