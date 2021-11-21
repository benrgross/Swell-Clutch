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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n  if (req.method === \"POST\") {\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=${req.body.spotId}`);\n      res.json(data);\n    } catch (error) {\n      console.log(error);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3dlbGxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUk7QUFDRixZQUFNO0FBQUVDLFFBQUFBO0FBQUYsVUFBVyxNQUFNTCxnREFBQSxDQUNwQixrRUFBaUVFLEdBQUcsQ0FBQ0ssSUFBSixDQUFTQyxNQUFPLEVBRDdELENBQXZCO0FBSUFMLE1BQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTSixJQUFUO0FBQ0QsS0FORCxDQU1FLE9BQU9LLEtBQVAsRUFBYztBQUNkQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3N3ZWxsLWNsdWN0aC8uL3BhZ2VzL2FwaS9zd2VsbHMuanM/MTVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9zZXJ2aWNlcy5zdXJmbGluZS5jb20va2J5Zy9zcG90cy9mb3JlY2FzdHMvd2F2ZT9zcG90SWQ9JHtyZXEuYm9keS5zcG90SWR9YFxuICAgICAgKTtcblxuICAgICAgcmVzLmpzb24oZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiZ2V0IiwiYm9keSIsInNwb3RJZCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/swells.js\n");

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