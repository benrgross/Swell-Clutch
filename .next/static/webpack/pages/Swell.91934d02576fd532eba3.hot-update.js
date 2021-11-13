webpackHotUpdate_N_E("pages/Swell",{

/***/ "./components/ImageUploader.js":
/*!*************************************!*\
  !*** ./components/ImageUploader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone-uploader/dist/styles.css */ \"./node_modules/react-dropzone-uploader/dist/styles.css\");\n/* harmony import */ var react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone-uploader */ \"./node_modules/react-dropzone-uploader/dist/react-dropzone-uploader.js\");\n/* harmony import */ var react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_AWS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/AWS */ \"./lib/AWS.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/bengross/Desktop/Swell Clutch/Swell-Clutch/components/ImageUploader.js\";\n\n\n\n\n\n\n\nfunction ImageUploader() {\n  var handleChangeStatus = function handleChangeStatus(_ref, status) {\n    var meta = _ref.meta,\n        remove = _ref.remove;\n    console.log(status, meta);\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(files) {\n      var f, response, result, fileName, params, signedURL;\n      return _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              f = files[0];\n              console.log(f[\"file\"]); // * GET request: presigned URL\n\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(\"https://11k2bj0e8j.execute-api.us-east-2.amazonaws.com/default/getPresignedImageURL\");\n\n            case 4:\n              response = _context.sent;\n              console.log(\"Response: \", response); // * PUT request: upload file to S3\n              // follow youtube for https://www.youtube.com/watch?v=V45ymCXBpUM\n              // movie call to api backend.\n              // use the S3 client\n\n              _context.next = 8;\n              return fetch(response.data.uploadURL, {\n                method: \"PUT\",\n                headers: {\n                  ContentType: \"image/jpeg, image/png, image/heic, mov/mp4\"\n                },\n                body: f[\"file\"]\n              });\n\n            case 8:\n              result = _context.sent;\n              console.log(\"Result: \", result);\n              fileName = response.data.Key;\n              params = {\n                Bucket: \"aws-tutorial-codedamn\",\n                Key: fileName,\n                Expires: 60\n              };\n              signedURL = _lib_AWS__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getSignedUrl(\"getObject\", params);\n              console.log(\"url\", signedURL);\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    onChangeStatus: handleChangeStatus,\n    onSubmit: handleSubmit,\n    hello: true,\n    maxFiles: 1,\n    multiple: false,\n    canCancel: false,\n    inputContent: \"Add A Photo\",\n    styles: {\n      dropzone: {\n        width: 200,\n        height: 10\n      },\n      dropzoneActive: {\n        borderColor: \"green\"\n      }\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageUploader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLmpzPzdlYzciXSwibmFtZXMiOlsiSW1hZ2VVcGxvYWRlciIsImhhbmRsZUNoYW5nZVN0YXR1cyIsInN0YXR1cyIsIm1ldGEiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZmlsZXMiLCJmIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsInVwbG9hZFVSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJDb250ZW50VHlwZSIsImJvZHkiLCJyZXN1bHQiLCJmaWxlTmFtZSIsIktleSIsInBhcmFtcyIsIkJ1Y2tldCIsIkV4cGlyZXMiLCJzaWduZWRVUkwiLCJTMyIsImdldFNpZ25lZFVybCIsImRyb3B6b25lIiwid2lkdGgiLCJoZWlnaHQiLCJkcm9wem9uZUFjdGl2ZSIsImJvcmRlckNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFDdkIsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUFtQkMsTUFBbkIsRUFBOEI7QUFBQSxRQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsUUFBckJDLE1BQXFCLFFBQXJCQSxNQUFxQjtBQUN2REMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVosRUFBb0JDLElBQXBCO0FBQ0QsR0FGRDs7QUFHQSxNQUFNSSxZQUFZO0FBQUEsaVdBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JDLGVBRGEsR0FDVEQsS0FBSyxDQUFDLENBQUQsQ0FESTtBQUVuQkgscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxDQUFDLENBQUMsTUFBRCxDQUFiLEVBRm1CLENBR25COztBQUhtQjtBQUFBLHFCQUlJQyw0Q0FBSyxDQUFDQyxHQUFOLHVGQUpKOztBQUFBO0FBSWJDLHNCQUphO0FBUW5CUCxxQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQk0sUUFBMUIsRUFSbUIsQ0FVbkI7QUFFQTtBQUNBO0FBQ0E7O0FBZG1CO0FBQUEscUJBZUVDLEtBQUssQ0FBQ0QsUUFBUSxDQUFDRSxJQUFULENBQWNDLFNBQWYsRUFBMEI7QUFDbERDLHNCQUFNLEVBQUUsS0FEMEM7QUFFbERDLHVCQUFPLEVBQUU7QUFDUEMsNkJBQVcsRUFBRTtBQUROLGlCQUZ5QztBQUtsREMsb0JBQUksRUFBRVYsQ0FBQyxDQUFDLE1BQUQ7QUFMMkMsZUFBMUIsQ0FmUDs7QUFBQTtBQWViVyxvQkFmYTtBQXNCbkJmLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCYyxNQUF4QjtBQUVNQyxzQkF4QmEsR0F3QkZULFFBQVEsQ0FBQ0UsSUFBVCxDQUFjUSxHQXhCWjtBQTBCYkMsb0JBMUJhLEdBMEJKO0FBQ2JDLHNCQUFNLEVBQUUsdUJBREs7QUFFYkYsbUJBQUcsRUFBRUQsUUFGUTtBQUdiSSx1QkFBTyxFQUFFO0FBSEksZUExQkk7QUFnQ2JDLHVCQWhDYSxHQWdDREMsZ0RBQUUsQ0FBQ0MsWUFBSCxDQUFnQixXQUFoQixFQUE2QkwsTUFBN0IsQ0FoQ0M7QUFrQ25CbEIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJvQixTQUFuQjs7QUFsQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpuQixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQXFDQSxzQkFDRSxxRUFBQyw4REFBRDtBQUNFLGtCQUFjLEVBQUVOLGtCQURsQjtBQUVFLFlBQVEsRUFBRU0sWUFGWjtBQUdFLFNBQUssTUFIUDtBQUlFLFlBQVEsRUFBRSxDQUpaO0FBS0UsWUFBUSxFQUFFLEtBTFo7QUFNRSxhQUFTLEVBQUUsS0FOYjtBQU9FLGdCQUFZLEVBQUMsYUFQZjtBQVFFLFVBQU0sRUFBRTtBQUNOc0IsY0FBUSxFQUFFO0FBQUVDLGFBQUssRUFBRSxHQUFUO0FBQWNDLGNBQU0sRUFBRTtBQUF0QixPQURKO0FBRU5DLG9CQUFjLEVBQUU7QUFBRUMsbUJBQVcsRUFBRTtBQUFmO0FBRlY7QUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7S0F4RFFqQyxhO0FBMERNQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlYWN0LWRyb3B6b25lLXVwbG9hZGVyL2Rpc3Qvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZS11cGxvYWRlclwiO1xuaW1wb3J0IFMzIGZyb20gXCIuLi9saWIvQVdTXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmZ1bmN0aW9uIEltYWdlVXBsb2FkZXIoKSB7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN0YXR1cyA9ICh7IG1ldGEsIHJlbW92ZSB9LCBzdGF0dXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0dXMsIG1ldGEpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZmlsZXMpID0+IHtcbiAgICBjb25zdCBmID0gZmlsZXNbMF07XG4gICAgY29uc29sZS5sb2coZltcImZpbGVcIl0pO1xuICAgIC8vICogR0VUIHJlcXVlc3Q6IHByZXNpZ25lZCBVUkxcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovLzExazJiajBlOGouZXhlY3V0ZS1hcGkudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vZGVmYXVsdC9nZXRQcmVzaWduZWRJbWFnZVVSTGBcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coXCJSZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcblxuICAgIC8vICogUFVUIHJlcXVlc3Q6IHVwbG9hZCBmaWxlIHRvIFMzXG5cbiAgICAvLyBmb2xsb3cgeW91dHViZSBmb3IgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1WNDV5bUNYQnBVTVxuICAgIC8vIG1vdmllIGNhbGwgdG8gYXBpIGJhY2tlbmQuXG4gICAgLy8gdXNlIHRoZSBTMyBjbGllbnRcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChyZXNwb25zZS5kYXRhLnVwbG9hZFVSTCwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBDb250ZW50VHlwZTogXCJpbWFnZS9qcGVnLCBpbWFnZS9wbmcsIGltYWdlL2hlaWMsIG1vdi9tcDRcIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBmW1wiZmlsZVwiXSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdDogXCIsIHJlc3VsdCk7XG5cbiAgICBjb25zdCBmaWxlTmFtZSA9IHJlc3BvbnNlLmRhdGEuS2V5O1xuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgQnVja2V0OiBcImF3cy10dXRvcmlhbC1jb2RlZGFtblwiLFxuICAgICAgS2V5OiBmaWxlTmFtZSxcbiAgICAgIEV4cGlyZXM6IDYwLFxuICAgIH07XG5cbiAgICBjb25zdCBzaWduZWRVUkwgPSBTMy5nZXRTaWduZWRVcmwoXCJnZXRPYmplY3RcIiwgcGFyYW1zKTtcblxuICAgIGNvbnNvbGUubG9nKFwidXJsXCIsIHNpZ25lZFVSTCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RHJvcHpvbmVcbiAgICAgIG9uQ2hhbmdlU3RhdHVzPXtoYW5kbGVDaGFuZ2VTdGF0dXN9XG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgaGVsbG9cbiAgICAgIG1heEZpbGVzPXsxfVxuICAgICAgbXVsdGlwbGU9e2ZhbHNlfVxuICAgICAgY2FuQ2FuY2VsPXtmYWxzZX1cbiAgICAgIGlucHV0Q29udGVudD1cIkFkZCBBIFBob3RvXCJcbiAgICAgIHN0eWxlcz17e1xuICAgICAgICBkcm9wem9uZTogeyB3aWR0aDogMjAwLCBoZWlnaHQ6IDEwIH0sXG4gICAgICAgIGRyb3B6b25lQWN0aXZlOiB7IGJvcmRlckNvbG9yOiBcImdyZWVuXCIgfSxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VVcGxvYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ImageUploader.js\n");

/***/ })

})