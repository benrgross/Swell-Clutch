webpackHotUpdate_N_E("pages/Swell",{

/***/ "./components/ImageUploader.js":
/*!*************************************!*\
  !*** ./components/ImageUploader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone-uploader/dist/styles.css */ \"./node_modules/react-dropzone-uploader/dist/styles.css\");\n/* harmony import */ var react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone-uploader */ \"./node_modules/react-dropzone-uploader/dist/react-dropzone-uploader.js\");\n/* harmony import */ var react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_AWS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/AWS */ \"./lib/AWS.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/bengross/Desktop/Swell Clutch/Swell-Clutch/components/ImageUploader.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\nvar ImageUploader = /*#__PURE__*/function () {\n  var _ref = Object(_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n    var handleChangeStatus, handleSubmit;\n    return _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            handleChangeStatus = function handleChangeStatus(_ref2, status) {\n              var meta = _ref2.meta,\n                  remove = _ref2.remove;\n              console.log(status, meta);\n            };\n\n            handleSubmit = /*#__PURE__*/function () {\n              var _ref3 = Object(_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(files) {\n                var _yield$axios$post, data;\n\n                return _Users_bengross_Desktop_Swell_Clutch_Swell_Clutch_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_6__[\"server\"], \"/api/getUploadImage\"), files);\n\n                      case 2:\n                        _yield$axios$post = _context.sent;\n                        data = _yield$axios$post.data;\n                        console.log(data); // // * GET request: presigned URL\n                        // const response = await axios.get(\n                        //   `https://11k2bj0e8j.execute-api.us-east-2.amazonaws.com/default/getPresignedImageURL`\n                        // );\n                        // console.log(\"Response: \", response);\n                        // // * PUT request: upload file to S3\n                        // // follow youtube for https://www.youtube.com/watch?v=V45ymCXBpUM\n                        // // movie call to api backend.\n                        // // use the S3 client\n                        // const result = await fetch(response.data.uploadURL, {\n                        //   method: \"PUT\",\n                        //   headers: {\n                        //     ContentType: \"image/jpeg, image/png, image/heic, mov/mp4\",\n                        //   },\n                        //   body: f[\"file\"],\n                        // });\n                        // console.log(\"Result: \", result);\n                        // const fileName = response.data.Key;\n                        // const params = {\n                        //   Bucket: \"swell-clutch\",\n                        //   Key: fileName,\n                        //   Expires: 7776000,\n                        // };\n                        // const signedURL = S3.getSignedUrl(\"getObject\", params);\n                        // console.log(\"url\", signedURL);\n\n                      case 5:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function handleSubmit(_x) {\n                return _ref3.apply(this, arguments);\n              };\n            }();\n\n            return _context2.abrupt(\"return\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              onChangeStatus: handleChangeStatus,\n              onSubmit: handleSubmit,\n              hello: true,\n              maxFiles: 1,\n              multiple: false,\n              canCancel: false,\n              inputContent: \"Add A Photo\",\n              styles: {\n                dropzone: {\n                  width: 200,\n                  height: 10\n                },\n                dropzoneActive: {\n                  borderColor: \"green\"\n                }\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 5\n            }, _this));\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function ImageUploader() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n_c = ImageUploader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageUploader);\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageUploader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLmpzPzdlYzciXSwibmFtZXMiOlsiSW1hZ2VVcGxvYWRlciIsImhhbmRsZUNoYW5nZVN0YXR1cyIsInN0YXR1cyIsIm1ldGEiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZmlsZXMiLCJheGlvcyIsInBvc3QiLCJzZXJ2ZXIiLCJkYXRhIiwiZHJvcHpvbmUiLCJ3aWR0aCIsImhlaWdodCIsImRyb3B6b25lQWN0aXZlIiwiYm9yZGVyQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsYUFBYTtBQUFBLDhWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQyw4QkFEYyxHQUNPLFNBQXJCQSxrQkFBcUIsUUFBbUJDLE1BQW5CLEVBQThCO0FBQUEsa0JBQTNCQyxJQUEyQixTQUEzQkEsSUFBMkI7QUFBQSxrQkFBckJDLE1BQXFCLFNBQXJCQSxNQUFxQjtBQUN2REMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaLEVBQW9CQyxJQUFwQjtBQUNELGFBSG1COztBQUlkSSx3QkFKYztBQUFBLDJXQUlDLGlCQUFPQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNJQyw0Q0FBSyxDQUFDQyxJQUFOLFdBQWNDLDhDQUFkLDBCQUEyQ0gsS0FBM0MsQ0FESjs7QUFBQTtBQUFBO0FBQ1hJLDRCQURXLHFCQUNYQSxJQURXO0FBRW5CUCwrQkFBTyxDQUFDQyxHQUFSLENBQVlNLElBQVosRUFGbUIsQ0FJbkI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBbkNtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpEOztBQUFBLDhCQUlkTCxZQUpjO0FBQUE7QUFBQTtBQUFBOztBQUFBLDJEQTJDbEIscUVBQUMsOERBQUQ7QUFDRSw0QkFBYyxFQUFFTixrQkFEbEI7QUFFRSxzQkFBUSxFQUFFTSxZQUZaO0FBR0UsbUJBQUssTUFIUDtBQUlFLHNCQUFRLEVBQUUsQ0FKWjtBQUtFLHNCQUFRLEVBQUUsS0FMWjtBQU1FLHVCQUFTLEVBQUUsS0FOYjtBQU9FLDBCQUFZLEVBQUMsYUFQZjtBQVFFLG9CQUFNLEVBQUU7QUFDTk0sd0JBQVEsRUFBRTtBQUFFQyx1QkFBSyxFQUFFLEdBQVQ7QUFBY0Msd0JBQU0sRUFBRTtBQUF0QixpQkFESjtBQUVOQyw4QkFBYyxFQUFFO0FBQUVDLDZCQUFXLEVBQUU7QUFBZjtBQUZWO0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzQ2tCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWJqQixhQUFhO0FBQUE7QUFBQTtBQUFBLEdBQW5COztLQUFNQSxhO0FBMkRTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlYWN0LWRyb3B6b25lLXVwbG9hZGVyL2Rpc3Qvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZS11cGxvYWRlclwiO1xuaW1wb3J0IFMzIGZyb20gXCIuLi9saWIvQVdTXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbmNvbnN0IEltYWdlVXBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN0YXR1cyA9ICh7IG1ldGEsIHJlbW92ZSB9LCBzdGF0dXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0dXMsIG1ldGEpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZmlsZXMpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7c2VydmVyfS9hcGkvZ2V0VXBsb2FkSW1hZ2VgLCBmaWxlcyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyAvLyAqIEdFVCByZXF1ZXN0OiBwcmVzaWduZWQgVVJMXG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgLy8gICBgaHR0cHM6Ly8xMWsyYmowZThqLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2RlZmF1bHQvZ2V0UHJlc2lnbmVkSW1hZ2VVUkxgXG4gICAgLy8gKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiUmVzcG9uc2U6IFwiLCByZXNwb25zZSk7XG5cbiAgICAvLyAvLyAqIFBVVCByZXF1ZXN0OiB1cGxvYWQgZmlsZSB0byBTM1xuXG4gICAgLy8gLy8gZm9sbG93IHlvdXR1YmUgZm9yIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VjQ1eW1DWEJwVU1cbiAgICAvLyAvLyBtb3ZpZSBjYWxsIHRvIGFwaSBiYWNrZW5kLlxuICAgIC8vIC8vIHVzZSB0aGUgUzMgY2xpZW50XG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2gocmVzcG9uc2UuZGF0YS51cGxvYWRVUkwsIHtcbiAgICAvLyAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgQ29udGVudFR5cGU6IFwiaW1hZ2UvanBlZywgaW1hZ2UvcG5nLCBpbWFnZS9oZWljLCBtb3YvbXA0XCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgYm9keTogZltcImZpbGVcIl0sXG4gICAgLy8gfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJSZXN1bHQ6IFwiLCByZXN1bHQpO1xuXG4gICAgLy8gY29uc3QgZmlsZU5hbWUgPSByZXNwb25zZS5kYXRhLktleTtcblxuICAgIC8vIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAvLyAgIEJ1Y2tldDogXCJzd2VsbC1jbHV0Y2hcIixcbiAgICAvLyAgIEtleTogZmlsZU5hbWUsXG4gICAgLy8gICBFeHBpcmVzOiA3Nzc2MDAwLFxuICAgIC8vIH07XG5cbiAgICAvLyBjb25zdCBzaWduZWRVUkwgPSBTMy5nZXRTaWduZWRVcmwoXCJnZXRPYmplY3RcIiwgcGFyYW1zKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwidXJsXCIsIHNpZ25lZFVSTCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RHJvcHpvbmVcbiAgICAgIG9uQ2hhbmdlU3RhdHVzPXtoYW5kbGVDaGFuZ2VTdGF0dXN9XG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgaGVsbG9cbiAgICAgIG1heEZpbGVzPXsxfVxuICAgICAgbXVsdGlwbGU9e2ZhbHNlfVxuICAgICAgY2FuQ2FuY2VsPXtmYWxzZX1cbiAgICAgIGlucHV0Q29udGVudD1cIkFkZCBBIFBob3RvXCJcbiAgICAgIHN0eWxlcz17e1xuICAgICAgICBkcm9wem9uZTogeyB3aWR0aDogMjAwLCBoZWlnaHQ6IDEwIH0sXG4gICAgICAgIGRyb3B6b25lQWN0aXZlOiB7IGJvcmRlckNvbG9yOiBcImdyZWVuXCIgfSxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVXBsb2FkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImageUploader.js\n");

/***/ })

})