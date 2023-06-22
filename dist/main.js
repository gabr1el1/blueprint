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
/* harmony export */   showProjects: () => (/* binding */ showProjects)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _assets_logoShortWhite_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logoShortWhite.png */ "./src/assets/logoShortWhite.png");
/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models.js */ "./src/models.js");



let activeTab = 0;
/*
TODOS: 
--Agregar Local Storage
*/

/*
local storage: 
localStorage.setItem("MyProjects",MyProjects.projects)

Ahora ya sabes que localStorage te permite guardar como json
clave y valor pero solo como string, JSON.stringify es IMPORTANTE para guardar
y JSON.parse es IMPORTANTE para extraer, recuperar valores
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
    console.log(JSON.parse(localStorage.getItem("MyProjects")));
    showProjects(_models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
    showToDos(_models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[0].todos);
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
            addProj(projName.value);
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
                    _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects.forEach(function(project,index){
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
            let todo = (0,_models_js__WEBPACK_IMPORTED_MODULE_2__.todoItem)(parseInt(projSelect.value),titleInput.value,descriptionText.value,dueDateInput.value,prioritySelect.value);
            addToDo(todo);
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
    
    let projSelect;
    let titleInput;
    let descriptionText;
    let dueDateInput;
    let prioritySelect;

    let goodLenCheck;
    let goodDateCheck;

    let confBtn;

    let todoInd, projInd;

    const buildModal = function(){
        prototype.modal.innerHTML = 
        `
        <div class="inner-modal">
            <div class="modal-title">
                <h2>Edit TODO: </h2>`+
                (function(){
                    let htmlString = `<select id="projects-for-todo">`;
                    _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects.forEach(function(project,index){
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

    const showModal = function(todoIndex,projectIndex){
        if(!prototype.activeModal){
            todoInd = todoIndex;
            projInd = projectIndex;

            const todoToEdit = _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projectIndex].todos[todoIndex];
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
            editToDo(parseInt(projSelect.value),titleInput.value,descriptionText.value,dueDateInput.value,prioritySelect.value);

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

    const editToDo = function(projBelong,title,description,dueDate,priority){
        //We edit the todo in the project it belongs
        _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd].projectBelong = projBelong;
        _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd].title = title;
        _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd].description = description;
        _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd].dueDate = dueDate;
        _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd].priority = priority;
        let newVerTodo = _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd];
        //We remove the todo from the project it was on
        _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos.splice(todoInd,1);
        _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projBelong].addToDo(newVerTodo);
        
        if(activeTab==projInd){
            showToDos(_models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos);
        }
        prototype.removeModal();
        showProjects(_models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
    }

    return {showModal};
}

const addProj = function(projName){
    _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.addProj(projName);
    showProjects(_models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
}

const addToDo = function(todoItem){
    _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[todoItem.projectBelong].addToDo(todoItem);
    if(activeTab==todoItem.projectBelong){
        showToDos(_models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[todoItem.projectBelong].todos);
    }
    showProjects(_models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
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
            showToDos(_models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[index].todos);
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
            _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[this.dataset.project].todos[this.dataset.id].checked = this.checked;
        });
    });

    Array.from(document.querySelectorAll(".delete-todo")).forEach(button=>{
        button.addEventListener("click",function(){
            console.log(typeof this.dataset.id);
            _models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[this.dataset.project].todos.splice(this.dataset.id,1);
            showToDos(_models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[this.dataset.project].todos);
            showProjects(_models_js__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
        })
    })
}



/***/ }),

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyProjects: () => (/* binding */ MyProjects),
/* harmony export */   todoItem: () => (/* binding */ todoItem)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


const todoItem = function(projectBelong,title,description,dueDate,priority,checked = false){

    return {projectBelong,title,description,dueDate,priority,checked};
}
const Project = function(name){
    let todos = [];

    const addToDo= function(todoItem){
        todos.push(todoItem);
    }
    return {name,addToDo, get todos(){return todos}};
}

const MyProjects = (function(){
    let projects = [];
    
    const addProj = function(prName){
        projects.push(Project(prName));
    }

    addProj("DEFAULT");
    
    return {addProj,get projects(){return projects}};
})();



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
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");


(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.initialPage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUM1bEJxQzs7QUFFckM7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBCQUEwQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksdUJBQXVCO0FBQ25DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7OztBQ0F1Qzs7QUFFdkMsb0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2RlbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxib2R5e1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxudWx7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuI2NvbnRlbnR7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb250ZW50LWluZm97XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmhlYWRlcntcXG4gICAgYmFja2dyb3VuZDogcm95YWxibHVlO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbmhlYWRlciAjbG9nb3tcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuI3Byb2plY3QtbGlzdHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gICAgcmVzaXplOiBob3Jpem9udGFsO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QgbGl7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cyBlYXNlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIFxcbn1cXG5cXG4jcHJvamVjdC1saXN0IGxpOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QuaGlkZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxubGkgaXtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcblxcbiNwcm9qZWN0LWluZm97XFxuICAgIGZsZXg6IDM7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG4udG9kb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4udG9kby52ZXJ5LWxvd3tcXG4gICAgYmFja2dyb3VuZDogcm95YWxibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLnZlcnktbG93OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCAzcHggcm95YWxibHVlO1xcbn1cXG5cXG4udG9kby5sb3d7XFxuICAgIGJhY2tncm91bmQ6IHBhbGVncmVlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby5sb3c6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IHBhbGVncmVlbjtcXG59XFxuXFxuLnRvZG8ubWVkaXVte1xcbiAgICBiYWNrZ3JvdW5kOiBjb3JhbDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby5tZWRpdW06aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IGNvcmFsO1xcbn1cXG5cXG4udG9kby5oaWdoe1xcbiAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLmhpZ2g6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IGNyaW1zb247XFxufVxcblxcblxcbi5vcHRpb25zLXRvZG97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogNXB4O1xcbn1cXG4ub3B0aW9uLWJ1dHRvbntcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmVkaXQtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcbiAgICBjb2xvcjogbmF2eTtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcbi5tb2RhbHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYxMSk7XFxufVxcbi5pbm5lci1tb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOndoaXRlc21va2U7XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgNTAlLCA2MDBweCk7XFxuICAgIGhlaWdodDogNjB2aDtcXG59XFxuLmlubmVyLW1vZGFsID4gZGl2e1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIFxcbn1cXG5cXG4ubW9kYWwtaW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtaW5mbyA+IGRpdntcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLm1vZGFsLWluZm8gPiBkaXYgPiBpbnB1dCwgdGV4dGFyZWF7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuLmlubmVyLW1vZGFsID4gLm1vZGFsLXRpdGxlLCAubW9kYWwtYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICBcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uaW5uZXItbW9kYWwgPiAubW9kYWwtdGl0bGUsIC5tb2RhbC1pbmZvLCAubW9kYWwtaW5wdXQtZXJyb3Jze1xcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuLmlubmVyLW1vZGFsID4gLm1vZGFsLWluZm97XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uaW5uZXItbW9kYWwgPiAubW9kYWwtaW5mbyA+IGRpdiA+ICp7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLm1vZGFsLWJ1dHRvbnMgPiBidXR0b257XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBcXG59XFxuLmJ0bntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbn1cXG4uYnRuOmRpc2FibGVke1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbi5jYW5jZWwtYnRue1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLmNvbmYtYnRue1xcbiAgICBjb2xvcjogZGFya2JsdWU7XFxuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XFxufVxcblxcbml7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxufVxcbmk6aG92ZXJ7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzSEFBc0g7QUFDMUg7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLE9BQU87SUFDUCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsYm9keXtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbnVse1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbiNjb250ZW50e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29udGVudC1pbmZve1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5oZWFkZXIgI2xvZ297XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0LWxpc3R7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxuICAgIHJlc2l6ZTogaG9yaXpvbnRhbDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IGxpe1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHMgZWFzZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG59XFxuXFxuI3Byb2plY3QtbGlzdCBsaTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xcbn1cXG5cXG4jcHJvamVjdC1saXN0LmhpZGV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmxpIGl7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5cXG4jcHJvamVjdC1pbmZve1xcbiAgICBmbGV4OiAzO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuLnRvZG97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnRvZG8udmVyeS1sb3d7XFxuICAgIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby52ZXJ5LWxvdzpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggM3B4IHJveWFsYmx1ZTtcXG59XFxuXFxuLnRvZG8ubG93e1xcbiAgICBiYWNrZ3JvdW5kOiBwYWxlZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8ubG93OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCBwYWxlZ3JlZW47XFxufVxcblxcbi50b2RvLm1lZGl1bXtcXG4gICAgYmFja2dyb3VuZDogY29yYWw7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8ubWVkaXVtOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCBjb3JhbDtcXG59XFxuXFxuLnRvZG8uaGlnaHtcXG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby5oaWdoOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCBjcmltc29uO1xcbn1cXG5cXG5cXG4ub3B0aW9ucy10b2Rve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDVweDtcXG59XFxuLm9wdGlvbi1idXR0b257XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5lZGl0LWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG4gICAgY29sb3I6IG5hdnk7XFxufVxcblxcbi5kZWxldGUtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG4ubW9kYWx7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MTEpO1xcbn1cXG4uaW5uZXItbW9kYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDUwJSwgNjAwcHgpO1xcbiAgICBoZWlnaHQ6IDYwdmg7XFxufVxcbi5pbm5lci1tb2RhbCA+IGRpdntcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBcXG59XFxuXFxuLm1vZGFsLWluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1vZGFsLWluZm8gPiBkaXZ7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5tb2RhbC1pbmZvID4gZGl2ID4gaW5wdXQsIHRleHRhcmVhe1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuaW5wdXR7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiA5NXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi5pbm5lci1tb2RhbCA+IC5tb2RhbC10aXRsZSwgLm1vZGFsLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXFxuICAgIGdhcDogMTBweDtcXG59XFxuLmlubmVyLW1vZGFsID4gLm1vZGFsLXRpdGxlLCAubW9kYWwtaW5mbywgLm1vZGFsLWlucHV0LWVycm9yc3tcXG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxufVxcbi5pbm5lci1tb2RhbCA+IC5tb2RhbC1pbmZve1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuLmlubmVyLW1vZGFsID4gLm1vZGFsLWluZm8gPiBkaXYgPiAqe1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5tb2RhbC1idXR0b25zID4gYnV0dG9ue1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgXFxufVxcbi5idG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG59XFxuLmJ0bjpkaXNhYmxlZHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG4uY2FuY2VsLWJ0bntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5jb25mLWJ0bntcXG4gICAgY29sb3I6IGRhcmtibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xcbn1cXG5cXG5pe1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbn1cXG5pOmhvdmVye1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgbG9nb1NyYyBmcm9tIFwiLi9hc3NldHMvbG9nb1Nob3J0V2hpdGUucG5nXCI7XG5pbXBvcnQgeyBNeVByb2plY3RzLHRvZG9JdGVtIH0gZnJvbSBcIi4vbW9kZWxzLmpzXCI7XG5sZXQgYWN0aXZlVGFiID0gMDtcbi8qXG5UT0RPUzogXG4tLUFncmVnYXIgTG9jYWwgU3RvcmFnZVxuKi9cblxuLypcbmxvY2FsIHN0b3JhZ2U6IFxubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJNeVByb2plY3RzXCIsTXlQcm9qZWN0cy5wcm9qZWN0cylcblxuQWhvcmEgeWEgc2FiZXMgcXVlIGxvY2FsU3RvcmFnZSB0ZSBwZXJtaXRlIGd1YXJkYXIgY29tbyBqc29uXG5jbGF2ZSB5IHZhbG9yIHBlcm8gc29sbyBjb21vIHN0cmluZywgSlNPTi5zdHJpbmdpZnkgZXMgSU1QT1JUQU5URSBwYXJhIGd1YXJkYXJcbnkgSlNPTi5wYXJzZSBlcyBJTVBPUlRBTlRFIHBhcmEgZXh0cmFlciwgcmVjdXBlcmFyIHZhbG9yZXNcbiovXG5mdW5jdGlvbiBpbml0aWFsUGFnZSgpe1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgY29udGVudEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnRJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjb250ZW50LWluZm9cIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsXG4gICAgYFxuICAgIDx1bD48bGk+PGltZyBzcmM9XCIke2xvZ29TcmN9XCIgaWQ9XCJsb2dvXCI+PC9saT48bGk+PC9saT48L3VsPlxuICAgIDx1bD48bGk+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCIgaWQ9XCJhZGQtdG9kb1wiIHRpdGxlPVwiQWRkIHRvZG9cIj48L2k+PC9saT48L3VsPlxuICAgIGBcbiAgICApO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgcHJvamVjdExpc3Quc2V0QXR0cmlidXRlKFwiaWRcIixcInByb2plY3QtbGlzdFwiKTtcbiAgICBwcm9qZWN0TGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsXG4gICAgYFxuICAgIDx1bD5cbiAgICA8bGk+PGgyPk15IHByb2plY3RzPC9oMj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdXNcIiBpZD1cImFkZC1wcm9qZWN0XCIgdGl0bGU9XCJBZGQgcHJvamVjdFwiPjwvaT48L2xpPlxuICAgIDwvdWw+XG4gICAgYCk7XG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwcm9qZWN0LWluZm9cIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudEluZm8uYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuICAgIGNvbnRlbnRJbmZvLmFwcGVuZENoaWxkKHByb2plY3RJbmZvKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRJbmZvKTtcblxuICAgIC8vQklORElOR1NcbiAgICBjb25zdCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcbiAgICBcbiAgICBidG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGFkZFByb2pNb2RhbCA9IEFkZFByb2pNb2RhbCgpO1xuICAgICAgICBhZGRQcm9qTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dvXCIpO1xuICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgcHJvakxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKVxuICAgICAgICBwcm9qTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ0bkFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvXCIpO1xuICAgIGJ0bkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgYWRkVG9kb01vZGFsID0gQWRkVG9kb01vZGFsKCk7XG4gICAgICAgIGFkZFRvZG9Nb2RhbC5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTXlQcm9qZWN0c1wiKSkpO1xuICAgIHNob3dQcm9qZWN0cyhNeVByb2plY3RzLnByb2plY3RzKTtcbiAgICBzaG93VG9Eb3MoTXlQcm9qZWN0cy5wcm9qZWN0c1swXS50b2Rvcyk7XG59XG5cbmNvbnN0IE1vZGFsID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgYWN0aXZlTW9kYWwgPSBmYWxzZTtcbiAgICAvL0NyZWF0ZSBtb2RhbCBlbGVtZW50XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgICBcbiAgICBjb25zdCByZW1vdmVNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICBhY3RpdmVNb2RhbD1mYWxzZTtcbiAgICB9XG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLUFUVEVOVElPTi0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vcmV0dXJuIHttb2RhbCxhY3RpdmVNb2RhbCxyZW1vdmVNb2RhbH07XG4gICAgXG4gICAgSGVyZSB0aGlzIE1vZGFsIGZhY3RvcnkgaXMgcmV0dXJuaW5nIGFuIG9iamVjdCxcbiAgICB3aGVuIGFjY2VzaW5nIHRoZSBhY3RpdmVNb2RhbCBwcm9wZXJ0eSB5b3UgYXJlXG4gICAgYWNjZXNpbmcgdGhlIG9iamVjdCBwcm9wZXJ0eSBJVFNFTEYgQlVUIE5PVCBUSEUgXG4gICAgVkFSSUFCTEUgYWN0aXZlTW9kYWwgaW4gdGhlIHNjb3BlIG9mIE1vZGFsIHdpY2ggaXMgdXNpbmcgXG4gICAgcmVtb3ZlTW9kYWwgbWV0aG9kXG5cbiAgICBPTkUgV0FZIFRPIEFDQ0VTUyB0aGlzIHZhcmlhYmxlIGlzIHVzaW5nIGdldHRlcnNcbiAgICBhbmQgc2V0dGVycyBmdW5jdGlvbnNcblxuICAgIFNvbWUgaW5mbyBhbmQgZXhhbXBsZXMgOiBcbiAgICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82NTU5MDExNC9mYWN0b3J5LWZ1bmN0aW9uLW1ldGhvZC1ub3QtdXBkYXRpbmctdmFyaWFibGUgXG4gICAgKi9cblxuICAgIHJldHVybiB7bW9kYWwsXG4gICAgICAgICAgICBnZXQgYWN0aXZlTW9kYWwoKXtyZXR1cm4gYWN0aXZlTW9kYWx9LCBcbiAgICAgICAgICAgIHNldCBhY3RpdmVNb2RhbChib29sKXthY3RpdmVNb2RhbCA9IGJvb2x9LFxuICAgICAgICAgICAgcmVtb3ZlTW9kYWxcbiAgICAgICAgfTtcbn1cbmNvbnN0IEFkZFByb2pNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgcHJvdG90eXBlID0gTW9kYWwoKTtcblxuICAgIGxldCBjb25mQnRuLHByb2pOYW1lLGNhbmNlbEJ0biwgZ29vZExlbkNoZWNrO1xuXG4gICAgY29uc3QgYnVpbGRNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHByb3RvdHlwZS5tb2RhbC5pbm5lckhUTUwgPSBcbiAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMj5OZXcgcHJvamVjdDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+TmFtZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgc2l6ZT1cIjMwXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbnB1dC1lcnJvcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHItbmFtZS1sZW5ndGhcIj5OYW1lIGJldHdlZW4gMSBhbmQgNTAgY2hhcmFjdGVyczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInByLW5hbWUtbGVuZ3RoXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1hZGQtcHJcIiBjbGFzcz1cImNhbmNlbC1idG4gYnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbmYtYWRkLXByXCIgY2xhc3M9XCJjb25mLWJ0biBidG5cIiA+QWRkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd01vZGFsID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIXByb3RvdHlwZS5hY3RpdmVNb2RhbCl7XG4gICAgICAgICAgICAvL1dFIEJVSUxEIFRIRSBNT0RBTFxuICAgICAgICAgICAgYnVpbGRNb2RhbCgpO1xuICAgICAgICAgICAgLy9NT0RBTCBJUyBBQ1RJVkVcbiAgICAgICAgICAgIHByb3RvdHlwZS5hY3RpdmVNb2RhbD10cnVlO1xuICAgICAgICAgICAgLy9XRSBBREQgVEhFIE1PREFMIFRPIFRIRSBQQUdFXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQocHJvdG90eXBlLm1vZGFsKTtcbiAgICAgICAgICAgIGJpbmRpbmdNb2RhbCgpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnN0IGJpbmRpbmdNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vU0FWRSBTT01FIERPTVxuICAgICAgICBjb25mQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25mLWFkZC1wclwiKTtcbiAgICAgICAgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcbiAgICAgICAgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtYWRkLXByXCIpO1xuICAgICAgICBnb29kTGVuQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByLW5hbWUtbGVuZ3RoXCIpO1xuICAgICAgICAvL1ZBTElEQVRJT05cbiAgICAgICAgcHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsXG4gICAgICAgIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIC8vLy9CSU5ESU5HUyBUSEUgQlVUVE9OUyBPTkNFIFRIRSBNT0RBTCBJUyBBUFBFTkRFRCBPTiBET0NVTUVOVFxuICAgICAgICBjb25mQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uZkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFkZFByb2oocHJvak5hbWUudmFsdWUpO1xuICAgICAgICAgICAgcHJvdG90eXBlLnJlbW92ZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIHByb3RvdHlwZS5yZW1vdmVNb2RhbCk7XG4gICAgICAgIC8vLy9cbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgaWYocHJvak5hbWUudmFsdWUubGVuZ3RoPjAgJiYgcHJvak5hbWUudmFsdWUubGVuZ3RoPDUwKXtcbiAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIGdvb2RMZW5DaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YWxpZD1mYWxzZTtcbiAgICAgICAgICAgIGdvb2RMZW5DaGVjay5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgaWYodmFsaWQpe1xuICAgICAgICAgICAgY29uZkJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbmZCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7c2hvd01vZGFsfTtcbn1cblxuY29uc3QgQWRkVG9kb01vZGFsID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBNb2RhbCgpO1xuICAgIFxuICAgIGxldCBwcm9qU2VsZWN0O1xuICAgIGxldCB0aXRsZUlucHV0O1xuICAgIGxldCBkZXNjcmlwdGlvblRleHQ7XG4gICAgbGV0IGR1ZURhdGVJbnB1dDtcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3Q7XG5cbiAgICBsZXQgZ29vZExlbkNoZWNrO1xuICAgIGxldCBnb29kRGF0ZUNoZWNrO1xuXG4gICAgbGV0IGNvbmZCdG47XG5cbiAgICBjb25zdCBidWlsZE1vZGFsID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcHJvdG90eXBlLm1vZGFsLmlubmVySFRNTCA9IFxuICAgICAgICBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1tb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGgyPk5ldyBUT0RPIGZvcjogPC9oMj5gK1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbFN0cmluZyA9IGA8c2VsZWN0IGlkPVwicHJvamVjdHMtZm9yLXRvZG9cIj5gO1xuICAgICAgICAgICAgICAgICAgICBNeVByb2plY3RzLnByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCxpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sU3RyaW5nKz1gPG9wdGlvbiB2YWx1ZT1cIiR7aW5kZXh9XCI+JHtwcm9qZWN0Lm5hbWV9PC9vcHRpb24+YFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaHRtbFN0cmluZys9YDwvc2VsZWN0PmA7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sU3RyaW5nO1xuICAgICAgICAgICAgICAgIH0pKCkrXG4gICAgICAgICAgICBgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlRPRE8gdGl0bGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0b2RvLXRpdGxlXCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5EZXNjcmlwdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRvZG8tZGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkR1ZSBkYXRlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidG9kby1kdWVkYXRlXCIgdHlwZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Qcmlvcml0eTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ0b2RvLXByaW9yaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidmVyeS1sb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJ5IGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG93XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZWRpdW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaWdoXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbnB1dC1lcnJvcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby10aXRsZS1sZW5ndGhcIj5UaXRsZSBiZXR3ZWVuIDEgYW5kIDUwIGNoYXJhY3RlcnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2RvLXRpdGxlLWxlbmd0aFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby1kYXRlXCI+UGljayBhIGRhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2RvLWRhdGVcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsLWFkZC10b2RvXCIgY2xhc3M9XCJjYW5jZWwtYnRuIGJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjb25mLWFkZC10b2RvXCIgY2xhc3M9XCJjb25mLWJ0biBidG5cIiA+QWRkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdi8+YDtcbiAgICB9ICBcblxuICAgIGNvbnN0IHNob3dNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCFwcm90b3R5cGUuYWN0aXZlTW9kYWwpe1xuICAgICAgICAgICAgLy9XRSBCVUlMRCBUSEUgTU9EQUxcbiAgICAgICAgICAgIGJ1aWxkTW9kYWwoKTtcbiAgICAgICAgICAgIC8vTU9EQUwgSVMgQUNUSVZFXG4gICAgICAgICAgICBwcm90b3R5cGUuYWN0aXZlTW9kYWw9dHJ1ZTtcbiAgICAgICAgICAgIC8vV0UgQUREIFRIRSBNT0RBTCBUTyBUSEUgUEFHRVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKHByb3RvdHlwZS5tb2RhbCk7XG4gICAgICAgICAgICBiaW5kaW5nTW9kYWwoKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb25zdCBiaW5kaW5nTW9kYWwgPSBmdW5jdGlvbigpe1xuICAgICAgICAvL1NBVkUgU09NRSBET01cbiAgICAgICAgXG4gICAgICAgIHByb2pTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWZvci10b2RvXCIpO1xuICAgICAgICB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlXCIpO1xuICAgICAgICBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kdWVkYXRlXCIpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1wcmlvcml0eVwiKTtcbiAgICAgICAgZ29vZExlbkNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlLWxlbmd0aFwiKTtcbiAgICAgICAgZ29vZERhdGVDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpO1xuICAgICAgICBjb25mQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25mLWFkZC10b2RvXCIpO1xuXG4gICAgICAgIC8vVkFMSURBVElPTlxuICAgICAgICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLFxuICAgICAgICB2YWxpZGF0aW9uKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixcbiAgICAgICAgdmFsaWRhdGlvblxuICAgICAgICApO1xuICAgICAgICAvLy8vQklORElOR1MgVEhFIEJVVFRPTlMgT05DRSBUSEUgTU9EQUwgSVMgQVBQRU5ERUQgT04gRE9DVU1FTlRcbiAgICAgICAgY29uZkJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGNvbmZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IHRvZG9JdGVtKHBhcnNlSW50KHByb2pTZWxlY3QudmFsdWUpLHRpdGxlSW5wdXQudmFsdWUsZGVzY3JpcHRpb25UZXh0LnZhbHVlLGR1ZURhdGVJbnB1dC52YWx1ZSxwcmlvcml0eVNlbGVjdC52YWx1ZSk7XG4gICAgICAgICAgICBhZGRUb0RvKHRvZG8pO1xuICAgICAgICAgICAgcHJvdG90eXBlLnJlbW92ZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC1hZGQtdG9kb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgcHJvdG90eXBlLnJlbW92ZU1vZGFsKTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgZ29vZExlbkNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBnb29kRGF0ZUNoZWNrLmNoZWNrZWQ9dHJ1ZTtcbiAgICAgICAgY29uc3QgY29uZkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZi1hZGQtdG9kb1wiKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRpdGxlSW5wdXQudmFsdWUubGVuZ3RoPT0wIHx8IHRpdGxlSW5wdXQudmFsdWUubGVuZ3RoPjUwKXtcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBnb29kTGVuQ2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihkdWVEYXRlSW5wdXQudmFsdWU9PVwiXCIpe1xuICAgICAgICAgICAgdmFsaWQ9ZmFsc2U7XG4gICAgICAgICAgICBnb29kRGF0ZUNoZWNrLmNoZWNrZWQ9ZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih2YWxpZCl7XG4gICAgICAgICAgICBjb25mQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uZkJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB7c2hvd01vZGFsfTtcblxufVxuXG5jb25zdCBFZGl0VG9kb01vZGFsID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBwcm90b3R5cGUgPSBNb2RhbCgpO1xuICAgIFxuICAgIGxldCBwcm9qU2VsZWN0O1xuICAgIGxldCB0aXRsZUlucHV0O1xuICAgIGxldCBkZXNjcmlwdGlvblRleHQ7XG4gICAgbGV0IGR1ZURhdGVJbnB1dDtcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3Q7XG5cbiAgICBsZXQgZ29vZExlbkNoZWNrO1xuICAgIGxldCBnb29kRGF0ZUNoZWNrO1xuXG4gICAgbGV0IGNvbmZCdG47XG5cbiAgICBsZXQgdG9kb0luZCwgcHJvakluZDtcblxuICAgIGNvbnN0IGJ1aWxkTW9kYWwgPSBmdW5jdGlvbigpe1xuICAgICAgICBwcm90b3R5cGUubW9kYWwuaW5uZXJIVE1MID0gXG4gICAgICAgIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLW1vZGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDI+RWRpdCBUT0RPOiA8L2gyPmArXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sU3RyaW5nID0gYDxzZWxlY3QgaWQ9XCJwcm9qZWN0cy1mb3ItdG9kb1wiPmA7XG4gICAgICAgICAgICAgICAgICAgIE15UHJvamVjdHMucHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0LGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxTdHJpbmcrPWA8b3B0aW9uIHZhbHVlPVwiJHtpbmRleH1cIj4ke3Byb2plY3QubmFtZX08L29wdGlvbj5gXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBodG1sU3RyaW5nKz1gPC9zZWxlY3Q+YDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmc7XG4gICAgICAgICAgICAgICAgfSkoKStcbiAgICAgICAgICAgIGA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VE9ETyB0aXRsZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG8tdGl0bGVcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkRlc2NyaXB0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidG9kby1kZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RHVlIGRhdGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0b2RvLWR1ZWRhdGVcIiB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlByaW9yaXR5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRvZG8tcHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2ZXJ5LWxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnkgbG93XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpZ2hcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWlucHV0LWVycm9yc1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLXRpdGxlLWxlbmd0aFwiPlRpdGxlIGJldHdlZW4gMCBhbmQgNTAgY2hhcmFjdGVyczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRvZG8tdGl0bGUtbGVuZ3RoXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLWRhdGVcIj5QaWNrIGEgZGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRvZG8tZGF0ZVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWwtYWRkLXRvZG9cIiBjbGFzcz1cImNhbmNlbC1idG4gYnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbmYtZWRpdC10b2RvXCIgY2xhc3M9XCJjb25mLWJ0biBidG5cIiA+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYvPmA7XG4gICAgfSAgXG5cbiAgICBjb25zdCBzaG93TW9kYWwgPSBmdW5jdGlvbih0b2RvSW5kZXgscHJvamVjdEluZGV4KXtcbiAgICAgICAgaWYoIXByb3RvdHlwZS5hY3RpdmVNb2RhbCl7XG4gICAgICAgICAgICB0b2RvSW5kID0gdG9kb0luZGV4O1xuICAgICAgICAgICAgcHJvakluZCA9IHByb2plY3RJbmRleDtcblxuICAgICAgICAgICAgY29uc3QgdG9kb1RvRWRpdCA9IE15UHJvamVjdHMucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2Rvc1t0b2RvSW5kZXhdO1xuICAgICAgICAgICAgLy9XRSBCVUlMRCBUSEUgTU9EQUxcbiAgICAgICAgICAgIGJ1aWxkTW9kYWwoKTtcbiAgICAgICAgICAgIC8vTU9EQUwgSVMgQUNUSVZFXG4gICAgICAgICAgICBwcm90b3R5cGUuYWN0aXZlTW9kYWw9dHJ1ZTtcbiAgICAgICAgICAgIC8vV0UgQUREIFRIRSBNT0RBTCBUTyBUSEUgUEFHRVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKHByb3RvdHlwZS5tb2RhbCk7XG5cbiAgICAgICAgICAgIGJpbmRpbmdNb2RhbCgpO1xuXG4gICAgICAgICAgICBwcm9qU2VsZWN0LnZhbHVlID0gdG9kb1RvRWRpdC5wcm9qZWN0QmVsb25nO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG9Ub0VkaXQudGl0bGU7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQudmFsdWUgPSB0b2RvVG9FZGl0LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kb1RvRWRpdC5kdWVEYXRlO1xuICAgICAgICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSB0b2RvVG9FZGl0LnByaW9yaXR5O1xuXG4gICAgICAgICAgICAvL3ZhbGlkYXRlIG1vZGFsIGZpcnN0IGJlY2F1c2UgaW5mb3JtYXRpb24gaXMgbm90IG1lYW50IHRvIGJlIGVtcHR5XG4gICAgICAgICAgICB2YWxpZGF0aW9uKCk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29uc3QgYmluZGluZ01vZGFsID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy9TQVZFIFNPTUUgRE9NXG4gICAgICAgIFxuICAgICAgICBwcm9qU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1mb3ItdG9kb1wiKTtcbiAgICAgICAgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZVwiKTtcbiAgICAgICAgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZHVlZGF0ZVwiKTtcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tcHJpb3JpdHlcIik7XG4gICAgICAgIGdvb2RMZW5DaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby10aXRsZS1sZW5ndGhcIik7XG4gICAgICAgIGdvb2REYXRlQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGF0ZVwiKTtcbiAgICAgICAgY29uZkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZi1lZGl0LXRvZG9cIik7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy9WQUxJREFUSU9OXG4gICAgICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsXG4gICAgICAgIHZhbGlkYXRpb24pO1xuICAgICAgICBkdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLFxuICAgICAgICB2YWxpZGF0aW9uXG4gICAgICAgICk7XG4gICAgICAgIC8vLy9CSU5ESU5HUyBUSEUgQlVUVE9OUyBPTkNFIFRIRSBNT0RBTCBJUyBBUFBFTkRFRCBPTiBET0NVTUVOVFxuICAgICAgICBjb25mQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uZkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGVkaXRUb0RvKHBhcnNlSW50KHByb2pTZWxlY3QudmFsdWUpLHRpdGxlSW5wdXQudmFsdWUsZGVzY3JpcHRpb25UZXh0LnZhbHVlLGR1ZURhdGVJbnB1dC52YWx1ZSxwcmlvcml0eVNlbGVjdC52YWx1ZSk7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLWFkZC10b2RvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICBwcm90b3R5cGUucmVtb3ZlTW9kYWwpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgZ29vZExlbkNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBnb29kRGF0ZUNoZWNrLmNoZWNrZWQ9dHJ1ZTtcblxuICAgICAgICBpZih0aXRsZUlucHV0LnZhbHVlLmxlbmd0aD09MCB8fCB0aXRsZUlucHV0LnZhbHVlLmxlbmd0aD49NTApe1xuICAgICAgICAgICAgdmFsaWQ9ZmFsc2U7XG4gICAgICAgICAgICBnb29kTGVuQ2hlY2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZHVlRGF0ZUlucHV0LnZhbHVlPT1cIlwiKXtcbiAgICAgICAgICAgIHZhbGlkPWZhbHNlO1xuICAgICAgICAgICAgZ29vZERhdGVDaGVjay5jaGVja2VkPWZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsaWQpe1xuICAgICAgICAgICAgY29uZkJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbmZCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBlZGl0VG9EbyA9IGZ1bmN0aW9uKHByb2pCZWxvbmcsdGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7XG4gICAgICAgIC8vV2UgZWRpdCB0aGUgdG9kbyBpbiB0aGUgcHJvamVjdCBpdCBiZWxvbmdzXG4gICAgICAgIE15UHJvamVjdHMucHJvamVjdHNbcHJvakluZF0udG9kb3NbdG9kb0luZF0ucHJvamVjdEJlbG9uZyA9IHByb2pCZWxvbmc7XG4gICAgICAgIE15UHJvamVjdHMucHJvamVjdHNbcHJvakluZF0udG9kb3NbdG9kb0luZF0udGl0bGUgPSB0aXRsZTtcbiAgICAgICAgTXlQcm9qZWN0cy5wcm9qZWN0c1twcm9qSW5kXS50b2Rvc1t0b2RvSW5kXS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBNeVByb2plY3RzLnByb2plY3RzW3Byb2pJbmRdLnRvZG9zW3RvZG9JbmRdLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBNeVByb2plY3RzLnByb2plY3RzW3Byb2pJbmRdLnRvZG9zW3RvZG9JbmRdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIGxldCBuZXdWZXJUb2RvID0gTXlQcm9qZWN0cy5wcm9qZWN0c1twcm9qSW5kXS50b2Rvc1t0b2RvSW5kXTtcbiAgICAgICAgLy9XZSByZW1vdmUgdGhlIHRvZG8gZnJvbSB0aGUgcHJvamVjdCBpdCB3YXMgb25cbiAgICAgICAgTXlQcm9qZWN0cy5wcm9qZWN0c1twcm9qSW5kXS50b2Rvcy5zcGxpY2UodG9kb0luZCwxKTtcbiAgICAgICAgTXlQcm9qZWN0cy5wcm9qZWN0c1twcm9qQmVsb25nXS5hZGRUb0RvKG5ld1ZlclRvZG8pO1xuICAgICAgICBcbiAgICAgICAgaWYoYWN0aXZlVGFiPT1wcm9qSW5kKXtcbiAgICAgICAgICAgIHNob3dUb0RvcyhNeVByb2plY3RzLnByb2plY3RzW3Byb2pJbmRdLnRvZG9zKTtcbiAgICAgICAgfVxuICAgICAgICBwcm90b3R5cGUucmVtb3ZlTW9kYWwoKTtcbiAgICAgICAgc2hvd1Byb2plY3RzKE15UHJvamVjdHMucHJvamVjdHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7c2hvd01vZGFsfTtcbn1cblxuY29uc3QgYWRkUHJvaiA9IGZ1bmN0aW9uKHByb2pOYW1lKXtcbiAgICBNeVByb2plY3RzLmFkZFByb2oocHJvak5hbWUpO1xuICAgIHNob3dQcm9qZWN0cyhNeVByb2plY3RzLnByb2plY3RzKTtcbn1cblxuY29uc3QgYWRkVG9EbyA9IGZ1bmN0aW9uKHRvZG9JdGVtKXtcbiAgICBNeVByb2plY3RzLnByb2plY3RzW3RvZG9JdGVtLnByb2plY3RCZWxvbmddLmFkZFRvRG8odG9kb0l0ZW0pO1xuICAgIGlmKGFjdGl2ZVRhYj09dG9kb0l0ZW0ucHJvamVjdEJlbG9uZyl7XG4gICAgICAgIHNob3dUb0RvcyhNeVByb2plY3RzLnByb2plY3RzW3RvZG9JdGVtLnByb2plY3RCZWxvbmddLnRvZG9zKTtcbiAgICB9XG4gICAgc2hvd1Byb2plY3RzKE15UHJvamVjdHMucHJvamVjdHMpO1xufVxuXG5jb25zdCBzaG93UHJvamVjdHMgPSBmdW5jdGlvbihwcm9qZWN0TGlzdCl7XG4gICAgbGV0IHByb2plY3RzSXRlbXM7XG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1pdGVtc1wiKT09PW51bGwpe1xuICAgICAgICBwcm9qZWN0c0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBwcm9qZWN0c0l0ZW1zLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwcm9qZWN0cy1pdGVtc1wiKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcHJvamVjdHNJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtaXRlbXNcIik7XG4gICAgfVxuICAgIHByb2plY3RzSXRlbXMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChpdGVtLGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Qcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBpdGVtUHJvai5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxzcGFuPiR7aXRlbS5uYW1lfTwvc3Bhbj48c3BhbiB0aXRsZT1cIiR7aXRlbS50b2Rvcy5sZW5ndGh9IHRvZG9zXCI+JHtpdGVtLnRvZG9zLmxlbmd0aH08L3NwYW4+XG4gICAgICAgIGA7XG4gICAgICAgIGl0ZW1Qcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzaG93VG9Eb3MoTXlQcm9qZWN0cy5wcm9qZWN0c1tpbmRleF0udG9kb3MpO1xuICAgICAgICAgICAgYWN0aXZlVGFiID0gaW5kZXg7XG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RzSXRlbXMuYXBwZW5kQ2hpbGQoaXRlbVByb2opO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpLmFwcGVuZENoaWxkKHByb2plY3RzSXRlbXMpO1xufVxuXG5jb25zdCBzaG93VG9Eb3M9IGZ1bmN0aW9uKHRvZG9MaXN0KXtcbiAgICBjb25zdCBwcm9qSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1pbmZvXCIpO1xuICAgIHByb2pJbmZvLmlubmVySFRNTD1cIlwiO1xuICAgIFxuICAgIHRvZG9MaXN0LmZvckVhY2goZnVuY3Rpb24odG9kbyxpbmRleCl7XG4gICAgICAgIGxldCBpdGVtVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW1Ub2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIsdG9kby5wcmlvcml0eSk7XG4gICAgICAgIGl0ZW1Ub2RvLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidG9kby10aXRsZVwiPiR7dG9kby50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDxoMz5EdWU6ICR7dG9kby5kdWVEYXRlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLWluZm8gc2VlLWVkaXQtdG9kb1wiIHRpdGxlPVwiU2VlIC8gZWRpdFwiIGRhdGEtaWQ9JHtpbmRleH0gZGF0YS1wcm9qZWN0PSR7dG9kby5wcm9qZWN0QmVsb25nfT48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCIke2luZGV4fVwiPkRvbmU/PC9sYWJlbD5gK1xuICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRvZG8uY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgY2xhc3M9XCJjaGVjay1kb25lLXRvZG9cIiB0eXBlPVwiY2hlY2tib3hcIiBkYXRhLWlkPSR7aW5kZXh9IGRhdGEtcHJvamVjdD0ke3RvZG8ucHJvamVjdEJlbG9uZ30gY2hlY2tlZD5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8aW5wdXQgY2xhc3M9XCJjaGVjay1kb25lLXRvZG9cIiB0eXBlPVwiY2hlY2tib3hcIiBkYXRhLWlkPSR7aW5kZXh9IGRhdGEtcHJvamVjdD0ke3RvZG8ucHJvamVjdEJlbG9uZ30+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkoKStcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoIGRlbGV0ZS10b2RvXCIgdGl0bGU9XCJEZWxldGUgVG9kb1wiIGRhdGEtaWQ9JHtpbmRleH0gZGF0YS1wcm9qZWN0PSR7dG9kby5wcm9qZWN0QmVsb25nfT48L2k+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKGl0ZW1Ub2RvKTtcbiAgICB9KTtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VlLWVkaXQtdG9kb1wiKSkuZm9yRWFjaChidXR0b249PntcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgZWRpdFRvZG9Nb2RhbCA9IEVkaXRUb2RvTW9kYWwoKTtcbiAgICAgICAgICAgIGVkaXRUb2RvTW9kYWwuc2hvd01vZGFsKHBhcnNlSW50KHRoaXMuZGF0YXNldC5pZCkscGFyc2VJbnQodGhpcy5kYXRhc2V0LnByb2plY3QpKTtcbiAgICAgICAgICAgIC8vZWRpdFRvZG9Nb2RhbC5zaG93TW9kYWwodGhpcy5kYXRhc2V0LmlkLHRoaXMuZGF0YXNldC5wcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2stZG9uZS10b2RvXCIpKS5mb3JFYWNoKGNoZWNrPT57XG4gICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIE15UHJvamVjdHMucHJvamVjdHNbdGhpcy5kYXRhc2V0LnByb2plY3RdLnRvZG9zW3RoaXMuZGF0YXNldC5pZF0uY2hlY2tlZCA9IHRoaXMuY2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLXRvZG9cIikpLmZvckVhY2goYnV0dG9uPT57XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHRoaXMuZGF0YXNldC5pZCk7XG4gICAgICAgICAgICBNeVByb2plY3RzLnByb2plY3RzW3RoaXMuZGF0YXNldC5wcm9qZWN0XS50b2Rvcy5zcGxpY2UodGhpcy5kYXRhc2V0LmlkLDEpO1xuICAgICAgICAgICAgc2hvd1RvRG9zKE15UHJvamVjdHMucHJvamVjdHNbdGhpcy5kYXRhc2V0LnByb2plY3RdLnRvZG9zKTtcbiAgICAgICAgICAgIHNob3dQcm9qZWN0cyhNeVByb2plY3RzLnByb2plY3RzKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQge2luaXRpYWxQYWdlLHNob3dQcm9qZWN0c307IiwiaW1wb3J0IHsgc2hvd1Byb2plY3RzIH0gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IHRvZG9JdGVtID0gZnVuY3Rpb24ocHJvamVjdEJlbG9uZyx0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNoZWNrZWQgPSBmYWxzZSl7XG5cbiAgICByZXR1cm4ge3Byb2plY3RCZWxvbmcsdGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjaGVja2VkfTtcbn1cbmNvbnN0IFByb2plY3QgPSBmdW5jdGlvbihuYW1lKXtcbiAgICBsZXQgdG9kb3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvRG89IGZ1bmN0aW9uKHRvZG9JdGVtKXtcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvSXRlbSk7XG4gICAgfVxuICAgIHJldHVybiB7bmFtZSxhZGRUb0RvLCBnZXQgdG9kb3MoKXtyZXR1cm4gdG9kb3N9fTtcbn1cblxuY29uc3QgTXlQcm9qZWN0cyA9IChmdW5jdGlvbigpe1xuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGFkZFByb2ogPSBmdW5jdGlvbihwck5hbWUpe1xuICAgICAgICBwcm9qZWN0cy5wdXNoKFByb2plY3QocHJOYW1lKSk7XG4gICAgfVxuXG4gICAgYWRkUHJvaihcIkRFRkFVTFRcIik7XG4gICAgXG4gICAgcmV0dXJuIHthZGRQcm9qLGdldCBwcm9qZWN0cygpe3JldHVybiBwcm9qZWN0c319O1xufSkoKTtcblxuZXhwb3J0IHtNeVByb2plY3RzLCB0b2RvSXRlbX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0aWFsUGFnZSB9IGZyb20gXCIuL0RPTS5qc1wiO1xuXG5pbml0aWFsUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9