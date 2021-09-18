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
exports.id = "pages/api/searchSpot";
exports.ids = ["pages/api/searchSpot"];
exports.modules = {

/***/ "./pages/api/searchSpot.js":
/*!*********************************!*\
  !*** ./pages/api/searchSpot.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\");\n\nasync function handler(req, res) {\n  console.log(\"req.body\", req.body);\n\n  if (req.method === \"POST\") {\n    try {\n      const results = [];\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://www.surfline.com/search/${req.body.spot}`);\n      const $ = cheerio.load(data);\n      $(\"#surf-spots > div > div\").each((i, element) => {\n        let href = $(element).children(\"a\").attr(\"href\");\n        let spotId = href.split(\"/\")[5];\n        let name = $(element).find(\".result__name\").text();\n        const spot = {\n          name: name,\n          spotId: spotId,\n          href: href\n        };\n        results.push(spot);\n      });\n      res.json(results);\n    } catch (error) {\n      console.log(error);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2VhcmNoU3BvdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBRWUsZUFBZUMsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCSCxHQUFHLENBQUNJLElBQTVCOztBQUNBLE1BQUlKLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUk7QUFDRixZQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFDQSxZQUFNO0FBQUVDLFFBQUFBO0FBQUYsVUFBVyxNQUFNWCxnREFBQSxDQUNwQixtQ0FBa0NJLEdBQUcsQ0FBQ0ksSUFBSixDQUFTSyxJQUFLLEVBRDVCLENBQXZCO0FBSUEsWUFBTUMsQ0FBQyxHQUFHYixPQUFPLENBQUNjLElBQVIsQ0FBYUosSUFBYixDQUFWO0FBRUFHLE1BQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCRSxJQUE3QixDQUFrQyxDQUFDQyxDQUFELEVBQUlDLE9BQUosS0FBZ0I7QUFDaEQsWUFBSUMsSUFBSSxHQUFHTCxDQUFDLENBQUNJLE9BQUQsQ0FBRCxDQUFXRSxRQUFYLENBQW9CLEdBQXBCLEVBQXlCQyxJQUF6QixDQUE4QixNQUE5QixDQUFYO0FBQ0EsWUFBSUMsTUFBTSxHQUFHSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQWI7QUFDQSxZQUFJQyxJQUFJLEdBQUdWLENBQUMsQ0FBQ0ksT0FBRCxDQUFELENBQVdPLElBQVgsQ0FBZ0IsZUFBaEIsRUFBaUNDLElBQWpDLEVBQVg7QUFFQSxjQUFNYixJQUFJLEdBQUc7QUFDWFcsVUFBQUEsSUFBSSxFQUFFQSxJQURLO0FBRVhGLFVBQUFBLE1BQU0sRUFBRUEsTUFGRztBQUdYSCxVQUFBQSxJQUFJLEVBQUVBO0FBSEssU0FBYjtBQUtBVCxRQUFBQSxPQUFPLENBQUNpQixJQUFSLENBQWFkLElBQWI7QUFDRCxPQVhEO0FBWUFSLE1BQUFBLEdBQUcsQ0FBQ3VCLElBQUosQ0FBU2xCLE9BQVQ7QUFDRCxLQXJCRCxDQXFCRSxPQUFPbUIsS0FBUCxFQUFjO0FBQ2R2QixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXNCLEtBQVo7QUFDRDtBQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2VsbC1jbHVjdGgvLi9wYWdlcy9hcGkvc2VhcmNoU3BvdC5qcz9jNTNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNvbnN0IGNoZWVyaW8gPSByZXF1aXJlKFwiY2hlZXJpb1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhcInJlcS5ib2R5XCIsIHJlcS5ib2R5KTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly93d3cuc3VyZmxpbmUuY29tL3NlYXJjaC8ke3JlcS5ib2R5LnNwb3R9YFxuICAgICAgKTtcblxuICAgICAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChkYXRhKTtcblxuICAgICAgJChcIiNzdXJmLXNwb3RzID4gZGl2ID4gZGl2XCIpLmVhY2goKGksIGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGhyZWYgPSAkKGVsZW1lbnQpLmNoaWxkcmVuKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgbGV0IHNwb3RJZCA9IGhyZWYuc3BsaXQoXCIvXCIpWzVdO1xuICAgICAgICBsZXQgbmFtZSA9ICQoZWxlbWVudCkuZmluZChcIi5yZXN1bHRfX25hbWVcIikudGV4dCgpO1xuXG4gICAgICAgIGNvbnN0IHNwb3QgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBzcG90SWQ6IHNwb3RJZCxcbiAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICB9O1xuICAgICAgICByZXN1bHRzLnB1c2goc3BvdCk7XG4gICAgICB9KTtcbiAgICAgIHJlcy5qc29uKHJlc3VsdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjaGVlcmlvIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm1ldGhvZCIsInJlc3VsdHMiLCJkYXRhIiwiZ2V0Iiwic3BvdCIsIiQiLCJsb2FkIiwiZWFjaCIsImkiLCJlbGVtZW50IiwiaHJlZiIsImNoaWxkcmVuIiwiYXR0ciIsInNwb3RJZCIsInNwbGl0IiwibmFtZSIsImZpbmQiLCJ0ZXh0IiwicHVzaCIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/searchSpot.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/searchSpot.js"));
module.exports = __webpack_exports__;

})();