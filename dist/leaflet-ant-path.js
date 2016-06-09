(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["leaflet"], factory);
	else if(typeof exports === 'object')
		exports["leaflet-ant-path"] = factory(require("leaflet"));
	else
		root["leaflet-ant-path"] = factory(root["L"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.multiAntPath=exports.MultiAntPath=exports.antPath=exports.AntPath=undefined;var _leaflet=__webpack_require__(1);var _antPath=__webpack_require__(2);var _antPath2=_interopRequireDefault(_antPath);var _antPath3=__webpack_require__(3);var _antPath4=_interopRequireDefault(_antPath3);var _multiAntPath=__webpack_require__(4);var _multiAntPath2=_interopRequireDefault(_multiAntPath);var _multiAntPath3=__webpack_require__(5);var _multiAntPath4=_interopRequireDefault(_multiAntPath3);__webpack_require__(6);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_leaflet.Polyline.AntPath=_antPath2.default;_leaflet.polyline.antPath=_antPath4.default;_leaflet.MultiPolyline.MultiAntPath=_multiAntPath2.default;_leaflet.multiPolyline.multiAntPat=_multiAntPath4.default;exports.AntPath=_antPath2.default;exports.antPath=_antPath4.default;exports.MultiAntPath=_multiAntPath2.default;exports.multiAntPath=_multiAntPath4.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _leaflet=__webpack_require__(1); /**
	 * Builds the ant path polygon
	 * @constructor
	 * @extends {FeatureGroup}
	 */var AntPath=_leaflet.FeatureGroup.extend({_path:null,_animatedPathId:null,_animatedPathClass:'leaflet-ant-path', /* default options */options:{paused:false,delay:400,dashArray:[10,20],pulseColor:'#FFFFFF'},initialize:function initialize(path,options){_leaflet.LayerGroup.prototype.initialize.call(this);_leaflet.Util.setOptions(this,options);this._map=null;this._path=path;this._animatedPathId='ant-path-'+new Date().getTime();this._draw();},onAdd:function onAdd(map){this._map=map;this._map.on('zoomend',this._calculateAnimationSpeed,this);this._draw();this._calculateAnimationSpeed();},onRemove:function onRemove(map){this._map.off('zoomend',this._calculateAnimationSpeed,this);this._map=null;_leaflet.LayerGroup.prototype.onRemove.call(this,map);},pause:function pause(){if(this.options.paused){return false;}var animatedPolyElement=document.getElementsByClassName(this._animatedPathId);for(var i=0;i<animatedPolyElement.length;i++){animatedPolyElement[i].removeAttribute('style');animatedPolyElement[i].removeAttribute('style');animatedPolyElement[i].removeAttribute('style');}return this.options.paused=true;},resume:function resume(){this._calculateAnimationSpeed();},_draw:function _draw(){var pathOpts={};var pulseOpts={};(0,_leaflet.extend)(pulseOpts,this.options);(0,_leaflet.extend)(pathOpts,this.options);pulseOpts.color=pulseOpts.pulseColor||this.options.pulseColor;pulseOpts.className=this._animatedPathClass+' '+this._animatedPathId;delete pathOpts.dashArray;this.addLayer(new _leaflet.Polyline(this._path,pathOpts));this.addLayer(new _leaflet.Polyline(this._path,pulseOpts));},_calculateAnimationSpeed:function _calculateAnimationSpeed(){if(this.options.paused||!this._map){return;}var zoomLevel=this._map.getZoom();var animatedPolyElement=document.getElementsByClassName(this._animatedPathId); //Get the animation duration (in seconds) based on the given delay and the current zoom level
	var animationDuration=1+this.options.delay/3/zoomLevel+'s'; //TODO Use requestAnimationFrame to support IE
	for(var i=0;i<animatedPolyElement.length;i++){animatedPolyElement[i].setAttribute('style','-webkit-animation-duration:'+animationDuration);animatedPolyElement[i].setAttribute('style','-moz-animation-duration:'+animationDuration);animatedPolyElement[i].setAttribute('style','animation-duration:'+animationDuration);}}});exports.default=AntPath;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _antPath=__webpack_require__(2);var _antPath2=_interopRequireDefault(_antPath);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=antPath;function antPath(path,options){return new _antPath2.default(path,options);}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _leaflet=__webpack_require__(1);var _antPath=__webpack_require__(2);var _antPath2=_interopRequireDefault(_antPath);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};} /**
	 * Builds multi ant path polygons
	 * @constructor
	 * @extends {L.FeatureGroup}
	 */var MultiAntPath=_leaflet.FeatureGroup.extend({initialize:function initialize(latlngs,options){this._layers={};this._options=options;this.setLatLngs(latlngs);},setLatLngs:function setLatLngs(latlngs){var i=0,len=latlngs.length;this.eachLayer(function(layer){if(i<len){layer.setLatLngs(latlngs[i++]);}else {this.removeLayer(layer);}},this);while(i<len){this.addLayer(new _antPath2.default(latlngs[i++],this._options));}return this;},getLatLngs:function getLatLngs(){var latlngs=[];this.eachLayer(function(layer){latlngs.push(layer.getLatLngs());});return latlngs;},pause:function pause(){this.eachLayer(function(layer){layer.pause();});},resume:function resume(){this.eachLayer(function(layer){layer.resume();});}});exports.default=MultiAntPath;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _multiAntPath=__webpack_require__(4);exports.default=multiAntPath;function multiAntPath(paths,options){return new _multiAntPath.MultiAntPath(paths,options);}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./leaflet-ant-path.sass", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./leaflet-ant-path.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "@-webkit-keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0; } }\n\n@-moz-keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0; } }\n\n@keyframes leaflet-ant-path-animation {\n  from {\n    stroke-dashoffset: 100%; }\n  to {\n    stroke-dashoffset: 0; } }\n\npath.leaflet-ant-path {\n  fill: none;\n  -webkit-animation: linear infinite leaflet-ant-path-animation;\n  -moz-animation: linear infinite leaflet-ant-path-animation;\n  animation: linear infinite leaflet-ant-path-animation; }\n", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
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
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
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
		if(idx >= 0) {
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
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
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
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=leaflet-ant-path.js.map