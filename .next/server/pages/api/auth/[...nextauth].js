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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"server\": () => (/* binding */ server)\n/* harmony export */ });\nconst dev = true;\nconst server = dev ? \"http://localhost:4000\" : \"https://swell-clutch.vercel.app\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLEdBQUcsT0FBVDtBQUVPLE1BQU1DLE1BQU0sR0FBR0QsR0FBRyxHQUNyQix1QkFEcUIsR0FFckIsaUNBRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2VsbC1jbHVjdGgvLi9jb25maWcvaW5kZXguanM/YWNlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBkZXZcbiAgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiXG4gIDogXCJodHRwczovL3N3ZWxsLWNsdXRjaC52ZXJjZWwuYXBwXCI7XG4iXSwibmFtZXMiOlsiZGV2Iiwic2VydmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ \"./config/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);\n\n // import prisma from \"../../../lib/prisma\";\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_4__.PrismaClient();\nconst options = {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Email({\n    server: {\n      host: process.env.EMAIL_SERVER_HOST,\n      port: process.env.EMAIL_SERVER_PORT,\n      auth: {\n        user: process.env.EMAIL_SERVER_USER,\n        pass: process.env.EMAIL_SERVER_PASSWORD\n      }\n    },\n    from: process.env.EMAIL_FROM\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Auth0({\n    clientId: process.env.AUTH0_CLIENT_ID,\n    clientSecret: process.env.AUTH0_CLIENT_SECRET,\n    domain: process.env.AUTH0_DOMAIN,\n    scope: \"openid profile\",\n    redirectUri: `${_config__WEBPACK_IMPORTED_MODULE_3__.server}/api/auth/callback/auth0`,\n    postLogoutRedirectUri: _config__WEBPACK_IMPORTED_MODULE_3__.server,\n    session: {\n      // The secret used to encrypt the cookie.\n      cookieSecret: process.env.COOKIE_SECRET,\n      // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.\n      cookieLifetime: 0,\n      // (Optional) Store the id_token in the session. Defaults to false.\n      storeIdToken: false,\n      // (Optional) Store the access_token in the session. Defaults to false.\n      storeAccessToken: false,\n      // (Optional) Store the refresh_token in the session. Defaults to false.\n      storeRefreshToken: false\n    }\n  })],\n  database: {\n    type: \"postgres\",\n    database: \"surfclutch\",\n    // synchronize: true,\n    debug: true\n  },\n  options: {\n    callback: {\n      signIn(user, account, profile) {\n        user.name = slug(user.email.slice(0, user.email.indexOf(\"@\"))); // or whatever else\n\n        return true;\n      }\n\n    }\n  },\n  events: {\n    async signIn(message) {\n      /* on successful sign in */\n    },\n\n    async signOut(message) {\n      /* on signout */\n    },\n\n    async createUser(message) {\n      /* user created */\n    },\n\n    async updateUser(message) {\n      /* user updated - e.g. their email was verified */\n    },\n\n    async linkAccount(message) {\n      /* account (e.g. Twitter) linked to a user */\n    },\n\n    async session(message) {\n      /* session is active */\n    },\n\n    async error(message) {\n      /* error in authentication flow */\n    }\n\n  },\n  adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)([prisma]),\n  callbacks: {\n    session: async (session, user) => {\n      session.id = user.id;\n      return Promise.resolve(session);\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEwQjtBQUN4QjtBQUNELEtBWks7O0FBYU4sVUFBTUksV0FBTixDQUFrQkosT0FBbEIsRUFBMkI7QUFDekI7QUFDRCxLQWZLOztBQWdCTixVQUFNcEIsT0FBTixDQUFjb0IsT0FBZCxFQUF1QjtBQUNyQjtBQUNELEtBbEJLOztBQW1CTixVQUFNSyxLQUFOLENBQVlMLE9BQVosRUFBcUI7QUFDbkI7QUFDRDs7QUFyQkssR0F2RE07QUE4RWRNLEVBQUFBLE9BQU8sRUFBRTNELHdFQUFhLENBQUMsQ0FBQ0csTUFBRCxDQUFELENBOUVSO0FBK0VkeUQsRUFBQUEsU0FBUyxFQUFFO0FBQ1QzQixJQUFBQSxPQUFPLEVBQUUsT0FBT0EsT0FBUCxFQUFnQmQsSUFBaEIsS0FBeUI7QUFDaENjLE1BQUFBLE9BQU8sQ0FBQzRCLEVBQVIsR0FBYTFDLElBQUksQ0FBQzBDLEVBQWxCO0FBQ0EsYUFBT0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCOUIsT0FBaEIsQ0FBUDtBQUNEO0FBSlE7QUEvRUcsQ0FBaEI7QUF1RkEsaUVBQWUsQ0FBQytCLEdBQUQsRUFBTUMsR0FBTixLQUFjbkUsZ0RBQVEsQ0FBQ2tFLEdBQUQsRUFBTUMsR0FBTixFQUFXN0QsT0FBWCxDQUFyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N3ZWxsLWNsdWN0aC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/OTkwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuLy8gaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBzZXJ2ZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBQcm92aWRlcnMuR2l0SHViKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSksXG4gICAgUHJvdmlkZXJzLkVtYWlsKHtcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfSE9TVCxcbiAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1BPUlQsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfVVNFUixcbiAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUEFTU1dPUkQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcbiAgICB9KSxcbiAgICBQcm92aWRlcnMuQXV0aDAoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOLFxuICAgICAgc2NvcGU6IFwib3BlbmlkIHByb2ZpbGVcIixcbiAgICAgIHJlZGlyZWN0VXJpOiBgJHtzZXJ2ZXJ9L2FwaS9hdXRoL2NhbGxiYWNrL2F1dGgwYCxcbiAgICAgIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogc2VydmVyLFxuICAgICAgc2Vzc2lvbjoge1xuICAgICAgICAvLyBUaGUgc2VjcmV0IHVzZWQgdG8gZW5jcnlwdCB0aGUgY29va2llLlxuICAgICAgICBjb29raWVTZWNyZXQ6IHByb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVQsXG4gICAgICAgIC8vIFRoZSBjb29raWUgbGlmZXRpbWUgKGV4cGlyYXRpb24pIGluIHNlY29uZHMuIFNldCB0byA4IGhvdXJzIGJ5IGRlZmF1bHQuXG4gICAgICAgIGNvb2tpZUxpZmV0aW1lOiAwLFxuICAgICAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSBpZF90b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgIHN0b3JlSWRUb2tlbjogZmFsc2UsXG4gICAgICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIGFjY2Vzc190b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgIHN0b3JlQWNjZXNzVG9rZW46IGZhbHNlLFxuICAgICAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSByZWZyZXNoX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgc3RvcmVSZWZyZXNoVG9rZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGF0YWJhc2U6IHtcbiAgICB0eXBlOiBcInBvc3RncmVzXCIsXG4gICAgZGF0YWJhc2U6IFwic3VyZmNsdXRjaFwiLFxuICAgIC8vIHN5bmNocm9uaXplOiB0cnVlLFxuICAgIGRlYnVnOiB0cnVlLFxuICB9LFxuXG4gIG9wdGlvbnM6IHtcbiAgICBjYWxsYmFjazoge1xuICAgICAgc2lnbkluKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpIHtcbiAgICAgICAgdXNlci5uYW1lID0gc2x1Zyh1c2VyLmVtYWlsLnNsaWNlKDAsIHVzZXIuZW1haWwuaW5kZXhPZihcIkBcIikpKTsgLy8gb3Igd2hhdGV2ZXIgZWxzZVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGV2ZW50czoge1xuICAgIGFzeW5jIHNpZ25JbihtZXNzYWdlKSB7XG4gICAgICAvKiBvbiBzdWNjZXNzZnVsIHNpZ24gaW4gKi9cbiAgICB9LFxuICAgIGFzeW5jIHNpZ25PdXQobWVzc2FnZSkge1xuICAgICAgLyogb24gc2lnbm91dCAqL1xuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlVXNlcihtZXNzYWdlKSB7XG4gICAgICAvKiB1c2VyIGNyZWF0ZWQgKi9cbiAgICB9LFxuICAgIGFzeW5jIHVwZGF0ZVVzZXIobWVzc2FnZSkge1xuICAgICAgLyogdXNlciB1cGRhdGVkIC0gZS5nLiB0aGVpciBlbWFpbCB3YXMgdmVyaWZpZWQgKi9cbiAgICB9LFxuICAgIGFzeW5jIGxpbmtBY2NvdW50KG1lc3NhZ2UpIHtcbiAgICAgIC8qIGFjY291bnQgKGUuZy4gVHdpdHRlcikgbGlua2VkIHRvIGEgdXNlciAqL1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbihtZXNzYWdlKSB7XG4gICAgICAvKiBzZXNzaW9uIGlzIGFjdGl2ZSAqL1xuICAgIH0sXG4gICAgYXN5bmMgZXJyb3IobWVzc2FnZSkge1xuICAgICAgLyogZXJyb3IgaW4gYXV0aGVudGljYXRpb24gZmxvdyAqL1xuICAgIH0sXG4gIH0sXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoW3ByaXNtYV0pLFxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiBhc3luYyAoc2Vzc2lvbiwgdXNlcikgPT4ge1xuICAgICAgc2Vzc2lvbi5pZCA9IHVzZXIuaWQ7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlc3Npb24pO1xuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByb3ZpZGVycyIsIlByaXNtYUFkYXB0ZXIiLCJzZXJ2ZXIiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJvcHRpb25zIiwicHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsIkVtYWlsIiwiaG9zdCIsIkVNQUlMX1NFUlZFUl9IT1NUIiwicG9ydCIsIkVNQUlMX1NFUlZFUl9QT1JUIiwiYXV0aCIsInVzZXIiLCJFTUFJTF9TRVJWRVJfVVNFUiIsInBhc3MiLCJFTUFJTF9TRVJWRVJfUEFTU1dPUkQiLCJmcm9tIiwiRU1BSUxfRlJPTSIsIkF1dGgwIiwiQVVUSDBfQ0xJRU5UX0lEIiwiQVVUSDBfQ0xJRU5UX1NFQ1JFVCIsImRvbWFpbiIsIkFVVEgwX0RPTUFJTiIsInNjb3BlIiwicmVkaXJlY3RVcmkiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiQ09PS0lFX1NFQ1JFVCIsImNvb2tpZUxpZmV0aW1lIiwic3RvcmVJZFRva2VuIiwic3RvcmVBY2Nlc3NUb2tlbiIsInN0b3JlUmVmcmVzaFRva2VuIiwiZGF0YWJhc2UiLCJ0eXBlIiwiZGVidWciLCJjYWxsYmFjayIsInNpZ25JbiIsImFjY291bnQiLCJwcm9maWxlIiwibmFtZSIsInNsdWciLCJlbWFpbCIsInNsaWNlIiwiaW5kZXhPZiIsImV2ZW50cyIsIm1lc3NhZ2UiLCJzaWduT3V0IiwiY3JlYXRlVXNlciIsInVwZGF0ZVVzZXIiLCJsaW5rQWNjb3VudCIsImVycm9yIiwiYWRhcHRlciIsImNhbGxiYWNrcyIsImlkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();