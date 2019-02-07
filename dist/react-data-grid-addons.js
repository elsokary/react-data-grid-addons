(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("immutable"));
	else if (typeof define === 'function' && define.amd)
		define(["react", "react-dom",], factory);
	else if (typeof exports === 'object')
		exports["ReactDataGrid"] = factory(require("react"), require("react-dom"), require("immutable"));
	else
		root["ReactDataGrid"] = factory(root["React"], root["ReactDOM"], root["Immutable"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_185__) {
	return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
				/******/
			};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
			/******/
		}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
		/******/
	})
/************************************************************************/
/******/((function (modules) {
			// Check all modules for deduplicated modules
			for (var i in modules) {
				if (Object.prototype.hasOwnProperty.call(modules, i)) {
					switch (typeof modules[i]) {
						case "function": break;
						case "object":
							// Module can be created from a template
							modules[i] = (function (_m) {
								var args = _m.slice(1), fn = modules[_m[0]];
								return function (a, b, c) {
									fn.apply(this, [a, b, c].concat(args));
								};
							}(modules[i]));
							break;
						default:
							// Module is a copy of another module
							modules[i] = modules[modules[i]];
							break;
					}
				}
			}
			return modules;
		}([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

				module.exports = __webpack_require__(242);


				/***/
			}),
/* 1 */
/***/ (function (module, exports) {

				module.exports = function (module) {
					if (!module.webpackPolyfill) {
						module.deprecate = function () { };
						module.paths = [];
						// module.parent = undefined by default
						module.children = [];
						module.webpackPolyfill = 1;
					}
					return module;
				}


				/***/
			}),
/* 2 */
/***/ (function (module, exports) {

				module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

				/***/
			}),
/* 3 */
/***/ (function (module, exports, __webpack_require__) {

				/**
				 * Copyright (c) 2013-present, Facebook, Inc.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				if (false) {
					var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
						Symbol.for &&
						Symbol.for('react.element')) ||
						0xeac7;

					var isValidElement = function (object) {
						return typeof object === 'object' &&
							object !== null &&
							object.$$typeof === REACT_ELEMENT_TYPE;
					};

					// By explicitly using `prop-types` you are opting into new development behavior.
					// http://fb.me/prop-types-in-prod
					var throwOnDirectAccess = true;
					module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
				} else {
					// By explicitly using `prop-types` you are opting into new production behavior.
					// http://fb.me/prop-types-in-prod
					module.exports = __webpack_require__(118)();
				}


				/***/
			}),
/* 4 */
/***/ (function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
				/* global define */

				(function () {
					'use strict';

					var hasOwn = {}.hasOwnProperty;

					function classNames() {
						var classes = [];

						for (var i = 0; i < arguments.length; i++) {
							var arg = arguments[i];
							if (!arg) continue;

							var argType = typeof arg;

							if (argType === 'string' || argType === 'number') {
								classes.push(arg);
							} else if (Array.isArray(arg) && arg.length) {
								var inner = classNames.apply(null, arg);
								if (inner) {
									classes.push(inner);
								}
							} else if (argType === 'object') {
								for (var key in arg) {
									if (hasOwn.call(arg, key) && arg[key]) {
										classes.push(key);
									}
								}
							}
						}

						return classes.join(' ');
					}

					if (typeof module !== 'undefined' && module.exports) {
						classNames.default = classNames;
						module.exports = classNames;
					} else if (true) {
						// register as 'classnames', consistent with npm package name
						!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
							return classNames;
						}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					} else {
						window.classNames = classNames;
					}
				}());


				/***/
			}),
/* 5 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

				var isImmutableLoaded = function isImmutableLoaded() {
					return typeof Immutable !== 'undefined';
				};

				var isColumnsImmutable = exports.isColumnsImmutable = function isColumnsImmutable(columns) {
					return isImmutableLoaded() && columns instanceof Immutable.List;
				};

				var isEmptyArray = exports.isEmptyArray = function isEmptyArray(obj) {
					return Array.isArray(obj) && obj.length === 0;
				};

				var isFunction = exports.isFunction = function isFunction(functionToCheck) {
					var getType = {};
					return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
				};

				var isEmptyObject = exports.isEmptyObject = function isEmptyObject(obj) {
					return Object.keys(obj).length === 0 && obj.constructor === Object;
				};

				var isImmutableCollection = exports.isImmutableCollection = function isImmutableCollection(objToVerify) {
					return isImmutableLoaded() && Immutable.Iterable.isIterable(objToVerify);
				};

				var getMixedTypeValueRetriever = exports.getMixedTypeValueRetriever = function getMixedTypeValueRetriever(isImmutable) {
					var retObj = {};
					var retriever = function retriever(item, key) {
						return item[key];
					};
					var immutableRetriever = function immutableRetriever(immutable, key) {
						return immutable.get(key);
					};

					retObj.getValue = isImmutable ? immutableRetriever : retriever;

					return retObj;
				};

				var isImmutableMap = exports.isImmutableMap = isImmutableLoaded() ? Immutable.Map.isMap : function () {
					return false;
				};

				var last = exports.last = function last(arrayOrList) {
					if (arrayOrList == null) {
						throw new Error('arrayOrCollection is null');
					}

					if (isImmutableLoaded() && Immutable.List.isList(arrayOrList)) {
						return arrayOrList.last();
					}

					if (Array.isArray(arrayOrList)) {
						return arrayOrList[arrayOrList.length - 1];
					}

					throw new Error('Cant get last of: ' + (typeof arrayOrList === 'undefined' ? 'undefined' : _typeof(arrayOrList)));
				};

				/***/
			}),
/* 6 */,
/* 7 */
/***/ (function (module, exports) {

				/**
				 * Checks if `value` is classified as an `Array` object.
				 *
				 * @static
				 * @memberOf _
				 * @since 0.1.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
				 * @example
				 *
				 * _.isArray([1, 2, 3]);
				 * // => true
				 *
				 * _.isArray(document.body.children);
				 * // => false
				 *
				 * _.isArray('abc');
				 * // => false
				 *
				 * _.isArray(_.noop);
				 * // => false
				 */
				var isArray = Array.isArray;

				module.exports = isArray;


				/***/
			}),
/* 8 */
/***/ (function (module, exports) {

				/*
					MIT License http://www.opensource.org/licenses/mit-license.php
					Author Tobias Koppers @sokra
				*/
				// css base code, injected by the css-loader
				module.exports = function () {
					var list = [];

					// return the list of modules as css string
					list.toString = function toString() {
						var result = [];
						for (var i = 0; i < this.length; i++) {
							var item = this[i];
							if (item[2]) {
								result.push("@media " + item[2] + "{" + item[1] + "}");
							} else {
								result.push(item[1]);
							}
						}
						return result.join("");
					};

					// import a list of modules into the list
					list.i = function (modules, mediaQuery) {
						if (typeof modules === "string")
							modules = [[null, modules, ""]];
						var alreadyImportedModules = {};
						for (var i = 0; i < this.length; i++) {
							var id = this[i][0];
							if (typeof id === "number")
								alreadyImportedModules[id] = true;
						}
						for (i = 0; i < modules.length; i++) {
							var item = modules[i];
							// skip already imported module
							// this implementation is not 100% perfect for weird media query combinations
							//  when a module is imported multiple times with different media queries.
							//  I hope this will never occur (Hey this way we have smaller bundles)
							if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
								if (mediaQuery && !item[2]) {
									item[2] = mediaQuery;
								} else if (mediaQuery) {
									item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
								}
								list.push(item);
							}
						}
					};
					return list;
				};


				/***/
			}),
/* 9 */
/***/ (function (module, exports, __webpack_require__) {

				/*
					MIT License http://www.opensource.org/licenses/mit-license.php
					Author Tobias Koppers @sokra
				*/
				var stylesInDom = {},
					memoize = function (fn) {
						var memo;
						return function () {
							if (typeof memo === "undefined") memo = fn.apply(this, arguments);
							return memo;
						};
					},
					isOldIE = memoize(function () {
						return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
					}),
					getHeadElement = memoize(function () {
						return document.head || document.getElementsByTagName("head")[0];
					}),
					singletonElement = null,
					singletonCounter = 0,
					styleElementsInsertedAtTop = [];

				module.exports = function (list, options) {
					if (false) {
						if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
					}

					options = options || {};
					// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
					// tags it will allow on a page
					if (typeof options.singleton === "undefined") options.singleton = isOldIE();

					// By default, add <style> tags to the bottom of <head>.
					if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

					var styles = listToStyles(list);
					addStylesToDom(styles, options);

					return function update(newList) {
						var mayRemove = [];
						for (var i = 0; i < styles.length; i++) {
							var item = styles[i];
							var domStyle = stylesInDom[item.id];
							domStyle.refs--;
							mayRemove.push(domStyle);
						}
						if (newList) {
							var newStyles = listToStyles(newList);
							addStylesToDom(newStyles, options);
						}
						for (var i = 0; i < mayRemove.length; i++) {
							var domStyle = mayRemove[i];
							if (domStyle.refs === 0) {
								for (var j = 0; j < domStyle.parts.length; j++)
									domStyle.parts[j]();
								delete stylesInDom[domStyle.id];
							}
						}
					};
				}

				function addStylesToDom(styles, options) {
					for (var i = 0; i < styles.length; i++) {
						var item = styles[i];
						var domStyle = stylesInDom[item.id];
						if (domStyle) {
							domStyle.refs++;
							for (var j = 0; j < domStyle.parts.length; j++) {
								domStyle.parts[j](item.parts[j]);
							}
							for (; j < item.parts.length; j++) {
								domStyle.parts.push(addStyle(item.parts[j], options));
							}
						} else {
							var parts = [];
							for (var j = 0; j < item.parts.length; j++) {
								parts.push(addStyle(item.parts[j], options));
							}
							stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
						}
					}
				}

				function listToStyles(list) {
					var styles = [];
					var newStyles = {};
					for (var i = 0; i < list.length; i++) {
						var item = list[i];
						var id = item[0];
						var css = item[1];
						var media = item[2];
						var sourceMap = item[3];
						var part = { css: css, media: media, sourceMap: sourceMap };
						if (!newStyles[id])
							styles.push(newStyles[id] = { id: id, parts: [part] });
						else
							newStyles[id].parts.push(part);
					}
					return styles;
				}

				function insertStyleElement(options, styleElement) {
					var head = getHeadElement();
					var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
					if (options.insertAt === "top") {
						if (!lastStyleElementInsertedAtTop) {
							head.insertBefore(styleElement, head.firstChild);
						} else if (lastStyleElementInsertedAtTop.nextSibling) {
							head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
						} else {
							head.appendChild(styleElement);
						}
						styleElementsInsertedAtTop.push(styleElement);
					} else if (options.insertAt === "bottom") {
						head.appendChild(styleElement);
					} else {
						throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
					}
				}

				function removeStyleElement(styleElement) {
					styleElement.parentNode.removeChild(styleElement);
					var idx = styleElementsInsertedAtTop.indexOf(styleElement);
					if (idx >= 0) {
						styleElementsInsertedAtTop.splice(idx, 1);
					}
				}

				function createStyleElement(options) {
					var styleElement = document.createElement("style");
					styleElement.type = "text/css";
					insertStyleElement(options, styleElement);
					return styleElement;
				}

				function createLinkElement(options) {
					var linkElement = document.createElement("link");
					linkElement.rel = "stylesheet";
					insertStyleElement(options, linkElement);
					return linkElement;
				}

				function addStyle(obj, options) {
					var styleElement, update, remove;

					if (options.singleton) {
						var styleIndex = singletonCounter++;
						styleElement = singletonElement || (singletonElement = createStyleElement(options));
						update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
						remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
					} else if (obj.sourceMap &&
						typeof URL === "function" &&
						typeof URL.createObjectURL === "function" &&
						typeof URL.revokeObjectURL === "function" &&
						typeof Blob === "function" &&
						typeof btoa === "function") {
						styleElement = createLinkElement(options);
						update = updateLink.bind(null, styleElement);
						remove = function () {
							removeStyleElement(styleElement);
							if (styleElement.href)
								URL.revokeObjectURL(styleElement.href);
						};
					} else {
						styleElement = createStyleElement(options);
						update = applyToTag.bind(null, styleElement);
						remove = function () {
							removeStyleElement(styleElement);
						};
					}

					update(obj);

					return function updateStyle(newObj) {
						if (newObj) {
							if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
								return;
							update(obj = newObj);
						} else {
							remove();
						}
					};
				}

				var replaceText = (function () {
					var textStore = [];

					return function (index, replacement) {
						textStore[index] = replacement;
						return textStore.filter(Boolean).join('\n');
					};
				})();

				function applyToSingletonTag(styleElement, index, remove, obj) {
					var css = remove ? "" : obj.css;

					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = replaceText(index, css);
					} else {
						var cssNode = document.createTextNode(css);
						var childNodes = styleElement.childNodes;
						if (childNodes[index]) styleElement.removeChild(childNodes[index]);
						if (childNodes.length) {
							styleElement.insertBefore(cssNode, childNodes[index]);
						} else {
							styleElement.appendChild(cssNode);
						}
					}
				}

				function applyToTag(styleElement, obj) {
					var css = obj.css;
					var media = obj.media;

					if (media) {
						styleElement.setAttribute("media", media)
					}

					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = css;
					} else {
						while (styleElement.firstChild) {
							styleElement.removeChild(styleElement.firstChild);
						}
						styleElement.appendChild(document.createTextNode(css));
					}
				}

				function updateLink(linkElement, obj) {
					var css = obj.css;
					var sourceMap = obj.sourceMap;

					if (sourceMap) {
						// http://stackoverflow.com/a/26603875
						css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
					}

					var blob = new Blob([css], { type: "text/css" });

					var oldSrc = linkElement.href;

					linkElement.href = URL.createObjectURL(blob);

					if (oldSrc)
						URL.revokeObjectURL(oldSrc);
				}


				/***/
			}),
/* 10 */
/***/ (function (module, exports, __webpack_require__) {

				/**
				 * Copyright (c) 2013-present, Facebook, Inc.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				'use strict';

				/**
				 * Use invariant() to assert state which your program assumes to be true.
				 *
				 * Provide sprintf-style format (only %s is supported) and arguments
				 * to provide information about what broke and what you were
				 * expecting.
				 *
				 * The invariant message will be stripped in production, but the invariant
				 * will remain to ensure logic does not differ in production.
				 */

				var invariant = function (condition, format, a, b, c, d, e, f) {
					if (false) {
						if (format === undefined) {
							throw new Error('invariant requires an error message argument');
						}
					}

					if (!condition) {
						var error;
						if (format === undefined) {
							error = new Error(
								'Minified exception occurred; use the non-minified dev environment ' +
								'for the full error message and additional helpful warnings.'
							);
						} else {
							var args = [a, b, c, d, e, f];
							var argIndex = 0;
							error = new Error(
								format.replace(/%s/g, function () { return args[argIndex++]; })
							);
							error.name = 'Invariant Violation';
						}

						error.framesToPop = 1; // we don't care about invariant's own frame
						throw error;
					}
				};

				module.exports = invariant;


				/***/
			}),
/* 11 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.DragItemTypes = exports.CellExpand = exports.UpdateActions = exports.HeaderRowType = exports.EventTypes = exports.CellNavigationMode = undefined;

				var _CellNavigationMode = __webpack_require__(105);

				var CellNavigationMode = _interopRequireWildcard(_CellNavigationMode);

				var _EventTypes = __webpack_require__(106);

				var EventTypes = _interopRequireWildcard(_EventTypes);

				var _HeaderRowType = __webpack_require__(107);

				var HeaderRowType = _interopRequireWildcard(_HeaderRowType);

				var _keymirror = __webpack_require__(111);

				var _keymirror2 = _interopRequireDefault(_keymirror);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

				var UpdateActions = (0, _keymirror2['default'])({
					CELL_UPDATE: null,
					COLUMN_FILL: null,
					COPY_PASTE: null,
					CELL_DRAG: null
				});

				var DragItemTypes = {
					Column: 'column'
				};

				var CellExpand = {
					DOWN_TRIANGLE: String.fromCharCode(9660),
					RIGHT_TRIANGLE: String.fromCharCode(9654)
				};

				exports.CellNavigationMode = CellNavigationMode;
				exports.EventTypes = EventTypes;
				exports.HeaderRowType = HeaderRowType;
				exports.UpdateActions = UpdateActions;
				exports.CellExpand = CellExpand;
				exports.DragItemTypes = DragItemTypes;

				/***/
			}),
/* 12 */,
/* 13 */
/***/ (function (module, exports) {

				module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

				/***/
			}),
/* 14 */,
/* 15 */,
/* 16 */,
			/* 17 */
			[1948, 33, 23],
/* 18 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				var ExcelColumnShape = {
					name: _propTypes2['default'].node.isRequired,
					key: _propTypes2['default'].string.isRequired,
					width: _propTypes2['default'].number.isRequired,
					filterable: _propTypes2['default'].bool
				};

				module.exports = ExcelColumnShape;

				/***/
			}),
			/* 19 */
			[1931, 173],
			/* 20 */
			7,
/* 21 */,
/* 22 */
/***/ (function (module, exports, __webpack_require__) {

				var baseGetTag = __webpack_require__(33),
					getPrototype = __webpack_require__(320),
					isObjectLike = __webpack_require__(29);

				/** `Object#toString` result references. */
				var objectTag = '[object Object]';

				/** Used for built-in method references. */
				var funcProto = Function.prototype,
					objectProto = Object.prototype;

				/** Used to resolve the decompiled source of functions. */
				var funcToString = funcProto.toString;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/** Used to infer the `Object` constructor. */
				var objectCtorString = funcToString.call(Object);

				/**
				 * Checks if `value` is a plain object, that is, an object created by the
				 * `Object` constructor or one with a `[[Prototype]]` of `null`.
				 *
				 * @static
				 * @memberOf _
				 * @since 0.8.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
				 * @example
				 *
				 * function Foo() {
				 *   this.a = 1;
				 * }
				 *
				 * _.isPlainObject(new Foo);
				 * // => false
				 *
				 * _.isPlainObject([1, 2, 3]);
				 * // => false
				 *
				 * _.isPlainObject({ 'x': 0, 'y': 0 });
				 * // => true
				 *
				 * _.isPlainObject(Object.create(null));
				 * // => true
				 */
				function isPlainObject(value) {
					if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
						return false;
					}
					var proto = getPrototype(value);
					if (proto === null) {
						return true;
					}
					var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
					return typeof Ctor == 'function' && Ctor instanceof Ctor &&
						funcToString.call(Ctor) == objectCtorString;
				}

				module.exports = isPlainObject;


				/***/
			}),
/* 23 */
/***/ (function (module, exports) {

				/**
				 * Checks if `value` is the
				 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
				 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
				 *
				 * @static
				 * @memberOf _
				 * @since 0.1.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
				 * @example
				 *
				 * _.isObject({});
				 * // => true
				 *
				 * _.isObject([1, 2, 3]);
				 * // => true
				 *
				 * _.isObject(_.noop);
				 * // => true
				 *
				 * _.isObject(null);
				 * // => false
				 */
				function isObject(value) {
					var type = typeof value;
					return value != null && (type == 'object' || type == 'function');
				}

				module.exports = isObject;


				/***/
			}),
			/* 24 */
			[1931, 146],
/* 25 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _DragDropContext = __webpack_require__(154);

				Object.defineProperty(exports, 'DragDropContext', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_DragDropContext).default;
					}
				});

				var _DragDropContextProvider = __webpack_require__(367);

				Object.defineProperty(exports, 'DragDropContextProvider', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_DragDropContextProvider).default;
					}
				});

				var _DragLayer = __webpack_require__(368);

				Object.defineProperty(exports, 'DragLayer', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_DragLayer).default;
					}
				});

				var _DragSource = __webpack_require__(369);

				Object.defineProperty(exports, 'DragSource', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_DragSource).default;
					}
				});

				var _DropTarget = __webpack_require__(370);

				Object.defineProperty(exports, 'DropTarget', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_DropTarget).default;
					}
				});

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				/***/
			}),
			/* 26 */
			[1871, 421, 445],
/* 27 */
/***/ (function (module, exports) {

				/*
				object-assign
				(c) Sindre Sorhus
				@license MIT
				*/

				'use strict';
				/* eslint-disable no-unused-vars */
				var getOwnPropertySymbols = Object.getOwnPropertySymbols;
				var hasOwnProperty = Object.prototype.hasOwnProperty;
				var propIsEnumerable = Object.prototype.propertyIsEnumerable;

				function toObject(val) {
					if (val === null || val === undefined) {
						throw new TypeError('Object.assign cannot be called with null or undefined');
					}

					return Object(val);
				}

				function shouldUseNative() {
					try {
						if (!Object.assign) {
							return false;
						}

						// Detect buggy property enumeration order in older V8 versions.

						// https://bugs.chromium.org/p/v8/issues/detail?id=4118
						var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
						test1[5] = 'de';
						if (Object.getOwnPropertyNames(test1)[0] === '5') {
							return false;
						}

						// https://bugs.chromium.org/p/v8/issues/detail?id=3056
						var test2 = {};
						for (var i = 0; i < 10; i++) {
							test2['_' + String.fromCharCode(i)] = i;
						}
						var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
							return test2[n];
						});
						if (order2.join('') !== '0123456789') {
							return false;
						}

						// https://bugs.chromium.org/p/v8/issues/detail?id=3056
						var test3 = {};
						'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
							test3[letter] = letter;
						});
						if (Object.keys(Object.assign({}, test3)).join('') !==
							'abcdefghijklmnopqrst') {
							return false;
						}

						return true;
					} catch (err) {
						// We don't expect any of the above to throw, but better to be safe.
						return false;
					}
				}

				module.exports = shouldUseNative() ? Object.assign : function (target, source) {
					var from;
					var to = toObject(target);
					var symbols;

					for (var s = 1; s < arguments.length; s++) {
						from = Object(arguments[s]);

						for (var key in from) {
							if (hasOwnProperty.call(from, key)) {
								to[key] = from[key];
							}
						}

						if (getOwnPropertySymbols) {
							symbols = getOwnPropertySymbols(from);
							for (var i = 0; i < symbols.length; i++) {
								if (propIsEnumerable.call(from, symbols[i])) {
									to[symbols[i]] = from[symbols[i]];
								}
							}
						}
					}

					return to;
				};


				/***/
			}),
/* 28 */,
/* 29 */
/***/ (function (module, exports) {

				/**
				 * Checks if `value` is object-like. A value is object-like if it's not `null`
				 * and has a `typeof` result of "object".
				 *
				 * @static
				 * @memberOf _
				 * @since 4.0.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
				 * @example
				 *
				 * _.isObjectLike({});
				 * // => true
				 *
				 * _.isObjectLike([1, 2, 3]);
				 * // => true
				 *
				 * _.isObjectLike(_.noop);
				 * // => false
				 *
				 * _.isObjectLike(null);
				 * // => false
				 */
				function isObjectLike(value) {
					return value != null && typeof value == 'object';
				}

				module.exports = isObjectLike;


				/***/
			}),
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.callIfExists = callIfExists;
				exports.hasOwnProp = hasOwnProp;
				exports.uniqueId = uniqueId;
				function callIfExists(func) {
					for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}

					return typeof func === 'function' && func.apply(undefined, args);
				}

				function hasOwnProp(obj, prop) {
					return Object.prototype.hasOwnProperty.call(obj, prop);
				}

				function uniqueId() {
					return Math.random().toString(36).substring(7);
				}

				var cssClasses = exports.cssClasses = {
					menu: 'react-contextmenu',
					menuVisible: 'react-contextmenu--visible',
					menuWrapper: 'react-contextmenu-wrapper',
					menuItem: 'react-contextmenu-item',
					menuItemActive: 'react-contextmenu-item--active',
					menuItemDisabled: 'react-contextmenu-item--disabled',
					menuItemDivider: 'react-contextmenu-item--divider',
					menuItemSelected: 'react-contextmenu-item--selected',
					subMenu: 'react-contextmenu-submenu'
				};

				var store = exports.store = {};

				var canUseDOM = exports.canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);

				/***/
			}),
			/* 33 */
			[1833, 67, 321, 343],
/* 34 */
/***/ (function (module, exports, __webpack_require__) {

				var identity = __webpack_require__(75),
					overRest = __webpack_require__(344),
					setToString = __webpack_require__(347);

				/**
				 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
				 *
				 * @private
				 * @param {Function} func The function to apply a rest parameter to.
				 * @param {number} [start=func.length-1] The start position of the rest parameter.
				 * @returns {Function} Returns the new function.
				 */
				function baseRest(func, start) {
					return setToString(overRest(func, start, identity), func + '');
				}

				module.exports = baseRest;


				/***/
			}),
/* 35 */,
/* 36 */,
/* 37 */,
			/* 38 */
			[1871, 311, 322],
/* 39 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.MENU_HIDE = exports.MENU_SHOW = undefined;
				exports.dispatchGlobalEvent = dispatchGlobalEvent;
				exports.showMenu = showMenu;
				exports.hideMenu = hideMenu;

				var _objectAssign = __webpack_require__(27);

				var _objectAssign2 = _interopRequireDefault(_objectAssign);

				var _helpers = __webpack_require__(32);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				var MENU_SHOW = exports.MENU_SHOW = 'REACT_CONTEXTMENU_SHOW';
				var MENU_HIDE = exports.MENU_HIDE = 'REACT_CONTEXTMENU_HIDE';

				function dispatchGlobalEvent(eventName, opts) {
					var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

					// Compatibale with IE
					// @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
					var event = void 0;

					if (typeof window.CustomEvent === 'function') {
						event = new window.CustomEvent(eventName, { detail: opts });
					} else {
						event = document.createEvent('CustomEvent');
						event.initCustomEvent(eventName, false, true, opts);
					}

					if (target) {
						target.dispatchEvent(event);
						(0, _objectAssign2.default)(_helpers.store, opts);
					}
				}

				function showMenu() {
					var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
					var target = arguments[1];

					dispatchGlobalEvent(MENU_SHOW, (0, _objectAssign2.default)({}, opts, { type: MENU_SHOW }), target);
				}

				function hideMenu() {
					var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
					var target = arguments[1];

					dispatchGlobalEvent(MENU_HIDE, (0, _objectAssign2.default)({}, opts, { type: MENU_HIDE }), target);
				}

				/***/
			}),
/* 40 */,
			/* 41 */
			[1833, 61, 442, 469],
			/* 42 */
			29,
/* 43 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				module.exports = {
					CheckboxEditor: __webpack_require__(69),
					EditorBase: __webpack_require__(47),
					SimpleTextEditor: __webpack_require__(70)
				};

				/***/
			}),
/* 44 */
/***/ (function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports["default"] = shouldRowUpdate;
				function shouldRowUpdate(nextProps, currentProps) {
					return currentProps.columns !== nextProps.columns || nextProps.row !== currentProps.row || currentProps.colOverscanStartIdx !== nextProps.colOverscanStartIdx || currentProps.colOverscanEndIdx !== nextProps.colOverscanEndIdx || currentProps.colVisibleStartIdx !== nextProps.colVisibleStartIdx || currentProps.colVisibleEndIdx !== nextProps.colVisibleEndIdx || currentProps.isSelected !== nextProps.isSelected || currentProps.isScrolling !== nextProps.isScrolling || nextProps.height !== currentProps.height || currentProps.isOver !== nextProps.isOver || currentProps.expandedRows !== nextProps.expandedRows || currentProps.canDrop !== nextProps.canDrop || currentProps.forceUpdate === true || currentProps.extraClasses !== nextProps.extraClasses;
				}

				/***/
			}),
/* 45 */
/***/ (function (module, exports, __webpack_require__) {

				// style-loader: Adds some css to the DOM by adding a <style> tag

				// load the styles
				var content = __webpack_require__(110);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(9)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!../node_modules/css-loader/index.js!./react-data-grid-row.css", function () {
							var newContent = require("!!../node_modules/css-loader/index.js!./react-data-grid-row.css");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () { update(); });
				}

				/***/
			}),
			/* 46 */
			[1942, 17, 117],
/* 47 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _ExcelColumn = __webpack_require__(18);

				var _ExcelColumn2 = _interopRequireDefault(_ExcelColumn);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var React = __webpack_require__(2);
				var ReactDOM = __webpack_require__(13);

				var EditorBase = function (_React$Component) {
					_inherits(EditorBase, _React$Component);

					function EditorBase() {
						_classCallCheck(this, EditorBase);

						return _possibleConstructorReturn(this, (EditorBase.__proto__ || Object.getPrototypeOf(EditorBase)).apply(this, arguments));
					}

					_createClass(EditorBase, [{
						key: 'getStyle',
						value: function getStyle() {
							return {
								width: '100%'
							};
						}
					}, {
						key: 'getValue',
						value: function getValue() {
							var updated = {};
							updated[this.props.column.key] = this.getInputNode().value;
							return updated;
						}
					}, {
						key: 'getInputNode',
						value: function getInputNode() {
							var domNode = ReactDOM.findDOMNode(this);
							if (domNode.tagName === 'INPUT') {
								return domNode;
							}

							return domNode.querySelector('input:not([type=hidden])');
						}
					}, {
						key: 'inheritContainerStyles',
						value: function inheritContainerStyles() {
							return true;
						}
					}]);

					return EditorBase;
				}(React.Component);

				EditorBase.propTypes = {
					onKeyDown: _propTypes2['default'].func.isRequired,
					value: _propTypes2['default'].any.isRequired,
					onBlur: _propTypes2['default'].func.isRequired,
					column: _propTypes2['default'].shape(_ExcelColumn2['default']).isRequired,
					commit: _propTypes2['default'].func.isRequired
				};

				module.exports = EditorBase;

				/***/
			}),
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.END_DRAG = exports.DROP = exports.HOVER = exports.PUBLISH_DRAG_SOURCE = exports.BEGIN_DRAG = undefined;

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				exports.beginDrag = beginDrag;
				exports.publishDragSource = publishDragSource;
				exports.hover = hover;
				exports.drop = drop;
				exports.endDrag = endDrag;

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _isArray = __webpack_require__(7);

				var _isArray2 = _interopRequireDefault(_isArray);

				var _isObject = __webpack_require__(23);

				var _isObject2 = _interopRequireDefault(_isObject);

				var _matchesType = __webpack_require__(142);

				var _matchesType2 = _interopRequireDefault(_matchesType);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				var BEGIN_DRAG = exports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
				var PUBLISH_DRAG_SOURCE = exports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
				var HOVER = exports.HOVER = 'dnd-core/HOVER';
				var DROP = exports.DROP = 'dnd-core/DROP';
				var END_DRAG = exports.END_DRAG = 'dnd-core/END_DRAG';

				function beginDrag(sourceIds) {
					var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { publishSource: true, clientOffset: null };
					var publishSource = options.publishSource,
						clientOffset = options.clientOffset,
						getSourceClientOffset = options.getSourceClientOffset;

					(0, _invariant2.default)((0, _isArray2.default)(sourceIds), 'Expected sourceIds to be an array.');

					var monitor = this.getMonitor();
					var registry = this.getRegistry();
					(0, _invariant2.default)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');

					for (var i = 0; i < sourceIds.length; i++) {
						(0, _invariant2.default)(registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
					}

					var sourceId = null;
					for (var _i = sourceIds.length - 1; _i >= 0; _i--) {
						if (monitor.canDragSource(sourceIds[_i])) {
							sourceId = sourceIds[_i];
							break;
						}
					}
					if (sourceId === null) {
						return;
					}

					var sourceClientOffset = null;
					if (clientOffset) {
						(0, _invariant2.default)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
						sourceClientOffset = getSourceClientOffset(sourceId);
					}

					var source = registry.getSource(sourceId);
					var item = source.beginDrag(monitor, sourceId);
					(0, _invariant2.default)((0, _isObject2.default)(item), 'Item must be an object.');

					registry.pinSource(sourceId);

					var itemType = registry.getSourceType(sourceId);
					return {
						type: BEGIN_DRAG,
						itemType: itemType,
						item: item,
						sourceId: sourceId,
						clientOffset: clientOffset,
						sourceClientOffset: sourceClientOffset,
						isSourcePublic: publishSource
					};
				}

				function publishDragSource() {
					var monitor = this.getMonitor();
					if (!monitor.isDragging()) {
						return;
					}

					return { type: PUBLISH_DRAG_SOURCE };
				}

				function hover(targetIdsArg) {
					var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
						_ref$clientOffset = _ref.clientOffset,
						clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;

					(0, _invariant2.default)((0, _isArray2.default)(targetIdsArg), 'Expected targetIds to be an array.');
					var targetIds = targetIdsArg.slice(0);

					var monitor = this.getMonitor();
					var registry = this.getRegistry();
					(0, _invariant2.default)(monitor.isDragging(), 'Cannot call hover while not dragging.');
					(0, _invariant2.default)(!monitor.didDrop(), 'Cannot call hover after drop.');

					// First check invariants.
					for (var i = 0; i < targetIds.length; i++) {
						var targetId = targetIds[i];
						(0, _invariant2.default)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');

						var target = registry.getTarget(targetId);
						(0, _invariant2.default)(target, 'Expected targetIds to be registered.');
					}

					var draggedItemType = monitor.getItemType();

					// Remove those targetIds that don't match the targetType.  This
					// fixes shallow isOver which would only be non-shallow because of
					// non-matching targets.
					for (var _i2 = targetIds.length - 1; _i2 >= 0; _i2--) {
						var _targetId = targetIds[_i2];
						var targetType = registry.getTargetType(_targetId);
						if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
							targetIds.splice(_i2, 1);
						}
					}

					// Finally call hover on all matching targets.
					for (var _i3 = 0; _i3 < targetIds.length; _i3++) {
						var _targetId2 = targetIds[_i3];
						var _target = registry.getTarget(_targetId2);
						_target.hover(monitor, _targetId2);
					}

					return {
						type: HOVER,
						targetIds: targetIds,
						clientOffset: clientOffset
					};
				}

				function drop() {
					var _this = this;

					var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

					var monitor = this.getMonitor();
					var registry = this.getRegistry();
					(0, _invariant2.default)(monitor.isDragging(), 'Cannot call drop while not dragging.');
					(0, _invariant2.default)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');

					var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);

					targetIds.reverse();
					targetIds.forEach(function (targetId, index) {
						var target = registry.getTarget(targetId);

						var dropResult = target.drop(monitor, targetId);
						(0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isObject2.default)(dropResult), 'Drop result must either be an object or undefined.');
						if (typeof dropResult === 'undefined') {
							dropResult = index === 0 ? {} : monitor.getDropResult();
						}

						_this.store.dispatch({
							type: DROP,
							dropResult: _extends({}, options, dropResult)
						});
					});
				}

				function endDrag() {
					var monitor = this.getMonitor();
					var registry = this.getRegistry();
					(0, _invariant2.default)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');

					var sourceId = monitor.getSourceId();
					var source = registry.getSource(sourceId, true);
					source.endDrag(monitor, sourceId);

					registry.unpinSource();

					return { type: END_DRAG };
				}

				/***/
			}),
/* 51 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.addSource = addSource;
				exports.addTarget = addTarget;
				exports.removeSource = removeSource;
				exports.removeTarget = removeTarget;
				var ADD_SOURCE = exports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
				var ADD_TARGET = exports.ADD_TARGET = 'dnd-core/ADD_TARGET';
				var REMOVE_SOURCE = exports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
				var REMOVE_TARGET = exports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';

				function addSource(sourceId) {
					return {
						type: ADD_SOURCE,
						sourceId: sourceId
					};
				}

				function addTarget(targetId) {
					return {
						type: ADD_TARGET,
						targetId: targetId
					};
				}

				function removeSource(sourceId) {
					return {
						type: REMOVE_SOURCE,
						sourceId: sourceId
					};
				}

				function removeTarget(targetId) {
					return {
						type: REMOVE_TARGET,
						targetId: targetId
					};
				}

				/***/
			}),
/* 52 */
/***/ (function (module, exports) {

				/**
				 * A specialized version of `_.map` for arrays without support for iteratee
				 * shorthands.
				 *
				 * @private
				 * @param {Array} [array] The array to iterate over.
				 * @param {Function} iteratee The function invoked per iteration.
				 * @returns {Array} Returns the new mapped array.
				 */
				function arrayMap(array, iteratee) {
					var index = -1,
						length = array == null ? 0 : array.length,
						result = Array(length);

					while (++index < length) {
						result[index] = iteratee(array[index], index, array);
					}
					return result;
				}

				module.exports = arrayMap;


				/***/
			}),
			/* 53 */
			[1823, 74],
			/* 54 */
			[1866, 329],
			/* 55 */
			[1925, 38],
/* 56 */
/***/ (function (module, exports, __webpack_require__) {

				var isArrayLike = __webpack_require__(46),
					isObjectLike = __webpack_require__(29);

				/**
				 * This method is like `_.isArrayLike` except that it also checks if `value`
				 * is an object.
				 *
				 * @static
				 * @memberOf _
				 * @since 4.0.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is an array-like object,
				 *  else `false`.
				 * @example
				 *
				 * _.isArrayLikeObject([1, 2, 3]);
				 * // => true
				 *
				 * _.isArrayLikeObject(document.body.children);
				 * // => true
				 *
				 * _.isArrayLikeObject('abc');
				 * // => false
				 *
				 * _.isArrayLikeObject(_.noop);
				 * // => false
				 */
				function isArrayLikeObject(value) {
					return isObjectLike(value) && isArrayLike(value);
				}

				module.exports = isArrayLikeObject;


				/***/
			}),
/* 57 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = checkDecoratorArguments;
				function checkDecoratorArguments(functionName, signature) {
					if (false) {
						for (var i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i += 1) {
							var arg = arguments.length <= i + 2 ? undefined : arguments[i + 2];
							if (arg && arg.prototype && arg.prototype.render) {
								// eslint-disable-next-line no-console
								console.error('You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
								return;
							}
						}
					}
				}

				/***/
			}),
/* 58 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*!
	                                                                                                                                                                                                                                                                                Copyright (c) 2018 Jed Watson.
	                                                                                                                                                                                                                                                                                Licensed under the MIT License (MIT), see
	                                                                                                                                                                                                                                                                                http://jedwatson.github.io/react-select
	                                                                                                                                                                                                                                                                              */


				var _reactInputAutosize = __webpack_require__(380);

				var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

				var _classnames = __webpack_require__(4);

				var _classnames2 = _interopRequireDefault(_classnames);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _reactDom = __webpack_require__(13);

				var _defaultArrowRenderer = __webpack_require__(164);

				var _defaultArrowRenderer2 = _interopRequireDefault(_defaultArrowRenderer);

				var _defaultClearRenderer = __webpack_require__(165);

				var _defaultClearRenderer2 = _interopRequireDefault(_defaultClearRenderer);

				var _defaultFilterOptions = __webpack_require__(90);

				var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

				var _defaultMenuRenderer = __webpack_require__(91);

				var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

				var _Option = __webpack_require__(162);

				var _Option2 = _interopRequireDefault(_Option);

				var _Value = __webpack_require__(163);

				var _Value2 = _interopRequireDefault(_Value);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

				function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var stringifyValue = function stringifyValue(value) {
					return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
				};

				var stringOrNode = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]);
				var stringOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

				var instanceId = 1;

				var shouldShowValue = function shouldShowValue(state, props) {
					var inputValue = state.inputValue,
						isPseudoFocused = state.isPseudoFocused,
						isFocused = state.isFocused;
					var onSelectResetsInput = props.onSelectResetsInput;


					if (!inputValue) return true;

					if (!onSelectResetsInput) {
						return !(!isFocused && isPseudoFocused || isFocused && !isPseudoFocused);
					}

					return false;
				};

				var shouldShowPlaceholder = function shouldShowPlaceholder(state, props, isOpen) {
					var inputValue = state.inputValue,
						isPseudoFocused = state.isPseudoFocused,
						isFocused = state.isFocused;
					var onSelectResetsInput = props.onSelectResetsInput;


					return !inputValue || !onSelectResetsInput && !isOpen && !isPseudoFocused && !isFocused;
				};

				/**
				 * Retrieve a value from the given options and valueKey
				 * @param {String|Number|Array} value	- the selected value(s)
				 * @param {Object}		 props	- the Select component's props (or nextProps)
				 */
				var expandValue = function expandValue(value, props) {
					var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
					if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
					var options = props.options,
						valueKey = props.valueKey;

					if (!options) return;
					for (var i = 0; i < options.length; i++) {
						if (String(options[i][valueKey]) === String(value)) return options[i];
					}
				};

				var handleRequired = function handleRequired(value, multi) {
					if (!value) return true;
					return multi ? value.length === 0 : Object.keys(value).length === 0;
				};

				var Select = function (_React$Component) {
					_inherits(Select, _React$Component);

					function Select(props) {
						_classCallCheck(this, Select);

						var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

						['clearValue', 'focusOption', 'getOptionLabel', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleTouchMove', 'handleTouchOutside', 'handleTouchStart', 'handleValueClick', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
							return _this[fn] = _this[fn].bind(_this);
						});

						_this.state = {
							inputValue: '',
							isFocused: false,
							isOpen: false,
							isPseudoFocused: false,
							required: false
						};
						return _this;
					}

					_createClass(Select, [{
						key: 'componentWillMount',
						value: function componentWillMount() {
							this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
							var valueArray = this.getValueArray(this.props.value);

							if (this.props.required) {
								this.setState({
									required: handleRequired(valueArray[0], this.props.multi)
								});
							}
						}
					}, {
						key: 'componentDidMount',
						value: function componentDidMount() {
							if (typeof this.props.autofocus !== 'undefined' && typeof console !== 'undefined') {
								console.warn('Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0');
							}
							if (this.props.autoFocus || this.props.autofocus) {
								this.focus();
							}
						}
					}, {
						key: 'componentWillReceiveProps',
						value: function componentWillReceiveProps(nextProps) {
							var valueArray = this.getValueArray(nextProps.value, nextProps);

							if (nextProps.required) {
								this.setState({
									required: handleRequired(valueArray[0], nextProps.multi)
								});
							} else if (this.props.required) {
								// Used to be required but it's not any more
								this.setState({ required: false });
							}

							if (this.state.inputValue && this.props.value !== nextProps.value && nextProps.onSelectResetsInput) {
								this.setState({ inputValue: this.handleInputValueChange('') });
							}
						}
					}, {
						key: 'componentDidUpdate',
						value: function componentDidUpdate(prevProps, prevState) {
							// focus to the selected option
							if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
								var focusedOptionNode = (0, _reactDom.findDOMNode)(this.focused);
								var menuNode = (0, _reactDom.findDOMNode)(this.menu);

								var scrollTop = menuNode.scrollTop;
								var scrollBottom = scrollTop + menuNode.offsetHeight;
								var optionTop = focusedOptionNode.offsetTop;
								var optionBottom = optionTop + focusedOptionNode.offsetHeight;

								if (scrollTop > optionTop || scrollBottom < optionBottom) {
									menuNode.scrollTop = focusedOptionNode.offsetTop;
								}

								// We still set hasScrolledToOption to true even if we didn't
								// actually need to scroll, as we've still confirmed that the
								// option is in view.
								this.hasScrolledToOption = true;
							} else if (!this.state.isOpen) {
								this.hasScrolledToOption = false;
							}

							if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
								this._scrollToFocusedOptionOnUpdate = false;
								var focusedDOM = (0, _reactDom.findDOMNode)(this.focused);
								var menuDOM = (0, _reactDom.findDOMNode)(this.menu);
								var focusedRect = focusedDOM.getBoundingClientRect();
								var menuRect = menuDOM.getBoundingClientRect();
								if (focusedRect.bottom > menuRect.bottom) {
									menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
								} else if (focusedRect.top < menuRect.top) {
									menuDOM.scrollTop = focusedDOM.offsetTop;
								}
							}
							if (this.props.scrollMenuIntoView && this.menuContainer) {
								var menuContainerRect = this.menuContainer.getBoundingClientRect();
								if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
									window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
								}
							}
							if (prevProps.disabled !== this.props.disabled) {
								this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
								this.closeMenu();
							}
							if (prevState.isOpen !== this.state.isOpen) {
								this.toggleTouchOutsideEvent(this.state.isOpen);
								var handler = this.state.isOpen ? this.props.onOpen : this.props.onClose;
								handler && handler();
							}
						}
					}, {
						key: 'componentWillUnmount',
						value: function componentWillUnmount() {
							this.toggleTouchOutsideEvent(false);
						}
					}, {
						key: 'toggleTouchOutsideEvent',
						value: function toggleTouchOutsideEvent(enabled) {
							var eventTogglerName = enabled ? document.addEventListener ? 'addEventListener' : 'attachEvent' : document.removeEventListener ? 'removeEventListener' : 'detachEvent';
							var pref = document.addEventListener ? '' : 'on';

							document[eventTogglerName](pref + 'touchstart', this.handleTouchOutside);
							document[eventTogglerName](pref + 'mousedown', this.handleTouchOutside);
						}
					}, {
						key: 'handleTouchOutside',
						value: function handleTouchOutside(event) {
							// handle touch outside on ios to dismiss menu
							if (this.wrapper && !this.wrapper.contains(event.target)) {
								this.closeMenu();
							}
						}
					}, {
						key: 'focus',
						value: function focus() {
							if (!this.input) return;
							this.input.focus();
						}
					}, {
						key: 'blurInput',
						value: function blurInput() {
							if (!this.input) return;
							this.input.blur();
						}
					}, {
						key: 'handleTouchMove',
						value: function handleTouchMove() {
							// Set a flag that the view is being dragged
							this.dragging = true;
						}
					}, {
						key: 'handleTouchStart',
						value: function handleTouchStart() {
							// Set a flag that the view is not being dragged
							this.dragging = false;
						}
					}, {
						key: 'handleTouchEnd',
						value: function handleTouchEnd(event) {
							// Check if the view is being dragged, In this case
							// we don't want to fire the click event (because the user only wants to scroll)
							if (this.dragging) return;

							// Fire the mouse events
							this.handleMouseDown(event);
						}
					}, {
						key: 'handleTouchEndClearValue',
						value: function handleTouchEndClearValue(event) {
							// Check if the view is being dragged, In this case
							// we don't want to fire the click event (because the user only wants to scroll)
							if (this.dragging) return;

							// Clear the value
							this.clearValue(event);
						}
					}, {
						key: 'handleMouseDown',
						value: function handleMouseDown(event) {
							// if the event was triggered by a mousedown and not the primary
							// button, or if the component is disabled, ignore it.
							if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
								return;
							}

							if (event.target.tagName === 'INPUT') {
								if (!this.state.isFocused) {
									this._openAfterFocus = this.props.openOnClick;
									this.focus();
								} else if (!this.state.isOpen) {
									this.setState({
										isOpen: true,
										isPseudoFocused: false,
										focusedOption: null
									});
								}

								return;
							}

							// prevent default event handlers
							event.preventDefault();

							// for the non-searchable select, toggle the menu
							if (!this.props.searchable) {
								// This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
								this.focus();
								return this.setState({
									isOpen: !this.state.isOpen,
									focusedOption: null
								});
							}

							if (this.state.isFocused) {
								// On iOS, we can get into a state where we think the input is focused but it isn't really,
								// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
								// Call focus() again here to be safe.
								this.focus();

								var input = this.input;
								var toOpen = true;

								if (typeof input.getInput === 'function') {
									// Get the actual DOM input if the ref is an <AutosizeInput /> component
									input = input.getInput();
								}

								// clears the value so that the cursor will be at the end of input when the component re-renders
								input.value = '';

								if (this._focusAfterClear) {
									toOpen = false;
									this._focusAfterClear = false;
								}

								// if the input is focused, ensure the menu is open
								this.setState({
									isOpen: toOpen,
									isPseudoFocused: false,
									focusedOption: null
								});
							} else {
								// otherwise, focus the input and open the menu
								this._openAfterFocus = this.props.openOnClick;
								this.focus();
								this.setState({ focusedOption: null });
							}
						}
					}, {
						key: 'handleMouseDownOnArrow',
						value: function handleMouseDownOnArrow(event) {
							// if the event was triggered by a mousedown and not the primary
							// button, or if the component is disabled, ignore it.
							if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
								return;
							}

							if (this.state.isOpen) {
								// prevent default event handlers
								event.stopPropagation();
								event.preventDefault();
								// close the menu
								this.closeMenu();
							} else {
								// If the menu isn't open, let the event bubble to the main handleMouseDown
								this.setState({
									isOpen: true
								});
							}
						}
					}, {
						key: 'handleMouseDownOnMenu',
						value: function handleMouseDownOnMenu(event) {
							// if the event was triggered by a mousedown and not the primary
							// button, or if the component is disabled, ignore it.
							if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
								return;
							}

							event.stopPropagation();
							event.preventDefault();

							this._openAfterFocus = true;
							this.focus();
						}
					}, {
						key: 'closeMenu',
						value: function closeMenu() {
							if (this.props.onCloseResetsInput) {
								this.setState({
									inputValue: this.handleInputValueChange(''),
									isOpen: false,
									isPseudoFocused: this.state.isFocused && !this.props.multi
								});
							} else {
								this.setState({
									isOpen: false,
									isPseudoFocused: this.state.isFocused && !this.props.multi
								});
							}
							this.hasScrolledToOption = false;
						}
					}, {
						key: 'handleInputFocus',
						value: function handleInputFocus(event) {
							if (this.props.disabled) return;

							var toOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
							toOpen = this._focusAfterClear ? false : toOpen; //if focus happens after clear values, don't open dropdown yet.

							if (this.props.onFocus) {
								this.props.onFocus(event);
							}

							this.setState({
								isFocused: true,
								isOpen: !!toOpen
							});

							this._focusAfterClear = false;
							this._openAfterFocus = false;
						}
					}, {
						key: 'handleInputBlur',
						value: function handleInputBlur(event) {
							// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
							if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
								this.focus();
								return;
							}

							if (this.props.onBlur) {
								this.props.onBlur(event);
							}
							var onBlurredState = {
								isFocused: false,
								isOpen: false,
								isPseudoFocused: false
							};
							if (this.props.onBlurResetsInput) {
								onBlurredState.inputValue = this.handleInputValueChange('');
							}
							this.setState(onBlurredState);
						}
					}, {
						key: 'handleInputChange',
						value: function handleInputChange(event) {
							var newInputValue = event.target.value;

							if (this.state.inputValue !== event.target.value) {
								newInputValue = this.handleInputValueChange(newInputValue);
							}

							this.setState({
								inputValue: newInputValue,
								isOpen: true,
								isPseudoFocused: false
							});
						}
					}, {
						key: 'setInputValue',
						value: function setInputValue(newValue) {
							if (this.props.onInputChange) {
								var nextState = this.props.onInputChange(newValue);
								if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
									newValue = '' + nextState;
								}
							}
							this.setState({
								inputValue: newValue
							});
						}
					}, {
						key: 'handleInputValueChange',
						value: function handleInputValueChange(newValue) {
							if (this.props.onInputChange) {
								var nextState = this.props.onInputChange(newValue);
								// Note: != used deliberately here to catch undefined and null
								if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
									newValue = '' + nextState;
								}
							}
							return newValue;
						}
					}, {
						key: 'handleKeyDown',
						value: function handleKeyDown(event) {
							if (this.props.disabled) return;

							if (typeof this.props.onInputKeyDown === 'function') {
								this.props.onInputKeyDown(event);
								if (event.defaultPrevented) {
									return;
								}
							}

							switch (event.keyCode) {
								case 8:
									// backspace
									if (!this.state.inputValue && this.props.backspaceRemoves) {
										event.preventDefault();
										this.popValue();
									}
									break;
								case 9:
									// tab
									if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
										break;
									}
									event.preventDefault();
									this.selectFocusedOption();
									break;
								case 13:
									// enter
									event.preventDefault();
									event.stopPropagation();
									if (this.state.isOpen) {
										this.selectFocusedOption();
									} else {
										this.focusNextOption();
									}
									break;
								case 27:
									// escape
									event.preventDefault();
									if (this.state.isOpen) {
										this.closeMenu();
										event.stopPropagation();
									} else if (this.props.clearable && this.props.escapeClearsValue) {
										this.clearValue(event);
										event.stopPropagation();
									}
									break;
								case 32:
									// space
									if (this.props.searchable) {
										break;
									}
									event.preventDefault();
									if (!this.state.isOpen) {
										this.focusNextOption();
										break;
									}
									event.stopPropagation();
									this.selectFocusedOption();
									break;
								case 38:
									// up
									event.preventDefault();
									this.focusPreviousOption();
									break;
								case 40:
									// down
									event.preventDefault();
									this.focusNextOption();
									break;
								case 33:
									// page up
									event.preventDefault();
									this.focusPageUpOption();
									break;
								case 34:
									// page down
									event.preventDefault();
									this.focusPageDownOption();
									break;
								case 35:
									// end key
									if (event.shiftKey) {
										break;
									}
									event.preventDefault();
									this.focusEndOption();
									break;
								case 36:
									// home key
									if (event.shiftKey) {
										break;
									}
									event.preventDefault();
									this.focusStartOption();
									break;
								case 46:
									// delete
									if (!this.state.inputValue && this.props.deleteRemoves) {
										event.preventDefault();
										this.popValue();
									}
									break;
							}
						}
					}, {
						key: 'handleValueClick',
						value: function handleValueClick(option, event) {
							if (!this.props.onValueClick) return;
							this.props.onValueClick(option, event);
						}
					}, {
						key: 'handleMenuScroll',
						value: function handleMenuScroll(event) {
							if (!this.props.onMenuScrollToBottom) return;
							var target = event.target;

							if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
								//this.props.onMenuScrollToBottom();
							}
						}
					}, {
						key: 'getOptionLabel',
						value: function getOptionLabel(op) {
							return op[this.props.labelKey];
						}

						/**
					 * Turns a value into an array from the given options
					 * @param {String|Number|Array} value		- the value of the select input
					 * @param {Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
					 * @returns	{Array}	the value of the select represented in an array
					 */

					}, {
						key: 'getValueArray',
						value: function getValueArray(value) {
							var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

							/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
							var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
							if (props.multi) {
								if (typeof value === 'string') {
									value = value.split(props.delimiter);
								}
								if (!Array.isArray(value)) {
									if (value === null || value === undefined) return [];
									value = [value];
								}
								return value.map(function (value) {
									return expandValue(value, props);
								}).filter(function (i) {
									return i;
								});
							}
							var expandedValue = expandValue(value, props);
							return expandedValue ? [expandedValue] : [];
						}
					}, {
						key: 'setValue',
						value: function setValue(value) {
							var _this2 = this;

							if (this.props.autoBlur) {
								this.blurInput();
							}
							if (this.props.required) {
								var required = handleRequired(value, this.props.multi);
								this.setState({ required: required });
							}
							if (this.props.simpleValue && value) {
								value = this.props.multi ? value.map(function (i) {
									return i[_this2.props.valueKey];
								}).join(this.props.delimiter) : value[this.props.valueKey];
							}
							if (this.props.onChange) {
								this.props.onChange(value);
							}
						}
					}, {
						key: 'selectValue',
						value: function selectValue(value) {
							var _this3 = this;

							// NOTE: we actually add/set the value in a callback to make sure the
							// input value is empty to avoid styling issues in Chrome
							if (this.props.closeOnSelect) {
								this.hasScrolledToOption = false;
							}
							var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
							if (this.props.multi) {
								this.setState({
									focusedIndex: null,
									inputValue: this.handleInputValueChange(updatedValue),
									isOpen: !this.props.closeOnSelect
								}, function () {
									var valueArray = _this3.getValueArray(_this3.props.value);
									if (valueArray.some(function (i) {
										return i[_this3.props.valueKey] === value[_this3.props.valueKey];
									})) {
										_this3.removeValue(value);
									} else {
										_this3.addValue(value);
									}
								});
							} else {
								this.setState({
									inputValue: this.handleInputValueChange(updatedValue),
									isOpen: !this.props.closeOnSelect,
									isPseudoFocused: this.state.isFocused
								}, function () {
									_this3.setValue(value);
								});
							}
						}
					}, {
						key: 'addValue',
						value: function addValue(value) {
							var valueArray = this.getValueArray(this.props.value);
							var visibleOptions = this._visibleOptions.filter(function (val) {
								return !val.disabled;
							});
							var lastValueIndex = visibleOptions.indexOf(value);
							this.setValue(valueArray.concat(value));
							if (!this.props.closeOnSelect) {
								return;
							}
							if (visibleOptions.length - 1 === lastValueIndex) {
								// the last option was selected; focus the second-last one
								this.focusOption(visibleOptions[lastValueIndex - 1]);
							} else if (visibleOptions.length > lastValueIndex) {
								// focus the option below the selected one
								this.focusOption(visibleOptions[lastValueIndex + 1]);
							}
						}
					}, {
						key: 'popValue',
						value: function popValue() {
							var valueArray = this.getValueArray(this.props.value);
							if (!valueArray.length) return;
							if (valueArray[valueArray.length - 1].clearableValue === false) return;
							this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
						}
					}, {
						key: 'removeValue',
						value: function removeValue(value) {
							var _this4 = this;

							var valueArray = this.getValueArray(this.props.value);
							this.setValue(valueArray.filter(function (i) {
								return i[_this4.props.valueKey] !== value[_this4.props.valueKey];
							}));
							this.focus();
						}
					}, {
						key: 'clearValue',
						value: function clearValue(event) {
							// if the event was triggered by a mousedown and not the primary
							// button, ignore it.
							if (event && event.type === 'mousedown' && event.button !== 0) {
								return;
							}

							event.preventDefault();

							this.setValue(this.getResetValue());
							this.setState({
								inputValue: this.handleInputValueChange(''),
								isOpen: false
							}, this.focus);

							this._focusAfterClear = true;
						}
					}, {
						key: 'getResetValue',
						value: function getResetValue() {
							if (this.props.resetValue !== undefined) {
								return this.props.resetValue;
							} else if (this.props.multi) {
								return [];
							} else {
								return null;
							}
						}
					}, {
						key: 'focusOption',
						value: function focusOption(option) {
							this.setState({
								focusedOption: option
							});
						}
					}, {
						key: 'focusNextOption',
						value: function focusNextOption() {
							this.focusAdjacentOption('next');
						}
					}, {
						key: 'focusPreviousOption',
						value: function focusPreviousOption() {
							this.focusAdjacentOption('previous');
						}
					}, {
						key: 'focusPageUpOption',
						value: function focusPageUpOption() {
							this.focusAdjacentOption('page_up');
						}
					}, {
						key: 'focusPageDownOption',
						value: function focusPageDownOption() {
							this.focusAdjacentOption('page_down');
						}
					}, {
						key: 'focusStartOption',
						value: function focusStartOption() {
							this.focusAdjacentOption('start');
						}
					}, {
						key: 'focusEndOption',
						value: function focusEndOption() {
							this.focusAdjacentOption('end');
						}
					}, {
						key: 'focusAdjacentOption',
						value: function focusAdjacentOption(dir) {
							var options = this._visibleOptions.map(function (option, index) {
								return { option: option, index: index };
							}).filter(function (option) {
								return !option.option.disabled;
							});
							this._scrollToFocusedOptionOnUpdate = true;
							if (!this.state.isOpen) {
								var newState = {
									focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null),
									isOpen: true
								};
								if (this.props.onSelectResetsInput) {
									newState.inputValue = '';
								}
								this.setState(newState);
								return;
							}
							if (!options.length) return;
							var focusedIndex = -1;
							for (var i = 0; i < options.length; i++) {
								if (this._focusedOption === options[i].option) {
									focusedIndex = i;
									break;
								}
							}
							if (dir === 'next' && focusedIndex !== -1) {
								focusedIndex = (focusedIndex + 1) % options.length;
							} else if (dir === 'previous') {
								if (focusedIndex > 0) {
									focusedIndex = focusedIndex - 1;
								} else {
									focusedIndex = options.length - 1;
								}
							} else if (dir === 'start') {
								focusedIndex = 0;
							} else if (dir === 'end') {
								focusedIndex = options.length - 1;
							} else if (dir === 'page_up') {
								var potentialIndex = focusedIndex - this.props.pageSize;
								if (potentialIndex < 0) {
									focusedIndex = 0;
								} else {
									focusedIndex = potentialIndex;
								}
							} else if (dir === 'page_down') {
								var _potentialIndex = focusedIndex + this.props.pageSize;
								if (_potentialIndex > options.length - 1) {
									focusedIndex = options.length - 1;
								} else {
									focusedIndex = _potentialIndex;
								}
							}

							if (focusedIndex === -1) {
								focusedIndex = 0;
							}

							this.setState({
								focusedIndex: options[focusedIndex].index,
								focusedOption: options[focusedIndex].option
							});
						}
					}, {
						key: 'getFocusedOption',
						value: function getFocusedOption() {
							return this._focusedOption;
						}
					}, {
						key: 'selectFocusedOption',
						value: function selectFocusedOption() {
							if (this._focusedOption) {
								return this.selectValue(this._focusedOption);
							}
						}
					}, {
						key: 'renderLoading',
						value: function renderLoading() {
							if (!this.props.isLoading) return;
							return _react2.default.createElement(
								'span',
								{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
								_react2.default.createElement('span', { className: 'Select-loading' })
							);
						}
					}, {
						key: 'renderValue',
						value: function renderValue(valueArray, isOpen) {
							var _this5 = this;

							var renderLabel = this.props.valueRenderer || this.getOptionLabel;
							var ValueComponent = this.props.valueComponent;
							if (!valueArray.length) {
								var showPlaceholder = shouldShowPlaceholder(this.state, this.props, isOpen);
								return showPlaceholder ? _react2.default.createElement(
									'div',
									{ className: 'Select-placeholder' },
									this.props.placeholder
								) : null;
							}
							var onClick = this.props.onValueClick ? this.handleValueClick : null;
							if (this.props.multi) {
								return valueArray.map(function (value, i) {
									return _react2.default.createElement(
										ValueComponent,
										{
											disabled: _this5.props.disabled || value.clearableValue === false,
											id: _this5._instancePrefix + '-value-' + i,
											instancePrefix: _this5._instancePrefix,
											key: 'value-' + i + '-' + value[_this5.props.valueKey],
											onClick: onClick,
											onRemove: _this5.removeValue,
											placeholder: _this5.props.placeholder,
											value: value,
											values: valueArray
										},
										renderLabel(value, i),
										_react2.default.createElement(
											'span',
											{ className: 'Select-aria-only' },
											'\xA0'
										)
									);
								});
							} else if (shouldShowValue(this.state, this.props)) {
								if (isOpen) onClick = null;
								return _react2.default.createElement(
									ValueComponent,
									{
										disabled: this.props.disabled,
										id: this._instancePrefix + '-value-item',
										instancePrefix: this._instancePrefix,
										onClick: onClick,
										placeholder: this.props.placeholder,
										value: valueArray[0]
									},
									renderLabel(valueArray[0])
								);
							}
						}
					}, {
						key: 'renderInput',
						value: function renderInput(valueArray, focusedOptionIndex) {
							var _classNames,
								_this6 = this;

							var className = (0, _classnames2.default)('Select-input', this.props.inputProps.className);
							var isOpen = this.state.isOpen;

							var ariaOwns = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + '-list', isOpen), _defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

							var value = this.state.inputValue;
							if (value && !this.props.onSelectResetsInput && !this.state.isFocused) {
								// it hides input value when it is not focused and was not reset on select
								value = '';
							}

							var inputProps = _extends({}, this.props.inputProps, {
								'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
								'aria-describedby': this.props['aria-describedby'],
								'aria-expanded': '' + isOpen,
								'aria-haspopup': '' + isOpen,
								'aria-label': this.props['aria-label'],
								'aria-labelledby': this.props['aria-labelledby'],
								'aria-owns': ariaOwns,
								onBlur: this.handleInputBlur,
								onChange: this.handleInputChange,
								onFocus: this.handleInputFocus,
								ref: function ref(_ref) {
									return _this6.input = _ref;
								},
								role: 'combobox',
								required: this.state.required,
								tabIndex: this.props.tabIndex,
								value: value
							});

							if (this.props.inputRenderer) {
								return this.props.inputRenderer(inputProps);
							}

							if (this.props.disabled || !this.props.searchable) {
								var divProps = _objectWithoutProperties(this.props.inputProps, []);

								var _ariaOwns = (0, _classnames2.default)(_defineProperty({}, this._instancePrefix + '-list', isOpen));
								return _react2.default.createElement('div', _extends({}, divProps, {
									'aria-expanded': isOpen,
									'aria-owns': _ariaOwns,
									'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
									'aria-disabled': '' + this.props.disabled,
									'aria-label': this.props['aria-label'],
									'aria-labelledby': this.props['aria-labelledby'],
									className: className,
									onBlur: this.handleInputBlur,
									onFocus: this.handleInputFocus,
									ref: function ref(_ref2) {
										return _this6.input = _ref2;
									},
									role: 'combobox',
									style: { border: 0, width: 1, display: 'inline-block' },
									tabIndex: this.props.tabIndex || 0
								}));
							}

							if (this.props.autosize) {
								return _react2.default.createElement(_reactInputAutosize2.default, _extends({ id: this.props.id }, inputProps, { className: className, minWidth: '5' }));
							}
							return _react2.default.createElement(
								'div',
								{ className: className, key: 'input-wrap', style: { display: 'inline-block' } },
								_react2.default.createElement('input', _extends({ id: this.props.id }, inputProps))
							);
						}
					}, {
						key: 'renderClear',
						value: function renderClear() {
							var valueArray = this.getValueArray(this.props.value);
							if (!this.props.clearable || !valueArray.length || this.props.disabled || this.props.isLoading) return;
							var ariaLabel = this.props.multi ? this.props.clearAllText : this.props.clearValueText;
							var clear = this.props.clearRenderer();

							return _react2.default.createElement(
								'span',
								{
									'aria-label': ariaLabel,
									className: 'Select-clear-zone',
									onMouseDown: this.clearValue,
									onTouchEnd: this.handleTouchEndClearValue,
									onTouchMove: this.handleTouchMove,
									onTouchStart: this.handleTouchStart,
									title: ariaLabel
								},
								clear
							);
						}
					}, {
						key: 'renderArrow',
						value: function renderArrow() {
							if (!this.props.arrowRenderer) return;

							var onMouseDown = this.handleMouseDownOnArrow;
							var isOpen = this.state.isOpen;
							var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

							if (!arrow) {
								return null;
							}

							return _react2.default.createElement(
								'span',
								{
									className: 'Select-arrow-zone',
									onMouseDown: onMouseDown
								},
								arrow
							);
						}
					}, {
						key: 'filterOptions',
						value: function filterOptions(excludeOptions) {
							var filterValue = this.state.inputValue;
							var options = this.props.options || [];
							if (this.props.filterOptions) {
								// Maintain backwards compatibility with boolean attribute
								var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _defaultFilterOptions2.default;

								return filterOptions(options, filterValue, excludeOptions, {
									filterOption: this.props.filterOption,
									ignoreAccents: this.props.ignoreAccents,
									ignoreCase: this.props.ignoreCase,
									labelKey: this.props.labelKey,
									matchPos: this.props.matchPos,
									matchProp: this.props.matchProp,
									trimFilter: this.props.trimFilter,
									valueKey: this.props.valueKey
								});
							} else {
								return options;
							}
						}
					}, {
						key: 'onOptionRef',
						value: function onOptionRef(ref, isFocused) {
							if (isFocused) {
								this.focused = ref;
							}
						}
					}, {
						key: 'renderMenu',
						value: function renderMenu(options, valueArray, focusedOption) {
							if (options && options.length) {
								return this.props.menuRenderer({
									focusedOption: focusedOption,
									focusOption: this.focusOption,
									inputValue: this.state.inputValue,
									instancePrefix: this._instancePrefix,
									labelKey: this.props.labelKey,
									onFocus: this.focusOption,
									onOptionRef: this.onOptionRef,
									onSelect: this.selectValue,
									optionClassName: this.props.optionClassName,
									optionComponent: this.props.optionComponent,
									optionRenderer: this.props.optionRenderer || this.getOptionLabel,
									options: options,
									removeValue: this.removeValue,
									selectValue: this.selectValue,
									valueArray: valueArray,
									valueKey: this.props.valueKey
								});
							} else if (this.props.noResultsText) {
								return _react2.default.createElement(
									'div',
									{ className: 'Select-noresults' },
									this.props.noResultsText
								);
							} else {
								return null;
							}
						}
					}, {
						key: 'renderHiddenField',
						value: function renderHiddenField(valueArray) {
							var _this7 = this;

							if (!this.props.name) return;
							if (this.props.joinValues) {
								var value = valueArray.map(function (i) {
									return stringifyValue(i[_this7.props.valueKey]);
								}).join(this.props.delimiter);
								return _react2.default.createElement('input', {
									disabled: this.props.disabled,
									name: this.props.name,
									ref: function ref(_ref3) {
										return _this7.value = _ref3;
									},
									type: 'hidden',
									value: value
								});
							}
							return valueArray.map(function (item, index) {
								return _react2.default.createElement('input', {
									disabled: _this7.props.disabled,
									key: 'hidden.' + index,
									name: _this7.props.name,
									ref: 'value' + index,
									type: 'hidden',
									value: stringifyValue(item[_this7.props.valueKey])
								});
							});
						}
					}, {
						key: 'getFocusableOptionIndex',
						value: function getFocusableOptionIndex(selectedOption) {
							var options = this._visibleOptions;
							if (!options.length) return null;

							var valueKey = this.props.valueKey;
							var focusedOption = this.state.focusedOption || selectedOption;
							if (focusedOption && !focusedOption.disabled) {
								var focusedOptionIndex = -1;
								options.some(function (option, index) {
									var isOptionEqual = option[valueKey] === focusedOption[valueKey];
									if (isOptionEqual) {
										focusedOptionIndex = index;
									}
									return isOptionEqual;
								});
								if (focusedOptionIndex !== -1) {
									return focusedOptionIndex;
								}
							}

							for (var i = 0; i < options.length; i++) {
								if (!options[i].disabled) return i;
							}
							return null;
						}
					}, {
						key: 'renderOuter',
						value: function renderOuter(options, valueArray, focusedOption) {
							var _this8 = this;

							var menu = this.renderMenu(options, valueArray, focusedOption);
							if (!menu) {
								return null;
							}

							return _react2.default.createElement(
								'div',
								{
									ref: function ref(_ref5) {
										return _this8.menuContainer = _ref5;
									}, className: 'Select-menu-outer', style: this.props.menuContainerStyle
								},
								_react2.default.createElement(
									'div',
									{
										className: 'Select-menu',
										id: this._instancePrefix + '-list',
										onMouseDown: this.handleMouseDownOnMenu,
										onScroll: this.handleMenuScroll,
										ref: function ref(_ref4) {
											return _this8.menu = _ref4;
										},
										role: 'listbox',
										style: this.props.menuStyle,
										tabIndex: -1
									},
									menu
								)
							);
						}
					}, {
						key: 'render',
						value: function render() {
							var _this9 = this;

							var valueArray = this.getValueArray(this.props.value);
							var options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
							var isOpen = this.state.isOpen;
							if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
							var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

							var focusedOption = null;
							if (focusedOptionIndex !== null) {
								focusedOption = this._focusedOption = options[focusedOptionIndex];
							} else {
								focusedOption = this._focusedOption = null;
							}
							var className = (0, _classnames2.default)('Select', this.props.className, {
								'has-value': valueArray.length,
								'is-clearable': this.props.clearable,
								'is-disabled': this.props.disabled,
								'is-focused': this.state.isFocused,
								'is-loading': this.props.isLoading,
								'is-open': isOpen,
								'is-pseudo-focused': this.state.isPseudoFocused,
								'is-searchable': this.props.searchable,
								'Select--multi': this.props.multi,
								'Select--rtl': this.props.rtl,
								'Select--single': !this.props.multi
							});

							var removeMessage = null;
							if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
								removeMessage = _react2.default.createElement(
									'span',
									{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
									this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
								);
							}

							return _react2.default.createElement(
								'div',
								{
									ref: function ref(_ref7) {
										return _this9.wrapper = _ref7;
									},
									className: className,
									style: this.props.wrapperStyle
								},
								this.renderHiddenField(valueArray),
								_react2.default.createElement(
									'div',
									{
										ref: function ref(_ref6) {
											return _this9.control = _ref6;
										},
										className: 'Select-control',
										onKeyDown: this.handleKeyDown,
										onMouseDown: this.handleMouseDown,
										onTouchEnd: this.handleTouchEnd,
										onTouchMove: this.handleTouchMove,
										onTouchStart: this.handleTouchStart,
										style: this.props.style
									},
									_react2.default.createElement(
										'div',
										{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
										this.renderValue(valueArray, isOpen),
										this.renderInput(valueArray, focusedOptionIndex)
									),
									removeMessage,
									this.renderLoading(),
									this.renderClear(),
									this.renderArrow()
								),
								isOpen ? this.renderOuter(options, valueArray, focusedOption) : null
							);
						}
					}]);

					return Select;
				}(_react2.default.Component);

				Select.propTypes = {
					'aria-describedby': _propTypes2.default.string, // html id(s) of element(s) that should be used to describe this input (for assistive tech)
					'aria-label': _propTypes2.default.string, // aria label (for assistive tech)
					'aria-labelledby': _propTypes2.default.string, // html id of an element that should be used as the label (for assistive tech)
					arrowRenderer: _propTypes2.default.func, // create the drop-down caret element
					autoBlur: _propTypes2.default.bool, // automatically blur the component when an option is selected
					autoFocus: _propTypes2.default.bool, // autofocus the component on mount
					autofocus: _propTypes2.default.bool, // deprecated; use autoFocus instead
					autosize: _propTypes2.default.bool, // whether to enable autosizing or not
					backspaceRemoves: _propTypes2.default.bool, // whether backspace removes an item if there is no text input
					backspaceToRemoveMessage: _propTypes2.default.string, // message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
					className: _propTypes2.default.string, // className for the outer element
					clearAllText: stringOrNode, // title for the "clear" control when multi: true
					clearRenderer: _propTypes2.default.func, // create clearable x element
					clearValueText: stringOrNode, // title for the "clear" control
					clearable: _propTypes2.default.bool, // should it be possible to reset value
					closeOnSelect: _propTypes2.default.bool, // whether to close the menu when a value is selected
					deleteRemoves: _propTypes2.default.bool, // whether delete removes an item if there is no text input
					delimiter: _propTypes2.default.string, // delimiter to use to join multiple values for the hidden field value
					disabled: _propTypes2.default.bool, // whether the Select is disabled or not
					escapeClearsValue: _propTypes2.default.bool, // whether escape clears the value when the menu is closed
					filterOption: _propTypes2.default.func, // method to filter a single option (option, filterString)
					filterOptions: _propTypes2.default.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
					id: _propTypes2.default.string, // html id to set on the input element for accessibility or tests
					ignoreAccents: _propTypes2.default.bool, // whether to strip diacritics when filtering
					ignoreCase: _propTypes2.default.bool, // whether to perform case-insensitive filtering
					inputProps: _propTypes2.default.object, // custom attributes for the Input
					inputRenderer: _propTypes2.default.func, // returns a custom input component
					instanceId: _propTypes2.default.string, // set the components instanceId
					isLoading: _propTypes2.default.bool, // whether the Select is loading externally or not (such as options being loaded)
					joinValues: _propTypes2.default.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
					labelKey: _propTypes2.default.string, // path of the label value in option objects
					matchPos: _propTypes2.default.string, // (any|start) match the start or entire string when filtering
					matchProp: _propTypes2.default.string, // (any|label|value) which option property to filter on
					menuBuffer: _propTypes2.default.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
					menuContainerStyle: _propTypes2.default.object, // optional style to apply to the menu container
					menuRenderer: _propTypes2.default.func, // renders a custom menu with options
					menuStyle: _propTypes2.default.object, // optional style to apply to the menu
					multi: _propTypes2.default.bool, // multi-value input
					name: _propTypes2.default.string, // generates a hidden <input /> tag with this field name for html forms
					noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
					onBlur: _propTypes2.default.func, // onBlur handler: function (event) {}
					onBlurResetsInput: _propTypes2.default.bool, // whether input is cleared on blur
					onChange: _propTypes2.default.func, // onChange handler: function (newValue) {}
					onClose: _propTypes2.default.func, // fires when the menu is closed
					onCloseResetsInput: _propTypes2.default.bool, // whether input is cleared when menu is closed through the arrow
					onFocus: _propTypes2.default.func, // onFocus handler: function (event) {}
					onInputChange: _propTypes2.default.func, // onInputChange handler: function (inputValue) {}
					onInputKeyDown: _propTypes2.default.func, // input keyDown handler: function (event) {}
					onMenuScrollToBottom: _propTypes2.default.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
					onOpen: _propTypes2.default.func, // fires when the menu is opened
					onSelectResetsInput: _propTypes2.default.bool, // whether input is cleared on select (works only for multiselect)
					onValueClick: _propTypes2.default.func, // onClick handler for value labels: function (value, event) {}
					openOnClick: _propTypes2.default.bool, // boolean to control opening the menu when the control is clicked
					openOnFocus: _propTypes2.default.bool, // always open options menu on focus
					optionClassName: _propTypes2.default.string, // additional class(es) to apply to the <Option /> elements
					optionComponent: _propTypes2.default.func, // option component to render in dropdown
					optionRenderer: _propTypes2.default.func, // optionRenderer: function (option) {}
					options: _propTypes2.default.array, // array of options
					pageSize: _propTypes2.default.number, // number of entries to page when using page up/down keys
					placeholder: stringOrNode, // field placeholder, displayed when there's no value
					removeSelected: _propTypes2.default.bool, // whether the selected option is removed from the dropdown on multi selects
					required: _propTypes2.default.bool, // applies HTML5 required attribute when needed
					resetValue: _propTypes2.default.any, // value to use when you clear the control
					rtl: _propTypes2.default.bool, // set to true in order to use react-select in right-to-left direction
					scrollMenuIntoView: _propTypes2.default.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
					searchable: _propTypes2.default.bool, // whether to enable searching feature or not
					simpleValue: _propTypes2.default.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
					style: _propTypes2.default.object, // optional style to apply to the control
					tabIndex: stringOrNumber, // optional tab index of the control
					tabSelectsValue: _propTypes2.default.bool, // whether to treat tabbing out while focused to be value selection
					trimFilter: _propTypes2.default.bool, // whether to trim whitespace around filter value
					value: _propTypes2.default.any, // initial field value
					valueComponent: _propTypes2.default.func, // value component to render
					valueKey: _propTypes2.default.string, // path of the label value in option objects
					valueRenderer: _propTypes2.default.func, // valueRenderer: function (option) {}
					wrapperStyle: _propTypes2.default.object // optional style to apply to the component wrapper
				};

				Select.defaultProps = {
					arrowRenderer: _defaultArrowRenderer2.default,
					autosize: true,
					backspaceRemoves: true,
					backspaceToRemoveMessage: 'Press backspace to remove {label}',
					clearable: true,
					clearAllText: 'Clear all',
					clearRenderer: _defaultClearRenderer2.default,
					clearValueText: 'Clear value',
					closeOnSelect: true,
					deleteRemoves: true,
					delimiter: ',',
					disabled: false,
					escapeClearsValue: true,
					filterOptions: _defaultFilterOptions2.default,
					ignoreAccents: true,
					ignoreCase: true,
					inputProps: {},
					isLoading: false,
					joinValues: false,
					labelKey: 'label',
					matchPos: 'any',
					matchProp: 'any',
					menuBuffer: 0,
					menuRenderer: _defaultMenuRenderer2.default,
					multi: false,
					noResultsText: 'No results found',
					onBlurResetsInput: true,
					onCloseResetsInput: true,
					onSelectResetsInput: true,
					openOnClick: true,
					optionComponent: _Option2.default,
					pageSize: 5,
					placeholder: 'Select...',
					removeSelected: true,
					required: false,
					rtl: false,
					scrollMenuIntoView: true,
					searchable: true,
					simpleValue: false,
					tabSelectsValue: true,
					trimFilter: true,
					valueComponent: _Value2.default,
					valueKey: 'value'
				};

				exports.default = Select;

				/***/
			}),
/* 59 */,
			/* 60 */
			[1800, 455, 456, 457, 458, 459],
			/* 61 */
			[1815, 19],
			/* 62 */
			[1823, 178],
			/* 63 */
			[1866, 452],
			/* 64 */
			[1925, 26],
/* 65 */
/***/ (function (module, exports, __webpack_require__) {

				var isSymbol = __webpack_require__(97);

				/** Used as references for various `Number` constants. */
				var INFINITY = 1 / 0;

				/**
				 * Converts `value` to a string key if it's not a string or symbol.
				 *
				 * @private
				 * @param {*} value The value to inspect.
				 * @returns {string|symbol} Returns the key.
				 */
				function toKey(value) {
					if (typeof value == 'string' || isSymbol(value)) {
						return value;
					}
					var result = (value + '');
					return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
				}

				module.exports = toKey;


				/***/
			}),
/* 66 */,
			/* 67 */
			[1815, 24],
/* 68 */,
/* 69 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var React = __webpack_require__(2);

				__webpack_require__(76);

				var CheckboxEditor = function (_React$Component) {
					_inherits(CheckboxEditor, _React$Component);

					function CheckboxEditor() {
						var _ref;

						var _temp, _this, _ret;

						_classCallCheck(this, CheckboxEditor);

						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckboxEditor.__proto__ || Object.getPrototypeOf(CheckboxEditor)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
							_this.props.column.onCellChange(_this.props.rowIdx, _this.props.column.key, _this.props.dependentValues, e);
						}, _temp), _possibleConstructorReturn(_this, _ret);
					}

					_createClass(CheckboxEditor, [{
						key: 'render',
						value: function render() {
							var checked = this.props.value != null ? this.props.value : false;
							var checkboxName = 'checkbox' + this.props.rowIdx;
							return React.createElement(
								'div',
								{ className: 'react-grid-checkbox-container checkbox-align', onClick: this.handleChange },
								React.createElement('input', { className: 'react-grid-checkbox'
									,type: 'checkbox', name: checkboxName, checked: checked 
									}),
								React.createElement('label', { htmlFor: checkboxName, className: 'react-grid-checkbox-label' })
							);
						}
					}]);

					return CheckboxEditor;
				}(React.Component);

				CheckboxEditor.propTypes = {
					value: _propTypes2['default'].bool,
					rowIdx: _propTypes2['default'].number,
					column: _propTypes2['default'].shape({
						key: _propTypes2['default'].string,
						onCellChange: _propTypes2['default'].func
					}),
					dependentValues: _propTypes2['default'].object
				};


				module.exports = CheckboxEditor;

				/***/
			}),
/* 70 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var React = __webpack_require__(2);
				var EditorBase = __webpack_require__(47);

				var SimpleTextEditor = function (_EditorBase) {
					_inherits(SimpleTextEditor, _EditorBase);

					function SimpleTextEditor() {
						var _ref;

						var _temp, _this, _ret;

						_classCallCheck(this, SimpleTextEditor);

						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SimpleTextEditor.__proto__ || Object.getPrototypeOf(SimpleTextEditor)).call.apply(_ref, [this].concat(args))), _this), _this.setInputRef = function (input) {
							_this.input = input;
						}, _temp), _possibleConstructorReturn(_this, _ret);
					}

					_createClass(SimpleTextEditor, [{
						key: 'render',
						value: function render() {
							return React.createElement('input', { ref: this.setInputRef, type: 'text', onBlur: this.props.onBlur, className: 'form-control', defaultValue: this.props.value });
						}
					}]);

					return SimpleTextEditor;
				}(EditorBase);

				module.exports = SimpleTextEditor;

				/***/
			}),
			/* 71 */
			[1812, 112, 345, 346],
/* 72 */
/***/ (function (module, exports) {

				/**
				 * The base implementation of `_.unary` without support for storing metadata.
				 *
				 * @private
				 * @param {Function} func The function to cap arguments for.
				 * @returns {Function} Returns the new capped function.
				 */
				function baseUnary(func) {
					return function (value) {
						return func(value);
					};
				}

				module.exports = baseUnary;


				/***/
			}),
/* 73 */
/***/ (function (module, exports) {

				/**
				 * Checks if a `cache` value for `key` exists.
				 *
				 * @private
				 * @param {Object} cache The cache to query.
				 * @param {string} key The key of the entry to check.
				 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
				 */
				function cacheHas(cache, key) {
					return cache.has(key);
				}

				module.exports = cacheHas;


				/***/
			}),
/* 74 */
/***/ (function (module, exports) {

				/**
				 * Performs a
				 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
				 * comparison between two values to determine if they are equivalent.
				 *
				 * @static
				 * @memberOf _
				 * @since 4.0.0
				 * @category Lang
				 * @param {*} value The value to compare.
				 * @param {*} other The other value to compare.
				 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
				 * @example
				 *
				 * var object = { 'a': 1 };
				 * var other = { 'a': 1 };
				 *
				 * _.eq(object, object);
				 * // => true
				 *
				 * _.eq(object, other);
				 * // => false
				 *
				 * _.eq('a', 'a');
				 * // => true
				 *
				 * _.eq('a', Object('a'));
				 * // => false
				 *
				 * _.eq(NaN, NaN);
				 * // => true
				 */
				function eq(value, other) {
					return value === other || (value !== value && other !== other);
				}

				module.exports = eq;


				/***/
			}),
/* 75 */
/***/ (function (module, exports) {

				/**
				 * This method returns the first argument it receives.
				 *
				 * @static
				 * @since 0.1.0
				 * @memberOf _
				 * @category Util
				 * @param {*} value Any value.
				 * @returns {*} Returns `value`.
				 * @example
				 *
				 * var object = { 'a': 1 };
				 *
				 * console.log(_.identity(object) === object);
				 * // => true
				 */
				function identity(value) {
					return value;
				}

				module.exports = identity;


				/***/
			}),
/* 76 */
/***/ (function (module, exports, __webpack_require__) {

				// style-loader: Adds some css to the DOM by adding a <style> tag

				// load the styles
				var content = __webpack_require__(109);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(9)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!../node_modules/css-loader/index.js!./react-data-grid-checkbox.css", function () {
							var newContent = require("!!../node_modules/css-loader/index.js!./react-data-grid-checkbox.css");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () { update(); });
				}

				/***/
			}),
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				__webpack_require__(390);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _reactSelect = __webpack_require__(383);

				var _reactSelect2 = _interopRequireDefault(_reactSelect);

				var _utils = __webpack_require__(5);

				var _ExcelColumn = __webpack_require__(18);

				var _ExcelColumn2 = _interopRequireDefault(_ExcelColumn);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var AutoCompleteFilter = function (_React$Component) {
					_inherits(AutoCompleteFilter, _React$Component);

					function AutoCompleteFilter(props) {
						_classCallCheck(this, AutoCompleteFilter);

						var _this = _possibleConstructorReturn(this, (AutoCompleteFilter.__proto__ || Object.getPrototypeOf(AutoCompleteFilter)).call(this, props));

						_this.getOptions = _this.getOptions.bind(_this);
						_this.handleChange = _this.handleChange.bind(_this);
						_this.filterValues = _this.filterValues.bind(_this);
						_this.state = { options: _this.getOptions(), rawValue: '', placeholder: 'Search' };
						return _this;
					}

					_createClass(AutoCompleteFilter, [{
						key: 'componentWillReceiveProps',
						value: function componentWillReceiveProps(newProps) {
							this.setState({ options: this.getOptions(newProps) });
						}
					}, {
						key: 'getOptions',
						value: function getOptions(newProps) {
							var props = newProps || this.props;
							var options = props.getValidFilterValues(props.column.key);
							options = options.map(function (o) {
								if (typeof o === 'string') {
									return { value: o, label: o };
								}
								return o;
							});
							return options;
						}
					}, {
						key: 'columnValueContainsSearchTerms',
						value: function columnValueContainsSearchTerms(columnValue, filterTermValue) {
							if (columnValue !== undefined && filterTermValue !== undefined) {
								var strColumnValue = columnValue.toString();
								var strFilterTermValue = filterTermValue.toString();
								var checkValueIndex = strColumnValue.trim().toLowerCase().indexOf(strFilterTermValue.trim().toLowerCase());
								return checkValueIndex !== -1 && (checkValueIndex !== 0 || strColumnValue === strFilterTermValue);
							}
							return false;
						}
					}, {
						key: 'filterValues',
						value: function filterValues(row, columnFilter, columnKey) {
							var _this2 = this;

							var include = true;
							if (columnFilter === null) {
								include = false;
							} else if (columnFilter.filterTerm && !(0, _utils.isEmptyArray)(columnFilter.filterTerm)) {
								if (columnFilter.filterTerm.length) {
									include = columnFilter.filterTerm.some(function (filterTerm) {
										return _this2.columnValueContainsSearchTerms(row[columnKey], filterTerm.value) === true;
									});
								} else {
									include = this.columnValueContainsSearchTerms(row[columnKey], columnFilter.filterTerm.value);
								}
							}
							return include;
						}
					}, {
						key: 'handleChange',
						value: function handleChange(value) {
							var filters = value;
							this.setState({ filters: filters });
							this.props.onChange({ filterTerm: filters, column: this.props.column, rawValue: value, filterValues: this.filterValues });
						}
					}, {
						key: 'render',
						value: function render() {
							return _react2['default'].createElement(_reactSelect2['default'], {
								autosize: false,
								name: 'filter-' + this.props.column.key,
								options: this.state.options,
								placeholder: this.state.placeholder,
								onChange: this.handleChange,
								escapeClearsValue: true,
								multi: this.props.multiSelection !== undefined && this.props.multiSelection !== null ? this.props.multiSelection : true,
								value: this.state.filters
							});
						}
					}]);

					return AutoCompleteFilter;
				}(_react2['default'].Component);

				AutoCompleteFilter.propTypes = {
					onChange: _propTypes2['default'].func.isRequired,
					column: _propTypes2['default'].shape(_ExcelColumn2['default']),
					getValidFilterValues: _propTypes2['default'].func,
					multiSelection: _propTypes2['default'].bool
				};

				exports['default'] = AutoCompleteFilter;

				/***/
			}),
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function (module, exports) {

				'use strict';

				exports.__esModule = true;
				exports['default'] = isDisposable;

				function isDisposable(obj) {
					return Boolean(obj && typeof obj.dispose === 'function');
				}

				module.exports = exports['default'];

				/***/
			}),
/* 83 */
/***/ (function (module, exports) {

				'use strict';

				/**
				 * Copyright 2015, Yahoo! Inc.
				 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
				 */
				var REACT_STATICS = {
					childContextTypes: true,
					contextTypes: true,
					defaultProps: true,
					displayName: true,
					getDefaultProps: true,
					getDerivedStateFromProps: true,
					mixins: true,
					propTypes: true,
					type: true
				};

				var KNOWN_STATICS = {
					name: true,
					length: true,
					prototype: true,
					caller: true,
					callee: true,
					arguments: true,
					arity: true
				};

				var defineProperty = Object.defineProperty;
				var getOwnPropertyNames = Object.getOwnPropertyNames;
				var getOwnPropertySymbols = Object.getOwnPropertySymbols;
				var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
				var getPrototypeOf = Object.getPrototypeOf;
				var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

				function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
					if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

						if (objectPrototype) {
							var inheritedComponent = getPrototypeOf(sourceComponent);
							if (inheritedComponent && inheritedComponent !== objectPrototype) {
								hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
							}
						}

						var keys = getOwnPropertyNames(sourceComponent);

						if (getOwnPropertySymbols) {
							keys = keys.concat(getOwnPropertySymbols(sourceComponent));
						}

						for (var i = 0; i < keys.length; ++i) {
							var key = keys[i];
							if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
								var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
								try { // Avoid failures from read-only properties
									defineProperty(targetComponent, key, descriptor);
								} catch (e) { }
							}
						}

						return targetComponent;
					}

					return targetComponent;
				}

				module.exports = hoistNonReactStatics;


				/***/
			}),
/* 84 */
/***/ (function (module, exports, __webpack_require__) {

				var baseIndexOf = __webpack_require__(307);

				/**
				 * A specialized version of `_.includes` for arrays without support for
				 * specifying an index to search from.
				 *
				 * @private
				 * @param {Array} [array] The array to inspect.
				 * @param {*} target The value to search for.
				 * @returns {boolean} Returns `true` if `target` is found, else `false`.
				 */
				function arrayIncludes(array, value) {
					var length = array == null ? 0 : array.length;
					return !!length && baseIndexOf(array, value, 0) > -1;
				}

				module.exports = arrayIncludes;


				/***/
			}),
/* 85 */
/***/ (function (module, exports) {

				/**
				 * This function is like `arrayIncludes` except that it accepts a comparator.
				 *
				 * @private
				 * @param {Array} [array] The array to inspect.
				 * @param {*} target The value to search for.
				 * @param {Function} comparator The comparator invoked per element.
				 * @returns {boolean} Returns `true` if `target` is found, else `false`.
				 */
				function arrayIncludesWith(array, value, comparator) {
					var index = -1,
						length = array == null ? 0 : array.length;

					while (++index < length) {
						if (comparator(value, array[index])) {
							return true;
						}
					}
					return false;
				}

				module.exports = arrayIncludesWith;


				/***/
			}),
/* 86 */,
/* 87 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _actions = __webpack_require__(39);

				var _helpers = __webpack_require__(32);

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var GlobalEventListener = function GlobalEventListener() {
					var _this = this;

					_classCallCheck(this, GlobalEventListener);

					this.handleShowEvent = function (event) {
						for (var id in _this.callbacks) {
							if ((0, _helpers.hasOwnProp)(_this.callbacks, id)) _this.callbacks[id].show(event);
						}
					};

					this.handleHideEvent = function (event) {
						for (var id in _this.callbacks) {
							if ((0, _helpers.hasOwnProp)(_this.callbacks, id)) _this.callbacks[id].hide(event);
						}
					};

					this.register = function (showCallback, hideCallback) {
						var id = (0, _helpers.uniqueId)();

						_this.callbacks[id] = {
							show: showCallback,
							hide: hideCallback
						};

						return id;
					};

					this.unregister = function (id) {
						if (id && _this.callbacks[id]) {
							delete _this.callbacks[id];
						}
					};

					this.callbacks = {};

					if (_helpers.canUseDOM) {
						window.addEventListener(_actions.MENU_SHOW, this.handleShowEvent);
						window.addEventListener(_actions.MENU_HIDE, this.handleHideEvent);
					}
				};

				exports.default = new GlobalEventListener();

				/***/
			}),
/* 88 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var FILE = exports.FILE = '__NATIVE_FILE__';
				var URL = exports.URL = '__NATIVE_URL__';
				var TEXT = exports.TEXT = '__NATIVE_TEXT__';

				/***/
			}),
/* 89 */
/***/ (function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = shallowEqual;
				function shallowEqual(objA, objB) {
					if (objA === objB) {
						return true;
					}

					var keysA = Object.keys(objA);
					var keysB = Object.keys(objB);

					if (keysA.length !== keysB.length) {
						return false;
					}

					// Test for A's keys different from B.
					var hasOwn = Object.prototype.hasOwnProperty;
					for (var i = 0; i < keysA.length; i += 1) {
						if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
							return false;
						}

						var valA = objA[keysA[i]];
						var valB = objB[keysA[i]];

						if (valA !== valB) {
							return false;
						}
					}

					return true;
				}

				/***/
			}),
/* 90 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _stripDiacritics = __webpack_require__(166);

				var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

				var _trim = __webpack_require__(385);

				var _trim2 = _interopRequireDefault(_trim);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				var isValid = function isValid(value) {
					return typeof value !== 'undefined' && value !== null && value !== '';
				};

				var filterOptions = function filterOptions(options, filterValue, excludeOptions, props) {
					if (props.ignoreAccents) {
						filterValue = (0, _stripDiacritics2.default)(filterValue);
					}

					if (props.ignoreCase) {
						filterValue = filterValue.toLowerCase();
					}

					if (props.trimFilter) {
						filterValue = (0, _trim2.default)(filterValue);
					}

					if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
						return i[props.valueKey];
					});

					return options.filter(function (option) {
						if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
						if (props.filterOption) return props.filterOption.call(undefined, option, filterValue);
						if (!filterValue) return true;

						var value = option[props.valueKey];
						var label = option[props.labelKey];
						var hasValue = isValid(value);
						var hasLabel = isValid(label);

						if (!hasValue && !hasLabel) {
							return false;
						}

						var valueTest = hasValue ? String(value) : null;
						var labelTest = hasLabel ? String(label) : null;

						if (props.ignoreAccents) {
							if (valueTest && props.matchProp !== 'label') valueTest = (0, _stripDiacritics2.default)(valueTest);
							if (labelTest && props.matchProp !== 'value') labelTest = (0, _stripDiacritics2.default)(labelTest);
						}

						if (props.ignoreCase) {
							if (valueTest && props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
							if (labelTest && props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
						}

						return props.matchPos === 'start' ? valueTest && props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || labelTest && props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : valueTest && props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || labelTest && props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
					});
				};

				exports.default = filterOptions;

				/***/
			}),
/* 91 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _classnames = __webpack_require__(4);

				var _classnames2 = _interopRequireDefault(_classnames);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				var menuRenderer = function menuRenderer(_ref) {
					var focusedOption = _ref.focusedOption,
						focusOption = _ref.focusOption,
						inputValue = _ref.inputValue,
						instancePrefix = _ref.instancePrefix,
						onFocus = _ref.onFocus,
						onOptionRef = _ref.onOptionRef,
						onSelect = _ref.onSelect,
						optionClassName = _ref.optionClassName,
						optionComponent = _ref.optionComponent,
						optionRenderer = _ref.optionRenderer,
						options = _ref.options,
						removeValue = _ref.removeValue,
						selectValue = _ref.selectValue,
						valueArray = _ref.valueArray,
						valueKey = _ref.valueKey;

					var Option = optionComponent;

					return options.map(function (option, i) {
						var isSelected = valueArray && valueArray.some(function (x) {
							return x[valueKey] === option[valueKey];
						});
						var isFocused = option === focusedOption;
						var optionClass = (0, _classnames2.default)(optionClassName, {
							'Select-option': true,
							'is-selected': isSelected,
							'is-focused': isFocused,
							'is-disabled': option.disabled
						});

						return _react2.default.createElement(
							Option,
							{
								className: optionClass,
								focusOption: focusOption,
								inputValue: inputValue,
								instancePrefix: instancePrefix,
								isDisabled: option.disabled,
								isFocused: isFocused,
								isSelected: isSelected,
								key: 'option-' + i + '-' + option[valueKey],
								onFocus: onFocus,
								onSelect: onSelect,
								option: option,
								optionIndex: i,
								ref: function ref(_ref2) {
									onOptionRef(_ref2, isFocused);
								},
								removeValue: removeValue,
								selectValue: selectValue
							},
							optionRenderer(option, i, inputValue)
						);
					});
				};

				menuRenderer.propTypes = {
					focusOption: _propTypes2.default.func,
					focusedOption: _propTypes2.default.object,
					inputValue: _propTypes2.default.string,
					instancePrefix: _propTypes2.default.string,
					onFocus: _propTypes2.default.func,
					onOptionRef: _propTypes2.default.func,
					onSelect: _propTypes2.default.func,
					optionClassName: _propTypes2.default.string,
					optionComponent: _propTypes2.default.func,
					optionRenderer: _propTypes2.default.func,
					options: _propTypes2.default.array,
					removeValue: _propTypes2.default.func,
					selectValue: _propTypes2.default.func,
					valueArray: _propTypes2.default.array,
					valueKey: _propTypes2.default.string
				};

				exports.default = menuRenderer;

				/***/
			}),
			/* 92 */
			[1803, 26, 19],
			/* 93 */
			[1805, 460, 461, 462, 463, 464],
/* 94 */
/***/ (function (module, exports, __webpack_require__) {

				var isArray = __webpack_require__(20),
					isSymbol = __webpack_require__(97);

				/** Used to match property names within property paths. */
				var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
					reIsPlainProp = /^\w*$/;

				/**
				 * Checks if `value` is a property name and not a property path.
				 *
				 * @private
				 * @param {*} value The value to check.
				 * @param {Object} [object] The object to query keys on.
				 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
				 */
				function isKey(value, object) {
					if (isArray(value)) {
						return false;
					}
					var type = typeof value;
					if (type == 'number' || type == 'symbol' || type == 'boolean' ||
						value == null || isSymbol(value)) {
						return true;
					}
					return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
						(object != null && value in Object(object));
				}

				module.exports = isKey;


				/***/
			}),
/* 95 */
/***/ (function (module, exports) {

				/** Used as references for various `Number` constants. */
				var MAX_SAFE_INTEGER = 9007199254740991;

				/**
				 * Checks if `value` is a valid array-like length.
				 *
				 * **Note:** This method is loosely based on
				 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
				 *
				 * @static
				 * @memberOf _
				 * @since 4.0.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
				 * @example
				 *
				 * _.isLength(3);
				 * // => true
				 *
				 * _.isLength(Number.MIN_VALUE);
				 * // => false
				 *
				 * _.isLength(Infinity);
				 * // => false
				 *
				 * _.isLength('3');
				 * // => false
				 */
				function isLength(value) {
					return typeof value == 'number' &&
						value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
				}

				module.exports = isLength;


				/***/
			}),
			/* 96 */
			23,
/* 97 */
/***/ (function (module, exports, __webpack_require__) {

				var baseGetTag = __webpack_require__(41),
					isObjectLike = __webpack_require__(42);

				/** `Object#toString` result references. */
				var symbolTag = '[object Symbol]';

				/**
				 * Checks if `value` is classified as a `Symbol` primitive or object.
				 *
				 * @static
				 * @memberOf _
				 * @since 4.0.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
				 * @example
				 *
				 * _.isSymbol(Symbol.iterator);
				 * // => true
				 *
				 * _.isSymbol('abc');
				 * // => false
				 */
				function isSymbol(value) {
					return typeof value == 'symbol' ||
						(isObjectLike(value) && baseGetTag(value) == symbolTag);
				}

				module.exports = isSymbol;


				/***/
			}),
/* 98 */
/***/ (function (module, exports, __webpack_require__) {

				var arrayLikeKeys = __webpack_require__(407),
					baseKeys = __webpack_require__(424),
					isArrayLike = __webpack_require__(180);

				/**
				 * Creates an array of the own enumerable property names of `object`.
				 *
				 * **Note:** Non-object values are coerced to objects. See the
				 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
				 * for more details.
				 *
				 * @static
				 * @since 0.1.0
				 * @memberOf _
				 * @category Object
				 * @param {Object} object The object to query.
				 * @returns {Array} Returns the array of property names.
				 * @example
				 *
				 * function Foo() {
				 *   this.a = 1;
				 *   this.b = 2;
				 * }
				 *
				 * Foo.prototype.c = 3;
				 *
				 * _.keys(new Foo);
				 * // => ['a', 'b'] (iteration order is not guaranteed)
				 *
				 * _.keys('hi');
				 * // => ['0', '1']
				 */
				function keys(object) {
					return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
				}

				module.exports = keys;


				/***/
			}),
/* 99 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _ExcelColumn = __webpack_require__(18);

				var _ExcelColumn2 = _interopRequireDefault(_ExcelColumn);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				exports['default'] = { ExcelColumn: _ExcelColumn2['default'] };

				/***/
			}),
/* 100 */
/***/ (function (module, exports, __webpack_require__) {

				var arrayPush = __webpack_require__(198),
					isFlattenable = __webpack_require__(328);

				/**
				 * The base implementation of `_.flatten` with support for restricting flattening.
				 *
				 * @private
				 * @param {Array} array The array to flatten.
				 * @param {number} depth The maximum recursion depth.
				 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
				 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
				 * @param {Array} [result=[]] The initial result value.
				 * @returns {Array} Returns the new flattened array.
				 */
				function baseFlatten(array, depth, predicate, isStrict, result) {
					var index = -1,
						length = array.length;

					predicate || (predicate = isFlattenable);
					result || (result = []);

					while (++index < length) {
						var value = array[index];
						if (depth > 0 && predicate(value)) {
							if (depth > 1) {
								// Recursively flatten arrays (susceptible to call stack limits).
								baseFlatten(value, depth - 1, predicate, isStrict, result);
							} else {
								arrayPush(result, value);
							}
						} else if (!isStrict) {
							result[result.length] = value;
						}
					}
					return result;
				}

				module.exports = baseFlatten;


				/***/
			}),
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function (module, exports, __webpack_require__) {

				// style-loader: Adds some css to the DOM by adding a <style> tag

				// load the styles
				var content = __webpack_require__(108);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(9)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!../node_modules/css-loader/index.js!./react-data-grid-cell.css", function () {
							var newContent = require("!!../node_modules/css-loader/index.js!./react-data-grid-cell.css");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () { update(); });
				}

				/***/
			}),
/* 104 */,
/* 105 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var NONE = exports.NONE = 'none';
				var CHANGE_ROW = exports.CHANGE_ROW = 'changeRow';
				var LOOP_OVER_ROW = exports.LOOP_OVER_ROW = 'loopOverRow';

				/***/
			}),
/* 106 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var SELECT_CELL = exports.SELECT_CELL = 'SELECT_CELL';
				var SELECT_START = exports.SELECT_START = 'SELECT_START';
				var SELECT_UPDATE = exports.SELECT_UPDATE = 'SELECT_UPDATE';
				var SELECT_END = exports.SELECT_END = 'SELECT_END';
				var DRAG_ENTER = exports.DRAG_ENTER = 'DRAG_ENTER';
				var SCROLL_TO_COLUMN = exports.SCROLL_TO_COLUMN = 'SCROLL_TO_COLUMN';

				/***/
			}),
/* 107 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var HEADER = exports.HEADER = 'header';
				var FILTER = exports.FILTER = 'filter';

				/***/
			}),
/* 108 */
/***/ (function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(8)();
				// imports


				// module
				exports.push([module.id, ".react-grid-Cell{background-color:#fff;padding-left:8px;padding-right:8px;border-right:1px solid #eee;border-bottom:1px solid #ddd}.rdg-selected{border:2px solid transparent}.rdg-selected-range{border:1px solid transparent;background-color:transparent30}.moving-element{will-change:transform}.react-grid-Cell--frozen,.react-grid-Cell--frozen:focus{z-index:12}.rdg-last--frozen{border-right:1px solid #ddd;box-shadow:2px 0 5px -2px hsla(0,0%,53%,.3)!important}.react-grid-Cell.has-tooltip:hover{z-index:5}.react-grid-Cell.react-grid-Cell--frozen.has-tooltip:hover{z-index:15}.react-contextmenu--visible{z-index:1000}.react-grid-Cell:not(.editing) .react-grid-Cell__value{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;height:inherit}.react-grid-Cell.readonly{background-color:#000}.react-grid-Cell:hover{background:#eee}.react-grid-cell .form-control-feedback{color:#a94442;position:absolute;top:0;right:10px;z-index:1000000;display:block;width:34px;height:34px}.react-grid-Row.row-selected .react-grid-Cell{background-color:#dbecfa}.react-grid-Cell.editing{padding:0;overflow:visible!important}.react-grid-Cell--frozen.editing{z-index:100}.react-grid-Cell.editing .has-error input{border:2px solid red!important;border-radius:2px!important}.react-grid-Cell__value ul{margin-top:0;margin-bottom:0;display:inline-block}.react-grid-Cell__value .btn-sm{padding:0}.cell-tooltip .cell-tooltip-text{white-space:normal;visibility:hidden;width:150px;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;top:50%;bottom:auto;left:50%;margin-top:15px;margin-left:-75px}.cell-tooltip:hover .cell-tooltip-text{visibility:visible;opacity:.8}.cell-tooltip .cell-tooltip-text:after{content:\" \";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #000}.react-grid-Canvas.opaque .react-grid-Cell.cell-tooltip:hover .cell-tooltip-text{visibility:hidden}.rdg-cell-expand{float:right;display:table;height:100%}.rdg-cell-expand>span{display:table-cell;vertical-align:middle;cursor:pointer}.rdg-child-row-action-cross-last:before,.rdg-child-row-action-cross:before,rdg-child-row-action-cross-last:after,rdg-child-row-action-cross:after{content:\"\";position:absolute;background:grey;height:50%}.rdg-child-row-action-cross:before{left:21px;width:1px;height:100%}.rdg-child-row-action-cross-last:before{left:21px;width:1px}.rdg-child-row-action-cross-last:after,.rdg-child-row-action-cross:after{top:50%;left:20px;height:1px;width:15px;content:\"\";position:absolute;background:grey}.rdg-child-row-action-cross:hover{background:red}.rdg-child-row-btn{position:absolute;cursor:pointer;border:1px solid grey;border-radius:14px;z-index:3;background:#fff}.rdg-child-row-btn div{font-size:12px;text-align:center;line-height:19px;color:grey;height:20px;width:20px;position:absolute;top:60%;left:53%;margin-top:-10px;margin-left:-10px}.rdg-empty-child-row:hover .glyphicon-plus-sign,.rdg-empty-child-row:hover a{color:green}.rdg-child-row-btn .glyphicon-remove-sign:hover{color:red}.last-column .cell-tooltip-text{right:100%;left:0!important}.rdg-cell-action{float:right;height:100%}.rdg-cell-action-last{margin-right:-8px}.rdg-cell-action-button{width:35px;height:100%;text-align:center;position:relative;display:table;color:#4a9de2}.rdg-cell-action-button>span{display:table-cell;vertical-align:middle}.rdg-cell-action-button-toggled,.rdg-cell-action-button:hover{color:#447bbb}.rdg-cell-action-menu{position:absolute;top:100%;z-index:1000;float:left;min-width:160px;padding:5px 0;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;box-shadow:0 0 3px 0 #ccc}.rdg-cell-action-menu>span{display:block;padding:3px 10px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.rdg-cell-action-menu>span:hover{color:#262626;text-decoration:none;background-color:#f5f5f5}", ""]);

				// exports


				/***/
			}),
/* 109 */
/***/ (function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(8)();
				// imports


				// module
				exports.push([module.id, ".radio-custom,.react-grid-checkbox{opacity:0;position:absolute}.radio-custom,.radio-custom-label,.react-grid-checkbox,.react-grid-checkbox-label{display:inline-block;vertical-align:middle;cursor:pointer}.radio-custom-label,.react-grid-checkbox-label{position:relative}.radio-custom+.radio-custom-label:before,.react-grid-checkbox+.react-grid-checkbox-label:before{content:\"\";background:#fff;border:2px solid #ddd;display:inline-block;vertical-align:middle;width:20px;height:20px;text-align:center}.react-grid-checkbox:checked+.react-grid-checkbox-label:before{background:#005295;box-shadow:inset 0 0 0 4px #fff}.radio-custom:focus+.radio-custom-label,.react-grid-checkbox:focus+.react-grid-checkbox-label{outline:1px solid #ddd}.react-grid-HeaderCell input[type=checkbox]{z-index:99999}.react-grid-HeaderCell>.react-grid-checkbox-container{padding:0 10px;height:100%}.react-grid-HeaderCell>.react-grid-checkbox-container>.react-grid-checkbox-label{margin:0;position:relative;top:50%;transform:translateY(-50%)}.radio-custom+.radio-custom-label:before{border-radius:50%}.radio-custom:checked+.radio-custom-label:before{background:#ccc;box-shadow:inset 0 0 0 4px #fff}.checkbox-align{text-align:center}", ""]);

				// exports


				/***/
			}),
/* 110 */
/***/ (function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(8)();
				// imports


				// module
				exports.push([module.id, ".react-grid-Row.row-context-menu .react-grid-Cell,.react-grid-Row:hover .react-grid-Cell{background-color:#f9f9f9}.react-grid-Row:hover .rdg-row-index{display:none}.react-grid-Row:hover .rdg-actions-checkbox{display:block}.react-grid-Row:hover .rdg-drag-row-handle{cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab;width:12px;height:30px;margin-left:0;background-image:url(\"data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjlweCIgaGVpZ2h0PSIyOXB4IiB2aWV3Qm94PSIwIDAgOSAyOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkgKDMxNjY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kcmFnIGljb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQWN0dWFsaXNhdGlvbi12MiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkRlc2t0b3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNS4wMDAwMDAsIC0yNjIuMDAwMDAwKSIgZmlsbD0iI0Q4RDhEOCI+CiAgICAgICAgICAgIDxnIGlkPSJJbnRlcmFjdGlvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LjAwMDAwMCwgMjU4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlJvdy1Db250cm9scyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImRyYWctaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMzAiIGN4PSIyIiBjeT0iMiIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMzAiIGN4PSI3IiBjeT0iMiIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMzAiIGN4PSIyIiBjeT0iNyIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMzAiIGN4PSI3IiBjeT0iNyIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMzAiIGN4PSIyIiBjeT0iMTIiIHI9IjIiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMwIiBjeD0iNyIgY3k9IjEyIiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0zMCIgY3g9IjIiIGN5PSIxNyIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMzAiIGN4PSI3IiBjeT0iMTciIHI9IjIiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMwIiBjeD0iMiIgY3k9IjIyIiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0zMCIgY3g9IjciIGN5PSIyMiIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMzAiIGN4PSIyIiBjeT0iMjciIHI9IjIiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMwIiBjeD0iNyIgY3k9IjI3IiByPSIyIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\");background-repeat:no-repeat}.react-grid-Row.row-selected,.react-grid-Row .row-selected{background-color:#dbecfa}.react-grid-row-group .row-expand-icon:hover{color:#777}.react-grid-row-index{padding:0 18px}.rdg-row-index{display:block;text-align:center}.rdg-row-actions-cell{padding:0}.rdg-actions-checkbox{display:none;text-align:center}.rdg-actions-checkbox.selected{display:block}.rdg-dragging{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.rdg-dragged-row{border-bottom:1px solid #000}.rdg-scrolling{pointer-events:none}", ""]);

				// exports


				/***/
			}),
/* 111 */
/***/ (function (module, exports) {

				/**
				 * Copyright 2013-2014 Facebook, Inc.
				 *
				 * Licensed under the Apache License, Version 2.0 (the "License");
				 * you may not use this file except in compliance with the License.
				 * You may obtain a copy of the License at
				 *
				 * http://www.apache.org/licenses/LICENSE-2.0
				 *
				 * Unless required by applicable law or agreed to in writing, software
				 * distributed under the License is distributed on an "AS IS" BASIS,
				 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
				 * See the License for the specific language governing permissions and
				 * limitations under the License.
				 *
				 */

				"use strict";

				/**
				 * Constructs an enumeration with keys equal to their value.
				 *
				 * For example:
				 *
				 *   var COLORS = keyMirror({blue: null, red: null});
				 *   var myColor = COLORS.blue;
				 *   var isColorValid = !!COLORS[myColor];
				 *
				 * The last line could not be performed if the values of the generated enum were
				 * not equal to their keys.
				 *
				 *   Input:  {key1: val1, key2: val2}
				 *   Output: {key1: key1, key2: key2}
				 *
				 * @param {object} obj
				 * @return {object}
				 */
				var keyMirror = function (obj) {
					var ret = {};
					var key;
					if (!(obj instanceof Object && !Array.isArray(obj))) {
						throw new Error('keyMirror(...): Argument must be an object.');
					}
					for (key in obj) {
						if (!obj.hasOwnProperty(key)) {
							continue;
						}
						ret[key] = key;
					}
					return ret;
				};

				module.exports = keyMirror;


				/***/
			}),
			/* 112 */
			[1805, 336, 337, 338, 339, 340],
/* 113 */
/***/ (function (module, exports) {

				/** Used as references for various `Number` constants. */
				var MAX_SAFE_INTEGER = 9007199254740991;

				/** Used to detect unsigned integer values. */
				var reIsUint = /^(?:0|[1-9]\d*)$/;

				/**
				 * Checks if `value` is a valid array-like index.
				 *
				 * @private
				 * @param {*} value The value to check.
				 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
				 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
				 */
				function isIndex(value, length) {
					var type = typeof value;
					length = length == null ? MAX_SAFE_INTEGER : length;

					return !!length &&
						(type == 'number' ||
							(type != 'symbol' && reIsUint.test(value))) &&
						(value > -1 && value % 1 == 0 && value < length);
				}

				module.exports = isIndex;


				/***/
			}),
/* 114 */
/***/ (function (module, exports, __webpack_require__) {

				var eq = __webpack_require__(74),
					isArrayLike = __webpack_require__(46),
					isIndex = __webpack_require__(113),
					isObject = __webpack_require__(23);

				/**
				 * Checks if the given arguments are from an iteratee call.
				 *
				 * @private
				 * @param {*} value The potential iteratee value argument.
				 * @param {*} index The potential iteratee index or key argument.
				 * @param {*} object The potential iteratee object argument.
				 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
				 *  else `false`.
				 */
				function isIterateeCall(value, index, object) {
					if (!isObject(object)) {
						return false;
					}
					var type = typeof index;
					if (type == 'number'
						? (isArrayLike(object) && isIndex(index, object.length))
						: (type == 'string' && index in object)
					) {
						return eq(object[index], value);
					}
					return false;
				}

				module.exports = isIterateeCall;


				/***/
			}),
/* 115 */
/***/ (function (module, exports) {

				/**
				 * Converts `set` to an array of its values.
				 *
				 * @private
				 * @param {Object} set The set to convert.
				 * @returns {Array} Returns the values.
				 */
				function setToArray(set) {
					var index = -1,
						result = Array(set.size);

					set.forEach(function (value) {
						result[++index] = value;
					});
					return result;
				}

				module.exports = setToArray;


				/***/
			}),
			/* 116 */
			[1940, 309, 29],
			/* 117 */
			95,
/* 118 */
/***/ (function (module, exports, __webpack_require__) {

				/**
				 * Copyright (c) 2013-present, Facebook, Inc.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				'use strict';

				var ReactPropTypesSecret = __webpack_require__(119);

				function emptyFunction() { }

				module.exports = function () {
					function shim(props, propName, componentName, location, propFullName, secret) {
						if (secret === ReactPropTypesSecret) {
							// It is still safe when called from React.
							return;
						}
						var err = new Error(
							'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
							'Use PropTypes.checkPropTypes() to call them. ' +
							'Read more at http://fb.me/use-check-prop-types'
						);
						err.name = 'Invariant Violation';
						throw err;
					};
					shim.isRequired = shim;
					function getShim() {
						return shim;
					};
					// Important!
					// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
					var ReactPropTypes = {
						array: shim,
						bool: shim,
						func: shim,
						number: shim,
						object: shim,
						string: shim,
						symbol: shim,

						any: shim,
						arrayOf: getShim,
						element: shim,
						instanceOf: getShim,
						node: shim,
						objectOf: getShim,
						oneOf: getShim,
						oneOfType: getShim,
						shape: getShim,
						exact: getShim
					};

					ReactPropTypes.checkPropTypes = emptyFunction;
					ReactPropTypes.PropTypes = ReactPropTypes;

					return ReactPropTypes;
				};


				/***/
			}),
/* 119 */
/***/ (function (module, exports) {

				/**
				 * Copyright (c) 2013-present, Facebook, Inc.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				'use strict';

				var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

				module.exports = ReactPropTypesSecret;


				/***/
			}),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _reselect = __webpack_require__(387);

				var _utils = __webpack_require__(5);

				var groupRows = __webpack_require__(223);
				var filterRows = __webpack_require__(222);
				var sortRows = __webpack_require__(225);

				var getInputRows = function getInputRows(state) {
					return state.rows;
				};
				var getFilters = function getFilters(state) {
					return state.filters;
				};
				var getFilteredRows = (0, _reselect.createSelector)([getFilters, getInputRows], function (filters) {
					var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

					if (!filters || (0, _utils.isEmptyObject)(filters)) {
						return rows;
					}
					return filterRows(filters, rows);
				});

				var getSortColumn = function getSortColumn(state) {
					return state.sortColumn;
				};
				var getSortDirection = function getSortDirection(state) {
					return state.sortDirection;
				};
				var getSortedRows = (0, _reselect.createSelector)([getFilteredRows, getSortColumn, getSortDirection], function (rows, sortColumn, sortDirection) {
					if (!sortDirection && !sortColumn) {
						return rows;
					}
					return sortRows(rows, sortColumn, sortDirection);
				});

				var getGroupedColumns = function getGroupedColumns(state) {
					return state.groupBy;
				};
				var getExpandedRows = function getExpandedRows(state) {
					return state.expandedRows;
				};
				var getFlattenedGroupedRows = (0, _reselect.createSelector)([getSortedRows, getGroupedColumns, getExpandedRows], function (rows, groupedColumns) {
					var expandedRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

					if (!groupedColumns || (0, _utils.isEmptyObject)(groupedColumns) || (0, _utils.isEmptyArray)(groupedColumns)) {
						return rows;
					}
					return groupRows(rows, groupedColumns, expandedRows);
				});

				var getSelectedKeys = function getSelectedKeys(state) {
					return state.selectedKeys;
				};
				var getRowKey = function getRowKey(state) {
					return state.rowKey;
				};
				var getSelectedRowsByKey = (0, _reselect.createSelector)([getRowKey, getSelectedKeys, getInputRows], function (rowKey, selectedKeys) {
					var rows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

					return selectedKeys.map(function (k) {
						return rows.filter(function (r) {
							return r[rowKey] === k;
						})[0];
					});
				});

				var Selectors = {
					getRows: getFlattenedGroupedRows,
					getSelectedRowsByKey: getSelectedRowsByKey
				};
				module.exports = Selectors;

				/***/
			}),
/* 128 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _reactDnd = __webpack_require__(25);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _constants = __webpack_require__(11);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var DraggableHeaderCell = function (_Component) {
					_inherits(DraggableHeaderCell, _Component);

					function DraggableHeaderCell() {
						_classCallCheck(this, DraggableHeaderCell);

						return _possibleConstructorReturn(this, (DraggableHeaderCell.__proto__ || Object.getPrototypeOf(DraggableHeaderCell)).apply(this, arguments));
					}

					_createClass(DraggableHeaderCell, [{
						key: 'componentDidMount',
						value: function componentDidMount() {
							var connectDragPreview = this.props.connectDragPreview;

							var img = new Image();
							img.src = './assets/images/drag_column_full.png';
							img.onload = function () {
								return connectDragPreview(img);
							};
						}
					}, {
						key: 'render',
						value: function render() {
							var _props = this.props,
								connectDragSource = _props.connectDragSource,
								isDragging = _props.isDragging;

							if (isDragging) {
								return null;
							}
							return connectDragSource(_react2['default'].createElement(
								'div',
								{ style: { cursor: 'move' } },
								this.props.children
							));
						}
					}]);

					return DraggableHeaderCell;
				}(_react.Component);

				DraggableHeaderCell.propTypes = {
					connectDragSource: _propTypes2['default'].func.isRequired,
					connectDragPreview: _propTypes2['default'].func.isRequired,
					isDragging: _propTypes2['default'].bool.isRequired,
					children: _propTypes2['default'].element.isRequired
				};

				function collect(connect, monitor) {
					return {
						connectDragSource: connect.dragSource(),
						isDragging: monitor.isDragging(),
						connectDragPreview: connect.dragPreview()
					};
				}

				var headerCellSource = {
					beginDrag: function beginDrag(props) {
						return props.column;
					},
					endDrag: function endDrag(props) {
						return props.column;
					}
				};

				exports['default'] = (0, _reactDnd.DragSource)(_constants.DragItemTypes.Column, headerCellSource, collect)(DraggableHeaderCell);

				/***/
			}),
/* 129 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var OWNER_COMPONENT_KEY = 'Owner > component';
				var WASTED_TIME_KEY = 'Wasted time (ms)';
				var WASTED_INSTANCES_KEY = 'Instances';

				var SummaryItemModel = function () {
					function SummaryItemModel(summary) {
						_classCallCheck(this, SummaryItemModel);

						if ((typeof summary === 'undefined' ? 'undefined' : _typeof(summary)) === 'object') {
							this._createModel(summary);
						} else {
							this._createEmptyModel(summary);
						}
					}

					_createClass(SummaryItemModel, [{
						key: '_createModel',
						value: function _createModel(summary) {
							var _getComponentAndOwner2 = this._getComponentAndOwner(summary),
								owner = _getComponentAndOwner2.owner,
								component = _getComponentAndOwner2.component;

							this.owner = owner;
							this.component = component;
							this.wastedInstances = summary[WASTED_INSTANCES_KEY];
							this.wastedTime = summary[WASTED_TIME_KEY];
						}
					}, {
						key: '_createEmptyModel',
						value: function _createEmptyModel(componentName) {
							this.owner = componentName;
							this.component = componentName;
							this.wastedInstances = 0;
							this.wastedTime = 0;
						}
					}, {
						key: '_getComponentAndOwner',
						value: function _getComponentAndOwner(summary) {
							var ownerAndComponent = summary[OWNER_COMPONENT_KEY];
							var splitOwnerComponent = ownerAndComponent.split('>');

							return {
								owner: splitOwnerComponent[0].trim(),
								component: splitOwnerComponent[1].trim()
							};
						}
					}]);

					return SummaryItemModel;
				}();

				exports['default'] = SummaryItemModel;

				/***/
			}),
/* 130 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _reactDnd = __webpack_require__(25);

				var _reactDndHtml5Backend = __webpack_require__(365);

				var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				exports['default'] = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2['default']);

				/***/
			}),
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = dirtyHandlerIds;
				exports.areDirty = areDirty;

				var _xor = __webpack_require__(355);

				var _xor2 = _interopRequireDefault(_xor);

				var _intersection = __webpack_require__(204);

				var _intersection2 = _interopRequireDefault(_intersection);

				var _dragDrop = __webpack_require__(50);

				var _registry = __webpack_require__(51);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				var NONE = [];
				var ALL = [];

				function dirtyHandlerIds() {
					var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;
					var action = arguments[1];
					var dragOperation = arguments[2];

					switch (action.type) {
						case _dragDrop.HOVER:
							break;
						case _registry.ADD_SOURCE:
						case _registry.ADD_TARGET:
						case _registry.REMOVE_TARGET:
						case _registry.REMOVE_SOURCE:
							return NONE;
						case _dragDrop.BEGIN_DRAG:
						case _dragDrop.PUBLISH_DRAG_SOURCE:
						case _dragDrop.END_DRAG:
						case _dragDrop.DROP:
						default:
							return ALL;
					}

					var targetIds = action.targetIds;
					var prevTargetIds = dragOperation.targetIds;

					var result = (0, _xor2.default)(targetIds, prevTargetIds);

					var didChange = false;
					if (result.length === 0) {
						for (var i = 0; i < targetIds.length; i++) {
							if (targetIds[i] !== prevTargetIds[i]) {
								didChange = true;
								break;
							}
						}
					} else {
						didChange = true;
					}

					if (!didChange) {
						return NONE;
					}

					var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
					var innermostTargetId = targetIds[targetIds.length - 1];

					if (prevInnermostTargetId !== innermostTargetId) {
						if (prevInnermostTargetId) {
							result.push(prevInnermostTargetId);
						}
						if (innermostTargetId) {
							result.push(innermostTargetId);
						}
					}

					return result;
				}

				function areDirty(state, handlerIds) {
					if (state === NONE) {
						return false;
					}

					if (state === ALL || typeof handlerIds === 'undefined') {
						return true;
					}

					return (0, _intersection2.default)(handlerIds, state).length > 0;
				}

				/***/
			}),
/* 141 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				exports.default = dragOffset;
				exports.getSourceClientOffset = getSourceClientOffset;
				exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;

				var _dragDrop = __webpack_require__(50);

				var initialState = {
					initialSourceClientOffset: null,
					initialClientOffset: null,
					clientOffset: null
				};

				function areOffsetsEqual(offsetA, offsetB) {
					if (offsetA === offsetB) {
						return true;
					}
					return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
				}

				function dragOffset() {
					var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
					var action = arguments[1];

					switch (action.type) {
						case _dragDrop.BEGIN_DRAG:
							return {
								initialSourceClientOffset: action.sourceClientOffset,
								initialClientOffset: action.clientOffset,
								clientOffset: action.clientOffset
							};
						case _dragDrop.HOVER:
							if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
								return state;
							}
							return _extends({}, state, {
								clientOffset: action.clientOffset
							});
						case _dragDrop.END_DRAG:
						case _dragDrop.DROP:
							return initialState;
						default:
							return state;
					}
				}

				function getSourceClientOffset(state) {
					var clientOffset = state.clientOffset,
						initialClientOffset = state.initialClientOffset,
						initialSourceClientOffset = state.initialSourceClientOffset;

					if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
						return null;
					}
					return {
						x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
						y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
					};
				}

				function getDifferenceFromInitialOffset(state) {
					var clientOffset = state.clientOffset,
						initialClientOffset = state.initialClientOffset;

					if (!clientOffset || !initialClientOffset) {
						return null;
					}
					return {
						x: clientOffset.x - initialClientOffset.x,
						y: clientOffset.y - initialClientOffset.y
					};
				}

				/***/
			}),
/* 142 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = matchesType;

				var _isArray = __webpack_require__(7);

				var _isArray2 = _interopRequireDefault(_isArray);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function matchesType(targetType, draggedItemType) {
					if ((0, _isArray2.default)(targetType)) {
						return targetType.some(function (t) {
							return t === draggedItemType;
						});
					} else {
						return targetType === draggedItemType;
					}
				}

				/***/
			}),
			/* 143 */
			[1800, 331, 332, 333, 334, 335],
/* 144 */
/***/ (function (module, exports, __webpack_require__) {

				var SetCache = __webpack_require__(71),
					arrayIncludes = __webpack_require__(84),
					arrayIncludesWith = __webpack_require__(85),
					arrayMap = __webpack_require__(52),
					baseUnary = __webpack_require__(72),
					cacheHas = __webpack_require__(73);

				/** Used as the size to enable large array optimizations. */
				var LARGE_ARRAY_SIZE = 200;

				/**
				 * The base implementation of methods like `_.difference` without support
				 * for excluding multiple arrays or iteratee shorthands.
				 *
				 * @private
				 * @param {Array} array The array to inspect.
				 * @param {Array} values The values to exclude.
				 * @param {Function} [iteratee] The iteratee invoked per element.
				 * @param {Function} [comparator] The comparator invoked per element.
				 * @returns {Array} Returns the new array of filtered values.
				 */
				function baseDifference(array, values, iteratee, comparator) {
					var index = -1,
						includes = arrayIncludes,
						isCommon = true,
						length = array.length,
						result = [],
						valuesLength = values.length;

					if (!length) {
						return result;
					}
					if (iteratee) {
						values = arrayMap(values, baseUnary(iteratee));
					}
					if (comparator) {
						includes = arrayIncludesWith;
						isCommon = false;
					}
					else if (values.length >= LARGE_ARRAY_SIZE) {
						includes = cacheHas;
						isCommon = false;
						values = new SetCache(values);
					}
					outer:
					while (++index < length) {
						var value = array[index],
							computed = iteratee == null ? value : iteratee(value);

						value = (comparator || value !== 0) ? value : 0;
						if (isCommon && computed === computed) {
							var valuesIndex = valuesLength;
							while (valuesIndex--) {
								if (values[valuesIndex] === computed) {
									continue outer;
								}
							}
							result.push(value);
						}
						else if (!includes(values, computed, comparator)) {
							result.push(value);
						}
					}
					return result;
				}

				module.exports = baseDifference;


				/***/
			}),
/* 145 */
/***/ (function (module, exports, __webpack_require__) {

				var SetCache = __webpack_require__(71),
					arrayIncludes = __webpack_require__(84),
					arrayIncludesWith = __webpack_require__(85),
					cacheHas = __webpack_require__(73),
					createSet = __webpack_require__(319),
					setToArray = __webpack_require__(115);

				/** Used as the size to enable large array optimizations. */
				var LARGE_ARRAY_SIZE = 200;

				/**
				 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
				 *
				 * @private
				 * @param {Array} array The array to inspect.
				 * @param {Function} [iteratee] The iteratee invoked per element.
				 * @param {Function} [comparator] The comparator invoked per element.
				 * @returns {Array} Returns the new duplicate free array.
				 */
				function baseUniq(array, iteratee, comparator) {
					var index = -1,
						includes = arrayIncludes,
						length = array.length,
						isCommon = true,
						result = [],
						seen = result;

					if (comparator) {
						isCommon = false;
						includes = arrayIncludesWith;
					}
					else if (length >= LARGE_ARRAY_SIZE) {
						var set = iteratee ? null : createSet(array);
						if (set) {
							return setToArray(set);
						}
						isCommon = false;
						includes = cacheHas;
						seen = new SetCache;
					}
					else {
						seen = iteratee ? [] : result;
					}
					outer:
					while (++index < length) {
						var value = array[index],
							computed = iteratee ? iteratee(value) : value;

						value = (comparator || value !== 0) ? value : 0;
						if (isCommon && computed === computed) {
							var seenIndex = seen.length;
							while (seenIndex--) {
								if (seen[seenIndex] === computed) {
									continue outer;
								}
							}
							if (iteratee) {
								seen.push(computed);
							}
							result.push(value);
						}
						else if (!includes(seen, computed, comparator)) {
							if (seen !== result) {
								seen.push(computed);
							}
							result.push(value);
						}
					}
					return result;
				}

				module.exports = baseUniq;


				/***/
			}),
/* 146 */
/***/ (function (module, exports, __webpack_require__) {

				/** Detect free variable `global` from Node.js. */
				var freeGlobal = typeof (window) == 'object' && (window) && (window).Object === Object && (window);

				module.exports = freeGlobal;


				/***/
			}),
/* 147 */
/***/ (function (module, exports) {

				/**
				 * This method returns `undefined`.
				 *
				 * @static
				 * @memberOf _
				 * @since 2.3.0
				 * @category Util
				 * @example
				 *
				 * _.times(2, _.noop);
				 * // => [undefined, undefined]
				 */
				function noop() {
					// No operation performed.
				}

				module.exports = noop;


				/***/
			}),
/* 148 */
/***/ (function (module, exports, __webpack_require__) {

				var baseDifference = __webpack_require__(144),
					baseRest = __webpack_require__(34),
					isArrayLikeObject = __webpack_require__(56);

				/**
				 * Creates an array excluding all given values using
				 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
				 * for equality comparisons.
				 *
				 * **Note:** Unlike `_.pull`, this method returns a new array.
				 *
				 * @static
				 * @memberOf _
				 * @since 0.1.0
				 * @category Array
				 * @param {Array} array The array to inspect.
				 * @param {...*} [values] The values to exclude.
				 * @returns {Array} Returns the new array of filtered values.
				 * @see _.difference, _.xor
				 * @example
				 *
				 * _.without([2, 1, 2, 3], 1, 2);
				 * // => [3]
				 */
				var without = baseRest(function (array, values) {
					return isArrayLikeObject(array)
						? baseDifference(array, values)
						: [];
				});

				module.exports = without;


				/***/
			}),
/* 149 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _MenuItem = __webpack_require__(151);

				var _MenuItem2 = _interopRequireDefault(_MenuItem);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var AbstractMenu = function (_Component) {
					_inherits(AbstractMenu, _Component);

					function AbstractMenu(props) {
						_classCallCheck(this, AbstractMenu);

						var _this = _possibleConstructorReturn(this, (AbstractMenu.__proto__ || Object.getPrototypeOf(AbstractMenu)).call(this, props));

						_initialiseProps.call(_this);

						_this.seletedItemRef = null;
						_this.state = {
							selectedItem: null,
							forceSubMenuOpen: false
						};
						return _this;
					}

					return AbstractMenu;
				}(_react.Component);

				AbstractMenu.propTypes = {
					children: _propTypes2.default.node.isRequired
				};

				var _initialiseProps = function _initialiseProps() {
					var _this2 = this;

					this.handleKeyNavigation = function (e) {
						// check for isVisible strictly here as it might be undefined when this code executes in the context of SubMenu
						// but we only need to check when it runs in the ContextMenu context
						if (_this2.state.isVisible === false) {
							return;
						}

						switch (e.keyCode) {
							case 37: // left arrow
							case 27:
								// escape
								e.preventDefault();
								_this2.hideMenu(e);
								break;
							case 38:
								// up arrow
								e.preventDefault();
								_this2.selectChildren(true);
								break;
							case 40:
								// down arrow
								e.preventDefault();
								_this2.selectChildren(false);
								break;
							case 39:
								// right arrow
								_this2.tryToOpenSubMenu(e);
								break;
							case 13:
								// enter
								e.preventDefault();
								_this2.tryToOpenSubMenu(e);
								{
									// determine the selected item is disabled or not
									var disabled = _this2.seletedItemRef && _this2.seletedItemRef.props && _this2.seletedItemRef.props.disabled;

									if (_this2.seletedItemRef && _this2.seletedItemRef.ref instanceof HTMLElement && !disabled) {
										_this2.seletedItemRef.ref.click();
									} else {
										_this2.hideMenu(e);
									}
								}
								break;
							default:
							// do nothing
						}
					};

					this.handleForceClose = function () {
						_this2.setState({ forceSubMenuOpen: false });
					};

					this.tryToOpenSubMenu = function (e) {
						if (_this2.state.selectedItem && _this2.state.selectedItem.type === _this2.getSubMenuType()) {
							e.preventDefault();
							_this2.setState({ forceSubMenuOpen: true });
						}
					};

					this.selectChildren = function (forward) {
						var selectedItem = _this2.state.selectedItem;

						var children = [];
						var childCollector = function childCollector(child) {
							// child can be empty in case you do conditional rendering of components, in which
							// case it should not be accounted for as a real child
							if (!child) {
								return;
							}

							if ([_MenuItem2.default, _this2.getSubMenuType()].indexOf(child.type) < 0) {
								// Maybe the MenuItem or SubMenu is capsuled in a wrapper div or something else
								_react2.default.Children.forEach(child.props.children, childCollector);
							} else if (!child.props.divider) {
								children.push(child);
							}
						};
						_react2.default.Children.forEach(_this2.props.children, childCollector);
						var currentIndex = children.indexOf(selectedItem);
						if (currentIndex < 0) {
							_this2.setState({
								selectedItem: forward ? children[children.length - 1] : children[0],
								forceSubMenuOpen: false
							});
						} else if (forward) {
							_this2.setState({
								selectedItem: children[currentIndex - 1 < 0 ? children.length - 1 : currentIndex - 1],
								forceSubMenuOpen: false
							});
						} else {
							_this2.setState({
								selectedItem: children[currentIndex + 1 < children.length ? currentIndex + 1 : 0],
								forceSubMenuOpen: false
							});
						}
					};

					this.onChildMouseMove = function (child) {
						if (_this2.state.selectedItem !== child) {
							_this2.setState({ selectedItem: child, forceSubMenuOpen: false });
						}
					};

					this.onChildMouseLeave = function () {
						_this2.setState({ selectedItem: null, forceSubMenuOpen: false });
					};

					this.renderChildren = function (children) {
						return _react2.default.Children.map(children, function (child) {
							var props = {};
							if (!_react2.default.isValidElement(child)) return child;
							if ([_MenuItem2.default, _this2.getSubMenuType()].indexOf(child.type) < 0) {
								// Maybe the MenuItem or SubMenu is capsuled in a wrapper div or something else
								props.children = _this2.renderChildren(child.props.children);
								return _react2.default.cloneElement(child, props);
							}
							props.onMouseLeave = _this2.onChildMouseLeave.bind(_this2);
							if (child.type === _this2.getSubMenuType()) {
								// special props for SubMenu only
								props.forceOpen = _this2.state.forceSubMenuOpen && _this2.state.selectedItem === child;
								props.forceClose = _this2.handleForceClose;
								props.parentKeyNavigationHandler = _this2.handleKeyNavigation;
							}
							if (!child.props.divider && _this2.state.selectedItem === child) {
								// special props for selected item only
								props.selected = true;
								props.ref = function (ref) {
									_this2.seletedItemRef = ref;
								};
								return _react2.default.cloneElement(child, props);
							}
							// onMouseMove is only needed for non selected items
							props.onMouseMove = function () {
								return _this2.onChildMouseMove(child);
							};
							return _react2.default.cloneElement(child, props);
						});
					};
				};

				exports.default = AbstractMenu;

				/***/
			}),
/* 150 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _classnames = __webpack_require__(4);

				var _classnames2 = _interopRequireDefault(_classnames);

				var _objectAssign = __webpack_require__(27);

				var _objectAssign2 = _interopRequireDefault(_objectAssign);

				var _actions = __webpack_require__(39);

				var _helpers = __webpack_require__(32);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var ContextMenuTrigger = function (_Component) {
					_inherits(ContextMenuTrigger, _Component);

					function ContextMenuTrigger() {
						var _ref;

						var _temp, _this, _ret;

						_classCallCheck(this, ContextMenuTrigger);

						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContextMenuTrigger.__proto__ || Object.getPrototypeOf(ContextMenuTrigger)).call.apply(_ref, [this].concat(args))), _this), _this.touchHandled = false, _this.handleMouseDown = function (event) {
							if (_this.props.holdToDisplay >= 0 && event.button === 0) {
								event.persist();
								event.stopPropagation();

								_this.mouseDownTimeoutId = setTimeout(function () {
									return _this.handleContextClick(event);
								}, _this.props.holdToDisplay);
							}
							(0, _helpers.callIfExists)(_this.props.attributes.onMouseDown, event);
						}, _this.handleMouseUp = function (event) {
							if (event.button === 0) {
								clearTimeout(_this.mouseDownTimeoutId);
							}
							(0, _helpers.callIfExists)(_this.props.attributes.onMouseUp, event);
						}, _this.handleMouseOut = function (event) {
							if (event.button === 0) {
								clearTimeout(_this.mouseDownTimeoutId);
							}
							(0, _helpers.callIfExists)(_this.props.attributes.onMouseOut, event);
						}, _this.handleTouchstart = function (event) {
							_this.touchHandled = false;

							if (_this.props.holdToDisplay >= 0) {
								event.persist();
								event.stopPropagation();

								_this.touchstartTimeoutId = setTimeout(function () {
									_this.handleContextClick(event);
									_this.touchHandled = true;
								}, _this.props.holdToDisplay);
							}
							(0, _helpers.callIfExists)(_this.props.attributes.onTouchStart, event);
						}, _this.handleTouchEnd = function (event) {
							if (_this.touchHandled) {
								event.preventDefault();
							}
							clearTimeout(_this.touchstartTimeoutId);
							(0, _helpers.callIfExists)(_this.props.attributes.onTouchEnd, event);
						}, _this.handleContextMenu = function (event) {
							_this.handleContextClick(event);
							(0, _helpers.callIfExists)(_this.props.attributes.onContextMenu, event);
						}, _this.handleContextClick = function (event) {
							if (_this.props.disable) return;

							event.preventDefault();
							event.stopPropagation();

							var x = event.clientX || event.touches && event.touches[0].pageX;
							var y = event.clientY || event.touches && event.touches[0].pageY;

							if (_this.props.posX) {
								x -= _this.props.posX;
							}
							if (_this.props.posY) {
								y -= _this.props.posY;
							}

							(0, _actions.hideMenu)();

							var data = (0, _helpers.callIfExists)(_this.props.collect, _this.props);
							var showMenuConfig = {
								position: { x: x, y: y },
								target: _this.elem,
								id: _this.props.id,
								data: data
							};
							if (data && typeof data.then === 'function') {
								// it's promise
								data.then(function (resp) {
									showMenuConfig.data = resp;
									(0, _actions.showMenu)(showMenuConfig);
								});
							} else {
								(0, _actions.showMenu)(showMenuConfig);
							}
						}, _this.elemRef = function (c) {
							_this.elem = c;
						}, _temp), _possibleConstructorReturn(_this, _ret);
					}

					_createClass(ContextMenuTrigger, [{
						key: 'render',
						value: function render() {
							var _props = this.props,
								renderTag = _props.renderTag,
								attributes = _props.attributes,
								children = _props.children;

							var newAttrs = (0, _objectAssign2.default)({}, attributes, {
								className: (0, _classnames2.default)(_helpers.cssClasses.menuWrapper, attributes.className),
								onContextMenu: this.handleContextMenu,
								onMouseDown: this.handleMouseDown,
								onMouseUp: this.handleMouseUp,
								onTouchStart: this.handleTouchstart,
								onTouchEnd: this.handleTouchEnd,
								onMouseOut: this.handleMouseOut,
								ref: this.elemRef
							});

							return _react2.default.createElement(renderTag, newAttrs, children);
						}
					}]);

					return ContextMenuTrigger;
				}(_react.Component);

				ContextMenuTrigger.propTypes = {
					id: _propTypes2.default.string.isRequired,
					children: _propTypes2.default.node.isRequired,
					attributes: _propTypes2.default.object,
					collect: _propTypes2.default.func,
					disable: _propTypes2.default.bool,
					holdToDisplay: _propTypes2.default.number,
					posX: _propTypes2.default.number,
					posY: _propTypes2.default.number,
					renderTag: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
				};
				ContextMenuTrigger.defaultProps = {
					attributes: {},
					collect: function collect() {
						return null;
					},

					disable: false,
					holdToDisplay: 1000,
					renderTag: 'div',
					posX: 0,
					posY: 0
				};
				exports.default = ContextMenuTrigger;

				/***/
			}),
/* 151 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _classnames = __webpack_require__(4);

				var _classnames2 = _interopRequireDefault(_classnames);

				var _objectAssign = __webpack_require__(27);

				var _objectAssign2 = _interopRequireDefault(_objectAssign);

				var _actions = __webpack_require__(39);

				var _helpers = __webpack_require__(32);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var MenuItem = function (_Component) {
					_inherits(MenuItem, _Component);

					function MenuItem() {
						var _ref;

						var _temp, _this, _ret;

						_classCallCheck(this, MenuItem);

						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
							event.preventDefault();

							if (_this.props.disabled || _this.props.divider) return;

							(0, _helpers.callIfExists)(_this.props.onClick, event, (0, _objectAssign2.default)({}, _this.props.data, _helpers.store.data), _helpers.store.target);

							if (_this.props.preventClose) return;

							(0, _actions.hideMenu)();
						}, _temp), _possibleConstructorReturn(_this, _ret);
					}

					_createClass(MenuItem, [{
						key: 'render',
						value: function render() {
							var _cx,
								_this2 = this;

							var _props = this.props,
								disabled = _props.disabled,
								divider = _props.divider,
								children = _props.children,
								attributes = _props.attributes,
								selected = _props.selected;

							var menuItemClassNames = (0, _classnames2.default)(_helpers.cssClasses.menuItem, attributes.className, (_cx = {}, _defineProperty(_cx, (0, _classnames2.default)(_helpers.cssClasses.menuItemDisabled, attributes.disabledClassName), disabled), _defineProperty(_cx, (0, _classnames2.default)(_helpers.cssClasses.menuItemDivider, attributes.dividerClassName), divider), _defineProperty(_cx, (0, _classnames2.default)(_helpers.cssClasses.menuItemSelected, attributes.selectedClassName), selected), _cx));

							return _react2.default.createElement(
								'div',
								_extends({}, attributes, {
									className: menuItemClassNames,
									role: 'menuitem', tabIndex: '-1', 'aria-disabled': disabled ? 'true' : 'false',
									'aria-orientation': divider ? 'horizontal' : null,
									ref: function ref(_ref2) {
										_this2.ref = _ref2;
									},
									onMouseMove: this.props.onMouseMove, onMouseLeave: this.props.onMouseLeave,
									onTouchEnd: this.handleClick, onClick: this.handleClick
								}),
								divider ? null : children
							);
						}
					}]);

					return MenuItem;
				}(_react.Component);

				MenuItem.propTypes = {
					children: _propTypes2.default.node,
					attributes: _propTypes2.default.object,
					data: _propTypes2.default.object,
					disabled: _propTypes2.default.bool,
					divider: _propTypes2.default.bool,
					preventClose: _propTypes2.default.bool,
					onClick: _propTypes2.default.func,
					selected: _propTypes2.default.bool,
					onMouseMove: _propTypes2.default.func,
					onMouseLeave: _propTypes2.default.func
				};
				MenuItem.defaultProps = {
					disabled: false,
					data: {},
					divider: false,
					attributes: {},
					preventClose: false,
					onClick: function onClick() {
						return null;
					},

					children: null,
					selected: false,
					onMouseMove: function onMouseMove() {
						return null;
					},
					onMouseLeave: function onMouseLeave() {
						return null;
					}
				};
				exports.default = MenuItem;

				/***/
			}),
/* 152 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _classnames = __webpack_require__(4);

				var _classnames2 = _interopRequireDefault(_classnames);

				var _objectAssign = __webpack_require__(27);

				var _objectAssign2 = _interopRequireDefault(_objectAssign);

				var _AbstractMenu2 = __webpack_require__(149);

				var _AbstractMenu3 = _interopRequireDefault(_AbstractMenu2);

				var _helpers = __webpack_require__(32);

				var _globalEventListener = __webpack_require__(87);

				var _globalEventListener2 = _interopRequireDefault(_globalEventListener);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var SubMenu = function (_AbstractMenu) {
					_inherits(SubMenu, _AbstractMenu);

					function SubMenu(props) {
						_classCallCheck(this, SubMenu);

						var _this = _possibleConstructorReturn(this, (SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).call(this, props));

						_this.getMenuPosition = function () {
							var _window = window,
								innerWidth = _window.innerWidth,
								innerHeight = _window.innerHeight;

							var rect = _this.subMenu.getBoundingClientRect();
							var position = {};

							if (rect.bottom > innerHeight) {
								position.bottom = 0;
							} else {
								position.top = 0;
							}

							if (rect.right < innerWidth) {
								position.left = '100%';
							} else {
								position.right = '100%';
							}

							return position;
						};

						_this.getRTLMenuPosition = function () {
							var _window2 = window,
								innerHeight = _window2.innerHeight;

							var rect = _this.subMenu.getBoundingClientRect();
							var position = {};

							if (rect.bottom > innerHeight) {
								position.bottom = 0;
							} else {
								position.top = 0;
							}

							if (rect.left < 0) {
								position.left = '100%';
							} else {
								position.right = '100%';
							}

							return position;
						};

						_this.hideMenu = function (e) {
							// avoid closing submenus of a different menu tree
							if (e.detail && e.detail.id && _this.menu && e.detail.id !== _this.menu.id) {
								return;
							}

							if (_this.props.forceOpen) {
								_this.props.forceClose();
							}
							_this.setState({ visible: false, selectedItem: null });
							_this.unregisterHandlers();
						};

						_this.handleClick = function (event) {
							event.preventDefault();

							if (_this.props.disabled) return;

							(0, _helpers.callIfExists)(_this.props.onClick, event, (0, _objectAssign2.default)({}, _this.props.data, _helpers.store.data), _helpers.store.target);
						};

						_this.handleMouseEnter = function () {
							if (_this.closetimer) clearTimeout(_this.closetimer);

							if (_this.props.disabled || _this.state.visible) return;

							_this.opentimer = setTimeout(function () {
								return _this.setState({
									visible: true,
									selectedItem: null
								});
							}, _this.props.hoverDelay);
						};

						_this.handleMouseLeave = function () {
							if (_this.opentimer) clearTimeout(_this.opentimer);

							if (!_this.state.visible) return;

							_this.closetimer = setTimeout(function () {
								return _this.setState({
									visible: false,
									selectedItem: null
								});
							}, _this.props.hoverDelay);
						};

						_this.menuRef = function (c) {
							_this.menu = c;
						};

						_this.subMenuRef = function (c) {
							_this.subMenu = c;
						};

						_this.registerHandlers = function () {
							document.removeEventListener('keydown', _this.props.parentKeyNavigationHandler);
							document.addEventListener('keydown', _this.handleKeyNavigation);
						};

						_this.unregisterHandlers = function (dismounting) {
							document.removeEventListener('keydown', _this.handleKeyNavigation);
							if (!dismounting) {
								document.addEventListener('keydown', _this.props.parentKeyNavigationHandler);
							}
						};

						_this.state = (0, _objectAssign2.default)({}, _this.state, {
							visible: false
						});
						return _this;
					}

					_createClass(SubMenu, [{
						key: 'componentDidMount',
						value: function componentDidMount() {
							this.listenId = _globalEventListener2.default.register(function () { }, this.hideMenu);
						}
					}, {
						key: 'getSubMenuType',
						value: function getSubMenuType() {
							// eslint-disable-line class-methods-use-this
							return SubMenu;
						}
					}, {
						key: 'shouldComponentUpdate',
						value: function shouldComponentUpdate(nextProps, nextState) {
							this.isVisibilityChange = (this.state.visible !== nextState.visible || this.props.forceOpen !== nextProps.forceOpen) && !(this.state.visible && nextProps.forceOpen) && !(this.props.forceOpen && nextState.visible);
							return true;
						}
					}, {
						key: 'componentDidUpdate',
						value: function componentDidUpdate() {
							var _this2 = this;

							if (!this.isVisibilityChange) return;
							if (this.props.forceOpen || this.state.visible) {
								var wrapper = window.requestAnimationFrame || setTimeout;
								wrapper(function () {
									var styles = _this2.props.rtl ? _this2.getRTLMenuPosition() : _this2.getMenuPosition();

									_this2.subMenu.style.removeProperty('top');
									_this2.subMenu.style.removeProperty('bottom');
									_this2.subMenu.style.removeProperty('left');
									_this2.subMenu.style.removeProperty('right');

									if ((0, _helpers.hasOwnProp)(styles, 'top')) _this2.subMenu.style.top = styles.top;
									if ((0, _helpers.hasOwnProp)(styles, 'left')) _this2.subMenu.style.left = styles.left;
									if ((0, _helpers.hasOwnProp)(styles, 'bottom')) _this2.subMenu.style.bottom = styles.bottom;
									if ((0, _helpers.hasOwnProp)(styles, 'right')) _this2.subMenu.style.right = styles.right;
									_this2.subMenu.classList.add(_helpers.cssClasses.menuVisible);

									_this2.registerHandlers();
									_this2.setState({ selectedItem: null });
								});
							} else {
								var cleanup = function cleanup() {
									_this2.subMenu.removeEventListener('transitionend', cleanup);
									_this2.subMenu.style.removeProperty('bottom');
									_this2.subMenu.style.removeProperty('right');
									_this2.subMenu.style.top = 0;
									_this2.subMenu.style.left = '100%';
									_this2.unregisterHandlers();
								};
								this.subMenu.addEventListener('transitionend', cleanup);
								this.subMenu.classList.remove(_helpers.cssClasses.menuVisible);
							}
						}
					}, {
						key: 'componentWillUnmount',
						value: function componentWillUnmount() {
							if (this.listenId) {
								_globalEventListener2.default.unregister(this.listenId);
							}

							if (this.opentimer) clearTimeout(this.opentimer);

							if (this.closetimer) clearTimeout(this.closetimer);

							this.unregisterHandlers(true);
						}
					}, {
						key: 'render',
						value: function render() {
							var _cx;

							var _props = this.props,
								children = _props.children,
								attributes = _props.attributes,
								disabled = _props.disabled,
								title = _props.title,
								selected = _props.selected;
							var visible = this.state.visible;

							var menuProps = {
								ref: this.menuRef,
								onMouseEnter: this.handleMouseEnter,
								onMouseLeave: this.handleMouseLeave,
								className: (0, _classnames2.default)(_helpers.cssClasses.menuItem, _helpers.cssClasses.subMenu, attributes.listClassName),
								style: {
									position: 'relative'
								}
							};
							var menuItemProps = {
								className: (0, _classnames2.default)(_helpers.cssClasses.menuItem, attributes.className, (_cx = {}, _defineProperty(_cx, (0, _classnames2.default)(_helpers.cssClasses.menuItemDisabled, attributes.disabledClassName), disabled), _defineProperty(_cx, (0, _classnames2.default)(_helpers.cssClasses.menuItemActive, attributes.visibleClassName), visible), _defineProperty(_cx, (0, _classnames2.default)(_helpers.cssClasses.menuItemSelected, attributes.selectedClassName), selected), _cx)),
								onMouseMove: this.props.onMouseMove,
								onMouseOut: this.props.onMouseOut,
								onClick: this.handleClick
							};
							var subMenuProps = {
								ref: this.subMenuRef,
								style: {
									position: 'absolute',
									transition: 'opacity 1ms', // trigger transitionend event
									top: 0,
									left: '100%'
								},
								className: (0, _classnames2.default)(_helpers.cssClasses.menu, this.props.className)
							};

							return _react2.default.createElement(
								'nav',
								_extends({}, menuProps, { role: 'menuitem', tabIndex: '-1', 'aria-haspopup': 'true' }),
								_react2.default.createElement(
									'div',
									_extends({}, attributes, menuItemProps),
									title
								),
								_react2.default.createElement(
									'nav',
									_extends({}, subMenuProps, { role: 'menu', tabIndex: '-1' }),
									this.renderChildren(children)
								)
							);
						}
					}]);

					return SubMenu;
				}(_AbstractMenu3.default);

				SubMenu.propTypes = {
					children: _propTypes2.default.node.isRequired,
					attributes: _propTypes2.default.object,
					title: _propTypes2.default.node.isRequired,
					className: _propTypes2.default.string,
					disabled: _propTypes2.default.bool,
					hoverDelay: _propTypes2.default.number,
					rtl: _propTypes2.default.bool,
					selected: _propTypes2.default.bool,
					onMouseMove: _propTypes2.default.func,
					onMouseOut: _propTypes2.default.func,
					forceOpen: _propTypes2.default.bool,
					forceClose: _propTypes2.default.func,
					parentKeyNavigationHandler: _propTypes2.default.func
				};
				SubMenu.defaultProps = {
					disabled: false,
					hoverDelay: 500,
					attributes: {},
					className: '',
					rtl: false,
					selected: false,
					onMouseMove: function onMouseMove() {
						return null;
					},
					onMouseOut: function onMouseOut() {
						return null;
					},
					forceOpen: false,
					forceClose: function forceClose() {
						return null;
					},
					parentKeyNavigationHandler: function parentKeyNavigationHandler() {
						return null;
					}
				};
				exports.default = SubMenu;

				/***/
			}),
/* 153 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.isSafari = exports.isFirefox = undefined;

				var _memoize = __webpack_require__(208);

				var _memoize2 = _interopRequireDefault(_memoize);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				var isFirefox = exports.isFirefox = (0, _memoize2.default)(function () {
					return (/firefox/i.test(navigator.userAgent)
					);
				});
				var isSafari = exports.isSafari = (0, _memoize2.default)(function () {
					return Boolean(window.safari);
				});

				/***/
			}),
/* 154 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.unpackBackendForEs5Users = exports.createChildContext = exports.CHILD_CONTEXT_TYPES = undefined;

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

				exports.default = DragDropContext;

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _dndCore = __webpack_require__(299);

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _hoistNonReactStatics = __webpack_require__(83);

				var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

				var _checkDecoratorArguments = __webpack_require__(57);

				var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var CHILD_CONTEXT_TYPES = exports.CHILD_CONTEXT_TYPES = {
					dragDropManager: _propTypes2.default.object.isRequired
				};

				var createChildContext = exports.createChildContext = function createChildContext(backend, context) {
					return {
						dragDropManager: new _dndCore.DragDropManager(backend, context)
					};
				};

				var unpackBackendForEs5Users = exports.unpackBackendForEs5Users = function unpackBackendForEs5Users(backendOrModule) {
					// Auto-detect ES6 default export for people still using ES5
					var backend = backendOrModule;
					if ((typeof backend === 'undefined' ? 'undefined' : _typeof(backend)) === 'object' && typeof backend.default === 'function') {
						backend = backend.default;
					}
					(0, _invariant2.default)(typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html');
					return backend;
				};

				function DragDropContext(backendOrModule) {
					_checkDecoratorArguments2.default.apply(undefined, ['DragDropContext', 'backend'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params

					var backend = unpackBackendForEs5Users(backendOrModule);
					var childContext = createChildContext(backend);

					return function decorateContext(DecoratedComponent) {
						var _class, _temp;

						var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

						var DragDropContextContainer = (_temp = _class = function (_Component) {
							_inherits(DragDropContextContainer, _Component);

							function DragDropContextContainer() {
								_classCallCheck(this, DragDropContextContainer);

								return _possibleConstructorReturn(this, (DragDropContextContainer.__proto__ || Object.getPrototypeOf(DragDropContextContainer)).apply(this, arguments));
							}

							_createClass(DragDropContextContainer, [{
								key: 'getDecoratedComponentInstance',
								value: function getDecoratedComponentInstance() {
									(0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can not be a stateless component.');
									return this.child;
								}
							}, {
								key: 'getManager',
								value: function getManager() {
									return childContext.dragDropManager;
								}
							}, {
								key: 'getChildContext',
								value: function getChildContext() {
									return childContext;
								}
							}, {
								key: 'render',
								value: function render() {
									var _this2 = this;

									return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, {
										ref: function ref(child) {
											_this2.child = child;
										}
									}));
								}
							}]);

							return DragDropContextContainer;
						}(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragDropContext(' + displayName + ')', _class.childContextTypes = CHILD_CONTEXT_TYPES, _temp);


						return (0, _hoistNonReactStatics2.default)(DragDropContextContainer, DecoratedComponent);
					};
				}

				/***/
			}),
/* 155 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = areOptionsEqual;

				var _shallowEqual = __webpack_require__(89);

				var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function areOptionsEqual(nextOptions, currentOptions) {
					if (currentOptions === nextOptions) {
						return true;
					}

					return currentOptions !== null && nextOptions !== null && (0, _shallowEqual2.default)(currentOptions, nextOptions);
				}

				/***/
			}),
/* 156 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				exports.default = decorateHandler;

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _disposables = __webpack_require__(292);

				var _isPlainObject = __webpack_require__(22);

				var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _hoistNonReactStatics = __webpack_require__(83);

				var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

				var _shallowEqual = __webpack_require__(89);

				var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

				var _shallowEqualScalar = __webpack_require__(158);

				var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var isClassComponent = function isClassComponent(Comp) {
					return Boolean(Comp && Comp.prototype && typeof Comp.prototype.render === 'function');
				};

				function decorateHandler(_ref) {
					var _class, _temp;

					var DecoratedComponent = _ref.DecoratedComponent,
						createHandler = _ref.createHandler,
						createMonitor = _ref.createMonitor,
						createConnector = _ref.createConnector,
						registerHandler = _ref.registerHandler,
						containerDisplayName = _ref.containerDisplayName,
						getType = _ref.getType,
						collect = _ref.collect,
						options = _ref.options;
					var _options$arePropsEqua = options.arePropsEqual,
						arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

					var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

					var DragDropContainer = (_temp = _class = function (_Component) {
						_inherits(DragDropContainer, _Component);

						_createClass(DragDropContainer, [{
							key: 'getHandlerId',
							value: function getHandlerId() {
								return this.handlerId;
							}
						}, {
							key: 'getDecoratedComponentInstance',
							value: function getDecoratedComponentInstance() {
								return this.decoratedComponentInstance;
							}
						}, {
							key: 'shouldComponentUpdate',
							value: function shouldComponentUpdate(nextProps, nextState) {
								return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
							}
						}]);

						function DragDropContainer(props, context) {
							_classCallCheck(this, DragDropContainer);

							var _this = _possibleConstructorReturn(this, (DragDropContainer.__proto__ || Object.getPrototypeOf(DragDropContainer)).call(this, props, context));

							_this.handleChange = _this.handleChange.bind(_this);
							_this.handleChildRef = _this.handleChildRef.bind(_this);

							(0, _invariant2.default)(_typeof(_this.context.dragDropManager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

							_this.manager = _this.context.dragDropManager;
							_this.handlerMonitor = createMonitor(_this.manager);
							_this.handlerConnector = createConnector(_this.manager.getBackend());
							_this.handler = createHandler(_this.handlerMonitor);

							_this.disposable = new _disposables.SerialDisposable();
							_this.receiveProps(props);
							_this.state = _this.getCurrentState();
							_this.dispose();
							return _this;
						}

						_createClass(DragDropContainer, [{
							key: 'componentDidMount',
							value: function componentDidMount() {
								this.isCurrentlyMounted = true;
								this.disposable = new _disposables.SerialDisposable();
								this.currentType = null;
								this.receiveProps(this.props);
								this.handleChange();
							}
						}, {
							key: 'componentWillReceiveProps',
							value: function componentWillReceiveProps(nextProps) {
								if (!arePropsEqual(nextProps, this.props)) {
									this.receiveProps(nextProps);
									this.handleChange();
								}
							}
						}, {
							key: 'componentWillUnmount',
							value: function componentWillUnmount() {
								this.dispose();
								this.isCurrentlyMounted = false;
							}
						}, {
							key: 'receiveProps',
							value: function receiveProps(props) {
								this.handler.receiveProps(props);
								this.receiveType(getType(props));
							}
						}, {
							key: 'receiveType',
							value: function receiveType(type) {
								if (type === this.currentType) {
									return;
								}

								this.currentType = type;

								var _registerHandler = registerHandler(type, this.handler, this.manager),
									handlerId = _registerHandler.handlerId,
									unregister = _registerHandler.unregister;

								this.handlerId = handlerId;
								this.handlerMonitor.receiveHandlerId(handlerId);
								this.handlerConnector.receiveHandlerId(handlerId);

								var globalMonitor = this.manager.getMonitor();
								var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });

								this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
							}
						}, {
							key: 'handleChange',
							value: function handleChange() {
								if (!this.isCurrentlyMounted) {
									return;
								}

								var nextState = this.getCurrentState();
								if (!(0, _shallowEqual2.default)(nextState, this.state)) {
									this.setState(nextState);
								}
							}
						}, {
							key: 'dispose',
							value: function dispose() {
								this.disposable.dispose();
								this.handlerConnector.receiveHandlerId(null);
							}
						}, {
							key: 'handleChildRef',
							value: function handleChildRef(component) {
								this.decoratedComponentInstance = component;
								this.handler.receiveComponent(component);
							}
						}, {
							key: 'getCurrentState',
							value: function getCurrentState() {
								var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);

								if (false) {
									(0, _invariant2.default)((0, _isPlainObject2.default)(nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
								}

								return nextState;
							}
						}, {
							key: 'render',
							value: function render() {
								return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
									ref: isClassComponent(DecoratedComponent) ? this.handleChildRef : null
								}));
							}
						}]);

						return DragDropContainer;
					}(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = containerDisplayName + '(' + displayName + ')', _class.contextTypes = {
						dragDropManager: _propTypes2.default.object.isRequired
					}, _temp);


					return (0, _hoistNonReactStatics2.default)(DragDropContainer, DecoratedComponent);
				}

				/***/
			}),
/* 157 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

				exports.default = isValidType;

				var _isArray = __webpack_require__(7);

				var _isArray2 = _interopRequireDefault(_isArray);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function isValidType(type, allowArray) {
					return typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol' || allowArray && (0, _isArray2.default)(type) && type.every(function (t) {
						return isValidType(t, false);
					});
				}

				/***/
			}),
/* 158 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

				exports.default = shallowEqualScalar;
				function shallowEqualScalar(objA, objB) {
					if (objA === objB) {
						return true;
					}

					if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
						return false;
					}

					var keysA = Object.keys(objA);
					var keysB = Object.keys(objB);

					if (keysA.length !== keysB.length) {
						return false;
					}

					// Test for A's keys different from B.
					var hasOwn = Object.prototype.hasOwnProperty;
					for (var i = 0; i < keysA.length; i += 1) {
						if (!hasOwn.call(objB, keysA[i])) {
							return false;
						}

						var valA = objA[keysA[i]];
						var valB = objB[keysA[i]];

						if (valA !== valB || (typeof valA === 'undefined' ? 'undefined' : _typeof(valA)) === 'object' || (typeof valB === 'undefined' ? 'undefined' : _typeof(valB)) === 'object') {
							return false;
						}
					}

					return true;
				}

				/***/
			}),
/* 159 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = wrapConnectorHooks;

				var _react = __webpack_require__(2);

				var _cloneWithRef = __webpack_require__(379);

				var _cloneWithRef2 = _interopRequireDefault(_cloneWithRef);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function throwIfCompositeComponentElement(element) {
					// Custom components can no longer be wrapped directly in React DnD 2.0
					// so that we don't need to depend on findDOMNode() from react-dom.
					if (typeof element.type === 'string') {
						return;
					}

					var displayName = element.type.displayName || element.type.name || 'the component';

					throw new Error('Only native element nodes can now be passed to React DnD connectors.' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
				}

				function wrapHookToRecognizeElement(hook) {
					return function () {
						var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
						var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

						// When passed a node, call the hook straight away.
						if (!(0, _react.isValidElement)(elementOrNode)) {
							var node = elementOrNode;
							hook(node, options);
							return undefined;
						}

						// If passed a ReactElement, clone it and attach this function as a ref.
						// This helps us achieve a neat API where user doesn't even know that refs
						// are being used under the hood.
						var element = elementOrNode;
						throwIfCompositeComponentElement(element);

						// When no options are passed, use the hook directly
						var ref = options ? function (node) {
							return hook(node, options);
						} : hook;

						return (0, _cloneWithRef2.default)(element, ref);
					};
				}

				function wrapConnectorHooks(hooks) {
					var wrappedHooks = {};

					Object.keys(hooks).forEach(function (key) {
						var hook = hooks[key];
						var wrappedHook = wrapHookToRecognizeElement(hook);
						wrappedHooks[key] = function () {
							return wrappedHook;
						};
					});

					return wrappedHooks;
				}

				/***/
			}),
/* 160 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _Select = __webpack_require__(58);

				var _Select2 = _interopRequireDefault(_Select);

				var _stripDiacritics = __webpack_require__(166);

				var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var propTypes = {
					autoload: _propTypes2.default.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
					cache: _propTypes2.default.any, // object to use to cache results; set to null/false to disable caching
					children: _propTypes2.default.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
					ignoreAccents: _propTypes2.default.bool, // strip diacritics when filtering; defaults to true
					ignoreCase: _propTypes2.default.bool, // perform case-insensitive filtering; defaults to true
					loadOptions: _propTypes2.default.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
					loadingPlaceholder: _propTypes2.default.oneOfType([// replaces the placeholder while options are loading
						_propTypes2.default.string, _propTypes2.default.node]),
					multi: _propTypes2.default.bool, // multi-value input
					noResultsText: _propTypes2.default.oneOfType([// field noResultsText, displayed when no options come back from the server
						_propTypes2.default.string, _propTypes2.default.node]),
					onChange: _propTypes2.default.func, // onChange handler: function (newValue) {}
					onInputChange: _propTypes2.default.func, // optional for keeping track of what is being typed
					options: _propTypes2.default.array.isRequired, // array of options
					placeholder: _propTypes2.default.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
						_propTypes2.default.string, _propTypes2.default.node]),
					searchPromptText: _propTypes2.default.oneOfType([// label to prompt for search input
						_propTypes2.default.string, _propTypes2.default.node]),
					value: _propTypes2.default.any // initial field value
				};

				var defaultCache = {};

				var defaultChildren = function defaultChildren(props) {
					return _react2.default.createElement(_Select2.default, props);
				};

				var defaultProps = {
					autoload: true,
					cache: defaultCache,
					children: defaultChildren,
					ignoreAccents: true,
					ignoreCase: true,
					loadingPlaceholder: 'Loading...',
					options: [],
					searchPromptText: 'Type to search'
				};

				var Async = function (_Component) {
					_inherits(Async, _Component);

					function Async(props, context) {
						_classCallCheck(this, Async);

						var _this = _possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

						_this._cache = props.cache === defaultCache ? {} : props.cache;

						_this.state = {
							inputValue: '',
							isLoading: false,
							options: props.options
						};

						_this.onInputChange = _this.onInputChange.bind(_this);
						return _this;
					}

					_createClass(Async, [{
						key: 'componentDidMount',
						value: function componentDidMount() {
							var autoload = this.props.autoload;


							if (autoload) {
								this.loadOptions('');
							}
						}
					}, {
						key: 'componentWillReceiveProps',
						value: function componentWillReceiveProps(nextProps) {
							if (nextProps.options !== this.props.options) {
								this.setState({
									options: nextProps.options
								});
							}
						}
					}, {
						key: 'componentWillUnmount',
						value: function componentWillUnmount() {
							this._callback = null;
						}
					}, {
						key: 'loadOptions',
						value: function loadOptions(inputValue) {
							var _this2 = this;

							var loadOptions = this.props.loadOptions;

							var cache = this._cache;

							if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
								this._callback = null;

								this.setState({
									isLoading: false,
									options: cache[inputValue]
								});

								return;
							}

							var callback = function callback(error, data) {
								var options = data && data.options || [];

								if (cache) {
									cache[inputValue] = options;
								}

								if (callback === _this2._callback) {
									_this2._callback = null;

									_this2.setState({
										isLoading: false,
										options: options
									});
								}
							};

							// Ignore all but the most recent request
							this._callback = callback;

							var promise = loadOptions(inputValue, callback);
							if (promise) {
								promise.then(function (data) {
									return callback(null, data);
								}, function (error) {
									return callback(error);
								});
							}

							if (this._callback && !this.state.isLoading) {
								this.setState({
									isLoading: true
								});
							}
						}
					}, {
						key: 'onInputChange',
						value: function onInputChange(inputValue) {
							var _props = this.props,
								ignoreAccents = _props.ignoreAccents,
								ignoreCase = _props.ignoreCase,
								onInputChange = _props.onInputChange;

							var newInputValue = inputValue;

							if (onInputChange) {
								var value = onInputChange(newInputValue);
								// Note: != used deliberately here to catch undefined and null
								if (value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
									newInputValue = '' + value;
								}
							}

							var transformedInputValue = newInputValue;

							if (ignoreAccents) {
								transformedInputValue = (0, _stripDiacritics2.default)(transformedInputValue);
							}

							if (ignoreCase) {
								transformedInputValue = transformedInputValue.toLowerCase();
							}

							this.setState({ inputValue: newInputValue });
							this.loadOptions(transformedInputValue);

							// Return new input value, but without applying toLowerCase() to avoid modifying the user's view case of the input while typing.
							return newInputValue;
						}
					}, {
						key: 'noResultsText',
						value: function noResultsText() {
							var _props2 = this.props,
								loadingPlaceholder = _props2.loadingPlaceholder,
								noResultsText = _props2.noResultsText,
								searchPromptText = _props2.searchPromptText;
							var _state = this.state,
								inputValue = _state.inputValue,
								isLoading = _state.isLoading;


							if (isLoading) {
								return loadingPlaceholder;
							}
							if (inputValue && noResultsText) {
								return noResultsText;
							}
							return searchPromptText;
						}
					}, {
						key: 'focus',
						value: function focus() {
							this.select.focus();
						}
					}, {
						key: 'render',
						value: function render() {
							var _this3 = this;

							var _props3 = this.props,
								children = _props3.children,
								loadingPlaceholder = _props3.loadingPlaceholder,
								placeholder = _props3.placeholder;
							var _state2 = this.state,
								isLoading = _state2.isLoading,
								options = _state2.options;


							var props = {
								noResultsText: this.noResultsText(),
								placeholder: isLoading ? loadingPlaceholder : placeholder,
								options: isLoading && loadingPlaceholder ? [] : options,
								ref: function ref(_ref) {
									return _this3.select = _ref;
								}
							};

							return children(_extends({}, this.props, props, {
								isLoading: isLoading,
								onInputChange: this.onInputChange
							}));
						}
					}]);

					return Async;
				}(_react.Component);

				exports.default = Async;


				Async.propTypes = propTypes;
				Async.defaultProps = defaultProps;

				/***/
			}),
/* 161 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _defaultFilterOptions = __webpack_require__(90);

				var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

				var _defaultMenuRenderer = __webpack_require__(91);

				var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

				var _Select = __webpack_require__(58);

				var _Select2 = _interopRequireDefault(_Select);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var CreatableSelect = function (_React$Component) {
					_inherits(CreatableSelect, _React$Component);

					function CreatableSelect(props, context) {
						_classCallCheck(this, CreatableSelect);

						var _this = _possibleConstructorReturn(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));

						_this.filterOptions = _this.filterOptions.bind(_this);
						_this.menuRenderer = _this.menuRenderer.bind(_this);
						_this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
						_this.onInputChange = _this.onInputChange.bind(_this);
						_this.onOptionSelect = _this.onOptionSelect.bind(_this);
						return _this;
					}

					_createClass(CreatableSelect, [{
						key: 'createNewOption',
						value: function createNewOption() {
							var _props = this.props,
								isValidNewOption = _props.isValidNewOption,
								newOptionCreator = _props.newOptionCreator,
								onNewOptionClick = _props.onNewOptionClick,
								_props$options = _props.options,
								options = _props$options === undefined ? [] : _props$options;


							if (isValidNewOption({ label: this.inputValue })) {
								var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
								var _isOptionUnique = this.isOptionUnique({ option: option, options: options });

								// Don't add the same option twice.
								if (_isOptionUnique) {
									if (onNewOptionClick) {
										onNewOptionClick(option);
									} else {
										options.unshift(option);

										this.select.selectValue(option);
									}
								}
							}
						}
					}, {
						key: 'filterOptions',
						value: function filterOptions() {
							var _props2 = this.props,
								filterOptions = _props2.filterOptions,
								isValidNewOption = _props2.isValidNewOption,
								promptTextCreator = _props2.promptTextCreator,
								showNewOptionAtTop = _props2.showNewOptionAtTop;

							// TRICKY Check currently selected options as well.
							// Don't display a create-prompt for a value that's selected.
							// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

							var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

							var filteredOptions = filterOptions.apply(undefined, arguments) || [];

							if (isValidNewOption({ label: this.inputValue })) {
								var _newOptionCreator = this.props.newOptionCreator;


								var option = _newOptionCreator({
									label: this.inputValue,
									labelKey: this.labelKey,
									valueKey: this.valueKey
								});

								// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
								// For multi-selects, this would remove it from the filtered list.
								var _isOptionUnique2 = this.isOptionUnique({
									option: option,
									options: excludeOptions.concat(filteredOptions)
								});

								if (_isOptionUnique2) {
									var prompt = promptTextCreator(this.inputValue);

									this._createPlaceholderOption = _newOptionCreator({
										label: prompt,
										labelKey: this.labelKey,
										valueKey: this.valueKey
									});

									if (showNewOptionAtTop) {
										filteredOptions.unshift(this._createPlaceholderOption);
									} else {
										filteredOptions.push(this._createPlaceholderOption);
									}
								}
							}

							return filteredOptions;
						}
					}, {
						key: 'isOptionUnique',
						value: function isOptionUnique(_ref) {
							var option = _ref.option,
								options = _ref.options;
							var isOptionUnique = this.props.isOptionUnique;


							options = options || this.props.options;

							return isOptionUnique({
								labelKey: this.labelKey,
								option: option,
								options: options,
								valueKey: this.valueKey
							});
						}
					}, {
						key: 'menuRenderer',
						value: function menuRenderer(params) {
							var menuRenderer = this.props.menuRenderer;


							return menuRenderer(_extends({}, params, {
								onSelect: this.onOptionSelect,
								selectValue: this.onOptionSelect
							}));
						}
					}, {
						key: 'onInputChange',
						value: function onInputChange(input) {
							var onInputChange = this.props.onInputChange;

							// This value may be needed in between Select mounts (when this.select is null)

							this.inputValue = input;

							if (onInputChange) {
								this.inputValue = onInputChange(input);
							}

							return this.inputValue;
						}
					}, {
						key: 'onInputKeyDown',
						value: function onInputKeyDown(event) {
							var _props3 = this.props,
								shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
								onInputKeyDown = _props3.onInputKeyDown;

							var focusedOption = this.select.getFocusedOption();

							if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption(event)) {
								this.createNewOption();

								// Prevent decorated Select from doing anything additional with this keyDown event
								event.preventDefault();
							} else if (onInputKeyDown) {
								onInputKeyDown(event);
							}
						}
					}, {
						key: 'onOptionSelect',
						value: function onOptionSelect(option) {
							if (option === this._createPlaceholderOption) {
								this.createNewOption();
							} else {
								this.select.selectValue(option);
							}
						}
					}, {
						key: 'focus',
						value: function focus() {
							this.select.focus();
						}
					}, {
						key: 'render',
						value: function render() {
							var _this2 = this;

							var _props4 = this.props,
								refProp = _props4.ref,
								restProps = _objectWithoutProperties(_props4, ['ref']);

							var children = this.props.children;

							// We can't use destructuring default values to set the children,
							// because it won't apply work if `children` is null. A falsy check is
							// more reliable in real world use-cases.

							if (!children) {
								children = defaultChildren;
							}

							var props = _extends({}, restProps, {
								allowCreate: true,
								filterOptions: this.filterOptions,
								menuRenderer: this.menuRenderer,
								onInputChange: this.onInputChange,
								onInputKeyDown: this.onInputKeyDown,
								ref: function ref(_ref2) {
									_this2.select = _ref2;

									// These values may be needed in between Select mounts (when this.select is null)
									if (_ref2) {
										_this2.labelKey = _ref2.props.labelKey;
										_this2.valueKey = _ref2.props.valueKey;
									}
									if (refProp) {
										refProp(_ref2);
									}
								}
							});

							return children(props);
						}
					}]);

					return CreatableSelect;
				}(_react2.default.Component);

				var defaultChildren = function defaultChildren(props) {
					return _react2.default.createElement(_Select2.default, props);
				};

				var isOptionUnique = function isOptionUnique(_ref3) {
					var option = _ref3.option,
						options = _ref3.options,
						labelKey = _ref3.labelKey,
						valueKey = _ref3.valueKey;

					if (!options || !options.length) {
						return true;
					}

					return options.filter(function (existingOption) {
						return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
					}).length === 0;
				};

				var isValidNewOption = function isValidNewOption(_ref4) {
					var label = _ref4.label;
					return !!label;
				};

				var newOptionCreator = function newOptionCreator(_ref5) {
					var label = _ref5.label,
						labelKey = _ref5.labelKey,
						valueKey = _ref5.valueKey;

					var option = {};
					option[valueKey] = label;
					option[labelKey] = label;
					option.className = 'Select-create-option-placeholder';

					return option;
				};

				var promptTextCreator = function promptTextCreator(label) {
					return 'Create option "' + label + '"';
				};

				var shouldKeyDownEventCreateNewOption = function shouldKeyDownEventCreateNewOption(_ref6) {
					var keyCode = _ref6.keyCode;

					switch (keyCode) {
						case 9: // TAB
						case 13: // ENTER
						case 188:
							// COMMA
							return true;
						default:
							return false;
					}
				};

				// Default prop methods
				CreatableSelect.isOptionUnique = isOptionUnique;
				CreatableSelect.isValidNewOption = isValidNewOption;
				CreatableSelect.newOptionCreator = newOptionCreator;
				CreatableSelect.promptTextCreator = promptTextCreator;
				CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;

				CreatableSelect.defaultProps = {
					filterOptions: _defaultFilterOptions2.default,
					isOptionUnique: isOptionUnique,
					isValidNewOption: isValidNewOption,
					menuRenderer: _defaultMenuRenderer2.default,
					newOptionCreator: newOptionCreator,
					promptTextCreator: promptTextCreator,
					shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption,
					showNewOptionAtTop: true
				};

				CreatableSelect.propTypes = {
					// Child function responsible for creating the inner Select component
					// This component can be used to compose HOCs (eg Creatable and Async)
					// (props: Object): PropTypes.element
					children: _propTypes2.default.func,

					// See Select.propTypes.filterOptions
					filterOptions: _propTypes2.default.any,

					// Searches for any matching option within the set of options.
					// This function prevents duplicate options from being created.
					// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
					isOptionUnique: _propTypes2.default.func,

					// Determines if the current input text represents a valid option.
					// ({ label: string }): boolean
					isValidNewOption: _propTypes2.default.func,

					// See Select.propTypes.menuRenderer
					menuRenderer: _propTypes2.default.any,

					// Factory to create new option.
					// ({ label: string, labelKey: string, valueKey: string }): Object
					newOptionCreator: _propTypes2.default.func,

					// input change handler: function (inputValue) {}
					onInputChange: _propTypes2.default.func,

					// input keyDown handler: function (event) {}
					onInputKeyDown: _propTypes2.default.func,

					// new option click handler: function (option) {}
					onNewOptionClick: _propTypes2.default.func,

					// See Select.propTypes.options
					options: _propTypes2.default.array,

					// Creates prompt/placeholder option text.
					// (filterText: string): string
					promptTextCreator: _propTypes2.default.func,

					ref: _propTypes2.default.func,

					// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
					shouldKeyDownEventCreateNewOption: _propTypes2.default.func,

					// Where to show prompt/placeholder option text.
					// true: new option prompt at top of list (default)
					// false: new option prompt at bottom of list
					showNewOptionAtTop: _propTypes2.default.bool
				};

				exports.default = CreatableSelect;

				/***/
			}),
/* 162 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _classnames = __webpack_require__(4);

				var _classnames2 = _interopRequireDefault(_classnames);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _blockEvent = __webpack_require__(384);

				var _blockEvent2 = _interopRequireDefault(_blockEvent);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var Option = function (_React$Component) {
					_inherits(Option, _React$Component);

					function Option(props) {
						_classCallCheck(this, Option);

						var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

						_this.handleMouseDown = _this.handleMouseDown.bind(_this);
						_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
						_this.handleMouseMove = _this.handleMouseMove.bind(_this);
						_this.handleTouchStart = _this.handleTouchStart.bind(_this);
						_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
						_this.handleTouchMove = _this.handleTouchMove.bind(_this);
						_this.onFocus = _this.onFocus.bind(_this);
						return _this;
					}

					_createClass(Option, [{
						key: 'handleMouseDown',
						value: function handleMouseDown(event) {
							event.preventDefault();
							event.stopPropagation();
							this.props.onSelect(this.props.option, event);
						}
					}, {
						key: 'handleMouseEnter',
						value: function handleMouseEnter(event) {
							this.onFocus(event);
						}
					}, {
						key: 'handleMouseMove',
						value: function handleMouseMove(event) {
							this.onFocus(event);
						}
					}, {
						key: 'handleTouchEnd',
						value: function handleTouchEnd(event) {
							// Check if the view is being dragged, In this case
							// we don't want to fire the click event (because the user only wants to scroll)
							if (this.dragging) return;

							this.handleMouseDown(event);
						}
					}, {
						key: 'handleTouchMove',
						value: function handleTouchMove() {
							// Set a flag that the view is being dragged
							this.dragging = true;
						}
					}, {
						key: 'handleTouchStart',
						value: function handleTouchStart() {
							// Set a flag that the view is not being dragged
							this.dragging = false;
						}
					}, {
						key: 'onFocus',
						value: function onFocus(event) {
							if (!this.props.isFocused) {
								this.props.onFocus(this.props.option, event);
							}
						}
					}, {
						key: 'render',
						value: function render() {
							var _props = this.props,
								option = _props.option,
								instancePrefix = _props.instancePrefix,
								optionIndex = _props.optionIndex;

							var className = (0, _classnames2.default)(this.props.className, option.className);

							return option.disabled ? _react2.default.createElement(
								'div',
								{
									className: className,
									onMouseDown: _blockEvent2.default,
									onClick: _blockEvent2.default
								},
								this.props.children
							) : _react2.default.createElement(
								'div',
								{
									className: className,
									style: option.style,
									role: 'option',
									'aria-label': option.label,
									onMouseDown: this.handleMouseDown,
									onMouseEnter: this.handleMouseEnter,
									onMouseMove: this.handleMouseMove,
									onTouchStart: this.handleTouchStart,
									onTouchMove: this.handleTouchMove,
									onTouchEnd: this.handleTouchEnd,
									id: instancePrefix + '-option-' + optionIndex,
									title: option.title
								},
								this.props.children
							);
						}
					}]);

					return Option;
				}(_react2.default.Component);

				Option.propTypes = {
					children: _propTypes2.default.node,
					className: _propTypes2.default.string, // className (based on mouse position)
					instancePrefix: _propTypes2.default.string.isRequired, // unique prefix for the ids (used for aria)
					isDisabled: _propTypes2.default.bool, // the option is disabled
					isFocused: _propTypes2.default.bool, // the option is focused
					isSelected: _propTypes2.default.bool, // the option is selected
					onFocus: _propTypes2.default.func, // method to handle mouseEnter on option element
					onSelect: _propTypes2.default.func, // method to handle click on option element
					onUnfocus: _propTypes2.default.func, // method to handle mouseLeave on option element
					option: _propTypes2.default.object.isRequired, // object that is base for that option
					optionIndex: _propTypes2.default.number // index of the option, used to generate unique ids for aria
				};

				exports.default = Option;

				/***/
			}),
/* 163 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _classnames = __webpack_require__(4);

				var _classnames2 = _interopRequireDefault(_classnames);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var Value = function (_React$Component) {
					_inherits(Value, _React$Component);

					function Value(props) {
						_classCallCheck(this, Value);

						var _this = _possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

						_this.handleMouseDown = _this.handleMouseDown.bind(_this);
						_this.onRemove = _this.onRemove.bind(_this);
						_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
						_this.handleTouchMove = _this.handleTouchMove.bind(_this);
						_this.handleTouchStart = _this.handleTouchStart.bind(_this);
						return _this;
					}

					_createClass(Value, [{
						key: 'handleMouseDown',
						value: function handleMouseDown(event) {
							if (event.type === 'mousedown' && event.button !== 0) {
								return;
							}
							if (this.props.onClick) {
								event.stopPropagation();
								this.props.onClick(this.props.value, event);
								return;
							}
							if (this.props.value.href) {
								event.stopPropagation();
							}
						}
					}, {
						key: 'onRemove',
						value: function onRemove(event) {
							event.preventDefault();
							event.stopPropagation();
							this.props.onRemove(this.props.value);
						}
					}, {
						key: 'handleTouchEndRemove',
						value: function handleTouchEndRemove(event) {
							// Check if the view is being dragged, In this case
							// we don't want to fire the click event (because the user only wants to scroll)
							if (this.dragging) return;

							// Fire the mouse events
							this.onRemove(event);
						}
					}, {
						key: 'handleTouchMove',
						value: function handleTouchMove() {
							// Set a flag that the view is being dragged
							this.dragging = true;
						}
					}, {
						key: 'handleTouchStart',
						value: function handleTouchStart() {
							// Set a flag that the view is not being dragged
							this.dragging = false;
						}
					}, {
						key: 'renderRemoveIcon',
						value: function renderRemoveIcon() {
							if (this.props.disabled || !this.props.onRemove) return;
							return _react2.default.createElement(
								'span',
								{
									className: 'Select-value-icon',
									'aria-hidden': 'true',
									onMouseDown: this.onRemove,
									onTouchEnd: this.handleTouchEndRemove,
									onTouchStart: this.handleTouchStart,
									onTouchMove: this.handleTouchMove
								},
								'\xD7'
							);
						}
					}, {
						key: 'renderLabel',
						value: function renderLabel() {
							var className = 'Select-value-label';
							return this.props.onClick || this.props.value.href ? _react2.default.createElement(
								'a',
								{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
								this.props.children
							) : _react2.default.createElement(
								'span',
								{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
								this.props.children
							);
						}
					}, {
						key: 'render',
						value: function render() {
							return _react2.default.createElement(
								'div',
								{
									className: (0, _classnames2.default)('Select-value', this.props.value.disabled ? 'Select-value-disabled' : '', this.props.value.className),
									style: this.props.value.style,
									title: this.props.value.title
								},
								this.renderRemoveIcon(),
								this.renderLabel()
							);
						}
					}]);

					return Value;
				}(_react2.default.Component);

				Value.propTypes = {
					children: _propTypes2.default.node,
					disabled: _propTypes2.default.bool, // disabled prop passed to ReactSelect
					id: _propTypes2.default.string, // Unique id for the value - used for aria
					onClick: _propTypes2.default.func, // method to handle click on value label
					onRemove: _propTypes2.default.func, // method to handle removal of the value
					value: _propTypes2.default.object.isRequired // the option object for this value
				};

				exports.default = Value;

				/***/
			}),
/* 164 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				var arrowRenderer = function arrowRenderer(_ref) {
					var onMouseDown = _ref.onMouseDown;

					return _react2.default.createElement('span', {
						className: 'Select-arrow',
						onMouseDown: onMouseDown
					});
				};

				arrowRenderer.propTypes = {
					onMouseDown: _propTypes2.default.func
				};

				exports.default = arrowRenderer;

				/***/
			}),
/* 165 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				var clearRenderer = function clearRenderer() {
					return _react2.default.createElement('span', {
						className: 'Select-clear',
						dangerouslySetInnerHTML: { __html: '&times;' }
					});
				};

				exports.default = clearRenderer;

				/***/
			}),
/* 166 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

				var stripDiacritics = function stripDiacritics(str) {
					for (var i = 0; i < map.length; i++) {
						str = str.replace(map[i].letters, map[i].base);
					}
					return str;
				};

				exports.default = stripDiacritics;

				/***/
			}),
/* 167 */
/***/ (function (module, exports, __webpack_require__) {

				// style-loader: Adds some css to the DOM by adding a <style> tag

				// load the styles
				var content = __webpack_require__(287);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(9)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!../node_modules/css-loader/index.js!./react-data-grid-toolbar.css", function () {
							var newContent = require("!!../node_modules/css-loader/index.js!./react-data-grid-toolbar.css");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () { update(); });
				}

				/***/
			}),
/* 168 */
/***/ (function (module, exports, __webpack_require__) {

				var ListCache = __webpack_require__(60),
					stackClear = __webpack_require__(474),
					stackDelete = __webpack_require__(475),
					stackGet = __webpack_require__(476),
					stackHas = __webpack_require__(477),
					stackSet = __webpack_require__(478);

				/**
				 * Creates a stack cache object to store key-value pairs.
				 *
				 * @private
				 * @constructor
				 * @param {Array} [entries] The key-value pairs to cache.
				 */
				function Stack(entries) {
					var data = this.__data__ = new ListCache(entries);
					this.size = data.size;
				}

				// Add methods to `Stack`.
				Stack.prototype.clear = stackClear;
				Stack.prototype['delete'] = stackDelete;
				Stack.prototype.get = stackGet;
				Stack.prototype.has = stackHas;
				Stack.prototype.set = stackSet;

				module.exports = Stack;


				/***/
			}),
/* 169 */
/***/ (function (module, exports, __webpack_require__) {

				var castPath = __webpack_require__(171),
					toKey = __webpack_require__(65);

				/**
				 * The base implementation of `_.get` without support for default values.
				 *
				 * @private
				 * @param {Object} object The object to query.
				 * @param {Array|string} path The path of the property to get.
				 * @returns {*} Returns the resolved value.
				 */
				function baseGet(object, path) {
					path = castPath(path, object);

					var index = 0,
						length = path.length;

					while (object != null && index < length) {
						object = object[toKey(path[index++])];
					}
					return (index && index == length) ? object : undefined;
				}

				module.exports = baseGet;


				/***/
			}),
/* 170 */
/***/ (function (module, exports, __webpack_require__) {

				var baseIsEqualDeep = __webpack_require__(419),
					isObjectLike = __webpack_require__(42);

				/**
				 * The base implementation of `_.isEqual` which supports partial comparisons
				 * and tracks traversed objects.
				 *
				 * @private
				 * @param {*} value The value to compare.
				 * @param {*} other The other value to compare.
				 * @param {boolean} bitmask The bitmask flags.
				 *  1 - Unordered comparison
				 *  2 - Partial comparison
				 * @param {Function} [customizer] The function to customize comparisons.
				 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
				 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
				 */
				function baseIsEqual(value, other, bitmask, customizer, stack) {
					if (value === other) {
						return true;
					}
					if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
						return value !== value && other !== other;
					}
					return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
				}

				module.exports = baseIsEqual;


				/***/
			}),
/* 171 */
/***/ (function (module, exports, __webpack_require__) {

				var isArray = __webpack_require__(20),
					isKey = __webpack_require__(94),
					stringToPath = __webpack_require__(479),
					toString = __webpack_require__(488);

				/**
				 * Casts `value` to a path array if it's not one.
				 *
				 * @private
				 * @param {*} value The value to inspect.
				 * @param {Object} [object] The object to query keys on.
				 * @returns {Array} Returns the cast property path array.
				 */
				function castPath(value, object) {
					if (isArray(value)) {
						return value;
					}
					return isKey(value, object) ? [value] : stringToPath(toString(value));
				}

				module.exports = castPath;


				/***/
			}),
/* 172 */
/***/ (function (module, exports, __webpack_require__) {

				var SetCache = __webpack_require__(402),
					arraySome = __webpack_require__(410),
					cacheHas = __webpack_require__(432);

				/** Used to compose bitmasks for value comparisons. */
				var COMPARE_PARTIAL_FLAG = 1,
					COMPARE_UNORDERED_FLAG = 2;

				/**
				 * A specialized version of `baseIsEqualDeep` for arrays with support for
				 * partial deep comparisons.
				 *
				 * @private
				 * @param {Array} array The array to compare.
				 * @param {Array} other The other array to compare.
				 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
				 * @param {Function} customizer The function to customize comparisons.
				 * @param {Function} equalFunc The function to determine equivalents of values.
				 * @param {Object} stack Tracks traversed `array` and `other` objects.
				 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
				 */
				function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
					var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
						arrLength = array.length,
						othLength = other.length;

					if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
						return false;
					}
					// Assume cyclic values are equal.
					var stacked = stack.get(array);
					if (stacked && stack.get(other)) {
						return stacked == other;
					}
					var index = -1,
						result = true,
						seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

					stack.set(array, other);
					stack.set(other, array);

					// Ignore non-index properties.
					while (++index < arrLength) {
						var arrValue = array[index],
							othValue = other[index];

						if (customizer) {
							var compared = isPartial
								? customizer(othValue, arrValue, index, other, array, stack)
								: customizer(arrValue, othValue, index, array, other, stack);
						}
						if (compared !== undefined) {
							if (compared) {
								continue;
							}
							result = false;
							break;
						}
						// Recursively compare arrays (susceptible to call stack limits).
						if (seen) {
							if (!arraySome(other, function (othValue, othIndex) {
								if (!cacheHas(seen, othIndex) &&
									(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
									return seen.push(othIndex);
								}
							})) {
								result = false;
								break;
							}
						} else if (!(
							arrValue === othValue ||
							equalFunc(arrValue, othValue, bitmask, customizer, stack)
						)) {
							result = false;
							break;
						}
					}
					stack['delete'](array);
					stack['delete'](other);
					return result;
				}

				module.exports = equalArrays;


				/***/
			}),
			/* 173 */
			146,
			/* 174 */
			113,
/* 175 */
/***/ (function (module, exports, __webpack_require__) {

				var isObject = __webpack_require__(96);

				/**
				 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
				 *
				 * @private
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` if suitable for strict
				 *  equality comparisons, else `false`.
				 */
				function isStrictComparable(value) {
					return value === value && !isObject(value);
				}

				module.exports = isStrictComparable;


				/***/
			}),
/* 176 */
/***/ (function (module, exports) {

				/**
				 * A specialized version of `matchesProperty` for source values suitable
				 * for strict equality comparisons, i.e. `===`.
				 *
				 * @private
				 * @param {string} key The key of the property to get.
				 * @param {*} srcValue The value to match.
				 * @returns {Function} Returns the new spec function.
				 */
				function matchesStrictComparable(key, srcValue) {
					return function (object) {
						if (object == null) {
							return false;
						}
						return object[key] === srcValue &&
							(srcValue !== undefined || (key in Object(object)));
					};
				}

				module.exports = matchesStrictComparable;


				/***/
			}),
/* 177 */
/***/ (function (module, exports) {

				/** Used for built-in method references. */
				var funcProto = Function.prototype;

				/** Used to resolve the decompiled source of functions. */
				var funcToString = funcProto.toString;

				/**
				 * Converts `func` to its source code.
				 *
				 * @private
				 * @param {Function} func The function to convert.
				 * @returns {string} Returns the source code.
				 */
				function toSource(func) {
					if (func != null) {
						try {
							return funcToString.call(func);
						} catch (e) { }
						try {
							return (func + '');
						} catch (e) { }
					}
					return '';
				}

				module.exports = toSource;


				/***/
			}),
			/* 178 */
			74,
			/* 179 */
			[1940, 418, 42],
			/* 180 */
			[1942, 182, 95],
			/* 181 */
			[1945, 19, 487],
			/* 182 */
			[1948, 41, 96],
			/* 183 */
			[1952, 422, 431, 468],
/* 184 */,
/* 185 */
/***/ (function (module, exports) {

				module.exports = __WEBPACK_EXTERNAL_MODULE_185__;

				/***/
			}),
/* 186 */,
/* 187 */,
			/* 188 */
			[1803, 38, 24],
/* 189 */
/***/ (function (module, exports) {

				/**
				 * A specialized version of `_.filter` for arrays without support for
				 * iteratee shorthands.
				 *
				 * @private
				 * @param {Array} [array] The array to iterate over.
				 * @param {Function} predicate The function invoked per iteration.
				 * @returns {Array} Returns the new filtered array.
				 */
				function arrayFilter(array, predicate) {
					var index = -1,
						length = array == null ? 0 : array.length,
						resIndex = 0,
						result = [];

					while (++index < length) {
						var value = array[index];
						if (predicate(value, index, array)) {
							result[resIndex++] = value;
						}
					}
					return result;
				}

				module.exports = arrayFilter;


				/***/
			}),
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
			/* 196 */
			[1808, 38, 24],
			/* 197 */
			[1820, 315, 116, 7, 205, 113, 207],
/* 198 */
/***/ (function (module, exports) {

				/**
				 * Appends the elements of `values` to `array`.
				 *
				 * @private
				 * @param {Array} array The array to modify.
				 * @param {Array} values The values to append.
				 * @returns {Array} Returns `array`.
				 */
				function arrayPush(array, values) {
					var index = -1,
						length = values.length,
						offset = array.length;

					while (++index < length) {
						array[offset + index] = values[index];
					}
					return array;
				}

				module.exports = arrayPush;


				/***/
			}),
/* 199 */
/***/ (function (module, exports) {

				/**
				 * The base implementation of `_.findIndex` and `_.findLastIndex` without
				 * support for iteratee shorthands.
				 *
				 * @private
				 * @param {Array} array The array to inspect.
				 * @param {Function} predicate The function invoked per iteration.
				 * @param {number} fromIndex The index to search from.
				 * @param {boolean} [fromRight] Specify iterating from right to left.
				 * @returns {number} Returns the index of the matched value, else `-1`.
				 */
				function baseFindIndex(array, predicate, fromIndex, fromRight) {
					var length = array.length,
						index = fromIndex + (fromRight ? 1 : -1);

					while ((fromRight ? index-- : ++index < length)) {
						if (predicate(array[index], index, array)) {
							return index;
						}
					}
					return -1;
				}

				module.exports = baseFindIndex;


				/***/
			}),
			/* 200 */
			[1860, 38],
/* 201 */
/***/ (function (module, exports) {

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/**
				 * Checks if `value` is likely a prototype object.
				 *
				 * @private
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
				 */
				function isPrototype(value) {
					var Ctor = value && value.constructor,
						proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

					return value === proto;
				}

				module.exports = isPrototype;


				/***/
			}),
/* 202 */
/***/ (function (module, exports) {

				/**
				 * Creates a unary function that invokes `func` with its argument transformed.
				 *
				 * @private
				 * @param {Function} func The function to wrap.
				 * @param {Function} transform The argument transform.
				 * @returns {Function} Returns the new function.
				 */
				function overArg(func, transform) {
					return function (arg) {
						return func(transform(arg));
					};
				}

				module.exports = overArg;


				/***/
			}),
			/* 203 */
			177,
/* 204 */
/***/ (function (module, exports, __webpack_require__) {

				var arrayMap = __webpack_require__(52),
					baseIntersection = __webpack_require__(308),
					baseRest = __webpack_require__(34),
					castArrayLikeObject = __webpack_require__(317);

				/**
				 * Creates an array of unique values that are included in all given arrays
				 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
				 * for equality comparisons. The order and references of result values are
				 * determined by the first array.
				 *
				 * @static
				 * @memberOf _
				 * @since 0.1.0
				 * @category Array
				 * @param {...Array} [arrays] The arrays to inspect.
				 * @returns {Array} Returns the new array of intersecting values.
				 * @example
				 *
				 * _.intersection([2, 1], [2, 3]);
				 * // => [2]
				 */
				var intersection = baseRest(function (arrays) {
					var mapped = arrayMap(arrays, castArrayLikeObject);
					return (mapped.length && mapped[0] === arrays[0])
						? baseIntersection(mapped)
						: [];
				});

				module.exports = intersection;


				/***/
			}),
			/* 205 */
			[1945, 24, 353],
/* 206 */,
			/* 207 */
			[1952, 312, 72, 342],
			/* 208 */
			[1956, 112],
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ (function (module, exports, __webpack_require__) {

				"use strict";

				// rawAsap provides everything we need except exception management.
				var rawAsap = __webpack_require__(215);
				// RawTasks are recycled to reduce GC churn.
				var freeTasks = [];
				// We queue errors to ensure they are thrown in right order (FIFO).
				// Array-as-queue is good enough here, since we are just dealing with exceptions.
				var pendingErrors = [];
				var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

				function throwFirstError() {
					if (pendingErrors.length) {
						throw pendingErrors.shift();
					}
				}

				/**
				 * Calls a task as soon as possible after returning, in its own event, with priority
				 * over other events like animation, reflow, and repaint. An error thrown from an
				 * event will not interrupt, nor even substantially slow down the processing of
				 * other events, but will be rather postponed to a lower priority event.
				 * @param {{call}} task A callable object, typically a function that takes no
				 * arguments.
				 */
				module.exports = asap;
				function asap(task) {
					var rawTask;
					if (freeTasks.length) {
						rawTask = freeTasks.pop();
					} else {
						rawTask = new RawTask();
					}
					rawTask.task = task;
					rawAsap(rawTask);
				}

				// We wrap tasks with recyclable task objects.  A task object implements
				// `call`, just like a function.
				function RawTask() {
					this.task = null;
				}

				// The sole purpose of wrapping the task is to catch the exception and recycle
				// the task object after its single use.
				RawTask.prototype.call = function () {
					try {
						this.task.call();
					} catch (error) {
						if (asap.onerror) {
							// This hook exists purely for testing purposes.
							// Its name will be periodically randomized to break any code that
							// depends on its existence.
							asap.onerror(error);
						} else {
							// In a web browser, exceptions are not fatal. However, to avoid
							// slowing down the queue of pending tasks, we rethrow the error in a
							// lower priority turn.
							pendingErrors.push(error);
							requestErrorThrow();
						}
					} finally {
						this.task = null;
						freeTasks[freeTasks.length] = this;
					}
				};


				/***/
			}),
/* 215 */
/***/ (function (module, exports, __webpack_require__) {

				"use strict";

				// Use the fastest means possible to execute a task in its own turn, with
				// priority over other events including IO, animation, reflow, and redraw
				// events in browsers.
				//
				// An exception thrown by a task will permanently interrupt the processing of
				// subsequent tasks. The higher level `asap` function ensures that if an
				// exception is thrown by a task, that the task queue will continue flushing as
				// soon as possible, but if you use `rawAsap` directly, you are responsible to
				// either ensure that no exceptions are thrown from your task, or to manually
				// call `rawAsap.requestFlush` if an exception is thrown.
				module.exports = rawAsap;
				function rawAsap(task) {
					if (!queue.length) {
						requestFlush();
						flushing = true;
					}
					// Equivalent to push, but avoids a function call.
					queue[queue.length] = task;
				}

				var queue = [];
				// Once a flush has been requested, no further calls to `requestFlush` are
				// necessary until the next `flush` completes.
				var flushing = false;
				// `requestFlush` is an implementation-specific method that attempts to kick
				// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
				// the event queue before yielding to the browser's own event loop.
				var requestFlush;
				// The position of the next task to execute in the task queue. This is
				// preserved between calls to `flush` so that it can be resumed if
				// a task throws an exception.
				var index = 0;
				// If a task schedules additional tasks recursively, the task queue can grow
				// unbounded. To prevent memory exhaustion, the task queue will periodically
				// truncate already-completed tasks.
				var capacity = 1024;

				// The flush function processes all tasks that have been scheduled with
				// `rawAsap` unless and until one of those tasks throws an exception.
				// If a task throws an exception, `flush` ensures that its state will remain
				// consistent and will resume where it left off when called again.
				// However, `flush` does not make any arrangements to be called again if an
				// exception is thrown.
				function flush() {
					while (index < queue.length) {
						var currentIndex = index;
						// Advance the index before calling the task. This ensures that we will
						// begin flushing on the next task the task throws an error.
						index = index + 1;
						queue[currentIndex].call();
						// Prevent leaking memory for long chains of recursive calls to `asap`.
						// If we call `asap` within tasks scheduled by `asap`, the queue will
						// grow, but to avoid an O(n) walk for every task we execute, we don't
						// shift tasks off the queue after they have been executed.
						// Instead, we periodically shift 1024 tasks off the queue.
						if (index > capacity) {
							// Manually shift all values starting at the index back to the
							// beginning of the queue.
							for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
								queue[scan] = queue[scan + index];
							}
							queue.length -= index;
							index = 0;
						}
					}
					queue.length = 0;
					index = 0;
					flushing = false;
				}

				// `requestFlush` is implemented using a strategy based on data collected from
				// every available SauceLabs Selenium web driver worker at time of writing.
				// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

				// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
				// have WebKitMutationObserver but not un-prefixed MutationObserver.
				// Must use `global` or `self` instead of `window` to work in both frames and web
				// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

				/* globals self */
				var scope = typeof (window) !== "undefined" ? (window) : self;
				var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

				// MutationObservers are desirable because they have high priority and work
				// reliably everywhere they are implemented.
				// They are implemented in all modern browsers.
				//
				// - Android 4-4.3
				// - Chrome 26-34
				// - Firefox 14-29
				// - Internet Explorer 11
				// - iPad Safari 6-7.1
				// - iPhone Safari 7-7.1
				// - Safari 6-7
				if (typeof BrowserMutationObserver === "function") {
					requestFlush = makeRequestCallFromMutationObserver(flush);

					// MessageChannels are desirable because they give direct access to the HTML
					// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
					// 11-12, and in web workers in many engines.
					// Although message channels yield to any queued rendering and IO tasks, they
					// would be better than imposing the 4ms delay of timers.
					// However, they do not work reliably in Internet Explorer or Safari.

					// Internet Explorer 10 is the only browser that has setImmediate but does
					// not have MutationObservers.
					// Although setImmediate yields to the browser's renderer, it would be
					// preferrable to falling back to setTimeout since it does not have
					// the minimum 4ms penalty.
					// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
					// Desktop to a lesser extent) that renders both setImmediate and
					// MessageChannel useless for the purposes of ASAP.
					// https://github.com/kriskowal/q/issues/396

					// Timers are implemented universally.
					// We fall back to timers in workers in most engines, and in foreground
					// contexts in the following browsers.
					// However, note that even this simple case requires nuances to operate in a
					// broad spectrum of browsers.
					//
					// - Firefox 3-13
					// - Internet Explorer 6-9
					// - iPad Safari 4.3
					// - Lynx 2.8.7
				} else {
					requestFlush = makeRequestCallFromTimer(flush);
				}

				// `requestFlush` requests that the high priority event queue be flushed as
				// soon as possible.
				// This is useful to prevent an error thrown in a task from stalling the event
				// queue if the exception handled by Node.js’s
				// `process.on("uncaughtException")` or by a domain.
				rawAsap.requestFlush = requestFlush;

				// To request a high priority event, we induce a mutation observer by toggling
				// the text of a text node between "1" and "-1".
				function makeRequestCallFromMutationObserver(callback) {
					var toggle = 1;
					var observer = new BrowserMutationObserver(callback);
					var node = document.createTextNode("");
					observer.observe(node, { characterData: true });
					return function requestCall() {
						toggle = -toggle;
						node.data = toggle;
					};
				}

				// The message channel technique was discovered by Malte Ubl and was the
				// original foundation for this library.
				// http://www.nonblocking.io/2011/06/windownexttick.html

				// Safari 6.0.5 (at least) intermittently fails to create message ports on a
				// page's first load. Thankfully, this version of Safari supports
				// MutationObservers, so we don't need to fall back in that case.

				// function makeRequestCallFromMessageChannel(callback) {
				//     var channel = new MessageChannel();
				//     channel.port1.onmessage = callback;
				//     return function requestCall() {
				//         channel.port2.postMessage(0);
				//     };
				// }

				// For reasons explained above, we are also unable to use `setImmediate`
				// under any circumstances.
				// Even if we were, there is another bug in Internet Explorer 10.
				// It is not sufficient to assign `setImmediate` to `requestFlush` because
				// `setImmediate` must be called *by name* and therefore must be wrapped in a
				// closure.
				// Never forget.

				// function makeRequestCallFromSetImmediate(callback) {
				//     return function requestCall() {
				//         setImmediate(callback);
				//     };
				// }

				// Safari 6.0 has a problem where timers will get lost while the user is
				// scrolling. This problem does not impact ASAP because Safari 6.0 supports
				// mutation observers, so that implementation is used instead.
				// However, if we ever elect to use timers in Safari, the prevalent work-around
				// is to add a scroll event listener that calls for a flush.

				// `setTimeout` does not call the passed callback if the delay is less than
				// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
				// even then.

				function makeRequestCallFromTimer(callback) {
					return function requestCall() {
						// We dispatch a timeout with a specified delay of 0 for engines that
						// can reliably accommodate that request. This will usually be snapped
						// to a 4 milisecond delay, but once we're flushing, there's no delay
						// between events.
						var timeoutHandle = setTimeout(handleTimer, 0);
						// However, since this timer gets frequently dropped in Firefox
						// workers, we enlist an interval handle that will try to fire
						// an event 20 times per second until it succeeds.
						var intervalHandle = setInterval(handleTimer, 50);

						function handleTimer() {
							// Whichever timer succeeds will cancel both timers and
							// execute the callback.
							clearTimeout(timeoutHandle);
							clearInterval(intervalHandle);
							callback();
						}
					};
				}

				// This is for `asap.js` only.
				// Its name will be periodically randomized to break any code that depends on
				// its existence.
				rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

				// ASAP was originally a nextTick shim included in Q. This was factored out
				// into this ASAP package. It was later adapted to RSVP which made further
				// amendments. These decisions, particularly to marginalize MessageChannel and
				// to capture the MutationObserver implementation in a closure, were integrated
				// back into ASAP proper.
				// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js


				/***/
			}),
/* 216 */,
/* 217 */,
/* 218 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _AutoCompleteFilter = __webpack_require__(79);

				var _AutoCompleteFilter2 = _interopRequireDefault(_AutoCompleteFilter);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				exports['default'] = function (props) {
					return _react2['default'].createElement(_AutoCompleteFilter2['default'], _extends({}, props, { multiSelection: true }));
				};

				/***/
			}),
/* 219 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _ExcelColumn = __webpack_require__(18);

				var _ExcelColumn2 = _interopRequireDefault(_ExcelColumn);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var RuleType = {
					Number: 1,
					Range: 2,
					GreaterThen: 3,
					LessThen: 4
				};

				var NumericFilter = function (_React$Component) {
					_inherits(NumericFilter, _React$Component);

					function NumericFilter(props) {
						_classCallCheck(this, NumericFilter);

						var _this = _possibleConstructorReturn(this, (NumericFilter.__proto__ || Object.getPrototypeOf(NumericFilter)).call(this, props));

						_this.handleChange = _this.handleChange.bind(_this);
						_this.handleKeyPress = _this.handleKeyPress.bind(_this);
						_this.getRules = _this.getRules.bind(_this);
						return _this;
					}

					_createClass(NumericFilter, [{
						key: 'filterValues',
						value: function filterValues(row, columnFilter, columnKey) {
							if (columnFilter.filterTerm == null) {
								return true;
							}
							var result = false;
							// implement default filter logic
							var value = parseInt(row[columnKey], 10);
							for (var ruleKey in columnFilter.filterTerm) {
								if (!columnFilter.filterTerm.hasOwnProperty(ruleKey)) {
									continue;
								}

								var rule = columnFilter.filterTerm[ruleKey];

								switch (rule.type) {
									case RuleType.Number:
										if (rule.value === value) {
											result = true;
										}
										break;
									case RuleType.GreaterThen:
										if (rule.value <= value) {
											result = true;
										}
										break;
									case RuleType.LessThen:
										if (rule.value >= value) {
											result = true;
										}
										break;
									case RuleType.Range:
										if (rule.begin <= value && rule.end >= value) {
											result = true;
										}
										break;
									default:
										// do nothing
										break;
								}
							}
							return result;
						}
					}, {
						key: 'getRules',
						value: function getRules(value) {
							var rules = [];
							if (value === '') {
								return rules;
							}
							// check comma
							var list = value.split(',');
							if (list.length > 0) {
								// handle each value with comma
								for (var key in list) {
									if (!list.hasOwnProperty(key)) {
										continue;
									}

									var obj = list[key];
									if (obj.indexOf('-') > 0) {
										// handle dash
										var begin = parseInt(obj.split('-')[0], 10);
										var end = parseInt(obj.split('-')[1], 10);
										rules.push({ type: RuleType.Range, begin: begin, end: end });
									} else if (obj.indexOf('>') > -1) {
										// handle greater then
										var _begin = parseInt(obj.split('>')[1], 10);
										rules.push({ type: RuleType.GreaterThen, value: _begin });
									} else if (obj.indexOf('<') > -1) {
										// handle less then
										var _end = parseInt(obj.split('<')[1], 10);
										rules.push({ type: RuleType.LessThen, value: _end });
									} else {
										// handle normal values
										var numericValue = parseInt(obj, 10);
										rules.push({ type: RuleType.Number, value: numericValue });
									}
								}
							}
							return rules;
						}
					}, {
						key: 'handleKeyPress',
						value: function handleKeyPress(e) {
							// Validate the input
							var regex = '>|<|-|,|([0-9])';
							var result = RegExp(regex).test(e.key);
							if (result === false) {
								e.preventDefault();
							}
						}
					}, {
						key: 'handleChange',
						value: function handleChange(e) {
							var value = e.target.value;
							var filters = this.getRules(value);
							this.props.onChange({ filterTerm: filters.length > 0 ? filters : null, column: this.props.column, rawValue: value, filterValues: this.filterValues });
						}
					}, {
						key: 'render',
						value: function render() {
							var inputKey = 'header-filter-' + this.props.column.key;
							var columnStyle = {
								float: 'left',
								marginRight: 5,
								maxWidth: '80%'
							};
							var badgeStyle = {
								cursor: 'help'
							};

							var tooltipText = 'Input Methods: Range (x-y), Greater Then (>x), Less Then (<y)';

							return _react2['default'].createElement(
								'div',
								null,
								_react2['default'].createElement(
									'div',
									{ style: columnStyle },
									_react2['default'].createElement('input', { key: inputKey, type: 'text', placeholder: 'e.g. 3,10-15,>20', className: 'form-control input-sm', onChange: this.handleChange, onKeyPress: this.handleKeyPress })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'input-sm' },
									_react2['default'].createElement(
										'span',
										{ className: 'badge', style: badgeStyle, title: tooltipText },
										'?'
									)
								)
							);
						}
					}]);

					return NumericFilter;
				}(_react2['default'].Component);

				NumericFilter.propTypes = {
					onChange: _propTypes2['default'].func.isRequired,
					column: _propTypes2['default'].shape(_ExcelColumn2['default'])
				};
				module.exports = NumericFilter;

				/***/
			}),
/* 220 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _AutoCompleteFilter = __webpack_require__(79);

				var _AutoCompleteFilter2 = _interopRequireDefault(_AutoCompleteFilter);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				exports['default'] = function (props) {
					return _react2['default'].createElement(_AutoCompleteFilter2['default'], _extends({}, props, { multiSelection: false }));
				};

				/***/
			}),
/* 221 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _NumericFilter = __webpack_require__(219);

				var _NumericFilter2 = _interopRequireDefault(_NumericFilter);

				var _AutoCompleteFilter = __webpack_require__(79);

				var _AutoCompleteFilter2 = _interopRequireDefault(_AutoCompleteFilter);

				var _MultiSelectFilter = __webpack_require__(218);

				var _MultiSelectFilter2 = _interopRequireDefault(_MultiSelectFilter);

				var _SingleSelectFilter = __webpack_require__(220);

				var _SingleSelectFilter2 = _interopRequireDefault(_SingleSelectFilter);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				var Filters = {
					NumericFilter: _NumericFilter2['default'],
					AutoCompleteFilter: _AutoCompleteFilter2['default'],
					MultiSelectFilter: _MultiSelectFilter2['default'],
					SingleSelectFilter: _SingleSelectFilter2['default']
				};

				module.exports = Filters;

				/***/
			}),
/* 222 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _utils = __webpack_require__(5);

				var filterRows = function filterRows(filters) {
					var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

					return rows.filter(function (r) {
						var retriever = (0, _utils.getMixedTypeValueRetriever)((0, _utils.isImmutableCollection)(r));
						var include = true;
						for (var columnKey in filters) {
							if (filters.hasOwnProperty(columnKey)) {
								var colFilter = filters[columnKey];
								// check if custom filter function exists
								if (colFilter.filterValues && typeof colFilter.filterValues === 'function') {
									include = include & colFilter.filterValues(r, colFilter, columnKey);
								} else if (typeof colFilter.filterTerm === 'string') {
									// default filter action
									var rowValue = retriever.getValue(r, columnKey);
									if (rowValue !== undefined && rowValue !== null) {
										if (rowValue.toString().toLowerCase().indexOf(colFilter.filterTerm.toLowerCase()) === -1) {
											include = include & false;
										}
									} else {
										include = include & false;
									}
								}
							}
						}
						return Boolean(include);
					});
				};

				module.exports = filterRows;

				/***/
			}),
/* 223 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _utils = __webpack_require__(5);

				var _RowGrouperResolver = __webpack_require__(224);

				var _RowGrouperResolver2 = _interopRequireDefault(_RowGrouperResolver);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var RowGrouper = function () {
					function RowGrouper(columns, expandedRows) {
						var isImmutable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

						_classCallCheck(this, RowGrouper);

						this.columns = columns.slice(0);
						this.expandedRows = expandedRows;
						this.resolver = new _RowGrouperResolver2['default'](isImmutable);
					}

					_createClass(RowGrouper, [{
						key: 'isRowExpanded',
						value: function isRowExpanded(columnName, name) {
							var isExpanded = true;
							var expandedRowGroup = this.expandedRows[columnName];
							if (expandedRowGroup && expandedRowGroup[name]) {
								isExpanded = expandedRowGroup[name].isExpanded;
							}
							return isExpanded;
						}
					}, {
						key: 'groupRowsByColumn',
						value: function groupRowsByColumn(rows) {
							var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

							var nextColumnIndex = columnIndex;
							var columnName = this.columns.length > 0 && typeof this.columns[columnIndex] === 'string' ? this.columns[columnIndex] : this.columns[columnIndex].key;
							var columnGroupDisplayName = this.columns.length > 0 && typeof this.columns[columnIndex] === 'string' ? this.columns[columnIndex] : this.columns[columnIndex].name;
							var groupedRows = this.resolver.getGroupedRows(rows, columnName);
							var keys = this.resolver.getGroupKeys(groupedRows);
							var dataviewRows = this.resolver.initRowsCollection();

							for (var i = 0; i < keys.length; i++) {
								var key = keys[i];
								var isExpanded = this.isRowExpanded(columnName, key);
								var rowGroupHeader = { name: key, __metaData: { isGroup: true, treeDepth: columnIndex, isExpanded: isExpanded, columnGroupName: columnName, columnGroupDisplayName: columnGroupDisplayName } };

								dataviewRows = this.resolver.addHeaderRow(rowGroupHeader, dataviewRows);

								if (isExpanded) {
									nextColumnIndex = columnIndex + 1;
									if (this.columns.length > nextColumnIndex) {
										dataviewRows = dataviewRows.concat(this.groupRowsByColumn(this.resolver.getRowObj(groupedRows, key), nextColumnIndex));
										nextColumnIndex = columnIndex - 1;
									} else {
										dataviewRows = dataviewRows.concat(this.resolver.getRowObj(groupedRows, key));
									}
								}
							}
							return dataviewRows;
						}
					}]);

					return RowGrouper;
				}();

				var groupRows = function groupRows(rows, groupedColumns, expandedRows) {
					var rowGrouper = new RowGrouper(groupedColumns, expandedRows, (0, _utils.isImmutableCollection)(rows));
					return rowGrouper.groupRowsByColumn(rows, 0);
				};

				module.exports = groupRows;

				/***/
			}),
/* 224 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _immutable = __webpack_require__(185);

				var _groupBy = __webpack_require__(481);

				var _groupBy2 = _interopRequireDefault(_groupBy);

				var _utils = __webpack_require__(5);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var RowGrouperResolver = function () {
					function RowGrouperResolver(isImmutable) {
						_classCallCheck(this, RowGrouperResolver);

						this.isImmutable = isImmutable;
						this.getRowObj = (0, _utils.getMixedTypeValueRetriever)(isImmutable).getValue;
					}

					_createClass(RowGrouperResolver, [{
						key: 'initRowsCollection',
						value: function initRowsCollection() {
							return this.isImmutable ? new _immutable.List() : [];
						}
					}, {
						key: 'getGroupedRows',
						value: function getGroupedRows(rows, columnName) {
							return this.isImmutable ? rows.groupBy(function (x) {
								return (0, _utils.isImmutableMap)(x) ? x.get(columnName) : x[columnName];
							}) : (0, _groupBy2['default'])(rows, columnName);
						}
					}, {
						key: 'getGroupKeys',
						value: function getGroupKeys(groupedRows) {
							var getKeys = Object.keys;
							if (this.isImmutable) {
								getKeys = function getKeys(col) {
									var keys = [];
									var iterator = col.keys();
									var item = iterator.next();

									while (!item.done) {
										keys.push(item.value);
										item = iterator.next();
									}
									return keys;
								};
							}
							return getKeys(groupedRows);
						}
					}, {
						key: 'addHeaderRow',
						value: function addHeaderRow(rowGroupHeader, dataviewRows) {
							var rows = dataviewRows;
							var dvRows = rows.push(rowGroupHeader);
							if (this.isImmutable) {
								return dvRows;
							}
							return rows;
						}
					}]);

					return RowGrouperResolver;
				}();

				exports['default'] = RowGrouperResolver;

				/***/
			}),
/* 225 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _utils = __webpack_require__(5);

				var comparer = function comparer(a, b) {
					if (a > b) {
						return 1;
					} else if (a < b) {
						return -1;
					}
					return 0;
				};

				var sortRows = function sortRows(rows, sortColumn, sortDirection) {
					var retriever = (0, _utils.getMixedTypeValueRetriever)((0, _utils.isImmutableCollection)(rows));
					var sortDirectionSign = sortDirection === 'ASC' ? 1 : -1;
					var rowComparer = function rowComparer(a, b) {
						return sortDirectionSign * comparer(retriever.getValue(a, sortColumn), retriever.getValue(b, sortColumn));
					};
					if (sortDirection === 'NONE') {
						return rows;
					}
					return rows.slice().sort(rowComparer);
				};

				module.exports = sortRows;
				module.exports.comparer = comparer;

				/***/
			}),
/* 226 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				module.exports = {
					Selectors: __webpack_require__(127)
				};

				/***/
			}),
/* 227 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _html5DragDropContext = __webpack_require__(130);

				var _html5DragDropContext2 = _interopRequireDefault(_html5DragDropContext);

				var _DraggableHeaderCell = __webpack_require__(228);

				var _DraggableHeaderCell2 = _interopRequireDefault(_DraggableHeaderCell);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var DraggableContainer = function (_React$Component) {
					_inherits(DraggableContainer, _React$Component);

					function DraggableContainer() {
						_classCallCheck(this, DraggableContainer);

						return _possibleConstructorReturn(this, (DraggableContainer.__proto__ || Object.getPrototypeOf(DraggableContainer)).apply(this, arguments));
					}

					_createClass(DraggableContainer, [{
						key: 'render',
						value: function render() {
							return _react2['default'].cloneElement(_react2['default'].Children.only(this.props.children), _extends({}, this.props, {
								draggableHeaderCell: _DraggableHeaderCell2['default']
							}));
						}
					}]);

					return DraggableContainer;
				}(_react2['default'].Component);

				DraggableContainer.propTypes = {
					children: _propTypes2['default'].element.isRequired
				};

				exports['default'] = (0, _html5DragDropContext2['default'])(DraggableContainer);

				/***/
			}),
/* 228 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _reactDnd = __webpack_require__(25);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var DraggableHeaderCell = function (_React$Component) {
					_inherits(DraggableHeaderCell, _React$Component);

					function DraggableHeaderCell() {
						_classCallCheck(this, DraggableHeaderCell);

						return _possibleConstructorReturn(this, (DraggableHeaderCell.__proto__ || Object.getPrototypeOf(DraggableHeaderCell)).apply(this, arguments));
					}

					_createClass(DraggableHeaderCell, [{
						key: 'render',
						value: function render() {
							var _props = this.props,
								connectDragSource = _props.connectDragSource,
								connectDropTarget = _props.connectDropTarget,
								isDragging = _props.isDragging,
								isOver = _props.isOver,
								canDrop = _props.canDrop;


							var opacity = 1;
							if (isDragging) {
								opacity = 0.2;
							}

							// set drag source and drop target on header cell
							// width: 0 - otherwise drag clone was wrongly positioned
							return connectDragSource(connectDropTarget(_react2['default'].createElement(
								'div',
								{
									style: { width: 0, cursor: 'move', opacity: opacity },
									className: isOver && canDrop ? 'rdg-can-drop' : ''
								},
								this.props.children
							)));
						}
					}]);

					return DraggableHeaderCell;
				}(_react2['default'].Component);

				// drop source


				function collect(connect, monitor) {
					return {
						connectDragSource: connect.dragSource(),
						isDragging: monitor.isDragging()
					};
				}

				var headerCellSource = {
					beginDrag: function beginDrag(props) {
						return {
							// source column
							key: props.column.key
						};
					},
					endDrag: function endDrag(props, monitor) {
						// check if drop was made in droppable zone
						if (monitor.didDrop()) {
							var source = monitor.getDropResult().source;
							var _target = monitor.getDropResult().target;
							return props.onHeaderDrop(source, _target);
						}
					}
				};

				// drop target
				var target = {
					drop: function drop(props, monitor) {
						var source = monitor.getItem().key;
						var targetKey = props.column.key;
						return {
							source: source,
							target: targetKey
						};
					}
				};

				function targetCollect(connect, monitor) {
					return {
						connectDropTarget: connect.dropTarget(),
						isOver: monitor.isOver(),
						canDrop: monitor.canDrop(),
						draggedHeader: monitor.getItem()
					};
				}

				DraggableHeaderCell.propTypes = {
					connectDragSource: _propTypes2['default'].func.isRequired,
					connectDropTarget: _propTypes2['default'].func.isRequired,
					isDragging: _propTypes2['default'].bool.isRequired,
					isOver: _propTypes2['default'].bool,
					canDrop: _propTypes2['default'].bool,
					children: _propTypes2['default'].element.isRequired
				};

				DraggableHeaderCell = (0, _reactDnd.DropTarget)('Column', target, targetCollect)(DraggableHeaderCell);
				DraggableHeaderCell = (0, _reactDnd.DragSource)('Column', headerCellSource, collect)(DraggableHeaderCell);

				exports['default'] = DraggableHeaderCell;

				/***/
			}),
/* 229 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _DraggableContainer = __webpack_require__(227);

				var _DraggableContainer2 = _interopRequireDefault(_DraggableContainer);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				module.exports = { DraggableContainer: _DraggableContainer2['default'] };

				/***/
			}),
/* 230 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _html5DragDropContext = __webpack_require__(130);

				var _html5DragDropContext2 = _interopRequireDefault(_html5DragDropContext);

				var _DraggableHeaderCell = __webpack_require__(128);

				var _DraggableHeaderCell2 = _interopRequireDefault(_DraggableHeaderCell);

				var _RowDragLayer = __webpack_require__(233);

				var _RowDragLayer2 = _interopRequireDefault(_RowDragLayer);

				var _utils = __webpack_require__(5);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var DraggableContainer = function (_Component) {
					_inherits(DraggableContainer, _Component);

					function DraggableContainer() {
						_classCallCheck(this, DraggableContainer);

						return _possibleConstructorReturn(this, (DraggableContainer.__proto__ || Object.getPrototypeOf(DraggableContainer)).apply(this, arguments));
					}

					_createClass(DraggableContainer, [{
						key: 'getRows',
						value: function getRows(rowsCount, rowGetter) {
							var rows = [];
							for (var j = 0; j < rowsCount; j++) {
								rows.push(rowGetter(j));
							}
							return rows;
						}
					}, {
						key: 'renderGrid',
						value: function renderGrid() {
							return _react2['default'].cloneElement(_react2['default'].Children.only(this.props.children), {
								draggableHeaderCell: _DraggableHeaderCell2['default']
							});
						}
					}, {
						key: 'render',
						value: function render() {
							var grid = this.renderGrid();
							var rowGetter = this.props.getDragPreviewRow || grid.props.rowGetter;
							var rowsCount = grid.props.rowsCount;
							var columns = grid.props.columns;
							var rows = this.getRows(rowsCount, rowGetter);
							return _react2['default'].createElement(
								'div',
								null,
								grid,
								_react2['default'].createElement(_RowDragLayer2['default'], {
									rowSelection: grid.props.rowSelection,
									rows: rows,
									columns: (0, _utils.isColumnsImmutable)(columns) ? columns.toArray() : columns
								})
							);
						}
					}]);

					return DraggableContainer;
				}(_react.Component);

				DraggableContainer.propTypes = {
					children: _propTypes2['default'].element.isRequired,
					getDragPreviewRow: _propTypes2['default'].func
				};

				exports['default'] = (0, _html5DragDropContext2['default'])(DraggableContainer);

				/***/
			}),
/* 231 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				__webpack_require__(392);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _reactDom = __webpack_require__(13);

				var _reactDom2 = _interopRequireDefault(_reactDom);

				var _reactDnd = __webpack_require__(25);

				var _RowComparer = __webpack_require__(44);

				var _RowComparer2 = _interopRequireDefault(_RowComparer);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var rowDropTarget = function rowDropTarget(Row) {
					return function (_React$Component) {
						_inherits(_class, _React$Component);

						function _class() {
							_classCallCheck(this, _class);

							return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
						}

						_createClass(_class, [{
							key: 'shouldComponentUpdate',
							value: function shouldComponentUpdate(nextProps) {
								return (0, _RowComparer2['default'])(nextProps, this.props);
							}
						}, {
							key: 'moveRow',
							value: function moveRow() {
								_reactDom2['default'].findDOMNode(this).classList.add('slideUp');
							}
						}, {
							key: 'render',
							value: function render() {
								var _this2 = this;

								var _props = this.props,
									connectDropTarget = _props.connectDropTarget,
									isOver = _props.isOver,
									canDrop = _props.canDrop;

								var overlayTop = this.props.idx * this.props.height;
								return connectDropTarget(_react2['default'].createElement(
									'div',
									null,
									_react2['default'].createElement(Row, _extends({
										ref: function ref(node) {
											return _this2.row = node;
										}
									}, this.props)),
									isOver && canDrop && _react2['default'].createElement('div', {
										className: 'rowDropTarget', style: {
											top: overlayTop,
											height: this.props.height
										}
									})
								));
							}
						}]);

						return _class;
					}(_react2['default'].Component);
				};

				var target = {
					drop: function drop(props, monitor, component) {
						// Obtain the dragged item
						component.moveRow();
						var rowSource = monitor.getItem();
						var rowTarget = { idx: props.idx, data: props.row };
						props.onRowDrop({ rowSource: rowSource, rowTarget: rowTarget });
					}
				};

				function collect(connect, monitor) {
					return {
						connectDropTarget: connect.dropTarget(),
						isOver: monitor.isOver(),
						canDrop: monitor.canDrop(),
						draggedRow: monitor.getItem()
					};
				}

				exports['default'] = function (Row) {
					return (0, _reactDnd.DropTarget)('Row', target, collect, {
						arePropsEqual: function arePropsEqual(nextProps, currentProps) {
							return !(0, _RowComparer2['default'])(nextProps, currentProps);
						}
					})(rowDropTarget(Row));
				};

				/***/
			}),
/* 232 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				__webpack_require__(45);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _reactDnd = __webpack_require__(25);

				var _editors = __webpack_require__(43);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var RowActionsCell = function (_React$Component) {
					_inherits(RowActionsCell, _React$Component);

					function RowActionsCell() {
						_classCallCheck(this, RowActionsCell);

						return _possibleConstructorReturn(this, (RowActionsCell.__proto__ || Object.getPrototypeOf(RowActionsCell)).apply(this, arguments));
					}

					_createClass(RowActionsCell, [{
						key: 'renderRowIndex',
						value: function renderRowIndex() {
							return _react2['default'].createElement(
								'div',
								{ className: 'rdg-row-index' },
								this.props.rowIdx + 1
							);
						}
					}, {
						key: 'render',
						value: function render() {
							var _props = this.props,
								connectDragSource = _props.connectDragSource,
								rowSelection = _props.rowSelection;

							var rowHandleStyle = rowSelection != null ? { position: 'absolute', marginTop: '5px' } : {};
							var isSelected = this.props.value;
							var editorClass = isSelected ? 'rdg-actions-checkbox selected' : 'rdg-actions-checkbox';

							return connectDragSource(_react2['default'].createElement(
								'div',
								null,
								_react2['default'].createElement('div', { className: 'rdg-drag-row-handle', style: rowHandleStyle }),
								!isSelected ? this.renderRowIndex() : null,
								 rowSelection != null && _react2['default'].createElement(
									'div',
									{ className: editorClass },
									_react2['default'].createElement(_editors.CheckboxEditor, 
										{ column: this.props.column, 
										  rowIdx: this.props.rowIdx, 
										  dependentValues: this.props.dependentValues, 
										  value: this.props.value })
								)
							));
						}
					}]);

					return RowActionsCell;
				}(_react2['default'].Component);

				RowActionsCell.propTypes = {
					rowIdx: _propTypes2['default'].number.isRequired,
					connectDragSource: _propTypes2['default'].func.isRequired,
					connectDragPreview: _propTypes2['default'].func.isRequired,
					isDragging: _propTypes2['default'].bool.isRequired,
					isRowHovered: _propTypes2['default'].bool,
					column: _propTypes2['default'].object,
					dependentValues: _propTypes2['default'].object,
					value: _propTypes2['default'].bool,
					rowSelection: _propTypes2['default'].object.isRequired
				};

				RowActionsCell.defaultProps = {
					rowIdx: 0
				};

				function collect(connect, monitor) {
					return {
						connectDragSource: connect.dragSource(),
						isDragging: monitor.isDragging(),
						connectDragPreview: connect.dragPreview()
					};
				}

				var rowIndexSource = {
					beginDrag: function beginDrag(props) {
						return { idx: props.rowIdx, data: props.dependentValues };
					},
					endDrag: function endDrag(props) {
						return { idx: props.rowIdx, data: props.dependentValues };
					}
				};

				exports['default'] = (0, _reactDnd.DragSource)('Row', rowIndexSource, collect)(RowActionsCell);

				/***/
			}),
/* 233 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _reactDnd = __webpack_require__(25);

				var _Selectors = __webpack_require__(127);

				var _Selectors2 = _interopRequireDefault(_Selectors);

				__webpack_require__(103);

				__webpack_require__(45);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var layerStyles = {
					cursor: '-webkit-grabbing',
					position: 'fixed',
					pointerEvents: 'none',
					zIndex: 100,
					left: 0,
					top: 0,
					width: '100%',
					height: '100%'
				};

				function getItemStyles(props) {
					var currentOffset = props.currentOffset;

					if (!currentOffset) {
						return {
							display: 'none'
						};
					}

					var x = currentOffset.x,
						y = currentOffset.y;

					var transform = 'translate(' + x + 'px, ' + y + 'px)';
					return {
						transform: transform,
						WebkitTransform: transform
					};
				}

				var CustomDragLayer = function (_Component) {
					_inherits(CustomDragLayer, _Component);

					function CustomDragLayer() {
						_classCallCheck(this, CustomDragLayer);

						return _possibleConstructorReturn(this, (CustomDragLayer.__proto__ || Object.getPrototypeOf(CustomDragLayer)).apply(this, arguments));
					}

					_createClass(CustomDragLayer, [{
						key: 'isDraggedRowSelected',
						value: function isDraggedRowSelected(selectedRows) {
							var _props = this.props,
								item = _props.item,
								rowSelection = _props.rowSelection;

							if (selectedRows && selectedRows.length > 0) {
								var key = rowSelection.selectBy.keys.rowKey;
								return selectedRows.filter(function (r) {
									return r[key] === item.data[key];
								}).length > 0;
							}
							return false;
						}
					}, {
						key: 'getDraggedRows',
						value: function getDraggedRows() {
							var draggedRows = void 0;
							var rowSelection = this.props.rowSelection;

							if (rowSelection && rowSelection.selectBy.keys) {
								var rows = this.props.rows;
								var _rowSelection$selectB = rowSelection.selectBy.keys,
									rowKey = _rowSelection$selectB.rowKey,
									values = _rowSelection$selectB.values;

								var selectedRows = _Selectors2['default'].getSelectedRowsByKey({ rowKey: rowKey, selectedKeys: values, rows: rows });
								//draggedRows = this.isDraggedRowSelected(selectedRows) ? selectedRows : [this.props.rows[this.props.item.idx]];
							} else {
								//draggedRows = [this.props.rows[this.props.item.idx]];
							}
							return draggedRows;
						}
					}, {
						key: 'renderDraggedRows',
						value: function renderDraggedRows() {
							var _this2 = this;

							var columns = this.props.columns;
							return null;
						}
					}, {
						key: 'renderDraggedCells',
						value: function renderDraggedCells(item, rowIdx, columns) {
							var cells = [];
							if (item != null) {
								columns.forEach(function (c) {
									if (item.hasOwnProperty(c.key)) {
										if (c.formatter) {
											var Formatter = c.formatter;
											var dependentValues = typeof c.getRowMetaData === 'function' ? c.getRowMetaData(item, c) : {};
											cells.push(_react2['default'].createElement(
												'td',
												{ key: 'dragged-cell-' + rowIdx + '-' + c.key, className: 'react-grid-Cell', style: { padding: '5px' } },
												_react2['default'].createElement(Formatter, { dependentValues: dependentValues, value: item[c.key] })
											));
										} else {
											cells.push(_react2['default'].createElement(
												'td',
												{ key: 'dragged-cell-' + rowIdx + '-' + c.key, className: 'react-grid-Cell', style: { padding: '5px' } },
												item[c.key]
											));
										}
									}
								});
							}
							return null;
						}
					}, {
						key: 'render',
						value: function render() {
							 
							var isDragging = this.props.isDragging;

							if (!isDragging) {
								return null;
							}
							var draggedRows = this.renderDraggedRows();
							return _react2['default'].createElement(
								'div',
								{ style: layerStyles, className: 'rdg-dragging' },
								_react2['default'].createElement(
									'div',
									{ style: getItemStyles(this.props), className: 'rdg-dragging' },
									_react2['default'].createElement(
										'table',
										null,
										_react2['default'].createElement(
											'tbody',
											null,
											draggedRows
										)
									)
								)
							);
						}
					}]);

					return CustomDragLayer;
				}(_react.Component);

				CustomDragLayer.propTypes = {
					item: _propTypes2['default'].object,
					itemType: _propTypes2['default'].string,
					currentOffset: _propTypes2['default'].shape({
						x: _propTypes2['default'].number.isRequired,
						y: _propTypes2['default'].number.isRequired
					}),
					isDragging: _propTypes2['default'].bool.isRequired,
					rowSelection: _propTypes2['default'].object,
					rows: _propTypes2['default'].array.isRequired,
					columns: _propTypes2['default'].array.isRequired
				};

				function collect(monitor) {
					return {
						item: monitor.getItem(),
						itemType: monitor.getItemType(),
						currentOffset: monitor.getSourceClientOffset(),
						isDragging: monitor.isDragging()
					};
				}

				exports['default'] = (0, _reactDnd.DragLayer)(collect)(CustomDragLayer);

				/***/
			}),
/* 234 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _DragDropContainer = __webpack_require__(230);

				var _DragDropContainer2 = _interopRequireDefault(_DragDropContainer);

				var _DraggableHeaderCell = __webpack_require__(128);

				var _DraggableHeaderCell2 = _interopRequireDefault(_DraggableHeaderCell);

				var _RowActionsCell = __webpack_require__(232);

				var _RowActionsCell2 = _interopRequireDefault(_RowActionsCell);

				var _DropTargetRowContainer = __webpack_require__(231);

				var _DropTargetRowContainer2 = _interopRequireDefault(_DropTargetRowContainer);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				module.exports = { Container: _DragDropContainer2['default'], DraggableHeaderCell: _DraggableHeaderCell2['default'], RowActionsCell: _RowActionsCell2['default'], DropTargetRowContainer: _DropTargetRowContainer2['default'] };

				/***/
			}),
/* 235 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _propShapes = __webpack_require__(99);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var React = __webpack_require__(2);
				var ReactDOM = __webpack_require__(13);
				var ReactAutocomplete = __webpack_require__(388);

				__webpack_require__(394);


				var optionPropType = _propTypes2['default'].shape({
					id: _propTypes2['default'].required,
					title: _propTypes2['default'].string
				});

				var AutoCompleteEditor = function (_React$Component) {
					_inherits(AutoCompleteEditor, _React$Component);

					function AutoCompleteEditor() {
						var _ref;

						var _temp, _this, _ret;

						_classCallCheck(this, AutoCompleteEditor);

						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutoCompleteEditor.__proto__ || Object.getPrototypeOf(AutoCompleteEditor)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function () {
							_this.props.onCommit();
						}, _this.getValue = function () {
							var value = void 0;
							var updated = {};
							if (_this.hasResults() && _this.isFocusedOnSuggestion()) {
								value = _this.getLabel(_this.autoComplete.state.focusedValue);
								if (_this.props.valueParams) {
									value = _this.constuctValueFromParams(_this.autoComplete.state.focusedValue, _this.props.valueParams);
								}
							} else {
								value = _this.autoComplete.state.searchTerm;
							}

							updated[_this.props.column.key] = value;
							return updated;
						}, _this.getEditorDisplayValue = function () {
							var displayValue = { title: '' };
							var _this$props = _this.props,
								column = _this$props.column,
								value = _this$props.value,
								editorDisplayValue = _this$props.editorDisplayValue;

							if (editorDisplayValue && typeof editorDisplayValue === 'function') {
								displayValue.title = editorDisplayValue(column, value);
							} else {
								displayValue.title = value;
							}
							return displayValue;
						}, _this.getInputNode = function () {
							return ReactDOM.findDOMNode(_this).getElementsByTagName('input')[0];
						}, _this.getLabel = function (item) {
							var label = _this.props.label != null ? _this.props.label : 'title';
							if (typeof label === 'function') {
								return label(item);
							} else if (typeof label === 'string') {
								return item[label];
							}
						}, _this.hasResults = function () {
							return _this.autoComplete.state.results.length > 0;
						}, _this.isFocusedOnSuggestion = function () {
							var autoComplete = _this.autoComplete;
							return autoComplete.state.focusedValue != null;
						}, _this.constuctValueFromParams = function (obj, props) {
							if (!props) {
								return '';
							}

							var ret = [];
							for (var i = 0, ii = props.length; i < ii; i++) {
								ret.push(obj[props[i]]);
							}
							return ret.join('|');
						}, _this.setAutocompleteRef = function (autoComplete) {
							_this.autoComplete = autoComplete;
						}, _temp), _possibleConstructorReturn(_this, _ret);
					}

					_createClass(AutoCompleteEditor, [{
						key: 'render',
						value: function render() {
							var label = this.props.label != null ? this.props.label : 'title';
							return React.createElement(
								'div',
								{ height: this.props.height, onKeyDown: this.props.onKeyDown },
								React.createElement(ReactAutocomplete, { search: this.props.search, ref: this.setAutocompleteRef, label: label, onChange: this.handleChange, onFocus: this.props.onFocus, resultIdentifier: this.props.resultIdentifier, options: this.props.options, value: this.getEditorDisplayValue() })
							);
						}
					}]);

					return AutoCompleteEditor;
				}(React.Component);

				AutoCompleteEditor.propTypes = {
					onCommit: _propTypes2['default'].func,
					options: _propTypes2['default'].arrayOf(optionPropType),
					label: _propTypes2['default'].any,
					value: _propTypes2['default'].any,
					height: _propTypes2['default'].number,
					valueParams: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
					column: _propTypes2['default'].shape(_propShapes.ExcelColumn),
					resultIdentifier: _propTypes2['default'].string,
					search: _propTypes2['default'].string,
					onKeyDown: _propTypes2['default'].func,
					onFocus: _propTypes2['default'].func,
					editorDisplayValue: _propTypes2['default'].func
				};
				AutoCompleteEditor.defaultProps = {
					resultIdentifier: 'id'
				};


				module.exports = AutoCompleteEditor;

				/***/
			}),
/* 236 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				// Wrapper HOC used when having an editor which is a redux container.
				// Required since react-data-grid requires access to getInputNode, getValue,
				// howvever when doing this.getEditor() in react-data-grid we get a react
				// componenet wrapped by the redux connect function and thus wont have access
				// to the required methods.
				module.exports = function (ContainerEditor) {
					return function (_Component) {
						_inherits(ContainerEditorWrapper, _Component);

						function ContainerEditorWrapper() {
							var _ref;

							var _temp, _this, _ret;

							_classCallCheck(this, ContainerEditorWrapper);

							for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
								args[_key] = arguments[_key];
							}

							return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContainerEditorWrapper.__proto__ || Object.getPrototypeOf(ContainerEditorWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.createRef = function (ref) {
								_this.editorRef = ref;
							}, _temp), _possibleConstructorReturn(_this, _ret);
						}

						_createClass(ContainerEditorWrapper, [{
							key: 'getInputNode',
							value: function getInputNode() {
								return this.editorRef.getInputNode();
							}
						}, {
							key: 'getValue',
							value: function getValue() {
								return this.editorRef.getValue();
							}
						}, {
							key: 'render',
							value: function render() {
								return _react2['default'].createElement(ContainerEditor, _extends({ refCallback: this.createRef }, this.props));
							}
						}]);

						return ContainerEditorWrapper;
					}(_react.Component);
				};

				/***/
			}),
/* 237 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _editors = __webpack_require__(43);

				var _reactDom = __webpack_require__(13);

				var _reactDom2 = _interopRequireDefault(_reactDom);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var React = __webpack_require__(2);

				var DropDownEditor = function (_EditorBase) {
					_inherits(DropDownEditor, _EditorBase);

					function DropDownEditor() {
						_classCallCheck(this, DropDownEditor);

						return _possibleConstructorReturn(this, (DropDownEditor.__proto__ || Object.getPrototypeOf(DropDownEditor)).apply(this, arguments));
					}

					_createClass(DropDownEditor, [{
						key: 'getInputNode',
						value: function getInputNode() {
							return _reactDom2['default'].findDOMNode(this);
						}
					}, {
						key: 'onClick',
						value: function onClick() {
							this.getInputNode().focus();
						}
					}, {
						key: 'onDoubleClick',
						value: function onDoubleClick() {
							this.getInputNode().focus();
						}
					}, {
						key: 'render',
						value: function render() {
							return React.createElement(
								'select',
								{ style: this.getStyle(), defaultValue: this.props.value, onBlur: this.props.onBlur, onChange: this.onChange },
								this.renderOptions()
							);
						}
					}, {
						key: 'renderOptions',
						value: function renderOptions() {
							var options = [];
							this.props.options.forEach(function (name) {
								if (typeof name === 'string') {
									options.push(React.createElement(
										'option',
										{ key: name, value: name },
										name
									));
								} else {
									options.push(React.createElement(
										'option',
										{ key: name.id, value: name.value, title: name.title },
										name.text || name.value
									));
								}
							}, this);
							return options;
						}
					}]);

					return DropDownEditor;
				}(_editors.EditorBase);

				DropDownEditor.propTypes = {
					options: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].shape({
						id: _propTypes2['default'].string,
						title: _propTypes2['default'].string,
						value: _propTypes2['default'].string,
						text: _propTypes2['default'].string
					})])).isRequired
				};

				module.exports = DropDownEditor;

				/***/
			}),
/* 238 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _editors = __webpack_require__(43);

				var Editors = {
					AutoComplete: __webpack_require__(235),
					DropDownEditor: __webpack_require__(237),
					ContainerEditorWrapper: __webpack_require__(236),
					SimpleTextEditor: _editors.SimpleTextEditor,
					CheckboxEditor: _editors.CheckboxEditor
				};

				module.exports = Editors;

				/***/
			}),
/* 239 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				// Used for displaying the value of a dropdown (using DropDownEditor) when not editing it.
				// Accepts the same parameters as the DropDownEditor.
				var React = __webpack_require__(2);

				var DropDownFormatter = function (_React$Component) {
					_inherits(DropDownFormatter, _React$Component);

					function DropDownFormatter() {
						_classCallCheck(this, DropDownFormatter);

						return _possibleConstructorReturn(this, (DropDownFormatter.__proto__ || Object.getPrototypeOf(DropDownFormatter)).apply(this, arguments));
					}

					_createClass(DropDownFormatter, [{
						key: 'shouldComponentUpdate',
						value: function shouldComponentUpdate(nextProps) {
							return nextProps.value !== this.props.value;
						}
					}, {
						key: 'render',
						value: function render() {
							var value = this.props.value;
							var option = this.props.options.filter(function (v) {
								return v === value || v.value === value;
							})[0];
							if (!option) {
								option = value;
							}
							var title = option.title || option.value || option;
							var text = option.text || option.value || option;
							return React.createElement(
								'div',
								{ title: title },
								text
							);
						}
					}]);

					return DropDownFormatter;
				}(React.Component);

				DropDownFormatter.propTypes = {
					options: _propTypes2['default'].arrayOf(_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].shape({
						id: _propTypes2['default'].string,
						title: _propTypes2['default'].string,
						value: _propTypes2['default'].string,
						text: _propTypes2['default'].string
					})])).isRequired,
					value: _propTypes2['default'].string.isRequired
				};


				module.exports = DropDownFormatter;

				/***/
			}),
/* 240 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				__webpack_require__(393);

				var PendingPool = {};
				var ReadyPool = {};

				var ImageFormatter = function (_React$Component) {
					_inherits(ImageFormatter, _React$Component);

					function ImageFormatter() {
						var _ref;

						var _temp, _this, _ret;

						_classCallCheck(this, ImageFormatter);

						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageFormatter.__proto__ || Object.getPrototypeOf(ImageFormatter)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
							ready: false
						}, _this._load = function (src) {
							var imageSrc = src;
							if (ReadyPool[imageSrc]) {
								_this.setState({ value: imageSrc });
								return;
							}

							if (PendingPool[imageSrc]) {
								PendingPool[imageSrc].push(_this._onLoad);
								return;
							}

							PendingPool[imageSrc] = [_this._onLoad];

							var img = new Image();
							img.onload = function () {
								PendingPool[imageSrc].forEach(function (callback) {
									callback(imageSrc);
								});
								delete PendingPool[imageSrc];
								img.onload = null;
								imageSrc = undefined;
							};
							img.src = imageSrc;
						}, _this._onLoad = function (src) {
							if (_this._isMounted && src === _this.props.value) {
								_this.setState({
									value: src
								});
							}
						}, _temp), _possibleConstructorReturn(_this, _ret);
					}

					_createClass(ImageFormatter, [{
						key: 'componentDidMount',
						value: function componentDidMount() {
							this._isMounted = true;
							this._load(this.props.value);
						}
					}, {
						key: 'componentWillUnmount',
						value: function componentWillUnmount() {
							this._isMounted = false;
						}
					}, {
						key: 'componentWillReceiveProps',
						value: function componentWillReceiveProps(nextProps) {
							if (nextProps.value !== this.props.value) {
								this.setState({ value: null });
								this._load(nextProps.value);
							}
						}
					}, {
						key: 'render',
						value: function render() {
							var style = this.state.value ? { backgroundImage: 'url(' + this.state.value + ')' } : undefined;

							return _react2['default'].createElement('div', { className: 'react-grid-image', style: style });
						}
					}]);

					return ImageFormatter;
				}(_react2['default'].Component);

				ImageFormatter.propTypes = {
					value: _propTypes2['default'].string.isRequired
				};
				exports['default'] = ImageFormatter;

				/***/
			}),
/* 241 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _ImageFormatter = __webpack_require__(240);

				var _ImageFormatter2 = _interopRequireDefault(_ImageFormatter);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				var DropDownFormatter = __webpack_require__(239); // not including this
				// it currently requires the whole of moment, which we dont want to take as a dependency


				var Formatters = {
					ImageFormatter: _ImageFormatter2['default'],
					DropDownFormatter: DropDownFormatter
				};

				module.exports = Formatters;

				/***/
			}),
/* 242 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _RowComparer = __webpack_require__(44);

				var _RowComparer2 = _interopRequireDefault(_RowComparer);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				var Editors = __webpack_require__(238);
				var Formatters = __webpack_require__(241);
				var Toolbar = __webpack_require__(251);
				var ToolsPanel = __webpack_require__(252);
				var Data = __webpack_require__(226);
				var Menu = __webpack_require__(244);
				var Draggable = __webpack_require__(234);
				var DraggableHeader = __webpack_require__(229);
				var Filters = __webpack_require__(221);

				var performance = __webpack_require__(246);
				var Utils = { rowComparer: _RowComparer2['default'], performance: performance };

				window.ReactDataGridPlugins = { Editors: Editors, Formatters: Formatters, Toolbar: Toolbar, Menu: Menu, Data: Data, ToolsPanel: ToolsPanel, Draggable: Draggable, DraggableHeader: DraggableHeader, Filters: Filters, Utils: Utils };
				module.exports = { Editors: Editors, Formatters: Formatters, Toolbar: Toolbar, Menu: Menu, Data: Data, ToolsPanel: ToolsPanel, Draggable: Draggable, DraggableHeader: DraggableHeader, Filters: Filters, Utils: Utils };

				/***/
			}),
/* 243 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var MenuHeader = function (_React$Component) {
					_inherits(MenuHeader, _React$Component);

					function MenuHeader() {
						_classCallCheck(this, MenuHeader);

						return _possibleConstructorReturn(this, (MenuHeader.__proto__ || Object.getPrototypeOf(MenuHeader)).apply(this, arguments));
					}

					_createClass(MenuHeader, [{
						key: 'render',
						value: function render() {
							return _react2['default'].createElement(
								'div',
								{ className: 'react-context-menu-header' },
								this.props.children
							);
						}
					}]);

					return MenuHeader;
				}(_react2['default'].Component);

				MenuHeader.propTypes = {
					children: _propTypes2['default'].any
				};

				exports['default'] = MenuHeader;

				/***/
			}),
/* 244 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.ContextMenuTrigger = exports.connect = exports.SubMenu = exports.monitor = exports.MenuItem = exports.MenuHeader = exports.ContextMenu = undefined;

				var _reactContextmenu = __webpack_require__(358);

				var _MenuHeader = __webpack_require__(243);

				var _MenuHeader2 = _interopRequireDefault(_MenuHeader);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				exports.ContextMenu = _reactContextmenu.ContextMenu;
				exports.MenuHeader = _MenuHeader2['default'];
				exports.MenuItem = _reactContextmenu.MenuItem;
				exports.monitor = _reactContextmenu.monitor;
				exports.SubMenu = _reactContextmenu.SubMenu;
				exports.connect = _reactContextmenu.connect;
				exports.ContextMenuTrigger = _reactContextmenu.ContextMenuTrigger;

				/***/
			}),
/* 245 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _SummaryItemModel = __webpack_require__(129);

				var _SummaryItemModel2 = _interopRequireDefault(_SummaryItemModel);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var SummaryParser = function () {
					function SummaryParser(summary) {
						_classCallCheck(this, SummaryParser);

						this._summary = this._parseSummary(summary);
						this.getByOwner = this.getByOwner.bind(this);
						this.getSumByOwner = this.getSumByOwner.bind(this);
						this.getByComponent = this.getByComponent.bind(this);
					}

					_createClass(SummaryParser, [{
						key: '_parseSummary',
						value: function _parseSummary(summary) {
							return summary.map(function (s) {
								return new _SummaryItemModel2['default'](s);
							});
						}
					}, {
						key: 'getByOwner',
						value: function getByOwner(ownerName) {
							return this._summary.filter(function (s) {
								return s.owner === ownerName;
							});
						}
					}, {
						key: 'getSumByOwner',
						value: function getSumByOwner(ownerName) {
							var summaryItemsByOwner = this.getByOwner(ownerName);
							var summaryItem = new _SummaryItemModel2['default'](ownerName);

							summaryItemsByOwner.forEach(function (s) {
								var wastedTime = summaryItem.wastedTime,
									wastedInstances = summaryItem.wastedInstances;

								summaryItem.wastedTime = wastedTime + s.wastedTime;
								summaryItem.wastedInstances = wastedInstances + s.wastedInstances;
							});

							return summaryItem;
						}
					}, {
						key: 'getByComponent',
						value: function getByComponent(component) {
							var componentSummaryItem = this._summary.filter(function (s) {
								return s.component === component;
							});

							if (componentSummaryItem.length > 1) {
								throw new Error('More then 1 result retrived for ' + component);
							}

							if (componentSummaryItem.length === 0) {
								var emptySummary = new _SummaryItemModel2['default'](component);
								componentSummaryItem = [emptySummary];
							}

							return componentSummaryItem[0];
						}
					}]);

					return SummaryParser;
				}();

				exports['default'] = SummaryParser;

				/***/
			}),
/* 246 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _SummaryParser = __webpack_require__(245);

				var _SummaryParser2 = _interopRequireDefault(_SummaryParser);

				var _SummaryItemModel = __webpack_require__(129);

				var _SummaryItemModel2 = _interopRequireDefault(_SummaryItemModel);

				var _whyDidYouUpdate = __webpack_require__(247);

				var _whyDidYouUpdate2 = _interopRequireDefault(_whyDidYouUpdate);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				exports['default'] = {
					SummaryParser: _SummaryParser2['default'],
					SummaryItemModel: _SummaryItemModel2['default'],
					whyDidYouUpdate: _whyDidYouUpdate2['default']
				};

				/***/
			}),
/* 247 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.NOTIFY_LEVELS = undefined;

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _underscore = __webpack_require__(397);

				var _underscore2 = _interopRequireDefault(_underscore);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */


				var isRequiredUpdateObject = function isRequiredUpdateObject(o) {
					return Array.isArray(o) || o && o.constructor === Object.prototype.constructor;
				};
				var NOTIFY_LEVELS = { DEBUG: 0, WARNING: 1, NONE: 2 };
				var isLogEnabled = function isLogEnabled(lvl) {
					return lvl !== NOTIFY_LEVELS.NONE;
				};
				var isStatusTypeLoggable = function isStatusTypeLoggable(s, lvl) {
					return s <= lvl;
				};

				var deepDiff = function deepDiff(o1, o2, p, notifyLevel) {
					var notify = function notify(status, statusType) {
						if (isStatusTypeLoggable(statusType, notifyLevel)) {
							console.warn('Update %s', status);
							console.log('%cbefore', 'font-weight: bold', o1);
							console.log('%cafter ', 'font-weight: bold', o2);
						}
					};

					if (!_underscore2['default'].isEqual(o1, o2)) {
						console.group(p);
						if ([o1, o2].every(_underscore2['default'].isFunction)) {
							notify('avoidable?', NOTIFY_LEVELS.WARNING);
						} else if (![o1, o2].every(isRequiredUpdateObject)) {
							notify('required.', NOTIFY_LEVELS.DEBUG);
						} else {
							var keys = _underscore2['default'].union(_underscore2['default'].keys(o1), _underscore2['default'].keys(o2));
							var _iteratorNormalCompletion = true;
							var _didIteratorError = false;
							var _iteratorError = undefined;

							try {
								for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									var key = _step.value;

									deepDiff(o1[key], o2[key], key);
								}
							} catch (err) {
								_didIteratorError = true;
								_iteratorError = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion && _iterator['return']) {
										_iterator['return']();
									}
								} finally {
									if (_didIteratorError) {
										throw _iteratorError;
									}
								}
							}
						}

						console.groupEnd();
					} else if (o1 !== o2) {
						console.group(p);
						notify('avoidable!', NOTIFY_LEVELS.WARNING);
						if (_underscore2['default'].isObject(o1) && _underscore2['default'].isObject(o2)) {
							var _keys = _underscore2['default'].union(_underscore2['default'].keys(o1), _underscore2['default'].keys(o2));
							var _iteratorNormalCompletion2 = true;
							var _didIteratorError2 = false;
							var _iteratorError2 = undefined;

							try {
								for (var _iterator2 = _keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var _key = _step2.value;

									deepDiff(o1[_key], o2[_key], _key);
								}
							} catch (err) {
								_didIteratorError2 = true;
								_iteratorError2 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion2 && _iterator2['return']) {
										_iterator2['return']();
									}
								} finally {
									if (_didIteratorError2) {
										throw _iteratorError2;
									}
								}
							}
						}
						console.groupEnd();
					}
				};

				var whyDidYouUpdate = function whyDidYouUpdate(WrappedComponent) {
					var notifyLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NOTIFY_LEVELS.NONE;

					return function (_Component) {
						_inherits(WhyDidYouUpdateComponentWrapper, _Component);

						function WhyDidYouUpdateComponentWrapper() {
							_classCallCheck(this, WhyDidYouUpdateComponentWrapper);

							return _possibleConstructorReturn(this, (WhyDidYouUpdateComponentWrapper.__proto__ || Object.getPrototypeOf(WhyDidYouUpdateComponentWrapper)).apply(this, arguments));
						}

						_createClass(WhyDidYouUpdateComponentWrapper, [{
							key: 'componentDidUpdate',
							value: function componentDidUpdate(prevProps, prevState) {
								if (!isLogEnabled(notifyLevel)) {
									return;
								}

								deepDiff({ props: prevProps, state: prevState }, { props: this.props, state: this.state }, WrappedComponent.displayName, notifyLevel);
							}
						}, {
							key: 'render',
							value: function render() {
								return _react2['default'].createElement(WrappedComponent, _extends({}, this.props, this.state));
							}
						}]);

						return WhyDidYouUpdateComponentWrapper;
					}(_react.Component);
				};

				exports['default'] = whyDidYouUpdate;
				exports.NOTIFY_LEVELS = NOTIFY_LEVELS;

				/***/
			}),
/* 248 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				__webpack_require__(167);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var propTypes = {
					children: _propTypes2['default'].array
				};

				var defaultProps = {
					enableAddRow: true
				};

				var AdvancedToolbar = function (_Component) {
					_inherits(AdvancedToolbar, _Component);

					function AdvancedToolbar() {
						_classCallCheck(this, AdvancedToolbar);

						return _possibleConstructorReturn(this, (AdvancedToolbar.__proto__ || Object.getPrototypeOf(AdvancedToolbar)).apply(this, arguments));
					}

					_createClass(AdvancedToolbar, [{
						key: 'render',
						value: function render() {
							return _react2['default'].createElement(
								'div',
								{ className: 'react-grid-Toolbar' },
								this.props.children,
								_react2['default'].createElement('div', { className: 'tools' })
							);
						}
					}]);

					return AdvancedToolbar;
				}(_react.Component);

				AdvancedToolbar.defaultProps = defaultProps;
				AdvancedToolbar.propTypes = propTypes;

				exports['default'] = AdvancedToolbar;

				/***/
			}),
/* 249 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var GroupedColumnButton = function (_Component) {
					_inherits(GroupedColumnButton, _Component);

					function GroupedColumnButton() {
						_classCallCheck(this, GroupedColumnButton);

						return _possibleConstructorReturn(this, (GroupedColumnButton.__proto__ || Object.getPrototypeOf(GroupedColumnButton)).apply(this, arguments));
					}

					_createClass(GroupedColumnButton, [{
						key: 'render',
						value: function render() { /// here
							return _react2['default'].createElement(
								'div',
								{ className: 'drop-item' },
								this.props.name,
								_react2['default'].createElement('span', {
									className: 'remove',
									onClick: this.props.onColumnGroupDeleted.bind(null, this.props.columnKey)
								}, "x")
							);
						}
					}]);

					return GroupedColumnButton;
				}(_react.Component);

				exports['default'] = GroupedColumnButton;


				GroupedColumnButton.propTypes = {
					name: _propTypes2['default'].string.isRequired,
					onColumnGroupDeleted: _propTypes2['default'].func,
					columnKey: _propTypes2['default'].string.isRequired
				};

				/***/
			}),
/* 250 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _reactDnd = __webpack_require__(25);

				var _GroupedColumnButton = __webpack_require__(249);

				var _GroupedColumnButton2 = _interopRequireDefault(_GroupedColumnButton);

				var _constants = __webpack_require__(11);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var propTypes = {
					isOver: _propTypes2['default'].bool.isRequired,
					connectDropTarget: _propTypes2['default'].func,
					canDrop: _propTypes2['default'].bool.isRequired,
					groupBy: _propTypes2['default'].array,
					noColumnsSelectedMessage: _propTypes2['default'].string,
					panelDescription: _propTypes2['default'].string,
					onColumnGroupDeleted: _propTypes2['default'].func
				};

				var defaultProps = {
					noColumnsSelectedMessage: 'Drag a column header here to group by that column',
					panelDescription: 'Drag a column header here to group by that column'
				};

				var GroupedColumnsPanel = function (_Component) {
					_inherits(GroupedColumnsPanel, _Component);

					function GroupedColumnsPanel() {
						_classCallCheck(this, GroupedColumnsPanel);

						return _possibleConstructorReturn(this, (GroupedColumnsPanel.__proto__ || Object.getPrototypeOf(GroupedColumnsPanel)).call(this));
					}

					_createClass(GroupedColumnsPanel, [{
						key: 'getPanelInstructionMessage',
						value: function getPanelInstructionMessage() {
							var groupBy = this.props.groupBy;

							return groupBy && groupBy.length > 0 ? this.props.panelDescription : this.props.noColumnsSelectedMessage;
						}
					}, {
						key: 'renderGroupedColumns',
						value: function renderGroupedColumns() {
							var _this2 = this;

							return this.props.groupBy.map(function (c) {
								var groupedColumnButtonProps = {
									columnKey: typeof c === 'string' ? c : c.key,
									name: typeof c === 'string' ? c : c.name,
									onColumnGroupDeleted: _this2.props.onColumnGroupDeleted,
									key: typeof c === 'string' ? c : c.key
								};
								return _react2['default'].createElement(_GroupedColumnButton2['default'], groupedColumnButtonProps);
							});
						}
					}, { // here 
						key: 'renderOverlay',
						value: function renderOverlay(color) {
							return _react2['default'].createElement('div', {
								className: 'datagrid-grouping active',
								style: {
									position: 'absolute',
									top: 0,
									left: 0,
									height: '100%',
									width: '100%',
									zIndex: 1,
									opacity: 1,
									backgroundColor: color,
									border: '4px dashed rgba(255, 255, 255, 0.3)'
								}
							});
						}
					}, {
						key: 'render',
						value: function render() {
							var _props = this.props,
								connectDropTarget = _props.connectDropTarget,
								isOver = _props.isOver,
								canDrop = _props.canDrop;
							// here
							return connectDropTarget(_react2['default'].createElement(
								'div',
								{ className: 'selecteDiv', style: { padding: '0', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 } },
								_react2['default'].createElement(
									'div',
									{ className: 'data-dark' },
									this.renderGroupedColumns(),
									'',
								),
								_react2['default'].createElement(
									'span',
									{ className: 'dragMessage' },
									null,
									this.getPanelInstructionMessage()
								),
								isOver && canDrop && this.renderOverlay('#e74c3c'),
								!isOver && canDrop && this.renderOverlay('#e74c3c')
							));
						}
					}]);

					return GroupedColumnsPanel;
				}(_react.Component);

				GroupedColumnsPanel.defaultProps = defaultProps;
				GroupedColumnsPanel.propTypes = propTypes;

				var columnTarget = {
					drop: function drop(props, monitor) {
						// Obtain the dragged item
						var item = monitor.getItem();
						if (typeof props.onColumnGroupAdded === 'function') {
							props.onColumnGroupAdded(item.key);
						}
					}
				};

				function collect(connect, monitor) {
					return {
						connectDropTarget: connect.dropTarget(),
						isOver: monitor.isOver(),
						canDrop: monitor.canDrop(),
						draggedolumn: monitor.getItem()
					};
				}

				exports['default'] = (0, _reactDnd.DropTarget)(_constants.DragItemTypes.Column, columnTarget, collect)(GroupedColumnsPanel);

				/***/
			}),
/* 251 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var React = __webpack_require__(2);
				__webpack_require__(167);

				var Toolbar = function (_React$Component) {
					_inherits(Toolbar, _React$Component);

					function Toolbar() {
						var _ref;

						var _temp, _this, _ret;

						_classCallCheck(this, Toolbar);

						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call.apply(_ref, [this].concat(args))), _this), _this.onAddRow = function () {
							if (_this.props.onAddRow !== null && _this.props.onAddRow instanceof Function) {
								_this.props.onAddRow({ newRowIndex: _this.props.numberOfRows });
							}
						}, _this.renderAddRowButton = function () {
							if (_this.props.onAddRow) {
								return React.createElement(
									'button',
									{ type: 'button', className: 'btn', onClick: _this.onAddRow },
									_this.props.addRowButtonText
								);
							}
						}, _this.renderToggleFilterButton = function () {
							if (_this.props.enableFilter) {
								return React.createElement(
									'button',
									{ type: 'button', className: 'btn', onClick: _this.props.onToggleFilter },
									_this.props.filterRowsButtonText
								);
							}
						}, _temp), _possibleConstructorReturn(_this, _ret);
					}

					_createClass(Toolbar, [{
						key: 'render',
						value: function render() {
							return React.createElement(
								'div',
								{ className: 'react-grid-Toolbar' },
								React.createElement(
									'div',
									{ className: 'tools' },
									this.renderAddRowButton(),
									this.renderToggleFilterButton(),
									this.props.children
								)
							);
						}
					}]);

					return Toolbar;
				}(React.Component);

				Toolbar.propTypes = {
					onAddRow: _propTypes2['default'].func,
					onToggleFilter: _propTypes2['default'].func,
					enableFilter: _propTypes2['default'].bool,
					numberOfRows: _propTypes2['default'].number,
					addRowButtonText: _propTypes2['default'].string,
					filterRowsButtonText: _propTypes2['default'].string,
					children: _propTypes2['default'].any
				};
				Toolbar.defaultProps = {
					enableAddRow: true,
					addRowButtonText: 'Add Row',
					filterRowsButtonText: 'Filter Rows'
				};


				module.exports = Toolbar;

				/***/
			}),
/* 252 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				var _AdvancedToolbar = __webpack_require__(248);

				var _AdvancedToolbar2 = _interopRequireDefault(_AdvancedToolbar);

				var _GroupedColumnsPanel = __webpack_require__(250);

				var _GroupedColumnsPanel2 = _interopRequireDefault(_GroupedColumnsPanel);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				module.exports = { AdvancedToolbar: _AdvancedToolbar2['default'], GroupedColumnsPanel: _GroupedColumnsPanel2['default'] };

				/***/
			}),
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */
/***/ (function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(8)();
				// imports


				// module
				exports.push([module.id, ".Select{position:relative}.Select input::-webkit-contacts-auto-fill-button,.Select input::-webkit-credentials-auto-fill-button{display:none!important}.Select input::-ms-clear,.Select input::-ms-reveal{display:none!important}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:.35}.Select.is-disabled>.Select-control{background-color:#f9f9f9}.Select.is-disabled>.Select-control:hover{box-shadow:none}.Select.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.Select.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.Select.is-searchable.is-focused:not(.is-open)>.Select-control,.Select.is-searchable.is-open>.Select-control{cursor:text}.Select.is-focused>.Select-control{background:#fff}.Select.is-focused:not(.is-open)>.Select-control{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1);background:#fff}.Select.has-value.is-clearable.Select--single>.Select-control .Select-value{padding-right:42px}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value .Select-value-label{color:#333}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus,.Select.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus{background:#fff}.Select.has-value.is-pseudo-focused .Select-input{opacity:0}.Select.is-open .Select-arrow,.Select .Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}.Select.Select--rtl{direction:rtl;text-align:right}.Select-control{background-color:#fff;border-color:#d9d9d9 #ccc #b3b3b3;border-radius:4px;border:1px solid #ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%}.Select-control:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.Select-control .Select-input:focus{outline:none;background:#fff}.Select--single>.Select-control .Select-value,.Select-placeholder{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{width:100%;background:none transparent;border:0 none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:17px;padding:8px 0 12px;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;text-align:center}.Select-loading,.Select-loading-zone{position:relative;vertical-align:middle;width:16px}.Select-loading{-webkit-animation:Select-animation-spin .4s infinite linear;-o-animation:Select-animation-spin .4s infinite linear;animation:Select-animation-spin .4s infinite linear;height:16px;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn .2s;-o-animation:Select-animation-fadeIn .2s;animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px}.Select-clear-zone:hover{color:#d0021b}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px}.Select--rtl .Select-arrow-zone{padding-right:0;padding-left:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative}.Select-control>:last-child{padding-right:5px}.Select--multi .Select-multi-value-wrapper{display:inline-block}.Select .Select-aria-only{position:absolute;display:inline-block;height:1px;width:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;float:left}@-webkit-keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-shadow:0 1px 0 rgba(0,0,0,.06);box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;left:0;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch}.Select-menu{max-height:198px;overflow-y:auto}.Select-option{box-sizing:border-box;background-color:#fff;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,.04);color:#333}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);color:#333}.Select-option.is-disabled{color:#ccc;cursor:default}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.Select--rtl .Select-input{margin-left:0;margin-right:10px}.Select--multi.has-value .Select-input{margin-left:5px}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,.24);color:#007eff;display:inline-block;font-size:.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid #c2e0ff;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px 3px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:#d8eafd;background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,.24)}.Select--multi.Select--rtl .Select-value{margin-left:0;margin-right:5px}.Select--multi.Select--rtl .Select-value-icon{border-right:none;border-left:1px solid #c2e0ff;border-left:1px solid rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}@-webkit-keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}", ""]);

				// exports


				/***/
			}),
/* 282 */,
/* 283 */,
/* 284 */
/***/ (function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(8)();
				// imports


				// module
				exports.push([module.id, ".slideUp{-webkit-animation-name:slideUp;animation-name:slideUp;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease;animation-timing-function:ease;visibility:visible!important}@keyframes slideUp{0%{transform:translateY(100%)}50%{transform:translateY(-8%)}65%{transform:translateY(4%)}80%{transform:translateY(-4%)}95%{transform:translateY(2%)}to{transform:translateY(0)}}@-webkit-keyframes slideUp{0%{-webkit-transform:translateY(100%)}50%{-webkit-transform:translateY(-8%)}65%{-webkit-transform:translateY(4%)}80%{-webkit-transform:translateY(-4%)}95%{-webkit-transform:translateY(2%)}to{-webkit-transform:translateY(0)}}.rowDropTarget{position:absolute;left:0;width:100%;z-index:1;border-bottom:1px solid #000}", ""]);

				// exports


				/***/
			}),
/* 285 */,
/* 286 */
/***/ (function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(8)();
				// imports


				// module
				exports.push([module.id, ".react-grid-image{background:#efefef;background-size:100%;display:inline-block;height:40px;width:40px}", ""]);

				// exports

				/***/
			}),
/* 287 */
/***/ (function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(8)();
				// imports


				// module
				exports.push([module.id, ".react-grid-Toolbar{background-color: #E9ECF0;height: 40px;display: flex;justify-content: flex-start;margin-bottom:0;align-items: center;position: relative;}.react-grid-Toolbar .btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;color:inherit;background:#fff;border:1px solid #e7eaec}.react-grid-Toolbar .btn:hover{color:inherit;border:1px solid #d2d2d2}.react-grid-Toolbar .grouped-col-btn{background-color:#428bca;color:#fff;border-color:#2b669a}.react-grid-Toolbar .grouped-col-btn:hover{color:#fff;border-color:#2b669a}.react-grid-Toolbar .grouped-col-btn+.grouped-col-btn,.react-grid-Toolbar .grouped-col-btn__remove{margin-left:5px}.react-grid-Toolbar .tools{display:inline-block;float:right;margin-top:0;position:relative;padding:0;margin-top:-6px}", ""]);

				// exports


				/***/
			}),
/* 288 */
/***/ (function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(8)();
				// imports


				// module
				exports.push([module.id, ".react-autocomplete-Autocomplete__search{display:block;width:100%;height:36px;padding:6px 12px;font-size:14px;line-height:1.6;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.react-autocomplete-Autocomplete__search:focus{border-color:#a21618;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(162,22,24,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(162,22,24,.6)}.react-autocomplete-Autocomplete__search::-moz-placeholder{color:#777;opacity:1}.react-autocomplete-Autocomplete__search:-ms-input-placeholder{color:#777}.react-autocomplete-Autocomplete__search::-webkit-input-placeholder{color:#777}.react-autocomplete-Autocomplete__search[disabled],.react-autocomplete-Autocomplete__search[readonly],fieldset[disabled] .react-autocomplete-Autocomplete__search{cursor:not-allowed;background-color:#eee;opacity:1}textarea.react-autocomplete-Autocomplete__search{height:auto}.react-autocomplete-Autocomplete__results{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;text-align:left;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175);background-clip:padding-box;min-width:250px;width:100%;max-height:200px;overflow:auto}.react-autocomplete-Autocomplete__results.pull-right{right:auto;left:10px;font-size:14px;}.react-autocomplete-Autocomplete__results .divider{height:1px;margin:10px 0;overflow:hidden;background-color:#e5e5e5}.react-autocomplete-Autocomplete__results>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.6;color:#333;white-space:nowrap}.react-autocomplete-Autocomplete__results div.action-button{display:block!important;padding:4px}.react-autocomplete-Result{cursor:pointer}.react-autocomplete-Result>a{text-decoration:none}.react-autocomplete-Result--active{color:#262626;background-color:#f5f5f5}", ""]);

				// exports


				/***/
			}),
/* 289 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				exports.__esModule = true;

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

				var _isDisposable = __webpack_require__(82);

				var _isDisposable2 = _interopRequireDefault(_isDisposable);

				/**
				 * Represents a group of disposable resources that are disposed together.
				 */

				var CompositeDisposable = (function () {
					function CompositeDisposable() {
						for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
							disposables[_key] = arguments[_key];
						}

						_classCallCheck(this, CompositeDisposable);

						if (Array.isArray(disposables[0]) && disposables.length === 1) {
							disposables = disposables[0];
						}

						for (var i = 0; i < disposables.length; i++) {
							if (!_isDisposable2['default'](disposables[i])) {
								throw new Error('Expected a disposable');
							}
						}

						this.disposables = disposables;
						this.isDisposed = false;
					}

					/**
					 * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
					 * @param {Disposable} item Disposable to add.
					 */

					CompositeDisposable.prototype.add = function add(item) {
						if (this.isDisposed) {
							item.dispose();
						} else {
							this.disposables.push(item);
						}
					};

					/**
					 * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
					 * @param {Disposable} item Disposable to remove.
					 * @returns {Boolean} true if found; false otherwise.
					 */

					CompositeDisposable.prototype.remove = function remove(item) {
						if (this.isDisposed) {
							return false;
						}

						var index = this.disposables.indexOf(item);
						if (index === -1) {
							return false;
						}

						this.disposables.splice(index, 1);
						item.dispose();
						return true;
					};

					/**
					 * Disposes all disposables in the group and removes them from the group.
					 */

					CompositeDisposable.prototype.dispose = function dispose() {
						if (this.isDisposed) {
							return;
						}

						var len = this.disposables.length;
						var currentDisposables = new Array(len);
						for (var i = 0; i < len; i++) {
							currentDisposables[i] = this.disposables[i];
						}

						this.isDisposed = true;
						this.disposables = [];
						this.length = 0;

						for (var i = 0; i < len; i++) {
							currentDisposables[i].dispose();
						}
					};

					return CompositeDisposable;
				})();

				exports['default'] = CompositeDisposable;
				module.exports = exports['default'];

				/***/
			}),
/* 290 */
/***/ (function (module, exports) {

				"use strict";

				exports.__esModule = true;

				var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var noop = function noop() { };

				/**
				 * The basic disposable.
				 */

				var Disposable = (function () {
					_createClass(Disposable, null, [{
						key: "empty",
						value: { dispose: noop },
						enumerable: true
					}]);

					function Disposable(action) {
						_classCallCheck(this, Disposable);

						this.isDisposed = false;
						this.action = action || noop;
					}

					Disposable.prototype.dispose = function dispose() {
						if (!this.isDisposed) {
							this.action.call(null);
							this.isDisposed = true;
						}
					};

					return Disposable;
				})();

				exports["default"] = Disposable;
				module.exports = exports["default"];

				/***/
			}),
/* 291 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				exports.__esModule = true;

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

				var _isDisposable = __webpack_require__(82);

				var _isDisposable2 = _interopRequireDefault(_isDisposable);

				var SerialDisposable = (function () {
					function SerialDisposable() {
						_classCallCheck(this, SerialDisposable);

						this.isDisposed = false;
						this.current = null;
					}

					/**
					 * Gets the underlying disposable.
					 * @return The underlying disposable.
					 */

					SerialDisposable.prototype.getDisposable = function getDisposable() {
						return this.current;
					};

					/**
					 * Sets the underlying disposable.
					 * @param {Disposable} value The new underlying disposable.
					 */

					SerialDisposable.prototype.setDisposable = function setDisposable() {
						var value = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

						if (value != null && !_isDisposable2['default'](value)) {
							throw new Error('Expected either an empty value or a valid disposable');
						}

						var isDisposed = this.isDisposed;
						var previous = undefined;

						if (!isDisposed) {
							previous = this.current;
							this.current = value;
						}

						if (previous) {
							previous.dispose();
						}

						if (isDisposed && value) {
							value.dispose();
						}
					};

					/**
					 * Disposes the underlying disposable as well as all future replacements.
					 */

					SerialDisposable.prototype.dispose = function dispose() {
						if (this.isDisposed) {
							return;
						}

						this.isDisposed = true;
						var previous = this.current;
						this.current = null;

						if (previous) {
							previous.dispose();
						}
					};

					return SerialDisposable;
				})();

				exports['default'] = SerialDisposable;
				module.exports = exports['default'];

				/***/
			}),
/* 292 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				exports.__esModule = true;

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				var _isDisposable2 = __webpack_require__(82);

				var _isDisposable3 = _interopRequireDefault(_isDisposable2);

				exports.isDisposable = _isDisposable3['default'];

				var _Disposable2 = __webpack_require__(290);

				var _Disposable3 = _interopRequireDefault(_Disposable2);

				exports.Disposable = _Disposable3['default'];

				var _CompositeDisposable2 = __webpack_require__(289);

				var _CompositeDisposable3 = _interopRequireDefault(_CompositeDisposable2);

				exports.CompositeDisposable = _CompositeDisposable3['default'];

				var _SerialDisposable2 = __webpack_require__(291);

				var _SerialDisposable3 = _interopRequireDefault(_SerialDisposable2);

				exports.SerialDisposable = _SerialDisposable3['default'];

				/***/
			}),
/* 293 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _createStore = __webpack_require__(386);

				var _createStore2 = _interopRequireDefault(_createStore);

				var _reducers = __webpack_require__(301);

				var _reducers2 = _interopRequireDefault(_reducers);

				var _dragDrop = __webpack_require__(50);

				var dragDropActions = _interopRequireWildcard(_dragDrop);

				var _DragDropMonitor = __webpack_require__(294);

				var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);

				function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var DragDropManager = function () {
					function DragDropManager(createBackend) {
						var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

						_classCallCheck(this, DragDropManager);

						var store = (0, _createStore2.default)(_reducers2.default);
						this.context = context;
						this.store = store;
						this.monitor = new _DragDropMonitor2.default(store);
						this.registry = this.monitor.registry;
						this.backend = createBackend(this);

						store.subscribe(this.handleRefCountChange.bind(this));
					}

					_createClass(DragDropManager, [{
						key: 'handleRefCountChange',
						value: function handleRefCountChange() {
							var shouldSetUp = this.store.getState().refCount > 0;
							if (shouldSetUp && !this.isSetUp) {
								this.backend.setup();
								this.isSetUp = true;
							} else if (!shouldSetUp && this.isSetUp) {
								this.backend.teardown();
								this.isSetUp = false;
							}
						}
					}, {
						key: 'getContext',
						value: function getContext() {
							return this.context;
						}
					}, {
						key: 'getMonitor',
						value: function getMonitor() {
							return this.monitor;
						}
					}, {
						key: 'getBackend',
						value: function getBackend() {
							return this.backend;
						}
					}, {
						key: 'getRegistry',
						value: function getRegistry() {
							return this.registry;
						}
					}, {
						key: 'getActions',
						value: function getActions() {
							var manager = this;
							var dispatch = this.store.dispatch;


							function bindActionCreator(actionCreator) {
								return function () {
									for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
										args[_key] = arguments[_key];
									}

									var action = actionCreator.apply(manager, args);
									if (typeof action !== 'undefined') {
										dispatch(action);
									}
								};
							}

							return Object.keys(dragDropActions).filter(function (key) {
								return typeof dragDropActions[key] === 'function';
							}).reduce(function (boundActions, key) {
								var action = dragDropActions[key];
								boundActions[key] = bindActionCreator(action); // eslint-disable-line no-param-reassign
								return boundActions;
							}, {});
						}
					}]);

					return DragDropManager;
				}();

				exports.default = DragDropManager;

				/***/
			}),
/* 294 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _isArray = __webpack_require__(7);

				var _isArray2 = _interopRequireDefault(_isArray);

				var _matchesType = __webpack_require__(142);

				var _matchesType2 = _interopRequireDefault(_matchesType);

				var _HandlerRegistry = __webpack_require__(297);

				var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

				var _dragOffset = __webpack_require__(141);

				var _dirtyHandlerIds = __webpack_require__(140);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var DragDropMonitor = function () {
					function DragDropMonitor(store) {
						_classCallCheck(this, DragDropMonitor);

						this.store = store;
						this.registry = new _HandlerRegistry2.default(store);
					}

					_createClass(DragDropMonitor, [{
						key: 'subscribeToStateChange',
						value: function subscribeToStateChange(listener) {
							var _this = this;

							var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
							var handlerIds = options.handlerIds;

							(0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');
							(0, _invariant2.default)(typeof handlerIds === 'undefined' || (0, _isArray2.default)(handlerIds), 'handlerIds, when specified, must be an array of strings.');

							var prevStateId = this.store.getState().stateId;
							var handleChange = function handleChange() {
								var state = _this.store.getState();
								var currentStateId = state.stateId;
								try {
									var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, _dirtyHandlerIds.areDirty)(state.dirtyHandlerIds, handlerIds);

									if (!canSkipListener) {
										listener();
									}
								} finally {
									prevStateId = currentStateId;
								}
							};

							return this.store.subscribe(handleChange);
						}
					}, {
						key: 'subscribeToOffsetChange',
						value: function subscribeToOffsetChange(listener) {
							var _this2 = this;

							(0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');

							var previousState = this.store.getState().dragOffset;
							var handleChange = function handleChange() {
								var nextState = _this2.store.getState().dragOffset;
								if (nextState === previousState) {
									return;
								}

								previousState = nextState;
								listener();
							};

							return this.store.subscribe(handleChange);
						}
					}, {
						key: 'canDragSource',
						value: function canDragSource(sourceId) {
							var source = this.registry.getSource(sourceId);
							(0, _invariant2.default)(source, 'Expected to find a valid source.');

							if (this.isDragging()) {
								return false;
							}

							return source.canDrag(this, sourceId);
						}
					}, {
						key: 'canDropOnTarget',
						value: function canDropOnTarget(targetId) {
							var target = this.registry.getTarget(targetId);
							(0, _invariant2.default)(target, 'Expected to find a valid target.');

							if (!this.isDragging() || this.didDrop()) {
								return false;
							}

							var targetType = this.registry.getTargetType(targetId);
							var draggedItemType = this.getItemType();
							return (0, _matchesType2.default)(targetType, draggedItemType) && target.canDrop(this, targetId);
						}
					}, {
						key: 'isDragging',
						value: function isDragging() {
							return Boolean(this.getItemType());
						}
					}, {
						key: 'isDraggingSource',
						value: function isDraggingSource(sourceId) {
							var source = this.registry.getSource(sourceId, true);
							(0, _invariant2.default)(source, 'Expected to find a valid source.');

							if (!this.isDragging() || !this.isSourcePublic()) {
								return false;
							}

							var sourceType = this.registry.getSourceType(sourceId);
							var draggedItemType = this.getItemType();
							if (sourceType !== draggedItemType) {
								return false;
							}

							return source.isDragging(this, sourceId);
						}
					}, {
						key: 'isOverTarget',
						value: function isOverTarget(targetId) {
							var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { shallow: false };
							var shallow = options.shallow;

							if (!this.isDragging()) {
								return false;
							}

							var targetType = this.registry.getTargetType(targetId);
							var draggedItemType = this.getItemType();
							if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
								return false;
							}

							var targetIds = this.getTargetIds();
							if (!targetIds.length) {
								return false;
							}

							var index = targetIds.indexOf(targetId);
							if (shallow) {
								return index === targetIds.length - 1;
							} else {
								return index > -1;
							}
						}
					}, {
						key: 'getItemType',
						value: function getItemType() {
							return this.store.getState().dragOperation.itemType;
						}
					}, {
						key: 'getItem',
						value: function getItem() {
							return this.store.getState().dragOperation.item;
						}
					}, {
						key: 'getSourceId',
						value: function getSourceId() {
							return this.store.getState().dragOperation.sourceId;
						}
					}, {
						key: 'getTargetIds',
						value: function getTargetIds() {
							return this.store.getState().dragOperation.targetIds;
						}
					}, {
						key: 'getDropResult',
						value: function getDropResult() {
							return this.store.getState().dragOperation.dropResult;
						}
					}, {
						key: 'didDrop',
						value: function didDrop() {
							return this.store.getState().dragOperation.didDrop;
						}
					}, {
						key: 'isSourcePublic',
						value: function isSourcePublic() {
							return this.store.getState().dragOperation.isSourcePublic;
						}
					}, {
						key: 'getInitialClientOffset',
						value: function getInitialClientOffset() {
							return this.store.getState().dragOffset.initialClientOffset;
						}
					}, {
						key: 'getInitialSourceClientOffset',
						value: function getInitialSourceClientOffset() {
							return this.store.getState().dragOffset.initialSourceClientOffset;
						}
					}, {
						key: 'getClientOffset',
						value: function getClientOffset() {
							return this.store.getState().dragOffset.clientOffset;
						}
					}, {
						key: 'getSourceClientOffset',
						value: function getSourceClientOffset() {
							return (0, _dragOffset.getSourceClientOffset)(this.store.getState().dragOffset);
						}
					}, {
						key: 'getDifferenceFromInitialOffset',
						value: function getDifferenceFromInitialOffset() {
							return (0, _dragOffset.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
						}
					}]);

					return DragDropMonitor;
				}();

				exports.default = DragDropMonitor;

				/***/
			}),
/* 295 */
/***/ (function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var DragSource = function () {
					function DragSource() {
						_classCallCheck(this, DragSource);
					}

					_createClass(DragSource, [{
						key: "canDrag",
						value: function canDrag() {
							return true;
						}
					}, {
						key: "isDragging",
						value: function isDragging(monitor, handle) {
							return handle === monitor.getSourceId();
						}
					}, {
						key: "endDrag",
						value: function endDrag() { }
					}]);

					return DragSource;
				}();

				exports.default = DragSource;

				/***/
			}),
/* 296 */
/***/ (function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var DropTarget = function () {
					function DropTarget() {
						_classCallCheck(this, DropTarget);
					}

					_createClass(DropTarget, [{
						key: "canDrop",
						value: function canDrop() {
							return true;
						}
					}, {
						key: "hover",
						value: function hover() { }
					}, {
						key: "drop",
						value: function drop() { }
					}]);

					return DropTarget;
				}();

				exports.default = DropTarget;

				/***/
			}),
/* 297 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _isArray = __webpack_require__(7);

				var _isArray2 = _interopRequireDefault(_isArray);

				var _asap = __webpack_require__(214);

				var _asap2 = _interopRequireDefault(_asap);

				var _registry = __webpack_require__(51);

				var _getNextUniqueId = __webpack_require__(304);

				var _getNextUniqueId2 = _interopRequireDefault(_getNextUniqueId);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var HandlerRoles = {
					SOURCE: 'SOURCE',
					TARGET: 'TARGET'
				};

				function validateSourceContract(source) {
					(0, _invariant2.default)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
					(0, _invariant2.default)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
					(0, _invariant2.default)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
				}

				function validateTargetContract(target) {
					(0, _invariant2.default)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
					(0, _invariant2.default)(typeof target.hover === 'function', 'Expected hover to be a function.');
					(0, _invariant2.default)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
				}

				function validateType(type, allowArray) {
					if (allowArray && (0, _isArray2.default)(type)) {
						type.forEach(function (t) {
							return validateType(t, false);
						});
						return;
					}

					(0, _invariant2.default)(typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
				}

				function getNextHandlerId(role) {
					var id = (0, _getNextUniqueId2.default)().toString();
					switch (role) {
						case HandlerRoles.SOURCE:
							return 'S' + id;
						case HandlerRoles.TARGET:
							return 'T' + id;
						default:
							(0, _invariant2.default)(false, 'Unknown role: ' + role);
					}
				}

				function parseRoleFromHandlerId(handlerId) {
					switch (handlerId[0]) {
						case 'S':
							return HandlerRoles.SOURCE;
						case 'T':
							return HandlerRoles.TARGET;
						default:
							(0, _invariant2.default)(false, 'Cannot parse handler ID: ' + handlerId);
					}
				}

				var HandlerRegistry = function () {
					function HandlerRegistry(store) {
						_classCallCheck(this, HandlerRegistry);

						this.store = store;

						this.types = {};
						this.handlers = {};

						this.pinnedSourceId = null;
						this.pinnedSource = null;
					}

					_createClass(HandlerRegistry, [{
						key: 'addSource',
						value: function addSource(type, source) {
							validateType(type);
							validateSourceContract(source);

							var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
							this.store.dispatch((0, _registry.addSource)(sourceId));
							return sourceId;
						}
					}, {
						key: 'addTarget',
						value: function addTarget(type, target) {
							validateType(type, true);
							validateTargetContract(target);

							var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
							this.store.dispatch((0, _registry.addTarget)(targetId));
							return targetId;
						}
					}, {
						key: 'addHandler',
						value: function addHandler(role, type, handler) {
							var id = getNextHandlerId(role);
							this.types[id] = type;
							this.handlers[id] = handler;

							return id;
						}
					}, {
						key: 'containsHandler',
						value: function containsHandler(handler) {
							var _this = this;

							return Object.keys(this.handlers).some(function (key) {
								return _this.handlers[key] === handler;
							});
						}
					}, {
						key: 'getSource',
						value: function getSource(sourceId, includePinned) {
							(0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');

							var isPinned = includePinned && sourceId === this.pinnedSourceId;
							var source = isPinned ? this.pinnedSource : this.handlers[sourceId];

							return source;
						}
					}, {
						key: 'getTarget',
						value: function getTarget(targetId) {
							(0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
							return this.handlers[targetId];
						}
					}, {
						key: 'getSourceType',
						value: function getSourceType(sourceId) {
							(0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');
							return this.types[sourceId];
						}
					}, {
						key: 'getTargetType',
						value: function getTargetType(targetId) {
							(0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
							return this.types[targetId];
						}
					}, {
						key: 'isSourceId',
						value: function isSourceId(handlerId) {
							var role = parseRoleFromHandlerId(handlerId);
							return role === HandlerRoles.SOURCE;
						}
					}, {
						key: 'isTargetId',
						value: function isTargetId(handlerId) {
							var role = parseRoleFromHandlerId(handlerId);
							return role === HandlerRoles.TARGET;
						}
					}, {
						key: 'removeSource',
						value: function removeSource(sourceId) {
							var _this2 = this;

							(0, _invariant2.default)(this.getSource(sourceId), 'Expected an existing source.');
							this.store.dispatch((0, _registry.removeSource)(sourceId));

							(0, _asap2.default)(function () {
								delete _this2.handlers[sourceId];
								delete _this2.types[sourceId];
							});
						}
					}, {
						key: 'removeTarget',
						value: function removeTarget(targetId) {
							var _this3 = this;

							(0, _invariant2.default)(this.getTarget(targetId), 'Expected an existing target.');
							this.store.dispatch((0, _registry.removeTarget)(targetId));

							(0, _asap2.default)(function () {
								delete _this3.handlers[targetId];
								delete _this3.types[targetId];
							});
						}
					}, {
						key: 'pinSource',
						value: function pinSource(sourceId) {
							var source = this.getSource(sourceId);
							(0, _invariant2.default)(source, 'Expected an existing source.');

							this.pinnedSourceId = sourceId;
							this.pinnedSource = source;
						}
					}, {
						key: 'unpinSource',
						value: function unpinSource() {
							(0, _invariant2.default)(this.pinnedSource, 'No source is pinned at the time.');

							this.pinnedSourceId = null;
							this.pinnedSource = null;
						}
					}]);

					return HandlerRegistry;
				}();

				exports.default = HandlerRegistry;

				/***/
			}),
/* 298 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				exports.default = createBackend;

				var _noop = __webpack_require__(147);

				var _noop2 = _interopRequireDefault(_noop);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var TestBackend = function () {
					function TestBackend(manager) {
						_classCallCheck(this, TestBackend);

						this.actions = manager.getActions();
					}

					_createClass(TestBackend, [{
						key: 'setup',
						value: function setup() {
							this.didCallSetup = true;
						}
					}, {
						key: 'teardown',
						value: function teardown() {
							this.didCallTeardown = true;
						}
					}, {
						key: 'connectDragSource',
						value: function connectDragSource() {
							return _noop2.default;
						}
					}, {
						key: 'connectDragPreview',
						value: function connectDragPreview() {
							return _noop2.default;
						}
					}, {
						key: 'connectDropTarget',
						value: function connectDropTarget() {
							return _noop2.default;
						}
					}, {
						key: 'simulateBeginDrag',
						value: function simulateBeginDrag(sourceIds, options) {
							this.actions.beginDrag(sourceIds, options);
						}
					}, {
						key: 'simulatePublishDragSource',
						value: function simulatePublishDragSource() {
							this.actions.publishDragSource();
						}
					}, {
						key: 'simulateHover',
						value: function simulateHover(targetIds, options) {
							this.actions.hover(targetIds, options);
						}
					}, {
						key: 'simulateDrop',
						value: function simulateDrop() {
							this.actions.drop();
						}
					}, {
						key: 'simulateEndDrag',
						value: function simulateEndDrag() {
							this.actions.endDrag();
						}
					}]);

					return TestBackend;
				}();

				function createBackend(manager) {
					return new TestBackend(manager);
				}

				/***/
			}),
/* 299 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _DragDropManager = __webpack_require__(293);

				Object.defineProperty(exports, 'DragDropManager', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_DragDropManager).default;
					}
				});

				var _DragSource = __webpack_require__(295);

				Object.defineProperty(exports, 'DragSource', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_DragSource).default;
					}
				});

				var _DropTarget = __webpack_require__(296);

				Object.defineProperty(exports, 'DropTarget', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_DropTarget).default;
					}
				});

				var _createTestBackend = __webpack_require__(298);

				Object.defineProperty(exports, 'createTestBackend', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_createTestBackend).default;
					}
				});

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				/***/
			}),
/* 300 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				exports.default = dragOperation;

				var _without = __webpack_require__(148);

				var _without2 = _interopRequireDefault(_without);

				var _dragDrop = __webpack_require__(50);

				var _registry = __webpack_require__(51);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				var initialState = {
					itemType: null,
					item: null,
					sourceId: null,
					targetIds: [],
					dropResult: null,
					didDrop: false,
					isSourcePublic: null
				};

				function dragOperation() {
					var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
					var action = arguments[1];

					switch (action.type) {
						case _dragDrop.BEGIN_DRAG:
							return _extends({}, state, {
								itemType: action.itemType,
								item: action.item,
								sourceId: action.sourceId,
								isSourcePublic: action.isSourcePublic,
								dropResult: null,
								didDrop: false
							});
						case _dragDrop.PUBLISH_DRAG_SOURCE:
							return _extends({}, state, {
								isSourcePublic: true
							});
						case _dragDrop.HOVER:
							return _extends({}, state, {
								targetIds: action.targetIds
							});
						case _registry.REMOVE_TARGET:
							if (state.targetIds.indexOf(action.targetId) === -1) {
								return state;
							}
							return _extends({}, state, {
								targetIds: (0, _without2.default)(state.targetIds, action.targetId)
							});
						case _dragDrop.DROP:
							return _extends({}, state, {
								dropResult: action.dropResult,
								didDrop: true,
								targetIds: []
							});
						case _dragDrop.END_DRAG:
							return _extends({}, state, {
								itemType: null,
								item: null,
								sourceId: null,
								dropResult: null,
								didDrop: false,
								isSourcePublic: null,
								targetIds: []
							});
						default:
							return state;
					}
				}

				/***/
			}),
/* 301 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = reduce;

				var _dragOffset = __webpack_require__(141);

				var _dragOffset2 = _interopRequireDefault(_dragOffset);

				var _dragOperation = __webpack_require__(300);

				var _dragOperation2 = _interopRequireDefault(_dragOperation);

				var _refCount = __webpack_require__(302);

				var _refCount2 = _interopRequireDefault(_refCount);

				var _dirtyHandlerIds = __webpack_require__(140);

				var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);

				var _stateId = __webpack_require__(303);

				var _stateId2 = _interopRequireDefault(_stateId);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function reduce() {
					var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
					var action = arguments[1];

					return {
						dirtyHandlerIds: (0, _dirtyHandlerIds2.default)(state.dirtyHandlerIds, action, state.dragOperation),
						dragOffset: (0, _dragOffset2.default)(state.dragOffset, action),
						refCount: (0, _refCount2.default)(state.refCount, action),
						dragOperation: (0, _dragOperation2.default)(state.dragOperation, action),
						stateId: (0, _stateId2.default)(state.stateId)
					};
				}

				/***/
			}),
/* 302 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = refCount;

				var _registry = __webpack_require__(51);

				function refCount() {
					var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
					var action = arguments[1];

					switch (action.type) {
						case _registry.ADD_SOURCE:
						case _registry.ADD_TARGET:
							return state + 1;
						case _registry.REMOVE_SOURCE:
						case _registry.REMOVE_TARGET:
							return state - 1;
						default:
							return state;
					}
				}

				/***/
			}),
/* 303 */
/***/ (function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = stateId;
				function stateId() {
					var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

					return state + 1;
				}

				/***/
			}),
/* 304 */
/***/ (function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = getNextUniqueId;
				var nextUniqueId = 0;

				function getNextUniqueId() {
					return nextUniqueId++;
				}

				/***/
			}),
			/* 305 */
			[1797, 323, 324, 325, 326, 327],
/* 306 */
/***/ (function (module, exports) {

				/**
				 * A faster alternative to `Function#apply`, this function invokes `func`
				 * with the `this` binding of `thisArg` and the arguments of `args`.
				 *
				 * @private
				 * @param {Function} func The function to invoke.
				 * @param {*} thisArg The `this` binding of `func`.
				 * @param {Array} args The arguments to invoke `func` with.
				 * @returns {*} Returns the result of `func`.
				 */
				function apply(func, thisArg, args) {
					switch (args.length) {
						case 0: return func.call(thisArg);
						case 1: return func.call(thisArg, args[0]);
						case 2: return func.call(thisArg, args[0], args[1]);
						case 3: return func.call(thisArg, args[0], args[1], args[2]);
					}
					return func.apply(thisArg, args);
				}

				module.exports = apply;


				/***/
			}),
/* 307 */
/***/ (function (module, exports, __webpack_require__) {

				var baseFindIndex = __webpack_require__(199),
					baseIsNaN = __webpack_require__(310),
					strictIndexOf = __webpack_require__(349);

				/**
				 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
				 *
				 * @private
				 * @param {Array} array The array to inspect.
				 * @param {*} value The value to search for.
				 * @param {number} fromIndex The index to search from.
				 * @returns {number} Returns the index of the matched value, else `-1`.
				 */
				function baseIndexOf(array, value, fromIndex) {
					return value === value
						? strictIndexOf(array, value, fromIndex)
						: baseFindIndex(array, baseIsNaN, fromIndex);
				}

				module.exports = baseIndexOf;


				/***/
			}),
/* 308 */
/***/ (function (module, exports, __webpack_require__) {

				var SetCache = __webpack_require__(71),
					arrayIncludes = __webpack_require__(84),
					arrayIncludesWith = __webpack_require__(85),
					arrayMap = __webpack_require__(52),
					baseUnary = __webpack_require__(72),
					cacheHas = __webpack_require__(73);

				/* Built-in method references for those with the same name as other `lodash` methods. */
				var nativeMin = Math.min;

				/**
				 * The base implementation of methods like `_.intersection`, without support
				 * for iteratee shorthands, that accepts an array of arrays to inspect.
				 *
				 * @private
				 * @param {Array} arrays The arrays to inspect.
				 * @param {Function} [iteratee] The iteratee invoked per element.
				 * @param {Function} [comparator] The comparator invoked per element.
				 * @returns {Array} Returns the new array of shared values.
				 */
				function baseIntersection(arrays, iteratee, comparator) {
					var includes = comparator ? arrayIncludesWith : arrayIncludes,
						length = arrays[0].length,
						othLength = arrays.length,
						othIndex = othLength,
						caches = Array(othLength),
						maxLength = Infinity,
						result = [];

					while (othIndex--) {
						var array = arrays[othIndex];
						if (othIndex && iteratee) {
							array = arrayMap(array, baseUnary(iteratee));
						}
						maxLength = nativeMin(array.length, maxLength);
						caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
							? new SetCache(othIndex && array)
							: undefined;
					}
					array = arrays[0];

					var index = -1,
						seen = caches[0];

					outer:
					while (++index < length && result.length < maxLength) {
						var value = array[index],
							computed = iteratee ? iteratee(value) : value;

						value = (comparator || value !== 0) ? value : 0;
						if (!(seen
							? cacheHas(seen, computed)
							: includes(result, computed, comparator)
						)) {
							othIndex = othLength;
							while (--othIndex) {
								var cache = caches[othIndex];
								if (!(cache
									? cacheHas(cache, computed)
									: includes(arrays[othIndex], computed, comparator))
								) {
									continue outer;
								}
							}
							if (seen) {
								seen.push(computed);
							}
							result.push(value);
						}
					}
					return result;
				}

				module.exports = baseIntersection;


				/***/
			}),
			/* 309 */
			[1835, 33, 29],
/* 310 */
/***/ (function (module, exports) {

				/**
				 * The base implementation of `_.isNaN` without support for number objects.
				 *
				 * @private
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
				 */
				function baseIsNaN(value) {
					return value !== value;
				}

				module.exports = baseIsNaN;


				/***/
			}),
			/* 311 */
			[1842, 17, 330, 23, 203],
			/* 312 */
			[1844, 33, 117, 29],
/* 313 */
/***/ (function (module, exports, __webpack_require__) {

				var isObject = __webpack_require__(23),
					isPrototype = __webpack_require__(201),
					nativeKeysIn = __webpack_require__(341);

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/**
				 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
				 *
				 * @private
				 * @param {Object} object The object to query.
				 * @returns {Array} Returns the array of property names.
				 */
				function baseKeysIn(object) {
					if (!isObject(object)) {
						return nativeKeysIn(object);
					}
					var isProto = isPrototype(object),
						result = [];

					for (var key in object) {
						if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
							result.push(key);
						}
					}
					return result;
				}

				module.exports = baseKeysIn;


				/***/
			}),
/* 314 */
/***/ (function (module, exports, __webpack_require__) {

				var constant = __webpack_require__(350),
					defineProperty = __webpack_require__(200),
					identity = __webpack_require__(75);

				/**
				 * The base implementation of `setToString` without support for hot loop shorting.
				 *
				 * @private
				 * @param {Function} func The function to modify.
				 * @param {Function} string The `toString` result.
				 * @returns {Function} Returns `func`.
				 */
				var baseSetToString = !defineProperty ? identity : function (func, string) {
					return defineProperty(func, 'toString', {
						'configurable': true,
						'enumerable': false,
						'value': constant(string),
						'writable': true
					});
				};

				module.exports = baseSetToString;


				/***/
			}),
/* 315 */
/***/ (function (module, exports) {

				/**
				 * The base implementation of `_.times` without support for iteratee shorthands
				 * or max array length checks.
				 *
				 * @private
				 * @param {number} n The number of times to invoke `iteratee`.
				 * @param {Function} iteratee The function invoked per iteration.
				 * @returns {Array} Returns the array of results.
				 */
				function baseTimes(n, iteratee) {
					var index = -1,
						result = Array(n);

					while (++index < n) {
						result[index] = iteratee(index);
					}
					return result;
				}

				module.exports = baseTimes;


				/***/
			}),
/* 316 */
/***/ (function (module, exports, __webpack_require__) {

				var baseDifference = __webpack_require__(144),
					baseFlatten = __webpack_require__(100),
					baseUniq = __webpack_require__(145);

				/**
				 * The base implementation of methods like `_.xor`, without support for
				 * iteratee shorthands, that accepts an array of arrays to inspect.
				 *
				 * @private
				 * @param {Array} arrays The arrays to inspect.
				 * @param {Function} [iteratee] The iteratee invoked per element.
				 * @param {Function} [comparator] The comparator invoked per element.
				 * @returns {Array} Returns the new array of values.
				 */
				function baseXor(arrays, iteratee, comparator) {
					var length = arrays.length;
					if (length < 2) {
						return length ? baseUniq(arrays[0]) : [];
					}
					var index = -1,
						result = Array(length);

					while (++index < length) {
						var array = arrays[index],
							othIndex = -1;

						while (++othIndex < length) {
							if (othIndex != index) {
								result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
							}
						}
					}
					return baseUniq(baseFlatten(result, 1), iteratee, comparator);
				}

				module.exports = baseXor;


				/***/
			}),
/* 317 */
/***/ (function (module, exports, __webpack_require__) {

				var isArrayLikeObject = __webpack_require__(56);

				/**
				 * Casts `value` to an empty array if it's not an array like object.
				 *
				 * @private
				 * @param {*} value The value to inspect.
				 * @returns {Array|Object} Returns the cast array-like object.
				 */
				function castArrayLikeObject(value) {
					return isArrayLikeObject(value) ? value : [];
				}

				module.exports = castArrayLikeObject;


				/***/
			}),
			/* 318 */
			[1855, 24],
/* 319 */
/***/ (function (module, exports, __webpack_require__) {

				var Set = __webpack_require__(196),
					noop = __webpack_require__(147),
					setToArray = __webpack_require__(115);

				/** Used as references for various `Number` constants. */
				var INFINITY = 1 / 0;

				/**
				 * Creates a set object of `values`.
				 *
				 * @private
				 * @param {Array} values The values to add to the set.
				 * @returns {Object} Returns the new set.
				 */
				var createSet = !(Set && (1 / setToArray(new Set([, -0]))[1]) == INFINITY) ? noop : function (values) {
					return new Set(values);
				};

				module.exports = createSet;


				/***/
			}),
/* 320 */
/***/ (function (module, exports, __webpack_require__) {

				var overArg = __webpack_require__(202);

				/** Built-in value references. */
				var getPrototype = overArg(Object.getPrototypeOf, Object);

				module.exports = getPrototype;


				/***/
			}),
			/* 321 */
			[1874, 67],
/* 322 */
/***/ (function (module, exports) {

				/**
				 * Gets the value at `key` of `object`.
				 *
				 * @private
				 * @param {Object} [object] The object to query.
				 * @param {string} key The key of the property to get.
				 * @returns {*} Returns the property value.
				 */
				function getValue(object, key) {
					return object == null ? undefined : object[key];
				}

				module.exports = getValue;


				/***/
			}),
			/* 323 */
			[1878, 55],
/* 324 */
/***/ (function (module, exports) {

				/**
				 * Removes `key` and its value from the hash.
				 *
				 * @private
				 * @name delete
				 * @memberOf Hash
				 * @param {Object} hash The hash to modify.
				 * @param {string} key The key of the value to remove.
				 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
				 */
				function hashDelete(key) {
					var result = this.has(key) && delete this.__data__[key];
					this.size -= result ? 1 : 0;
					return result;
				}

				module.exports = hashDelete;


				/***/
			}),
			/* 325 */
			[1881, 55],
			/* 326 */
			[1884, 55],
			/* 327 */
			[1889, 55],
/* 328 */
/***/ (function (module, exports, __webpack_require__) {

				var Symbol = __webpack_require__(67),
					isArguments = __webpack_require__(116),
					isArray = __webpack_require__(7);

				/** Built-in value references. */
				var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

				/**
				 * Checks if `value` is a flattenable `arguments` object or array.
				 *
				 * @private
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
				 */
				function isFlattenable(value) {
					return isArray(value) || isArguments(value) ||
						!!(spreadableSymbol && value && value[spreadableSymbol]);
				}

				module.exports = isFlattenable;


				/***/
			}),
/* 329 */
/***/ (function (module, exports) {

				/**
				 * Checks if `value` is suitable for use as unique object key.
				 *
				 * @private
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
				 */
				function isKeyable(value) {
					var type = typeof value;
					return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
						? (value !== '__proto__')
						: (value === null);
				}

				module.exports = isKeyable;


				/***/
			}),
			/* 330 */
			[1891, 318],
/* 331 */
/***/ (function (module, exports) {

				/**
				 * Removes all key-value entries from the list cache.
				 *
				 * @private
				 * @name clear
				 * @memberOf ListCache
				 */
				function listCacheClear() {
					this.__data__ = [];
					this.size = 0;
				}

				module.exports = listCacheClear;


				/***/
			}),
			/* 332 */
			[1896, 53],
			/* 333 */
			[1898, 53],
			/* 334 */
			[1901, 53],
			/* 335 */
			[1904, 53],
			/* 336 */
			[1907, 305, 143, 188],
			/* 337 */
			[1911, 54],
			/* 338 */
			[1914, 54],
			/* 339 */
			[1917, 54],
			/* 340 */
			[1919, 54],
/* 341 */
/***/ (function (module, exports) {

				/**
				 * This function is like
				 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
				 * except that it includes inherited enumerable properties.
				 *
				 * @private
				 * @param {Object} object The object to query.
				 * @returns {Array} Returns the array of property names.
				 */
				function nativeKeysIn(object) {
					var result = [];
					if (object != null) {
						for (var key in Object(object)) {
							result.push(key);
						}
					}
					return result;
				}

				module.exports = nativeKeysIn;


				/***/
			}),
			/* 342 */
			[1929, 146],
/* 343 */
/***/ (function (module, exports) {

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/**
				 * Used to resolve the
				 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
				 * of values.
				 */
				var nativeObjectToString = objectProto.toString;

				/**
				 * Converts `value` to a string using `Object.prototype.toString`.
				 *
				 * @private
				 * @param {*} value The value to convert.
				 * @returns {string} Returns the converted string.
				 */
				function objectToString(value) {
					return nativeObjectToString.call(value);
				}

				module.exports = objectToString;


				/***/
			}),
/* 344 */
/***/ (function (module, exports, __webpack_require__) {

				var apply = __webpack_require__(306);

				/* Built-in method references for those with the same name as other `lodash` methods. */
				var nativeMax = Math.max;

				/**
				 * A specialized version of `baseRest` which transforms the rest array.
				 *
				 * @private
				 * @param {Function} func The function to apply a rest parameter to.
				 * @param {number} [start=func.length-1] The start position of the rest parameter.
				 * @param {Function} transform The rest array transform.
				 * @returns {Function} Returns the new function.
				 */
				function overRest(func, start, transform) {
					start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
					return function () {
						var args = arguments,
							index = -1,
							length = nativeMax(args.length - start, 0),
							array = Array(length);

						while (++index < length) {
							array[index] = args[start + index];
						}
						index = -1;
						var otherArgs = Array(start + 1);
						while (++index < start) {
							otherArgs[index] = args[index];
						}
						otherArgs[start] = transform(array);
						return apply(func, this, otherArgs);
					};
				}

				module.exports = overRest;


				/***/
			}),
/* 345 */
/***/ (function (module, exports) {

				/** Used to stand-in for `undefined` hash values. */
				var HASH_UNDEFINED = '__lodash_hash_undefined__';

				/**
				 * Adds `value` to the array cache.
				 *
				 * @private
				 * @name add
				 * @memberOf SetCache
				 * @alias push
				 * @param {*} value The value to cache.
				 * @returns {Object} Returns the cache instance.
				 */
				function setCacheAdd(value) {
					this.__data__.set(value, HASH_UNDEFINED);
					return this;
				}

				module.exports = setCacheAdd;


				/***/
			}),
/* 346 */
/***/ (function (module, exports) {

				/**
				 * Checks if `value` is in the array cache.
				 *
				 * @private
				 * @name has
				 * @memberOf SetCache
				 * @param {*} value The value to search for.
				 * @returns {number} Returns `true` if `value` is found, else `false`.
				 */
				function setCacheHas(value) {
					return this.__data__.has(value);
				}

				module.exports = setCacheHas;


				/***/
			}),
/* 347 */
/***/ (function (module, exports, __webpack_require__) {

				var baseSetToString = __webpack_require__(314),
					shortOut = __webpack_require__(348);

				/**
				 * Sets the `toString` method of `func` to return `string`.
				 *
				 * @private
				 * @param {Function} func The function to modify.
				 * @param {Function} string The `toString` result.
				 * @returns {Function} Returns `func`.
				 */
				var setToString = shortOut(baseSetToString);

				module.exports = setToString;


				/***/
			}),
/* 348 */
/***/ (function (module, exports) {

				/** Used to detect hot functions by number of calls within a span of milliseconds. */
				var HOT_COUNT = 800,
					HOT_SPAN = 16;

				/* Built-in method references for those with the same name as other `lodash` methods. */
				var nativeNow = Date.now;

				/**
				 * Creates a function that'll short out and invoke `identity` instead
				 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
				 * milliseconds.
				 *
				 * @private
				 * @param {Function} func The function to restrict.
				 * @returns {Function} Returns the new shortable function.
				 */
				function shortOut(func) {
					var count = 0,
						lastCalled = 0;

					return function () {
						var stamp = nativeNow(),
							remaining = HOT_SPAN - (stamp - lastCalled);

						lastCalled = stamp;
						if (remaining > 0) {
							if (++count >= HOT_COUNT) {
								return arguments[0];
							}
						} else {
							count = 0;
						}
						return func.apply(undefined, arguments);
					};
				}

				module.exports = shortOut;


				/***/
			}),
/* 349 */
/***/ (function (module, exports) {

				/**
				 * A specialized version of `_.indexOf` which performs strict equality
				 * comparisons of values, i.e. `===`.
				 *
				 * @private
				 * @param {Array} array The array to inspect.
				 * @param {*} value The value to search for.
				 * @param {number} fromIndex The index to search from.
				 * @returns {number} Returns the index of the matched value, else `-1`.
				 */
				function strictIndexOf(array, value, fromIndex) {
					var index = fromIndex - 1,
						length = array.length;

					while (++index < length) {
						if (array[index] === value) {
							return index;
						}
					}
					return -1;
				}

				module.exports = strictIndexOf;


				/***/
			}),
/* 350 */
/***/ (function (module, exports) {

				/**
				 * Creates a function that returns `value`.
				 *
				 * @static
				 * @memberOf _
				 * @since 2.4.0
				 * @category Util
				 * @param {*} value The value to return from the new function.
				 * @returns {Function} Returns the new constant function.
				 * @example
				 *
				 * var objects = _.times(2, _.constant({ 'a': 1 }));
				 *
				 * console.log(objects);
				 * // => [{ 'a': 1 }, { 'a': 1 }]
				 *
				 * console.log(objects[0] === objects[1]);
				 * // => true
				 */
				function constant(value) {
					return function () {
						return value;
					};
				}

				module.exports = constant;


				/***/
			}),
/* 351 */
/***/ (function (module, exports, __webpack_require__) {

				var baseRest = __webpack_require__(34),
					eq = __webpack_require__(74),
					isIterateeCall = __webpack_require__(114),
					keysIn = __webpack_require__(352);

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/**
				 * Assigns own and inherited enumerable string keyed properties of source
				 * objects to the destination object for all destination properties that
				 * resolve to `undefined`. Source objects are applied from left to right.
				 * Once a property is set, additional values of the same property are ignored.
				 *
				 * **Note:** This method mutates `object`.
				 *
				 * @static
				 * @since 0.1.0
				 * @memberOf _
				 * @category Object
				 * @param {Object} object The destination object.
				 * @param {...Object} [sources] The source objects.
				 * @returns {Object} Returns `object`.
				 * @see _.defaultsDeep
				 * @example
				 *
				 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
				 * // => { 'a': 1, 'b': 2 }
				 */
				var defaults = baseRest(function (object, sources) {
					object = Object(object);

					var index = -1;
					var length = sources.length;
					var guard = length > 2 ? sources[2] : undefined;

					if (guard && isIterateeCall(sources[0], sources[1], guard)) {
						length = 1;
					}

					while (++index < length) {
						var source = sources[index];
						var props = keysIn(source);
						var propsIndex = -1;
						var propsLength = props.length;

						while (++propsIndex < propsLength) {
							var key = props[propsIndex];
							var value = object[key];

							if (value === undefined ||
								(eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
								object[key] = source[key];
							}
						}
					}

					return object;
				});

				module.exports = defaults;


				/***/
			}),
/* 352 */
/***/ (function (module, exports, __webpack_require__) {

				var arrayLikeKeys = __webpack_require__(197),
					baseKeysIn = __webpack_require__(313),
					isArrayLike = __webpack_require__(46);

				/**
				 * Creates an array of the own and inherited enumerable property names of `object`.
				 *
				 * **Note:** Non-object values are coerced to objects.
				 *
				 * @static
				 * @memberOf _
				 * @since 3.0.0
				 * @category Object
				 * @param {Object} object The object to query.
				 * @returns {Array} Returns the array of property names.
				 * @example
				 *
				 * function Foo() {
				 *   this.a = 1;
				 *   this.b = 2;
				 * }
				 *
				 * Foo.prototype.c = 3;
				 *
				 * _.keysIn(new Foo);
				 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
				 */
				function keysIn(object) {
					return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
				}

				module.exports = keysIn;


				/***/
			}),
/* 353 */
/***/ (function (module, exports) {

				/**
				 * This method returns `false`.
				 *
				 * @static
				 * @memberOf _
				 * @since 4.13.0
				 * @category Util
				 * @returns {boolean} Returns `false`.
				 * @example
				 *
				 * _.times(2, _.stubFalse);
				 * // => [false, false]
				 */
				function stubFalse() {
					return false;
				}

				module.exports = stubFalse;


				/***/
			}),
/* 354 */
/***/ (function (module, exports, __webpack_require__) {

				var baseFlatten = __webpack_require__(100),
					baseRest = __webpack_require__(34),
					baseUniq = __webpack_require__(145),
					isArrayLikeObject = __webpack_require__(56);

				/**
				 * Creates an array of unique values, in order, from all given arrays using
				 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
				 * for equality comparisons.
				 *
				 * @static
				 * @memberOf _
				 * @since 0.1.0
				 * @category Array
				 * @param {...Array} [arrays] The arrays to inspect.
				 * @returns {Array} Returns the new array of combined values.
				 * @example
				 *
				 * _.union([2], [1, 2]);
				 * // => [2, 1]
				 */
				var union = baseRest(function (arrays) {
					return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
				});

				module.exports = union;


				/***/
			}),
/* 355 */
/***/ (function (module, exports, __webpack_require__) {

				var arrayFilter = __webpack_require__(189),
					baseRest = __webpack_require__(34),
					baseXor = __webpack_require__(316),
					isArrayLikeObject = __webpack_require__(56);

				/**
				 * Creates an array of unique values that is the
				 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
				 * of the given arrays. The order of result values is determined by the order
				 * they occur in the arrays.
				 *
				 * @static
				 * @memberOf _
				 * @since 2.4.0
				 * @category Array
				 * @param {...Array} [arrays] The arrays to inspect.
				 * @returns {Array} Returns the new array of filtered values.
				 * @see _.difference, _.without
				 * @example
				 *
				 * _.xor([2, 1], [2, 3]);
				 * // => [1, 3]
				 */
				var xor = baseRest(function (arrays) {
					return baseXor(arrayFilter(arrays, isArrayLikeObject));
				});

				module.exports = xor;


				/***/
			}),
/* 356 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _classnames = __webpack_require__(4);

				var _classnames2 = _interopRequireDefault(_classnames);

				var _objectAssign = __webpack_require__(27);

				var _objectAssign2 = _interopRequireDefault(_objectAssign);

				var _globalEventListener = __webpack_require__(87);

				var _globalEventListener2 = _interopRequireDefault(_globalEventListener);

				var _AbstractMenu2 = __webpack_require__(149);

				var _AbstractMenu3 = _interopRequireDefault(_AbstractMenu2);

				var _SubMenu = __webpack_require__(152);

				var _SubMenu2 = _interopRequireDefault(_SubMenu);

				var _actions = __webpack_require__(39);

				var _helpers = __webpack_require__(32);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var ContextMenu = function (_AbstractMenu) {
					_inherits(ContextMenu, _AbstractMenu);

					function ContextMenu(props) {
						_classCallCheck(this, ContextMenu);

						var _this = _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, props));

						_this.registerHandlers = function () {
							document.addEventListener('mousedown', _this.handleOutsideClick);
							document.addEventListener('touchstart', _this.handleOutsideClick);
							document.addEventListener('scroll', _this.handleHide);
							document.addEventListener('contextmenu', _this.handleHide);
							document.addEventListener('keydown', _this.handleKeyNavigation);
							window.addEventListener('resize', _this.handleHide);
						};

						_this.unregisterHandlers = function () {
							document.removeEventListener('mousedown', _this.handleOutsideClick);
							document.removeEventListener('touchstart', _this.handleOutsideClick);
							document.removeEventListener('scroll', _this.handleHide);
							document.removeEventListener('contextmenu', _this.handleHide);
							document.removeEventListener('keydown', _this.handleKeyNavigation);
							window.removeEventListener('resize', _this.handleHide);
						};

						_this.handleShow = function (e) {
							if (e.detail.id !== _this.props.id || _this.state.isVisible) return;

							var _e$detail$position = e.detail.position,
								x = _e$detail$position.x,
								y = _e$detail$position.y;


							_this.setState({ isVisible: true, x: x, y: y });
							_this.registerHandlers();
							(0, _helpers.callIfExists)(_this.props.onShow, e);
						};

						_this.handleHide = function (e) {
							if (_this.state.isVisible && (!e.detail || !e.detail.id || e.detail.id === _this.props.id)) {
								_this.unregisterHandlers();
								_this.setState({ isVisible: false, selectedItem: null, forceSubMenuOpen: false });
								(0, _helpers.callIfExists)(_this.props.onHide, e);
							}
						};

						_this.handleOutsideClick = function (e) {
							if (!_this.menu.contains(e.target)) (0, _actions.hideMenu)();
						};

						_this.handleMouseLeave = function (event) {
							event.preventDefault();

							(0, _helpers.callIfExists)(_this.props.onMouseLeave, event, (0, _objectAssign2.default)({}, _this.props.data, _helpers.store.data), _helpers.store.target);

							if (_this.props.hideOnLeave) (0, _actions.hideMenu)();
						};

						_this.handleContextMenu = function (e) {
							if (true) {
								e.preventDefault();
							}
							_this.handleHide(e);
						};

						_this.hideMenu = function (e) {
							if (e.keyCode === 27 || e.keyCode === 13) {
								// ECS or enter
								(0, _actions.hideMenu)();
							}
						};

						_this.getMenuPosition = function () {
							var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
							var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

							var menuStyles = {
								top: y,
								left: x
							};

							if (!_this.menu) return menuStyles;

							var _window = window,
								innerWidth = _window.innerWidth,
								innerHeight = _window.innerHeight;

							var rect = _this.menu.getBoundingClientRect();

							if (y + rect.height > innerHeight) {
								menuStyles.top -= rect.height;
							}

							if (x + rect.width > innerWidth) {
								menuStyles.left -= rect.width;
							}

							if (menuStyles.top < 0) {
								menuStyles.top = rect.height < innerHeight ? (innerHeight - rect.height) / 2 : 0;
							}

							if (menuStyles.left < 0) {
								menuStyles.left = rect.width < innerWidth ? (innerWidth - rect.width) / 2 : 0;
							}

							return menuStyles;
						};

						_this.getRTLMenuPosition = function () {
							var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
							var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

							var menuStyles = {
								top: y,
								left: x
							};

							if (!_this.menu) return menuStyles;

							var _window2 = window,
								innerWidth = _window2.innerWidth,
								innerHeight = _window2.innerHeight;

							var rect = _this.menu.getBoundingClientRect();

							// Try to position the menu on the left side of the cursor
							menuStyles.left = x - rect.width;

							if (y + rect.height > innerHeight) {
								menuStyles.top -= rect.height;
							}

							if (menuStyles.left < 0) {
								menuStyles.left += rect.width;
							}

							if (menuStyles.top < 0) {
								menuStyles.top = rect.height < innerHeight ? (innerHeight - rect.height) / 2 : 0;
							}

							if (menuStyles.left + rect.width > innerWidth) {
								menuStyles.left = rect.width < innerWidth ? (innerWidth - rect.width) / 2 : 0;
							}

							return menuStyles;
						};

						_this.menuRef = function (c) {
							_this.menu = c;
						};

						_this.state = (0, _objectAssign2.default)({}, _this.state, {
							x: 0,
							y: 0,
							isVisible: false
						});
						return _this;
					}

					_createClass(ContextMenu, [{
						key: 'getSubMenuType',
						value: function getSubMenuType() {
							// eslint-disable-line class-methods-use-this
							return _SubMenu2.default;
						}
					}, {
						key: 'componentDidMount',
						value: function componentDidMount() {
							this.listenId = _globalEventListener2.default.register(this.handleShow, this.handleHide);
						}
					}, {
						key: 'componentDidUpdate',
						value: function componentDidUpdate() {
							var _this2 = this;

							if (this.state.isVisible) {
								var wrapper = window.requestAnimationFrame || setTimeout;

								wrapper(function () {
									var _state = _this2.state,
										x = _state.x,
										y = _state.y;

									var _ref = _this2.props.rtl ? _this2.getRTLMenuPosition(x, y) : _this2.getMenuPosition(x, y),
										top = _ref.top,
										left = _ref.left;

									wrapper(function () {
										if (!_this2.menu) return;
										_this2.menu.style.top = top + 'px';
										_this2.menu.style.left = left + 'px';
										_this2.menu.style.opacity = 1;
										_this2.menu.style.pointerEvents = 'auto';
									});
								});
							} else {
								if (!this.menu) return;
								this.menu.style.opacity = 0;
								this.menu.style.pointerEvents = 'none';
							}
						}
					}, {
						key: 'componentWillUnmount',
						value: function componentWillUnmount() {
							if (this.listenId) {
								_globalEventListener2.default.unregister(this.listenId);
							}

							this.unregisterHandlers();
						}
					}, {
						key: 'render',
						value: function render() {
							var _props = this.props,
								children = _props.children,
								className = _props.className,
								style = _props.style;
							var isVisible = this.state.isVisible;

							var inlineStyle = (0, _objectAssign2.default)({}, style, { position: 'fixed', opacity: 0, pointerEvents: 'none' });
							var menuClassnames = (0, _classnames2.default)(_helpers.cssClasses.menu, className, _defineProperty({}, _helpers.cssClasses.menuVisible, isVisible));

							return _react2.default.createElement(
								'nav',
								{
									role: 'menu', tabIndex: '-1', ref: this.menuRef, style: inlineStyle, className: menuClassnames,
									onContextMenu: this.handleContextMenu, onMouseLeave: this.handleMouseLeave
								},
								this.renderChildren(children)
							);
						}
					}]);

					return ContextMenu;
				}(_AbstractMenu3.default);

				ContextMenu.propTypes = {
					id: _propTypes2.default.string.isRequired,
					children: _propTypes2.default.node.isRequired,
					data: _propTypes2.default.object,
					className: _propTypes2.default.string,
					hideOnLeave: _propTypes2.default.bool,
					rtl: _propTypes2.default.bool,
					onHide: _propTypes2.default.func,
					onMouseLeave: _propTypes2.default.func,
					onShow: _propTypes2.default.func,
					style: _propTypes2.default.object
				};
				ContextMenu.defaultProps = {
					className: '',
					data: {},
					hideOnLeave: false,
					rtl: false,
					onHide: function onHide() {
						return null;
					},
					onMouseLeave: function onMouseLeave() {
						return null;
					},
					onShow: function onShow() {
						return null;
					},

					style: {}
				};
				exports.default = ContextMenu;

				/***/
			}),
/* 357 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				exports.default = function (menuId) {
					// expect menu component to connect as inner parameter
					// <Child/> is presumably a wrapper of <ContextMenu/>
					return function (Child) {
						// return wrapper for <Child/> that forwards the ContextMenuTrigger's additional props
						return function (_Component) {
							_inherits(ConnectMenu, _Component);

							function ConnectMenu(props) {
								_classCallCheck(this, ConnectMenu);

								var _this = _possibleConstructorReturn(this, (ConnectMenu.__proto__ || Object.getPrototypeOf(ConnectMenu)).call(this, props));

								_this.handleShow = function (e) {
									if (e.detail.id !== menuId) return;

									// the onShow event's detail.data object holds all ContextMenuTrigger props
									var data = e.detail.data;

									var filteredData = {};

									for (var key in data) {
										// exclude props the ContextMenuTrigger is expecting itself
										if (!ignoredTriggerProps.includes(key)) {
											filteredData[key] = data[key];
										}
									}
									_this.setState({ trigger: filteredData });
								};

								_this.handleHide = function () {
									_this.setState({ trigger: null });
								};

								_this.state = { trigger: null };
								return _this;
							}

							_createClass(ConnectMenu, [{
								key: 'componentDidMount',
								value: function componentDidMount() {
									this.listenId = _globalEventListener2.default.register(this.handleShow, this.handleHide);
								}
							}, {
								key: 'componentWillUnmount',
								value: function componentWillUnmount() {
									if (this.listenId) {
										_globalEventListener2.default.unregister(this.listenId);
									}
								}
							}, {
								key: 'render',
								value: function render() {
									return _react2.default.createElement(Child, _extends({}, this.props, { id: menuId, trigger: this.state.trigger }));
								}
							}]);

							return ConnectMenu;
						}(_react.Component);
					};
				};

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _ContextMenuTrigger = __webpack_require__(150);

				var _ContextMenuTrigger2 = _interopRequireDefault(_ContextMenuTrigger);

				var _globalEventListener = __webpack_require__(87);

				var _globalEventListener2 = _interopRequireDefault(_globalEventListener);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

				// collect ContextMenuTrigger's expected props to NOT pass them on as part of the context
				var ignoredTriggerProps = [].concat(_toConsumableArray(Object.keys(_ContextMenuTrigger2.default.propTypes)), ['children']);

				// expect the id of the menu to be responsible for as outer parameter

				/***/
			}),
/* 358 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _ContextMenu = __webpack_require__(356);

				Object.defineProperty(exports, 'ContextMenu', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_ContextMenu).default;
					}
				});

				var _ContextMenuTrigger = __webpack_require__(150);

				Object.defineProperty(exports, 'ContextMenuTrigger', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_ContextMenuTrigger).default;
					}
				});

				var _MenuItem = __webpack_require__(151);

				Object.defineProperty(exports, 'MenuItem', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_MenuItem).default;
					}
				});

				var _SubMenu = __webpack_require__(152);

				Object.defineProperty(exports, 'SubMenu', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_SubMenu).default;
					}
				});

				var _connectMenu = __webpack_require__(357);

				Object.defineProperty(exports, 'connectMenu', {
					enumerable: true,
					get: function get() {
						return _interopRequireDefault(_connectMenu).default;
					}
				});

				var _actions = __webpack_require__(39);

				Object.defineProperty(exports, 'hideMenu', {
					enumerable: true,
					get: function get() {
						return _actions.hideMenu;
					}
				});
				Object.defineProperty(exports, 'showMenu', {
					enumerable: true,
					get: function get() {
						return _actions.showMenu;
					}
				});

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				/***/
			}),
/* 359 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _union = __webpack_require__(354);

				var _union2 = _interopRequireDefault(_union);

				var _without = __webpack_require__(148);

				var _without2 = _interopRequireDefault(_without);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var EnterLeaveCounter = function () {
					function EnterLeaveCounter() {
						_classCallCheck(this, EnterLeaveCounter);

						this.entered = [];
					}

					_createClass(EnterLeaveCounter, [{
						key: 'enter',
						value: function enter(enteringNode) {
							var previousLength = this.entered.length;

							var isNodeEntered = function isNodeEntered(node) {
								return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
							};

							this.entered = (0, _union2.default)(this.entered.filter(isNodeEntered), [enteringNode]);

							return previousLength === 0 && this.entered.length > 0;
						}
					}, {
						key: 'leave',
						value: function leave(leavingNode) {
							var previousLength = this.entered.length;

							this.entered = (0, _without2.default)(this.entered.filter(function (node) {
								return document.documentElement.contains(node);
							}), leavingNode);

							return previousLength > 0 && this.entered.length === 0;
						}
					}, {
						key: 'reset',
						value: function reset() {
							this.entered = [];
						}
					}]);

					return EnterLeaveCounter;
				}();

				exports.default = EnterLeaveCounter;

				/***/
			}),
/* 360 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-underscore-dangle */


				var _defaults = __webpack_require__(351);

				var _defaults2 = _interopRequireDefault(_defaults);

				var _shallowEqual = __webpack_require__(366);

				var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

				var _EnterLeaveCounter = __webpack_require__(359);

				var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);

				var _BrowserDetector = __webpack_require__(153);

				var _OffsetUtils = __webpack_require__(363);

				var _NativeDragSources = __webpack_require__(362);

				var _NativeTypes = __webpack_require__(88);

				var NativeTypes = _interopRequireWildcard(_NativeTypes);

				function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var HTML5Backend = function () {
					function HTML5Backend(manager) {
						_classCallCheck(this, HTML5Backend);

						this.actions = manager.getActions();
						this.monitor = manager.getMonitor();
						this.registry = manager.getRegistry();
						this.context = manager.getContext();

						this.sourcePreviewNodes = {};
						this.sourcePreviewNodeOptions = {};
						this.sourceNodes = {};
						this.sourceNodeOptions = {};
						this.enterLeaveCounter = new _EnterLeaveCounter2.default();

						this.dragStartSourceIds = [];
						this.dropTargetIds = [];
						this.dragEnterTargetIds = [];
						this.currentNativeSource = null;
						this.currentNativeHandle = null;
						this.currentDragSourceNode = null;
						this.currentDragSourceNodeOffset = null;
						this.currentDragSourceNodeOffsetChanged = false;
						this.altKeyPressed = false;
						this.mouseMoveTimeoutTimer = null;

						this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
						this.handleTopDragStart = this.handleTopDragStart.bind(this);
						this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
						this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
						this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
						this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
						this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
						this.handleTopDragOver = this.handleTopDragOver.bind(this);
						this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
						this.handleTopDrop = this.handleTopDrop.bind(this);
						this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
						this.handleSelectStart = this.handleSelectStart.bind(this);
						this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
						this.endDragNativeItem = this.endDragNativeItem.bind(this);
						this.asyncEndDragNativeItem = this.asyncEndDragNativeItem.bind(this);
						this.isNodeInDocument = this.isNodeInDocument.bind(this);
					}

					_createClass(HTML5Backend, [{
						key: 'setup',
						value: function setup() {
							if (this.window === undefined) {
								return;
							}

							if (this.window.__isReactDndBackendSetUp) {
								throw new Error('Cannot have two HTML5 backends at the same time.');
							}
							this.window.__isReactDndBackendSetUp = true;
							this.addEventListeners(this.window);
						}
					}, {
						key: 'teardown',
						value: function teardown() {
							if (this.window === undefined) {
								return;
							}

							this.window.__isReactDndBackendSetUp = false;
							this.removeEventListeners(this.window);
							this.clearCurrentDragSourceNode();
							if (this.asyncEndDragFrameId) {
								this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
							}
						}
					}, {
						key: 'addEventListeners',
						value: function addEventListeners(target) {
							// SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
							if (!target.addEventListener) {
								return;
							}
							target.addEventListener('dragstart', this.handleTopDragStart);
							target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
							target.addEventListener('dragend', this.handleTopDragEndCapture, true);
							target.addEventListener('dragenter', this.handleTopDragEnter);
							target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
							target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
							target.addEventListener('dragover', this.handleTopDragOver);
							target.addEventListener('dragover', this.handleTopDragOverCapture, true);
							target.addEventListener('drop', this.handleTopDrop);
							target.addEventListener('drop', this.handleTopDropCapture, true);
						}
					}, {
						key: 'removeEventListeners',
						value: function removeEventListeners(target) {
							// SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
							if (!target.removeEventListener) {
								return;
							}
							target.removeEventListener('dragstart', this.handleTopDragStart);
							target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
							target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
							target.removeEventListener('dragenter', this.handleTopDragEnter);
							target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
							target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
							target.removeEventListener('dragover', this.handleTopDragOver);
							target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
							target.removeEventListener('drop', this.handleTopDrop);
							target.removeEventListener('drop', this.handleTopDropCapture, true);
						}
					}, {
						key: 'connectDragPreview',
						value: function connectDragPreview(sourceId, node, options) {
							var _this = this;

							this.sourcePreviewNodeOptions[sourceId] = options;
							this.sourcePreviewNodes[sourceId] = node;

							return function () {
								delete _this.sourcePreviewNodes[sourceId];
								delete _this.sourcePreviewNodeOptions[sourceId];
							};
						}
					}, {
						key: 'connectDragSource',
						value: function connectDragSource(sourceId, node, options) {
							var _this2 = this;

							this.sourceNodes[sourceId] = node;
							this.sourceNodeOptions[sourceId] = options;

							var handleDragStart = function handleDragStart(e) {
								return _this2.handleDragStart(e, sourceId);
							};
							var handleSelectStart = function handleSelectStart(e) {
								return _this2.handleSelectStart(e, sourceId);
							};

							node.setAttribute('draggable', true);
							node.addEventListener('dragstart', handleDragStart);
							node.addEventListener('selectstart', handleSelectStart);

							return function () {
								delete _this2.sourceNodes[sourceId];
								delete _this2.sourceNodeOptions[sourceId];

								node.removeEventListener('dragstart', handleDragStart);
								node.removeEventListener('selectstart', handleSelectStart);
								node.setAttribute('draggable', false);
							};
						}
					}, {
						key: 'connectDropTarget',
						value: function connectDropTarget(targetId, node) {
							var _this3 = this;

							var handleDragEnter = function handleDragEnter(e) {
								return _this3.handleDragEnter(e, targetId);
							};
							var handleDragOver = function handleDragOver(e) {
								return _this3.handleDragOver(e, targetId);
							};
							var handleDrop = function handleDrop(e) {
								return _this3.handleDrop(e, targetId);
							};

							node.addEventListener('dragenter', handleDragEnter);
							node.addEventListener('dragover', handleDragOver);
							node.addEventListener('drop', handleDrop);

							return function () {
								node.removeEventListener('dragenter', handleDragEnter);
								node.removeEventListener('dragover', handleDragOver);
								node.removeEventListener('drop', handleDrop);
							};
						}
					}, {
						key: 'getCurrentSourceNodeOptions',
						value: function getCurrentSourceNodeOptions() {
							var sourceId = this.monitor.getSourceId();
							var sourceNodeOptions = this.sourceNodeOptions[sourceId];

							return (0, _defaults2.default)(sourceNodeOptions || {}, {
								dropEffect: this.altKeyPressed ? 'copy' : 'move'
							});
						}
					}, {
						key: 'getCurrentDropEffect',
						value: function getCurrentDropEffect() {
							if (this.isDraggingNativeItem()) {
								// It makes more sense to default to 'copy' for native resources
								return 'copy';
							}

							return this.getCurrentSourceNodeOptions().dropEffect;
						}
					}, {
						key: 'getCurrentSourcePreviewNodeOptions',
						value: function getCurrentSourcePreviewNodeOptions() {
							var sourceId = this.monitor.getSourceId();
							var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];

							return (0, _defaults2.default)(sourcePreviewNodeOptions || {}, {
								anchorX: 0.5,
								anchorY: 0.5,
								captureDraggingState: false
							});
						}
					}, {
						key: 'getSourceClientOffset',
						value: function getSourceClientOffset(sourceId) {
							return (0, _OffsetUtils.getNodeClientOffset)(this.sourceNodes[sourceId]);
						}
					}, {
						key: 'isDraggingNativeItem',
						value: function isDraggingNativeItem() {
							var itemType = this.monitor.getItemType();
							return Object.keys(NativeTypes).some(function (key) {
								return NativeTypes[key] === itemType;
							});
						}
					}, {
						key: 'beginDragNativeItem',
						value: function beginDragNativeItem(type) {
							this.clearCurrentDragSourceNode();

							var SourceType = (0, _NativeDragSources.createNativeDragSource)(type);
							this.currentNativeSource = new SourceType();
							this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
							this.actions.beginDrag([this.currentNativeHandle]);
						}
					}, {
						key: 'asyncEndDragNativeItem',
						value: function asyncEndDragNativeItem() {
							this.asyncEndDragFrameId = this.window.requestAnimationFrame(this.endDragNativeItem);
						}
					}, {
						key: 'endDragNativeItem',
						value: function endDragNativeItem() {
							if (!this.isDraggingNativeItem()) {
								return;
							}

							this.actions.endDrag();
							this.registry.removeSource(this.currentNativeHandle);
							this.currentNativeHandle = null;
							this.currentNativeSource = null;
						}
					}, {
						key: 'isNodeInDocument',
						value: function isNodeInDocument(node) {
							// Check the node either in the main document or in the current context
							return document.body.contains(node) || this.window ? this.window.document.body.contains(node) : false;
						}
					}, {
						key: 'endDragIfSourceWasRemovedFromDOM',
						value: function endDragIfSourceWasRemovedFromDOM() {
							var node = this.currentDragSourceNode;
							if (this.isNodeInDocument(node)) {
								return;
							}

							if (this.clearCurrentDragSourceNode()) {
								this.actions.endDrag();
							}
						}
					}, {
						key: 'setCurrentDragSourceNode',
						value: function setCurrentDragSourceNode(node) {
							var _this4 = this;

							this.clearCurrentDragSourceNode();
							this.currentDragSourceNode = node;
							this.currentDragSourceNodeOffset = (0, _OffsetUtils.getNodeClientOffset)(node);
							this.currentDragSourceNodeOffsetChanged = false;

							// A timeout of > 0 is necessary to resolve Firefox issue referenced
							// See:
							//   * https://github.com/react-dnd/react-dnd/pull/928
							//   * https://github.com/react-dnd/react-dnd/issues/869
							var MOUSE_MOVE_TIMEOUT = 1000;

							// Receiving a mouse event in the middle of a dragging operation
							// means it has ended and the drag source node disappeared from DOM,
							// so the browser didn't dispatch the dragend event.
							//
							// We need to wait before we start listening for mousemove events.
							// This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
							// immediately in some browsers.
							//
							// See:
							//   * https://github.com/react-dnd/react-dnd/pull/928
							//   * https://github.com/react-dnd/react-dnd/issues/869
							//
							this.mouseMoveTimeoutTimer = setTimeout(function () {
								_this4.mouseMoveTimeoutId = null;
								return _this4.window.addEventListener('mousemove', _this4.endDragIfSourceWasRemovedFromDOM, true);
							}, MOUSE_MOVE_TIMEOUT);
						}
					}, {
						key: 'clearCurrentDragSourceNode',
						value: function clearCurrentDragSourceNode() {
							if (this.currentDragSourceNode) {
								this.currentDragSourceNode = null;
								this.currentDragSourceNodeOffset = null;
								this.currentDragSourceNodeOffsetChanged = false;
								this.window.clearTimeout(this.mouseMoveTimeoutTimer);
								this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
								this.mouseMoveTimeoutTimer = null;
								return true;
							}

							return false;
						}
					}, {
						key: 'checkIfCurrentDragSourceRectChanged',
						value: function checkIfCurrentDragSourceRectChanged() {
							var node = this.currentDragSourceNode;
							if (!node) {
								return false;
							}

							if (this.currentDragSourceNodeOffsetChanged) {
								return true;
							}

							this.currentDragSourceNodeOffsetChanged = !(0, _shallowEqual2.default)((0, _OffsetUtils.getNodeClientOffset)(node), this.currentDragSourceNodeOffset);

							return this.currentDragSourceNodeOffsetChanged;
						}
					}, {
						key: 'handleTopDragStartCapture',
						value: function handleTopDragStartCapture() {
							this.clearCurrentDragSourceNode();
							this.dragStartSourceIds = [];
						}
					}, {
						key: 'handleDragStart',
						value: function handleDragStart(e, sourceId) {
							this.dragStartSourceIds.unshift(sourceId);
						}
					}, {
						key: 'handleTopDragStart',
						value: function handleTopDragStart(e) {
							var _this5 = this;

							var dragStartSourceIds = this.dragStartSourceIds;

							this.dragStartSourceIds = null;

							var clientOffset = (0, _OffsetUtils.getEventClientOffset)(e);

							// Avoid crashing if we missed a drop event or our previous drag died
							if (this.monitor.isDragging()) {
								this.actions.endDrag();
							}

							// Don't publish the source just yet (see why below)
							this.actions.beginDrag(dragStartSourceIds, {
								publishSource: false,
								getSourceClientOffset: this.getSourceClientOffset,
								clientOffset: clientOffset
							});

							var dataTransfer = e.dataTransfer;

							var nativeType = (0, _NativeDragSources.matchNativeItemType)(dataTransfer);

							if (this.monitor.isDragging()) {
								if (typeof dataTransfer.setDragImage === 'function') {
									// Use custom drag image if user specifies it.
									// If child drag source refuses drag but parent agrees,
									// use parent's node as drag image. Neither works in IE though.
									var sourceId = this.monitor.getSourceId();
									var sourceNode = this.sourceNodes[sourceId];
									var dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;

									var _getCurrentSourcePrev = this.getCurrentSourcePreviewNodeOptions(),
										anchorX = _getCurrentSourcePrev.anchorX,
										anchorY = _getCurrentSourcePrev.anchorY,
										offsetX = _getCurrentSourcePrev.offsetX,
										offsetY = _getCurrentSourcePrev.offsetY;

									var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
									var offsetPoint = { offsetX: offsetX, offsetY: offsetY };
									var dragPreviewOffset = (0, _OffsetUtils.getDragPreviewOffset)(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);

									//dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
								}

								try {
									// Firefox won't drag without setting data
									dataTransfer.setData('application/json', {});
								} catch (err) { }
								// IE doesn't support MIME types in setData


								// Store drag source node so we can check whether
								// it is removed from DOM and trigger endDrag manually.
								this.setCurrentDragSourceNode(e.target);

								// Now we are ready to publish the drag source.. or are we not?

								var _getCurrentSourcePrev2 = this.getCurrentSourcePreviewNodeOptions(),
									captureDraggingState = _getCurrentSourcePrev2.captureDraggingState;

								if (!captureDraggingState) {
									// Usually we want to publish it in the next tick so that browser
									// is able to screenshot the current (not yet dragging) state.
									//
									// It also neatly avoids a situation where render() returns null
									// in the same tick for the source element, and browser freaks out.
									setTimeout(function () {
										return _this5.actions.publishDragSource();
									});
								} else {
									// In some cases the user may want to override this behavior, e.g.
									// to work around IE not supporting custom drag previews.
									//
									// When using a custom drag layer, the only way to prevent
									// the default drag preview from drawing in IE is to screenshot
									// the dragging state in which the node itself has zero opacity
									// and height. In this case, though, returning null from render()
									// will abruptly end the dragging, which is not obvious.
									//
									// This is the reason such behavior is strictly opt-in.
									this.actions.publishDragSource();
								}
							} else if (nativeType) {
								// A native item (such as URL) dragged from inside the document
								this.beginDragNativeItem(nativeType);
							} else if (!dataTransfer.types && (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
								// Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
								// Just let it drag. It's a native type (URL or text) and will be picked up in
								// dragenter handler.
								return; // eslint-disable-line no-useless-return
							} else {
								// If by this time no drag source reacted, tell browser not to drag.
								e.preventDefault();
							}
						}
					}, {
						key: 'handleTopDragEndCapture',
						value: function handleTopDragEndCapture() {
							if (this.clearCurrentDragSourceNode()) {
								// Firefox can dispatch this event in an infinite loop
								// if dragend handler does something like showing an alert.
								// Only proceed if we have not handled it already.
								this.actions.endDrag();
							}
						}
					}, {
						key: 'handleTopDragEnterCapture',
						value: function handleTopDragEnterCapture(e) {
							this.dragEnterTargetIds = [];

							var isFirstEnter = this.enterLeaveCounter.enter(e.target);
							if (!isFirstEnter || this.monitor.isDragging()) {
								return;
							}

							var dataTransfer = e.dataTransfer;

							var nativeType = (0, _NativeDragSources.matchNativeItemType)(dataTransfer);

							if (nativeType) {
								// A native item (such as file or URL) dragged from outside the document
								this.beginDragNativeItem(nativeType);
							}
						}
					}, {
						key: 'handleDragEnter',
						value: function handleDragEnter(e, targetId) {
							this.dragEnterTargetIds.unshift(targetId);
						}
					}, {
						key: 'handleTopDragEnter',
						value: function handleTopDragEnter(e) {
							var _this6 = this;

							var dragEnterTargetIds = this.dragEnterTargetIds;

							this.dragEnterTargetIds = [];

							if (!this.monitor.isDragging()) {
								// This is probably a native item type we don't understand.
								return;
							}

							this.altKeyPressed = e.altKey;

							if (!(0, _BrowserDetector.isFirefox)()) {
								// Don't emit hover in `dragenter` on Firefox due to an edge case.
								// If the target changes position as the result of `dragenter`, Firefox
								// will still happily dispatch `dragover` despite target being no longer
								// there. The easy solution is to only fire `hover` in `dragover` on FF.
								this.actions.hover(dragEnterTargetIds, {
									clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
								});
							}

							var canDrop = dragEnterTargetIds.some(function (targetId) {
								return _this6.monitor.canDropOnTarget(targetId);
							});

							if (canDrop) {
								// IE requires this to fire dragover events
								e.preventDefault();
								e.dataTransfer.dropEffect = this.getCurrentDropEffect();
							}
						}
					}, {
						key: 'handleTopDragOverCapture',
						value: function handleTopDragOverCapture() {
							this.dragOverTargetIds = [];
						}
					}, {
						key: 'handleDragOver',
						value: function handleDragOver(e, targetId) {
							this.dragOverTargetIds.unshift(targetId);
						}
					}, {
						key: 'handleTopDragOver',
						value: function handleTopDragOver(e) {
							var _this7 = this;

							var dragOverTargetIds = this.dragOverTargetIds;

							this.dragOverTargetIds = [];

							if (!this.monitor.isDragging()) {
								// This is probably a native item type we don't understand.
								// Prevent default "drop and blow away the whole document" action.
								e.preventDefault();
								e.dataTransfer.dropEffect = 'none';
								return;
							}

							this.altKeyPressed = e.altKey;

							this.actions.hover(dragOverTargetIds, {
								clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
							});

							var canDrop = dragOverTargetIds.some(function (targetId) {
								return _this7.monitor.canDropOnTarget(targetId);
							});

							if (canDrop) {
								// Show user-specified drop effect.
								e.preventDefault();
								e.dataTransfer.dropEffect = this.getCurrentDropEffect();
							} else if (this.isDraggingNativeItem()) {
								// Don't show a nice cursor but still prevent default
								// "drop and blow away the whole document" action.
								e.preventDefault();
								e.dataTransfer.dropEffect = 'none';
							} else if (this.checkIfCurrentDragSourceRectChanged()) {
								// Prevent animating to incorrect position.
								// Drop effect must be other than 'none' to prevent animation.
								e.preventDefault();
								e.dataTransfer.dropEffect = 'move';
							}
						}
					}, {
						key: 'handleTopDragLeaveCapture',
						value: function handleTopDragLeaveCapture(e) {
							if (this.isDraggingNativeItem()) {
								e.preventDefault();
							}

							var isLastLeave = this.enterLeaveCounter.leave(e.target);
							if (!isLastLeave) {
								return;
							}

							if (this.isDraggingNativeItem()) {
								this.endDragNativeItem();
							}
						}
					}, {
						key: 'handleTopDropCapture',
						value: function handleTopDropCapture(e) {
							this.dropTargetIds = [];
							e.preventDefault();

							if (this.isDraggingNativeItem()) {
								this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
							}

							this.enterLeaveCounter.reset();
						}
					}, {
						key: 'handleDrop',
						value: function handleDrop(e, targetId) {
							this.dropTargetIds.unshift(targetId);
						}
					}, {
						key: 'handleTopDrop',
						value: function handleTopDrop(e) {
							var dropTargetIds = this.dropTargetIds;

							this.dropTargetIds = [];

							this.actions.hover(dropTargetIds, {
								clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
							});
							this.actions.drop({ dropEffect: this.getCurrentDropEffect() });

							if (this.isDraggingNativeItem()) {
								this.endDragNativeItem();
							} else {
								this.endDragIfSourceWasRemovedFromDOM();
							}
						}
					}, {
						key: 'handleSelectStart',
						value: function handleSelectStart(e) {
							var target = e.target;

							// Only IE requires us to explicitly say
							// we want drag drop operation to start

							if (typeof target.dragDrop !== 'function') {
								return;
							}

							// Inputs and textareas should be selectable
							if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
								return;
							}

							// For other targets, ask IE
							// to enable drag and drop
							e.preventDefault();
							target.dragDrop();
						}
					}, {
						key: 'window',
						get: function get() {
							if (this.context && this.context.window) {
								return this.context.window;
							} else if (typeof window !== 'undefined') {
								return window;
							}
							return undefined;
						}
					}]);

					return HTML5Backend;
				}();

				exports.default = HTML5Backend;

				/***/
			}),
/* 361 */
/***/ (function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				/* eslint
					 no-plusplus: off,
					 no-mixed-operators: off
				*/
				var MonotonicInterpolant = function () {
					function MonotonicInterpolant(xs, ys) {
						_classCallCheck(this, MonotonicInterpolant);

						var length = xs.length;

						// Rearrange xs and ys so that xs is sorted
						var indexes = [];
						for (var i = 0; i < length; i++) {
							indexes.push(i);
						}
						indexes.sort(function (a, b) {
							return xs[a] < xs[b] ? -1 : 1;
						});

						// Get consecutive differences and slopes
						var dys = [];
						var dxs = [];
						var ms = [];
						var dx = void 0;
						var dy = void 0;
						for (var _i = 0; _i < length - 1; _i++) {
							dx = xs[_i + 1] - xs[_i];
							dy = ys[_i + 1] - ys[_i];
							dxs.push(dx);
							dys.push(dy);
							ms.push(dy / dx);
						}

						// Get degree-1 coefficients
						var c1s = [ms[0]];
						for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
							var _m = ms[_i2];
							var mNext = ms[_i2 + 1];
							if (_m * mNext <= 0) {
								c1s.push(0);
							} else {
								dx = dxs[_i2];
								var dxNext = dxs[_i2 + 1];
								var common = dx + dxNext;
								c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
							}
						}
						c1s.push(ms[ms.length - 1]);

						// Get degree-2 and degree-3 coefficients
						var c2s = [];
						var c3s = [];
						var m = void 0;
						for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
							m = ms[_i3];
							var c1 = c1s[_i3];
							var invDx = 1 / dxs[_i3];
							var _common = c1 + c1s[_i3 + 1] - m - m;
							c2s.push((m - c1 - _common) * invDx);
							c3s.push(_common * invDx * invDx);
						}

						this.xs = xs;
						this.ys = ys;
						this.c1s = c1s;
						this.c2s = c2s;
						this.c3s = c3s;
					}

					_createClass(MonotonicInterpolant, [{
						key: "interpolate",
						value: function interpolate(x) {
							var xs = this.xs,
								ys = this.ys,
								c1s = this.c1s,
								c2s = this.c2s,
								c3s = this.c3s;

							// The rightmost point in the dataset should give an exact result

							var i = xs.length - 1;
							if (x === xs[i]) {
								return ys[i];
							}

							// Search for the interval x is in, returning the corresponding y if x is one of the original xs
							var low = 0;
							var high = c3s.length - 1;
							var mid = void 0;
							while (low <= high) {
								mid = Math.floor(0.5 * (low + high));
								var xHere = xs[mid];
								if (xHere < x) {
									low = mid + 1;
								} else if (xHere > x) {
									high = mid - 1;
								} else {
									return ys[mid];
								}
							}
							i = Math.max(0, high);

							// Interpolate
							var diff = x - xs[i];
							var diffSq = diff * diff;
							return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
						}
					}]);

					return MonotonicInterpolant;
				}();

				exports.default = MonotonicInterpolant;

				/***/
			}),
/* 362 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _nativeTypesConfig;

				exports.createNativeDragSource = createNativeDragSource;
				exports.matchNativeItemType = matchNativeItemType;

				var _NativeTypes = __webpack_require__(88);

				var NativeTypes = _interopRequireWildcard(_NativeTypes);

				function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

				function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

				function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
					var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
						return resultSoFar || dataTransfer.getData(typeToTry);
					}, null);

					return result != null // eslint-disable-line eqeqeq
						? result : defaultValue;
				}

				var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
					exposeProperty: 'files',
					matchesTypes: ['Files'],
					getData: function getData(dataTransfer) {
						return Array.prototype.slice.call(dataTransfer.files);
					}
				}), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
					exposeProperty: 'urls',
					matchesTypes: ['Url', 'text/uri-list'],
					getData: function getData(dataTransfer, matchesTypes) {
						return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
					}
				}), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
					exposeProperty: 'text',
					matchesTypes: ['Text', 'text/plain'],
					getData: function getData(dataTransfer, matchesTypes) {
						return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
					}
				}), _nativeTypesConfig);

				function createNativeDragSource(type) {
					var _nativeTypesConfig$ty = nativeTypesConfig[type],
						exposeProperty = _nativeTypesConfig$ty.exposeProperty,
						matchesTypes = _nativeTypesConfig$ty.matchesTypes,
						getData = _nativeTypesConfig$ty.getData;


					return function () {
						function NativeDragSource() {
							var _item, _mutatorMap;

							_classCallCheck(this, NativeDragSource);

							this.item = (_item = {}, _mutatorMap = {}, _mutatorMap[exposeProperty] = _mutatorMap[exposeProperty] || {}, _mutatorMap[exposeProperty].get = function () {
								// eslint-disable-next-line no-console
								console.warn('Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
								return null;
							}, _defineEnumerableProperties(_item, _mutatorMap), _item);
						}

						_createClass(NativeDragSource, [{
							key: 'mutateItemByReadingDataTransfer',
							value: function mutateItemByReadingDataTransfer(dataTransfer) {
								delete this.item[exposeProperty];
								this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
							}
						}, {
							key: 'canDrag',
							value: function canDrag() {
								return true;
							}
						}, {
							key: 'beginDrag',
							value: function beginDrag() {
								return this.item;
							}
						}, {
							key: 'isDragging',
							value: function isDragging(monitor, handle) {
								return handle === monitor.getSourceId();
							}
						}, {
							key: 'endDrag',
							value: function endDrag() { }
						}]);

						return NativeDragSource;
					}();
				}

				function matchNativeItemType(dataTransfer) {
					var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);

					return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
						var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;

						return matchesTypes.some(function (t) {
							return dataTransferTypes.indexOf(t) > -1;
						});
					})[0] || null;
				}

				/***/
			}),
/* 363 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.getNodeClientOffset = getNodeClientOffset;
				exports.getEventClientOffset = getEventClientOffset;
				exports.getDragPreviewOffset = getDragPreviewOffset;

				var _BrowserDetector = __webpack_require__(153);

				var _MonotonicInterpolant = __webpack_require__(361);

				var _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				/* eslint
					 no-mixed-operators: off
				*/
				var ELEMENT_NODE = 1;

				function getNodeClientOffset(node) {
					var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

					if (!el) {
						return null;
					}

					var _el$getBoundingClient = el.getBoundingClientRect(),
						top = _el$getBoundingClient.top,
						left = _el$getBoundingClient.left;

					return { x: left, y: top };
				}

				function getEventClientOffset(e) {
					return {
						x: e.clientX,
						y: e.clientY
					};
				}

				function isImageNode(node) {
					return node.nodeName === 'IMG' && ((0, _BrowserDetector.isFirefox)() || !document.documentElement.contains(node));
				}

				function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
					var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
					var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;

					// Work around @2x coordinate discrepancies in browsers
					if ((0, _BrowserDetector.isSafari)() && isImage) {
						dragPreviewHeight /= window.devicePixelRatio;
						dragPreviewWidth /= window.devicePixelRatio;
					}
					return { dragPreviewWidth: dragPreviewWidth, dragPreviewHeight: dragPreviewHeight };
				}

				function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
					// The browsers will use the image intrinsic size under different conditions.
					// Firefox only cares if it's an image, but WebKit also wants it to be detached.
					var isImage = isImageNode(dragPreview);
					var dragPreviewNode = isImage ? sourceNode : dragPreview;
					var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
					var offsetFromDragPreview = {
						x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
						y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
					};
					var sourceWidth = sourceNode.offsetWidth,
						sourceHeight = sourceNode.offsetHeight;
					var anchorX = anchorPoint.anchorX,
						anchorY = anchorPoint.anchorY;

					var _getDragPreviewSize = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight),
						dragPreviewWidth = _getDragPreviewSize.dragPreviewWidth,
						dragPreviewHeight = _getDragPreviewSize.dragPreviewHeight;

					var calculateYOffset = function calculateYOffset() {
						var interpolantY = new _MonotonicInterpolant2.default([0, 0.5, 1], [
							// Dock to the top
							offsetFromDragPreview.y,
							// Align at the center
							offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
							// Dock to the bottom
							offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
						var y = interpolantY.interpolate(anchorY);
						// Work around Safari 8 positioning bug
						if ((0, _BrowserDetector.isSafari)() && isImage) {
							// We'll have to wait for @3x to see if this is entirely correct
							y += (window.devicePixelRatio - 1) * dragPreviewHeight;
						}
						return y;
					};

					var calculateXOffset = function calculateXOffset() {
						// Interpolate coordinates depending on anchor point
						// If you know a simpler way to do this, let me know
						var interpolantX = new _MonotonicInterpolant2.default([0, 0.5, 1], [
							// Dock to the left
							offsetFromDragPreview.x,
							// Align at the center
							offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
							// Dock to the right
							offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
						return interpolantX.interpolate(anchorX);
					};

					// Force offsets if specified in the options.
					var offsetX = offsetPoint.offsetX,
						offsetY = offsetPoint.offsetY;

					var isManualOffsetX = offsetX === 0 || offsetX;
					var isManualOffsetY = offsetY === 0 || offsetY;
					return {
						x: isManualOffsetX ? offsetX : calculateXOffset(),
						y: isManualOffsetY ? offsetY : calculateYOffset()
					};
				}

				/***/
			}),
/* 364 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = getEmptyImage;
				var emptyImage = void 0;
				function getEmptyImage() {
					if (!emptyImage) {
						emptyImage = new Image();
						emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
					}

					return emptyImage;
				}

				/***/
			}),
/* 365 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.getEmptyImage = exports.NativeTypes = undefined;
				exports.default = createHTML5Backend;

				var _HTML5Backend = __webpack_require__(360);

				var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);

				var _getEmptyImage = __webpack_require__(364);

				var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);

				var _NativeTypes = __webpack_require__(88);

				var NativeTypes = _interopRequireWildcard(_NativeTypes);

				function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				exports.NativeTypes = NativeTypes;
				exports.getEmptyImage = _getEmptyImage2.default;
				function createHTML5Backend(manager) {
					return new _HTML5Backend2.default(manager);
				}

				/***/
			}),
			/* 366 */
			89,
/* 367 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = undefined;

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _class, _temp;

				var _react = __webpack_require__(2);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _DragDropContext = __webpack_require__(154);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				/**
				 * This class is a React-Component based version of the DragDropContext.
				 * This is an alternative to decorating an application component with an ES7 decorator.
				 */
				var DragDropContextProvider = (_temp = _class = function (_Component) {
					_inherits(DragDropContextProvider, _Component);

					function DragDropContextProvider(props, context) {
						_classCallCheck(this, DragDropContextProvider);

						/**
					 * This property determines which window global to use for creating the DragDropManager.
					 * If a window has been injected explicitly via props, that is used first. If it is available
					 * as a context value, then use that, otherwise use the browser global.
					 */
						var _this = _possibleConstructorReturn(this, (DragDropContextProvider.__proto__ || Object.getPrototypeOf(DragDropContextProvider)).call(this, props, context));

						var getWindow = function getWindow() {
							if (props && props.window) {
								return props.window;
							} else if (context && context.window) {
								return context.window;
							} else if (typeof window !== 'undefined') {
								return window;
							}
							return undefined;
						};

						_this.backend = (0, _DragDropContext.unpackBackendForEs5Users)(props.backend);
						_this.childContext = (0, _DragDropContext.createChildContext)(_this.backend, {
							window: getWindow()
						});
						return _this;
					}

					_createClass(DragDropContextProvider, [{
						key: 'componentWillReceiveProps',
						value: function componentWillReceiveProps(nextProps) {
							if (nextProps.backend !== this.props.backend || nextProps.window !== this.props.window) {
								throw new Error('DragDropContextProvider backend and window props must not change.');
							}
						}
					}, {
						key: 'getChildContext',
						value: function getChildContext() {
							return this.childContext;
						}
					}, {
						key: 'render',
						value: function render() {
							return _react.Children.only(this.props.children);
						}
					}]);

					return DragDropContextProvider;
				}(_react.Component), _class.propTypes = {
					backend: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
					children: _propTypes2.default.element.isRequired,
					window: _propTypes2.default.object // eslint-disable-line react/forbid-prop-types
				}, _class.defaultProps = {
					window: undefined
				}, _class.childContextTypes = _DragDropContext.CHILD_CONTEXT_TYPES, _class.displayName = 'DragDropContextProvider', _class.contextTypes = {
					window: _propTypes2.default.object
				}, _temp);
				exports.default = DragDropContextProvider;

				/***/
			}),
/* 368 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				exports.default = DragLayer;

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _hoistNonReactStatics = __webpack_require__(83);

				var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

				var _isPlainObject = __webpack_require__(22);

				var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _shallowEqual = __webpack_require__(89);

				var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

				var _shallowEqualScalar = __webpack_require__(158);

				var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

				var _checkDecoratorArguments = __webpack_require__(57);

				var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				function DragLayer(collect) {
					var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

					_checkDecoratorArguments2.default.apply(undefined, ['DragLayer', 'collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
					(0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);
					(0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. ' + 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);

					return function decorateLayer(DecoratedComponent) {
						var _class, _temp;

						var _options$arePropsEqua = options.arePropsEqual,
							arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

						var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

						var DragLayerContainer = (_temp = _class = function (_Component) {
							_inherits(DragLayerContainer, _Component);

							_createClass(DragLayerContainer, [{
								key: 'getDecoratedComponentInstance',
								value: function getDecoratedComponentInstance() {
									(0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can not be a stateless component.');
									return this.child;
								}
							}, {
								key: 'shouldComponentUpdate',
								value: function shouldComponentUpdate(nextProps, nextState) {
									return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
								}
							}]);

							function DragLayerContainer(props, context) {
								_classCallCheck(this, DragLayerContainer);

								var _this = _possibleConstructorReturn(this, (DragLayerContainer.__proto__ || Object.getPrototypeOf(DragLayerContainer)).call(this, props));

								_this.handleChange = _this.handleChange.bind(_this);

								_this.manager = context.dragDropManager;
								(0, _invariant2.default)(_typeof(_this.manager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

								_this.state = _this.getCurrentState();
								return _this;
							}

							_createClass(DragLayerContainer, [{
								key: 'componentDidMount',
								value: function componentDidMount() {
									this.isCurrentlyMounted = true;

									var monitor = this.manager.getMonitor();
									this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
									this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);

									this.handleChange();
								}
							}, {
								key: 'componentWillUnmount',
								value: function componentWillUnmount() {
									this.isCurrentlyMounted = false;

									this.unsubscribeFromOffsetChange();
									this.unsubscribeFromStateChange();
								}
							}, {
								key: 'handleChange',
								value: function handleChange() {
									if (!this.isCurrentlyMounted) {
										return;
									}

									var nextState = this.getCurrentState();
									if (!(0, _shallowEqual2.default)(nextState, this.state)) {
										this.setState(nextState);
									}
								}
							}, {
								key: 'getCurrentState',
								value: function getCurrentState() {
									var monitor = this.manager.getMonitor();
									return collect(monitor, this.props);
								}
							}, {
								key: 'render',
								value: function render() {
									var _this2 = this;

									return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
										ref: function ref(child) {
											_this2.child = child;
										}
									}));
								}
							}]);

							return DragLayerContainer;
						}(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragLayer(' + displayName + ')', _class.contextTypes = {
							dragDropManager: _propTypes2.default.object.isRequired
						}, _temp);


						return (0, _hoistNonReactStatics2.default)(DragLayerContainer, DecoratedComponent);
					};
				}

				/***/
			}),
/* 369 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = DragSource;

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _isPlainObject = __webpack_require__(22);

				var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

				var _checkDecoratorArguments = __webpack_require__(57);

				var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

				var _decorateHandler = __webpack_require__(156);

				var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

				var _registerSource = __webpack_require__(377);

				var _registerSource2 = _interopRequireDefault(_registerSource);

				var _createSourceFactory = __webpack_require__(372);

				var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

				var _createSourceMonitor = __webpack_require__(373);

				var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

				var _createSourceConnector = __webpack_require__(371);

				var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

				var _isValidType = __webpack_require__(157);

				var _isValidType2 = _interopRequireDefault(_isValidType);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function DragSource(type, spec, collect) {
					var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

					_checkDecoratorArguments2.default.apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments)));
					var getType = type;
					if (typeof type !== 'function') {
						(0, _invariant2.default)((0, _isValidType2.default)(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', type);
						getType = function getType() {
							return type;
						};
					}
					(0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', spec);
					var createSource = (0, _createSourceFactory2.default)(spec);
					(0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
					(0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);

					return function decorateSource(DecoratedComponent) {
						return (0, _decorateHandler2.default)({
							connectBackend: function connectBackend(backend, sourceId) {
								return backend.connectDragSource(sourceId);
							},
							containerDisplayName: 'DragSource',
							createHandler: createSource,
							registerHandler: _registerSource2.default,
							createMonitor: _createSourceMonitor2.default,
							createConnector: _createSourceConnector2.default,
							DecoratedComponent: DecoratedComponent,
							getType: getType,
							collect: collect,
							options: options
						});
					};
				}

				/***/
			}),
/* 370 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = DropTarget;

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _isPlainObject = __webpack_require__(22);

				var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

				var _checkDecoratorArguments = __webpack_require__(57);

				var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

				var _decorateHandler = __webpack_require__(156);

				var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

				var _registerTarget = __webpack_require__(378);

				var _registerTarget2 = _interopRequireDefault(_registerTarget);

				var _createTargetFactory = __webpack_require__(375);

				var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

				var _createTargetMonitor = __webpack_require__(376);

				var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

				var _createTargetConnector = __webpack_require__(374);

				var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

				var _isValidType = __webpack_require__(157);

				var _isValidType2 = _interopRequireDefault(_isValidType);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function DropTarget(type, spec, collect) {
					var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

					_checkDecoratorArguments2.default.apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments)));
					var getType = type;
					if (typeof type !== 'function') {
						(0, _invariant2.default)((0, _isValidType2.default)(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', type);
						getType = function getType() {
							return type;
						};
					}
					(0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', spec);
					var createTarget = (0, _createTargetFactory2.default)(spec);
					(0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
					(0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);

					return function decorateTarget(DecoratedComponent) {
						return (0, _decorateHandler2.default)({
							connectBackend: function connectBackend(backend, targetId) {
								return backend.connectDropTarget(targetId);
							},
							containerDisplayName: 'DropTarget',
							createHandler: createTarget,
							registerHandler: _registerTarget2.default,
							createMonitor: _createTargetMonitor2.default,
							createConnector: _createTargetConnector2.default,
							DecoratedComponent: DecoratedComponent,
							getType: getType,
							collect: collect,
							options: options
						});
					};
				}

				/***/
			}),
/* 371 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = createSourceConnector;

				var _wrapConnectorHooks = __webpack_require__(159);

				var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

				var _areOptionsEqual = __webpack_require__(155);

				var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function createSourceConnector(backend) {
					var currentHandlerId = void 0;

					var currentDragSourceNode = void 0;
					var currentDragSourceOptions = void 0;
					var disconnectCurrentDragSource = void 0;

					var currentDragPreviewNode = void 0;
					var currentDragPreviewOptions = void 0;
					var disconnectCurrentDragPreview = void 0;

					function reconnectDragSource() {
						if (disconnectCurrentDragSource) {
							disconnectCurrentDragSource();
							disconnectCurrentDragSource = null;
						}

						if (currentHandlerId && currentDragSourceNode) {
							disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
						}
					}

					function reconnectDragPreview() {
						if (disconnectCurrentDragPreview) {
							disconnectCurrentDragPreview();
							disconnectCurrentDragPreview = null;
						}

						if (currentHandlerId && currentDragPreviewNode) {
							disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
						}
					}

					function receiveHandlerId(handlerId) {
						if (handlerId === currentHandlerId) {
							return;
						}

						currentHandlerId = handlerId;
						reconnectDragSource();
						reconnectDragPreview();
					}

					var hooks = (0, _wrapConnectorHooks2.default)({
						dragSource: function connectDragSource(node, options) {
							if (node === currentDragSourceNode && (0, _areOptionsEqual2.default)(options, currentDragSourceOptions)) {
								return;
							}

							currentDragSourceNode = node;
							currentDragSourceOptions = options;

							reconnectDragSource();
						},

						dragPreview: function connectDragPreview(node, options) {
							if (node === currentDragPreviewNode && (0, _areOptionsEqual2.default)(options, currentDragPreviewOptions)) {
								return;
							}

							currentDragPreviewNode = node;
							currentDragPreviewOptions = options;

							reconnectDragPreview();
						}
					});

					return {
						receiveHandlerId: receiveHandlerId,
						hooks: hooks
					};
				}

				/***/
			}),
/* 372 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				exports.default = createSourceFactory;

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _isPlainObject = __webpack_require__(22);

				var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
				var REQUIRED_SPEC_METHODS = ['beginDrag'];

				function createSourceFactory(spec) {
					Object.keys(spec).forEach(function (key) {
						(0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
						(0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
					});
					REQUIRED_SPEC_METHODS.forEach(function (key) {
						(0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
					});

					var Source = function () {
						function Source(monitor) {
							_classCallCheck(this, Source);

							this.monitor = monitor;
							this.props = null;
							this.component = null;
						}

						_createClass(Source, [{
							key: 'receiveProps',
							value: function receiveProps(props) {
								this.props = props;
							}
						}, {
							key: 'receiveComponent',
							value: function receiveComponent(component) {
								this.component = component;
							}
						}, {
							key: 'canDrag',
							value: function canDrag() {
								if (!spec.canDrag) {
									return true;
								}

								return spec.canDrag(this.props, this.monitor);
							}
						}, {
							key: 'isDragging',
							value: function isDragging(globalMonitor, sourceId) {
								if (!spec.isDragging) {
									return sourceId === globalMonitor.getSourceId();
								}

								return spec.isDragging(this.props, this.monitor);
							}
						}, {
							key: 'beginDrag',
							value: function beginDrag() {
								var item = spec.beginDrag(this.props, this.monitor, this.component);
								if (false) {
									(0, _invariant2.default)((0, _isPlainObject2.default)(item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', item);
								}
								return item;
							}
						}, {
							key: 'endDrag',
							value: function endDrag() {
								if (!spec.endDrag) {
									return;
								}

								spec.endDrag(this.props, this.monitor, this.component);
							}
						}]);

						return Source;
					}();

					return function createSource(monitor) {
						return new Source(monitor);
					};
				}

				/***/
			}),
/* 373 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				exports.default = createSourceMonitor;

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var isCallingCanDrag = false;
				var isCallingIsDragging = false;

				var SourceMonitor = function () {
					function SourceMonitor(manager) {
						_classCallCheck(this, SourceMonitor);

						this.internalMonitor = manager.getMonitor();
					}

					_createClass(SourceMonitor, [{
						key: 'receiveHandlerId',
						value: function receiveHandlerId(sourceId) {
							this.sourceId = sourceId;
						}
					}, {
						key: 'canDrag',
						value: function canDrag() {
							(0, _invariant2.default)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

							try {
								isCallingCanDrag = true;
								return this.internalMonitor.canDragSource(this.sourceId);
							} finally {
								isCallingCanDrag = false;
							}
						}
					}, {
						key: 'isDragging',
						value: function isDragging() {
							(0, _invariant2.default)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

							try {
								isCallingIsDragging = true;
								return this.internalMonitor.isDraggingSource(this.sourceId);
							} finally {
								isCallingIsDragging = false;
							}
						}
					}, {
						key: 'getItemType',
						value: function getItemType() {
							return this.internalMonitor.getItemType();
						}
					}, {
						key: 'getItem',
						value: function getItem() {
							return this.internalMonitor.getItem();
						}
					}, {
						key: 'getDropResult',
						value: function getDropResult() {
							return this.internalMonitor.getDropResult();
						}
					}, {
						key: 'didDrop',
						value: function didDrop() {
							return this.internalMonitor.didDrop();
						}
					}, {
						key: 'getInitialClientOffset',
						value: function getInitialClientOffset() {
							return this.internalMonitor.getInitialClientOffset();
						}
					}, {
						key: 'getInitialSourceClientOffset',
						value: function getInitialSourceClientOffset() {
							return this.internalMonitor.getInitialSourceClientOffset();
						}
					}, {
						key: 'getSourceClientOffset',
						value: function getSourceClientOffset() {
							return this.internalMonitor.getSourceClientOffset();
						}
					}, {
						key: 'getClientOffset',
						value: function getClientOffset() {
							return this.internalMonitor.getClientOffset();
						}
					}, {
						key: 'getDifferenceFromInitialOffset',
						value: function getDifferenceFromInitialOffset() {
							return this.internalMonitor.getDifferenceFromInitialOffset();
						}
					}]);

					return SourceMonitor;
				}();

				function createSourceMonitor(manager) {
					return new SourceMonitor(manager);
				}

				/***/
			}),
/* 374 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = createTargetConnector;

				var _wrapConnectorHooks = __webpack_require__(159);

				var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

				var _areOptionsEqual = __webpack_require__(155);

				var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function createTargetConnector(backend) {
					var currentHandlerId = void 0;

					var currentDropTargetNode = void 0;
					var currentDropTargetOptions = void 0;
					var disconnectCurrentDropTarget = void 0;

					function reconnectDropTarget() {
						if (disconnectCurrentDropTarget) {
							disconnectCurrentDropTarget();
							disconnectCurrentDropTarget = null;
						}

						if (currentHandlerId && currentDropTargetNode) {
							disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
						}
					}

					function receiveHandlerId(handlerId) {
						if (handlerId === currentHandlerId) {
							return;
						}

						currentHandlerId = handlerId;
						reconnectDropTarget();
					}

					var hooks = (0, _wrapConnectorHooks2.default)({
						dropTarget: function connectDropTarget(node, options) {
							if (node === currentDropTargetNode && (0, _areOptionsEqual2.default)(options, currentDropTargetOptions)) {
								return;
							}

							currentDropTargetNode = node;
							currentDropTargetOptions = options;

							reconnectDropTarget();
						}
					});

					return {
						receiveHandlerId: receiveHandlerId,
						hooks: hooks
					};
				}

				/***/
			}),
/* 375 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				exports.default = createTargetFactory;

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _isPlainObject = __webpack_require__(22);

				var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

				function createTargetFactory(spec) {
					Object.keys(spec).forEach(function (key) {
						(0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
						(0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
					});

					var Target = function () {
						function Target(monitor) {
							_classCallCheck(this, Target);

							this.monitor = monitor;
							this.props = null;
							this.component = null;
						}

						_createClass(Target, [{
							key: 'receiveProps',
							value: function receiveProps(props) {
								this.props = props;
							}
						}, {
							key: 'receiveMonitor',
							value: function receiveMonitor(monitor) {
								this.monitor = monitor;
							}
						}, {
							key: 'receiveComponent',
							value: function receiveComponent(component) {
								this.component = component;
							}
						}, {
							key: 'canDrop',
							value: function canDrop() {
								if (!spec.canDrop) {
									return true;
								}

								return spec.canDrop(this.props, this.monitor);
							}
						}, {
							key: 'hover',
							value: function hover() {
								if (!spec.hover) {
									return;
								}

								spec.hover(this.props, this.monitor, this.component);
							}
						}, {
							key: 'drop',
							value: function drop() {
								if (!spec.drop) {
									return undefined;
								}

								var dropResult = spec.drop(this.props, this.monitor, this.component);
								if (false) {
									(0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isPlainObject2.default)(dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', dropResult);
								}
								return dropResult;
							}
						}]);

						return Target;
					}();

					return function createTarget(monitor) {
						return new Target(monitor);
					};
				}

				/***/
			}),
/* 376 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				exports.default = createTargetMonitor;

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				var isCallingCanDrop = false;

				var TargetMonitor = function () {
					function TargetMonitor(manager) {
						_classCallCheck(this, TargetMonitor);

						this.internalMonitor = manager.getMonitor();
					}

					_createClass(TargetMonitor, [{
						key: 'receiveHandlerId',
						value: function receiveHandlerId(targetId) {
							this.targetId = targetId;
						}
					}, {
						key: 'canDrop',
						value: function canDrop() {
							(0, _invariant2.default)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html');

							try {
								isCallingCanDrop = true;
								return this.internalMonitor.canDropOnTarget(this.targetId);
							} finally {
								isCallingCanDrop = false;
							}
						}
					}, {
						key: 'isOver',
						value: function isOver(options) {
							return this.internalMonitor.isOverTarget(this.targetId, options);
						}
					}, {
						key: 'getItemType',
						value: function getItemType() {
							return this.internalMonitor.getItemType();
						}
					}, {
						key: 'getItem',
						value: function getItem() {
							return this.internalMonitor.getItem();
						}
					}, {
						key: 'getDropResult',
						value: function getDropResult() {
							return this.internalMonitor.getDropResult();
						}
					}, {
						key: 'didDrop',
						value: function didDrop() {
							return this.internalMonitor.didDrop();
						}
					}, {
						key: 'getInitialClientOffset',
						value: function getInitialClientOffset() {
							return this.internalMonitor.getInitialClientOffset();
						}
					}, {
						key: 'getInitialSourceClientOffset',
						value: function getInitialSourceClientOffset() {
							return this.internalMonitor.getInitialSourceClientOffset();
						}
					}, {
						key: 'getSourceClientOffset',
						value: function getSourceClientOffset() {
							return this.internalMonitor.getSourceClientOffset();
						}
					}, {
						key: 'getClientOffset',
						value: function getClientOffset() {
							return this.internalMonitor.getClientOffset();
						}
					}, {
						key: 'getDifferenceFromInitialOffset',
						value: function getDifferenceFromInitialOffset() {
							return this.internalMonitor.getDifferenceFromInitialOffset();
						}
					}]);

					return TargetMonitor;
				}();

				function createTargetMonitor(manager) {
					return new TargetMonitor(manager);
				}

				/***/
			}),
/* 377 */
/***/ (function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = registerSource;
				function registerSource(type, source, manager) {
					var registry = manager.getRegistry();
					var sourceId = registry.addSource(type, source);

					function unregisterSource() {
						registry.removeSource(sourceId);
					}

					return {
						handlerId: sourceId,
						unregister: unregisterSource
					};
				}

				/***/
			}),
/* 378 */
/***/ (function (module, exports) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = registerTarget;
				function registerTarget(type, target, manager) {
					var registry = manager.getRegistry();
					var targetId = registry.addTarget(type, target);

					function unregisterTarget() {
						registry.removeTarget(targetId);
					}

					return {
						handlerId: targetId,
						unregister: unregisterTarget
					};
				}

				/***/
			}),
/* 379 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.default = cloneWithRef;

				var _invariant = __webpack_require__(10);

				var _invariant2 = _interopRequireDefault(_invariant);

				var _react = __webpack_require__(2);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function cloneWithRef(element, newRef) {
					var previousRef = element.ref;
					(0, _invariant2.default)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

					if (!previousRef) {
						// When there is no ref on the element, use the new ref directly
						return (0, _react.cloneElement)(element, {
							ref: newRef
						});
					}

					return (0, _react.cloneElement)(element, {
						ref: function ref(node) {
							newRef(node);

							if (previousRef) {
								previousRef(node);
							}
						}
					});
				}

				/***/
			}),
/* 380 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var sizerStyle = {
					position: 'absolute',
					top: 0,
					left: 0,
					visibility: 'hidden',
					height: 0,
					overflow: 'scroll',
					whiteSpace: 'pre'
				};

				var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

				var cleanInputProps = function cleanInputProps(inputProps) {
					INPUT_PROPS_BLACKLIST.forEach(function (field) {
						return delete inputProps[field];
					});
					return inputProps;
				};

				var copyStyles = function copyStyles(styles, node) {
					node.style.fontSize = styles.fontSize;
					node.style.fontFamily = styles.fontFamily;
					node.style.fontWeight = styles.fontWeight;
					node.style.fontStyle = styles.fontStyle;
					node.style.letterSpacing = styles.letterSpacing;
					node.style.textTransform = styles.textTransform;
				};

				var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

				var generateId = function generateId() {
					// we only need an auto-generated ID for stylesheet injection, which is only
					// used for IE. so if the browser is not IE, this should return undefined.
					return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
				};

				var AutosizeInput = function (_Component) {
					_inherits(AutosizeInput, _Component);

					function AutosizeInput(props) {
						_classCallCheck(this, AutosizeInput);

						var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

						_this.inputRef = function (el) {
							_this.input = el;
							if (typeof _this.props.inputRef === 'function') {
								_this.props.inputRef(el);
							}
						};

						_this.placeHolderSizerRef = function (el) {
							_this.placeHolderSizer = el;
						};

						_this.sizerRef = function (el) {
							_this.sizer = el;
						};

						_this.state = {
							inputWidth: props.minWidth,
							inputId: props.id || generateId()
						};
						return _this;
					}

					_createClass(AutosizeInput, [{
						key: 'componentDidMount',
						value: function componentDidMount() {
							this.mounted = true;
							this.copyInputStyles();
							this.updateInputWidth();
						}
					}, {
						key: 'componentWillReceiveProps',
						value: function componentWillReceiveProps(nextProps) {
							var id = nextProps.id;

							if (id !== this.props.id) {
								this.setState({ inputId: id || generateId() });
							}
						}
					}, {
						key: 'componentDidUpdate',
						value: function componentDidUpdate(prevProps, prevState) {
							if (prevState.inputWidth !== this.state.inputWidth) {
								if (typeof this.props.onAutosize === 'function') {
									this.props.onAutosize(this.state.inputWidth);
								}
							}
							this.updateInputWidth();
						}
					}, {
						key: 'componentWillUnmount',
						value: function componentWillUnmount() {
							this.mounted = false;
						}
					}, {
						key: 'copyInputStyles',
						value: function copyInputStyles() {
							if (!this.mounted || !window.getComputedStyle) {
								return;
							}
							var inputStyles = this.input && window.getComputedStyle(this.input);
							if (!inputStyles) {
								return;
							}
							copyStyles(inputStyles, this.sizer);
							if (this.placeHolderSizer) {
								copyStyles(inputStyles, this.placeHolderSizer);
							}
						}
					}, {
						key: 'updateInputWidth',
						value: function updateInputWidth() {
							if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
								return;
							}
							var newInputWidth = void 0;
							if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
								newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
							} else {
								newInputWidth = this.sizer.scrollWidth + 2;
							}
							// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
							var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
							newInputWidth += extraWidth;
							if (newInputWidth < this.props.minWidth) {
								newInputWidth = this.props.minWidth;
							}
							if (newInputWidth !== this.state.inputWidth) {
								this.setState({
									inputWidth: newInputWidth
								});
							}
						}
					}, {
						key: 'getInput',
						value: function getInput() {
							return this.input;
						}
					}, {
						key: 'focus',
						value: function focus() {
							this.input.focus();
						}
					}, {
						key: 'blur',
						value: function blur() {
							this.input.blur();
						}
					}, {
						key: 'select',
						value: function select() {
							this.input.select();
						}
					}, {
						key: 'renderStyles',
						value: function renderStyles() {
							// this method injects styles to hide IE's clear indicator, which messes
							// with input size detection. the stylesheet is only injected when the
							// browser is IE, and can also be disabled by the `injectStyles` prop.
							var injectStyles = this.props.injectStyles;

							return isIE && injectStyles ? _react2.default.createElement('style', {
								dangerouslySetInnerHTML: {
									__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
								}
							}) : null;
						}
					}, {
						key: 'render',
						value: function render() {
							var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
								if (previousValue !== null && previousValue !== undefined) {
									return previousValue;
								}
								return currentValue;
							});

							var wrapperStyle = _extends({}, this.props.style);
							if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

							var inputStyle = _extends({
								boxSizing: 'content-box',
								width: this.state.inputWidth + 'px'
							}, this.props.inputStyle);

							var inputProps = _objectWithoutProperties(this.props, []);

							cleanInputProps(inputProps);
							inputProps.className = this.props.inputClassName;
							inputProps.id = this.state.inputId;
							inputProps.style = inputStyle;

							return _react2.default.createElement(
								'div',
								{ className: this.props.className, style: wrapperStyle },
								this.renderStyles(),
								_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
								_react2.default.createElement(
									'div',
									{ ref: this.sizerRef, style: sizerStyle },
									sizerValue
								),
								this.props.placeholder ? _react2.default.createElement(
									'div',
									{ ref: this.placeHolderSizerRef, style: sizerStyle },
									this.props.placeholder
								) : null
							);
						}
					}]);

					return AutosizeInput;
				}(_react.Component);

				AutosizeInput.propTypes = {
					className: _propTypes2.default.string, // className for the outer element
					defaultValue: _propTypes2.default.any, // default field value
					extraWidth: _propTypes2.default.oneOfType([// additional width for input element
						_propTypes2.default.number, _propTypes2.default.string]),
					id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
					injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
					inputClassName: _propTypes2.default.string, // className for the input element
					inputRef: _propTypes2.default.func, // ref callback for the input element
					inputStyle: _propTypes2.default.object, // css styles for the input element
					minWidth: _propTypes2.default.oneOfType([// minimum width for input element
						_propTypes2.default.number, _propTypes2.default.string]),
					onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
					onChange: _propTypes2.default.func, // onChange handler: function(event) {}
					placeholder: _propTypes2.default.string, // placeholder text
					placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
					style: _propTypes2.default.object, // css styles for the outer element
					value: _propTypes2.default.any // field value
				};
				AutosizeInput.defaultProps = {
					minWidth: 1,
					injectStyles: true
				};

				exports.default = AutosizeInput;

				/***/
			}),
/* 381 */,
/* 382 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

				var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

				var _propTypes = __webpack_require__(3);

				var _propTypes2 = _interopRequireDefault(_propTypes);

				var _react = __webpack_require__(2);

				var _react2 = _interopRequireDefault(_react);

				var _Async = __webpack_require__(160);

				var _Async2 = _interopRequireDefault(_Async);

				var _Creatable = __webpack_require__(161);

				var _Creatable2 = _interopRequireDefault(_Creatable);

				var _Select = __webpack_require__(58);

				var _Select2 = _interopRequireDefault(_Select);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

				function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

				function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

				function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

				var AsyncCreatableSelect = function (_React$Component) {
					_inherits(AsyncCreatableSelect, _React$Component);

					function AsyncCreatableSelect() {
						_classCallCheck(this, AsyncCreatableSelect);

						return _possibleConstructorReturn(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
					}

					_createClass(AsyncCreatableSelect, [{
						key: 'focus',
						value: function focus() {
							this.select.focus();
						}
					}, {
						key: 'render',
						value: function render() {
							var _this2 = this;

							return _react2.default.createElement(
								_Async2.default,
								this.props,
								function (_ref) {
									var ref = _ref.ref,
										asyncProps = _objectWithoutProperties(_ref, ['ref']);

									var asyncRef = ref;
									return _react2.default.createElement(
										_Creatable2.default,
										asyncProps,
										function (_ref2) {
											var ref = _ref2.ref,
												creatableProps = _objectWithoutProperties(_ref2, ['ref']);

											var creatableRef = ref;
											return _this2.props.children(_extends({}, creatableProps, {
												ref: function ref(select) {
													creatableRef(select);
													asyncRef(select);
													_this2.select = select;
												}
											}));
										}
									);
								}
							);
						}
					}]);

					return AsyncCreatableSelect;
				}(_react2.default.Component);

				var defaultChildren = function defaultChildren(props) {
					return _react2.default.createElement(_Select2.default, props);
				};

				AsyncCreatableSelect.propTypes = {
					children: _propTypes2.default.func.isRequired // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
				};

				AsyncCreatableSelect.defaultProps = {
					children: defaultChildren
				};

				exports.default = AsyncCreatableSelect;

				/***/
			}),
/* 383 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.defaultFilterOptions = exports.defaultClearRenderer = exports.defaultArrowRenderer = exports.defaultMenuRenderer = exports.Option = exports.Value = exports.Creatable = exports.AsyncCreatable = exports.Async = undefined;

				var _Select = __webpack_require__(58);

				var _Select2 = _interopRequireDefault(_Select);

				var _Async = __webpack_require__(160);

				var _Async2 = _interopRequireDefault(_Async);

				var _AsyncCreatable = __webpack_require__(382);

				var _AsyncCreatable2 = _interopRequireDefault(_AsyncCreatable);

				var _Creatable = __webpack_require__(161);

				var _Creatable2 = _interopRequireDefault(_Creatable);

				var _Value = __webpack_require__(163);

				var _Value2 = _interopRequireDefault(_Value);

				var _Option = __webpack_require__(162);

				var _Option2 = _interopRequireDefault(_Option);

				var _defaultMenuRenderer = __webpack_require__(91);

				var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

				var _defaultArrowRenderer = __webpack_require__(164);

				var _defaultArrowRenderer2 = _interopRequireDefault(_defaultArrowRenderer);

				var _defaultClearRenderer = __webpack_require__(165);

				var _defaultClearRenderer2 = _interopRequireDefault(_defaultClearRenderer);

				var _defaultFilterOptions = __webpack_require__(90);

				var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

				_Select2.default.Async = _Async2.default;
				_Select2.default.AsyncCreatable = _AsyncCreatable2.default;
				_Select2.default.Creatable = _Creatable2.default;
				_Select2.default.Value = _Value2.default;
				_Select2.default.Option = _Option2.default;

				exports.default = _Select2.default;
				exports.Async = _Async2.default;
				exports.AsyncCreatable = _AsyncCreatable2.default;
				exports.Creatable = _Creatable2.default;
				exports.Value = _Value2.default;
				exports.Option = _Option2.default;
				exports.defaultMenuRenderer = _defaultMenuRenderer2.default;
				exports.defaultArrowRenderer = _defaultArrowRenderer2.default;
				exports.defaultClearRenderer = _defaultClearRenderer2.default;
				exports.defaultFilterOptions = _defaultFilterOptions2.default;

				/***/
			}),
/* 384 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				exports.default = function (event) {
					event.preventDefault();
					event.stopPropagation();
					if (event.target.tagName !== 'A' || !('href' in event.target)) {
						return;
					}
					if (event.target.target) {
						window.open(event.target.href, event.target.target);
					} else {
						window.location.href = event.target.href;
					}
				};

				/***/
			}),
/* 385 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				var trim = function trim(str) {
					return str.replace(/^\s+|\s+$/g, '');
				};

				exports.default = trim;

				/***/
			}),
/* 386 */
/***/ (function (module, exports, __webpack_require__) {

				'use strict';

				exports.__esModule = true;
				exports.ActionTypes = undefined;
				exports['default'] = createStore;

				var _isPlainObject = __webpack_require__(22);

				var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

				var _symbolObservable = __webpack_require__(395);

				var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

				function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

				/**
				 * These are private action types reserved by Redux.
				 * For any unknown actions, you must return the current state.
				 * If the current state is undefined, you must return the initial state.
				 * Do not reference these action types directly in your code.
				 */
				var ActionTypes = exports.ActionTypes = {
					INIT: '@@redux/INIT'

					/**
					 * Creates a Redux store that holds the state tree.
					 * The only way to change the data in the store is to call `dispatch()` on it.
					 *
					 * There should only be a single store in your app. To specify how different
					 * parts of the state tree respond to actions, you may combine several reducers
					 * into a single reducer function by using `combineReducers`.
					 *
					 * @param {Function} reducer A function that returns the next state tree, given
					 * the current state tree and the action to handle.
					 *
					 * @param {any} [preloadedState] The initial state. You may optionally specify it
					 * to hydrate the state from the server in universal apps, or to restore a
					 * previously serialized user session.
					 * If you use `combineReducers` to produce the root reducer function, this must be
					 * an object with the same shape as `combineReducers` keys.
					 *
					 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
					 * to enhance the store with third-party capabilities such as middleware,
					 * time travel, persistence, etc. The only store enhancer that ships with Redux
					 * is `applyMiddleware()`.
					 *
					 * @returns {Store} A Redux store that lets you read the state, dispatch actions
					 * and subscribe to changes.
					 */
				}; function createStore(reducer, preloadedState, enhancer) {
					var _ref2;

					if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
						enhancer = preloadedState;
						preloadedState = undefined;
					}

					if (typeof enhancer !== 'undefined') {
						if (typeof enhancer !== 'function') {
							throw new Error('Expected the enhancer to be a function.');
						}

						return enhancer(createStore)(reducer, preloadedState);
					}

					if (typeof reducer !== 'function') {
						throw new Error('Expected the reducer to be a function.');
					}

					var currentReducer = reducer;
					var currentState = preloadedState;
					var currentListeners = [];
					var nextListeners = currentListeners;
					var isDispatching = false;

					function ensureCanMutateNextListeners() {
						if (nextListeners === currentListeners) {
							nextListeners = currentListeners.slice();
						}
					}

					/**
					 * Reads the state tree managed by the store.
					 *
					 * @returns {any} The current state tree of your application.
					 */
					function getState() {
						return currentState;
					}

					/**
					 * Adds a change listener. It will be called any time an action is dispatched,
					 * and some part of the state tree may potentially have changed. You may then
					 * call `getState()` to read the current state tree inside the callback.
					 *
					 * You may call `dispatch()` from a change listener, with the following
					 * caveats:
					 *
					 * 1. The subscriptions are snapshotted just before every `dispatch()` call.
					 * If you subscribe or unsubscribe while the listeners are being invoked, this
					 * will not have any effect on the `dispatch()` that is currently in progress.
					 * However, the next `dispatch()` call, whether nested or not, will use a more
					 * recent snapshot of the subscription list.
					 *
					 * 2. The listener should not expect to see all state changes, as the state
					 * might have been updated multiple times during a nested `dispatch()` before
					 * the listener is called. It is, however, guaranteed that all subscribers
					 * registered before the `dispatch()` started will be called with the latest
					 * state by the time it exits.
					 *
					 * @param {Function} listener A callback to be invoked on every dispatch.
					 * @returns {Function} A function to remove this change listener.
					 */
					function subscribe(listener) {
						if (typeof listener !== 'function') {
							throw new Error('Expected listener to be a function.');
						}

						var isSubscribed = true;

						ensureCanMutateNextListeners();
						nextListeners.push(listener);

						return function unsubscribe() {
							if (!isSubscribed) {
								return;
							}

							isSubscribed = false;

							ensureCanMutateNextListeners();
							var index = nextListeners.indexOf(listener);
							nextListeners.splice(index, 1);
						};
					}

					/**
					 * Dispatches an action. It is the only way to trigger a state change.
					 *
					 * The `reducer` function, used to create the store, will be called with the
					 * current state tree and the given `action`. Its return value will
					 * be considered the **next** state of the tree, and the change listeners
					 * will be notified.
					 *
					 * The base implementation only supports plain object actions. If you want to
					 * dispatch a Promise, an Observable, a thunk, or something else, you need to
					 * wrap your store creating function into the corresponding middleware. For
					 * example, see the documentation for the `redux-thunk` package. Even the
					 * middleware will eventually dispatch plain object actions using this method.
					 *
					 * @param {Object} action A plain object representing “what changed”. It is
					 * a good idea to keep actions serializable so you can record and replay user
					 * sessions, or use the time travelling `redux-devtools`. An action must have
					 * a `type` property which may not be `undefined`. It is a good idea to use
					 * string constants for action types.
					 *
					 * @returns {Object} For convenience, the same action object you dispatched.
					 *
					 * Note that, if you use a custom middleware, it may wrap `dispatch()` to
					 * return something else (for example, a Promise you can await).
					 */
					function dispatch(action) {
						if (!(0, _isPlainObject2['default'])(action)) {
							throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
						}

						if (typeof action.type === 'undefined') {
							throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
						}

						if (isDispatching) {
							throw new Error('Reducers may not dispatch actions.');
						}

						try {
							isDispatching = true;
							currentState = currentReducer(currentState, action);
						} finally {
							isDispatching = false;
						}

						var listeners = currentListeners = nextListeners;
						for (var i = 0; i < listeners.length; i++) {
							var listener = listeners[i];
							listener();
						}

						return action;
					}

					/**
					 * Replaces the reducer currently used by the store to calculate the state.
					 *
					 * You might need this if your app implements code splitting and you want to
					 * load some of the reducers dynamically. You might also need this if you
					 * implement a hot reloading mechanism for Redux.
					 *
					 * @param {Function} nextReducer The reducer for the store to use instead.
					 * @returns {void}
					 */
					function replaceReducer(nextReducer) {
						if (typeof nextReducer !== 'function') {
							throw new Error('Expected the nextReducer to be a function.');
						}

						currentReducer = nextReducer;
						dispatch({ type: ActionTypes.INIT });
					}

					/**
					 * Interoperability point for observable/reactive libraries.
					 * @returns {observable} A minimal observable of state changes.
					 * For more information, see the observable proposal:
					 * https://github.com/tc39/proposal-observable
					 */
					function observable() {
						var _ref;

						var outerSubscribe = subscribe;
						return _ref = {
							/**
							 * The minimal observable subscription method.
							 * @param {Object} observer Any object that can be used as an observer.
							 * The observer object should have a `next` method.
							 * @returns {subscription} An object with an `unsubscribe` method that can
							 * be used to unsubscribe the observable from the store, and prevent further
							 * emission of values from the observable.
							 */
							subscribe: function subscribe(observer) {
								if (typeof observer !== 'object') {
									throw new TypeError('Expected the observer to be an object.');
								}

								function observeState() {
									if (observer.next) {
										observer.next(getState());
									}
								}

								observeState();
								var unsubscribe = outerSubscribe(observeState);
								return { unsubscribe: unsubscribe };
							}
						}, _ref[_symbolObservable2['default']] = function () {
							return this;
						}, _ref;
					}

					// When a store is created, an "INIT" action is dispatched so that every
					// reducer returns their initial state. This effectively populates
					// the initial state tree.
					dispatch({ type: ActionTypes.INIT });

					return _ref2 = {
						dispatch: dispatch,
						subscribe: subscribe,
						getState: getState,
						replaceReducer: replaceReducer
					}, _ref2[_symbolObservable2['default']] = observable, _ref2;
				}

				/***/
			}),
/* 387 */
/***/ (function (module, exports) {

				'use strict';

				exports.__esModule = true;
				exports.defaultMemoize = defaultMemoize;
				exports.createSelectorCreator = createSelectorCreator;
				exports.createStructuredSelector = createStructuredSelector;

				function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

				function defaultEqualityCheck(a, b) {
					return a === b;
				}

				function defaultMemoize(func) {
					var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

					var lastArgs = null;
					var lastResult = null;
					return function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						if (lastArgs === null || lastArgs.length !== args.length || !args.every(function (value, index) {
							return equalityCheck(value, lastArgs[index]);
						})) {
							lastResult = func.apply(undefined, args);
						}
						lastArgs = args;
						return lastResult;
					};
				}

				function getDependencies(funcs) {
					var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

					if (!dependencies.every(function (dep) {
						return typeof dep === 'function';
					})) {
						var dependencyTypes = dependencies.map(function (dep) {
							return typeof dep;
						}).join(', ');
						throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
					}

					return dependencies;
				}

				function createSelectorCreator(memoize) {
					for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
						memoizeOptions[_key2 - 1] = arguments[_key2];
					}

					return function () {
						for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
							funcs[_key3] = arguments[_key3];
						}

						var recomputations = 0;
						var resultFunc = funcs.pop();
						var dependencies = getDependencies(funcs);

						var memoizedResultFunc = memoize.apply(undefined, [function () {
							recomputations++;
							return resultFunc.apply(undefined, arguments);
						}].concat(memoizeOptions));

						var selector = function selector(state, props) {
							for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
								args[_key4 - 2] = arguments[_key4];
							}

							var params = dependencies.map(function (dependency) {
								return dependency.apply(undefined, [state, props].concat(args));
							});
							return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
						};

						selector.resultFunc = resultFunc;
						selector.recomputations = function () {
							return recomputations;
						};
						selector.resetRecomputations = function () {
							return recomputations = 0;
						};
						return selector;
					};
				}

				var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

				function createStructuredSelector(selectors) {
					var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

					if (typeof selectors !== 'object') {
						throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
					}
					var objectKeys = Object.keys(selectors);
					return selectorCreator(objectKeys.map(function (key) {
						return selectors[key];
					}), function () {
						for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
							values[_key5] = arguments[_key5];
						}

						return values.reduce(function (composition, value, index) {
							composition[objectKeys[index]] = value;
							return composition;
						}, {});
					});
				}

				/***/
			}),
/* 388 */
/***/ (function (module, exports, __webpack_require__) {

				(function webpackUniversalModuleDefinition(root, factory) {
					if (true)
						module.exports = factory(__webpack_require__(2), __webpack_require__(13));
					else if (typeof define === 'function' && define.amd)
						define(["react", "react-dom"], factory);
					else if (typeof exports === 'object')
						exports["ReactAutocomplete"] = factory(require("react"), require("react-dom"));
					else
						root["ReactAutocomplete"] = factory(root["React"], root["ReactDOM"]);
				})(this, function (__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
					return /******/ (function (modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if (installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
								/******/
							};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
							/******/
						}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
						/******/
					})
	/************************************************************************/
	/******/([
	/* 0 */
	/***/ (function (module, exports, __webpack_require__) {

								'use strict';

								var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

								function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

								function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

								function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

								var PropTypes = __webpack_require__(5);
								var React = __webpack_require__(7);
								var ReactDOM = __webpack_require__(8);
								var classnames = __webpack_require__(1);

								var Autocomplete = function (_React$Component) {
									_inherits(Autocomplete, _React$Component);

									function Autocomplete(props) {
										_classCallCheck(this, Autocomplete);

										var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

										_initialiseProps.call(_this);

										var searchTerm = props.searchTerm ? props.searchTerm : props.value ? props.value.title : '';

										_this.state = {
											results: [],
											showResults: false,
											showResultsInProgress: false,
											searchTerm: searchTerm,
											focusedValue: null
										};
										return _this;
									}

									_createClass(Autocomplete, [{
										key: 'render',
										value: function render() {
											var className = classnames(this.props.className, 'react-autocomplete-Autocomplete', this.state.showResults ? 'react-autocomplete-Autocomplete--resultsShown' : undefined);
											var style = {
												position: 'relative',
												outline: 'none'
											};
											return React.createElement(
												'div',
												{
													tabIndex: '1',
													className: className,
													onFocus: this.onFocus,
													onBlur: this.onBlur,
													style: style
												},
												React.createElement('input', {
													ref: 'search',
													className: 'react-autocomplete-Autocomplete__search',
													style: { width: '100%' },
													onClick: this.showAllResults,
													onChange: this.onQueryChange,
													onFocus: this.onSearchInputFocus,
													onBlur: this.onQueryBlur,
													onKeyDown: this.onQueryKeyDown,
													value: this.state.searchTerm
												}),
												React.createElement(Results, {
													className: 'react-autocomplete-Autocomplete__results',
													onSelect: this.onValueChange,
													onFocus: this.onValueFocus,
													results: this.state.results,
													focusedValue: this.state.focusedValue,
													show: this.state.showResults,
													renderer: this.props.resultRenderer,
													label: this.props.label,
													resultIdentifier: this.props.resultIdentifier
												})
											);
										}
									}, {
										key: 'componentWillReceiveProps',
										value: function componentWillReceiveProps(nextProps) {
											var searchTerm = nextProps.searchTerm ? nextProps.searchTerm : nextProps.value ? nextProps.value.title : '';
											this.setState({ searchTerm: searchTerm });
										}
									}, {
										key: 'componentWillMount',
										value: function componentWillMount() {
											this.blurTimer = null;
										}

										/**
											* Show results for a search term value.
											*
											* This method doesn't update search term value itself.
											*
											* @param {Search} searchTerm
											*/

									}]);

									return Autocomplete;
								}(React.Component);

								Autocomplete.displayName = 'Autocomplete';
								Autocomplete.propTypes = {
									options: PropTypes.any,
									search: PropTypes.func,
									resultRenderer: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
									value: PropTypes.object,
									onChange: PropTypes.func,
									onError: PropTypes.func,
									onFocus: PropTypes.func
								};
								Autocomplete.defaultProps = { search: searchArray };

								var _initialiseProps = function _initialiseProps() {
									var _this4 = this;

									this.getResultIdentifier = function (result) {
										if (_this4.props.resultIdentifier === undefined) {
											return result.id;
										} else {
											return result[_this4.props.resultIdentifier];
										}
									};

									this.showResults = function (searchTerm) {
										_this4.setState({ showResultsInProgress: true });
										_this4.props.search(_this4.props.options, searchTerm.trim(), _this4.onSearchComplete);
									};

									this.showAllResults = function () {
										if (!_this4.state.showResultsInProgress && !_this4.state.showResults) {
											_this4.showResults('');
										}
									};

									this.onValueChange = function (value) {
										var state = {
											value: value,
											showResults: false
										};

										if (value) {
											state.searchTerm = value.title;
										}

										_this4.setState(state);

										if (_this4.props.onChange) {
											_this4.props.onChange(value);
										}
									};

									this.onSearchComplete = function (err, results) {
										if (err) {
											if (_this4.props.onError) {
												_this4.props.onError(err);
											} else {
												throw err;
											}
										}

										_this4.setState({
											showResultsInProgress: false,
											showResults: true,
											results: results
										});
									};

									this.onValueFocus = function (value) {
										_this4.setState({ focusedValue: value });
									};

									this.onQueryChange = function (e) {
										var searchTerm = e.target.value;
										_this4.setState({
											searchTerm: searchTerm,
											focusedValue: null
										});
										_this4.showResults(searchTerm);
									};

									this.onFocus = function () {
										if (_this4.blurTimer) {
											clearTimeout(_this4.blurTimer);
											_this4.blurTimer = null;
										}
										_this4.refs.search.focus();
									};

									this.onSearchInputFocus = function () {
										if (_this4.props.onFocus) {
											_this4.props.onFocus();
										}

										_this4.showAllResults();
									};

									this.onBlur = function () {
										// wrap in setTimeout so we can catch a click on results
										_this4.blurTimer = setTimeout(function () {
											_this4.setState({ showResults: false });
										}, 100);
									};

									this.onQueryKeyDown = function (e) {

										if (e.key === 'Enter') {
											e.preventDefault();
											if (_this4.state.focusedValue) {
												_this4.onValueChange(_this4.state.focusedValue);
											}
										} else if (e.key === 'ArrowUp' && _this4.state.showResults) {
											e.preventDefault();
											var prevIdx = Math.max(_this4.focusedValueIndex() - 1, 0);
											_this4.setState({
												focusedValue: _this4.state.results[prevIdx]
											});
										} else if (e.key === 'ArrowDown') {
											e.preventDefault();
											if (_this4.state.showResults) {
												var nextIdx = Math.min(_this4.focusedValueIndex() + (_this4.state.showResults ? 1 : 0), _this4.state.results.length - 1);
												_this4.setState({
													showResults: true,
													focusedValue: _this4.state.results[nextIdx]
												});
											} else {
												_this4.showAllResults();
											}
										}
									};

									this.focusedValueIndex = function () {
										if (!_this4.state.focusedValue) {
											return -1;
										}
										for (var i = 0, len = _this4.state.results.length; i < len; i++) {
											if (_this4.getResultIdentifier(_this4.state.results[i]) === _this4.getResultIdentifier(_this4.state.focusedValue)) {
												return i;
											}
										}
										return -1;
									};
								};

								var Results = function (_React$Component2) {
									_inherits(Results, _React$Component2);

									function Results() {
										var _ref;

										var _temp, _this2, _ret;

										_classCallCheck(this, Results);

										for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
											args[_key] = arguments[_key];
										}

										return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Results.__proto__ || Object.getPrototypeOf(Results)).call.apply(_ref, [this].concat(args))), _this2), _this2.getResultIdentifier = function (result) {
											if (_this2.props.resultIdentifier === undefined) {
												if (!result.id) {
													throw Error("id property not found on result. You must specify a resultIdentifier and pass as props to autocomplete component");
												}
												return result.id;
											} else {
												return result[_this2.props.resultIdentifier];
											}
										}, _this2.renderResult = function (result) {
											var focused = _this2.props.focusedValue && _this2.getResultIdentifier(_this2.props.focusedValue) === _this2.getResultIdentifier(result);
											var Renderer = _this2.props.renderer || Result;
											return React.createElement(Renderer, {
												ref: focused ? "focused" : undefined,
												key: _this2.getResultIdentifier(result),
												result: result,
												focused: focused,
												onMouseEnter: _this2.onMouseEnterResult,
												onClick: _this2.props.onSelect,
												label: _this2.props.label
											});
										}, _this2.scrollToFocused = function () {
											var focused = _this2.refs && _this2.refs.focused;
											if (focused) {
												var containerNode = ReactDOM.findDOMNode(_this2);
												var scroll = containerNode.scrollTop;
												var height = containerNode.offsetHeight;

												var node = ReactDOM.findDOMNode(focused);
												var top = node.offsetTop;
												var bottom = top + node.offsetHeight;

												// we update ignoreFocus to true if we change the scroll position so
												// the mouseover event triggered because of that won't have an
												// effect
												if (top < scroll) {
													_this2.ignoreFocus = true;
													containerNode.scrollTop = top;
												} else if (bottom - scroll > height) {
													_this2.ignoreFocus = true;
													containerNode.scrollTop = bottom - height;
												}
											}
										}, _this2.onMouseEnterResult = function (e, result) {
											// check if we need to prevent the next onFocus event because it was
											// probably caused by a mouseover due to scroll position change
											if (_this2.ignoreFocus) {
												_this2.ignoreFocus = false;
											} else {
												// we need to make sure focused node is visible
												// for some reason mouse events fire on visible nodes due to
												// box-shadow
												var containerNode = ReactDOM.findDOMNode(_this2);
												var scroll = containerNode.scrollTop;
												var height = containerNode.offsetHeight;

												var node = e.target;
												var top = node.offsetTop;
												var bottom = top + node.offsetHeight;

												if (bottom > scroll && top < scroll + height) {
													_this2.props.onFocus(result);
												}
											}
										}, _temp), _possibleConstructorReturn(_this2, _ret);
									}

									_createClass(Results, [{
										key: 'render',
										value: function render() {
											var style = {
												display: this.props.show ? 'block' : 'none',
												position: 'absolute',
												listStyleType: 'none'
											};
											var className = this.props.className;


											return React.createElement(
												'ul',
												{ style: style, className: className + " react-autocomplete-Results" },
												this.props.results.map(this.renderResult)
											);
										}
									}, {
										key: 'componentDidUpdate',
										value: function componentDidUpdate() {
											this.scrollToFocused();
										}
									}, {
										key: 'componentDidMount',
										value: function componentDidMount() {
											this.scrollToFocused();
										}
									}, {
										key: 'componentWillMount',
										value: function componentWillMount() {
											this.ignoreFocus = false;
										}
									}]);

									return Results;
								}(React.Component);

								var Result = function (_React$Component3) {
									_inherits(Result, _React$Component3);

									function Result() {
										var _ref2;

										var _temp2, _this3, _ret2;

										_classCallCheck(this, Result);

										for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
											args[_key2] = arguments[_key2];
										}

										return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = Result.__proto__ || Object.getPrototypeOf(Result)).call.apply(_ref2, [this].concat(args))), _this3), _this3.getLabel = function (result) {
											if (typeof _this3.props.label === 'function') {
												return _this3.props.label(result);
											} else if (typeof _this3.props.label === 'string') {
												return result[_this3.props.label];
											}
										}, _this3.onClick = function () {
											_this3.props.onClick(_this3.props.result);
										}, _this3.onMouseEnter = function (e) {
											if (_this3.props.onMouseEnter) {
												_this3.props.onMouseEnter(e, _this3.props.result);
											}
										}, _temp2), _possibleConstructorReturn(_this3, _ret2);
									}

									_createClass(Result, [{
										key: 'render',
										value: function render() {
											var className = classnames({
												'react-autocomplete-Result': true,
												'react-autocomplete-Result--active': this.props.focused
											});

											return React.createElement(
												'li',
												{
													style: { listStyleType: 'none' },
													className: className,
													onClick: this.onClick,
													onMouseEnter: this.onMouseEnter
												},
												React.createElement(
													'a',
													null,
													this.getLabel(this.props.result)
												)
											);
										}
									}, {
										key: 'shouldComponentUpdate',
										value: function shouldComponentUpdate(nextProps) {
											return nextProps.result.id !== this.props.result.id || nextProps.focused !== this.props.focused;
										}
									}]);

									return Result;
								}(React.Component);

								/**
								* Search options using specified search term treating options as an array
								* of candidates.
								*
								* @param {Array.<Object>} options
								* @param {String} searchTerm
								* @param {Callback} cb
								*/


								Result.defaultProps = {
									label: function label(result) {
										return result.title;
									}
								};
								function searchArray(options, searchTerm, cb) {
									if (!options) {
										return cb(null, []);
									}

									searchTerm = new RegExp(searchTerm, 'i');

									var results = [];

									for (var i = 0, len = options.length; i < len; i++) {
										if (searchTerm.exec(options[i].title)) {
											results.push(options[i]);
										}
									}

									cb(null, results);
								}

								module.exports = Autocomplete;

								/***/
							}),
	/* 1 */
	/***/ (function (module, exports, __webpack_require__) {

								var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2015 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/

								function classNames() {
									var classes = '';
									var arg;

									for (var i = 0; i < arguments.length; i++) {
										arg = arguments[i];
										if (!arg) {
											continue;
										}

										if ('string' === typeof arg || 'number' === typeof arg) {
											classes += ' ' + arg;
										} else if (Object.prototype.toString.call(arg) === '[object Array]') {
											classes += ' ' + classNames.apply(null, arg);
										} else if ('object' === typeof arg) {
											for (var key in arg) {
												if (!arg.hasOwnProperty(key) || !arg[key]) {
													continue;
												}
												classes += ' ' + key;
											}
										}
									}
									return classes.substr(1);
								}

								// safely export classNames for node / browserify
								if (typeof module !== 'undefined' && module.exports) {
									module.exports = classNames;
								}

								// safely export classNames for RequireJS
								if (true) {
									!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
										return classNames;
									}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
								}


								/***/
							}),
	/* 2 */
	/***/ (function (module, exports) {

								"use strict";

								/**
								 * Copyright (c) 2013-present, Facebook, Inc.
								 *
								 * This source code is licensed under the MIT license found in the
								 * LICENSE file in the root directory of this source tree.
								 *
								 * 
								 */

								function makeEmptyFunction(arg) {
									return function () {
										return arg;
									};
								}

								/**
								 * This function accepts and discards inputs; it has no side effects. This is
								 * primarily useful idiomatically for overridable function endpoints which
								 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
								 */
								var emptyFunction = function emptyFunction() { };

								emptyFunction.thatReturns = makeEmptyFunction;
								emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
								emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
								emptyFunction.thatReturnsNull = makeEmptyFunction(null);
								emptyFunction.thatReturnsThis = function () {
									return this;
								};
								emptyFunction.thatReturnsArgument = function (arg) {
									return arg;
								};

								module.exports = emptyFunction;

								/***/
							}),
	/* 3 */
	/***/ (function (module, exports, __webpack_require__) {

								/**
								 * Copyright (c) 2013-present, Facebook, Inc.
								 *
								 * This source code is licensed under the MIT license found in the
								 * LICENSE file in the root directory of this source tree.
								 *
								 */

								'use strict';

								/**
								 * Use invariant() to assert state which your program assumes to be true.
								 *
								 * Provide sprintf-style format (only %s is supported) and arguments
								 * to provide information about what broke and what you were
								 * expecting.
								 *
								 * The invariant message will be stripped in production, but the invariant
								 * will remain to ensure logic does not differ in production.
								 */

								var validateFormat = function validateFormat(format) { };

								if (false) {
									validateFormat = function validateFormat(format) {
										if (format === undefined) {
											throw new Error('invariant requires an error message argument');
										}
									};
								}

								function invariant(condition, format, a, b, c, d, e, f) {
									validateFormat(format);

									if (!condition) {
										var error;
										if (format === undefined) {
											error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
										} else {
											var args = [a, b, c, d, e, f];
											var argIndex = 0;
											error = new Error(format.replace(/%s/g, function () {
												return args[argIndex++];
											}));
											error.name = 'Invariant Violation';
										}

										error.framesToPop = 1; // we don't care about invariant's own frame
										throw error;
									}
								}

								module.exports = invariant;

								/***/
							}),
	/* 4 */
	/***/ (function (module, exports, __webpack_require__) {

								/**
								 * Copyright (c) 2013-present, Facebook, Inc.
								 *
								 * This source code is licensed under the MIT license found in the
								 * LICENSE file in the root directory of this source tree.
								 */

								'use strict';

								var emptyFunction = __webpack_require__(2);
								var invariant = __webpack_require__(3);
								var ReactPropTypesSecret = __webpack_require__(6);

								module.exports = function () {
									function shim(props, propName, componentName, location, propFullName, secret) {
										if (secret === ReactPropTypesSecret) {
											// It is still safe when called from React.
											return;
										}
										invariant(
											false,
											'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
											'Use PropTypes.checkPropTypes() to call them. ' +
											'Read more at http://fb.me/use-check-prop-types'
										);
									};
									shim.isRequired = shim;
									function getShim() {
										return shim;
									};
									// Important!
									// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
									var ReactPropTypes = {
										array: shim,
										bool: shim,
										func: shim,
										number: shim,
										object: shim,
										string: shim,
										symbol: shim,

										any: shim,
										arrayOf: getShim,
										element: shim,
										instanceOf: getShim,
										node: shim,
										objectOf: getShim,
										oneOf: getShim,
										oneOfType: getShim,
										shape: getShim,
										exact: getShim
									};

									ReactPropTypes.checkPropTypes = emptyFunction;
									ReactPropTypes.PropTypes = ReactPropTypes;

									return ReactPropTypes;
								};


								/***/
							}),
	/* 5 */
	/***/ (function (module, exports, __webpack_require__) {

								/**
								 * Copyright (c) 2013-present, Facebook, Inc.
								 *
								 * This source code is licensed under the MIT license found in the
								 * LICENSE file in the root directory of this source tree.
								 */

								if (false) {
									var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
										Symbol.for &&
										Symbol.for('react.element')) ||
										0xeac7;

									var isValidElement = function (object) {
										return typeof object === 'object' &&
											object !== null &&
											object.$$typeof === REACT_ELEMENT_TYPE;
									};

									// By explicitly using `prop-types` you are opting into new development behavior.
									// http://fb.me/prop-types-in-prod
									var throwOnDirectAccess = true;
									module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
								} else {
									// By explicitly using `prop-types` you are opting into new production behavior.
									// http://fb.me/prop-types-in-prod
									module.exports = __webpack_require__(4)();
								}


								/***/
							}),
	/* 6 */
	/***/ (function (module, exports) {

								/**
								 * Copyright (c) 2013-present, Facebook, Inc.
								 *
								 * This source code is licensed under the MIT license found in the
								 * LICENSE file in the root directory of this source tree.
								 */

								'use strict';

								var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

								module.exports = ReactPropTypesSecret;


								/***/
							}),
	/* 7 */
	/***/ (function (module, exports) {

								module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

								/***/
							}),
	/* 8 */
	/***/ (function (module, exports) {

								module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

								/***/
							})
	/******/])
				});
				;

				/***/
			}),
/* 389 */,
/* 390 */
/***/ (function (module, exports, __webpack_require__) {

				// style-loader: Adds some css to the DOM by adding a <style> tag

				// load the styles
				var content = __webpack_require__(281);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(9)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!../../css-loader/index.js!./react-select.css", function () {
							var newContent = require("!!../../css-loader/index.js!./react-select.css");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () { update(); });
				}

				/***/
			}),
/* 391 */,
/* 392 */
/***/ (function (module, exports, __webpack_require__) {

				// style-loader: Adds some css to the DOM by adding a <style> tag

				// load the styles
				var content = __webpack_require__(284);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(9)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!../node_modules/css-loader/index.js!./react-data-grid-drop-target.css", function () {
							var newContent = require("!!../node_modules/css-loader/index.js!./react-data-grid-drop-target.css");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () { update(); });
				}

				/***/
			}),
/* 393 */
/***/ (function (module, exports, __webpack_require__) {

				// style-loader: Adds some css to the DOM by adding a <style> tag

				// load the styles
				var content = __webpack_require__(286);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(9)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!../node_modules/css-loader/index.js!./react-data-grid-image.css", function () {
							var newContent = require("!!../node_modules/css-loader/index.js!./react-data-grid-image.css");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () { update(); });
				}

				/***/
			}),
/* 394 */
/***/ (function (module, exports, __webpack_require__) {

				// style-loader: Adds some css to the DOM by adding a <style> tag

				// load the styles
				var content = __webpack_require__(288);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(9)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!../node_modules/css-loader/index.js!./ron-react-autocomplete.css", function () {
							var newContent = require("!!../node_modules/css-loader/index.js!./ron-react-autocomplete.css");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () { update(); });
				}

				/***/
			}),
/* 395 */
/***/ (function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (module) {
					'use strict';

					Object.defineProperty(exports, "__esModule", {
						value: true
					});

					var _ponyfill = __webpack_require__(396);

					var _ponyfill2 = _interopRequireDefault(_ponyfill);

					function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

					var root; /* global window */


					if (typeof self !== 'undefined') {
						root = self;
					} else if (typeof window !== 'undefined') {
						root = window;
					} else if (typeof (window) !== 'undefined') {
						root = (window);
					} else if (true) {
						root = module;
					} else {
						root = Function('return this')();
					}

					var result = (0, _ponyfill2['default'])(root);
					exports['default'] = result;
					/* WEBPACK VAR INJECTION */
				}.call(exports, __webpack_require__(1)(module)))

				/***/
			}),
/* 396 */
/***/ (function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports['default'] = symbolObservablePonyfill;
				function symbolObservablePonyfill(root) {
					var result;
					var _Symbol = root.Symbol;

					if (typeof _Symbol === 'function') {
						if (_Symbol.observable) {
							result = _Symbol.observable;
						} else {
							result = _Symbol('observable');
							_Symbol.observable = result;
						}
					} else {
						result = '@@observable';
					}

					return result;
				};

				/***/
			}),
/* 397 */
/***/ (function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function (module) {//     Underscore.js 1.9.1
					//     http://underscorejs.org
					//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
					//     Underscore may be freely distributed under the MIT license.

					(function () {

						// Baseline setup
						// --------------

						// Establish the root object, `window` (`self`) in the browser, `global`
						// on the server, or `this` in some virtual machines. We use `self`
						// instead of `window` for `WebWorker` support.
						var root = typeof self == 'object' && self.self === self && self ||
							typeof (window) == 'object' && (window).global === (window) && (window) ||
							this ||
							{};

						// Save the previous value of the `_` variable.
						var previousUnderscore = root._;

						// Save bytes in the minified (but not gzipped) version:
						var ArrayProto = Array.prototype, ObjProto = Object.prototype;
						var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

						// Create quick reference variables for speed access to core prototypes.
						var push = ArrayProto.push,
							slice = ArrayProto.slice,
							toString = ObjProto.toString,
							hasOwnProperty = ObjProto.hasOwnProperty;

						// All **ECMAScript 5** native function implementations that we hope to use
						// are declared here.
						var nativeIsArray = Array.isArray,
							nativeKeys = Object.keys,
							nativeCreate = Object.create;

						// Naked function reference for surrogate-prototype-swapping.
						var Ctor = function () { };

						// Create a safe reference to the Underscore object for use below.
						var _ = function (obj) {
							if (obj instanceof _) return obj;
							if (!(this instanceof _)) return new _(obj);
							this._wrapped = obj;
						};

						// Export the Underscore object for **Node.js**, with
						// backwards-compatibility for their old module API. If we're in
						// the browser, add `_` as a global object.
						// (`nodeType` is checked to ensure that `module`
						// and `exports` are not HTML elements.)
						if (typeof exports != 'undefined' && !exports.nodeType) {
							if (typeof module != 'undefined' && !module.nodeType && module.exports) {
								exports = module.exports = _;
							}
							exports._ = _;
						} else {
							root._ = _;
						}

						// Current version.
						_.VERSION = '1.9.1';

						// Internal function that returns an efficient (for current engines) version
						// of the passed-in callback, to be repeatedly applied in other Underscore
						// functions.
						var optimizeCb = function (func, context, argCount) {
							if (context === void 0) return func;
							switch (argCount == null ? 3 : argCount) {
								case 1: return function (value) {
									return func.call(context, value);
								};
								// The 2-argument case is omitted because we’re not using it.
								case 3: return function (value, index, collection) {
									return func.call(context, value, index, collection);
								};
								case 4: return function (accumulator, value, index, collection) {
									return func.call(context, accumulator, value, index, collection);
								};
							}
							return function () {
								return func.apply(context, arguments);
							};
						};

						var builtinIteratee;

						// An internal function to generate callbacks that can be applied to each
						// element in a collection, returning the desired result — either `identity`,
						// an arbitrary callback, a property matcher, or a property accessor.
						var cb = function (value, context, argCount) {
							if (_.iteratee !== builtinIteratee) return _.iteratee(value, context);
							if (value == null) return _.identity;
							if (_.isFunction(value)) return optimizeCb(value, context, argCount);
							if (_.isObject(value) && !_.isArray(value)) return _.matcher(value);
							return _.property(value);
						};

						// External wrapper for our callback generator. Users may customize
						// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
						// This abstraction hides the internal-only argCount argument.
						_.iteratee = builtinIteratee = function (value, context) {
							return cb(value, context, Infinity);
						};

						// Some functions take a variable number of arguments, or a few expected
						// arguments at the beginning and then a variable number of values to operate
						// on. This helper accumulates all remaining arguments past the function’s
						// argument length (or an explicit `startIndex`), into an array that becomes
						// the last argument. Similar to ES6’s "rest parameter".
						var restArguments = function (func, startIndex) {
							startIndex = startIndex == null ? func.length - 1 : +startIndex;
							return function () {
								var length = Math.max(arguments.length - startIndex, 0),
									rest = Array(length),
									index = 0;
								for (; index < length; index++) {
									rest[index] = arguments[index + startIndex];
								}
								switch (startIndex) {
									case 0: return func.call(this, rest);
									case 1: return func.call(this, arguments[0], rest);
									case 2: return func.call(this, arguments[0], arguments[1], rest);
								}
								var args = Array(startIndex + 1);
								for (index = 0; index < startIndex; index++) {
									args[index] = arguments[index];
								}
								args[startIndex] = rest;
								return func.apply(this, args);
							};
						};

						// An internal function for creating a new object that inherits from another.
						var baseCreate = function (prototype) {
							if (!_.isObject(prototype)) return {};
							if (nativeCreate) return nativeCreate(prototype);
							Ctor.prototype = prototype;
							var result = new Ctor;
							Ctor.prototype = null;
							return result;
						};

						var shallowProperty = function (key) {
							return function (obj) {
								return obj == null ? void 0 : obj[key];
							};
						};

						var has = function (obj, path) {
							return obj != null && hasOwnProperty.call(obj, path);
						}

						var deepGet = function (obj, path) {
							var length = path.length;
							for (var i = 0; i < length; i++) {
								if (obj == null) return void 0;
								obj = obj[path[i]];
							}
							return length ? obj : void 0;
						};

						// Helper for collection methods to determine whether a collection
						// should be iterated as an array or as an object.
						// Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
						// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
						var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
						var getLength = shallowProperty('length');
						var isArrayLike = function (collection) {
							var length = getLength(collection);
							return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
						};

						// Collection Functions
						// --------------------

						// The cornerstone, an `each` implementation, aka `forEach`.
						// Handles raw objects in addition to array-likes. Treats all
						// sparse array-likes as if they were dense.
						_.each = _.forEach = function (obj, iteratee, context) {
							iteratee = optimizeCb(iteratee, context);
							var i, length;
							if (isArrayLike(obj)) {
								for (i = 0, length = obj.length; i < length; i++) {
									iteratee(obj[i], i, obj);
								}
							} else {
								var keys = _.keys(obj);
								for (i = 0, length = keys.length; i < length; i++) {
									iteratee(obj[keys[i]], keys[i], obj);
								}
							}
							return obj;
						};

						// Return the results of applying the iteratee to each element.
						_.map = _.collect = function (obj, iteratee, context) {
							iteratee = cb(iteratee, context);
							var keys = !isArrayLike(obj) && _.keys(obj),
								length = (keys || obj).length,
								results = Array(length);
							for (var index = 0; index < length; index++) {
								var currentKey = keys ? keys[index] : index;
								results[index] = iteratee(obj[currentKey], currentKey, obj);
							}
							return results;
						};

						// Create a reducing function iterating left or right.
						var createReduce = function (dir) {
							// Wrap code that reassigns argument variables in a separate function than
							// the one that accesses `arguments.length` to avoid a perf hit. (#1991)
							var reducer = function (obj, iteratee, memo, initial) {
								var keys = !isArrayLike(obj) && _.keys(obj),
									length = (keys || obj).length,
									index = dir > 0 ? 0 : length - 1;
								if (!initial) {
									memo = obj[keys ? keys[index] : index];
									index += dir;
								}
								for (; index >= 0 && index < length; index += dir) {
									var currentKey = keys ? keys[index] : index;
									memo = iteratee(memo, obj[currentKey], currentKey, obj);
								}
								return memo;
							};

							return function (obj, iteratee, memo, context) {
								var initial = arguments.length >= 3;
								return reducer(obj, optimizeCb(iteratee, context, 4), memo, initial);
							};
						};

						// **Reduce** builds up a single result from a list of values, aka `inject`,
						// or `foldl`.
						_.reduce = _.foldl = _.inject = createReduce(1);

						// The right-associative version of reduce, also known as `foldr`.
						_.reduceRight = _.foldr = createReduce(-1);

						// Return the first value which passes a truth test. Aliased as `detect`.
						_.find = _.detect = function (obj, predicate, context) {
							var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
							var key = keyFinder(obj, predicate, context);
							if (key !== void 0 && key !== -1) return obj[key];
						};

						// Return all the elements that pass a truth test.
						// Aliased as `select`.
						_.filter = _.select = function (obj, predicate, context) {
							var results = [];
							predicate = cb(predicate, context);
							_.each(obj, function (value, index, list) {
								if (predicate(value, index, list)) results.push(value);
							});
							return results;
						};

						// Return all the elements for which a truth test fails.
						_.reject = function (obj, predicate, context) {
							return _.filter(obj, _.negate(cb(predicate)), context);
						};

						// Determine whether all of the elements match a truth test.
						// Aliased as `all`.
						_.every = _.all = function (obj, predicate, context) {
							predicate = cb(predicate, context);
							var keys = !isArrayLike(obj) && _.keys(obj),
								length = (keys || obj).length;
							for (var index = 0; index < length; index++) {
								var currentKey = keys ? keys[index] : index;
								if (!predicate(obj[currentKey], currentKey, obj)) return false;
							}
							return true;
						};

						// Determine if at least one element in the object matches a truth test.
						// Aliased as `any`.
						_.some = _.any = function (obj, predicate, context) {
							predicate = cb(predicate, context);
							var keys = !isArrayLike(obj) && _.keys(obj),
								length = (keys || obj).length;
							for (var index = 0; index < length; index++) {
								var currentKey = keys ? keys[index] : index;
								if (predicate(obj[currentKey], currentKey, obj)) return true;
							}
							return false;
						};

						// Determine if the array or object contains a given item (using `===`).
						// Aliased as `includes` and `include`.
						_.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
							if (!isArrayLike(obj)) obj = _.values(obj);
							if (typeof fromIndex != 'number' || guard) fromIndex = 0;
							return _.indexOf(obj, item, fromIndex) >= 0;
						};

						// Invoke a method (with arguments) on every item in a collection.
						_.invoke = restArguments(function (obj, path, args) {
							var contextPath, func;
							if (_.isFunction(path)) {
								func = path;
							} else if (_.isArray(path)) {
								contextPath = path.slice(0, -1);
								path = path[path.length - 1];
							}
							return _.map(obj, function (context) {
								var method = func;
								if (!method) {
									if (contextPath && contextPath.length) {
										context = deepGet(context, contextPath);
									}
									if (context == null) return void 0;
									method = context[path];
								}
								return method == null ? method : method.apply(context, args);
							});
						});

						// Convenience version of a common use case of `map`: fetching a property.
						_.pluck = function (obj, key) {
							return _.map(obj, _.property(key));
						};

						// Convenience version of a common use case of `filter`: selecting only objects
						// containing specific `key:value` pairs.
						_.where = function (obj, attrs) {
							return _.filter(obj, _.matcher(attrs));
						};

						// Convenience version of a common use case of `find`: getting the first object
						// containing specific `key:value` pairs.
						_.findWhere = function (obj, attrs) {
							return _.find(obj, _.matcher(attrs));
						};

						// Return the maximum element (or element-based computation).
						_.max = function (obj, iteratee, context) {
							var result = -Infinity, lastComputed = -Infinity,
								value, computed;
							if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
								obj = isArrayLike(obj) ? obj : _.values(obj);
								for (var i = 0, length = obj.length; i < length; i++) {
									value = obj[i];
									if (value != null && value > result) {
										result = value;
									}
								}
							} else {
								iteratee = cb(iteratee, context);
								_.each(obj, function (v, index, list) {
									computed = iteratee(v, index, list);
									if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
										result = v;
										lastComputed = computed;
									}
								});
							}
							return result;
						};

						// Return the minimum element (or element-based computation).
						_.min = function (obj, iteratee, context) {
							var result = Infinity, lastComputed = Infinity,
								value, computed;
							if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
								obj = isArrayLike(obj) ? obj : _.values(obj);
								for (var i = 0, length = obj.length; i < length; i++) {
									value = obj[i];
									if (value != null && value < result) {
										result = value;
									}
								}
							} else {
								iteratee = cb(iteratee, context);
								_.each(obj, function (v, index, list) {
									computed = iteratee(v, index, list);
									if (computed < lastComputed || computed === Infinity && result === Infinity) {
										result = v;
										lastComputed = computed;
									}
								});
							}
							return result;
						};

						// Shuffle a collection.
						_.shuffle = function (obj) {
							return _.sample(obj, Infinity);
						};

						// Sample **n** random values from a collection using the modern version of the
						// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
						// If **n** is not specified, returns a single random element.
						// The internal `guard` argument allows it to work with `map`.
						_.sample = function (obj, n, guard) {
							if (n == null || guard) {
								if (!isArrayLike(obj)) obj = _.values(obj);
								return obj[_.random(obj.length - 1)];
							}
							var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
							var length = getLength(sample);
							n = Math.max(Math.min(n, length), 0);
							var last = length - 1;
							for (var index = 0; index < n; index++) {
								var rand = _.random(index, last);
								var temp = sample[index];
								sample[index] = sample[rand];
								sample[rand] = temp;
							}
							return sample.slice(0, n);
						};

						// Sort the object's values by a criterion produced by an iteratee.
						_.sortBy = function (obj, iteratee, context) {
							var index = 0;
							iteratee = cb(iteratee, context);
							return _.pluck(_.map(obj, function (value, key, list) {
								return {
									value: value,
									index: index++,
									criteria: iteratee(value, key, list)
								};
							}).sort(function (left, right) {
								var a = left.criteria;
								var b = right.criteria;
								if (a !== b) {
									if (a > b || a === void 0) return 1;
									if (a < b || b === void 0) return -1;
								}
								return left.index - right.index;
							}), 'value');
						};

						// An internal function used for aggregate "group by" operations.
						var group = function (behavior, partition) {
							return function (obj, iteratee, context) {
								var result = partition ? [[], []] : {};
								iteratee = cb(iteratee, context);
								_.each(obj, function (value, index) {
									var key = iteratee(value, index, obj);
									behavior(result, value, key);
								});
								return result;
							};
						};

						// Groups the object's values by a criterion. Pass either a string attribute
						// to group by, or a function that returns the criterion.
						_.groupBy = group(function (result, value, key) {
							if (has(result, key)) result[key].push(value); else result[key] = [value];
						});

						// Indexes the object's values by a criterion, similar to `groupBy`, but for
						// when you know that your index values will be unique.
						_.indexBy = group(function (result, value, key) {
							result[key] = value;
						});

						// Counts instances of an object that group by a certain criterion. Pass
						// either a string attribute to count by, or a function that returns the
						// criterion.
						_.countBy = group(function (result, value, key) {
							if (has(result, key)) result[key]++; else result[key] = 1;
						});

						var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
						// Safely create a real, live array from anything iterable.
						_.toArray = function (obj) {
							if (!obj) return [];
							if (_.isArray(obj)) return slice.call(obj);
							if (_.isString(obj)) {
								// Keep surrogate pair characters together
								return obj.match(reStrSymbol);
							}
							if (isArrayLike(obj)) return _.map(obj, _.identity);
							return _.values(obj);
						};

						// Return the number of elements in an object.
						_.size = function (obj) {
							if (obj == null) return 0;
							return isArrayLike(obj) ? obj.length : _.keys(obj).length;
						};

						// Split a collection into two arrays: one whose elements all satisfy the given
						// predicate, and one whose elements all do not satisfy the predicate.
						_.partition = group(function (result, value, pass) {
							result[pass ? 0 : 1].push(value);
						}, true);

						// Array Functions
						// ---------------

						// Get the first element of an array. Passing **n** will return the first N
						// values in the array. Aliased as `head` and `take`. The **guard** check
						// allows it to work with `_.map`.
						_.first = _.head = _.take = function (array, n, guard) {
							if (array == null || array.length < 1) return n == null ? void 0 : [];
							if (n == null || guard) return array[0];
							return _.initial(array, array.length - n);
						};

						// Returns everything but the last entry of the array. Especially useful on
						// the arguments object. Passing **n** will return all the values in
						// the array, excluding the last N.
						_.initial = function (array, n, guard) {
							return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
						};

						// Get the last element of an array. Passing **n** will return the last N
						// values in the array.
						_.last = function (array, n, guard) {
							if (array == null || array.length < 1) return n == null ? void 0 : [];
							if (n == null || guard) return array[array.length - 1];
							return _.rest(array, Math.max(0, array.length - n));
						};

						// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
						// Especially useful on the arguments object. Passing an **n** will return
						// the rest N values in the array.
						_.rest = _.tail = _.drop = function (array, n, guard) {
							return slice.call(array, n == null || guard ? 1 : n);
						};

						// Trim out all falsy values from an array.
						_.compact = function (array) {
							return _.filter(array, Boolean);
						};

						// Internal implementation of a recursive `flatten` function.
						var flatten = function (input, shallow, strict, output) {
							output = output || [];
							var idx = output.length;
							for (var i = 0, length = getLength(input); i < length; i++) {
								var value = input[i];
								if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
									// Flatten current level of array or arguments object.
									if (shallow) {
										var j = 0, len = value.length;
										while (j < len) output[idx++] = value[j++];
									} else {
										flatten(value, shallow, strict, output);
										idx = output.length;
									}
								} else if (!strict) {
									output[idx++] = value;
								}
							}
							return output;
						};

						// Flatten out an array, either recursively (by default), or just one level.
						_.flatten = function (array, shallow) {
							return flatten(array, shallow, false);
						};

						// Return a version of the array that does not contain the specified value(s).
						_.without = restArguments(function (array, otherArrays) {
							return _.difference(array, otherArrays);
						});

						// Produce a duplicate-free version of the array. If the array has already
						// been sorted, you have the option of using a faster algorithm.
						// The faster algorithm will not work with an iteratee if the iteratee
						// is not a one-to-one function, so providing an iteratee will disable
						// the faster algorithm.
						// Aliased as `unique`.
						_.uniq = _.unique = function (array, isSorted, iteratee, context) {
							if (!_.isBoolean(isSorted)) {
								context = iteratee;
								iteratee = isSorted;
								isSorted = false;
							}
							if (iteratee != null) iteratee = cb(iteratee, context);
							var result = [];
							var seen = [];
							for (var i = 0, length = getLength(array); i < length; i++) {
								var value = array[i],
									computed = iteratee ? iteratee(value, i, array) : value;
								if (isSorted && !iteratee) {
									if (!i || seen !== computed) result.push(value);
									seen = computed;
								} else if (iteratee) {
									if (!_.contains(seen, computed)) {
										seen.push(computed);
										result.push(value);
									}
								} else if (!_.contains(result, value)) {
									result.push(value);
								}
							}
							return result;
						};

						// Produce an array that contains the union: each distinct element from all of
						// the passed-in arrays.
						_.union = restArguments(function (arrays) {
							return _.uniq(flatten(arrays, true, true));
						});

						// Produce an array that contains every item shared between all the
						// passed-in arrays.
						_.intersection = function (array) {
							var result = [];
							var argsLength = arguments.length;
							for (var i = 0, length = getLength(array); i < length; i++) {
								var item = array[i];
								if (_.contains(result, item)) continue;
								var j;
								for (j = 1; j < argsLength; j++) {
									if (!_.contains(arguments[j], item)) break;
								}
								if (j === argsLength) result.push(item);
							}
							return result;
						};

						// Take the difference between one array and a number of other arrays.
						// Only the elements present in just the first array will remain.
						_.difference = restArguments(function (array, rest) {
							rest = flatten(rest, true, true);
							return _.filter(array, function (value) {
								return !_.contains(rest, value);
							});
						});

						// Complement of _.zip. Unzip accepts an array of arrays and groups
						// each array's elements on shared indices.
						_.unzip = function (array) {
							var length = array && _.max(array, getLength).length || 0;
							var result = Array(length);

							for (var index = 0; index < length; index++) {
								result[index] = _.pluck(array, index);
							}
							return result;
						};

						// Zip together multiple lists into a single array -- elements that share
						// an index go together.
						_.zip = restArguments(_.unzip);

						// Converts lists into objects. Pass either a single array of `[key, value]`
						// pairs, or two parallel arrays of the same length -- one of keys, and one of
						// the corresponding values. Passing by pairs is the reverse of _.pairs.
						_.object = function (list, values) {
							var result = {};
							for (var i = 0, length = getLength(list); i < length; i++) {
								if (values) {
									result[list[i]] = values[i];
								} else {
									result[list[i][0]] = list[i][1];
								}
							}
							return result;
						};

						// Generator function to create the findIndex and findLastIndex functions.
						var createPredicateIndexFinder = function (dir) {
							return function (array, predicate, context) {
								predicate = cb(predicate, context);
								var length = getLength(array);
								var index = dir > 0 ? 0 : length - 1;
								for (; index >= 0 && index < length; index += dir) {
									if (predicate(array[index], index, array)) return index;
								}
								return -1;
							};
						};

						// Returns the first index on an array-like that passes a predicate test.
						_.findIndex = createPredicateIndexFinder(1);
						_.findLastIndex = createPredicateIndexFinder(-1);

						// Use a comparator function to figure out the smallest index at which
						// an object should be inserted so as to maintain order. Uses binary search.
						_.sortedIndex = function (array, obj, iteratee, context) {
							iteratee = cb(iteratee, context, 1);
							var value = iteratee(obj);
							var low = 0, high = getLength(array);
							while (low < high) {
								var mid = Math.floor((low + high) / 2);
								if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
							}
							return low;
						};

						// Generator function to create the indexOf and lastIndexOf functions.
						var createIndexFinder = function (dir, predicateFind, sortedIndex) {
							return function (array, item, idx) {
								var i = 0, length = getLength(array);
								if (typeof idx == 'number') {
									if (dir > 0) {
										i = idx >= 0 ? idx : Math.max(idx + length, i);
									} else {
										length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
									}
								} else if (sortedIndex && idx && length) {
									idx = sortedIndex(array, item);
									return array[idx] === item ? idx : -1;
								}
								if (item !== item) {
									idx = predicateFind(slice.call(array, i, length), _.isNaN);
									return idx >= 0 ? idx + i : -1;
								}
								for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
									if (array[idx] === item) return idx;
								}
								return -1;
							};
						};

						// Return the position of the first occurrence of an item in an array,
						// or -1 if the item is not included in the array.
						// If the array is large and already in sort order, pass `true`
						// for **isSorted** to use binary search.
						_.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
						_.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

						// Generate an integer Array containing an arithmetic progression. A port of
						// the native Python `range()` function. See
						// [the Python documentation](http://docs.python.org/library/functions.html#range).
						_.range = function (start, stop, step) {
							if (stop == null) {
								stop = start || 0;
								start = 0;
							}
							if (!step) {
								step = stop < start ? -1 : 1;
							}

							var length = Math.max(Math.ceil((stop - start) / step), 0);
							var range = Array(length);

							for (var idx = 0; idx < length; idx++ , start += step) {
								range[idx] = start;
							}

							return range;
						};

						// Chunk a single array into multiple arrays, each containing `count` or fewer
						// items.
						_.chunk = function (array, count) {
							if (count == null || count < 1) return [];
							var result = [];
							var i = 0, length = array.length;
							while (i < length) {
								result.push(slice.call(array, i, i += count));
							}
							return result;
						};

						// Function (ahem) Functions
						// ------------------

						// Determines whether to execute a function as a constructor
						// or a normal function with the provided arguments.
						var executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
							if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
							var self = baseCreate(sourceFunc.prototype);
							var result = sourceFunc.apply(self, args);
							if (_.isObject(result)) return result;
							return self;
						};

						// Create a function bound to a given object (assigning `this`, and arguments,
						// optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
						// available.
						_.bind = restArguments(function (func, context, args) {
							if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
							var bound = restArguments(function (callArgs) {
								return executeBound(func, bound, context, this, args.concat(callArgs));
							});
							return bound;
						});

						// Partially apply a function by creating a version that has had some of its
						// arguments pre-filled, without changing its dynamic `this` context. _ acts
						// as a placeholder by default, allowing any combination of arguments to be
						// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
						_.partial = restArguments(function (func, boundArgs) {
							var placeholder = _.partial.placeholder;
							var bound = function () {
								var position = 0, length = boundArgs.length;
								var args = Array(length);
								for (var i = 0; i < length; i++) {
									args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
								}
								while (position < arguments.length) args.push(arguments[position++]);
								return executeBound(func, bound, this, this, args);
							};
							return bound;
						});

						_.partial.placeholder = _;

						// Bind a number of an object's methods to that object. Remaining arguments
						// are the method names to be bound. Useful for ensuring that all callbacks
						// defined on an object belong to it.
						_.bindAll = restArguments(function (obj, keys) {
							keys = flatten(keys, false, false);
							var index = keys.length;
							if (index < 1) throw new Error('bindAll must be passed function names');
							while (index--) {
								var key = keys[index];
								obj[key] = _.bind(obj[key], obj);
							}
						});

						// Memoize an expensive function by storing its results.
						_.memoize = function (func, hasher) {
							var memoize = function (key) {
								var cache = memoize.cache;
								var address = '' + (hasher ? hasher.apply(this, arguments) : key);
								if (!has(cache, address)) cache[address] = func.apply(this, arguments);
								return cache[address];
							};
							memoize.cache = {};
							return memoize;
						};

						// Delays a function for the given number of milliseconds, and then calls
						// it with the arguments supplied.
						_.delay = restArguments(function (func, wait, args) {
							return setTimeout(function () {
								return func.apply(null, args);
							}, wait);
						});

						// Defers a function, scheduling it to run after the current call stack has
						// cleared.
						_.defer = _.partial(_.delay, _, 1);

						// Returns a function, that, when invoked, will only be triggered at most once
						// during a given window of time. Normally, the throttled function will run
						// as much as it can, without ever going more than once per `wait` duration;
						// but if you'd like to disable the execution on the leading edge, pass
						// `{leading: false}`. To disable execution on the trailing edge, ditto.
						_.throttle = function (func, wait, options) {
							var timeout, context, args, result;
							var previous = 0;
							if (!options) options = {};

							var later = function () {
								previous = options.leading === false ? 0 : _.now();
								timeout = null;
								result = func.apply(context, args);
								if (!timeout) context = args = null;
							};

							var throttled = function () {
								var now = _.now();
								if (!previous && options.leading === false) previous = now;
								var remaining = wait - (now - previous);
								context = this;
								args = arguments;
								if (remaining <= 0 || remaining > wait) {
									if (timeout) {
										clearTimeout(timeout);
										timeout = null;
									}
									previous = now;
									result = func.apply(context, args);
									if (!timeout) context = args = null;
								} else if (!timeout && options.trailing !== false) {
									timeout = setTimeout(later, remaining);
								}
								return result;
							};

							throttled.cancel = function () {
								clearTimeout(timeout);
								previous = 0;
								timeout = context = args = null;
							};

							return throttled;
						};

						// Returns a function, that, as long as it continues to be invoked, will not
						// be triggered. The function will be called after it stops being called for
						// N milliseconds. If `immediate` is passed, trigger the function on the
						// leading edge, instead of the trailing.
						_.debounce = function (func, wait, immediate) {
							var timeout, result;

							var later = function (context, args) {
								timeout = null;
								if (args) result = func.apply(context, args);
							};

							var debounced = restArguments(function (args) {
								if (timeout) clearTimeout(timeout);
								if (immediate) {
									var callNow = !timeout;
									timeout = setTimeout(later, wait);
									if (callNow) result = func.apply(this, args);
								} else {
									timeout = _.delay(later, wait, this, args);
								}

								return result;
							});

							debounced.cancel = function () {
								clearTimeout(timeout);
								timeout = null;
							};

							return debounced;
						};

						// Returns the first function passed as an argument to the second,
						// allowing you to adjust arguments, run code before and after, and
						// conditionally execute the original function.
						_.wrap = function (func, wrapper) {
							return _.partial(wrapper, func);
						};

						// Returns a negated version of the passed-in predicate.
						_.negate = function (predicate) {
							return function () {
								return !predicate.apply(this, arguments);
							};
						};

						// Returns a function that is the composition of a list of functions, each
						// consuming the return value of the function that follows.
						_.compose = function () {
							var args = arguments;
							var start = args.length - 1;
							return function () {
								var i = start;
								var result = args[start].apply(this, arguments);
								while (i--) result = args[i].call(this, result);
								return result;
							};
						};

						// Returns a function that will only be executed on and after the Nth call.
						_.after = function (times, func) {
							return function () {
								if (--times < 1) {
									return func.apply(this, arguments);
								}
							};
						};

						// Returns a function that will only be executed up to (but not including) the Nth call.
						_.before = function (times, func) {
							var memo;
							return function () {
								if (--times > 0) {
									memo = func.apply(this, arguments);
								}
								if (times <= 1) func = null;
								return memo;
							};
						};

						// Returns a function that will be executed at most one time, no matter how
						// often you call it. Useful for lazy initialization.
						_.once = _.partial(_.before, 2);

						_.restArguments = restArguments;

						// Object Functions
						// ----------------

						// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
						var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
						var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
							'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

						var collectNonEnumProps = function (obj, keys) {
							var nonEnumIdx = nonEnumerableProps.length;
							var constructor = obj.constructor;
							var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

							// Constructor is a special case.
							var prop = 'constructor';
							if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

							while (nonEnumIdx--) {
								prop = nonEnumerableProps[nonEnumIdx];
								if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
									keys.push(prop);
								}
							}
						};

						// Retrieve the names of an object's own properties.
						// Delegates to **ECMAScript 5**'s native `Object.keys`.
						_.keys = function (obj) {
							if (!_.isObject(obj)) return [];
							if (nativeKeys) return nativeKeys(obj);
							var keys = [];
							for (var key in obj) if (has(obj, key)) keys.push(key);
							// Ahem, IE < 9.
							if (hasEnumBug) collectNonEnumProps(obj, keys);
							return keys;
						};

						// Retrieve all the property names of an object.
						_.allKeys = function (obj) {
							if (!_.isObject(obj)) return [];
							var keys = [];
							for (var key in obj) keys.push(key);
							// Ahem, IE < 9.
							if (hasEnumBug) collectNonEnumProps(obj, keys);
							return keys;
						};

						// Retrieve the values of an object's properties.
						_.values = function (obj) {
							var keys = _.keys(obj);
							var length = keys.length;
							var values = Array(length);
							for (var i = 0; i < length; i++) {
								values[i] = obj[keys[i]];
							}
							return values;
						};

						// Returns the results of applying the iteratee to each element of the object.
						// In contrast to _.map it returns an object.
						_.mapObject = function (obj, iteratee, context) {
							iteratee = cb(iteratee, context);
							var keys = _.keys(obj),
								length = keys.length,
								results = {};
							for (var index = 0; index < length; index++) {
								var currentKey = keys[index];
								results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
							}
							return results;
						};

						// Convert an object into a list of `[key, value]` pairs.
						// The opposite of _.object.
						_.pairs = function (obj) {
							var keys = _.keys(obj);
							var length = keys.length;
							var pairs = Array(length);
							for (var i = 0; i < length; i++) {
								pairs[i] = [keys[i], obj[keys[i]]];
							}
							return pairs;
						};

						// Invert the keys and values of an object. The values must be serializable.
						_.invert = function (obj) {
							var result = {};
							var keys = _.keys(obj);
							for (var i = 0, length = keys.length; i < length; i++) {
								result[obj[keys[i]]] = keys[i];
							}
							return result;
						};

						// Return a sorted list of the function names available on the object.
						// Aliased as `methods`.
						_.functions = _.methods = function (obj) {
							var names = [];
							for (var key in obj) {
								if (_.isFunction(obj[key])) names.push(key);
							}
							return names.sort();
						};

						// An internal function for creating assigner functions.
						var createAssigner = function (keysFunc, defaults) {
							return function (obj) {
								var length = arguments.length;
								if (defaults) obj = Object(obj);
								if (length < 2 || obj == null) return obj;
								for (var index = 1; index < length; index++) {
									var source = arguments[index],
										keys = keysFunc(source),
										l = keys.length;
									for (var i = 0; i < l; i++) {
										var key = keys[i];
										if (!defaults || obj[key] === void 0) obj[key] = source[key];
									}
								}
								return obj;
							};
						};

						// Extend a given object with all the properties in passed-in object(s).
						_.extend = createAssigner(_.allKeys);

						// Assigns a given object with all the own properties in the passed-in object(s).
						// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
						_.extendOwn = _.assign = createAssigner(_.keys);

						// Returns the first key on an object that passes a predicate test.
						_.findKey = function (obj, predicate, context) {
							predicate = cb(predicate, context);
							var keys = _.keys(obj), key;
							for (var i = 0, length = keys.length; i < length; i++) {
								key = keys[i];
								if (predicate(obj[key], key, obj)) return key;
							}
						};

						// Internal pick helper function to determine if `obj` has key `key`.
						var keyInObj = function (value, key, obj) {
							return key in obj;
						};

						// Return a copy of the object only containing the whitelisted properties.
						_.pick = restArguments(function (obj, keys) {
							var result = {}, iteratee = keys[0];
							if (obj == null) return result;
							if (_.isFunction(iteratee)) {
								if (keys.length > 1) iteratee = optimizeCb(iteratee, keys[1]);
								keys = _.allKeys(obj);
							} else {
								iteratee = keyInObj;
								keys = flatten(keys, false, false);
								obj = Object(obj);
							}
							for (var i = 0, length = keys.length; i < length; i++) {
								var key = keys[i];
								var value = obj[key];
								if (iteratee(value, key, obj)) result[key] = value;
							}
							return result;
						});

						// Return a copy of the object without the blacklisted properties.
						_.omit = restArguments(function (obj, keys) {
							var iteratee = keys[0], context;
							if (_.isFunction(iteratee)) {
								iteratee = _.negate(iteratee);
								if (keys.length > 1) context = keys[1];
							} else {
								keys = _.map(flatten(keys, false, false), String);
								iteratee = function (value, key) {
									return !_.contains(keys, key);
								};
							}
							return _.pick(obj, iteratee, context);
						});

						// Fill in a given object with default properties.
						_.defaults = createAssigner(_.allKeys, true);

						// Creates an object that inherits from the given prototype object.
						// If additional properties are provided then they will be added to the
						// created object.
						_.create = function (prototype, props) {
							var result = baseCreate(prototype);
							if (props) _.extendOwn(result, props);
							return result;
						};

						// Create a (shallow-cloned) duplicate of an object.
						_.clone = function (obj) {
							if (!_.isObject(obj)) return obj;
							return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
						};

						// Invokes interceptor with the obj, and then returns obj.
						// The primary purpose of this method is to "tap into" a method chain, in
						// order to perform operations on intermediate results within the chain.
						_.tap = function (obj, interceptor) {
							interceptor(obj);
							return obj;
						};

						// Returns whether an object has a given set of `key:value` pairs.
						_.isMatch = function (object, attrs) {
							var keys = _.keys(attrs), length = keys.length;
							if (object == null) return !length;
							var obj = Object(object);
							for (var i = 0; i < length; i++) {
								var key = keys[i];
								if (attrs[key] !== obj[key] || !(key in obj)) return false;
							}
							return true;
						};


						// Internal recursive comparison function for `isEqual`.
						var eq, deepEq;
						eq = function (a, b, aStack, bStack) {
							// Identical objects are equal. `0 === -0`, but they aren't identical.
							// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
							if (a === b) return a !== 0 || 1 / a === 1 / b;
							// `null` or `undefined` only equal to itself (strict comparison).
							if (a == null || b == null) return false;
							// `NaN`s are equivalent, but non-reflexive.
							if (a !== a) return b !== b;
							// Exhaust primitive checks
							var type = typeof a;
							if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
							return deepEq(a, b, aStack, bStack);
						};

						// Internal recursive comparison function for `isEqual`.
						deepEq = function (a, b, aStack, bStack) {
							// Unwrap any wrapped objects.
							if (a instanceof _) a = a._wrapped;
							if (b instanceof _) b = b._wrapped;
							// Compare `[[Class]]` names.
							var className = toString.call(a);
							if (className !== toString.call(b)) return false;
							switch (className) {
								// Strings, numbers, regular expressions, dates, and booleans are compared by value.
								case '[object RegExp]':
								// RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
								case '[object String]':
									// Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
									// equivalent to `new String("5")`.
									return '' + a === '' + b;
								case '[object Number]':
									// `NaN`s are equivalent, but non-reflexive.
									// Object(NaN) is equivalent to NaN.
									if (+a !== +a) return +b !== +b;
									// An `egal` comparison is performed for other numeric values.
									return +a === 0 ? 1 / +a === 1 / b : +a === +b;
								case '[object Date]':
								case '[object Boolean]':
									// Coerce dates and booleans to numeric primitive values. Dates are compared by their
									// millisecond representations. Note that invalid dates with millisecond representations
									// of `NaN` are not equivalent.
									return +a === +b;
								case '[object Symbol]':
									return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
							}

							var areArrays = className === '[object Array]';
							if (!areArrays) {
								if (typeof a != 'object' || typeof b != 'object') return false;

								// Objects with different constructors are not equivalent, but `Object`s or `Array`s
								// from different frames are.
								var aCtor = a.constructor, bCtor = b.constructor;
								if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
									_.isFunction(bCtor) && bCtor instanceof bCtor)
									&& ('constructor' in a && 'constructor' in b)) {
									return false;
								}
							}
							// Assume equality for cyclic structures. The algorithm for detecting cyclic
							// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

							// Initializing stack of traversed objects.
							// It's done here since we only need them for objects and arrays comparison.
							aStack = aStack || [];
							bStack = bStack || [];
							var length = aStack.length;
							while (length--) {
								// Linear search. Performance is inversely proportional to the number of
								// unique nested structures.
								if (aStack[length] === a) return bStack[length] === b;
							}

							// Add the first object to the stack of traversed objects.
							aStack.push(a);
							bStack.push(b);

							// Recursively compare objects and arrays.
							if (areArrays) {
								// Compare array lengths to determine if a deep comparison is necessary.
								length = a.length;
								if (length !== b.length) return false;
								// Deep compare the contents, ignoring non-numeric properties.
								while (length--) {
									if (!eq(a[length], b[length], aStack, bStack)) return false;
								}
							} else {
								// Deep compare objects.
								var keys = _.keys(a), key;
								length = keys.length;
								// Ensure that both objects contain the same number of properties before comparing deep equality.
								if (_.keys(b).length !== length) return false;
								while (length--) {
									// Deep compare each member
									key = keys[length];
									if (!(has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
								}
							}
							// Remove the first object from the stack of traversed objects.
							aStack.pop();
							bStack.pop();
							return true;
						};

						// Perform a deep comparison to check if two objects are equal.
						_.isEqual = function (a, b) {
							return eq(a, b);
						};

						// Is a given array, string, or object empty?
						// An "empty" object has no enumerable own-properties.
						_.isEmpty = function (obj) {
							if (obj == null) return true;
							if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
							return _.keys(obj).length === 0;
						};

						// Is a given value a DOM element?
						_.isElement = function (obj) {
							return !!(obj && obj.nodeType === 1);
						};

						// Is a given value an array?
						// Delegates to ECMA5's native Array.isArray
						_.isArray = nativeIsArray || function (obj) {
							return toString.call(obj) === '[object Array]';
						};

						// Is a given variable an object?
						_.isObject = function (obj) {
							var type = typeof obj;
							return type === 'function' || type === 'object' && !!obj;
						};

						// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError, isMap, isWeakMap, isSet, isWeakSet.
						_.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function (name) {
							_['is' + name] = function (obj) {
								return toString.call(obj) === '[object ' + name + ']';
							};
						});

						// Define a fallback version of the method in browsers (ahem, IE < 9), where
						// there isn't any inspectable "Arguments" type.
						if (!_.isArguments(arguments)) {
							_.isArguments = function (obj) {
								return has(obj, 'callee');
							};
						}

						// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
						// IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
						var nodelist = root.document && root.document.childNodes;
						if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
							_.isFunction = function (obj) {
								return typeof obj == 'function' || false;
							};
						}

						// Is a given object a finite number?
						_.isFinite = function (obj) {
							return !_.isSymbol(obj) && isFinite(obj) && !isNaN(parseFloat(obj));
						};

						// Is the given value `NaN`?
						_.isNaN = function (obj) {
							return _.isNumber(obj) && isNaN(obj);
						};

						// Is a given value a boolean?
						_.isBoolean = function (obj) {
							return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
						};

						// Is a given value equal to null?
						_.isNull = function (obj) {
							return obj === null;
						};

						// Is a given variable undefined?
						_.isUndefined = function (obj) {
							return obj === void 0;
						};

						// Shortcut function for checking if an object has a given property directly
						// on itself (in other words, not on a prototype).
						_.has = function (obj, path) {
							if (!_.isArray(path)) {
								return has(obj, path);
							}
							var length = path.length;
							for (var i = 0; i < length; i++) {
								var key = path[i];
								if (obj == null || !hasOwnProperty.call(obj, key)) {
									return false;
								}
								obj = obj[key];
							}
							return !!length;
						};

						// Utility Functions
						// -----------------

						// Run Underscore.js in *noConflict* mode, returning the `_` variable to its
						// previous owner. Returns a reference to the Underscore object.
						_.noConflict = function () {
							root._ = previousUnderscore;
							return this;
						};

						// Keep the identity function around for default iteratees.
						_.identity = function (value) {
							return value;
						};

						// Predicate-generating functions. Often useful outside of Underscore.
						_.constant = function (value) {
							return function () {
								return value;
							};
						};

						_.noop = function () { };

						// Creates a function that, when passed an object, will traverse that object’s
						// properties down the given `path`, specified as an array of keys or indexes.
						_.property = function (path) {
							if (!_.isArray(path)) {
								return shallowProperty(path);
							}
							return function (obj) {
								return deepGet(obj, path);
							};
						};

						// Generates a function for a given object that returns a given property.
						_.propertyOf = function (obj) {
							if (obj == null) {
								return function () { };
							}
							return function (path) {
								return !_.isArray(path) ? obj[path] : deepGet(obj, path);
							};
						};

						// Returns a predicate for checking whether an object has a given set of
						// `key:value` pairs.
						_.matcher = _.matches = function (attrs) {
							attrs = _.extendOwn({}, attrs);
							return function (obj) {
								return _.isMatch(obj, attrs);
							};
						};

						// Run a function **n** times.
						_.times = function (n, iteratee, context) {
							var accum = Array(Math.max(0, n));
							iteratee = optimizeCb(iteratee, context, 1);
							for (var i = 0; i < n; i++) accum[i] = iteratee(i);
							return accum;
						};

						// Return a random integer between min and max (inclusive).
						_.random = function (min, max) {
							if (max == null) {
								max = min;
								min = 0;
							}
							return min + Math.floor(Math.random() * (max - min + 1));
						};

						// A (possibly faster) way to get the current timestamp as an integer.
						_.now = Date.now || function () {
							return new Date().getTime();
						};

						// List of HTML entities for escaping.
						var escapeMap = {
							'&': '&amp;',
							'<': '&lt;',
							'>': '&gt;',
							'"': '&quot;',
							"'": '&#x27;',
							'`': '&#x60;'
						};
						var unescapeMap = _.invert(escapeMap);

						// Functions for escaping and unescaping strings to/from HTML interpolation.
						var createEscaper = function (map) {
							var escaper = function (match) {
								return map[match];
							};
							// Regexes for identifying a key that needs to be escaped.
							var source = '(?:' + _.keys(map).join('|') + ')';
							var testRegexp = RegExp(source);
							var replaceRegexp = RegExp(source, 'g');
							return function (string) {
								string = string == null ? '' : '' + string;
								return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
							};
						};
						_.escape = createEscaper(escapeMap);
						_.unescape = createEscaper(unescapeMap);

						// Traverses the children of `obj` along `path`. If a child is a function, it
						// is invoked with its parent as context. Returns the value of the final
						// child, or `fallback` if any child is undefined.
						_.result = function (obj, path, fallback) {
							if (!_.isArray(path)) path = [path];
							var length = path.length;
							if (!length) {
								return _.isFunction(fallback) ? fallback.call(obj) : fallback;
							}
							for (var i = 0; i < length; i++) {
								var prop = obj == null ? void 0 : obj[path[i]];
								if (prop === void 0) {
									prop = fallback;
									i = length; // Ensure we don't continue iterating.
								}
								obj = _.isFunction(prop) ? prop.call(obj) : prop;
							}
							return obj;
						};

						// Generate a unique integer id (unique within the entire client session).
						// Useful for temporary DOM ids.
						var idCounter = 0;
						_.uniqueId = function (prefix) {
							var id = ++idCounter + '';
							return prefix ? prefix + id : id;
						};

						// By default, Underscore uses ERB-style template delimiters, change the
						// following template settings to use alternative delimiters.
						_.templateSettings = {
							evaluate: /<%([\s\S]+?)%>/g,
							interpolate: /<%=([\s\S]+?)%>/g,
							escape: /<%-([\s\S]+?)%>/g
						};

						// When customizing `templateSettings`, if you don't want to define an
						// interpolation, evaluation or escaping regex, we need one that is
						// guaranteed not to match.
						var noMatch = /(.)^/;

						// Certain characters need to be escaped so that they can be put into a
						// string literal.
						var escapes = {
							"'": "'",
							'\\': '\\',
							'\r': 'r',
							'\n': 'n',
							'\u2028': 'u2028',
							'\u2029': 'u2029'
						};

						var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

						var escapeChar = function (match) {
							return '\\' + escapes[match];
						};

						// JavaScript micro-templating, similar to John Resig's implementation.
						// Underscore templating handles arbitrary delimiters, preserves whitespace,
						// and correctly escapes quotes within interpolated code.
						// NB: `oldSettings` only exists for backwards compatibility.
						_.template = function (text, settings, oldSettings) {
							if (!settings && oldSettings) settings = oldSettings;
							settings = _.defaults({}, settings, _.templateSettings);

							// Combine delimiters into one regular expression via alternation.
							var matcher = RegExp([
								(settings.escape || noMatch).source,
								(settings.interpolate || noMatch).source,
								(settings.evaluate || noMatch).source
							].join('|') + '|$', 'g');

							// Compile the template source, escaping string literals appropriately.
							var index = 0;
							var source = "__p+='";
							text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
								source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
								index = offset + match.length;

								if (escape) {
									source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
								} else if (interpolate) {
									source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
								} else if (evaluate) {
									source += "';\n" + evaluate + "\n__p+='";
								}

								// Adobe VMs need the match returned to produce the correct offset.
								return match;
							});
							source += "';\n";

							// If a variable is not specified, place data values in local scope.
							if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

							source = "var __t,__p='',__j=Array.prototype.join," +
								"print=function(){__p+=__j.call(arguments,'');};\n" +
								source + 'return __p;\n';

							var render;
							try {
								render = new Function(settings.variable || 'obj', '_', source);
							} catch (e) {
								e.source = source;
								throw e;
							}

							var template = function (data) {
								return render.call(this, data, _);
							};

							// Provide the compiled source as a convenience for precompilation.
							var argument = settings.variable || 'obj';
							template.source = 'function(' + argument + '){\n' + source + '}';

							return template;
						};

						// Add a "chain" function. Start chaining a wrapped Underscore object.
						_.chain = function (obj) {
							var instance = _(obj);
							instance._chain = true;
							return instance;
						};

						// OOP
						// ---------------
						// If Underscore is called as a function, it returns a wrapped object that
						// can be used OO-style. This wrapper holds altered versions of all the
						// underscore functions. Wrapped objects may be chained.

						// Helper function to continue chaining intermediate results.
						var chainResult = function (instance, obj) {
							return instance._chain ? _(obj).chain() : obj;
						};

						// Add your own custom functions to the Underscore object.
						_.mixin = function (obj) {
							_.each(_.functions(obj), function (name) {
								var func = _[name] = obj[name];
								_.prototype[name] = function () {
									var args = [this._wrapped];
									push.apply(args, arguments);
									return chainResult(this, func.apply(_, args));
								};
							});
							return _;
						};

						// Add all of the Underscore functions to the wrapper object.
						_.mixin(_);

						// Add all mutator Array functions to the wrapper.
						_.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
							var method = ArrayProto[name];
							_.prototype[name] = function () {
								var obj = this._wrapped;
								method.apply(obj, arguments);
								if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
								return chainResult(this, obj);
							};
						});

						// Add all accessor Array functions to the wrapper.
						_.each(['concat', 'join', 'slice'], function (name) {
							var method = ArrayProto[name];
							_.prototype[name] = function () {
								return chainResult(this, method.apply(this._wrapped, arguments));
							};
						});

						// Extracts the result from a wrapped and chained object.
						_.prototype.value = function () {
							return this._wrapped;
						};

						// Provide unwrapping proxy for some methods used in engine operations
						// such as arithmetic and JSON stringification.
						_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

						_.prototype.toString = function () {
							return String(this._wrapped);
						};

						// AMD registration happens at the end for compatibility with AMD loaders
						// that may not enforce next-turn semantics on modules. Even though general
						// practice for AMD registration is to be anonymous, underscore registers
						// as a named module because, like jQuery, it is a base library that is
						// popular enough to be bundled in a third party lib, but not be part of
						// an AMD load request. Those cases could generate an error when an
						// anonymous define() is called outside of a loader request.
						if (true) {
							!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
								return _;
							}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
						}
					}());

					/* WEBPACK VAR INJECTION */
				}.call(exports, __webpack_require__(1)(module)))

				/***/
			}),
/* 398 */
/***/ (function (module, exports, __webpack_require__) {

				var getNative = __webpack_require__(26),
					root = __webpack_require__(19);

				/* Built-in method references that are verified to be native. */
				var DataView = getNative(root, 'DataView');

				module.exports = DataView;


				/***/
			}),
			/* 399 */
			[1797, 447, 448, 449, 450, 451],
/* 400 */
/***/ (function (module, exports, __webpack_require__) {

				var getNative = __webpack_require__(26),
					root = __webpack_require__(19);

				/* Built-in method references that are verified to be native. */
				var Promise = getNative(root, 'Promise');

				module.exports = Promise;


				/***/
			}),
			/* 401 */
			[1808, 26, 19],
			/* 402 */
			[1812, 93, 471, 472],
/* 403 */
/***/ (function (module, exports, __webpack_require__) {

				var root = __webpack_require__(19);

				/** Built-in value references. */
				var Uint8Array = root.Uint8Array;

				module.exports = Uint8Array;


				/***/
			}),
/* 404 */
/***/ (function (module, exports, __webpack_require__) {

				var getNative = __webpack_require__(26),
					root = __webpack_require__(19);

				/* Built-in method references that are verified to be native. */
				var WeakMap = getNative(root, 'WeakMap');

				module.exports = WeakMap;


				/***/
			}),
/* 405 */
/***/ (function (module, exports) {

				/**
				 * A specialized version of `baseAggregator` for arrays.
				 *
				 * @private
				 * @param {Array} [array] The array to iterate over.
				 * @param {Function} setter The function to set `accumulator` values.
				 * @param {Function} iteratee The iteratee to transform keys.
				 * @param {Object} accumulator The initial aggregated object.
				 * @returns {Function} Returns `accumulator`.
				 */
				function arrayAggregator(array, setter, iteratee, accumulator) {
					var index = -1,
						length = array == null ? 0 : array.length;

					while (++index < length) {
						var value = array[index];
						setter(accumulator, value, iteratee(value), array);
					}
					return accumulator;
				}

				module.exports = arrayAggregator;


				/***/
			}),
			/* 406 */
			189,
			/* 407 */
			[1820, 429, 179, 20, 181, 174, 183],
			/* 408 */
			52,
			/* 409 */
			198,
/* 410 */
/***/ (function (module, exports) {

				/**
				 * A specialized version of `_.some` for arrays without support for iteratee
				 * shorthands.
				 *
				 * @private
				 * @param {Array} [array] The array to iterate over.
				 * @param {Function} predicate The function invoked per iteration.
				 * @returns {boolean} Returns `true` if any element passes the predicate check,
				 *  else `false`.
				 */
				function arraySome(array, predicate) {
					var index = -1,
						length = array == null ? 0 : array.length;

					while (++index < length) {
						if (predicate(array[index], index, array)) {
							return true;
						}
					}
					return false;
				}

				module.exports = arraySome;


				/***/
			}),
/* 411 */
/***/ (function (module, exports, __webpack_require__) {

				var baseEach = __webpack_require__(413);

				/**
				 * Aggregates elements of `collection` on `accumulator` with keys transformed
				 * by `iteratee` and values set by `setter`.
				 *
				 * @private
				 * @param {Array|Object} collection The collection to iterate over.
				 * @param {Function} setter The function to set `accumulator` values.
				 * @param {Function} iteratee The iteratee to transform keys.
				 * @param {Object} accumulator The initial aggregated object.
				 * @returns {Function} Returns `accumulator`.
				 */
				function baseAggregator(collection, setter, iteratee, accumulator) {
					baseEach(collection, function (value, key, collection) {
						setter(accumulator, value, iteratee(value), collection);
					});
					return accumulator;
				}

				module.exports = baseAggregator;


				/***/
			}),
/* 412 */
/***/ (function (module, exports, __webpack_require__) {

				var defineProperty = __webpack_require__(437);

				/**
				 * The base implementation of `assignValue` and `assignMergeValue` without
				 * value checks.
				 *
				 * @private
				 * @param {Object} object The object to modify.
				 * @param {string} key The key of the property to assign.
				 * @param {*} value The value to assign.
				 */
				function baseAssignValue(object, key, value) {
					if (key == '__proto__' && defineProperty) {
						defineProperty(object, key, {
							'configurable': true,
							'enumerable': true,
							'value': value,
							'writable': true
						});
					} else {
						object[key] = value;
					}
				}

				module.exports = baseAssignValue;


				/***/
			}),
/* 413 */
/***/ (function (module, exports, __webpack_require__) {

				var baseForOwn = __webpack_require__(415),
					createBaseEach = __webpack_require__(435);

				/**
				 * The base implementation of `_.forEach` without support for iteratee shorthands.
				 *
				 * @private
				 * @param {Array|Object} collection The collection to iterate over.
				 * @param {Function} iteratee The function invoked per iteration.
				 * @returns {Array|Object} Returns `collection`.
				 */
				var baseEach = createBaseEach(baseForOwn);

				module.exports = baseEach;


				/***/
			}),
/* 414 */
/***/ (function (module, exports, __webpack_require__) {

				var createBaseFor = __webpack_require__(436);

				/**
				 * The base implementation of `baseForOwn` which iterates over `object`
				 * properties returned by `keysFunc` and invokes `iteratee` for each property.
				 * Iteratee functions may exit iteration early by explicitly returning `false`.
				 *
				 * @private
				 * @param {Object} object The object to iterate over.
				 * @param {Function} iteratee The function invoked per iteration.
				 * @param {Function} keysFunc The function to get the keys of `object`.
				 * @returns {Object} Returns `object`.
				 */
				var baseFor = createBaseFor();

				module.exports = baseFor;


				/***/
			}),
/* 415 */
/***/ (function (module, exports, __webpack_require__) {

				var baseFor = __webpack_require__(414),
					keys = __webpack_require__(98);

				/**
				 * The base implementation of `_.forOwn` without support for iteratee shorthands.
				 *
				 * @private
				 * @param {Object} object The object to iterate over.
				 * @param {Function} iteratee The function invoked per iteration.
				 * @returns {Object} Returns `object`.
				 */
				function baseForOwn(object, iteratee) {
					return object && baseFor(object, iteratee, keys);
				}

				module.exports = baseForOwn;


				/***/
			}),
/* 416 */
/***/ (function (module, exports, __webpack_require__) {

				var arrayPush = __webpack_require__(409),
					isArray = __webpack_require__(20);

				/**
				 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
				 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
				 * symbols of `object`.
				 *
				 * @private
				 * @param {Object} object The object to query.
				 * @param {Function} keysFunc The function to get the keys of `object`.
				 * @param {Function} symbolsFunc The function to get the symbols of `object`.
				 * @returns {Array} Returns the array of property names and symbols.
				 */
				function baseGetAllKeys(object, keysFunc, symbolsFunc) {
					var result = keysFunc(object);
					return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
				}

				module.exports = baseGetAllKeys;


				/***/
			}),
/* 417 */
/***/ (function (module, exports) {

				/**
				 * The base implementation of `_.hasIn` without support for deep paths.
				 *
				 * @private
				 * @param {Object} [object] The object to query.
				 * @param {Array|string} key The key to check.
				 * @returns {boolean} Returns `true` if `key` exists, else `false`.
				 */
				function baseHasIn(object, key) {
					return object != null && key in Object(object);
				}

				module.exports = baseHasIn;


				/***/
			}),
			/* 418 */
			[1835, 41, 42],
/* 419 */
/***/ (function (module, exports, __webpack_require__) {

				var Stack = __webpack_require__(168),
					equalArrays = __webpack_require__(172),
					equalByTag = __webpack_require__(438),
					equalObjects = __webpack_require__(439),
					getTag = __webpack_require__(444),
					isArray = __webpack_require__(20),
					isBuffer = __webpack_require__(181),
					isTypedArray = __webpack_require__(183);

				/** Used to compose bitmasks for value comparisons. */
				var COMPARE_PARTIAL_FLAG = 1;

				/** `Object#toString` result references. */
				var argsTag = '[object Arguments]',
					arrayTag = '[object Array]',
					objectTag = '[object Object]';

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/**
				 * A specialized version of `baseIsEqual` for arrays and objects which performs
				 * deep comparisons and tracks traversed objects enabling objects with circular
				 * references to be compared.
				 *
				 * @private
				 * @param {Object} object The object to compare.
				 * @param {Object} other The other object to compare.
				 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
				 * @param {Function} customizer The function to customize comparisons.
				 * @param {Function} equalFunc The function to determine equivalents of values.
				 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
				 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
				 */
				function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
					var objIsArr = isArray(object),
						othIsArr = isArray(other),
						objTag = objIsArr ? arrayTag : getTag(object),
						othTag = othIsArr ? arrayTag : getTag(other);

					objTag = objTag == argsTag ? objectTag : objTag;
					othTag = othTag == argsTag ? objectTag : othTag;

					var objIsObj = objTag == objectTag,
						othIsObj = othTag == objectTag,
						isSameTag = objTag == othTag;

					if (isSameTag && isBuffer(object)) {
						if (!isBuffer(other)) {
							return false;
						}
						objIsArr = true;
						objIsObj = false;
					}
					if (isSameTag && !objIsObj) {
						stack || (stack = new Stack);
						return (objIsArr || isTypedArray(object))
							? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
							: equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
					}
					if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
						var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
							othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

						if (objIsWrapped || othIsWrapped) {
							var objUnwrapped = objIsWrapped ? object.value() : object,
								othUnwrapped = othIsWrapped ? other.value() : other;

							stack || (stack = new Stack);
							return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
						}
					}
					if (!isSameTag) {
						return false;
					}
					stack || (stack = new Stack);
					return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
				}

				module.exports = baseIsEqualDeep;


				/***/
			}),
/* 420 */
/***/ (function (module, exports, __webpack_require__) {

				var Stack = __webpack_require__(168),
					baseIsEqual = __webpack_require__(170);

				/** Used to compose bitmasks for value comparisons. */
				var COMPARE_PARTIAL_FLAG = 1,
					COMPARE_UNORDERED_FLAG = 2;

				/**
				 * The base implementation of `_.isMatch` without support for iteratee shorthands.
				 *
				 * @private
				 * @param {Object} object The object to inspect.
				 * @param {Object} source The object of property values to match.
				 * @param {Array} matchData The property names, values, and compare flags to match.
				 * @param {Function} [customizer] The function to customize comparisons.
				 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
				 */
				function baseIsMatch(object, source, matchData, customizer) {
					var index = matchData.length,
						length = index,
						noCustomizer = !customizer;

					if (object == null) {
						return !length;
					}
					object = Object(object);
					while (index--) {
						var data = matchData[index];
						if ((noCustomizer && data[2])
							? data[1] !== object[data[0]]
							: !(data[0] in object)
						) {
							return false;
						}
					}
					while (++index < length) {
						data = matchData[index];
						var key = data[0],
							objValue = object[key],
							srcValue = data[1];

						if (noCustomizer && data[2]) {
							if (objValue === undefined && !(key in object)) {
								return false;
							}
						} else {
							var stack = new Stack;
							if (customizer) {
								var result = customizer(objValue, srcValue, key, object, source, stack);
							}
							if (!(result === undefined
								? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
								: result
							)) {
								return false;
							}
						}
					}
					return true;
				}

				module.exports = baseIsMatch;


				/***/
			}),
			/* 421 */
			[1842, 182, 453, 96, 177],
			/* 422 */
			[1844, 41, 95, 42],
/* 423 */
/***/ (function (module, exports, __webpack_require__) {

				var baseMatches = __webpack_require__(425),
					baseMatchesProperty = __webpack_require__(426),
					identity = __webpack_require__(483),
					isArray = __webpack_require__(20),
					property = __webpack_require__(485);

				/**
				 * The base implementation of `_.iteratee`.
				 *
				 * @private
				 * @param {*} [value=_.identity] The value to convert to an iteratee.
				 * @returns {Function} Returns the iteratee.
				 */
				function baseIteratee(value) {
					// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
					// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
					if (typeof value == 'function') {
						return value;
					}
					if (value == null) {
						return identity;
					}
					if (typeof value == 'object') {
						return isArray(value)
							? baseMatchesProperty(value[0], value[1])
							: baseMatches(value);
					}
					return property(value);
				}

				module.exports = baseIteratee;


				/***/
			}),
/* 424 */
/***/ (function (module, exports, __webpack_require__) {

				var isPrototype = __webpack_require__(454),
					nativeKeys = __webpack_require__(467);

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/**
				 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
				 *
				 * @private
				 * @param {Object} object The object to query.
				 * @returns {Array} Returns the array of property names.
				 */
				function baseKeys(object) {
					if (!isPrototype(object)) {
						return nativeKeys(object);
					}
					var result = [];
					for (var key in Object(object)) {
						if (hasOwnProperty.call(object, key) && key != 'constructor') {
							result.push(key);
						}
					}
					return result;
				}

				module.exports = baseKeys;


				/***/
			}),
/* 425 */
/***/ (function (module, exports, __webpack_require__) {

				var baseIsMatch = __webpack_require__(420),
					getMatchData = __webpack_require__(441),
					matchesStrictComparable = __webpack_require__(176);

				/**
				 * The base implementation of `_.matches` which doesn't clone `source`.
				 *
				 * @private
				 * @param {Object} source The object of property values to match.
				 * @returns {Function} Returns the new spec function.
				 */
				function baseMatches(source) {
					var matchData = getMatchData(source);
					if (matchData.length == 1 && matchData[0][2]) {
						return matchesStrictComparable(matchData[0][0], matchData[0][1]);
					}
					return function (object) {
						return object === source || baseIsMatch(object, source, matchData);
					};
				}

				module.exports = baseMatches;


				/***/
			}),
/* 426 */
/***/ (function (module, exports, __webpack_require__) {

				var baseIsEqual = __webpack_require__(170),
					get = __webpack_require__(480),
					hasIn = __webpack_require__(482),
					isKey = __webpack_require__(94),
					isStrictComparable = __webpack_require__(175),
					matchesStrictComparable = __webpack_require__(176),
					toKey = __webpack_require__(65);

				/** Used to compose bitmasks for value comparisons. */
				var COMPARE_PARTIAL_FLAG = 1,
					COMPARE_UNORDERED_FLAG = 2;

				/**
				 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
				 *
				 * @private
				 * @param {string} path The path of the property to get.
				 * @param {*} srcValue The value to match.
				 * @returns {Function} Returns the new spec function.
				 */
				function baseMatchesProperty(path, srcValue) {
					if (isKey(path) && isStrictComparable(srcValue)) {
						return matchesStrictComparable(toKey(path), srcValue);
					}
					return function (object) {
						var objValue = get(object, path);
						return (objValue === undefined && objValue === srcValue)
							? hasIn(object, path)
							: baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
					};
				}

				module.exports = baseMatchesProperty;


				/***/
			}),
/* 427 */
/***/ (function (module, exports) {

				/**
				 * The base implementation of `_.property` without support for deep paths.
				 *
				 * @private
				 * @param {string} key The key of the property to get.
				 * @returns {Function} Returns the new accessor function.
				 */
				function baseProperty(key) {
					return function (object) {
						return object == null ? undefined : object[key];
					};
				}

				module.exports = baseProperty;


				/***/
			}),
/* 428 */
/***/ (function (module, exports, __webpack_require__) {

				var baseGet = __webpack_require__(169);

				/**
				 * A specialized version of `baseProperty` which supports deep paths.
				 *
				 * @private
				 * @param {Array|string} path The path of the property to get.
				 * @returns {Function} Returns the new accessor function.
				 */
				function basePropertyDeep(path) {
					return function (object) {
						return baseGet(object, path);
					};
				}

				module.exports = basePropertyDeep;


				/***/
			}),
			/* 429 */
			315,
/* 430 */
/***/ (function (module, exports, __webpack_require__) {

				var Symbol = __webpack_require__(61),
					arrayMap = __webpack_require__(408),
					isArray = __webpack_require__(20),
					isSymbol = __webpack_require__(97);

				/** Used as references for various `Number` constants. */
				var INFINITY = 1 / 0;

				/** Used to convert symbols to primitives and strings. */
				var symbolProto = Symbol ? Symbol.prototype : undefined,
					symbolToString = symbolProto ? symbolProto.toString : undefined;

				/**
				 * The base implementation of `_.toString` which doesn't convert nullish
				 * values to empty strings.
				 *
				 * @private
				 * @param {*} value The value to process.
				 * @returns {string} Returns the string.
				 */
				function baseToString(value) {
					// Exit early for strings to avoid a performance hit in some environments.
					if (typeof value == 'string') {
						return value;
					}
					if (isArray(value)) {
						// Recursively convert values (susceptible to call stack limits).
						return arrayMap(value, baseToString) + '';
					}
					if (isSymbol(value)) {
						return symbolToString ? symbolToString.call(value) : '';
					}
					var result = (value + '');
					return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
				}

				module.exports = baseToString;


				/***/
			}),
			/* 431 */
			72,
			/* 432 */
			73,
			/* 433 */
			[1855, 19],
/* 434 */
/***/ (function (module, exports, __webpack_require__) {

				var arrayAggregator = __webpack_require__(405),
					baseAggregator = __webpack_require__(411),
					baseIteratee = __webpack_require__(423),
					isArray = __webpack_require__(20);

				/**
				 * Creates a function like `_.groupBy`.
				 *
				 * @private
				 * @param {Function} setter The function to set accumulator values.
				 * @param {Function} [initializer] The accumulator object initializer.
				 * @returns {Function} Returns the new aggregator function.
				 */
				function createAggregator(setter, initializer) {
					return function (collection, iteratee) {
						var func = isArray(collection) ? arrayAggregator : baseAggregator,
							accumulator = initializer ? initializer() : {};

						return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
					};
				}

				module.exports = createAggregator;


				/***/
			}),
/* 435 */
/***/ (function (module, exports, __webpack_require__) {

				var isArrayLike = __webpack_require__(180);

				/**
				 * Creates a `baseEach` or `baseEachRight` function.
				 *
				 * @private
				 * @param {Function} eachFunc The function to iterate over a collection.
				 * @param {boolean} [fromRight] Specify iterating from right to left.
				 * @returns {Function} Returns the new base function.
				 */
				function createBaseEach(eachFunc, fromRight) {
					return function (collection, iteratee) {
						if (collection == null) {
							return collection;
						}
						if (!isArrayLike(collection)) {
							return eachFunc(collection, iteratee);
						}
						var length = collection.length,
							index = fromRight ? length : -1,
							iterable = Object(collection);

						while ((fromRight ? index-- : ++index < length)) {
							if (iteratee(iterable[index], index, iterable) === false) {
								break;
							}
						}
						return collection;
					};
				}

				module.exports = createBaseEach;


				/***/
			}),
/* 436 */
/***/ (function (module, exports) {

				/**
				 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
				 *
				 * @private
				 * @param {boolean} [fromRight] Specify iterating from right to left.
				 * @returns {Function} Returns the new base function.
				 */
				function createBaseFor(fromRight) {
					return function (object, iteratee, keysFunc) {
						var index = -1,
							iterable = Object(object),
							props = keysFunc(object),
							length = props.length;

						while (length--) {
							var key = props[fromRight ? length : ++index];
							if (iteratee(iterable[key], key, iterable) === false) {
								break;
							}
						}
						return object;
					};
				}

				module.exports = createBaseFor;


				/***/
			}),
			/* 437 */
			[1860, 26],
/* 438 */
/***/ (function (module, exports, __webpack_require__) {

				var Symbol = __webpack_require__(61),
					Uint8Array = __webpack_require__(403),
					eq = __webpack_require__(178),
					equalArrays = __webpack_require__(172),
					mapToArray = __webpack_require__(465),
					setToArray = __webpack_require__(473);

				/** Used to compose bitmasks for value comparisons. */
				var COMPARE_PARTIAL_FLAG = 1,
					COMPARE_UNORDERED_FLAG = 2;

				/** `Object#toString` result references. */
				var boolTag = '[object Boolean]',
					dateTag = '[object Date]',
					errorTag = '[object Error]',
					mapTag = '[object Map]',
					numberTag = '[object Number]',
					regexpTag = '[object RegExp]',
					setTag = '[object Set]',
					stringTag = '[object String]',
					symbolTag = '[object Symbol]';

				var arrayBufferTag = '[object ArrayBuffer]',
					dataViewTag = '[object DataView]';

				/** Used to convert symbols to primitives and strings. */
				var symbolProto = Symbol ? Symbol.prototype : undefined,
					symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

				/**
				 * A specialized version of `baseIsEqualDeep` for comparing objects of
				 * the same `toStringTag`.
				 *
				 * **Note:** This function only supports comparing values with tags of
				 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
				 *
				 * @private
				 * @param {Object} object The object to compare.
				 * @param {Object} other The other object to compare.
				 * @param {string} tag The `toStringTag` of the objects to compare.
				 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
				 * @param {Function} customizer The function to customize comparisons.
				 * @param {Function} equalFunc The function to determine equivalents of values.
				 * @param {Object} stack Tracks traversed `object` and `other` objects.
				 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
				 */
				function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
					switch (tag) {
						case dataViewTag:
							if ((object.byteLength != other.byteLength) ||
								(object.byteOffset != other.byteOffset)) {
								return false;
							}
							object = object.buffer;
							other = other.buffer;

						case arrayBufferTag:
							if ((object.byteLength != other.byteLength) ||
								!equalFunc(new Uint8Array(object), new Uint8Array(other))) {
								return false;
							}
							return true;

						case boolTag:
						case dateTag:
						case numberTag:
							// Coerce booleans to `1` or `0` and dates to milliseconds.
							// Invalid dates are coerced to `NaN`.
							return eq(+object, +other);

						case errorTag:
							return object.name == other.name && object.message == other.message;

						case regexpTag:
						case stringTag:
							// Coerce regexes to strings and treat strings, primitives and objects,
							// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
							// for more details.
							return object == (other + '');

						case mapTag:
							var convert = mapToArray;

						case setTag:
							var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
							convert || (convert = setToArray);

							if (object.size != other.size && !isPartial) {
								return false;
							}
							// Assume cyclic values are equal.
							var stacked = stack.get(object);
							if (stacked) {
								return stacked == other;
							}
							bitmask |= COMPARE_UNORDERED_FLAG;

							// Recursively compare objects (susceptible to call stack limits).
							stack.set(object, other);
							var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
							stack['delete'](object);
							return result;

						case symbolTag:
							if (symbolValueOf) {
								return symbolValueOf.call(object) == symbolValueOf.call(other);
							}
					}
					return false;
				}

				module.exports = equalByTag;


				/***/
			}),
/* 439 */
/***/ (function (module, exports, __webpack_require__) {

				var getAllKeys = __webpack_require__(440);

				/** Used to compose bitmasks for value comparisons. */
				var COMPARE_PARTIAL_FLAG = 1;

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/**
				 * A specialized version of `baseIsEqualDeep` for objects with support for
				 * partial deep comparisons.
				 *
				 * @private
				 * @param {Object} object The object to compare.
				 * @param {Object} other The other object to compare.
				 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
				 * @param {Function} customizer The function to customize comparisons.
				 * @param {Function} equalFunc The function to determine equivalents of values.
				 * @param {Object} stack Tracks traversed `object` and `other` objects.
				 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
				 */
				function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
					var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
						objProps = getAllKeys(object),
						objLength = objProps.length,
						othProps = getAllKeys(other),
						othLength = othProps.length;

					if (objLength != othLength && !isPartial) {
						return false;
					}
					var index = objLength;
					while (index--) {
						var key = objProps[index];
						if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
							return false;
						}
					}
					// Assume cyclic values are equal.
					var stacked = stack.get(object);
					if (stacked && stack.get(other)) {
						return stacked == other;
					}
					var result = true;
					stack.set(object, other);
					stack.set(other, object);

					var skipCtor = isPartial;
					while (++index < objLength) {
						key = objProps[index];
						var objValue = object[key],
							othValue = other[key];

						if (customizer) {
							var compared = isPartial
								? customizer(othValue, objValue, key, other, object, stack)
								: customizer(objValue, othValue, key, object, other, stack);
						}
						// Recursively compare objects (susceptible to call stack limits).
						if (!(compared === undefined
							? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
							: compared
						)) {
							result = false;
							break;
						}
						skipCtor || (skipCtor = key == 'constructor');
					}
					if (result && !skipCtor) {
						var objCtor = object.constructor,
							othCtor = other.constructor;

						// Non `Object` object instances with different constructors are not equal.
						if (objCtor != othCtor &&
							('constructor' in object && 'constructor' in other) &&
							!(typeof objCtor == 'function' && objCtor instanceof objCtor &&
								typeof othCtor == 'function' && othCtor instanceof othCtor)) {
							result = false;
						}
					}
					stack['delete'](object);
					stack['delete'](other);
					return result;
				}

				module.exports = equalObjects;


				/***/
			}),
/* 440 */
/***/ (function (module, exports, __webpack_require__) {

				var baseGetAllKeys = __webpack_require__(416),
					getSymbols = __webpack_require__(443),
					keys = __webpack_require__(98);

				/**
				 * Creates an array of own enumerable property names and symbols of `object`.
				 *
				 * @private
				 * @param {Object} object The object to query.
				 * @returns {Array} Returns the array of property names and symbols.
				 */
				function getAllKeys(object) {
					return baseGetAllKeys(object, keys, getSymbols);
				}

				module.exports = getAllKeys;


				/***/
			}),
/* 441 */
/***/ (function (module, exports, __webpack_require__) {

				var isStrictComparable = __webpack_require__(175),
					keys = __webpack_require__(98);

				/**
				 * Gets the property names, values, and compare flags of `object`.
				 *
				 * @private
				 * @param {Object} object The object to query.
				 * @returns {Array} Returns the match data of `object`.
				 */
				function getMatchData(object) {
					var result = keys(object),
						length = result.length;

					while (length--) {
						var key = result[length],
							value = object[key];

						result[length] = [key, value, isStrictComparable(value)];
					}
					return result;
				}

				module.exports = getMatchData;


				/***/
			}),
			/* 442 */
			[1874, 61],
/* 443 */
/***/ (function (module, exports, __webpack_require__) {

				var arrayFilter = __webpack_require__(406),
					stubArray = __webpack_require__(486);

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Built-in value references. */
				var propertyIsEnumerable = objectProto.propertyIsEnumerable;

				/* Built-in method references for those with the same name as other `lodash` methods. */
				var nativeGetSymbols = Object.getOwnPropertySymbols;

				/**
				 * Creates an array of the own enumerable symbols of `object`.
				 *
				 * @private
				 * @param {Object} object The object to query.
				 * @returns {Array} Returns the array of symbols.
				 */
				var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
					if (object == null) {
						return [];
					}
					object = Object(object);
					return arrayFilter(nativeGetSymbols(object), function (symbol) {
						return propertyIsEnumerable.call(object, symbol);
					});
				};

				module.exports = getSymbols;


				/***/
			}),
/* 444 */
/***/ (function (module, exports, __webpack_require__) {

				var DataView = __webpack_require__(398),
					Map = __webpack_require__(92),
					Promise = __webpack_require__(400),
					Set = __webpack_require__(401),
					WeakMap = __webpack_require__(404),
					baseGetTag = __webpack_require__(41),
					toSource = __webpack_require__(177);

				/** `Object#toString` result references. */
				var mapTag = '[object Map]',
					objectTag = '[object Object]',
					promiseTag = '[object Promise]',
					setTag = '[object Set]',
					weakMapTag = '[object WeakMap]';

				var dataViewTag = '[object DataView]';

				/** Used to detect maps, sets, and weakmaps. */
				var dataViewCtorString = toSource(DataView),
					mapCtorString = toSource(Map),
					promiseCtorString = toSource(Promise),
					setCtorString = toSource(Set),
					weakMapCtorString = toSource(WeakMap);

				/**
				 * Gets the `toStringTag` of `value`.
				 *
				 * @private
				 * @param {*} value The value to query.
				 * @returns {string} Returns the `toStringTag`.
				 */
				var getTag = baseGetTag;

				// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
				if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
					(Map && getTag(new Map) != mapTag) ||
					(Promise && getTag(Promise.resolve()) != promiseTag) ||
					(Set && getTag(new Set) != setTag) ||
					(WeakMap && getTag(new WeakMap) != weakMapTag)) {
					getTag = function (value) {
						var result = baseGetTag(value),
							Ctor = result == objectTag ? value.constructor : undefined,
							ctorString = Ctor ? toSource(Ctor) : '';

						if (ctorString) {
							switch (ctorString) {
								case dataViewCtorString: return dataViewTag;
								case mapCtorString: return mapTag;
								case promiseCtorString: return promiseTag;
								case setCtorString: return setTag;
								case weakMapCtorString: return weakMapTag;
							}
						}
						return result;
					};
				}

				module.exports = getTag;


				/***/
			}),
			/* 445 */
			322,
/* 446 */
/***/ (function (module, exports, __webpack_require__) {

				var castPath = __webpack_require__(171),
					isArguments = __webpack_require__(179),
					isArray = __webpack_require__(20),
					isIndex = __webpack_require__(174),
					isLength = __webpack_require__(95),
					toKey = __webpack_require__(65);

				/**
				 * Checks if `path` exists on `object`.
				 *
				 * @private
				 * @param {Object} object The object to query.
				 * @param {Array|string} path The path to check.
				 * @param {Function} hasFunc The function to check properties.
				 * @returns {boolean} Returns `true` if `path` exists, else `false`.
				 */
				function hasPath(object, path, hasFunc) {
					path = castPath(path, object);

					var index = -1,
						length = path.length,
						result = false;

					while (++index < length) {
						var key = toKey(path[index]);
						if (!(result = object != null && hasFunc(object, key))) {
							break;
						}
						object = object[key];
					}
					if (result || ++index != length) {
						return result;
					}
					length = object == null ? 0 : object.length;
					return !!length && isLength(length) && isIndex(key, length) &&
						(isArray(object) || isArguments(object));
				}

				module.exports = hasPath;


				/***/
			}),
			/* 447 */
			[1878, 64],
			/* 448 */
			324,
			/* 449 */
			[1881, 64],
			/* 450 */
			[1884, 64],
			/* 451 */
			[1889, 64],
			/* 452 */
			329,
			/* 453 */
			[1891, 433],
			/* 454 */
			201,
			/* 455 */
			331,
			/* 456 */
			[1896, 62],
			/* 457 */
			[1898, 62],
			/* 458 */
			[1901, 62],
			/* 459 */
			[1904, 62],
			/* 460 */
			[1907, 399, 60, 92],
			/* 461 */
			[1911, 63],
			/* 462 */
			[1914, 63],
			/* 463 */
			[1917, 63],
			/* 464 */
			[1919, 63],
/* 465 */
/***/ (function (module, exports) {

				/**
				 * Converts `map` to its key-value pairs.
				 *
				 * @private
				 * @param {Object} map The map to convert.
				 * @returns {Array} Returns the key-value pairs.
				 */
				function mapToArray(map) {
					var index = -1,
						result = Array(map.size);

					map.forEach(function (value, key) {
						result[++index] = [key, value];
					});
					return result;
				}

				module.exports = mapToArray;


				/***/
			}),
/* 466 */
/***/ (function (module, exports, __webpack_require__) {

				var memoize = __webpack_require__(484);

				/** Used as the maximum memoize cache size. */
				var MAX_MEMOIZE_SIZE = 500;

				/**
				 * A specialized version of `_.memoize` which clears the memoized function's
				 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
				 *
				 * @private
				 * @param {Function} func The function to have its output memoized.
				 * @returns {Function} Returns the new memoized function.
				 */
				function memoizeCapped(func) {
					var result = memoize(func, function (key) {
						if (cache.size === MAX_MEMOIZE_SIZE) {
							cache.clear();
						}
						return key;
					});

					var cache = result.cache;
					return result;
				}

				module.exports = memoizeCapped;


				/***/
			}),
/* 467 */
/***/ (function (module, exports, __webpack_require__) {

				var overArg = __webpack_require__(470);

				/* Built-in method references for those with the same name as other `lodash` methods. */
				var nativeKeys = overArg(Object.keys, Object);

				module.exports = nativeKeys;


				/***/
			}),
			/* 468 */
			[1929, 173],
			/* 469 */
			343,
			/* 470 */
			202,
			/* 471 */
			345,
			/* 472 */
			346,
			/* 473 */
			115,
/* 474 */
/***/ (function (module, exports, __webpack_require__) {

				var ListCache = __webpack_require__(60);

				/**
				 * Removes all key-value entries from the stack.
				 *
				 * @private
				 * @name clear
				 * @memberOf Stack
				 */
				function stackClear() {
					this.__data__ = new ListCache;
					this.size = 0;
				}

				module.exports = stackClear;


				/***/
			}),
/* 475 */
/***/ (function (module, exports) {

				/**
				 * Removes `key` and its value from the stack.
				 *
				 * @private
				 * @name delete
				 * @memberOf Stack
				 * @param {string} key The key of the value to remove.
				 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
				 */
				function stackDelete(key) {
					var data = this.__data__,
						result = data['delete'](key);

					this.size = data.size;
					return result;
				}

				module.exports = stackDelete;


				/***/
			}),
/* 476 */
/***/ (function (module, exports) {

				/**
				 * Gets the stack value for `key`.
				 *
				 * @private
				 * @name get
				 * @memberOf Stack
				 * @param {string} key The key of the value to get.
				 * @returns {*} Returns the entry value.
				 */
				function stackGet(key) {
					return this.__data__.get(key);
				}

				module.exports = stackGet;


				/***/
			}),
/* 477 */
/***/ (function (module, exports) {

				/**
				 * Checks if a stack value for `key` exists.
				 *
				 * @private
				 * @name has
				 * @memberOf Stack
				 * @param {string} key The key of the entry to check.
				 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
				 */
				function stackHas(key) {
					return this.__data__.has(key);
				}

				module.exports = stackHas;


				/***/
			}),
/* 478 */
/***/ (function (module, exports, __webpack_require__) {

				var ListCache = __webpack_require__(60),
					Map = __webpack_require__(92),
					MapCache = __webpack_require__(93);

				/** Used as the size to enable large array optimizations. */
				var LARGE_ARRAY_SIZE = 200;

				/**
				 * Sets the stack `key` to `value`.
				 *
				 * @private
				 * @name set
				 * @memberOf Stack
				 * @param {string} key The key of the value to set.
				 * @param {*} value The value to set.
				 * @returns {Object} Returns the stack cache instance.
				 */
				function stackSet(key, value) {
					var data = this.__data__;
					if (data instanceof ListCache) {
						var pairs = data.__data__;
						if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
							pairs.push([key, value]);
							this.size = ++data.size;
							return this;
						}
						data = this.__data__ = new MapCache(pairs);
					}
					data.set(key, value);
					this.size = data.size;
					return this;
				}

				module.exports = stackSet;


				/***/
			}),
/* 479 */
/***/ (function (module, exports, __webpack_require__) {

				var memoizeCapped = __webpack_require__(466);

				/** Used to match property names within property paths. */
				var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

				/** Used to match backslashes in property paths. */
				var reEscapeChar = /\\(\\)?/g;

				/**
				 * Converts `string` to a property path array.
				 *
				 * @private
				 * @param {string} string The string to convert.
				 * @returns {Array} Returns the property path array.
				 */
				var stringToPath = memoizeCapped(function (string) {
					var result = [];
					if (string.charCodeAt(0) === 46 /* . */) {
						result.push('');
					}
					string.replace(rePropName, function (match, number, quote, subString) {
						result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
					});
					return result;
				});

				module.exports = stringToPath;


				/***/
			}),
/* 480 */
/***/ (function (module, exports, __webpack_require__) {

				var baseGet = __webpack_require__(169);

				/**
				 * Gets the value at `path` of `object`. If the resolved value is
				 * `undefined`, the `defaultValue` is returned in its place.
				 *
				 * @static
				 * @memberOf _
				 * @since 3.7.0
				 * @category Object
				 * @param {Object} object The object to query.
				 * @param {Array|string} path The path of the property to get.
				 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
				 * @returns {*} Returns the resolved value.
				 * @example
				 *
				 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
				 *
				 * _.get(object, 'a[0].b.c');
				 * // => 3
				 *
				 * _.get(object, ['a', '0', 'b', 'c']);
				 * // => 3
				 *
				 * _.get(object, 'a.b.c', 'default');
				 * // => 'default'
				 */
				function get(object, path, defaultValue) {
					var result = object == null ? undefined : baseGet(object, path);
					return result === undefined ? defaultValue : result;
				}

				module.exports = get;


				/***/
			}),
/* 481 */
/***/ (function (module, exports, __webpack_require__) {

				var baseAssignValue = __webpack_require__(412),
					createAggregator = __webpack_require__(434);

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/**
				 * Creates an object composed of keys generated from the results of running
				 * each element of `collection` thru `iteratee`. The order of grouped values
				 * is determined by the order they occur in `collection`. The corresponding
				 * value of each key is an array of elements responsible for generating the
				 * key. The iteratee is invoked with one argument: (value).
				 *
				 * @static
				 * @memberOf _
				 * @since 0.1.0
				 * @category Collection
				 * @param {Array|Object} collection The collection to iterate over.
				 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
				 * @returns {Object} Returns the composed aggregate object.
				 * @example
				 *
				 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
				 * // => { '4': [4.2], '6': [6.1, 6.3] }
				 *
				 * // The `_.property` iteratee shorthand.
				 * _.groupBy(['one', 'two', 'three'], 'length');
				 * // => { '3': ['one', 'two'], '5': ['three'] }
				 */
				var groupBy = createAggregator(function (result, value, key) {
					if (hasOwnProperty.call(result, key)) {
						result[key].push(value);
					} else {
						baseAssignValue(result, key, [value]);
					}
				});

				module.exports = groupBy;


				/***/
			}),
/* 482 */
/***/ (function (module, exports, __webpack_require__) {

				var baseHasIn = __webpack_require__(417),
					hasPath = __webpack_require__(446);

				/**
				 * Checks if `path` is a direct or inherited property of `object`.
				 *
				 * @static
				 * @memberOf _
				 * @since 4.0.0
				 * @category Object
				 * @param {Object} object The object to query.
				 * @param {Array|string} path The path to check.
				 * @returns {boolean} Returns `true` if `path` exists, else `false`.
				 * @example
				 *
				 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
				 *
				 * _.hasIn(object, 'a');
				 * // => true
				 *
				 * _.hasIn(object, 'a.b');
				 * // => true
				 *
				 * _.hasIn(object, ['a', 'b']);
				 * // => true
				 *
				 * _.hasIn(object, 'b');
				 * // => false
				 */
				function hasIn(object, path) {
					return object != null && hasPath(object, path, baseHasIn);
				}

				module.exports = hasIn;


				/***/
			}),
			/* 483 */
			75,
			/* 484 */
			[1956, 93],
/* 485 */
/***/ (function (module, exports, __webpack_require__) {

				var baseProperty = __webpack_require__(427),
					basePropertyDeep = __webpack_require__(428),
					isKey = __webpack_require__(94),
					toKey = __webpack_require__(65);

				/**
				 * Creates a function that returns the value at `path` of a given object.
				 *
				 * @static
				 * @memberOf _
				 * @since 2.4.0
				 * @category Util
				 * @param {Array|string} path The path of the property to get.
				 * @returns {Function} Returns the new accessor function.
				 * @example
				 *
				 * var objects = [
				 *   { 'a': { 'b': 2 } },
				 *   { 'a': { 'b': 1 } }
				 * ];
				 *
				 * _.map(objects, _.property('a.b'));
				 * // => [2, 1]
				 *
				 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
				 * // => [1, 2]
				 */
				function property(path) {
					return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
				}

				module.exports = property;


				/***/
			}),
/* 486 */
/***/ (function (module, exports) {

				/**
				 * This method returns a new empty array.
				 *
				 * @static
				 * @memberOf _
				 * @since 4.13.0
				 * @category Util
				 * @returns {Array} Returns the new empty array.
				 * @example
				 *
				 * var arrays = _.times(2, _.stubArray);
				 *
				 * console.log(arrays);
				 * // => [[], []]
				 *
				 * console.log(arrays[0] === arrays[1]);
				 * // => false
				 */
				function stubArray() {
					return [];
				}

				module.exports = stubArray;


				/***/
			}),
			/* 487 */
			353,
/* 488 */
/***/ (function (module, exports, __webpack_require__) {

				var baseToString = __webpack_require__(430);

				/**
				 * Converts `value` to a string. An empty string is returned for `null`
				 * and `undefined` values. The sign of `-0` is preserved.
				 *
				 * @static
				 * @memberOf _
				 * @since 4.0.0
				 * @category Lang
				 * @param {*} value The value to convert.
				 * @returns {string} Returns the converted string.
				 * @example
				 *
				 * _.toString(null);
				 * // => ''
				 *
				 * _.toString(-0);
				 * // => '-0'
				 *
				 * _.toString([1, 2, 3]);
				 * // => '1,2,3'
				 */
				function toString(value) {
					return value == null ? '' : baseToString(value);
				}

				module.exports = toString;


				/***/
			}),
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */,
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */,
/* 994 */,
/* 995 */,
/* 996 */,
/* 997 */,
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */,
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */,
/* 1012 */,
/* 1013 */,
/* 1014 */,
/* 1015 */,
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */,
/* 1021 */,
/* 1022 */,
/* 1023 */,
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */,
/* 1042 */,
/* 1043 */,
/* 1044 */,
/* 1045 */,
/* 1046 */,
/* 1047 */,
/* 1048 */,
/* 1049 */,
/* 1050 */,
/* 1051 */,
/* 1052 */,
/* 1053 */,
/* 1054 */,
/* 1055 */,
/* 1056 */,
/* 1057 */,
/* 1058 */,
/* 1059 */,
/* 1060 */,
/* 1061 */,
/* 1062 */,
/* 1063 */,
/* 1064 */,
/* 1065 */,
/* 1066 */,
/* 1067 */,
/* 1068 */,
/* 1069 */,
/* 1070 */,
/* 1071 */,
/* 1072 */,
/* 1073 */,
/* 1074 */,
/* 1075 */,
/* 1076 */,
/* 1077 */,
/* 1078 */,
/* 1079 */,
/* 1080 */,
/* 1081 */,
/* 1082 */,
/* 1083 */,
/* 1084 */,
/* 1085 */,
/* 1086 */,
/* 1087 */,
/* 1088 */,
/* 1089 */,
/* 1090 */,
/* 1091 */,
/* 1092 */,
/* 1093 */,
/* 1094 */,
/* 1095 */,
/* 1096 */,
/* 1097 */,
/* 1098 */,
/* 1099 */,
/* 1100 */,
/* 1101 */,
/* 1102 */,
/* 1103 */,
/* 1104 */,
/* 1105 */,
/* 1106 */,
/* 1107 */,
/* 1108 */,
/* 1109 */,
/* 1110 */,
/* 1111 */,
/* 1112 */,
/* 1113 */,
/* 1114 */,
/* 1115 */,
/* 1116 */,
/* 1117 */,
/* 1118 */,
/* 1119 */,
/* 1120 */,
/* 1121 */,
/* 1122 */,
/* 1123 */,
/* 1124 */,
/* 1125 */,
/* 1126 */,
/* 1127 */,
/* 1128 */,
/* 1129 */,
/* 1130 */,
/* 1131 */,
/* 1132 */,
/* 1133 */,
/* 1134 */,
/* 1135 */,
/* 1136 */,
/* 1137 */,
/* 1138 */,
/* 1139 */,
/* 1140 */,
/* 1141 */,
/* 1142 */,
/* 1143 */,
/* 1144 */,
/* 1145 */,
/* 1146 */,
/* 1147 */,
/* 1148 */,
/* 1149 */,
/* 1150 */,
/* 1151 */,
/* 1152 */,
/* 1153 */,
/* 1154 */,
/* 1155 */,
/* 1156 */,
/* 1157 */,
/* 1158 */,
/* 1159 */,
/* 1160 */,
/* 1161 */,
/* 1162 */,
/* 1163 */,
/* 1164 */,
/* 1165 */,
/* 1166 */,
/* 1167 */,
/* 1168 */,
/* 1169 */,
/* 1170 */,
/* 1171 */,
/* 1172 */,
/* 1173 */,
/* 1174 */,
/* 1175 */,
/* 1176 */,
/* 1177 */,
/* 1178 */,
/* 1179 */,
/* 1180 */,
/* 1181 */,
/* 1182 */,
/* 1183 */,
/* 1184 */,
/* 1185 */,
/* 1186 */,
/* 1187 */,
/* 1188 */,
/* 1189 */,
/* 1190 */,
/* 1191 */,
/* 1192 */,
/* 1193 */,
/* 1194 */,
/* 1195 */,
/* 1196 */,
/* 1197 */,
/* 1198 */,
/* 1199 */,
/* 1200 */,
/* 1201 */,
/* 1202 */,
/* 1203 */,
/* 1204 */,
/* 1205 */,
/* 1206 */,
/* 1207 */,
/* 1208 */,
/* 1209 */,
/* 1210 */,
/* 1211 */,
/* 1212 */,
/* 1213 */,
/* 1214 */,
/* 1215 */,
/* 1216 */,
/* 1217 */,
/* 1218 */,
/* 1219 */,
/* 1220 */,
/* 1221 */,
/* 1222 */,
/* 1223 */,
/* 1224 */,
/* 1225 */,
/* 1226 */,
/* 1227 */,
/* 1228 */,
/* 1229 */,
/* 1230 */,
/* 1231 */,
/* 1232 */,
/* 1233 */,
/* 1234 */,
/* 1235 */,
/* 1236 */,
/* 1237 */,
/* 1238 */,
/* 1239 */,
/* 1240 */,
/* 1241 */,
/* 1242 */,
/* 1243 */,
/* 1244 */,
/* 1245 */,
/* 1246 */,
/* 1247 */,
/* 1248 */,
/* 1249 */,
/* 1250 */,
/* 1251 */,
/* 1252 */,
/* 1253 */,
/* 1254 */,
/* 1255 */,
/* 1256 */,
/* 1257 */,
/* 1258 */,
/* 1259 */,
/* 1260 */,
/* 1261 */,
/* 1262 */,
/* 1263 */,
/* 1264 */,
/* 1265 */,
/* 1266 */,
/* 1267 */,
/* 1268 */,
/* 1269 */,
/* 1270 */,
/* 1271 */,
/* 1272 */,
/* 1273 */,
/* 1274 */,
/* 1275 */,
/* 1276 */,
/* 1277 */,
/* 1278 */,
/* 1279 */,
/* 1280 */,
/* 1281 */,
/* 1282 */,
/* 1283 */,
/* 1284 */,
/* 1285 */,
/* 1286 */,
/* 1287 */,
/* 1288 */,
/* 1289 */,
/* 1290 */,
/* 1291 */,
/* 1292 */,
/* 1293 */,
/* 1294 */,
/* 1295 */,
/* 1296 */,
/* 1297 */,
/* 1298 */,
/* 1299 */,
/* 1300 */,
/* 1301 */,
/* 1302 */,
/* 1303 */,
/* 1304 */,
/* 1305 */,
/* 1306 */,
/* 1307 */,
/* 1308 */,
/* 1309 */,
/* 1310 */,
/* 1311 */,
/* 1312 */,
/* 1313 */,
/* 1314 */,
/* 1315 */,
/* 1316 */,
/* 1317 */,
/* 1318 */,
/* 1319 */,
/* 1320 */,
/* 1321 */,
/* 1322 */,
/* 1323 */,
/* 1324 */,
/* 1325 */,
/* 1326 */,
/* 1327 */,
/* 1328 */,
/* 1329 */,
/* 1330 */,
/* 1331 */,
/* 1332 */,
/* 1333 */,
/* 1334 */,
/* 1335 */,
/* 1336 */,
/* 1337 */,
/* 1338 */,
/* 1339 */,
/* 1340 */,
/* 1341 */,
/* 1342 */,
/* 1343 */,
/* 1344 */,
/* 1345 */,
/* 1346 */,
/* 1347 */,
/* 1348 */,
/* 1349 */,
/* 1350 */,
/* 1351 */,
/* 1352 */,
/* 1353 */,
/* 1354 */,
/* 1355 */,
/* 1356 */,
/* 1357 */,
/* 1358 */,
/* 1359 */,
/* 1360 */,
/* 1361 */,
/* 1362 */,
/* 1363 */,
/* 1364 */,
/* 1365 */,
/* 1366 */,
/* 1367 */,
/* 1368 */,
/* 1369 */,
/* 1370 */,
/* 1371 */,
/* 1372 */,
/* 1373 */,
/* 1374 */,
/* 1375 */,
/* 1376 */,
/* 1377 */,
/* 1378 */,
/* 1379 */,
/* 1380 */,
/* 1381 */,
/* 1382 */,
/* 1383 */,
/* 1384 */,
/* 1385 */,
/* 1386 */,
/* 1387 */,
/* 1388 */,
/* 1389 */,
/* 1390 */,
/* 1391 */,
/* 1392 */,
/* 1393 */,
/* 1394 */,
/* 1395 */,
/* 1396 */,
/* 1397 */,
/* 1398 */,
/* 1399 */,
/* 1400 */,
/* 1401 */,
/* 1402 */,
/* 1403 */,
/* 1404 */,
/* 1405 */,
/* 1406 */,
/* 1407 */,
/* 1408 */,
/* 1409 */,
/* 1410 */,
/* 1411 */,
/* 1412 */,
/* 1413 */,
/* 1414 */,
/* 1415 */,
/* 1416 */,
/* 1417 */,
/* 1418 */,
/* 1419 */,
/* 1420 */,
/* 1421 */,
/* 1422 */,
/* 1423 */,
/* 1424 */,
/* 1425 */,
/* 1426 */,
/* 1427 */,
/* 1428 */,
/* 1429 */,
/* 1430 */,
/* 1431 */,
/* 1432 */,
/* 1433 */,
/* 1434 */,
/* 1435 */,
/* 1436 */,
/* 1437 */,
/* 1438 */,
/* 1439 */,
/* 1440 */,
/* 1441 */,
/* 1442 */,
/* 1443 */,
/* 1444 */,
/* 1445 */,
/* 1446 */,
/* 1447 */,
/* 1448 */,
/* 1449 */,
/* 1450 */,
/* 1451 */,
/* 1452 */,
/* 1453 */,
/* 1454 */,
/* 1455 */,
/* 1456 */,
/* 1457 */,
/* 1458 */,
/* 1459 */,
/* 1460 */,
/* 1461 */,
/* 1462 */,
/* 1463 */,
/* 1464 */,
/* 1465 */,
/* 1466 */,
/* 1467 */,
/* 1468 */,
/* 1469 */,
/* 1470 */,
/* 1471 */,
/* 1472 */,
/* 1473 */,
/* 1474 */,
/* 1475 */,
/* 1476 */,
/* 1477 */,
/* 1478 */,
/* 1479 */,
/* 1480 */,
/* 1481 */,
/* 1482 */,
/* 1483 */,
/* 1484 */,
/* 1485 */,
/* 1486 */,
/* 1487 */,
/* 1488 */,
/* 1489 */,
/* 1490 */,
/* 1491 */,
/* 1492 */,
/* 1493 */,
/* 1494 */,
/* 1495 */,
/* 1496 */,
/* 1497 */,
/* 1498 */,
/* 1499 */,
/* 1500 */,
/* 1501 */,
/* 1502 */,
/* 1503 */,
/* 1504 */,
/* 1505 */,
/* 1506 */,
/* 1507 */,
/* 1508 */,
/* 1509 */,
/* 1510 */,
/* 1511 */,
/* 1512 */,
/* 1513 */,
/* 1514 */,
/* 1515 */,
/* 1516 */,
/* 1517 */,
/* 1518 */,
/* 1519 */,
/* 1520 */,
/* 1521 */,
/* 1522 */,
/* 1523 */,
/* 1524 */,
/* 1525 */,
/* 1526 */,
/* 1527 */,
/* 1528 */,
/* 1529 */,
/* 1530 */,
/* 1531 */,
/* 1532 */,
/* 1533 */,
/* 1534 */,
/* 1535 */,
/* 1536 */,
/* 1537 */,
/* 1538 */,
/* 1539 */,
/* 1540 */,
/* 1541 */,
/* 1542 */,
/* 1543 */,
/* 1544 */,
/* 1545 */,
/* 1546 */,
/* 1547 */,
/* 1548 */,
/* 1549 */,
/* 1550 */,
/* 1551 */,
/* 1552 */,
/* 1553 */,
/* 1554 */,
/* 1555 */,
/* 1556 */,
/* 1557 */,
/* 1558 */,
/* 1559 */,
/* 1560 */,
/* 1561 */,
/* 1562 */,
/* 1563 */,
/* 1564 */,
/* 1565 */,
/* 1566 */,
/* 1567 */,
/* 1568 */,
/* 1569 */,
/* 1570 */,
/* 1571 */,
/* 1572 */,
/* 1573 */,
/* 1574 */,
/* 1575 */,
/* 1576 */,
/* 1577 */,
/* 1578 */,
/* 1579 */,
/* 1580 */,
/* 1581 */,
/* 1582 */,
/* 1583 */,
/* 1584 */,
/* 1585 */,
/* 1586 */,
/* 1587 */,
/* 1588 */,
/* 1589 */,
/* 1590 */,
/* 1591 */,
/* 1592 */,
/* 1593 */,
/* 1594 */,
/* 1595 */,
/* 1596 */,
/* 1597 */,
/* 1598 */,
/* 1599 */,
/* 1600 */,
/* 1601 */,
/* 1602 */,
/* 1603 */,
/* 1604 */,
/* 1605 */,
/* 1606 */,
/* 1607 */,
/* 1608 */,
/* 1609 */,
/* 1610 */,
/* 1611 */,
/* 1612 */,
/* 1613 */,
/* 1614 */,
/* 1615 */,
/* 1616 */,
/* 1617 */,
/* 1618 */,
/* 1619 */,
/* 1620 */,
/* 1621 */,
/* 1622 */,
/* 1623 */,
/* 1624 */,
/* 1625 */,
/* 1626 */,
/* 1627 */,
/* 1628 */,
/* 1629 */,
/* 1630 */,
/* 1631 */,
/* 1632 */,
/* 1633 */,
/* 1634 */,
/* 1635 */,
/* 1636 */,
/* 1637 */,
/* 1638 */,
/* 1639 */,
/* 1640 */,
/* 1641 */,
/* 1642 */,
/* 1643 */,
/* 1644 */,
/* 1645 */,
/* 1646 */,
/* 1647 */,
/* 1648 */,
/* 1649 */,
/* 1650 */,
/* 1651 */,
/* 1652 */,
/* 1653 */,
/* 1654 */,
/* 1655 */,
/* 1656 */,
/* 1657 */,
/* 1658 */,
/* 1659 */,
/* 1660 */,
/* 1661 */,
/* 1662 */,
/* 1663 */,
/* 1664 */,
/* 1665 */,
/* 1666 */,
/* 1667 */,
/* 1668 */,
/* 1669 */,
/* 1670 */,
/* 1671 */,
/* 1672 */,
/* 1673 */,
/* 1674 */,
/* 1675 */,
/* 1676 */,
/* 1677 */,
/* 1678 */,
/* 1679 */,
/* 1680 */,
/* 1681 */,
/* 1682 */,
/* 1683 */,
/* 1684 */,
/* 1685 */,
/* 1686 */,
/* 1687 */,
/* 1688 */,
/* 1689 */,
/* 1690 */,
/* 1691 */,
/* 1692 */,
/* 1693 */,
/* 1694 */,
/* 1695 */,
/* 1696 */,
/* 1697 */,
/* 1698 */,
/* 1699 */,
/* 1700 */,
/* 1701 */,
/* 1702 */,
/* 1703 */,
/* 1704 */,
/* 1705 */,
/* 1706 */,
/* 1707 */,
/* 1708 */,
/* 1709 */,
/* 1710 */,
/* 1711 */,
/* 1712 */,
/* 1713 */,
/* 1714 */,
/* 1715 */,
/* 1716 */,
/* 1717 */,
/* 1718 */,
/* 1719 */,
/* 1720 */,
/* 1721 */,
/* 1722 */,
/* 1723 */,
/* 1724 */,
/* 1725 */,
/* 1726 */,
/* 1727 */,
/* 1728 */,
/* 1729 */,
/* 1730 */,
/* 1731 */,
/* 1732 */,
/* 1733 */,
/* 1734 */,
/* 1735 */,
/* 1736 */,
/* 1737 */,
/* 1738 */,
/* 1739 */,
/* 1740 */,
/* 1741 */,
/* 1742 */,
/* 1743 */,
/* 1744 */,
/* 1745 */,
/* 1746 */,
/* 1747 */,
/* 1748 */,
/* 1749 */,
/* 1750 */,
/* 1751 */,
/* 1752 */,
/* 1753 */,
/* 1754 */,
/* 1755 */,
/* 1756 */,
/* 1757 */,
/* 1758 */,
/* 1759 */,
/* 1760 */,
/* 1761 */,
/* 1762 */,
/* 1763 */,
/* 1764 */,
/* 1765 */,
/* 1766 */,
/* 1767 */,
/* 1768 */,
/* 1769 */,
/* 1770 */,
/* 1771 */,
/* 1772 */,
/* 1773 */,
/* 1774 */,
/* 1775 */,
/* 1776 */,
/* 1777 */,
/* 1778 */,
/* 1779 */,
/* 1780 */,
/* 1781 */,
/* 1782 */,
/* 1783 */,
/* 1784 */,
/* 1785 */,
/* 1786 */,
/* 1787 */,
/* 1788 */,
/* 1789 */,
/* 1790 */,
/* 1791 */,
/* 1792 */,
/* 1793 */,
/* 1794 */,
/* 1795 */,
/* 1796 */,
/* 1797 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

				var hashClear = __webpack_require__(__webpack_module_template_argument_0__),
					hashDelete = __webpack_require__(__webpack_module_template_argument_1__),
					hashGet = __webpack_require__(__webpack_module_template_argument_2__),
					hashHas = __webpack_require__(__webpack_module_template_argument_3__),
					hashSet = __webpack_require__(__webpack_module_template_argument_4__);

				/**
				 * Creates a hash object.
				 *
				 * @private
				 * @constructor
				 * @param {Array} [entries] The key-value pairs to cache.
				 */
				function Hash(entries) {
					var index = -1,
						length = entries == null ? 0 : entries.length;

					this.clear();
					while (++index < length) {
						var entry = entries[index];
						this.set(entry[0], entry[1]);
					}
				}

				// Add methods to `Hash`.
				Hash.prototype.clear = hashClear;
				Hash.prototype['delete'] = hashDelete;
				Hash.prototype.get = hashGet;
				Hash.prototype.has = hashHas;
				Hash.prototype.set = hashSet;

				module.exports = Hash;


				/***/
			}),
/* 1798 */,
/* 1799 */,
/* 1800 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

				var listCacheClear = __webpack_require__(__webpack_module_template_argument_0__),
					listCacheDelete = __webpack_require__(__webpack_module_template_argument_1__),
					listCacheGet = __webpack_require__(__webpack_module_template_argument_2__),
					listCacheHas = __webpack_require__(__webpack_module_template_argument_3__),
					listCacheSet = __webpack_require__(__webpack_module_template_argument_4__);

				/**
				 * Creates an list cache object.
				 *
				 * @private
				 * @constructor
				 * @param {Array} [entries] The key-value pairs to cache.
				 */
				function ListCache(entries) {
					var index = -1,
						length = entries == null ? 0 : entries.length;

					this.clear();
					while (++index < length) {
						var entry = entries[index];
						this.set(entry[0], entry[1]);
					}
				}

				// Add methods to `ListCache`.
				ListCache.prototype.clear = listCacheClear;
				ListCache.prototype['delete'] = listCacheDelete;
				ListCache.prototype.get = listCacheGet;
				ListCache.prototype.has = listCacheHas;
				ListCache.prototype.set = listCacheSet;

				module.exports = ListCache;


				/***/
			}),
/* 1801 */,
/* 1802 */,
/* 1803 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

				var getNative = __webpack_require__(__webpack_module_template_argument_0__),
					root = __webpack_require__(__webpack_module_template_argument_1__);

				/* Built-in method references that are verified to be native. */
				var Map = getNative(root, 'Map');

				module.exports = Map;


				/***/
			}),
/* 1804 */,
/* 1805 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

				var mapCacheClear = __webpack_require__(__webpack_module_template_argument_0__),
					mapCacheDelete = __webpack_require__(__webpack_module_template_argument_1__),
					mapCacheGet = __webpack_require__(__webpack_module_template_argument_2__),
					mapCacheHas = __webpack_require__(__webpack_module_template_argument_3__),
					mapCacheSet = __webpack_require__(__webpack_module_template_argument_4__);

				/**
				 * Creates a map cache object to store key-value pairs.
				 *
				 * @private
				 * @constructor
				 * @param {Array} [entries] The key-value pairs to cache.
				 */
				function MapCache(entries) {
					var index = -1,
						length = entries == null ? 0 : entries.length;

					this.clear();
					while (++index < length) {
						var entry = entries[index];
						this.set(entry[0], entry[1]);
					}
				}

				// Add methods to `MapCache`.
				MapCache.prototype.clear = mapCacheClear;
				MapCache.prototype['delete'] = mapCacheDelete;
				MapCache.prototype.get = mapCacheGet;
				MapCache.prototype.has = mapCacheHas;
				MapCache.prototype.set = mapCacheSet;

				module.exports = MapCache;


				/***/
			}),
/* 1806 */,
/* 1807 */,
/* 1808 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

				var getNative = __webpack_require__(__webpack_module_template_argument_0__),
					root = __webpack_require__(__webpack_module_template_argument_1__);

				/* Built-in method references that are verified to be native. */
				var Set = getNative(root, 'Set');

				module.exports = Set;


				/***/
			}),
/* 1809 */,
/* 1810 */,
/* 1811 */,
/* 1812 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

				var MapCache = __webpack_require__(__webpack_module_template_argument_0__),
					setCacheAdd = __webpack_require__(__webpack_module_template_argument_1__),
					setCacheHas = __webpack_require__(__webpack_module_template_argument_2__);

				/**
				 *
				 * Creates an array cache object to store unique values.
				 *
				 * @private
				 * @constructor
				 * @param {Array} [values] The values to cache.
				 */
				function SetCache(values) {
					var index = -1,
						length = values == null ? 0 : values.length;

					this.__data__ = new MapCache;
					while (++index < length) {
						this.add(values[index]);
					}
				}

				// Add methods to `SetCache`.
				SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
				SetCache.prototype.has = setCacheHas;

				module.exports = SetCache;


				/***/
			}),
/* 1813 */,
/* 1814 */,
/* 1815 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var root = __webpack_require__(__webpack_module_template_argument_0__);

				/** Built-in value references. */
				var Symbol = root.Symbol;

				module.exports = Symbol;


				/***/
			}),
/* 1816 */,
/* 1817 */,
/* 1818 */,
/* 1819 */,
/* 1820 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__) {

				var baseTimes = __webpack_require__(__webpack_module_template_argument_0__),
					isArguments = __webpack_require__(__webpack_module_template_argument_1__),
					isArray = __webpack_require__(__webpack_module_template_argument_2__),
					isBuffer = __webpack_require__(__webpack_module_template_argument_3__),
					isIndex = __webpack_require__(__webpack_module_template_argument_4__),
					isTypedArray = __webpack_require__(__webpack_module_template_argument_5__);

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/**
				 * Creates an array of the enumerable property names of the array-like `value`.
				 *
				 * @private
				 * @param {*} value The value to query.
				 * @param {boolean} inherited Specify returning inherited property names.
				 * @returns {Array} Returns the array of property names.
				 */
				function arrayLikeKeys(value, inherited) {
					var isArr = isArray(value),
						isArg = !isArr && isArguments(value),
						isBuff = !isArr && !isArg && isBuffer(value),
						isType = !isArr && !isArg && !isBuff && isTypedArray(value),
						skipIndexes = isArr || isArg || isBuff || isType,
						result = skipIndexes ? baseTimes(value.length, String) : [],
						length = result.length;

					for (var key in value) {
						if ((inherited || hasOwnProperty.call(value, key)) &&
							!(skipIndexes && (
								// Safari 9 has enumerable `arguments.length` in strict mode.
								key == 'length' ||
								// Node.js 0.10 has enumerable non-index properties on buffers.
								(isBuff && (key == 'offset' || key == 'parent')) ||
								// PhantomJS 2 has enumerable non-index properties on typed arrays.
								(isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
								// Skip index properties.
								isIndex(key, length)
							))) {
							result.push(key);
						}
					}
					return result;
				}

				module.exports = arrayLikeKeys;


				/***/
			}),
/* 1821 */,
/* 1822 */,
/* 1823 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var eq = __webpack_require__(__webpack_module_template_argument_0__);

				/**
				 * Gets the index at which the `key` is found in `array` of key-value pairs.
				 *
				 * @private
				 * @param {Array} array The array to inspect.
				 * @param {*} key The key to search for.
				 * @returns {number} Returns the index of the matched value, else `-1`.
				 */
				function assocIndexOf(array, key) {
					var length = array.length;
					while (length--) {
						if (eq(array[length][0], key)) {
							return length;
						}
					}
					return -1;
				}

				module.exports = assocIndexOf;


				/***/
			}),
/* 1824 */,
/* 1825 */,
/* 1826 */,
/* 1827 */,
/* 1828 */,
/* 1829 */,
/* 1830 */,
/* 1831 */,
/* 1832 */,
/* 1833 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

				var Symbol = __webpack_require__(__webpack_module_template_argument_0__),
					getRawTag = __webpack_require__(__webpack_module_template_argument_1__),
					objectToString = __webpack_require__(__webpack_module_template_argument_2__);

				/** `Object#toString` result references. */
				var nullTag = '[object Null]',
					undefinedTag = '[object Undefined]';

				/** Built-in value references. */
				var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

				/**
				 * The base implementation of `getTag` without fallbacks for buggy environments.
				 *
				 * @private
				 * @param {*} value The value to query.
				 * @returns {string} Returns the `toStringTag`.
				 */
				function baseGetTag(value) {
					if (value == null) {
						return value === undefined ? undefinedTag : nullTag;
					}
					return (symToStringTag && symToStringTag in Object(value))
						? getRawTag(value)
						: objectToString(value);
				}

				module.exports = baseGetTag;


				/***/
			}),
/* 1834 */,
/* 1835 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

				var baseGetTag = __webpack_require__(__webpack_module_template_argument_0__),
					isObjectLike = __webpack_require__(__webpack_module_template_argument_1__);

				/** `Object#toString` result references. */
				var argsTag = '[object Arguments]';

				/**
				 * The base implementation of `_.isArguments`.
				 *
				 * @private
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
				 */
				function baseIsArguments(value) {
					return isObjectLike(value) && baseGetTag(value) == argsTag;
				}

				module.exports = baseIsArguments;


				/***/
			}),
/* 1836 */,
/* 1837 */,
/* 1838 */,
/* 1839 */,
/* 1840 */,
/* 1841 */,
/* 1842 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

				var isFunction = __webpack_require__(__webpack_module_template_argument_0__),
					isMasked = __webpack_require__(__webpack_module_template_argument_1__),
					isObject = __webpack_require__(__webpack_module_template_argument_2__),
					toSource = __webpack_require__(__webpack_module_template_argument_3__);

				/**
				 * Used to match `RegExp`
				 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
				 */
				var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

				/** Used to detect host constructors (Safari). */
				var reIsHostCtor = /^\[object .+?Constructor\]$/;

				/** Used for built-in method references. */
				var funcProto = Function.prototype,
					objectProto = Object.prototype;

				/** Used to resolve the decompiled source of functions. */
				var funcToString = funcProto.toString;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/** Used to detect if a method is native. */
				var reIsNative = RegExp('^' +
					funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
						.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
				);

				/**
				 * The base implementation of `_.isNative` without bad shim checks.
				 *
				 * @private
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is a native function,
				 *  else `false`.
				 */
				function baseIsNative(value) {
					if (!isObject(value) || isMasked(value)) {
						return false;
					}
					var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
					return pattern.test(toSource(value));
				}

				module.exports = baseIsNative;


				/***/
			}),
/* 1843 */,
/* 1844 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

				var baseGetTag = __webpack_require__(__webpack_module_template_argument_0__),
					isLength = __webpack_require__(__webpack_module_template_argument_1__),
					isObjectLike = __webpack_require__(__webpack_module_template_argument_2__);

				/** `Object#toString` result references. */
				var argsTag = '[object Arguments]',
					arrayTag = '[object Array]',
					boolTag = '[object Boolean]',
					dateTag = '[object Date]',
					errorTag = '[object Error]',
					funcTag = '[object Function]',
					mapTag = '[object Map]',
					numberTag = '[object Number]',
					objectTag = '[object Object]',
					regexpTag = '[object RegExp]',
					setTag = '[object Set]',
					stringTag = '[object String]',
					weakMapTag = '[object WeakMap]';

				var arrayBufferTag = '[object ArrayBuffer]',
					dataViewTag = '[object DataView]',
					float32Tag = '[object Float32Array]',
					float64Tag = '[object Float64Array]',
					int8Tag = '[object Int8Array]',
					int16Tag = '[object Int16Array]',
					int32Tag = '[object Int32Array]',
					uint8Tag = '[object Uint8Array]',
					uint8ClampedTag = '[object Uint8ClampedArray]',
					uint16Tag = '[object Uint16Array]',
					uint32Tag = '[object Uint32Array]';

				/** Used to identify `toStringTag` values of typed arrays. */
				var typedArrayTags = {};
				typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
					typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
					typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
					typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
					typedArrayTags[uint32Tag] = true;
				typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
					typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
					typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
					typedArrayTags[errorTag] = typedArrayTags[funcTag] =
					typedArrayTags[mapTag] = typedArrayTags[numberTag] =
					typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
					typedArrayTags[setTag] = typedArrayTags[stringTag] =
					typedArrayTags[weakMapTag] = false;

				/**
				 * The base implementation of `_.isTypedArray` without Node.js optimizations.
				 *
				 * @private
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
				 */
				function baseIsTypedArray(value) {
					return isObjectLike(value) &&
						isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
				}

				module.exports = baseIsTypedArray;


				/***/
			}),
/* 1845 */,
/* 1846 */,
/* 1847 */,
/* 1848 */,
/* 1849 */,
/* 1850 */,
/* 1851 */,
/* 1852 */,
/* 1853 */,
/* 1854 */,
/* 1855 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var root = __webpack_require__(__webpack_module_template_argument_0__);

				/** Used to detect overreaching core-js shims. */
				var coreJsData = root['__core-js_shared__'];

				module.exports = coreJsData;


				/***/
			}),
/* 1856 */,
/* 1857 */,
/* 1858 */,
/* 1859 */,
/* 1860 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var getNative = __webpack_require__(__webpack_module_template_argument_0__);

				var defineProperty = (function () {
					try {
						var func = getNative(Object, 'defineProperty');
						func({}, '', {});
						return func;
					} catch (e) { }
				}());

				module.exports = defineProperty;


				/***/
			}),
/* 1861 */,
/* 1862 */,
/* 1863 */,
/* 1864 */,
/* 1865 */,
/* 1866 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var isKeyable = __webpack_require__(__webpack_module_template_argument_0__);

				/**
				 * Gets the data for `map`.
				 *
				 * @private
				 * @param {Object} map The map to query.
				 * @param {string} key The reference key.
				 * @returns {*} Returns the map data.
				 */
				function getMapData(map, key) {
					var data = map.__data__;
					return isKeyable(key)
						? data[typeof key == 'string' ? 'string' : 'hash']
						: data.map;
				}

				module.exports = getMapData;


				/***/
			}),
/* 1867 */,
/* 1868 */,
/* 1869 */,
/* 1870 */,
/* 1871 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

				var baseIsNative = __webpack_require__(__webpack_module_template_argument_0__),
					getValue = __webpack_require__(__webpack_module_template_argument_1__);

				/**
				 * Gets the native function at `key` of `object`.
				 *
				 * @private
				 * @param {Object} object The object to query.
				 * @param {string} key The key of the method to get.
				 * @returns {*} Returns the function if it's native, else `undefined`.
				 */
				function getNative(object, key) {
					var value = getValue(object, key);
					return baseIsNative(value) ? value : undefined;
				}

				module.exports = getNative;


				/***/
			}),
/* 1872 */,
/* 1873 */,
/* 1874 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var Symbol = __webpack_require__(__webpack_module_template_argument_0__);

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/**
				 * Used to resolve the
				 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
				 * of values.
				 */
				var nativeObjectToString = objectProto.toString;

				/** Built-in value references. */
				var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

				/**
				 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
				 *
				 * @private
				 * @param {*} value The value to query.
				 * @returns {string} Returns the raw `toStringTag`.
				 */
				function getRawTag(value) {
					var isOwn = hasOwnProperty.call(value, symToStringTag),
						tag = value[symToStringTag];

					try {
						value[symToStringTag] = undefined;
						var unmasked = true;
					} catch (e) { }

					var result = nativeObjectToString.call(value);
					if (unmasked) {
						if (isOwn) {
							value[symToStringTag] = tag;
						} else {
							delete value[symToStringTag];
						}
					}
					return result;
				}

				module.exports = getRawTag;


				/***/
			}),
/* 1875 */,
/* 1876 */,
/* 1877 */,
/* 1878 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var nativeCreate = __webpack_require__(__webpack_module_template_argument_0__);

				/**
				 * Removes all key-value entries from the hash.
				 *
				 * @private
				 * @name clear
				 * @memberOf Hash
				 */
				function hashClear() {
					this.__data__ = nativeCreate ? nativeCreate(null) : {};
					this.size = 0;
				}

				module.exports = hashClear;


				/***/
			}),
/* 1879 */,
/* 1880 */,
/* 1881 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var nativeCreate = __webpack_require__(__webpack_module_template_argument_0__);

				/** Used to stand-in for `undefined` hash values. */
				var HASH_UNDEFINED = '__lodash_hash_undefined__';

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/**
				 * Gets the hash value for `key`.
				 *
				 * @private
				 * @name get
				 * @memberOf Hash
				 * @param {string} key The key of the value to get.
				 * @returns {*} Returns the entry value.
				 */
				function hashGet(key) {
					var data = this.__data__;
					if (nativeCreate) {
						var result = data[key];
						return result === HASH_UNDEFINED ? undefined : result;
					}
					return hasOwnProperty.call(data, key) ? data[key] : undefined;
				}

				module.exports = hashGet;


				/***/
			}),
/* 1882 */,
/* 1883 */,
/* 1884 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var nativeCreate = __webpack_require__(__webpack_module_template_argument_0__);

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/**
				 * Checks if a hash value for `key` exists.
				 *
				 * @private
				 * @name has
				 * @memberOf Hash
				 * @param {string} key The key of the entry to check.
				 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
				 */
				function hashHas(key) {
					var data = this.__data__;
					return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
				}

				module.exports = hashHas;


				/***/
			}),
/* 1885 */,
/* 1886 */,
/* 1887 */,
/* 1888 */,
/* 1889 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var nativeCreate = __webpack_require__(__webpack_module_template_argument_0__);

				/** Used to stand-in for `undefined` hash values. */
				var HASH_UNDEFINED = '__lodash_hash_undefined__';

				/**
				 * Sets the hash `key` to `value`.
				 *
				 * @private
				 * @name set
				 * @memberOf Hash
				 * @param {string} key The key of the value to set.
				 * @param {*} value The value to set.
				 * @returns {Object} Returns the hash instance.
				 */
				function hashSet(key, value) {
					var data = this.__data__;
					this.size += this.has(key) ? 0 : 1;
					data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
					return this;
				}

				module.exports = hashSet;


				/***/
			}),
/* 1890 */,
/* 1891 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var coreJsData = __webpack_require__(__webpack_module_template_argument_0__);

				/** Used to detect methods masquerading as native. */
				var maskSrcKey = (function () {
					var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
					return uid ? ('Symbol(src)_1.' + uid) : '';
				}());

				/**
				 * Checks if `func` has its source masked.
				 *
				 * @private
				 * @param {Function} func The function to check.
				 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
				 */
				function isMasked(func) {
					return !!maskSrcKey && (maskSrcKey in func);
				}

				module.exports = isMasked;


				/***/
			}),
/* 1892 */,
/* 1893 */,
/* 1894 */,
/* 1895 */,
/* 1896 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var assocIndexOf = __webpack_require__(__webpack_module_template_argument_0__);

				/** Used for built-in method references. */
				var arrayProto = Array.prototype;

				/** Built-in value references. */
				var splice = arrayProto.splice;

				/**
				 * Removes `key` and its value from the list cache.
				 *
				 * @private
				 * @name delete
				 * @memberOf ListCache
				 * @param {string} key The key of the value to remove.
				 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
				 */
				function listCacheDelete(key) {
					var data = this.__data__,
						index = assocIndexOf(data, key);

					if (index < 0) {
						return false;
					}
					var lastIndex = data.length - 1;
					if (index == lastIndex) {
						data.pop();
					} else {
						splice.call(data, index, 1);
					}
					--this.size;
					return true;
				}

				module.exports = listCacheDelete;


				/***/
			}),
/* 1897 */,
/* 1898 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var assocIndexOf = __webpack_require__(__webpack_module_template_argument_0__);

				/**
				 * Gets the list cache value for `key`.
				 *
				 * @private
				 * @name get
				 * @memberOf ListCache
				 * @param {string} key The key of the value to get.
				 * @returns {*} Returns the entry value.
				 */
				function listCacheGet(key) {
					var data = this.__data__,
						index = assocIndexOf(data, key);

					return index < 0 ? undefined : data[index][1];
				}

				module.exports = listCacheGet;


				/***/
			}),
/* 1899 */,
/* 1900 */,
/* 1901 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var assocIndexOf = __webpack_require__(__webpack_module_template_argument_0__);

				/**
				 * Checks if a list cache value for `key` exists.
				 *
				 * @private
				 * @name has
				 * @memberOf ListCache
				 * @param {string} key The key of the entry to check.
				 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
				 */
				function listCacheHas(key) {
					return assocIndexOf(this.__data__, key) > -1;
				}

				module.exports = listCacheHas;


				/***/
			}),
/* 1902 */,
/* 1903 */,
/* 1904 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var assocIndexOf = __webpack_require__(__webpack_module_template_argument_0__);

				/**
				 * Sets the list cache `key` to `value`.
				 *
				 * @private
				 * @name set
				 * @memberOf ListCache
				 * @param {string} key The key of the value to set.
				 * @param {*} value The value to set.
				 * @returns {Object} Returns the list cache instance.
				 */
				function listCacheSet(key, value) {
					var data = this.__data__,
						index = assocIndexOf(data, key);

					if (index < 0) {
						++this.size;
						data.push([key, value]);
					} else {
						data[index][1] = value;
					}
					return this;
				}

				module.exports = listCacheSet;


				/***/
			}),
/* 1905 */,
/* 1906 */,
/* 1907 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

				var Hash = __webpack_require__(__webpack_module_template_argument_0__),
					ListCache = __webpack_require__(__webpack_module_template_argument_1__),
					Map = __webpack_require__(__webpack_module_template_argument_2__);

				/**
				 * Removes all key-value entries from the map.
				 *
				 * @private
				 * @name clear
				 * @memberOf MapCache
				 */
				function mapCacheClear() {
					this.size = 0;
					this.__data__ = {
						'hash': new Hash,
						'map': new (Map || ListCache),
						'string': new Hash
					};
				}

				module.exports = mapCacheClear;


				/***/
			}),
/* 1908 */,
/* 1909 */,
/* 1910 */,
/* 1911 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var getMapData = __webpack_require__(__webpack_module_template_argument_0__);

				/**
				 * Removes `key` and its value from the map.
				 *
				 * @private
				 * @name delete
				 * @memberOf MapCache
				 * @param {string} key The key of the value to remove.
				 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
				 */
				function mapCacheDelete(key) {
					var result = getMapData(this, key)['delete'](key);
					this.size -= result ? 1 : 0;
					return result;
				}

				module.exports = mapCacheDelete;


				/***/
			}),
/* 1912 */,
/* 1913 */,
/* 1914 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var getMapData = __webpack_require__(__webpack_module_template_argument_0__);

				/**
				 * Gets the map value for `key`.
				 *
				 * @private
				 * @name get
				 * @memberOf MapCache
				 * @param {string} key The key of the value to get.
				 * @returns {*} Returns the entry value.
				 */
				function mapCacheGet(key) {
					return getMapData(this, key).get(key);
				}

				module.exports = mapCacheGet;


				/***/
			}),
/* 1915 */,
/* 1916 */,
/* 1917 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var getMapData = __webpack_require__(__webpack_module_template_argument_0__);

				/**
				 * Checks if a map value for `key` exists.
				 *
				 * @private
				 * @name has
				 * @memberOf MapCache
				 * @param {string} key The key of the entry to check.
				 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
				 */
				function mapCacheHas(key) {
					return getMapData(this, key).has(key);
				}

				module.exports = mapCacheHas;


				/***/
			}),
/* 1918 */,
/* 1919 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var getMapData = __webpack_require__(__webpack_module_template_argument_0__);

				/**
				 * Sets the map `key` to `value`.
				 *
				 * @private
				 * @name set
				 * @memberOf MapCache
				 * @param {string} key The key of the value to set.
				 * @param {*} value The value to set.
				 * @returns {Object} Returns the map cache instance.
				 */
				function mapCacheSet(key, value) {
					var data = getMapData(this, key),
						size = data.size;

					data.set(key, value);
					this.size += data.size == size ? 0 : 1;
					return this;
				}

				module.exports = mapCacheSet;


				/***/
			}),
/* 1920 */,
/* 1921 */,
/* 1922 */,
/* 1923 */,
/* 1924 */,
/* 1925 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var getNative = __webpack_require__(__webpack_module_template_argument_0__);

				/* Built-in method references that are verified to be native. */
				var nativeCreate = getNative(Object, 'create');

				module.exports = nativeCreate;


				/***/
			}),
/* 1926 */,
/* 1927 */,
/* 1928 */,
/* 1929 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	/* WEBPACK VAR INJECTION */(function (module) {
					var freeGlobal = __webpack_require__(__webpack_module_template_argument_0__);

					/** Detect free variable `exports`. */
					var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

					/** Detect free variable `module`. */
					var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

					/** Detect the popular CommonJS extension `module.exports`. */
					var moduleExports = freeModule && freeModule.exports === freeExports;

					/** Detect free variable `process` from Node.js. */
					var freeProcess = moduleExports && freeGlobal.process;

					/** Used to access faster Node.js helpers. */
					var nodeUtil = (function () {
						try {
							// Use `util.types` for Node.js 10+.
							var types = freeModule && freeModule.require && freeModule.require('util').types;

							if (types) {
								return types;
							}

							// Legacy `process.binding('util')` for Node.js < 10.
							return freeProcess && freeProcess.binding && freeProcess.binding('util');
						} catch (e) { }
					}());

					module.exports = nodeUtil;

					/* WEBPACK VAR INJECTION */
				}.call(exports, __webpack_require__(1)(module)))

				/***/
			}),
/* 1930 */,
/* 1931 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var freeGlobal = __webpack_require__(__webpack_module_template_argument_0__);

				/** Detect free variable `self`. */
				var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

				/** Used as a reference to the global object. */
				var root = freeGlobal || freeSelf || Function('return this')();

				module.exports = root;


				/***/
			}),
/* 1932 */,
/* 1933 */,
/* 1934 */,
/* 1935 */,
/* 1936 */,
/* 1937 */,
/* 1938 */,
/* 1939 */,
/* 1940 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

				var baseIsArguments = __webpack_require__(__webpack_module_template_argument_0__),
					isObjectLike = __webpack_require__(__webpack_module_template_argument_1__);

				/** Used for built-in method references. */
				var objectProto = Object.prototype;

				/** Used to check objects for own properties. */
				var hasOwnProperty = objectProto.hasOwnProperty;

				/** Built-in value references. */
				var propertyIsEnumerable = objectProto.propertyIsEnumerable;

				/**
				 * Checks if `value` is likely an `arguments` object.
				 *
				 * @static
				 * @memberOf _
				 * @since 0.1.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
				 *  else `false`.
				 * @example
				 *
				 * _.isArguments(function() { return arguments; }());
				 * // => true
				 *
				 * _.isArguments([1, 2, 3]);
				 * // => false
				 */
				var isArguments = baseIsArguments(function () { return arguments; }()) ? baseIsArguments : function (value) {
					return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
						!propertyIsEnumerable.call(value, 'callee');
				};

				module.exports = isArguments;


				/***/
			}),
/* 1941 */,
/* 1942 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

				var isFunction = __webpack_require__(__webpack_module_template_argument_0__),
					isLength = __webpack_require__(__webpack_module_template_argument_1__);

				/**
				 * Checks if `value` is array-like. A value is considered array-like if it's
				 * not a function and has a `value.length` that's an integer greater than or
				 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
				 *
				 * @static
				 * @memberOf _
				 * @since 4.0.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
				 * @example
				 *
				 * _.isArrayLike([1, 2, 3]);
				 * // => true
				 *
				 * _.isArrayLike(document.body.children);
				 * // => true
				 *
				 * _.isArrayLike('abc');
				 * // => true
				 *
				 * _.isArrayLike(_.noop);
				 * // => false
				 */
				function isArrayLike(value) {
					return value != null && isLength(value.length) && !isFunction(value);
				}

				module.exports = isArrayLike;


				/***/
			}),
/* 1943 */,
/* 1944 */,
/* 1945 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	/* WEBPACK VAR INJECTION */(function (module) {
					var root = __webpack_require__(__webpack_module_template_argument_0__),
						stubFalse = __webpack_require__(__webpack_module_template_argument_1__);

					/** Detect free variable `exports`. */
					var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

					/** Detect free variable `module`. */
					var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

					/** Detect the popular CommonJS extension `module.exports`. */
					var moduleExports = freeModule && freeModule.exports === freeExports;

					/** Built-in value references. */
					var Buffer = moduleExports ? root.Buffer : undefined;

					/* Built-in method references for those with the same name as other `lodash` methods. */
					var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

					/**
					 * Checks if `value` is a buffer.
					 *
					 * @static
					 * @memberOf _
					 * @since 4.3.0
					 * @category Lang
					 * @param {*} value The value to check.
					 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
					 * @example
					 *
					 * _.isBuffer(new Buffer(2));
					 * // => true
					 *
					 * _.isBuffer(new Uint8Array(2));
					 * // => false
					 */
					var isBuffer = nativeIsBuffer || stubFalse;

					module.exports = isBuffer;

					/* WEBPACK VAR INJECTION */
				}.call(exports, __webpack_require__(1)(module)))

				/***/
			}),
/* 1946 */,
/* 1947 */,
/* 1948 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

				var baseGetTag = __webpack_require__(__webpack_module_template_argument_0__),
					isObject = __webpack_require__(__webpack_module_template_argument_1__);

				/** `Object#toString` result references. */
				var asyncTag = '[object AsyncFunction]',
					funcTag = '[object Function]',
					genTag = '[object GeneratorFunction]',
					proxyTag = '[object Proxy]';

				/**
				 * Checks if `value` is classified as a `Function` object.
				 *
				 * @static
				 * @memberOf _
				 * @since 0.1.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
				 * @example
				 *
				 * _.isFunction(_);
				 * // => true
				 *
				 * _.isFunction(/abc/);
				 * // => false
				 */
				function isFunction(value) {
					if (!isObject(value)) {
						return false;
					}
					// The use of `Object#toString` avoids issues with the `typeof` operator
					// in Safari 9 which returns 'object' for typed arrays and other constructors.
					var tag = baseGetTag(value);
					return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
				}

				module.exports = isFunction;


				/***/
			}),
/* 1949 */,
/* 1950 */,
/* 1951 */,
/* 1952 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

				var baseIsTypedArray = __webpack_require__(__webpack_module_template_argument_0__),
					baseUnary = __webpack_require__(__webpack_module_template_argument_1__),
					nodeUtil = __webpack_require__(__webpack_module_template_argument_2__);

				/* Node.js helper references. */
				var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

				/**
				 * Checks if `value` is classified as a typed array.
				 *
				 * @static
				 * @memberOf _
				 * @since 3.0.0
				 * @category Lang
				 * @param {*} value The value to check.
				 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
				 * @example
				 *
				 * _.isTypedArray(new Uint8Array);
				 * // => true
				 *
				 * _.isTypedArray([]);
				 * // => false
				 */
				var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

				module.exports = isTypedArray;


				/***/
			}),
/* 1953 */,
/* 1954 */,
/* 1955 */,
/* 1956 */
/***/ (function (module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

				var MapCache = __webpack_require__(__webpack_module_template_argument_0__);

				/** Error message constants. */
				var FUNC_ERROR_TEXT = 'Expected a function';

				/**
				 * Creates a function that memoizes the result of `func`. If `resolver` is
				 * provided, it determines the cache key for storing the result based on the
				 * arguments provided to the memoized function. By default, the first argument
				 * provided to the memoized function is used as the map cache key. The `func`
				 * is invoked with the `this` binding of the memoized function.
				 *
				 * **Note:** The cache is exposed as the `cache` property on the memoized
				 * function. Its creation may be customized by replacing the `_.memoize.Cache`
				 * constructor with one whose instances implement the
				 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
				 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
				 *
				 * @static
				 * @memberOf _
				 * @since 0.1.0
				 * @category Function
				 * @param {Function} func The function to have its output memoized.
				 * @param {Function} [resolver] The function to resolve the cache key.
				 * @returns {Function} Returns the new memoized function.
				 * @example
				 *
				 * var object = { 'a': 1, 'b': 2 };
				 * var other = { 'c': 3, 'd': 4 };
				 *
				 * var values = _.memoize(_.values);
				 * values(object);
				 * // => [1, 2]
				 *
				 * values(other);
				 * // => [3, 4]
				 *
				 * object.a = 2;
				 * values(object);
				 * // => [1, 2]
				 *
				 * // Modify the result cache.
				 * values.cache.set(object, ['a', 'b']);
				 * values(object);
				 * // => ['a', 'b']
				 *
				 * // Replace `_.memoize.Cache`.
				 * _.memoize.Cache = WeakMap;
				 */
				function memoize(func, resolver) {
					if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
						throw new TypeError(FUNC_ERROR_TEXT);
					}
					var memoized = function () {
						var args = arguments,
							key = resolver ? resolver.apply(this, args) : args[0],
							cache = memoized.cache;

						if (cache.has(key)) {
							return cache.get(key);
						}
						var result = func.apply(this, args);
						memoized.cache = cache.set(key, result) || cache;
						return result;
					};
					memoized.cache = new (memoize.Cache || MapCache);
					return memoized;
				}

				// Expose `MapCache`.
				memoize.Cache = MapCache;

				module.exports = memoize;


				/***/
			})
/******/])))
});
;