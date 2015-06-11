/*!
 * paqs
 * Copyright (c) 2015 intuitivcloud Systems <engineering@intuitivcloud.com>
 * BSD-3-Clause Licensed
 */
var paqs =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * paqs
	 * Copyright (c) 2015 intuitivcloud Systems <engineering@intuitivcloud.com>
	 * BSD-3-Clause Licensed
	 */

	'use strict';

	var rex = /([\w\d\+\.%$\-_]+)=?([\w\d\+\.%$\-_]+)?&?/g,
	    spRex = /\+/g;

	module.exports = function paqs(qs) {
	  var params = {},
	      dec = decodeURIComponent,
	      isarr = Array.isArray,
	      m, k, v;

	  rex.lastIndex = 0;
	  while ((m = rex.exec(qs)) && m.length === 3) {
	    k = dec(m[1].replace(spRex, ' '));
	    v = m[2] && dec(m[2].replace(spRex, ' '));

	    if (k in params && isarr(params[k])) params[k].push(v);
	    if (k in params && !isarr(params[k])) params[k] = [params[k], v];
	    if (!(k in params)) params[k] = v;
	  }

	  return params;
	};



/***/ }
/******/ ]);