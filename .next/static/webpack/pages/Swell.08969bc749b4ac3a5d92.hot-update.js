webpackHotUpdate_N_E("pages/Swell",{

/***/ "./lib/AWS.js":
/*!********************!*\
  !*** ./lib/AWS.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"./node_modules/aws-sdk/lib/browser.js\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nvar S3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.S3({\n  endpoint: \"s3-eu-central-1.amazonaws.com\",\n  signatureVersion: \"v4\",\n  region: \"eu-central-1\",\n  credentials: {\n    accessKeyId: \"AKIAZSP3BP5HS7E2ZTJW\",\n    secretAccessKey: \"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\"\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (S3);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL0FXUy5qcz83MmQwIl0sIm5hbWVzIjpbIlMzIiwiQVdTIiwiZW5kcG9pbnQiLCJzaWduYXR1cmVWZXJzaW9uIiwicmVnaW9uIiwiY3JlZGVudGlhbHMiLCJhY2Nlc3NLZXlJZCIsInNlY3JldEFjY2Vzc0tleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxFQUFFLEdBQUcsSUFBSUMsOENBQUcsQ0FBQ0QsRUFBUixDQUFXO0FBQ3BCRSxVQUFRLEVBQUUsK0JBRFU7QUFFcEJDLGtCQUFnQixFQUFFLElBRkU7QUFHcEJDLFFBQU0sRUFBRSxjQUhZO0FBSXBCQyxhQUFXLEVBQUU7QUFDWEMsZUFBVyxFQUFFLHNCQURGO0FBRVhDLG1CQUFlLEVBQUU7QUFGTjtBQUpPLENBQVgsQ0FBWDtBQVVlUCxpRUFBZiIsImZpbGUiOiIuL2xpYi9BV1MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVdTIGZyb20gXCJhd3Mtc2RrXCI7XG5cbmNvbnN0IFMzID0gbmV3IEFXUy5TMyh7XG4gIGVuZHBvaW50OiBcInMzLWV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXCIsXG4gIHNpZ25hdHVyZVZlcnNpb246IFwidjRcIixcbiAgcmVnaW9uOiBcImV1LWNlbnRyYWwtMVwiLFxuICBjcmVkZW50aWFsczoge1xuICAgIGFjY2Vzc0tleUlkOiBcIkFLSUFaU1AzQlA1SFM3RTJaVEpXXCIsXG4gICAgc2VjcmV0QWNjZXNzS2V5OiBcIlptakp6cWJMemJLbVlNTVJKN3lpd3ZkTlp2ei8zWVdVeVJIWGRNRGpcIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTMztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/AWS.js\n");

/***/ })

})