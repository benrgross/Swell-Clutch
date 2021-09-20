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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/searchSpot.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/searchSpot.js":
/*!*********************************!*\
  !*** ./pages/api/searchSpot.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\");\n\nasync function handler(req, res) {\n  console.log(\"req.body\", req.body);\n\n  if (req.method === \"POST\") {\n    try {\n      const results = [];\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://www.surfline.com/search/${req.body.spot}`);\n      const $ = cheerio.load(data);\n      $(\"#surf-spots > div > div\").each((i, element) => {\n        let href = $(element).children(\"a\").attr(\"href\");\n        let spotId = href.split(\"/\")[5];\n        let name = $(element).find(\".result__name\").text();\n        const spot = {\n          name: name,\n          spotId: spotId,\n          href: href\n        };\n        results.push(spot);\n      });\n      res.json(results);\n    } catch (error) {\n      console.log(error);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2VhcmNoU3BvdC5qcz9jNTNiIl0sIm5hbWVzIjpbImNoZWVyaW8iLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwibWV0aG9kIiwicmVzdWx0cyIsImRhdGEiLCJheGlvcyIsImdldCIsInNwb3QiLCIkIiwibG9hZCIsImVhY2giLCJpIiwiZWxlbWVudCIsImhyZWYiLCJjaGlsZHJlbiIsImF0dHIiLCJzcG90SWQiLCJzcGxpdCIsIm5hbWUiLCJmaW5kIiwidGV4dCIsInB1c2giLCJqc29uIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFELENBQXZCOztBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkgsR0FBRyxDQUFDSSxJQUE1Qjs7QUFDQSxNQUFJSixHQUFHLENBQUNLLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixRQUFJO0FBQ0YsWUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBQ0EsWUFBTTtBQUFFQztBQUFGLFVBQVcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUNwQixtQ0FBa0NULEdBQUcsQ0FBQ0ksSUFBSixDQUFTTSxJQUFLLEVBRDVCLENBQXZCO0FBSUEsWUFBTUMsQ0FBQyxHQUFHZCxPQUFPLENBQUNlLElBQVIsQ0FBYUwsSUFBYixDQUFWO0FBRUFJLE9BQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCRSxJQUE3QixDQUFrQyxDQUFDQyxDQUFELEVBQUlDLE9BQUosS0FBZ0I7QUFDaEQsWUFBSUMsSUFBSSxHQUFHTCxDQUFDLENBQUNJLE9BQUQsQ0FBRCxDQUFXRSxRQUFYLENBQW9CLEdBQXBCLEVBQXlCQyxJQUF6QixDQUE4QixNQUE5QixDQUFYO0FBQ0EsWUFBSUMsTUFBTSxHQUFHSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQWI7QUFDQSxZQUFJQyxJQUFJLEdBQUdWLENBQUMsQ0FBQ0ksT0FBRCxDQUFELENBQVdPLElBQVgsQ0FBZ0IsZUFBaEIsRUFBaUNDLElBQWpDLEVBQVg7QUFFQSxjQUFNYixJQUFJLEdBQUc7QUFDWFcsY0FBSSxFQUFFQSxJQURLO0FBRVhGLGdCQUFNLEVBQUVBLE1BRkc7QUFHWEgsY0FBSSxFQUFFQTtBQUhLLFNBQWI7QUFLQVYsZUFBTyxDQUFDa0IsSUFBUixDQUFhZCxJQUFiO0FBQ0QsT0FYRDtBQVlBVCxTQUFHLENBQUN3QixJQUFKLENBQVNuQixPQUFUO0FBQ0QsS0FyQkQsQ0FxQkUsT0FBT29CLEtBQVAsRUFBYztBQUNkeEIsYUFBTyxDQUFDQyxHQUFSLENBQVl1QixLQUFaO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3NlYXJjaFNwb3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5jb25zdCBjaGVlcmlvID0gcmVxdWlyZShcImNoZWVyaW9cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc29sZS5sb2coXCJyZXEuYm9keVwiLCByZXEuYm9keSk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgYGh0dHBzOi8vd3d3LnN1cmZsaW5lLmNvbS9zZWFyY2gvJHtyZXEuYm9keS5zcG90fWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoZGF0YSk7XG5cbiAgICAgICQoXCIjc3VyZi1zcG90cyA+IGRpdiA+IGRpdlwiKS5lYWNoKChpLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCBocmVmID0gJChlbGVtZW50KS5jaGlsZHJlbihcImFcIikuYXR0cihcImhyZWZcIik7XG4gICAgICAgIGxldCBzcG90SWQgPSBocmVmLnNwbGl0KFwiL1wiKVs1XTtcbiAgICAgICAgbGV0IG5hbWUgPSAkKGVsZW1lbnQpLmZpbmQoXCIucmVzdWx0X19uYW1lXCIpLnRleHQoKTtcblxuICAgICAgICBjb25zdCBzcG90ID0ge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgc3BvdElkOiBzcG90SWQsXG4gICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHNwb3QpO1xuICAgICAgfSk7XG4gICAgICByZXMuanNvbihyZXN1bHRzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/searchSpot.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cheerio\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGVlcmlvXCI/MTRiMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjaGVlcmlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hlZXJpb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cheerio\n");

/***/ })

/******/ });