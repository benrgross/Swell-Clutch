module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma = _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"];\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcHJpc21hLmpzP2M1NjUiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwiZ2xvYmFsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsMkRBQWI7O0FBRUEsV0FBMkMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRixNQUFaLEVBQW9CO0FBQ2xCRSxVQUFNLENBQUNGLE1BQVAsR0FBZ0IsSUFBSUMsMkRBQUosRUFBaEI7QUFDRDs7QUFDREQsUUFBTSxHQUFHRSxNQUFNLENBQUNGLE1BQWhCO0FBQ0Q7O0FBRWNBLHFFQUFmIiwiZmlsZSI6Ii4vbGliL3ByaXNtYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5sZXQgcHJpc21hID0gUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst options = {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Email({\n    server: {\n      host: process.env.EMAIL_SERVER_HOST,\n      port: process.env.EMAIL_SERVER_PORT,\n      auth: {\n        user: process.env.EMAIL_SERVER_USER,\n        pass: process.env.EMAIL_SERVER_PASSWORD\n      }\n    },\n    from: process.env.EMAIL_FROM\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Auth0({\n    clientId: process.env.AUTH0_CLIENT_ID,\n    clientSecret: process.env.AUTH0_CLIENT_SECRET,\n    domain: process.env.AUTH0_DOMAIN,\n    // redirectUri:\n    //   process.env.NEXT_PUBLIC_REDIRECT_URI ||\n    //   \"http://localhost:4000/api/auth/callback/0auth\",\n    // postLogoutRedirectUri:\n    //   process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI ||\n    //   \"http://localhost:3000/\",\n    session: {\n      // The secret used to encrypt the cookie.\n      cookieSecret: process.env.COOKIE_SECRET,\n      // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.\n      cookieLifetime: 0,\n      // (Optional) Store the id_token in the session. Defaults to false.\n      storeIdToken: false,\n      // (Optional) Store the access_token in the session. Defaults to false.\n      storeAccessToken: false,\n      // (Optional) Store the refresh_token in the session. Defaults to false.\n      storeRefreshToken: false\n    }\n  })],\n  database: {\n    type: \"postgres\",\n    database: \"surfclutch\",\n    synchronize: true\n  },\n  events: {\n    async signIn(message) {\n      /* on successful sign in */\n    },\n\n    async signOut(message) {\n      /* on signout */\n    },\n\n    async createUser(message) {\n      /* user created */\n    },\n\n    async updateUser(message) {\n      /* user updated - e.g. their email was verified */\n    },\n\n    async linkAccount(message) {\n      /* account (e.g. Twitter) linked to a user */\n    },\n\n    async session(message) {\n      /* session is active */\n    },\n\n    async error(message) {\n      /* error in authentication flow */\n    }\n\n  },\n  adapter: Object(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__[\"PrismaAdapter\"])(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n  callbacks: {\n    session: async (session, user) => {\n      session.id = user.id;\n      return Promise.resolve(session);\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsib3B0aW9ucyIsInByb3ZpZGVycyIsIlByb3ZpZGVycyIsIkdpdEh1YiIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJFbWFpbCIsInNlcnZlciIsImhvc3QiLCJFTUFJTF9TRVJWRVJfSE9TVCIsInBvcnQiLCJFTUFJTF9TRVJWRVJfUE9SVCIsImF1dGgiLCJ1c2VyIiwiRU1BSUxfU0VSVkVSX1VTRVIiLCJwYXNzIiwiRU1BSUxfU0VSVkVSX1BBU1NXT1JEIiwiZnJvbSIsIkVNQUlMX0ZST00iLCJBdXRoMCIsIkFVVEgwX0NMSUVOVF9JRCIsIkFVVEgwX0NMSUVOVF9TRUNSRVQiLCJkb21haW4iLCJBVVRIMF9ET01BSU4iLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiQ09PS0lFX1NFQ1JFVCIsImNvb2tpZUxpZmV0aW1lIiwic3RvcmVJZFRva2VuIiwic3RvcmVBY2Nlc3NUb2tlbiIsInN0b3JlUmVmcmVzaFRva2VuIiwiZGF0YWJhc2UiLCJ0eXBlIiwic3luY2hyb25pemUiLCJldmVudHMiLCJzaWduSW4iLCJtZXNzYWdlIiwic2lnbk91dCIsImNyZWF0ZVVzZXIiLCJ1cGRhdGVVc2VyIiwibGlua0FjY291bnQiLCJlcnJvciIsImFkYXB0ZXIiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiY2FsbGJhY2tzIiwiaWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcSIsInJlcyIsIk5leHRBdXRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUc7QUFDZEMsV0FBUyxFQUFFLENBQ1RDLDBEQUFTLENBQUNDLE1BQVYsQ0FBaUI7QUFDZkMsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FEUDtBQUVmQyxnQkFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGWCxHQUFqQixDQURTLEVBS1RQLDBEQUFTLENBQUNRLEtBQVYsQ0FBZ0I7QUFDZEMsVUFBTSxFQUFFO0FBQ05DLFVBQUksRUFBRVAsT0FBTyxDQUFDQyxHQUFSLENBQVlPLGlCQURaO0FBRU5DLFVBQUksRUFBRVQsT0FBTyxDQUFDQyxHQUFSLENBQVlTLGlCQUZaO0FBR05DLFVBQUksRUFBRTtBQUNKQyxZQUFJLEVBQUVaLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSxpQkFEZDtBQUVKQyxZQUFJLEVBQUVkLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYztBQUZkO0FBSEEsS0FETTtBQVNkQyxRQUFJLEVBQUVoQixPQUFPLENBQUNDLEdBQVIsQ0FBWWdCO0FBVEosR0FBaEIsQ0FMUyxFQWdCVHBCLDBEQUFTLENBQUNxQixLQUFWLENBQWdCO0FBQ2RuQixZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0IsZUFEUjtBQUVkaEIsZ0JBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVltQixtQkFGWjtBQUdkQyxVQUFNLEVBQUVyQixPQUFPLENBQUNDLEdBQVIsQ0FBWXFCLFlBSE47QUFLZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsV0FBTyxFQUFFO0FBQ1A7QUFDQUMsa0JBQVksRUFBRXhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZd0IsYUFGbkI7QUFHUDtBQUNBQyxvQkFBYyxFQUFFLENBSlQ7QUFLUDtBQUNBQyxrQkFBWSxFQUFFLEtBTlA7QUFPUDtBQUNBQyxzQkFBZ0IsRUFBRSxLQVJYO0FBU1A7QUFDQUMsdUJBQWlCLEVBQUU7QUFWWjtBQVhLLEdBQWhCLENBaEJTLENBREc7QUEwQ2RDLFVBQVEsRUFBRTtBQUNSQyxRQUFJLEVBQUUsVUFERTtBQUVSRCxZQUFRLEVBQUUsWUFGRjtBQUdSRSxlQUFXLEVBQUU7QUFITCxHQTFDSTtBQWdEZEMsUUFBTSxFQUFFO0FBQ04sVUFBTUMsTUFBTixDQUFhQyxPQUFiLEVBQXNCO0FBQ3BCO0FBQ0QsS0FISzs7QUFJTixVQUFNQyxPQUFOLENBQWNELE9BQWQsRUFBdUI7QUFDckI7QUFDRCxLQU5LOztBQU9OLFVBQU1FLFVBQU4sQ0FBaUJGLE9BQWpCLEVBQTBCO0FBQ3hCO0FBQ0QsS0FUSzs7QUFVTixVQUFNRyxVQUFOLENBQWlCSCxPQUFqQixFQUEwQjtBQUN4QjtBQUNELEtBWks7O0FBYU4sVUFBTUksV0FBTixDQUFrQkosT0FBbEIsRUFBMkI7QUFDekI7QUFDRCxLQWZLOztBQWdCTixVQUFNWixPQUFOLENBQWNZLE9BQWQsRUFBdUI7QUFDckI7QUFDRCxLQWxCSzs7QUFtQk4sVUFBTUssS0FBTixDQUFZTCxPQUFaLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBckJLLEdBaERNO0FBdUVkTSxTQUFPLEVBQUVDLCtFQUFhLENBQUNDLG1EQUFELENBdkVSO0FBd0VkQyxXQUFTLEVBQUU7QUFDVHJCLFdBQU8sRUFBRSxPQUFPQSxPQUFQLEVBQWdCWCxJQUFoQixLQUF5QjtBQUNoQ1csYUFBTyxDQUFDc0IsRUFBUixHQUFhakMsSUFBSSxDQUFDaUMsRUFBbEI7QUFDQSxhQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J4QixPQUFoQixDQUFQO0FBQ0Q7QUFKUTtBQXhFRyxDQUFoQjtBQWdGZSxnRUFBQ3lCLEdBQUQsRUFBTUMsR0FBTixLQUFjQyxnREFBUSxDQUFDRixHQUFELEVBQU1DLEdBQU4sRUFBV3RELE9BQVgsQ0FBckMiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBQcm92aWRlcnMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5HaXRIdWIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBQcm92aWRlcnMuRW1haWwoe1xuICAgICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9IT1NULFxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUE9SVCxcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9VU0VSLFxuICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUl9QQVNTV09SRCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgIH0pLFxuICAgIFByb3ZpZGVycy5BdXRoMCh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVULFxuICAgICAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXG5cbiAgICAgIC8vIHJlZGlyZWN0VXJpOlxuICAgICAgLy8gICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRURJUkVDVF9VUkkgfHxcbiAgICAgIC8vICAgXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2F1dGgvY2FsbGJhY2svMGF1dGhcIixcbiAgICAgIC8vIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTpcbiAgICAgIC8vICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUE9TVF9MT0dPVVRfUkVESVJFQ1RfVVJJIHx8XG4gICAgICAvLyAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiLFxuICAgICAgc2Vzc2lvbjoge1xuICAgICAgICAvLyBUaGUgc2VjcmV0IHVzZWQgdG8gZW5jcnlwdCB0aGUgY29va2llLlxuICAgICAgICBjb29raWVTZWNyZXQ6IHByb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVQsXG4gICAgICAgIC8vIFRoZSBjb29raWUgbGlmZXRpbWUgKGV4cGlyYXRpb24pIGluIHNlY29uZHMuIFNldCB0byA4IGhvdXJzIGJ5IGRlZmF1bHQuXG4gICAgICAgIGNvb2tpZUxpZmV0aW1lOiAwLFxuICAgICAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSBpZF90b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgIHN0b3JlSWRUb2tlbjogZmFsc2UsXG4gICAgICAgIC8vIChPcHRpb25hbCkgU3RvcmUgdGhlIGFjY2Vzc190b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgIHN0b3JlQWNjZXNzVG9rZW46IGZhbHNlLFxuICAgICAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSByZWZyZXNoX3Rva2VuIGluIHRoZSBzZXNzaW9uLiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgICAgc3RvcmVSZWZyZXNoVG9rZW46IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGF0YWJhc2U6IHtcbiAgICB0eXBlOiBcInBvc3RncmVzXCIsXG4gICAgZGF0YWJhc2U6IFwic3VyZmNsdXRjaFwiLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICB9LFxuXG4gIGV2ZW50czoge1xuICAgIGFzeW5jIHNpZ25JbihtZXNzYWdlKSB7XG4gICAgICAvKiBvbiBzdWNjZXNzZnVsIHNpZ24gaW4gKi9cbiAgICB9LFxuICAgIGFzeW5jIHNpZ25PdXQobWVzc2FnZSkge1xuICAgICAgLyogb24gc2lnbm91dCAqL1xuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlVXNlcihtZXNzYWdlKSB7XG4gICAgICAvKiB1c2VyIGNyZWF0ZWQgKi9cbiAgICB9LFxuICAgIGFzeW5jIHVwZGF0ZVVzZXIobWVzc2FnZSkge1xuICAgICAgLyogdXNlciB1cGRhdGVkIC0gZS5nLiB0aGVpciBlbWFpbCB3YXMgdmVyaWZpZWQgKi9cbiAgICB9LFxuICAgIGFzeW5jIGxpbmtBY2NvdW50KG1lc3NhZ2UpIHtcbiAgICAgIC8qIGFjY291bnQgKGUuZy4gVHdpdHRlcikgbGlua2VkIHRvIGEgdXNlciAqL1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbihtZXNzYWdlKSB7XG4gICAgICAvKiBzZXNzaW9uIGlzIGFjdGl2ZSAqL1xuICAgIH0sXG4gICAgYXN5bmMgZXJyb3IobWVzc2FnZSkge1xuICAgICAgLyogZXJyb3IgaW4gYXV0aGVudGljYXRpb24gZmxvdyAqL1xuICAgIH0sXG4gIH0sXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogYXN5bmMgKHNlc3Npb24sIHVzZXIpID0+IHtcbiAgICAgIHNlc3Npb24uaWQgPSB1c2VyLmlkO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKTtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@next-auth/prisma-adapter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI/NjhmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@next-auth/prisma-adapter\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIj8yOWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth\n");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-auth/providers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI/NjljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJuZXh0LWF1dGgvcHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-auth/providers\n");

/***/ })

/******/ });