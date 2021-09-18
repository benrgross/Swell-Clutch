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
exports.id = "pages/api/swells";
exports.ids = ["pages/api/swells"];
exports.modules = {

/***/ "./pages/api/swells.js":
/*!*****************************!*\
  !*** ./pages/api/swells.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n  console.log(\"req.body\", req.body.spotId);\n\n  if (req.method === \"POST\") {\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=${req.body.spotId}`);\n      res.json(data);\n    } catch (error) {\n      console.log(error);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3dlbGxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCSCxHQUFHLENBQUNJLElBQUosQ0FBU0MsTUFBakM7O0FBQ0EsTUFBSUwsR0FBRyxDQUFDTSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsUUFBSTtBQUNGLFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUFXLE1BQU1ULGdEQUFBLENBQ3BCLGtFQUFpRUUsR0FBRyxDQUFDSSxJQUFKLENBQVNDLE1BQU8sRUFEN0QsQ0FBdkI7QUFJQUosTUFBQUEsR0FBRyxDQUFDUSxJQUFKLENBQVNGLElBQVQ7QUFDRCxLQU5ELENBTUUsT0FBT0csS0FBUCxFQUFjO0FBQ2RSLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxLQUFaO0FBQ0Q7QUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3dlbGwtY2x1Y3RoLy4vcGFnZXMvYXBpL3N3ZWxscy5qcz8xNWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhcInJlcS5ib2R5XCIsIHJlcS5ib2R5LnNwb3RJZCk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYGh0dHBzOi8vc2VydmljZXMuc3VyZmxpbmUuY29tL2tieWcvc3BvdHMvZm9yZWNhc3RzL3dhdmU/c3BvdElkPSR7cmVxLmJvZHkuc3BvdElkfWBcbiAgICAgICk7XG5cbiAgICAgIHJlcy5qc29uKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJzcG90SWQiLCJtZXRob2QiLCJkYXRhIiwiZ2V0IiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/swells.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/swells.js"));
module.exports = __webpack_exports__;

})();