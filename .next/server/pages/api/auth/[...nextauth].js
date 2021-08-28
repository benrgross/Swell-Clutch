/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\nconst options = {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Email({\n    server: {\n      host: process.env.EMAIL_SERVER_HOST,\n      port: process.env.EMAIL_SERVER_PORT,\n      auth: {\n        user: process.env.EMAIL_SERVER_USER,\n        pass: process.env.EMAIL_SERVER_PASSWORD\n      }\n    },\n    from: process.env.EMAIL_FROM\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Auth0({\n    clientId: process.env.AUTH0_CLIENT_ID,\n    clientSecret: process.env.AUTH0_CLIENT_SECRET,\n    domain: process.env.AUTH0_DOMAIN,\n    // redirectUri:\n    //   process.env.NEXT_PUBLIC_REDIRECT_URI ||\n    //   \"http://localhost:4000/api/auth/callback/0auth\",\n    // postLogoutRedirectUri:\n    //   process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI ||\n    //   \"http://localhost:3000/\",\n    session: {\n      // The secret used to encrypt the cookie.\n      cookieSecret: process.env.COOKIE_SECRET,\n      // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.\n      cookieLifetime: 0,\n      // (Optional) Store the id_token in the session. Defaults to false.\n      storeIdToken: false,\n      // (Optional) Store the access_token in the session. Defaults to false.\n      storeAccessToken: false,\n      // (Optional) Store the refresh_token in the session. Defaults to false.\n      storeRefreshToken: false\n    }\n  })],\n  database: {\n    type: \"postgres\",\n    database: \"surfclutch\",\n    synchronize: true\n  },\n  events: {\n    async signIn(message) {\n      /* on successful sign in */\n    },\n\n    async signOut(message) {\n      /* on signout */\n    },\n\n    async createUser(message) {\n      /* user created */\n    },\n\n    async updateUser(message) {\n      /* user updated - e.g. their email was verified */\n    },\n\n    async linkAccount(message) {\n      /* account (e.g. Twitter) linked to a user */\n    },\n\n    async session(message) {\n      /* session is active */\n    },\n\n    async error(message) {\n      /* error in authentication flow */\n    }\n\n  },\n  adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(prisma),\n  callbacks: {\n    session: async (session, user) => {\n      session.id = user.id;\n      return Promise.resolve(session);\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2VsbC1jbHVjdGgvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50Iiwib3B0aW9ucyIsInByb3ZpZGVycyIsIlByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJzZXJ2ZXIiLCJob3N0IiwiRU1BSUxfU0VSVkVSX0hPU1QiLCJwb3J0IiwiRU1BSUxfU0VSVkVSX1BPUlQiLCJhdXRoIiwidXNlciIsIkVNQUlMX1NFUlZFUl9VU0VSIiwicGFzcyIsIkVNQUlMX1NFUlZFUl9QQVNTV09SRCIsImZyb20iLCJFTUFJTF9GUk9NIiwiQVVUSDBfQ0xJRU5UX0lEIiwiQVVUSDBfQ0xJRU5UX1NFQ1JFVCIsImRvbWFpbiIsIkFVVEgwX0RPTUFJTiIsInNlc3Npb24iLCJjb29raWVTZWNyZXQiLCJDT09LSUVfU0VDUkVUIiwiY29va2llTGlmZXRpbWUiLCJzdG9yZUlkVG9rZW4iLCJzdG9yZUFjY2Vzc1Rva2VuIiwic3RvcmVSZWZyZXNoVG9rZW4iLCJkYXRhYmFzZSIsInR5cGUiLCJzeW5jaHJvbml6ZSIsImV2ZW50cyIsInNpZ25JbiIsIm1lc3NhZ2UiLCJzaWduT3V0IiwiY3JlYXRlVXNlciIsInVwZGF0ZVVzZXIiLCJsaW5rQWNjb3VudCIsImVycm9yIiwiYWRhcHRlciIsIlByaXNtYUFkYXB0ZXIiLCJjYWxsYmFja3MiLCJpZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVxIiwicmVzIiwiTmV4dEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLElBQUlDLHdEQUFKLEVBQWY7QUFFQSxNQUFNQyxPQUFPLEdBQUc7QUFDZEMsV0FBUyxFQUFFLENBQ1RDLGlFQUFBLENBQWlCO0FBQ2ZDLFlBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBRFA7QUFFZkMsZ0JBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRlgsR0FBakIsQ0FEUyxFQUtUTixnRUFBQSxDQUFnQjtBQUNkTyxVQUFNLEVBQUU7QUFDTkMsVUFBSSxFQUFFTixPQUFPLENBQUNDLEdBQVIsQ0FBWU0saUJBRFo7QUFFTkMsVUFBSSxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVEsaUJBRlo7QUFHTkMsVUFBSSxFQUFFO0FBQ0pDLFlBQUksRUFBRVgsT0FBTyxDQUFDQyxHQUFSLENBQVlXLGlCQURkO0FBRUpDLFlBQUksRUFBRWIsT0FBTyxDQUFDQyxHQUFSLENBQVlhO0FBRmQ7QUFIQSxLQURNO0FBU2RDLFFBQUksRUFBRWYsT0FBTyxDQUFDQyxHQUFSLENBQVllO0FBVEosR0FBaEIsQ0FMUyxFQWdCVGxCLGdFQUFBLENBQWdCO0FBQ2RDLFlBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixlQURSO0FBRWRkLGdCQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZaUIsbUJBRlo7QUFHZEMsVUFBTSxFQUFFbkIsT0FBTyxDQUFDQyxHQUFSLENBQVltQixZQUhOO0FBS2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFdBQU8sRUFBRTtBQUNQO0FBQ0FDLGtCQUFZLEVBQUV0QixPQUFPLENBQUNDLEdBQVIsQ0FBWXNCLGFBRm5CO0FBR1A7QUFDQUMsb0JBQWMsRUFBRSxDQUpUO0FBS1A7QUFDQUMsa0JBQVksRUFBRSxLQU5QO0FBT1A7QUFDQUMsc0JBQWdCLEVBQUUsS0FSWDtBQVNQO0FBQ0FDLHVCQUFpQixFQUFFO0FBVlo7QUFYSyxHQUFoQixDQWhCUyxDQURHO0FBMENkQyxVQUFRLEVBQUU7QUFDUkMsUUFBSSxFQUFFLFVBREU7QUFFUkQsWUFBUSxFQUFFLFlBRkY7QUFHUkUsZUFBVyxFQUFFO0FBSEwsR0ExQ0k7QUFnRGRDLFFBQU0sRUFBRTtBQUNOLFVBQU1DLE1BQU4sQ0FBYUMsT0FBYixFQUFzQjtBQUNwQjtBQUNELEtBSEs7O0FBSU4sVUFBTUMsT0FBTixDQUFjRCxPQUFkLEVBQXVCO0FBQ3JCO0FBQ0QsS0FOSzs7QUFPTixVQUFNRSxVQUFOLENBQWlCRixPQUFqQixFQUEwQjtBQUN4QjtBQUNELEtBVEs7O0FBVU4sVUFBTUcsVUFBTixDQUFpQkgsT0FBakIsRUFBMEI7QUFDeEI7QUFDRCxLQVpLOztBQWFOLFVBQU1JLFdBQU4sQ0FBa0JKLE9BQWxCLEVBQTJCO0FBQ3pCO0FBQ0QsS0FmSzs7QUFnQk4sVUFBTVosT0FBTixDQUFjWSxPQUFkLEVBQXVCO0FBQ3JCO0FBQ0QsS0FsQks7O0FBbUJOLFVBQU1LLEtBQU4sQ0FBWUwsT0FBWixFQUFxQjtBQUNuQjtBQUNEOztBQXJCSyxHQWhETTtBQXVFZE0sU0FBTyxFQUFFQyx3RUFBYSxDQUFDOUMsTUFBRCxDQXZFUjtBQXdFZCtDLFdBQVMsRUFBRTtBQUNUcEIsV0FBTyxFQUFFLE9BQU9BLE9BQVAsRUFBZ0JWLElBQWhCLEtBQXlCO0FBQ2hDVSxhQUFPLENBQUNxQixFQUFSLEdBQWEvQixJQUFJLENBQUMrQixFQUFsQjtBQUNBLGFBQU9DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnZCLE9BQWhCLENBQVA7QUFDRDtBQUpRO0FBeEVHLENBQWhCO0FBZ0ZBLCtEQUFlLENBQUN3QixHQUFELEVBQU1DLEdBQU4sS0FBY0MsZ0RBQVEsQ0FBQ0YsR0FBRCxFQUFNQyxHQUFOLEVBQVdsRCxPQUFYLENBQXJDIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBQcm92aWRlcnMuRW1haWwoe1xuICAgICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9IT1NULFxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUE9SVCxcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9VU0VSLFxuICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9QQVNTV09SRCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5BdXRoMCh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVULFxuICAgICAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXG5cbiAgICAgIC8vIHJlZGlyZWN0VXJpOlxuICAgICAgLy8gICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRURJUkVDVF9VUkkgfHxcbiAgICAgIC8vICAgXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2F1dGgvY2FsbGJhY2svMGF1dGhcIixcbiAgICAgIC8vIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTpcbiAgICAgIC8vICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJIHx8XG4gICAgICAvLyAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiLFxuICAgICAgc2Vzc2lvbjoge1xuICAgICAgICAvLyBUaGUgc2VjcmV0IHVzZWQgdG8gZW5jcnlwdCB0aGUgY29va2llLlxuICAgICAgICBjb29raWVTZWNyZXQ6IHByb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVQsXG4gICAgICAgIC8vIFRoZSBjb29raWUgbGlmZXRpbWUgKGV4cGlyYXRpb24pIGluIHNlY29uZHMuIFNldCB0byA4IGhvdXJzIGJ5IGRlZmF1bHQuXG4gICAgICAgIGNvb2tpZUxpZmV0aW1lOiAwLFxuICAgICAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSBpZF90b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgIHN0b3JlSWRUb2tlbjogZmFsc2UsXG4gICAgICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIGFjY2Vzc190b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgIHN0b3JlQWNjZXNzVG9rZW46IGZhbHNlLFxuICAgICAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSByZWZyZXNoX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgc3RvcmVSZWZyZXNoVG9rZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGF0YWJhc2U6IHtcbiAgICB0eXBlOiBcInBvc3RncmVzXCIsXG4gICAgZGF0YWJhc2U6IFwic3VyZmNsdXRjaFwiLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICB9LFxuXG4gIGV2ZW50czoge1xuICAgIGFzeW5jIHNpZ25JbihtZXNzYWdlKSB7XG4gICAgICAvKiBvbiBzdWNjZXNzZnVsIHNpZ24gaW4gKi9cbiAgICB9LFxuICAgIGFzeW5jIHNpZ25PdXQobWVzc2FnZSkge1xuICAgICAgLyogb24gc2lnbm91dCAqL1xuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlVXNlcihtZXNzYWdlKSB7XG4gICAgICAvKiB1c2VyIGNyZWF0ZWQgKi9cbiAgICB9LFxuICAgIGFzeW5jIHVwZGF0ZVVzZXIobWVzc2FnZSkge1xuICAgICAgLyogdXNlciB1cGRhdGVkIC0gZS5nLiB0aGVpciBlbWFpbCB3YXMgdmVyaWZpZWQgKi9cbiAgICB9LFxuICAgIGFzeW5jIGxpbmtBY2NvdW50KG1lc3NhZ2UpIHtcbiAgICAgIC8qIGFjY291bnQgKGUuZy4gVHdpdHRlcikgbGlua2VkIHRvIGEgdXNlciAqL1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbihtZXNzYWdlKSB7XG4gICAgICAvKiBzZXNzaW9uIGlzIGFjdGl2ZSAqL1xuICAgIH0sXG4gICAgYXN5bmMgZXJyb3IobWVzc2FnZSkge1xuICAgICAgLyogZXJyb3IgaW4gYXV0aGVudGljYXRpb24gZmxvdyAqL1xuICAgIH0sXG4gIH0sXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogYXN5bmMgKHNlc3Npb24sIHVzZXIpID0+IHtcbiAgICAgIHNlc3Npb24uaWQgPSB1c2VyLmlkO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKTtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@next-auth/prisma-adapter");;

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();