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

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma = _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBTSxHQUFHRCx3REFBYjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNFLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3dlbGwtY2x1Y3RoLy4vbGliL3ByaXNtYS5qcz9jNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgcHJpc21hID0gUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ \"./config/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst options = {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Email({\n    server: {\n      host: process.env.EMAIL_SERVER_HOST,\n      port: process.env.EMAIL_SERVER_PORT,\n      auth: {\n        user: process.env.EMAIL_SERVER_USER,\n        pass: process.env.EMAIL_SERVER_PASSWORD\n      }\n    },\n    from: process.env.EMAIL_FROM\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Auth0({\n    clientId: process.env.AUTH0_CLIENT_ID,\n    clientSecret: process.env.AUTH0_CLIENT_SECRET,\n    domain: process.env.AUTH0_DOMAIN,\n    scope: \"openid profile\",\n    redirectUri: `${_config__WEBPACK_IMPORTED_MODULE_4__.server}/api/auth/callback/auth0`,\n    postLogoutRedirectUri: _config__WEBPACK_IMPORTED_MODULE_4__.server,\n    session: {\n      // The secret used to encrypt the cookie.\n      cookieSecret: process.env.COOKIE_SECRET,\n      // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.\n      cookieLifetime: 0,\n      // (Optional) Store the id_token in the session. Defaults to false.\n      storeIdToken: false,\n      // (Optional) Store the access_token in the session. Defaults to false.\n      storeAccessToken: false,\n      // (Optional) Store the refresh_token in the session. Defaults to false.\n      storeRefreshToken: false\n    }\n  })],\n  database: {\n    type: \"postgres\",\n    database: \"surfclutch\",\n    synchronize: true\n  },\n  events: {\n    async signIn(message) {\n      /* on successful sign in */\n    },\n\n    async signOut(message) {\n      /* on signout */\n    },\n\n    async createUser(message) {\n      /* user created */\n    },\n\n    async updateUser(message) {\n      /* user updated - e.g. their email was verified */\n    },\n\n    async linkAccount(message) {\n      /* account (e.g. Twitter) linked to a user */\n    },\n\n    async session(message) {\n      /* session is active */\n    },\n\n    async error(message) {\n      /* error in authentication flow */\n    }\n\n  },\n  adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__.default),\n  callbacks: {\n    session: async (session, user) => {\n      session.id = user.id;\n      return Promise.resolve(session);\n    }\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDa0MsRUFBbEI7QUFDQSxhQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J0QixPQUFoQixDQUFQO0FBQ0Q7QUFKUTtBQXBFRyxDQUFoQjtBQTRFQSxpRUFBZSxDQUFDdUIsR0FBRCxFQUFNQyxHQUFOLEtBQWMzRCxnREFBUSxDQUFDMEQsR0FBRCxFQUFNQyxHQUFOLEVBQVdyRCxPQUFYLENBQXJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3dlbGwtY2x1Y3RoLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz85OTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCB7IHNlcnZlciB9IGZyb20gXCIuLi8uLi8uLi9jb25maWdcIjtcblxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBQcm92aWRlcnMuRW1haWwoe1xuICAgICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9IT1NULFxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUE9SVCxcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9VU0VSLFxuICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9QQVNTV09SRCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5BdXRoMCh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVULFxuICAgICAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXG4gICAgICBzY29wZTogXCJvcGVuaWQgcHJvZmlsZVwiLFxuICAgICAgcmVkaXJlY3RVcmk6IGAke3NlcnZlcn0vYXBpL2F1dGgvY2FsbGJhY2svYXV0aDBgLFxuICAgICAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiBzZXJ2ZXIsXG4gICAgICBzZXNzaW9uOiB7XG4gICAgICAgIC8vIFRoZSBzZWNyZXQgdXNlZCB0byBlbmNyeXB0IHRoZSBjb29raWUuXG4gICAgICAgIGNvb2tpZVNlY3JldDogcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVCxcbiAgICAgICAgLy8gVGhlIGNvb2tpZSBsaWZldGltZSAoZXhwaXJhdGlvbikgaW4gc2Vjb25kcy4gU2V0IHRvIDggaG91cnMgYnkgZGVmYXVsdC5cbiAgICAgICAgY29va2llTGlmZXRpbWU6IDAsXG4gICAgICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIGlkX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgc3RvcmVJZFRva2VuOiBmYWxzZSxcbiAgICAgICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgYWNjZXNzX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgc3RvcmVBY2Nlc3NUb2tlbjogZmFsc2UsXG4gICAgICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIHJlZnJlc2hfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICBzdG9yZVJlZnJlc2hUb2tlbjogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkYXRhYmFzZToge1xuICAgIHR5cGU6IFwicG9zdGdyZXNcIixcbiAgICBkYXRhYmFzZTogXCJzdXJmY2x1dGNoXCIsXG4gICAgc3luY2hyb25pemU6IHRydWUsXG4gIH0sXG5cbiAgZXZlbnRzOiB7XG4gICAgYXN5bmMgc2lnbkluKG1lc3NhZ2UpIHtcbiAgICAgIC8qIG9uIHN1Y2Nlc3NmdWwgc2lnbiBpbiAqL1xuICAgIH0sXG4gICAgYXN5bmMgc2lnbk91dChtZXNzYWdlKSB7XG4gICAgICAvKiBvbiBzaWdub3V0ICovXG4gICAgfSxcbiAgICBhc3luYyBjcmVhdGVVc2VyKG1lc3NhZ2UpIHtcbiAgICAgIC8qIHVzZXIgY3JlYXRlZCAqL1xuICAgIH0sXG4gICAgYXN5bmMgdXBkYXRlVXNlcihtZXNzYWdlKSB7XG4gICAgICAvKiB1c2VyIHVwZGF0ZWQgLSBlLmcuIHRoZWlyIGVtYWlsIHdhcyB2ZXJpZmllZCAqL1xuICAgIH0sXG4gICAgYXN5bmMgbGlua0FjY291bnQobWVzc2FnZSkge1xuICAgICAgLyogYWNjb3VudCAoZS5nLiBUd2l0dGVyKSBsaW5rZWQgdG8gYSB1c2VyICovXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKG1lc3NhZ2UpIHtcbiAgICAgIC8qIHNlc3Npb24gaXMgYWN0aXZlICovXG4gICAgfSxcbiAgICBhc3luYyBlcnJvcihtZXNzYWdlKSB7XG4gICAgICAvKiBlcnJvciBpbiBhdXRoZW50aWNhdGlvbiBmbG93ICovXG4gICAgfSxcbiAgfSxcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiBhc3luYyAoc2Vzc2lvbiwgdXNlcikgPT4ge1xuICAgICAgc2Vzc2lvbi5pZCA9IHVzZXIuaWQ7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlc3Npb24pO1xuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IE5leHRBdXRoKHJlcSwgcmVzLCBvcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByb3ZpZGVycyIsInByaXNtYSIsIlByaXNtYUFkYXB0ZXIiLCJzZXJ2ZXIiLCJQcmlzbWFDbGllbnQiLCJvcHRpb25zIiwicHJvdmlkZXJzIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsIkVtYWlsIiwiaG9zdCIsIkVNQUlMX1NFUlZFUl9IT1NUIiwicG9ydCIsIkVNQUlMX1NFUlZFUl9QT1JUIiwiYXV0aCIsInVzZXIiLCJFTUFJTF9TRVJWRVJfVVNFUiIsInBhc3MiLCJFTUFJTF9TRVJWRVJfUEFTU1dPUkQiLCJmcm9tIiwiRU1BSUxfRlJPTSIsIkF1dGgwIiwiQVVUSDBfQ0xJRU5UX0lEIiwiQVVUSDBfQ0xJRU5UX1NFQ1JFVCIsImRvbWFpbiIsIkFVVEgwX0RPTUFJTiIsInNjb3BlIiwicmVkaXJlY3RVcmkiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiQ09PS0lFX1NFQ1JFVCIsImNvb2tpZUxpZmV0aW1lIiwic3RvcmVJZFRva2VuIiwic3RvcmVBY2Nlc3NUb2tlbiIsInN0b3JlUmVmcmVzaFRva2VuIiwiZGF0YWJhc2UiLCJ0eXBlIiwic3luY2hyb25pemUiLCJldmVudHMiLCJzaWduSW4iLCJtZXNzYWdlIiwic2lnbk91dCIsImNyZWF0ZVVzZXIiLCJ1cGRhdGVVc2VyIiwibGlua0FjY291bnQiLCJlcnJvciIsImFkYXB0ZXIiLCJjYWxsYmFja3MiLCJpZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVxIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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