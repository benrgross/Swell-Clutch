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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getUploadImage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/AWS.js":
/*!********************!*\
  !*** ./lib/AWS.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst S3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.S3({\n  signatureVersion: \"v4\",\n  region: \"us-east-2\",\n  credentials: {\n    accessKeyId: \"AKIAZSP3BP5HS7E2ZTJW\",\n    secretAccessKey: \"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\"\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (S3);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvQVdTLmpzPzcyZDAiXSwibmFtZXMiOlsiUzMiLCJBV1MiLCJzaWduYXR1cmVWZXJzaW9uIiwicmVnaW9uIiwiY3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsInNlY3JldEFjY2Vzc0tleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxFQUFFLEdBQUcsSUFBSUMsOENBQUcsQ0FBQ0QsRUFBUixDQUFXO0FBQ3BCRSxrQkFBZ0IsRUFBRSxJQURFO0FBRXBCQyxRQUFNLEVBQUUsV0FGWTtBQUdwQkMsYUFBVyxFQUFFO0FBQ1hDLGVBQVcsRUFBRSxzQkFERjtBQUVYQyxtQkFBZSxFQUFFO0FBRk47QUFITyxDQUFYLENBQVg7QUFTZU4saUVBQWYiLCJmaWxlIjoiLi9saWIvQVdTLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFXUyBmcm9tIFwiYXdzLXNka1wiO1xuXG5jb25zdCBTMyA9IG5ldyBBV1MuUzMoe1xuICBzaWduYXR1cmVWZXJzaW9uOiBcInY0XCIsXG4gIHJlZ2lvbjogXCJ1cy1lYXN0LTJcIixcbiAgY3JlZGVudGlhbHM6IHtcbiAgICBhY2Nlc3NLZXlJZDogXCJBS0lBWlNQM0JQNUhTN0UyWlRKV1wiLFxuICAgIHNlY3JldEFjY2Vzc0tleTogXCJabWpKenFiTHpiS21ZTU1SSjd5aXd2ZE5adnovM1lXVXlSSFhkTURqXCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUzM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/AWS.js\n");

/***/ }),

/***/ "./pages/api/getUploadImage.js":
/*!*************************************!*\
  !*** ./pages/api/getUploadImage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handle; });\n/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ \"typeorm\");\n/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_AWS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/AWS */ \"./lib/AWS.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handle(req, res) {\n  console.log(\"f\", req.body);\n\n  if (req.method === \"POST\") {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://11k2bj0e8j.execute-api.us-east-2.amazonaws.com/default/getPresignedImageURL`);\n    console.log(\"Response: \", response); // * PUT request: upload file to S3\n    // follow youtube for https://www.youtube.com/watch?v=V45ymCXBpUM\n    // movie call to api backend.\n    // use the S3 client\n\n    const result = await fetch(response.data.uploadURL, {\n      method: \"PUT\",\n      headers: {\n        ContentType: \"image/jpeg, image/png, image/heic, mov/mp4\"\n      },\n      body: req.body.file[0].file\n    });\n    console.log(\"Result: \", result);\n    const fileName = response.data.Key;\n    const params = {\n      Bucket: \"swell-clutch\",\n      Key: fileName,\n      Expires: 604800\n    };\n    const signedURL = _lib_AWS__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSignedUrl(\"getObject\", params);\n    console.log(\"url\", signedURL);\n    res.json(signedURL);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0VXBsb2FkSW1hZ2UuanM/ZmU5MyJdLCJuYW1lcyI6WyJoYW5kbGUiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIm1ldGhvZCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJyZXN1bHQiLCJmZXRjaCIsImRhdGEiLCJ1cGxvYWRVUkwiLCJoZWFkZXJzIiwiQ29udGVudFR5cGUiLCJmaWxlIiwiZmlsZU5hbWUiLCJLZXkiLCJwYXJhbXMiLCJCdWNrZXQiLCJFeHBpcmVzIiwic2lnbmVkVVJMIiwiUzMiLCJnZXRTaWduZWRVcmwiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLGVBQWVBLE1BQWYsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM3Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQkgsR0FBRyxDQUFDSSxJQUFyQjs7QUFDQSxNQUFJSixHQUFHLENBQUNLLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUNwQixxRkFEb0IsQ0FBdkI7QUFJQU4sV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkcsUUFBMUIsRUFMeUIsQ0FPekI7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsVUFBTUcsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0osUUFBUSxDQUFDSyxJQUFULENBQWNDLFNBQWYsRUFBMEI7QUFDbERQLFlBQU0sRUFBRSxLQUQwQztBQUVsRFEsYUFBTyxFQUFFO0FBQ1BDLG1CQUFXLEVBQUU7QUFETixPQUZ5QztBQUtsRFYsVUFBSSxFQUFFSixHQUFHLENBQUNJLElBQUosQ0FBU1csSUFBVCxDQUFjLENBQWQsRUFBaUJBO0FBTDJCLEtBQTFCLENBQTFCO0FBT0FiLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JNLE1BQXhCO0FBRUEsVUFBTU8sUUFBUSxHQUFHVixRQUFRLENBQUNLLElBQVQsQ0FBY00sR0FBL0I7QUFFQSxVQUFNQyxNQUFNLEdBQUc7QUFDYkMsWUFBTSxFQUFFLGNBREs7QUFFYkYsU0FBRyxFQUFFRCxRQUZRO0FBR2JJLGFBQU8sRUFBRTtBQUhJLEtBQWY7QUFNQSxVQUFNQyxTQUFTLEdBQUdDLGdEQUFFLENBQUNDLFlBQUgsQ0FBZ0IsV0FBaEIsRUFBNkJMLE1BQTdCLENBQWxCO0FBRUFoQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1Ca0IsU0FBbkI7QUFDQXBCLE9BQUcsQ0FBQ3VCLElBQUosQ0FBU0gsU0FBVDtBQUNEO0FBQ0YiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0VXBsb2FkSW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2luZ0pvaW5Db2x1bW5Jc05vdEFsbG93ZWRFcnJvciB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgUzMgZnJvbSBcIi4uLy4uL2xpYi9BV1NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKFwiZlwiLCByZXEuYm9keSk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vMTFrMmJqMGU4ai5leGVjdXRlLWFwaS51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9kZWZhdWx0L2dldFByZXNpZ25lZEltYWdlVVJMYFxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuXG4gICAgLy8gKiBQVVQgcmVxdWVzdDogdXBsb2FkIGZpbGUgdG8gUzNcblxuICAgIC8vIGZvbGxvdyB5b3V0dWJlIGZvciBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVY0NXltQ1hCcFVNXG4gICAgLy8gbW92aWUgY2FsbCB0byBhcGkgYmFja2VuZC5cbiAgICAvLyB1c2UgdGhlIFMzIGNsaWVudFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHJlc3BvbnNlLmRhdGEudXBsb2FkVVJMLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIENvbnRlbnRUeXBlOiBcImltYWdlL2pwZWcsIGltYWdlL3BuZywgaW1hZ2UvaGVpYywgbW92L21wNFwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IHJlcS5ib2R5LmZpbGVbMF0uZmlsZSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG5cbiAgICBjb25zdCBmaWxlTmFtZSA9IHJlc3BvbnNlLmRhdGEuS2V5O1xuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgQnVja2V0OiBcInN3ZWxsLWNsdXRjaFwiLFxuICAgICAgS2V5OiBmaWxlTmFtZSxcbiAgICAgIEV4cGlyZXM6IDYwNDgwMCxcbiAgICB9O1xuXG4gICAgY29uc3Qgc2lnbmVkVVJMID0gUzMuZ2V0U2lnbmVkVXJsKFwiZ2V0T2JqZWN0XCIsIHBhcmFtcyk7XG5cbiAgICBjb25zb2xlLmxvZyhcInVybFwiLCBzaWduZWRVUkwpO1xuICAgIHJlcy5qc29uKHNpZ25lZFVSTCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/getUploadImage.js\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhd3Mtc2RrXCI/NTE0MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhd3Mtc2RrLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdzLXNka1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///aws-sdk\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"typeorm\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0eXBlb3JtXCI/OGE4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0eXBlb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///typeorm\n");

/***/ })

/******/ });