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

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__[\"PrismaClient\"]();\nconst options = {\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.GitHub({\n    clientId: process.env.GITHUB_ID,\n    clientSecret: process.env.GITHUB_SECRET\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Email({\n    server: {\n      host: process.env.EMAIL_SERVER_HOST,\n      port: process.env.EMAIL_SERVER_PORT,\n      auth: {\n        user: process.env.EMAIL_SERVER_USER,\n        pass: process.env.EMAIL_SERVER_PASSWORD\n      }\n    },\n    from: process.env.EMAIL_FROM\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Auth0({\n    clientId: process.env.AUTH0_CLIENT_ID,\n    clientSecret: process.env.AUTH0_CLIENT_SECRET,\n    domain: process.env.AUTH0_DOMAIN,\n    // redirectUri:\n    //   process.env.NEXT_PUBLIC_REDIRECT_URI ||\n    //   \"http://localhost:4000/api/auth/callback/0auth\",\n    // postLogoutRedirectUri:\n    //   process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI ||\n    //   \"http://localhost:3000/\",\n    session: {\n      // The secret used to encrypt the cookie.\n      cookieSecret: process.env.COOKIE_SECRET,\n      // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.\n      cookieLifetime: 0,\n      // (Optional) Store the id_token in the session. Defaults to false.\n      storeIdToken: false,\n      // (Optional) Store the access_token in the session. Defaults to false.\n      storeAccessToken: false,\n      // (Optional) Store the refresh_token in the session. Defaults to false.\n      storeRefreshToken: false\n    }\n  })],\n  database: {\n    type: \"postgres\",\n    database: \"surfclutch\",\n    synchronize: true\n  },\n  events: {\n    async signIn(message) {\n      /* on successful sign in */\n    },\n\n    async signOut(message) {\n      /* on signout */\n    },\n\n    async createUser(message) {\n      /* user created */\n    },\n\n    async updateUser(message) {\n      /* user updated - e.g. their email was verified */\n    },\n\n    async linkAccount(message) {\n      /* account (e.g. Twitter) linked to a user */\n    },\n\n    async session(message) {\n      /* session is active */\n    },\n\n    async error(message) {\n      /* error in authentication flow */\n    }\n\n  },\n  adapter: Object(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__[\"PrismaAdapter\"])(prisma),\n  callbacks: {\n    session: async (session, user) => {\n      session.id = user.id;\n      return Promise.resolve(session);\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzk5MDkiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50Iiwib3B0aW9ucyIsInByb3ZpZGVycyIsIlByb3ZpZGVycyIsIkdpdEh1YiIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJFbWFpbCIsInNlcnZlciIsImhvc3QiLCJFTUFJTF9TRVJWRVJfSE9TVCIsInBvcnQiLCJFTUFJTF9TRVJWRVJfUE9SVCIsImF1dGgiLCJ1c2VyIiwiRU1BSUxfU0VSVkVSX1VTRVIiLCJwYXNzIiwiRU1BSUxfU0VSVkVSX1BBU1NXT1JEIiwiZnJvbSIsIkVNQUlMX0ZST00iLCJBdXRoMCIsIkFVVEgwX0NMSUVOVF9JRCIsIkFVVEgwX0NMSUVOVF9TRUNSRVQiLCJkb21haW4iLCJBVVRIMF9ET01BSU4iLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiQ09PS0lFX1NFQ1JFVCIsImNvb2tpZUxpZmV0aW1lIiwic3RvcmVJZFRva2VuIiwic3RvcmVBY2Nlc3NUb2tlbiIsInN0b3JlUmVmcmVzaFRva2VuIiwiZGF0YWJhc2UiLCJ0eXBlIiwic3luY2hyb25pemUiLCJldmVudHMiLCJzaWduSW4iLCJtZXNzYWdlIiwic2lnbk91dCIsImNyZWF0ZVVzZXIiLCJ1cGRhdGVVc2VyIiwibGlua0FjY291bnQiLCJlcnJvciIsImFkYXB0ZXIiLCJQcmlzbWFBZGFwdGVyIiwiY2FsbGJhY2tzIiwiaWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcSIsInJlcyIsIk5leHRBdXRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQywyREFBSixFQUFmO0FBRUEsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFdBQVMsRUFBRSxDQUNUQywwREFBUyxDQUFDQyxNQUFWLENBQWlCO0FBQ2ZDLFlBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBRFA7QUFFZkMsZ0JBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRlgsR0FBakIsQ0FEUyxFQUtUUCwwREFBUyxDQUFDUSxLQUFWLENBQWdCO0FBQ2RDLFVBQU0sRUFBRTtBQUNOQyxVQUFJLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxpQkFEWjtBQUVOQyxVQUFJLEVBQUVULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxpQkFGWjtBQUdOQyxVQUFJLEVBQUU7QUFDSkMsWUFBSSxFQUFFWixPQUFPLENBQUNDLEdBQVIsQ0FBWVksaUJBRGQ7QUFFSkMsWUFBSSxFQUFFZCxPQUFPLENBQUNDLEdBQVIsQ0FBWWM7QUFGZDtBQUhBLEtBRE07QUFTZEMsUUFBSSxFQUFFaEIsT0FBTyxDQUFDQyxHQUFSLENBQVlnQjtBQVRKLEdBQWhCLENBTFMsRUFnQlRwQiwwREFBUyxDQUFDcUIsS0FBVixDQUFnQjtBQUNkbkIsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWtCLGVBRFI7QUFFZGhCLGdCQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZbUIsbUJBRlo7QUFHZEMsVUFBTSxFQUFFckIsT0FBTyxDQUFDQyxHQUFSLENBQVlxQixZQUhOO0FBS2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFdBQU8sRUFBRTtBQUNQO0FBQ0FDLGtCQUFZLEVBQUV4QixPQUFPLENBQUNDLEdBQVIsQ0FBWXdCLGFBRm5CO0FBR1A7QUFDQUMsb0JBQWMsRUFBRSxDQUpUO0FBS1A7QUFDQUMsa0JBQVksRUFBRSxLQU5QO0FBT1A7QUFDQUMsc0JBQWdCLEVBQUUsS0FSWDtBQVNQO0FBQ0FDLHVCQUFpQixFQUFFO0FBVlo7QUFYSyxHQUFoQixDQWhCUyxDQURHO0FBMENkQyxVQUFRLEVBQUU7QUFDUkMsUUFBSSxFQUFFLFVBREU7QUFFUkQsWUFBUSxFQUFFLFlBRkY7QUFHUkUsZUFBVyxFQUFFO0FBSEwsR0ExQ0k7QUFnRGRDLFFBQU0sRUFBRTtBQUNOLFVBQU1DLE1BQU4sQ0FBYUMsT0FBYixFQUFzQjtBQUNwQjtBQUNELEtBSEs7O0FBSU4sVUFBTUMsT0FBTixDQUFjRCxPQUFkLEVBQXVCO0FBQ3JCO0FBQ0QsS0FOSzs7QUFPTixVQUFNRSxVQUFOLENBQWlCRixPQUFqQixFQUEwQjtBQUN4QjtBQUNELEtBVEs7O0FBVU4sVUFBTUcsVUFBTixDQUFpQkgsT0FBakIsRUFBMEI7QUFDeEI7QUFDRCxLQVpLOztBQWFOLFVBQU1JLFdBQU4sQ0FBa0JKLE9BQWxCLEVBQTJCO0FBQ3pCO0FBQ0QsS0FmSzs7QUFnQk4sVUFBTVosT0FBTixDQUFjWSxPQUFkLEVBQXVCO0FBQ3JCO0FBQ0QsS0FsQks7O0FBbUJOLFVBQU1LLEtBQU4sQ0FBWUwsT0FBWixFQUFxQjtBQUNuQjtBQUNEOztBQXJCSyxHQWhETTtBQXVFZE0sU0FBTyxFQUFFQywrRUFBYSxDQUFDakQsTUFBRCxDQXZFUjtBQXdFZGtELFdBQVMsRUFBRTtBQUNUcEIsV0FBTyxFQUFFLE9BQU9BLE9BQVAsRUFBZ0JYLElBQWhCLEtBQXlCO0FBQ2hDVyxhQUFPLENBQUNxQixFQUFSLEdBQWFoQyxJQUFJLENBQUNnQyxFQUFsQjtBQUNBLGFBQU9DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnZCLE9BQWhCLENBQVA7QUFDRDtBQUpRO0FBeEVHLENBQWhCO0FBZ0ZlLGdFQUFDd0IsR0FBRCxFQUFNQyxHQUFOLEtBQWNDLGdEQUFRLENBQUNGLEdBQUQsRUFBTUMsR0FBTixFQUFXckQsT0FBWCxDQUFyQyIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBQcm92aWRlcnMuR2l0SHViKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSksXG4gICAgUHJvdmlkZXJzLkVtYWlsKHtcbiAgICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfSE9TVCxcbiAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSX1BPUlQsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfVVNFUixcbiAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVJfUEFTU1dPUkQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcbiAgICB9KSxcbiAgICBQcm92aWRlcnMuQXV0aDAoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOLFxuXG4gICAgICAvLyByZWRpcmVjdFVyaTpcbiAgICAgIC8vICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJIHx8XG4gICAgICAvLyAgIFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9hdXRoL2NhbGxiYWNrLzBhdXRoXCIsXG4gICAgICAvLyBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6XG4gICAgICAvLyAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BPU1RfTE9HT1VUX1JFRElSRUNUX1VSSSB8fFxuICAgICAgLy8gICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIixcbiAgICAgIHNlc3Npb246IHtcbiAgICAgICAgLy8gVGhlIHNlY3JldCB1c2VkIHRvIGVuY3J5cHQgdGhlIGNvb2tpZS5cbiAgICAgICAgY29va2llU2VjcmV0OiBwcm9jZXNzLmVudi5DT09LSUVfU0VDUkVULFxuICAgICAgICAvLyBUaGUgY29va2llIGxpZmV0aW1lIChleHBpcmF0aW9uKSBpbiBzZWNvbmRzLiBTZXQgdG8gOCBob3VycyBieSBkZWZhdWx0LlxuICAgICAgICBjb29raWVMaWZldGltZTogMCxcbiAgICAgICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgaWRfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICBzdG9yZUlkVG9rZW46IGZhbHNlLFxuICAgICAgICAvLyAoT3B0aW9uYWwpIFN0b3JlIHRoZSBhY2Nlc3NfdG9rZW4gaW4gdGhlIHNlc3Npb24uIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAgICBzdG9yZUFjY2Vzc1Rva2VuOiBmYWxzZSxcbiAgICAgICAgLy8gKE9wdGlvbmFsKSBTdG9yZSB0aGUgcmVmcmVzaF90b2tlbiBpbiB0aGUgc2Vzc2lvbi4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICAgIHN0b3JlUmVmcmVzaFRva2VuOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRhdGFiYXNlOiB7XG4gICAgdHlwZTogXCJwb3N0Z3Jlc1wiLFxuICAgIGRhdGFiYXNlOiBcInN1cmZjbHV0Y2hcIixcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgfSxcblxuICBldmVudHM6IHtcbiAgICBhc3luYyBzaWduSW4obWVzc2FnZSkge1xuICAgICAgLyogb24gc3VjY2Vzc2Z1bCBzaWduIGluICovXG4gICAgfSxcbiAgICBhc3luYyBzaWduT3V0KG1lc3NhZ2UpIHtcbiAgICAgIC8qIG9uIHNpZ25vdXQgKi9cbiAgICB9LFxuICAgIGFzeW5jIGNyZWF0ZVVzZXIobWVzc2FnZSkge1xuICAgICAgLyogdXNlciBjcmVhdGVkICovXG4gICAgfSxcbiAgICBhc3luYyB1cGRhdGVVc2VyKG1lc3NhZ2UpIHtcbiAgICAgIC8qIHVzZXIgdXBkYXRlZCAtIGUuZy4gdGhlaXIgZW1haWwgd2FzIHZlcmlmaWVkICovXG4gICAgfSxcbiAgICBhc3luYyBsaW5rQWNjb3VudChtZXNzYWdlKSB7XG4gICAgICAvKiBhY2NvdW50IChlLmcuIFR3aXR0ZXIpIGxpbmtlZCB0byBhIHVzZXIgKi9cbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24obWVzc2FnZSkge1xuICAgICAgLyogc2Vzc2lvbiBpcyBhY3RpdmUgKi9cbiAgICB9LFxuICAgIGFzeW5jIGVycm9yKG1lc3NhZ2UpIHtcbiAgICAgIC8qIGVycm9yIGluIGF1dGhlbnRpY2F0aW9uIGZsb3cgKi9cbiAgICB9LFxuICB9LFxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB1c2VyKSA9PiB7XG4gICAgICBzZXNzaW9uLmlkID0gdXNlci5pZDtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2Vzc2lvbik7XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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