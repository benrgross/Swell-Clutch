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
exports.id = "pages/api/winds";
exports.ids = ["pages/api/winds"];
exports.modules = {

/***/ "./pages/api/winds.js":
/*!****************************!*\
  !*** ./pages/api/winds.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n  console.log(\"req.body\", req.body.spotId);\n\n  if (req.method === \"POST\") {\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://services.surfline.com/kbyg/spots/forecasts/wind?spotId=${req.body.spotId}`);\n      res.json(data);\n    } catch (error) {\n      console.log(error);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2VsbC1jbHVjdGgvLi9wYWdlcy9hcGkvd2luZHMuanM/OTc4NyJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJzcG90SWQiLCJtZXRob2QiLCJkYXRhIiwiYXhpb3MiLCJqc29uIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRWUsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCSCxHQUFHLENBQUNJLElBQUosQ0FBU0MsTUFBakM7O0FBQ0EsTUFBSUwsR0FBRyxDQUFDTSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsUUFBSTtBQUNGLFlBQU07QUFBRUM7QUFBRixVQUFXLE1BQU1DLGdEQUFBLENBQ3BCLGtFQUFpRVIsR0FBRyxDQUFDSSxJQUFKLENBQVNDLE1BQU8sRUFEN0QsQ0FBdkI7QUFJQUosU0FBRyxDQUFDUSxJQUFKLENBQVNGLElBQVQ7QUFDRCxLQU5ELENBTUUsT0FBT0csS0FBUCxFQUFjO0FBQ2RSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTyxLQUFaO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3dpbmRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKFwicmVxLmJvZHlcIiwgcmVxLmJvZHkuc3BvdElkKTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9zZXJ2aWNlcy5zdXJmbGluZS5jb20va2J5Zy9zcG90cy9mb3JlY2FzdHMvd2luZD9zcG90SWQ9JHtyZXEuYm9keS5zcG90SWR9YFxuICAgICAgKTtcblxuICAgICAgcmVzLmpzb24oZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/winds.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/winds.js"));
module.exports = __webpack_exports__;

})();