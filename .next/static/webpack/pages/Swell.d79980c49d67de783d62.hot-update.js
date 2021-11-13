webpackHotUpdate_N_E("pages/Swell",{

/***/ "./components/ImageUploader.js":
/*!*************************************!*\
  !*** ./components/ImageUploader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone-uploader/dist/styles.css */ \"./node_modules/react-dropzone-uploader/dist/styles.css\");\n/* harmony import */ var react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone-uploader */ \"./node_modules/react-dropzone-uploader/dist/react-dropzone-uploader.js\");\n/* harmony import */ var react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_AWS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/AWS */ \"./lib/AWS.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/bengross/Desktop/Swell Clutch/Swell-Clutch/components/ImageUploader.js\";\n\n\n\n\n\n\n\nfunction ImageUploader() {\n  var handleChangeStatus = function handleChangeStatus(_ref, status) {\n    var meta = _ref.meta,\n        remove = _ref.remove;\n    console.log(status, meta);\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(files) {\n      var f, response, result, fileName, params;\n      return _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              f = files[0];\n              console.log(f[\"file\"]); // * GET request: presigned URL\n\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(\"https://11k2bj0e8j.execute-api.us-east-2.amazonaws.com/default/getPresignedImageURL\");\n\n            case 4:\n              response = _context.sent;\n              console.log(\"Response: \", response); // * PUT request: upload file to S3\n              // follow youtube for https://www.youtube.com/watch?v=V45ymCXBpUM\n              // movie call to api backend.\n              // use the S3 client\n\n              _context.next = 8;\n              return fetch(response.data.uploadURL, {\n                method: \"PUT\",\n                headers: {\n                  ContentType: \"image/jpeg, image/png, image/heic, mov/mp4\"\n                },\n                body: f[\"file\"]\n              });\n\n            case 8:\n              result = _context.sent;\n              console.log(\"Result: \", result);\n              fileName = response.data.key;\n              params = {\n                Bucket: \"aws-tutorial-codedamn\",\n                Key: fileName,\n                Expires: 60\n              }; //     const signedURL = S3.getSignedUrl(\"getObject\", params);\n              //     res.json({\n              //       status: \"ok\",\n              //       data: signedURL,\n              //     });\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    onChangeStatus: handleChangeStatus,\n    onSubmit: handleSubmit,\n    hello: true,\n    maxFiles: 1,\n    multiple: false,\n    canCancel: false,\n    inputContent: \"Add A Photo\",\n    styles: {\n      dropzone: {\n        width: 200,\n        height: 10\n      },\n      dropzoneActive: {\n        borderColor: \"green\"\n      }\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageUploader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLmpzPzdlYzciXSwibmFtZXMiOlsiSW1hZ2VVcGxvYWRlciIsImhhbmRsZUNoYW5nZVN0YXR1cyIsInN0YXR1cyIsIm1ldGEiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZmlsZXMiLCJmIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsInVwbG9hZFVSTCIsIm1ldGhvZCIsImhlYWRlcnMiLCJDb250ZW50VHlwZSIsImJvZHkiLCJyZXN1bHQiLCJmaWxlTmFtZSIsImtleSIsInBhcmFtcyIsIkJ1Y2tldCIsIktleSIsIkV4cGlyZXMiLCJkcm9wem9uZSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJvcHpvbmVBY3RpdmUiLCJib3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3ZCLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBbUJDLE1BQW5CLEVBQThCO0FBQUEsUUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLFFBQXJCQyxNQUFxQixRQUFyQkEsTUFBcUI7QUFDdkRDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaLEVBQW9CQyxJQUFwQjtBQUNELEdBRkQ7O0FBR0EsTUFBTUksWUFBWTtBQUFBLGlXQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQyxlQURhLEdBQ1RELEtBQUssQ0FBQyxDQUFELENBREk7QUFFbkJILHFCQUFPLENBQUNDLEdBQVIsQ0FBWUcsQ0FBQyxDQUFDLE1BQUQsQ0FBYixFQUZtQixDQUduQjs7QUFIbUI7QUFBQSxxQkFJSUMsNENBQUssQ0FBQ0MsR0FBTix1RkFKSjs7QUFBQTtBQUliQyxzQkFKYTtBQVFuQlAscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJNLFFBQTFCLEVBUm1CLENBVW5CO0FBRUE7QUFDQTtBQUNBOztBQWRtQjtBQUFBLHFCQWVFQyxLQUFLLENBQUNELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxTQUFmLEVBQTBCO0FBQ2xEQyxzQkFBTSxFQUFFLEtBRDBDO0FBRWxEQyx1QkFBTyxFQUFFO0FBQ1BDLDZCQUFXLEVBQUU7QUFETixpQkFGeUM7QUFLbERDLG9CQUFJLEVBQUVWLENBQUMsQ0FBQyxNQUFEO0FBTDJDLGVBQTFCLENBZlA7O0FBQUE7QUFlYlcsb0JBZmE7QUFzQm5CZixxQkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QmMsTUFBeEI7QUFFTUMsc0JBeEJhLEdBd0JGVCxRQUFRLENBQUNFLElBQVQsQ0FBY1EsR0F4Qlo7QUEwQmJDLG9CQTFCYSxHQTBCSjtBQUNiQyxzQkFBTSxFQUFFLHVCQURLO0FBRWJDLG1CQUFHLEVBQUVKLFFBRlE7QUFHYkssdUJBQU8sRUFBRTtBQUhJLGVBMUJJLEVBZ0NuQjtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQXJDbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWm5CLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBd0NBLHNCQUNFLHFFQUFDLDhEQUFEO0FBQ0Usa0JBQWMsRUFBRU4sa0JBRGxCO0FBRUUsWUFBUSxFQUFFTSxZQUZaO0FBR0UsU0FBSyxNQUhQO0FBSUUsWUFBUSxFQUFFLENBSlo7QUFLRSxZQUFRLEVBQUUsS0FMWjtBQU1FLGFBQVMsRUFBRSxLQU5iO0FBT0UsZ0JBQVksRUFBQyxhQVBmO0FBUUUsVUFBTSxFQUFFO0FBQ05vQixjQUFRLEVBQUU7QUFBRUMsYUFBSyxFQUFFLEdBQVQ7QUFBY0MsY0FBTSxFQUFFO0FBQXRCLE9BREo7QUFFTkMsb0JBQWMsRUFBRTtBQUFFQyxtQkFBVyxFQUFFO0FBQWY7QUFGVjtBQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztLQTNEUS9CLGE7QUE2RE1BLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVhY3QtZHJvcHpvbmUtdXBsb2FkZXIvZGlzdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lLXVwbG9hZGVyXCI7XG5pbXBvcnQgUzMgZnJvbSBcIi4uL2xpYi9BV1NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZnVuY3Rpb24gSW1hZ2VVcGxvYWRlcigpIHtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3RhdHVzID0gKHsgbWV0YSwgcmVtb3ZlIH0sIHN0YXR1cykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXR1cywgbWV0YSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChmaWxlcykgPT4ge1xuICAgIGNvbnN0IGYgPSBmaWxlc1swXTtcbiAgICBjb25zb2xlLmxvZyhmW1wiZmlsZVwiXSk7XG4gICAgLy8gKiBHRVQgcmVxdWVzdDogcHJlc2lnbmVkIFVSTFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vMTFrMmJqMGU4ai5leGVjdXRlLWFwaS51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9kZWZhdWx0L2dldFByZXNpZ25lZEltYWdlVVJMYFxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuXG4gICAgLy8gKiBQVVQgcmVxdWVzdDogdXBsb2FkIGZpbGUgdG8gUzNcblxuICAgIC8vIGZvbGxvdyB5b3V0dWJlIGZvciBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVY0NXltQ1hCcFVNXG4gICAgLy8gbW92aWUgY2FsbCB0byBhcGkgYmFja2VuZC5cbiAgICAvLyB1c2UgdGhlIFMzIGNsaWVudFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHJlc3BvbnNlLmRhdGEudXBsb2FkVVJMLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIENvbnRlbnRUeXBlOiBcImltYWdlL2pwZWcsIGltYWdlL3BuZywgaW1hZ2UvaGVpYywgbW92L21wNFwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGZbXCJmaWxlXCJdLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0OiBcIiwgcmVzdWx0KTtcblxuICAgIGNvbnN0IGZpbGVOYW1lID0gcmVzcG9uc2UuZGF0YS5rZXk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBCdWNrZXQ6IFwiYXdzLXR1dG9yaWFsLWNvZGVkYW1uXCIsXG4gICAgICBLZXk6IGZpbGVOYW1lLFxuICAgICAgRXhwaXJlczogNjAsXG4gICAgfTtcblxuICAgIC8vICAgICBjb25zdCBzaWduZWRVUkwgPSBTMy5nZXRTaWduZWRVcmwoXCJnZXRPYmplY3RcIiwgcGFyYW1zKTtcblxuICAgIC8vICAgICByZXMuanNvbih7XG4gICAgLy8gICAgICAgc3RhdHVzOiBcIm9rXCIsXG4gICAgLy8gICAgICAgZGF0YTogc2lnbmVkVVJMLFxuICAgIC8vICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEcm9wem9uZVxuICAgICAgb25DaGFuZ2VTdGF0dXM9e2hhbmRsZUNoYW5nZVN0YXR1c31cbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICBoZWxsb1xuICAgICAgbWF4RmlsZXM9ezF9XG4gICAgICBtdWx0aXBsZT17ZmFsc2V9XG4gICAgICBjYW5DYW5jZWw9e2ZhbHNlfVxuICAgICAgaW5wdXRDb250ZW50PVwiQWRkIEEgUGhvdG9cIlxuICAgICAgc3R5bGVzPXt7XG4gICAgICAgIGRyb3B6b25lOiB7IHdpZHRoOiAyMDAsIGhlaWdodDogMTAgfSxcbiAgICAgICAgZHJvcHpvbmVBY3RpdmU6IHsgYm9yZGVyQ29sb3I6IFwiZ3JlZW5cIiB9LFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVVwbG9hZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImageUploader.js\n");

/***/ })

})