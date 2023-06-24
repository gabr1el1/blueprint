/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,body{\n    min-height: 100vh;\n    min-width: 100vw;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n}\nul{\n    list-style-type: none;\n}\n#content{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n#content-info{\n    flex: 1;\n    display: flex;\n}\n\nheader{\n    background: royalblue;\n    padding: 5px 10px;\n    color: white;\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n}\n\nheader ul{\n    display: flex;\n    gap: 20px;\n    list-style-type: none;\n    align-items: center;\n    \n}\n\nheader #logo{\n    width: 70px;\n    height: auto;\n}\n\n#project-list{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: whitesmoke;\n    resize: horizontal;\n    list-style-type: none;\n    transition: all 0.4s linear;\n    animation: fadeIn 1s;\n    overflow-y: auto;\n    height: 100vh;\n}\n\n#project-list li{\n    transition: background 0.4s ease;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 15px;\n    padding: 5px;\n    border-radius: 5px;\n    \n}\n\n#project-list li:hover{\n    background: lightgrey;\n}\n\n#project-list.hide{\n    display: none;\n}\n\nli i{\n    padding: 5px;\n    border-radius: 3px;\n}\n\n\n#project-info{\n    flex: 3;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n.todo{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 15px;\n    border-radius: 10px;\n    transition: all 0.5s ease;\n}\n\n.todo.very-low{\n    background: royalblue;\n    color: white;\n}\n\n.todo.very-low:hover{\n    box-shadow: -5px 5px 3px royalblue;\n}\n\n.todo.low{\n    background: palegreen;\n    color: white;\n}\n\n.todo.low:hover{\n    box-shadow: -5px 5px palegreen;\n}\n\n.todo.medium{\n    background: coral;\n    color: white;\n}\n\n.todo.medium:hover{\n    box-shadow: -5px 5px coral;\n}\n\n.todo.high{\n    background: crimson;\n    color: white;\n}\n\n.todo.high:hover{\n    box-shadow: -5px 5px crimson;\n}\n\n\n.options-todo{\n    display: flex;\n    justify-content: flex-end;\n    gap: 5px;\n}\n.option-button{\n    padding: 5px;\n    border: none;\n    text-align: center;\n    width: 50px;\n    border-radius: 5px;\n}\n\n.edit-button{\n    background-color: skyblue;\n    color: navy;\n}\n\n.delete-button{\n    background-color: red;\n    color: darkred;\n}\n.modal{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.611);\n}\n.inner-modal{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    border-radius: 5px;\n    background:whitesmoke;\n    width: clamp(200px, 50%, 600px);\n    height: 60vh;\n}\n.inner-modal > div{\n    padding: 8px;\n    \n}\n\n.modal-info{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.modal-info > div{\n    flex: 1;\n}\n\n.modal-info > div > input, textarea{\n    width: 100%;\n}\ninput{\n    border: none;\n    background: lightgray;\n    border-radius: 95px;\n    padding: 5px;\n}\n.inner-modal > .modal-title, .modal-buttons{\n    display: flex;\n    justify-content: center;  \n    gap: 10px;\n}\n.inner-modal > .modal-title, .modal-info, .modal-input-errors{\n    border-bottom: thin solid lightgrey;\n}\n.inner-modal > .modal-info{\n    flex: 1;\n    overflow: auto;\n}\n.inner-modal > .modal-info > div > *{\n    margin-bottom: 5px;\n}\n\n.modal-buttons > button{\n    width: 75px;\n    padding: 5px 8px;\n    \n}\n.btn{\n    text-align: center;\n    border-radius: 100px;\n    border: none;\n    transition: all 0.4s ease;\n}\n.btn:disabled{\n    opacity: 0.5;\n}\n.cancel-btn{\n    color: white;\n    background: red;\n}\n\n.conf-btn{\n    color: darkblue;\n    background: skyblue;\n}\n\ni{\n    transition: all 0.4s ease;\n}\ni:hover{\n    filter: invert(1);\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,sHAAsH;AAC1H;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;IACP,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,SAAS;IACT,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,qBAAqB;IACrB,mBAAmB;;AAEvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,qBAAqB;IACrB,2BAA2B;IAC3B,oBAAoB;IACpB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,kBAAkB;;AAEtB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;;AAGA;IACI,OAAO;IACP,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,4BAA4B;AAChC;;;AAGA;IACI,aAAa;IACb,yBAAyB;IACzB,QAAQ;AACZ;AACA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,sCAAsC;AAC1C;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,qBAAqB;IACrB,+BAA+B;IAC/B,YAAY;AAChB;AACA;IACI,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,WAAW;AACf;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;AACA;IACI,mCAAmC;AACvC;AACA;IACI,OAAO;IACP,cAAc;AAClB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;;AAEpB;AACA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;IACZ,yBAAyB;AAC7B;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,iBAAiB;AACrB","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml,body{\n    min-height: 100vh;\n    min-width: 100vw;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n}\nul{\n    list-style-type: none;\n}\n#content{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n#content-info{\n    flex: 1;\n    display: flex;\n}\n\nheader{\n    background: royalblue;\n    padding: 5px 10px;\n    color: white;\n    display: flex;\n    gap: 10px;\n    justify-content: space-between;\n}\n\nheader ul{\n    display: flex;\n    gap: 20px;\n    list-style-type: none;\n    align-items: center;\n    \n}\n\nheader #logo{\n    width: 70px;\n    height: auto;\n}\n\n#project-list{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: whitesmoke;\n    resize: horizontal;\n    list-style-type: none;\n    transition: all 0.4s linear;\n    animation: fadeIn 1s;\n    overflow-y: auto;\n    height: 100vh;\n}\n\n#project-list li{\n    transition: background 0.4s ease;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 15px;\n    padding: 5px;\n    border-radius: 5px;\n    \n}\n\n#project-list li:hover{\n    background: lightgrey;\n}\n\n#project-list.hide{\n    display: none;\n}\n\nli i{\n    padding: 5px;\n    border-radius: 3px;\n}\n\n\n#project-info{\n    flex: 3;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n.todo{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 15px;\n    border-radius: 10px;\n    transition: all 0.5s ease;\n}\n\n.todo.very-low{\n    background: royalblue;\n    color: white;\n}\n\n.todo.very-low:hover{\n    box-shadow: -5px 5px 3px royalblue;\n}\n\n.todo.low{\n    background: palegreen;\n    color: white;\n}\n\n.todo.low:hover{\n    box-shadow: -5px 5px palegreen;\n}\n\n.todo.medium{\n    background: coral;\n    color: white;\n}\n\n.todo.medium:hover{\n    box-shadow: -5px 5px coral;\n}\n\n.todo.high{\n    background: crimson;\n    color: white;\n}\n\n.todo.high:hover{\n    box-shadow: -5px 5px crimson;\n}\n\n\n.options-todo{\n    display: flex;\n    justify-content: flex-end;\n    gap: 5px;\n}\n.option-button{\n    padding: 5px;\n    border: none;\n    text-align: center;\n    width: 50px;\n    border-radius: 5px;\n}\n\n.edit-button{\n    background-color: skyblue;\n    color: navy;\n}\n\n.delete-button{\n    background-color: red;\n    color: darkred;\n}\n.modal{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.611);\n}\n.inner-modal{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    border-radius: 5px;\n    background:whitesmoke;\n    width: clamp(200px, 50%, 600px);\n    height: 60vh;\n}\n.inner-modal > div{\n    padding: 8px;\n    \n}\n\n.modal-info{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.modal-info > div{\n    flex: 1;\n}\n\n.modal-info > div > input, textarea{\n    width: 100%;\n}\ninput{\n    border: none;\n    background: lightgray;\n    border-radius: 95px;\n    padding: 5px;\n}\n.inner-modal > .modal-title, .modal-buttons{\n    display: flex;\n    justify-content: center;  \n    gap: 10px;\n}\n.inner-modal > .modal-title, .modal-info, .modal-input-errors{\n    border-bottom: thin solid lightgrey;\n}\n.inner-modal > .modal-info{\n    flex: 1;\n    overflow: auto;\n}\n.inner-modal > .modal-info > div > *{\n    margin-bottom: 5px;\n}\n\n.modal-buttons > button{\n    width: 75px;\n    padding: 5px 8px;\n    \n}\n.btn{\n    text-align: center;\n    border-radius: 100px;\n    border: none;\n    transition: all 0.4s ease;\n}\n.btn:disabled{\n    opacity: 0.5;\n}\n.cancel-btn{\n    color: white;\n    background: red;\n}\n\n.conf-btn{\n    color: darkblue;\n    background: skyblue;\n}\n\ni{\n    transition: all 0.4s ease;\n}\ni:hover{\n    filter: invert(1);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialPage: () => (/* binding */ initialPage),
/* harmony export */   showProjects: () => (/* binding */ showProjects),
/* harmony export */   showToDos: () => (/* binding */ showToDos)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _assets_logoShortWhite_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logoShortWhite.png */ "./src/assets/logoShortWhite.png");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");



let activeTab = 0;
/*
TODOS: 
--Agregar Local Storage
*/

function initialPage(){
    
    const content = document.querySelector("#content");
    const contentInfo = document.createElement("div");
    contentInfo.setAttribute("id","content-info");

    const header = document.createElement("header");
    header.insertAdjacentHTML("afterbegin",
    `
    <ul><li><img src="${_assets_logoShortWhite_png__WEBPACK_IMPORTED_MODULE_1__}" id="logo"></li><li></li></ul>
    <ul><li><i class="fa-solid fa-plus" id="add-todo" title="Add todo"></i></li></ul>
    `
    );

    const projectList = document.createElement("ul");
    projectList.setAttribute("id","project-list");
    projectList.insertAdjacentHTML("afterbegin",
    `
    <ul>
    <li><h2>My projects</h2><i class="fa-solid fa-plus" id="add-project" title="Add project"></i></li>
    </ul>
    `);
    const projectInfo = document.createElement("div");
    projectInfo.setAttribute("id","project-info");

    content.appendChild(header);
    contentInfo.appendChild(projectList);
    contentInfo.appendChild(projectInfo);
    content.appendChild(contentInfo);

    //BINDINGS
    const btnAddProject = document.querySelector("#add-project");
    
    btnAddProject.addEventListener("click",function(){
        const addProjModal = AddProjModal();
        addProjModal.showModal();
    });

    const logo = document.querySelector("#logo");
    logo.addEventListener("click",function(){
        const projList = document.querySelector("#project-list")
        projList.classList.toggle("hide");
    });

    const btnAddTodo = document.querySelector("#add-todo");
    btnAddTodo.addEventListener("click",function(){
        const addTodoModal = AddTodoModal();
        addTodoModal.showModal();
    });
    
}

const Modal = function(){
    let activeModal = false;
    //Create modal element
    const modal = document.createElement("div");
    modal.classList.add("modal");
    
    const removeModal = function(){
        modal.remove();
        activeModal=false;
    }
    /*-----------------ATTENTION------------------
    //return {modal,activeModal,removeModal};
    
    Here this Modal factory is returning an object,
    when accesing the activeModal property you are
    accesing the object property ITSELF BUT NOT THE 
    VARIABLE activeModal in the scope of Modal wich is using 
    removeModal method

    ONE WAY TO ACCESS this variable is using getters
    and setters functions

    Some info and examples : 
    https://stackoverflow.com/questions/65590114/factory-function-method-not-updating-variable 
    */

    return {modal,
            get activeModal(){return activeModal}, 
            set activeModal(bool){activeModal = bool},
            removeModal
        };
}
const AddProjModal = function(){
    
    const prototype = Modal();

    let confBtn,projName,cancelBtn, goodLenCheck;

    const buildModal = function(){
        prototype.modal.innerHTML = 
        `
        <div class="inner-modal">
            <div class="modal-title">
                <h2>New project</h2>
            </div>
            <div class="modal-info">
                <div class="modal-row">
                    <h3>Name</h3>
                    <input type="text" id="project-name" size="30">
                </div>
            </div>
            <div class="modal-input-errors">
                <div>
                    <label for="pr-name-length">Name between 1 and 50 characters</label>
                    <input type="checkbox" id="pr-name-length" disabled>
                </div>
            </div>
            <div class="modal-buttons">
                <button id="cancel-add-pr" class="cancel-btn btn">Cancel</button>
                <button id="conf-add-pr" class="conf-btn btn" >Add</button>
            </div>
        </div>
        `;
    }

    const showModal = function(){
        if(!prototype.activeModal){
            //WE BUILD THE MODAL
            buildModal();
            //MODAL IS ACTIVE
            prototype.activeModal=true;
            //WE ADD THE MODAL TO THE PAGE
            document.querySelector("#content").appendChild(prototype.modal);
            bindingModal();
        } 
    }

    const bindingModal = function(){
        //SAVE SOME DOM
        confBtn = document.querySelector("#conf-add-pr");
        projName = document.querySelector("#project-name");
        cancelBtn = document.querySelector("#cancel-add-pr");
        goodLenCheck = document.querySelector("#pr-name-length");
        //VALIDATION
        projName.addEventListener("keyup",
        validation);

        ////BINDINGS THE BUTTONS ONCE THE MODAL IS APPENDED ON DOCUMENT
        confBtn.disabled = true;
        confBtn.addEventListener("click",
        function(){
            _logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.addProj(projName.value);
            if((0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)("localStorage")){
                showProjects(JSON.parse(localStorage.getItem("MyProjects")));
            }else{
                showProjects(_logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
            }
            
            prototype.removeModal();
        });
        cancelBtn.addEventListener("click",
        prototype.removeModal);
        ////
    }

    const validation = function(){
        let valid = false;

        if(projName.value.length>0 && projName.value.length<50){
            valid = true;
            goodLenCheck.checked = true;
        }else{
            valid=false;
            goodLenCheck.checked = false;
        }

        
        if(valid){
            confBtn.disabled = false;
        }else{
            confBtn.disabled = true;
        }
    }
    return {showModal};
}

const AddTodoModal = function(){
    const prototype = Modal();
    
    let projSelect;
    let titleInput;
    let descriptionText;
    let dueDateInput;
    let prioritySelect;

    let goodLenCheck;
    let goodDateCheck;

    let confBtn;

    const buildModal = function(){
        prototype.modal.innerHTML = 
        `
        <div class="inner-modal">
            <div class="modal-title">
                <h2>New TODO for: </h2>`+
                (function(){
                    let htmlString = `<select id="projects-for-todo">`;
                    _logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects.forEach(function(project,index){
                        htmlString+=`<option value="${index}">${project.name}</option>`
                    });
                    htmlString+=`</select>`;
                    return htmlString;
                })()+
            `</div>
            <div class="modal-info">
                <div class="modal-row">
                    <h2>TODO title</h2>
                    <input id="todo-title" type="text">
                </div>
                <div class="modal-row">
                    <h2>Description</h2>
                    <textarea id="todo-description"></textarea>
                </div>
                <div class="modal-row">
                    <h2>Due date</h2>
                    <input id="todo-duedate" type="date">
                </div>
                <div class="modal-row">
                    <h2>Priority</h2>
                    <select id="todo-priority">
                        <option value="very-low">
                            Very low
                        </option>
                        <option value="low">
                            Low
                        </option>
                        <option value="medium">
                            Medium
                        </option>
                        <option value="high">
                            High
                        </option>
                    </select>
                </div>
            </div>
            <div class="modal-input-errors">
                <div>
                    <label for="todo-title-length">Title between 1 and 50 characters</label>
                    <input type="checkbox" id="todo-title-length" disabled>
                    <label for="todo-date">Pick a date</label>
                    <input type="checkbox" id="todo-date" disabled>
                </div>
            </div>
            <div class="modal-buttons">
                <button id="cancel-add-todo" class="cancel-btn btn">Cancel</button>
                <button id="conf-add-todo" class="conf-btn btn" >Add</button>
            </div>
        <div/>`;
    }  

    const showModal = function(){
        if(!prototype.activeModal){
            //WE BUILD THE MODAL
            buildModal();
            //MODAL IS ACTIVE
            prototype.activeModal=true;
            //WE ADD THE MODAL TO THE PAGE
            document.querySelector("#content").appendChild(prototype.modal);
            bindingModal();
        } 
    }

    const bindingModal = function(){
        //SAVE SOME DOM
        
        projSelect = document.querySelector("#projects-for-todo");
        titleInput = document.querySelector("#todo-title");
        descriptionText = document.querySelector("#todo-description");
        dueDateInput = document.querySelector("#todo-duedate");
        prioritySelect = document.querySelector("#todo-priority");
        goodLenCheck = document.querySelector("#todo-title-length");
        goodDateCheck = document.querySelector("#todo-date");
        confBtn = document.querySelector("#conf-add-todo");

        //VALIDATION
        titleInput.addEventListener("keyup",
        validation);
        dueDateInput.addEventListener("change",
        validation
        );
        ////BINDINGS THE BUTTONS ONCE THE MODAL IS APPENDED ON DOCUMENT
        confBtn.disabled = true;
        confBtn.addEventListener("click",
        function(){
            _logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[parseInt(projSelect.value)].addTodo(parseInt(projSelect.value),titleInput.value,descriptionText.value,dueDateInput.value,prioritySelect.value);
            if(activeTab==parseInt(projSelect.value)){
                if((0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.storageAvailable)("localStorage")){

                    showToDos(
                        JSON.parse(localStorage.getItem("MyProjects"))[parseInt(projSelect.value)].todos
                    );
                    showProjects(JSON.parse(localStorage.getItem("MyProjects"))  );

                }else{
                    showToDos(_logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[parseInt(projSelect.value)].todos);
                    showProjects(_logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
                }
            }
            
            prototype.removeModal();
        });

        document.querySelector("#cancel-add-todo").addEventListener("click",
        prototype.removeModal);
    }

    const validation = function(){
        let valid = true;
        goodLenCheck.checked = true;
        goodDateCheck.checked=true;
        const confBtn = document.querySelector("#conf-add-todo");
        
        if(titleInput.value.length==0 || titleInput.value.length>50){
            valid = false;
            goodLenCheck.checked = true;
        }

        if(dueDateInput.value==""){
            valid=false;
            goodDateCheck.checked=false;
        }

        if(valid){
            confBtn.disabled = false;
        }else{
            confBtn.disabled = true;
        }

    }

    return {showModal};

}

const EditTodoModal = function(){
    const prototype = Modal();
    let checkDone;

    let projSelect;
    let titleInput;
    let descriptionText;
    let dueDateInput;
    let prioritySelect;

    let goodLenCheck;
    let goodDateCheck;

    let confBtn;

    let oldInd, oldProj;

    const buildModal = function(){
        prototype.modal.innerHTML = 
        `
        <div class="inner-modal">
            <div class="modal-title">
                <h2>Edit TODO: </h2>`+
                (function(){
                    let htmlString = `<select id="projects-for-todo">`;
                    _logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects.forEach(function(project,index){
                        htmlString+=`<option value="${index}">${project.name}</option>`
                    });
                    htmlString+=`</select>`;
                    return htmlString;
                })()+
            `</div>
            <div class="modal-info">
                <div class="modal-row">
                    <h2>TODO title</h2>
                    <input id="todo-title" type="text">
                </div>
                <div class="modal-row">
                    <h2>Description</h2>
                    <textarea id="todo-description"></textarea>
                </div>
                <div class="modal-row">
                    <h2>Due date</h2>
                    <input id="todo-duedate" type="date">
                </div>
                <div class="modal-row">
                    <h2>Priority</h2>
                    <select id="todo-priority">
                        <option value="very-low">
                            Very low
                        </option>
                        <option value="low">
                            Low
                        </option>
                        <option value="medium">
                            Medium
                        </option>
                        <option value="high">
                            High
                        </option>
                    </select>
                </div>
            </div>
            <div class="modal-input-errors">
                <div>
                    <label for="todo-title-length">Title between 0 and 50 characters</label>
                    <input type="checkbox" id="todo-title-length" disabled>
                    <label for="todo-date">Pick a date</label>
                    <input type="checkbox" id="todo-date" disabled>
                </div>
            </div>
            <div class="modal-buttons">
                <button id="cancel-add-todo" class="cancel-btn btn">Cancel</button>
                <button id="conf-edit-todo" class="conf-btn btn" >Edit</button>
            </div>
        <div/>`;
    }  

    const showModal = function(oldIndex,projectIndex){
        if(!prototype.activeModal){
            oldInd = oldIndex;
            oldProj = projectIndex;

            const todoToEdit = _logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projectIndex].todos[oldIndex];
            //WE BUILD THE MODAL
            buildModal();
            //MODAL IS ACTIVE
            prototype.activeModal=true;
            //WE ADD THE MODAL TO THE PAGE
            document.querySelector("#content").appendChild(prototype.modal);

            bindingModal();

            projSelect.value = todoToEdit.projectBelong;
            titleInput.value = todoToEdit.title;
            descriptionText.value = todoToEdit.description;
            dueDateInput.value = todoToEdit.dueDate;
            prioritySelect.value = todoToEdit.priority;


            //validate modal first because information is not meant to be empty
            validation();
        } 
    }

    const bindingModal = function(){
        //SAVE SOME DOM
        
        projSelect = document.querySelector("#projects-for-todo");
        titleInput = document.querySelector("#todo-title");
        descriptionText = document.querySelector("#todo-description");
        dueDateInput = document.querySelector("#todo-duedate");
        prioritySelect = document.querySelector("#todo-priority");
        goodLenCheck = document.querySelector("#todo-title-length");
        goodDateCheck = document.querySelector("#todo-date");
        confBtn = document.querySelector("#conf-edit-todo");
        checkDone = 
        document.querySelector(".check-done-todo[data-id="+
        CSS.escape(oldInd)+"]"+"[data-project="+
        CSS.escape(oldProj)+"]");
        
        //VALIDATION
        titleInput.addEventListener("keyup",
        validation);
        dueDateInput.addEventListener("change",
        validation
        );
        ////BINDINGS THE BUTTONS ONCE THE MODAL IS APPENDED ON DOCUMENT
        confBtn.disabled = true;
        confBtn.addEventListener("click",
        function(){
            (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.editTodo)(oldProj,oldInd,parseInt(projSelect.value),titleInput.value,descriptionText.value,dueDateInput.value,prioritySelect.value,checkDone.checked);
            if(activeTab==oldProj){
                showToDos(_logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[oldProj].todos);
            }
            prototype.removeModal();
            showProjects(_logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
        });
        document.querySelector("#cancel-add-todo").addEventListener("click",
        prototype.removeModal);
        
    }

    const validation = function(){
        let valid = true;
        goodLenCheck.checked = true;
        goodDateCheck.checked=true;

        if(titleInput.value.length==0 || titleInput.value.length>=50){
            valid=false;
            goodLenCheck.checked = false;
        }

        if(dueDateInput.value==""){
            valid=false;
            goodDateCheck.checked=false;
        }

        if(valid){
            confBtn.disabled = false;
        }else{
            confBtn.disabled = true;
        }

    }

    return {showModal};
}

const showProjects = function(projectList){
    let projectsItems;
    if(document.querySelector("#projects-items")===null){
        projectsItems = document.createElement("ul");
        projectsItems.setAttribute("id","projects-items");
    }else{
        projectsItems = document.querySelector("#projects-items");
    }
    projectsItems.innerHTML = "";
    projectList.forEach((item,index) => {
        const itemProj = document.createElement("li");
        itemProj.innerHTML = `
        <span>${item.name}</span><span title="${item.todos.length} todos">${item.todos.length}</span>
        `;
        itemProj.addEventListener("click",function(){
            showToDos(_logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[index].todos);
            activeTab = index;
        })
        projectsItems.appendChild(itemProj);
    });
    document.querySelector("#project-list").appendChild(projectsItems);
}

const showToDos= function(todoList){
    const projInfo = document.querySelector("#project-info");
    projInfo.innerHTML="";
    
    todoList.forEach(function(todo,index){
        let itemTodo = document.createElement("div");
        itemTodo.classList.add("todo",todo.priority);
        itemTodo.innerHTML = `
            <div>
                <h3 class="todo-title">${todo.title}</h3>
                <h3>Due: ${todo.dueDate}</h3>
                <p>
                    <i class="fa-solid fa-circle-info see-edit-todo" title="See / edit" data-id=${index} data-project=${todo.projectBelong}></i>
                    <label for="${index}">Done?</label>`+
                    (function(){
                        if(todo.checked){
                            return `<input class="check-done-todo" type="checkbox" data-id=${index} data-project=${todo.projectBelong} checked>`;
                        }else{
                            return `<input class="check-done-todo" type="checkbox" data-id=${index} data-project=${todo.projectBelong}>`;
                        }
                    })()+
                    `
                    <i class="fa-solid fa-trash delete-todo" title="Delete Todo" data-id=${index} data-project=${todo.projectBelong}></i>
                </p>
                
            </div>
        `;
        projInfo.appendChild(itemTodo);
    });
    Array.from(document.querySelectorAll(".see-edit-todo")).forEach(button=>{
        button.addEventListener("click",
        function(){
            const editTodoModal = EditTodoModal();
            editTodoModal.showModal(parseInt(this.dataset.id),parseInt(this.dataset.project));
            //editTodoModal.showModal(this.dataset.id,this.dataset.project);
        });
    });

    Array.from(document.querySelectorAll(".check-done-todo")).forEach(check=>{
        check.addEventListener("change",
        function(){
            (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.checkTodoDone)(this.dataset.project,this.dataset.id,this.checked);
        });
    });

    Array.from(document.querySelectorAll(".delete-todo")).forEach(button=>{
        button.addEventListener("click",function(){
            (0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(this.dataset.project,this.dataset.id);

            showToDos(_logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[this.dataset.project].todos);
            showProjects(_logic_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
        })
    })
}




/*

*/

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyProjects: () => (/* binding */ MyProjects),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   checkTodoDone: () => (/* binding */ checkTodoDone),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),
/* harmony export */   editTodo: () => (/* binding */ editTodo),
/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable)
/* harmony export */ });

const todoItem = function(projectBelong,title,description,dueDate,priority,checked = false){
    return {projectBelong,title,description,dueDate,priority,checked};
}

const Project = function(name){
    let todos = [];

    const addTodo= function(projectBelong,title,description,dueDate,priority,checked = false){
        let todo = todoItem(projectBelong,title,description,dueDate,priority,checked)
        todos.push(todo);
        if(storageAvailable("localStorage")){
            updateLocalStorage();
        }
    }

    return {name,addTodo, get todos(){return todos}, set todos(todoList){todos = todoList}};
}

const MyProjects = (function(){
    let projects = [];
    
    const addProj = function(prName){
        
        if(storageAvailable("localStorage")){
            projects.push(Project(prName));
            updateLocalStorage();
        }else{
            projects.push(Project(prName));
        }

    }
    return {addProj,get projects(){return projects}, set projects(projs){projects = projs}};
})();

const editTodo = function(oldProj,oldInd,newProj,title,description,dueDate,priority,checked){
    
    let newVerTodo = todoItem(newProj,title,description,dueDate,priority,checked);
    
    //We remove the todo from the project it was on
    MyProjects.projects[oldProj].todos.splice(oldInd,1);
    MyProjects.projects[newProj].addTodo(
        newVerTodo.projectBelong,
        newVerTodo.title,
        newVerTodo.description,
        newVerTodo.dueDate,
        newVerTodo.priority,
        newVerTodo.checked
    ); 
    
    if(storageAvailable("localStorage")){
        updateLocalStorage(); 
    }
}

const checkTodoDone = function(projectInd, todoInd, checked){
    MyProjects.projects[projectInd].todos[todoInd].checked = checked;
    console.log(MyProjects.projects)
    if(storageAvailable("localStorage")){
        updateLocalStorage(); 
    }
}

const deleteTodo = function(projInd, todoInd){
    MyProjects.projects[projInd].todos.splice(todoInd,1);
    if(storageAvailable("localStorage")){
        updateLocalStorage(); 
    }
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
    return (
        e instanceof DOMException &&
        // everything except Firefox
            (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

const updateLocalStorage = function(){
    localStorage.setItem("MyProjects",JSON.stringify(MyProjects.projects));
}



/***/ }),

/***/ "./src/assets/logoShortWhite.png":
/*!***************************************!*\
  !*** ./src/assets/logoShortWhite.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "166fd15b4e6c9411e3b8.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageAvailable: () => (/* reexport safe */ _logic_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");



(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.initialPage)();

if ((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)("localStorage")) {
    
    if(localStorage.getItem("MyProjects")){
        JSON.parse(localStorage.getItem("MyProjects")).forEach((project,index) => {
            _logic_js__WEBPACK_IMPORTED_MODULE_1__.MyProjects.projects.push((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.Project)(project.name));
            _logic_js__WEBPACK_IMPORTED_MODULE_1__.MyProjects.projects[index].todos = project.todos;
        });
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.showProjects)(JSON.parse(localStorage.getItem("MyProjects")));
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.showToDos)(JSON.parse(localStorage.getItem("MyProjects"))[0].todos);

    }else{

        _logic_js__WEBPACK_IMPORTED_MODULE_1__.MyProjects.projects.push((0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.Project)("DEFAULT"));
        localStorage.setItem("MyProjects", JSON.stringify(_logic_js__WEBPACK_IMPORTED_MODULE_1__.MyProjects.projects));
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.showProjects)(JSON.parse(localStorage.getItem("MyProjects")));
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.showToDos)(JSON.parse(localStorage.getItem("MyProjects"))[0].todos);

    }
} else {
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.showProjects)(_logic_js__WEBPACK_IMPORTED_MODULE_1__.MyProjects.projects);
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.showToDos)(_logic_js__WEBPACK_IMPORTED_MODULE_1__.MyProjects.projects[0].todos);
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9EQUFXOztBQUVYLElBQUksMkRBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0RBQXdCLENBQUMsa0RBQU87QUFDNUMsWUFBWSwwREFBbUI7QUFDL0IsU0FBUztBQUNULFFBQVEscURBQVk7QUFDcEIsUUFBUSxrREFBUzs7QUFFakIsS0FBSzs7QUFFTCxRQUFRLCtEQUF3QixDQUFDLGtEQUFPO0FBQ3hDLDBEQUEwRCwwREFBbUI7QUFDN0UsUUFBUSxxREFBWTtBQUNwQixRQUFRLGtEQUFTOztBQUVqQjtBQUNBLEVBQUU7QUFDRixJQUFJLHFEQUFZLENBQUMsMERBQW1CO0FBQ3BDLElBQUksa0RBQVMsQ0FBQyxtRUFBNEI7QUFDMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLGJvZHl7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG51bHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4jY29udGVudHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQtaW5mb3tcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIgdWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuaGVhZGVyICNsb2dve1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbiAgICByZXNpemU6IGhvcml6b250YWw7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCBsaXtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzIGVhc2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgXFxufVxcblxcbiNwcm9qZWN0LWxpc3QgbGk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdC5oaWRle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5saSBpe1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuXFxuI3Byb2plY3QtaW5mb3tcXG4gICAgZmxleDogMztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi50b2Rve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi50b2RvLnZlcnktbG93e1xcbiAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8udmVyeS1sb3c6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IDNweCByb3lhbGJsdWU7XFxufVxcblxcbi50b2RvLmxvd3tcXG4gICAgYmFja2dyb3VuZDogcGFsZWdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLmxvdzpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggcGFsZWdyZWVuO1xcbn1cXG5cXG4udG9kby5tZWRpdW17XFxuICAgIGJhY2tncm91bmQ6IGNvcmFsO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLm1lZGl1bTpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggY29yYWw7XFxufVxcblxcbi50b2RvLmhpZ2h7XFxuICAgIGJhY2tncm91bmQ6IGNyaW1zb247XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8uaGlnaDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggY3JpbXNvbjtcXG59XFxuXFxuXFxuLm9wdGlvbnMtdG9kb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi5vcHRpb24tYnV0dG9ue1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZWRpdC1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICAgIGNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogZGFya3JlZDtcXG59XFxuLm1vZGFse1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjExKTtcXG59XFxuLmlubmVyLW1vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6d2hpdGVzbW9rZTtcXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA1MCUsIDYwMHB4KTtcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbn1cXG4uaW5uZXItbW9kYWwgPiBkaXZ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgXFxufVxcblxcbi5tb2RhbC1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1pbmZvID4gZGl2e1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtaW5mbyA+IGRpdiA+IGlucHV0LCB0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogOTVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4uaW5uZXItbW9kYWwgPiAubW9kYWwtdGl0bGUsIC5tb2RhbC1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5pbm5lci1tb2RhbCA+IC5tb2RhbC10aXRsZSwgLm1vZGFsLWluZm8sIC5tb2RhbC1pbnB1dC1lcnJvcnN7XFxuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbn1cXG4uaW5uZXItbW9kYWwgPiAubW9kYWwtaW5mb3tcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5pbm5lci1tb2RhbCA+IC5tb2RhbC1pbmZvID4gZGl2ID4gKntcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubW9kYWwtYnV0dG9ucyA+IGJ1dHRvbntcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIFxcbn1cXG4uYnRue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxufVxcbi5idG46ZGlzYWJsZWR7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNhbmNlbC1idG57XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uY29uZi1idG57XFxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG59XFxuXFxuaXtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG59XFxuaTpob3ZlcntcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wi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QUNJLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxib2R5e1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxudWx7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb250ZW50LWluZm97XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmhlYWRlcntcXG4gICAgYmFja2dyb3VuZDogcm95YWxibHVlO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbmhlYWRlciAjbG9nb3tcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuI3Byb2plY3QtbGlzdHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gICAgcmVzaXplOiBob3Jpem9udGFsO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QgbGl7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cyBlYXNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIFxcbn1cXG5cXG4jcHJvamVjdC1saXN0IGxpOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QuaGlkZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxubGkgaXtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcblxcbiNwcm9qZWN0LWluZm97XFxuICAgIGZsZXg6IDM7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4udG9kby52ZXJ5LWxvd3tcXG4gICAgYmFja2dyb3VuZDogcm95YWxibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLnZlcnktbG93OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCAzcHggcm95YWxibHVlO1xcbn1cXG5cXG4udG9kby5sb3d7XFxuICAgIGJhY2tncm91bmQ6IHBhbGVncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby5sb3c6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IHBhbGVncmVlbjtcXG59XFxuXFxuLnRvZG8ubWVkaXVte1xcbiAgICBiYWNrZ3JvdW5kOiBjb3JhbDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby5tZWRpdW06aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IGNvcmFsO1xcbn1cXG5cXG4udG9kby5oaWdoe1xcbiAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLmhpZ2g6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IGNyaW1zb247XFxufVxcblxcblxcbi5vcHRpb25zLXRvZG97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG4ub3B0aW9uLWJ1dHRvbntcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmVkaXQtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbiAgICBjb2xvcjogbmF2eTtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcbi5tb2RhbHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYxMSk7XFxufVxcbi5pbm5lci1tb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOndoaXRlc21va2U7XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgNTAlLCA2MDBweCk7XFxuICAgIGhlaWdodDogNjB2aDtcXG59XFxuLmlubmVyLW1vZGFsID4gZGl2e1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIFxcbn1cXG5cXG4ubW9kYWwtaW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtaW5mbyA+IGRpdntcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLm1vZGFsLWluZm8gPiBkaXYgPiBpbnB1dCwgdGV4dGFyZWF7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuLmlubmVyLW1vZGFsID4gLm1vZGFsLXRpdGxlLCAubW9kYWwtYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICBcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uaW5uZXItbW9kYWwgPiAubW9kYWwtdGl0bGUsIC5tb2RhbC1pbmZvLCAubW9kYWwtaW5wdXQtZXJyb3Jze1xcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuLmlubmVyLW1vZGFsID4gLm1vZGFsLWluZm97XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uaW5uZXItbW9kYWwgPiAubW9kYWwtaW5mbyA+IGRpdiA+ICp7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLm1vZGFsLWJ1dHRvbnMgPiBidXR0b257XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBcXG59XFxuLmJ0bntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbn1cXG4uYnRuOmRpc2FibGVke1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbi5jYW5jZWwtYnRue1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLmNvbmYtYnRue1xcbiAgICBjb2xvcjogZGFya2JsdWU7XFxuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XFxufVxcblxcbml7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxufVxcbmk6aG92ZXJ7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBsb2dvU3JjIGZyb20gXCIuL2Fzc2V0cy9sb2dvU2hvcnRXaGl0ZS5wbmdcIjtcbmltcG9ydCB7IE15UHJvamVjdHMsZWRpdFRvZG8sIGNoZWNrVG9kb0RvbmUsIGRlbGV0ZVRvZG8sIHN0b3JhZ2VBdmFpbGFibGV9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5sZXQgYWN0aXZlVGFiID0gMDtcbi8qXG5UT0RPUzogXG4tLUFncmVnYXIgTG9jYWwgU3RvcmFnZVxuKi9cblxuZnVuY3Rpb24gaW5pdGlhbFBhZ2UoKXtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IGNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50SW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29udGVudC1pbmZvXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLFxuICAgIGBcbiAgICA8dWw+PGxpPjxpbWcgc3JjPVwiJHtsb2dvU3JjfVwiIGlkPVwibG9nb1wiPjwvbGk+PGxpPjwvbGk+PC91bD5cbiAgICA8dWw+PGxpPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiIGlkPVwiYWRkLXRvZG9cIiB0aXRsZT1cIkFkZCB0b2RvXCI+PC9pPjwvbGk+PC91bD5cbiAgICBgXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHByb2plY3RMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgcHJvamVjdExpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLFxuICAgIGBcbiAgICA8dWw+XG4gICAgPGxpPjxoMj5NeSBwcm9qZWN0czwvaDI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCIgaWQ9XCJhZGQtcHJvamVjdFwiIHRpdGxlPVwiQWRkIHByb2plY3RcIj48L2k+PC9saT5cbiAgICA8L3VsPlxuICAgIGApO1xuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0SW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicHJvamVjdC1pbmZvXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnRJbmZvLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbiAgICBjb250ZW50SW5mby5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50SW5mbyk7XG5cbiAgICAvL0JJTkRJTkdTXG4gICAgY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIik7XG4gICAgXG4gICAgYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBhZGRQcm9qTW9kYWwgPSBBZGRQcm9qTW9kYWwoKTtcbiAgICAgICAgYWRkUHJvak1vZGFsLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nb1wiKTtcbiAgICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHByb2pMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIilcbiAgICAgICAgcHJvakxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidG5BZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdG9kb1wiKTtcbiAgICBidG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Nb2RhbCA9IEFkZFRvZG9Nb2RhbCgpO1xuICAgICAgICBhZGRUb2RvTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgfSk7XG4gICAgXG59XG5cbmNvbnN0IE1vZGFsID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgYWN0aXZlTW9kYWwgPSBmYWxzZTtcbiAgICAvL0NyZWF0ZSBtb2RhbCBlbGVtZW50XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgICBcbiAgICBjb25zdCByZW1vdmVNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICBhY3RpdmVNb2RhbD1mYWxzZTtcbiAgICB9XG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLUFUVEVOVElPTi0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vcmV0dXJuIHttb2RhbCxhY3RpdmVNb2RhbCxyZW1vdmVNb2RhbH07XG4gICAgXG4gICAgSGVyZSB0aGlzIE1vZGFsIGZhY3RvcnkgaXMgcmV0dXJuaW5nIGFuIG9iamVjdCxcbiAgICB3aGVuIGFjY2VzaW5nIHRoZSBhY3RpdmVNb2RhbCBwcm9wZXJ0eSB5b3UgYXJlXG4gICAgYWNjZXNpbmcgdGhlIG9iamVjdCBwcm9wZXJ0eSBJVFNFTEYgQlVUIE5PVCBUSEUgXG4gICAgVkFSSUFCTEUgYWN0aXZlTW9kYWwgaW4gdGhlIHNjb3BlIG9mIE1vZGFsIHdpY2ggaXMgdXNpbmcgXG4gICAgcmVtb3ZlTW9kYWwgbWV0aG9kXG5cbiAgICBPTkUgV0FZIFRPIEFDQ0VTUyB0aGlzIHZhcmlhYmxlIGlzIHVzaW5nIGdldHRlcnNcbiAgICBhbmQgc2V0dGVycyBmdW5jdGlvbnNcblxuICAgIFNvbWUgaW5mbyBhbmQgZXhhbXBsZXMgOiBcbiAgICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82NTU5MDExNC9mYWN0b3J5LWZ1bmN0aW9uLW1ldGhvZC1ub3QtdXBkYXRpbmctdmFyaWFibGUgXG4gICAgKi9cblxuICAgIHJldHVybiB7bW9kYWwsXG4gICAgICAgICAgICBnZXQgYWN0aXZlTW9kYWwoKXtyZXR1cm4gYWN0aXZlTW9kYWx9LCBcbiAgICAgICAgICAgIHNldCBhY3RpdmVNb2RhbChib29sKXthY3RpdmVNb2RhbCA9IGJvb2x9LFxuICAgICAgICAgICAgcmVtb3ZlTW9kYWxcbiAgICAgICAgfTtcbn1cbmNvbnN0IEFkZFByb2pNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgcHJvdG90eXBlID0gTW9kYWwoKTtcblxuICAgIGxldCBjb25mQnRuLHByb2pOYW1lLGNhbmNlbEJ0biwgZ29vZExlbkNoZWNrO1xuXG4gICAgY29uc3QgYnVpbGRNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHByb3RvdHlwZS5tb2RhbC5pbm5lckhUTUwgPSBcbiAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMj5OZXcgcHJvamVjdDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+TmFtZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgc2l6ZT1cIjMwXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbnB1dC1lcnJvcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHItbmFtZS1sZW5ndGhcIj5OYW1lIGJldHdlZW4gMSBhbmQgNTAgY2hhcmFjdGVyczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInByLW5hbWUtbGVuZ3RoXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1hZGQtcHJcIiBjbGFzcz1cImNhbmNlbC1idG4gYnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbmYtYWRkLXByXCIgY2xhc3M9XCJjb25mLWJ0biBidG5cIiA+QWRkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd01vZGFsID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIXByb3RvdHlwZS5hY3RpdmVNb2RhbCl7XG4gICAgICAgICAgICAvL1dFIEJVSUxEIFRIRSBNT0RBTFxuICAgICAgICAgICAgYnVpbGRNb2RhbCgpO1xuICAgICAgICAgICAgLy9NT0RBTCBJUyBBQ1RJVkVcbiAgICAgICAgICAgIHByb3RvdHlwZS5hY3RpdmVNb2RhbD10cnVlO1xuICAgICAgICAgICAgLy9XRSBBREQgVEhFIE1PREFMIFRPIFRIRSBQQUdFXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQocHJvdG90eXBlLm1vZGFsKTtcbiAgICAgICAgICAgIGJpbmRpbmdNb2RhbCgpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnN0IGJpbmRpbmdNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vU0FWRSBTT01FIERPTVxuICAgICAgICBjb25mQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25mLWFkZC1wclwiKTtcbiAgICAgICAgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcbiAgICAgICAgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtYWRkLXByXCIpO1xuICAgICAgICBnb29kTGVuQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByLW5hbWUtbGVuZ3RoXCIpO1xuICAgICAgICAvL1ZBTElEQVRJT05cbiAgICAgICAgcHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsXG4gICAgICAgIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIC8vLy9CSU5ESU5HUyBUSEUgQlVUVE9OUyBPTkNFIFRIRSBNT0RBTCBJUyBBUFBFTkRFRCBPTiBET0NVTUVOVFxuICAgICAgICBjb25mQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uZkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIE15UHJvamVjdHMuYWRkUHJvaihwcm9qTmFtZS52YWx1ZSk7XG4gICAgICAgICAgICBpZihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKXtcbiAgICAgICAgICAgICAgICBzaG93UHJvamVjdHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk15UHJvamVjdHNcIikpKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNob3dQcm9qZWN0cyhNeVByb2plY3RzLnByb2plY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvdG90eXBlLnJlbW92ZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIHByb3RvdHlwZS5yZW1vdmVNb2RhbCk7XG4gICAgICAgIC8vLy9cbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgaWYocHJvak5hbWUudmFsdWUubGVuZ3RoPjAgJiYgcHJvak5hbWUudmFsdWUubGVuZ3RoPDUwKXtcbiAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIGdvb2RMZW5DaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YWxpZD1mYWxzZTtcbiAgICAgICAgICAgIGdvb2RMZW5DaGVjay5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgaWYodmFsaWQpe1xuICAgICAgICAgICAgY29uZkJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbmZCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7c2hvd01vZGFsfTtcbn1cblxuY29uc3QgQWRkVG9kb01vZGFsID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBNb2RhbCgpO1xuICAgIFxuICAgIGxldCBwcm9qU2VsZWN0O1xuICAgIGxldCB0aXRsZUlucHV0O1xuICAgIGxldCBkZXNjcmlwdGlvblRleHQ7XG4gICAgbGV0IGR1ZURhdGVJbnB1dDtcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3Q7XG5cbiAgICBsZXQgZ29vZExlbkNoZWNrO1xuICAgIGxldCBnb29kRGF0ZUNoZWNrO1xuXG4gICAgbGV0IGNvbmZCdG47XG5cbiAgICBjb25zdCBidWlsZE1vZGFsID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcHJvdG90eXBlLm1vZGFsLmlubmVySFRNTCA9IFxuICAgICAgICBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1tb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGgyPk5ldyBUT0RPIGZvcjogPC9oMj5gK1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbFN0cmluZyA9IGA8c2VsZWN0IGlkPVwicHJvamVjdHMtZm9yLXRvZG9cIj5gO1xuICAgICAgICAgICAgICAgICAgICBNeVByb2plY3RzLnByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCxpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sU3RyaW5nKz1gPG9wdGlvbiB2YWx1ZT1cIiR7aW5kZXh9XCI+JHtwcm9qZWN0Lm5hbWV9PC9vcHRpb24+YFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaHRtbFN0cmluZys9YDwvc2VsZWN0PmA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sU3RyaW5nO1xuICAgICAgICAgICAgICAgIH0pKCkrXG4gICAgICAgICAgICBgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRPRE8gdGl0bGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0b2RvLXRpdGxlXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5EZXNjcmlwdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRvZG8tZGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkR1ZSBkYXRlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidG9kby1kdWVkYXRlXCIgdHlwZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qcmlvcml0eTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ0b2RvLXByaW9yaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidmVyeS1sb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJ5IGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG93XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaWdoXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbnB1dC1lcnJvcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby10aXRsZS1sZW5ndGhcIj5UaXRsZSBiZXR3ZWVuIDEgYW5kIDUwIGNoYXJhY3RlcnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2RvLXRpdGxlLWxlbmd0aFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby1kYXRlXCI+UGljayBhIGRhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2RvLWRhdGVcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsLWFkZC10b2RvXCIgY2xhc3M9XCJjYW5jZWwtYnRuIGJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjb25mLWFkZC10b2RvXCIgY2xhc3M9XCJjb25mLWJ0biBidG5cIiA+QWRkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdi8+YDtcbiAgICB9ICBcblxuICAgIGNvbnN0IHNob3dNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCFwcm90b3R5cGUuYWN0aXZlTW9kYWwpe1xuICAgICAgICAgICAgLy9XRSBCVUlMRCBUSEUgTU9EQUxcbiAgICAgICAgICAgIGJ1aWxkTW9kYWwoKTtcbiAgICAgICAgICAgIC8vTU9EQUwgSVMgQUNUSVZFXG4gICAgICAgICAgICBwcm90b3R5cGUuYWN0aXZlTW9kYWw9dHJ1ZTtcbiAgICAgICAgICAgIC8vV0UgQUREIFRIRSBNT0RBTCBUTyBUSEUgUEFHRVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKHByb3RvdHlwZS5tb2RhbCk7XG4gICAgICAgICAgICBiaW5kaW5nTW9kYWwoKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb25zdCBiaW5kaW5nTW9kYWwgPSBmdW5jdGlvbigpe1xuICAgICAgICAvL1NBVkUgU09NRSBET01cbiAgICAgICAgXG4gICAgICAgIHByb2pTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWZvci10b2RvXCIpO1xuICAgICAgICB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlXCIpO1xuICAgICAgICBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kdWVkYXRlXCIpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1wcmlvcml0eVwiKTtcbiAgICAgICAgZ29vZExlbkNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlLWxlbmd0aFwiKTtcbiAgICAgICAgZ29vZERhdGVDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpO1xuICAgICAgICBjb25mQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25mLWFkZC10b2RvXCIpO1xuXG4gICAgICAgIC8vVkFMSURBVElPTlxuICAgICAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLFxuICAgICAgICB2YWxpZGF0aW9uKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixcbiAgICAgICAgdmFsaWRhdGlvblxuICAgICAgICApO1xuICAgICAgICAvLy8vQklORElOR1MgVEhFIEJVVFRPTlMgT05DRSBUSEUgTU9EQUwgSVMgQVBQRU5ERUQgT04gRE9DVU1FTlRcbiAgICAgICAgY29uZkJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbmZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBNeVByb2plY3RzLnByb2plY3RzW3BhcnNlSW50KHByb2pTZWxlY3QudmFsdWUpXS5hZGRUb2RvKHBhcnNlSW50KHByb2pTZWxlY3QudmFsdWUpLHRpdGxlSW5wdXQudmFsdWUsZGVzY3JpcHRpb25UZXh0LnZhbHVlLGR1ZURhdGVJbnB1dC52YWx1ZSxwcmlvcml0eVNlbGVjdC52YWx1ZSk7XG4gICAgICAgICAgICBpZihhY3RpdmVUYWI9PXBhcnNlSW50KHByb2pTZWxlY3QudmFsdWUpKXtcbiAgICAgICAgICAgICAgICBpZihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKXtcblxuICAgICAgICAgICAgICAgICAgICBzaG93VG9Eb3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTXlQcm9qZWN0c1wiKSlbcGFyc2VJbnQocHJvalNlbGVjdC52YWx1ZSldLnRvZG9zXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dQcm9qZWN0cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTXlQcm9qZWN0c1wiKSkgICk7XG5cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RvRG9zKE15UHJvamVjdHMucHJvamVjdHNbcGFyc2VJbnQocHJvalNlbGVjdC52YWx1ZSldLnRvZG9zKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1Byb2plY3RzKE15UHJvamVjdHMucHJvamVjdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvdG90eXBlLnJlbW92ZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLWFkZC10b2RvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICBwcm90b3R5cGUucmVtb3ZlTW9kYWwpO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBnb29kTGVuQ2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGdvb2REYXRlQ2hlY2suY2hlY2tlZD10cnVlO1xuICAgICAgICBjb25zdCBjb25mQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25mLWFkZC10b2RvXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYodGl0bGVJbnB1dC52YWx1ZS5sZW5ndGg9PTAgfHwgdGl0bGVJbnB1dC52YWx1ZS5sZW5ndGg+NTApe1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGdvb2RMZW5DaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGR1ZURhdGVJbnB1dC52YWx1ZT09XCJcIil7XG4gICAgICAgICAgICB2YWxpZD1mYWxzZTtcbiAgICAgICAgICAgIGdvb2REYXRlQ2hlY2suY2hlY2tlZD1mYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHZhbGlkKXtcbiAgICAgICAgICAgIGNvbmZCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25mQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtzaG93TW9kYWx9O1xuXG59XG5cbmNvbnN0IEVkaXRUb2RvTW9kYWwgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IE1vZGFsKCk7XG4gICAgbGV0IGNoZWNrRG9uZTtcblxuICAgIGxldCBwcm9qU2VsZWN0O1xuICAgIGxldCB0aXRsZUlucHV0O1xuICAgIGxldCBkZXNjcmlwdGlvblRleHQ7XG4gICAgbGV0IGR1ZURhdGVJbnB1dDtcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3Q7XG5cbiAgICBsZXQgZ29vZExlbkNoZWNrO1xuICAgIGxldCBnb29kRGF0ZUNoZWNrO1xuXG4gICAgbGV0IGNvbmZCdG47XG5cbiAgICBsZXQgb2xkSW5kLCBvbGRQcm9qO1xuXG4gICAgY29uc3QgYnVpbGRNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHByb3RvdHlwZS5tb2RhbC5pbm5lckhUTUwgPSBcbiAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMj5FZGl0IFRPRE86IDwvaDI+YCtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWxTdHJpbmcgPSBgPHNlbGVjdCBpZD1cInByb2plY3RzLWZvci10b2RvXCI+YDtcbiAgICAgICAgICAgICAgICAgICAgTXlQcm9qZWN0cy5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QsaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFN0cmluZys9YDxvcHRpb24gdmFsdWU9XCIke2luZGV4fVwiPiR7cHJvamVjdC5uYW1lfTwvb3B0aW9uPmBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGh0bWxTdHJpbmcrPWA8L3NlbGVjdD5gO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbFN0cmluZztcbiAgICAgICAgICAgICAgICB9KSgpK1xuICAgICAgICAgICAgYDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5UT0RPIHRpdGxlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidG9kby10aXRsZVwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RGVzY3JpcHRpb248L2gyPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0b2RvLWRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5EdWUgZGF0ZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG8tZHVlZGF0ZVwiIHR5cGU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+UHJpb3JpdHk8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidG9kby1wcmlvcml0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZlcnktbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyeSBsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaXVtXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlnaFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaW5wdXQtZXJyb3JzXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tdGl0bGUtbGVuZ3RoXCI+VGl0bGUgYmV0d2VlbiAwIGFuZCA1MCBjaGFyYWN0ZXJzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidG9kby10aXRsZS1sZW5ndGhcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tZGF0ZVwiPlBpY2sgYSBkYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidG9kby1kYXRlXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1hZGQtdG9kb1wiIGNsYXNzPVwiY2FuY2VsLWJ0biBidG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY29uZi1lZGl0LXRvZG9cIiBjbGFzcz1cImNvbmYtYnRuIGJ0blwiID5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdi8+YDtcbiAgICB9ICBcblxuICAgIGNvbnN0IHNob3dNb2RhbCA9IGZ1bmN0aW9uKG9sZEluZGV4LHByb2plY3RJbmRleCl7XG4gICAgICAgIGlmKCFwcm90b3R5cGUuYWN0aXZlTW9kYWwpe1xuICAgICAgICAgICAgb2xkSW5kID0gb2xkSW5kZXg7XG4gICAgICAgICAgICBvbGRQcm9qID0gcHJvamVjdEluZGV4O1xuXG4gICAgICAgICAgICBjb25zdCB0b2RvVG9FZGl0ID0gTXlQcm9qZWN0cy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW29sZEluZGV4XTtcbiAgICAgICAgICAgIC8vV0UgQlVJTEQgVEhFIE1PREFMXG4gICAgICAgICAgICBidWlsZE1vZGFsKCk7XG4gICAgICAgICAgICAvL01PREFMIElTIEFDVElWRVxuICAgICAgICAgICAgcHJvdG90eXBlLmFjdGl2ZU1vZGFsPXRydWU7XG4gICAgICAgICAgICAvL1dFIEFERCBUSEUgTU9EQUwgVE8gVEhFIFBBR0VcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmRDaGlsZChwcm90b3R5cGUubW9kYWwpO1xuXG4gICAgICAgICAgICBiaW5kaW5nTW9kYWwoKTtcblxuICAgICAgICAgICAgcHJvalNlbGVjdC52YWx1ZSA9IHRvZG9Ub0VkaXQucHJvamVjdEJlbG9uZztcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0b2RvVG9FZGl0LnRpdGxlO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnZhbHVlID0gdG9kb1RvRWRpdC5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRvZG9Ub0VkaXQuZHVlRGF0ZTtcbiAgICAgICAgICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gdG9kb1RvRWRpdC5wcmlvcml0eTtcblxuXG4gICAgICAgICAgICAvL3ZhbGlkYXRlIG1vZGFsIGZpcnN0IGJlY2F1c2UgaW5mb3JtYXRpb24gaXMgbm90IG1lYW50IHRvIGJlIGVtcHR5XG4gICAgICAgICAgICB2YWxpZGF0aW9uKCk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29uc3QgYmluZGluZ01vZGFsID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy9TQVZFIFNPTUUgRE9NXG4gICAgICAgIFxuICAgICAgICBwcm9qU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1mb3ItdG9kb1wiKTtcbiAgICAgICAgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZVwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZHVlZGF0ZVwiKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tcHJpb3JpdHlcIik7XG4gICAgICAgIGdvb2RMZW5DaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZS1sZW5ndGhcIik7XG4gICAgICAgIGdvb2REYXRlQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGF0ZVwiKTtcbiAgICAgICAgY29uZkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZi1lZGl0LXRvZG9cIik7XG4gICAgICAgIGNoZWNrRG9uZSA9IFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrLWRvbmUtdG9kb1tkYXRhLWlkPVwiK1xuICAgICAgICBDU1MuZXNjYXBlKG9sZEluZCkrXCJdXCIrXCJbZGF0YS1wcm9qZWN0PVwiK1xuICAgICAgICBDU1MuZXNjYXBlKG9sZFByb2opK1wiXVwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vVkFMSURBVElPTlxuICAgICAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLFxuICAgICAgICB2YWxpZGF0aW9uKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixcbiAgICAgICAgdmFsaWRhdGlvblxuICAgICAgICApO1xuICAgICAgICAvLy8vQklORElOR1MgVEhFIEJVVFRPTlMgT05DRSBUSEUgTU9EQUwgSVMgQVBQRU5ERUQgT04gRE9DVU1FTlRcbiAgICAgICAgY29uZkJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbmZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBlZGl0VG9kbyhvbGRQcm9qLG9sZEluZCxwYXJzZUludChwcm9qU2VsZWN0LnZhbHVlKSx0aXRsZUlucHV0LnZhbHVlLGRlc2NyaXB0aW9uVGV4dC52YWx1ZSxkdWVEYXRlSW5wdXQudmFsdWUscHJpb3JpdHlTZWxlY3QudmFsdWUsY2hlY2tEb25lLmNoZWNrZWQpO1xuICAgICAgICAgICAgaWYoYWN0aXZlVGFiPT1vbGRQcm9qKXtcbiAgICAgICAgICAgICAgICBzaG93VG9Eb3MoTXlQcm9qZWN0cy5wcm9qZWN0c1tvbGRQcm9qXS50b2Rvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm90b3R5cGUucmVtb3ZlTW9kYWwoKTtcbiAgICAgICAgICAgIHNob3dQcm9qZWN0cyhNeVByb2plY3RzLnByb2plY3RzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLWFkZC10b2RvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICBwcm90b3R5cGUucmVtb3ZlTW9kYWwpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgZ29vZExlbkNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBnb29kRGF0ZUNoZWNrLmNoZWNrZWQ9dHJ1ZTtcblxuICAgICAgICBpZih0aXRsZUlucHV0LnZhbHVlLmxlbmd0aD09MCB8fCB0aXRsZUlucHV0LnZhbHVlLmxlbmd0aD49NTApe1xuICAgICAgICAgICAgdmFsaWQ9ZmFsc2U7XG4gICAgICAgICAgICBnb29kTGVuQ2hlY2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZHVlRGF0ZUlucHV0LnZhbHVlPT1cIlwiKXtcbiAgICAgICAgICAgIHZhbGlkPWZhbHNlO1xuICAgICAgICAgICAgZ29vZERhdGVDaGVjay5jaGVja2VkPWZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsaWQpe1xuICAgICAgICAgICAgY29uZkJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbmZCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge3Nob3dNb2RhbH07XG59XG5cbmNvbnN0IHNob3dQcm9qZWN0cyA9IGZ1bmN0aW9uKHByb2plY3RMaXN0KXtcbiAgICBsZXQgcHJvamVjdHNJdGVtcztcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWl0ZW1zXCIpPT09bnVsbCl7XG4gICAgICAgIHByb2plY3RzSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIHByb2plY3RzSXRlbXMuc2V0QXR0cmlidXRlKFwiaWRcIixcInByb2plY3RzLWl0ZW1zXCIpO1xuICAgIH1lbHNle1xuICAgICAgICBwcm9qZWN0c0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1pdGVtc1wiKTtcbiAgICB9XG4gICAgcHJvamVjdHNJdGVtcy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbVByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGl0ZW1Qcm9qLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4+JHtpdGVtLm5hbWV9PC9zcGFuPjxzcGFuIHRpdGxlPVwiJHtpdGVtLnRvZG9zLmxlbmd0aH0gdG9kb3NcIj4ke2l0ZW0udG9kb3MubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgYDtcbiAgICAgICAgaXRlbVByb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNob3dUb0RvcyhNeVByb2plY3RzLnByb2plY3RzW2luZGV4XS50b2Rvcyk7XG4gICAgICAgICAgICBhY3RpdmVUYWIgPSBpbmRleDtcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdHNJdGVtcy5hcHBlbmRDaGlsZChpdGVtUHJvaik7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIikuYXBwZW5kQ2hpbGQocHJvamVjdHNJdGVtcyk7XG59XG5cbmNvbnN0IHNob3dUb0Rvcz0gZnVuY3Rpb24odG9kb0xpc3Qpe1xuICAgIGNvbnN0IHByb2pJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWluZm9cIik7XG4gICAgcHJvakluZm8uaW5uZXJIVE1MPVwiXCI7XG4gICAgXG4gICAgdG9kb0xpc3QuZm9yRWFjaChmdW5jdGlvbih0b2RvLGluZGV4KXtcbiAgICAgICAgbGV0IGl0ZW1Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaXRlbVRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIix0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgaXRlbVRvZG8uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+JHt0b2RvLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPGgzPkR1ZTogJHt0b2RvLmR1ZURhdGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaW5mbyBzZWUtZWRpdC10b2RvXCIgdGl0bGU9XCJTZWUgLyBlZGl0XCIgZGF0YS1pZD0ke2luZGV4fSBkYXRhLXByb2plY3Q9JHt0b2RvLnByb2plY3RCZWxvbmd9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7aW5kZXh9XCI+RG9uZT88L2xhYmVsPmArXG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9kby5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpbnB1dCBjbGFzcz1cImNoZWNrLWRvbmUtdG9kb1wiIHR5cGU9XCJjaGVja2JveFwiIGRhdGEtaWQ9JHtpbmRleH0gZGF0YS1wcm9qZWN0PSR7dG9kby5wcm9qZWN0QmVsb25nfSBjaGVja2VkPmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxpbnB1dCBjbGFzcz1cImNoZWNrLWRvbmUtdG9kb1wiIHR5cGU9XCJjaGVja2JveFwiIGRhdGEtaWQ9JHtpbmRleH0gZGF0YS1wcm9qZWN0PSR7dG9kby5wcm9qZWN0QmVsb25nfT5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSgpK1xuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2ggZGVsZXRlLXRvZG9cIiB0aXRsZT1cIkRlbGV0ZSBUb2RvXCIgZGF0YS1pZD0ke2luZGV4fSBkYXRhLXByb2plY3Q9JHt0b2RvLnByb2plY3RCZWxvbmd9PjwvaT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgcHJvakluZm8uYXBwZW5kQ2hpbGQoaXRlbVRvZG8pO1xuICAgIH0pO1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWUtZWRpdC10b2RvXCIpKS5mb3JFYWNoKGJ1dHRvbj0+e1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBlZGl0VG9kb01vZGFsID0gRWRpdFRvZG9Nb2RhbCgpO1xuICAgICAgICAgICAgZWRpdFRvZG9Nb2RhbC5zaG93TW9kYWwocGFyc2VJbnQodGhpcy5kYXRhc2V0LmlkKSxwYXJzZUludCh0aGlzLmRhdGFzZXQucHJvamVjdCkpO1xuICAgICAgICAgICAgLy9lZGl0VG9kb01vZGFsLnNob3dNb2RhbCh0aGlzLmRhdGFzZXQuaWQsdGhpcy5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVjay1kb25lLXRvZG9cIikpLmZvckVhY2goY2hlY2s9PntcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY2hlY2tUb2RvRG9uZSh0aGlzLmRhdGFzZXQucHJvamVjdCx0aGlzLmRhdGFzZXQuaWQsdGhpcy5jaGVja2VkKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXRvZG9cIikpLmZvckVhY2goYnV0dG9uPT57XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgZGVsZXRlVG9kbyh0aGlzLmRhdGFzZXQucHJvamVjdCx0aGlzLmRhdGFzZXQuaWQpO1xuXG4gICAgICAgICAgICBzaG93VG9Eb3MoTXlQcm9qZWN0cy5wcm9qZWN0c1t0aGlzLmRhdGFzZXQucHJvamVjdF0udG9kb3MpO1xuICAgICAgICAgICAgc2hvd1Byb2plY3RzKE15UHJvamVjdHMucHJvamVjdHMpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuZXhwb3J0IHtpbml0aWFsUGFnZSxzaG93UHJvamVjdHMsc2hvd1RvRG9zfTtcblxuLypcblxuKi8iLCJcbmNvbnN0IHRvZG9JdGVtID0gZnVuY3Rpb24ocHJvamVjdEJlbG9uZyx0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNoZWNrZWQgPSBmYWxzZSl7XG4gICAgcmV0dXJuIHtwcm9qZWN0QmVsb25nLHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksY2hlY2tlZH07XG59XG5cbmNvbnN0IFByb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICBsZXQgdG9kb3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvZG89IGZ1bmN0aW9uKHByb2plY3RCZWxvbmcsdGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjaGVja2VkID0gZmFsc2Upe1xuICAgICAgICBsZXQgdG9kbyA9IHRvZG9JdGVtKHByb2plY3RCZWxvbmcsdGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjaGVja2VkKVxuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBpZihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKXtcbiAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtuYW1lLGFkZFRvZG8sIGdldCB0b2Rvcygpe3JldHVybiB0b2Rvc30sIHNldCB0b2Rvcyh0b2RvTGlzdCl7dG9kb3MgPSB0b2RvTGlzdH19O1xufVxuXG5jb25zdCBNeVByb2plY3RzID0gKGZ1bmN0aW9uKCl7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgXG4gICAgY29uc3QgYWRkUHJvaiA9IGZ1bmN0aW9uKHByTmFtZSl7XG4gICAgICAgIFxuICAgICAgICBpZihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKXtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2goUHJvamVjdChwck5hbWUpKTtcbiAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2goUHJvamVjdChwck5hbWUpKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiB7YWRkUHJvaixnZXQgcHJvamVjdHMoKXtyZXR1cm4gcHJvamVjdHN9LCBzZXQgcHJvamVjdHMocHJvanMpe3Byb2plY3RzID0gcHJvanN9fTtcbn0pKCk7XG5cbmNvbnN0IGVkaXRUb2RvID0gZnVuY3Rpb24ob2xkUHJvaixvbGRJbmQsbmV3UHJvaix0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNoZWNrZWQpe1xuICAgIFxuICAgIGxldCBuZXdWZXJUb2RvID0gdG9kb0l0ZW0obmV3UHJvaix0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNoZWNrZWQpO1xuICAgIFxuICAgIC8vV2UgcmVtb3ZlIHRoZSB0b2RvIGZyb20gdGhlIHByb2plY3QgaXQgd2FzIG9uXG4gICAgTXlQcm9qZWN0cy5wcm9qZWN0c1tvbGRQcm9qXS50b2Rvcy5zcGxpY2Uob2xkSW5kLDEpO1xuICAgIE15UHJvamVjdHMucHJvamVjdHNbbmV3UHJval0uYWRkVG9kbyhcbiAgICAgICAgbmV3VmVyVG9kby5wcm9qZWN0QmVsb25nLFxuICAgICAgICBuZXdWZXJUb2RvLnRpdGxlLFxuICAgICAgICBuZXdWZXJUb2RvLmRlc2NyaXB0aW9uLFxuICAgICAgICBuZXdWZXJUb2RvLmR1ZURhdGUsXG4gICAgICAgIG5ld1ZlclRvZG8ucHJpb3JpdHksXG4gICAgICAgIG5ld1ZlclRvZG8uY2hlY2tlZFxuICAgICk7IFxuICAgIFxuICAgIGlmKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpe1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTsgXG4gICAgfVxufVxuXG5jb25zdCBjaGVja1RvZG9Eb25lID0gZnVuY3Rpb24ocHJvamVjdEluZCwgdG9kb0luZCwgY2hlY2tlZCl7XG4gICAgTXlQcm9qZWN0cy5wcm9qZWN0c1twcm9qZWN0SW5kXS50b2Rvc1t0b2RvSW5kXS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICBjb25zb2xlLmxvZyhNeVByb2plY3RzLnByb2plY3RzKVxuICAgIGlmKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpe1xuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTsgXG4gICAgfVxufVxuXG5jb25zdCBkZWxldGVUb2RvID0gZnVuY3Rpb24ocHJvakluZCwgdG9kb0luZCl7XG4gICAgTXlQcm9qZWN0cy5wcm9qZWN0c1twcm9qSW5kXS50b2Rvcy5zcGxpY2UodG9kb0luZCwxKTtcbiAgICBpZihzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKXtcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7IFxuICAgIH1cbn1cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbigpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTXlQcm9qZWN0c1wiLEpTT04uc3RyaW5naWZ5KE15UHJvamVjdHMucHJvamVjdHMpKTtcbn1cblxuZXhwb3J0IHtNeVByb2plY3RzLCBQcm9qZWN0LCBlZGl0VG9kbywgY2hlY2tUb2RvRG9uZSwgZGVsZXRlVG9kbywgc3RvcmFnZUF2YWlsYWJsZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0aWFsUGFnZSwgc2hvd1Byb2plY3RzLCBzaG93VG9Eb3N9IGZyb20gXCIuL0RPTS5qc1wiO1xuaW1wb3J0IHsgc3RvcmFnZUF2YWlsYWJsZSwgTXlQcm9qZWN0cyxQcm9qZWN0fSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xuXG5pbml0aWFsUGFnZSgpO1xuXG5pZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIFxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTXlQcm9qZWN0c1wiKSl7XG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJNeVByb2plY3RzXCIpKS5mb3JFYWNoKChwcm9qZWN0LGluZGV4KSA9PiB7XG4gICAgICAgICAgICBNeVByb2plY3RzLnByb2plY3RzLnB1c2goUHJvamVjdChwcm9qZWN0Lm5hbWUpKTtcbiAgICAgICAgICAgIE15UHJvamVjdHMucHJvamVjdHNbaW5kZXhdLnRvZG9zID0gcHJvamVjdC50b2RvcztcbiAgICAgICAgfSk7XG4gICAgICAgIHNob3dQcm9qZWN0cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTXlQcm9qZWN0c1wiKSkpO1xuICAgICAgICBzaG93VG9Eb3MoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk15UHJvamVjdHNcIikpWzBdLnRvZG9zKTtcblxuICAgIH1lbHNle1xuXG4gICAgICAgIE15UHJvamVjdHMucHJvamVjdHMucHVzaChQcm9qZWN0KFwiREVGQVVMVFwiKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTXlQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShNeVByb2plY3RzLnByb2plY3RzKSk7XG4gICAgICAgIHNob3dQcm9qZWN0cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTXlQcm9qZWN0c1wiKSkpO1xuICAgICAgICBzaG93VG9Eb3MoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk15UHJvamVjdHNcIikpWzBdLnRvZG9zKTtcblxuICAgIH1cbn0gZWxzZSB7XG4gICAgc2hvd1Byb2plY3RzKE15UHJvamVjdHMucHJvamVjdHMpO1xuICAgIHNob3dUb0RvcyhNeVByb2plY3RzLnByb2plY3RzWzBdLnRvZG9zKTtcbn1cblxuZXhwb3J0IHtzdG9yYWdlQXZhaWxhYmxlfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=