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
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/logic.js");



let activeTab = 0;
/*
TODOS: 
--Hacer que los project Tabs reflejen la cantidad real de todos
--Poder editar un todo
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
    })

    showProjects(_logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
    showToDos(_logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[0].todos);
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
                    <label for="pr-name-length">Name between 0 and 50 characters</label>
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

    const addProj = function(projName){
        _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.addProj(projName);
        showProjects(_logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects);
        prototype.removeModal();
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
                    _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects.forEach(function(project,index){
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
            addToDo(parseInt(projSelect.value),titleInput.value,descriptionText.value,dueDateInput.value,prioritySelect.value);

        });
        document.querySelector("#cancel-add-todo").addEventListener("click",
        prototype.removeModal);
        ////
    }

    const validation = function(){
        let valid = false;
        const confBtn = document.querySelector("#conf-add-todo");
        
        if(titleInput.value.length>0 && titleInput.value.length<50){
            valid = true;
            goodLenCheck.checked = true;
        }else{
            valid=false;
            goodLenCheck.checked = false;
        }

        if(dueDateInput.value!==""){
            valid=true;
            goodDateCheck.checked=true;
        }else{
            valid=false;
            goodDateCheck.checked=false;
        }

        if(valid){
            confBtn.disabled = false;
        }else{
            confBtn.disabled = true;
        }

    }

    const addToDo = function(projBelong,title,description,dueDate,priority){
        _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projBelong].addToDo(projBelong,title,description,dueDate,priority);
        if(activeTab==projBelong){
            showToDos(_logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projBelong].todos);
        }
        prototype.removeModal();
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
                    _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects.forEach(function(project,index){
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

            const todoToEdit = _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projectIndex].todos[todoIndex];
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
        _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd].projBelong = projBelong;
        _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd].title = title;
        _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd].description = description;
        _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd].dueDate = dueDate;
        _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd].priority = priority;
        let newVerTodo = _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos[todoInd];
        //We remove the todo from the project it was on
        _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projInd].todos.splice(todoInd,1);
        _logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projBelong].addToDoItem(newVerTodo);
        
        if(activeTab==projBelong){
            showToDos(_logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[projBelong].todos);
        }
        prototype.removeModal();
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
            showToDos(_logic__WEBPACK_IMPORTED_MODULE_2__.MyProjects.projects[index].todos);
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
}



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyProjects: () => (/* binding */ MyProjects)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


const todoItem = function(projectBelong,title,description,dueDate,priority,checked = false){

    return {projectBelong,title,description,dueDate,priority,checked};
}
const Project = function(name){
    let todos = [];

    const addToDo = function(projectBelong,title,description,dueDate,priority){
        todos.push(todoItem(projectBelong,title,description,dueDate,priority));
    }
    const addToDoItem = function(todoItem){
        todos.push(todoItem);
    }
    return {name,addToDo,addToDoItem, get todos(){return todos}};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNENBQTRDLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcsY0FBYyx3QkFBd0IsdUJBQXVCLDZIQUE2SCxHQUFHLE9BQU8sb0JBQW9CLDZCQUE2QixHQUFHLEtBQUssNEJBQTRCLEdBQUcsV0FBVyxjQUFjLG9CQUFvQiw2QkFBNkIsR0FBRyxrQkFBa0IsY0FBYyxvQkFBb0IsR0FBRyxXQUFXLDRCQUE0Qix3QkFBd0IsbUJBQW1CLG9CQUFvQixnQkFBZ0IscUNBQXFDLEdBQUcsY0FBYyxvQkFBb0IsZ0JBQWdCLDRCQUE0QiwwQkFBMEIsU0FBUyxpQkFBaUIsa0JBQWtCLG1CQUFtQixHQUFHLGtCQUFrQixjQUFjLG9CQUFvQiw2QkFBNkIsNkJBQTZCLHlCQUF5Qiw0QkFBNEIsa0NBQWtDLDJCQUEyQix1QkFBdUIsb0JBQW9CLEdBQUcscUJBQXFCLHVDQUF1QyxvQkFBb0IscUNBQXFDLDBCQUEwQixnQkFBZ0IsbUJBQW1CLHlCQUF5QixTQUFTLDJCQUEyQiw0QkFBNEIsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsU0FBUyxtQkFBbUIseUJBQXlCLEdBQUcsb0JBQW9CLGNBQWMsb0JBQW9CLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLFFBQVEsb0JBQW9CLDZCQUE2QixvQkFBb0IsZ0JBQWdCLDBCQUEwQixnQ0FBZ0MsR0FBRyxtQkFBbUIsNEJBQTRCLG1CQUFtQixHQUFHLHlCQUF5Qix5Q0FBeUMsR0FBRyxjQUFjLDRCQUE0QixtQkFBbUIsR0FBRyxvQkFBb0IscUNBQXFDLEdBQUcsaUJBQWlCLHdCQUF3QixtQkFBbUIsR0FBRyx1QkFBdUIsaUNBQWlDLEdBQUcsZUFBZSwwQkFBMEIsbUJBQW1CLEdBQUcscUJBQXFCLG1DQUFtQyxHQUFHLG9CQUFvQixvQkFBb0IsZ0NBQWdDLGVBQWUsR0FBRyxpQkFBaUIsbUJBQW1CLG1CQUFtQix5QkFBeUIsa0JBQWtCLHlCQUF5QixHQUFHLGlCQUFpQixnQ0FBZ0Msa0JBQWtCLEdBQUcsbUJBQW1CLDRCQUE0QixxQkFBcUIsR0FBRyxTQUFTLHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0IsbUJBQW1CLDZDQUE2QyxHQUFHLGVBQWUsb0JBQW9CLDZCQUE2QixvQkFBb0IseUJBQXlCLDRCQUE0QixzQ0FBc0MsbUJBQW1CLEdBQUcscUJBQXFCLG1CQUFtQixTQUFTLGdCQUFnQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLHNCQUFzQixjQUFjLEdBQUcsd0NBQXdDLGtCQUFrQixHQUFHLFFBQVEsbUJBQW1CLDRCQUE0QiwwQkFBMEIsbUJBQW1CLEdBQUcsOENBQThDLG9CQUFvQixnQ0FBZ0MsZ0JBQWdCLEdBQUcsZ0VBQWdFLDBDQUEwQyxHQUFHLDZCQUE2QixjQUFjLHFCQUFxQixHQUFHLHVDQUF1Qyx5QkFBeUIsR0FBRyw0QkFBNEIsa0JBQWtCLHVCQUF1QixTQUFTLE9BQU8seUJBQXlCLDJCQUEyQixtQkFBbUIsZ0NBQWdDLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLGNBQWMsbUJBQW1CLHNCQUFzQixHQUFHLGNBQWMsc0JBQXNCLDBCQUEwQixHQUFHLE1BQU0sZ0NBQWdDLEdBQUcsVUFBVSx3QkFBd0IsR0FBRyxTQUFTLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSw0QkFBNEIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxjQUFjLHdCQUF3Qix1QkFBdUIsNkhBQTZILEdBQUcsT0FBTyxvQkFBb0IsNkJBQTZCLEdBQUcsS0FBSyw0QkFBNEIsR0FBRyxXQUFXLGNBQWMsb0JBQW9CLDZCQUE2QixHQUFHLGtCQUFrQixjQUFjLG9CQUFvQixHQUFHLFdBQVcsNEJBQTRCLHdCQUF3QixtQkFBbUIsb0JBQW9CLGdCQUFnQixxQ0FBcUMsR0FBRyxjQUFjLG9CQUFvQixnQkFBZ0IsNEJBQTRCLDBCQUEwQixTQUFTLGlCQUFpQixrQkFBa0IsbUJBQW1CLEdBQUcsa0JBQWtCLGNBQWMsb0JBQW9CLDZCQUE2Qiw2QkFBNkIseUJBQXlCLDRCQUE0QixrQ0FBa0MsMkJBQTJCLHVCQUF1QixvQkFBb0IsR0FBRyxxQkFBcUIsdUNBQXVDLG9CQUFvQixxQ0FBcUMsMEJBQTBCLGdCQUFnQixtQkFBbUIseUJBQXlCLFNBQVMsMkJBQTJCLDRCQUE0QixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRyxTQUFTLG1CQUFtQix5QkFBeUIsR0FBRyxvQkFBb0IsY0FBYyxvQkFBb0Isb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsUUFBUSxvQkFBb0IsNkJBQTZCLG9CQUFvQixnQkFBZ0IsMEJBQTBCLGdDQUFnQyxHQUFHLG1CQUFtQiw0QkFBNEIsbUJBQW1CLEdBQUcseUJBQXlCLHlDQUF5QyxHQUFHLGNBQWMsNEJBQTRCLG1CQUFtQixHQUFHLG9CQUFvQixxQ0FBcUMsR0FBRyxpQkFBaUIsd0JBQXdCLG1CQUFtQixHQUFHLHVCQUF1QixpQ0FBaUMsR0FBRyxlQUFlLDBCQUEwQixtQkFBbUIsR0FBRyxxQkFBcUIsbUNBQW1DLEdBQUcsb0JBQW9CLG9CQUFvQixnQ0FBZ0MsZUFBZSxHQUFHLGlCQUFpQixtQkFBbUIsbUJBQW1CLHlCQUF5QixrQkFBa0IseUJBQXlCLEdBQUcsaUJBQWlCLGdDQUFnQyxrQkFBa0IsR0FBRyxtQkFBbUIsNEJBQTRCLHFCQUFxQixHQUFHLFNBQVMseUJBQXlCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixtQkFBbUIsNkNBQTZDLEdBQUcsZUFBZSxvQkFBb0IsNkJBQTZCLG9CQUFvQix5QkFBeUIsNEJBQTRCLHNDQUFzQyxtQkFBbUIsR0FBRyxxQkFBcUIsbUJBQW1CLFNBQVMsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsc0JBQXNCLGNBQWMsR0FBRyx3Q0FBd0Msa0JBQWtCLEdBQUcsUUFBUSxtQkFBbUIsNEJBQTRCLDBCQUEwQixtQkFBbUIsR0FBRyw4Q0FBOEMsb0JBQW9CLGdDQUFnQyxnQkFBZ0IsR0FBRyxnRUFBZ0UsMENBQTBDLEdBQUcsNkJBQTZCLGNBQWMscUJBQXFCLEdBQUcsdUNBQXVDLHlCQUF5QixHQUFHLDRCQUE0QixrQkFBa0IsdUJBQXVCLFNBQVMsT0FBTyx5QkFBeUIsMkJBQTJCLG1CQUFtQixnQ0FBZ0MsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcsY0FBYyxtQkFBbUIsc0JBQXNCLEdBQUcsY0FBYyxzQkFBc0IsMEJBQTBCLEdBQUcsTUFBTSxnQ0FBZ0MsR0FBRyxVQUFVLHdCQUF3QixHQUFHLHFCQUFxQjtBQUN4bVU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNic0I7QUFDNEI7QUFDYjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFPLENBQUM7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxpQkFBaUIsdURBQW1CO0FBQ3BDLGNBQWMsZ0VBQTRCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWiw4QkFBOEIsbUJBQW1CO0FBQ2pELGtDQUFrQyxtQkFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsc0RBQWtCO0FBQzFCLHFCQUFxQix1REFBbUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrREFBMkI7QUFDL0Msc0RBQXNELE1BQU0sSUFBSSxhQUFhO0FBQzdFLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLHVEQUFtQjtBQUMzQjtBQUNBLHNCQUFzQix1REFBbUI7QUFDekM7QUFDQTtBQUNBOzs7QUFHQSxZQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtEQUEyQjtBQUMvQyxzREFBc0QsTUFBTSxJQUFJLGFBQWE7QUFDN0UscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLHVEQUFtQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1REFBbUI7QUFDM0IsUUFBUSx1REFBbUI7QUFDM0IsUUFBUSx1REFBbUI7QUFDM0IsUUFBUSx1REFBbUI7QUFDM0IsUUFBUSx1REFBbUI7QUFDM0IseUJBQXlCLHVEQUFtQjtBQUM1QztBQUNBLFFBQVEsdURBQW1CO0FBQzNCLFFBQVEsdURBQW1CO0FBQzNCO0FBQ0E7QUFDQSxzQkFBc0IsdURBQW1CO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVSxzQkFBc0IsbUJBQW1CLFNBQVMsa0JBQWtCO0FBQzlGO0FBQ0E7QUFDQSxzQkFBc0IsdURBQW1CO0FBQ3pDO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFdBQVc7QUFDcEQsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQSxrR0FBa0csT0FBTyxlQUFlLG1CQUFtQjtBQUMzSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hrQnFDOztBQUVyQzs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0NBQXNDO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7O0FDQXVDOztBQUV2QyxvREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsYm9keXtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbnVse1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbiNjb250ZW50e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY29udGVudC1pbmZve1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5oZWFkZXIgI2xvZ297XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0LWxpc3R7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxuICAgIHJlc2l6ZTogaG9yaXpvbnRhbDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IGxpe1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHMgZWFzZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG59XFxuXFxuI3Byb2plY3QtbGlzdCBsaTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xcbn1cXG5cXG4jcHJvamVjdC1saXN0LmhpZGV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmxpIGl7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5cXG4jcHJvamVjdC1pbmZve1xcbiAgICBmbGV4OiAzO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuLnRvZG97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLnRvZG8udmVyeS1sb3d7XFxuICAgIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby52ZXJ5LWxvdzpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggM3B4IHJveWFsYmx1ZTtcXG59XFxuXFxuLnRvZG8ubG93e1xcbiAgICBiYWNrZ3JvdW5kOiBwYWxlZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8ubG93OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCBwYWxlZ3JlZW47XFxufVxcblxcbi50b2RvLm1lZGl1bXtcXG4gICAgYmFja2dyb3VuZDogY29yYWw7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8ubWVkaXVtOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCBjb3JhbDtcXG59XFxuXFxuLnRvZG8uaGlnaHtcXG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby5oaWdoOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAtNXB4IDVweCBjcmltc29uO1xcbn1cXG5cXG5cXG4ub3B0aW9ucy10b2Rve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDVweDtcXG59XFxuLm9wdGlvbi1idXR0b257XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5lZGl0LWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcXG4gICAgY29sb3I6IG5hdnk7XFxufVxcblxcbi5kZWxldGUtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG4ubW9kYWx7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MTEpO1xcbn1cXG4uaW5uZXItbW9kYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDUwJSwgNjAwcHgpO1xcbiAgICBoZWlnaHQ6IDYwdmg7XFxufVxcbi5pbm5lci1tb2RhbCA+IGRpdntcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBcXG59XFxuXFxuLm1vZGFsLWluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1vZGFsLWluZm8gPiBkaXZ7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5tb2RhbC1pbmZvID4gZGl2ID4gaW5wdXQsIHRleHRhcmVhe1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuaW5wdXR7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiA5NXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbi5pbm5lci1tb2RhbCA+IC5tb2RhbC10aXRsZSwgLm1vZGFsLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXFxuICAgIGdhcDogMTBweDtcXG59XFxuLmlubmVyLW1vZGFsID4gLm1vZGFsLXRpdGxlLCAubW9kYWwtaW5mbywgLm1vZGFsLWlucHV0LWVycm9yc3tcXG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxufVxcbi5pbm5lci1tb2RhbCA+IC5tb2RhbC1pbmZve1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuLmlubmVyLW1vZGFsID4gLm1vZGFsLWluZm8gPiBkaXYgPiAqe1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5tb2RhbC1idXR0b25zID4gYnV0dG9ue1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgXFxufVxcbi5idG57XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG59XFxuLmJ0bjpkaXNhYmxlZHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG4uY2FuY2VsLWJ0bntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5jb25mLWJ0bntcXG4gICAgY29sb3I6IGRhcmtibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xcbn1cXG5cXG5pe1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbn1cXG5pOmhvdmVye1xcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0hBQXNIO0FBQzFIO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLGJvZHl7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG51bHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4jY29udGVudHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NvbnRlbnQtaW5mb3tcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIgdWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuaGVhZGVyICNsb2dve1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbiAgICByZXNpemU6IGhvcml6b250YWw7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCBsaXtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzIGVhc2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgXFxufVxcblxcbiNwcm9qZWN0LWxpc3QgbGk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdC5oaWRle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5saSBpe1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuXFxuI3Byb2plY3QtaW5mb3tcXG4gICAgZmxleDogMztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi50b2Rve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi50b2RvLnZlcnktbG93e1xcbiAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8udmVyeS1sb3c6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IC01cHggNXB4IDNweCByb3lhbGJsdWU7XFxufVxcblxcbi50b2RvLmxvd3tcXG4gICAgYmFja2dyb3VuZDogcGFsZWdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLmxvdzpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggcGFsZWdyZWVuO1xcbn1cXG5cXG4udG9kby5tZWRpdW17XFxuICAgIGJhY2tncm91bmQ6IGNvcmFsO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLm1lZGl1bTpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggY29yYWw7XFxufVxcblxcbi50b2RvLmhpZ2h7XFxuICAgIGJhY2tncm91bmQ6IGNyaW1zb247XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8uaGlnaDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogLTVweCA1cHggY3JpbXNvbjtcXG59XFxuXFxuXFxuLm9wdGlvbnMtdG9kb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi5vcHRpb24tYnV0dG9ue1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZWRpdC1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxuICAgIGNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogZGFya3JlZDtcXG59XFxuLm1vZGFse1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjExKTtcXG59XFxuLmlubmVyLW1vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6d2hpdGVzbW9rZTtcXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA1MCUsIDYwMHB4KTtcXG4gICAgaGVpZ2h0OiA2MHZoO1xcbn1cXG4uaW5uZXItbW9kYWwgPiBkaXZ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgXFxufVxcblxcbi5tb2RhbC1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1pbmZvID4gZGl2e1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtaW5mbyA+IGRpdiA+IGlucHV0LCB0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogOTVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG4uaW5uZXItbW9kYWwgPiAubW9kYWwtdGl0bGUsIC5tb2RhbC1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5pbm5lci1tb2RhbCA+IC5tb2RhbC10aXRsZSwgLm1vZGFsLWluZm8sIC5tb2RhbC1pbnB1dC1lcnJvcnN7XFxuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbn1cXG4uaW5uZXItbW9kYWwgPiAubW9kYWwtaW5mb3tcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5pbm5lci1tb2RhbCA+IC5tb2RhbC1pbmZvID4gZGl2ID4gKntcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubW9kYWwtYnV0dG9ucyA+IGJ1dHRvbntcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIFxcbn1cXG4uYnRue1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxufVxcbi5idG46ZGlzYWJsZWR7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuLmNhbmNlbC1idG57XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uY29uZi1idG57XFxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG59XFxuXFxuaXtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG59XFxuaTpob3ZlcntcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGxvZ29TcmMgZnJvbSBcIi4vYXNzZXRzL2xvZ29TaG9ydFdoaXRlLnBuZ1wiO1xuaW1wb3J0IHsgTXlQcm9qZWN0cyB9IGZyb20gXCIuL2xvZ2ljXCI7XG5sZXQgYWN0aXZlVGFiID0gMDtcbi8qXG5UT0RPUzogXG4tLUhhY2VyIHF1ZSBsb3MgcHJvamVjdCBUYWJzIHJlZmxlamVuIGxhIGNhbnRpZGFkIHJlYWwgZGUgdG9kb3Ncbi0tUG9kZXIgZWRpdGFyIHVuIHRvZG9cbi0tQWdyZWdhciBMb2NhbCBTdG9yYWdlXG4qL1xuZnVuY3Rpb24gaW5pdGlhbFBhZ2UoKXtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IGNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50SW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29udGVudC1pbmZvXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLFxuICAgIGBcbiAgICA8dWw+PGxpPjxpbWcgc3JjPVwiJHtsb2dvU3JjfVwiIGlkPVwibG9nb1wiPjwvbGk+PGxpPjwvbGk+PC91bD5cbiAgICA8dWw+PGxpPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiIGlkPVwiYWRkLXRvZG9cIiB0aXRsZT1cIkFkZCB0b2RvXCI+PC9pPjwvbGk+PC91bD5cbiAgICBgXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHByb2plY3RMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgcHJvamVjdExpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLFxuICAgIGBcbiAgICA8dWw+XG4gICAgPGxpPjxoMj5NeSBwcm9qZWN0czwvaDI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVzXCIgaWQ9XCJhZGQtcHJvamVjdFwiIHRpdGxlPVwiQWRkIHByb2plY3RcIj48L2k+PC9saT5cbiAgICA8L3VsPlxuICAgIGApO1xuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0SW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwicHJvamVjdC1pbmZvXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnRJbmZvLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbiAgICBjb250ZW50SW5mby5hcHBlbmRDaGlsZChwcm9qZWN0SW5mbyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50SW5mbyk7XG5cbiAgICAvL0JJTkRJTkdTXG4gICAgY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIik7XG4gICAgXG4gICAgYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBhZGRQcm9qTW9kYWwgPSBBZGRQcm9qTW9kYWwoKTtcbiAgICAgICAgYWRkUHJvak1vZGFsLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nb1wiKTtcbiAgICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHByb2pMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIilcbiAgICAgICAgcHJvakxpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidG5BZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdG9kb1wiKTtcbiAgICBidG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGFkZFRvZG9Nb2RhbCA9IEFkZFRvZG9Nb2RhbCgpO1xuICAgICAgICBhZGRUb2RvTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgfSlcblxuICAgIHNob3dQcm9qZWN0cyhNeVByb2plY3RzLnByb2plY3RzKTtcbiAgICBzaG93VG9Eb3MoTXlQcm9qZWN0cy5wcm9qZWN0c1swXS50b2Rvcyk7XG59XG5cbmNvbnN0IE1vZGFsID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgYWN0aXZlTW9kYWwgPSBmYWxzZTtcbiAgICAvL0NyZWF0ZSBtb2RhbCBlbGVtZW50XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgICBcbiAgICBjb25zdCByZW1vdmVNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICBhY3RpdmVNb2RhbD1mYWxzZTtcbiAgICB9XG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLUFUVEVOVElPTi0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vcmV0dXJuIHttb2RhbCxhY3RpdmVNb2RhbCxyZW1vdmVNb2RhbH07XG4gICAgXG4gICAgSGVyZSB0aGlzIE1vZGFsIGZhY3RvcnkgaXMgcmV0dXJuaW5nIGFuIG9iamVjdCxcbiAgICB3aGVuIGFjY2VzaW5nIHRoZSBhY3RpdmVNb2RhbCBwcm9wZXJ0eSB5b3UgYXJlXG4gICAgYWNjZXNpbmcgdGhlIG9iamVjdCBwcm9wZXJ0eSBJVFNFTEYgQlVUIE5PVCBUSEUgXG4gICAgVkFSSUFCTEUgYWN0aXZlTW9kYWwgaW4gdGhlIHNjb3BlIG9mIE1vZGFsIHdpY2ggaXMgdXNpbmcgXG4gICAgcmVtb3ZlTW9kYWwgbWV0aG9kXG5cbiAgICBPTkUgV0FZIFRPIEFDQ0VTUyB0aGlzIHZhcmlhYmxlIGlzIHVzaW5nIGdldHRlcnNcbiAgICBhbmQgc2V0dGVycyBmdW5jdGlvbnNcblxuICAgIFNvbWUgaW5mbyBhbmQgZXhhbXBsZXMgOiBcbiAgICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82NTU5MDExNC9mYWN0b3J5LWZ1bmN0aW9uLW1ldGhvZC1ub3QtdXBkYXRpbmctdmFyaWFibGUgXG4gICAgKi9cblxuICAgIHJldHVybiB7bW9kYWwsXG4gICAgICAgICAgICBnZXQgYWN0aXZlTW9kYWwoKXtyZXR1cm4gYWN0aXZlTW9kYWx9LCBcbiAgICAgICAgICAgIHNldCBhY3RpdmVNb2RhbChib29sKXthY3RpdmVNb2RhbCA9IGJvb2x9LFxuICAgICAgICAgICAgcmVtb3ZlTW9kYWxcbiAgICAgICAgfTtcbn1cbmNvbnN0IEFkZFByb2pNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgY29uc3QgcHJvdG90eXBlID0gTW9kYWwoKTtcblxuICAgIGxldCBjb25mQnRuLHByb2pOYW1lLGNhbmNlbEJ0biwgZ29vZExlbkNoZWNrO1xuXG4gICAgY29uc3QgYnVpbGRNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHByb3RvdHlwZS5tb2RhbC5pbm5lckhUTUwgPSBcbiAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMj5OZXcgcHJvamVjdDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+TmFtZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgc2l6ZT1cIjMwXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbnB1dC1lcnJvcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHItbmFtZS1sZW5ndGhcIj5OYW1lIGJldHdlZW4gMCBhbmQgNTAgY2hhcmFjdGVyczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInByLW5hbWUtbGVuZ3RoXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1hZGQtcHJcIiBjbGFzcz1cImNhbmNlbC1idG4gYnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbmYtYWRkLXByXCIgY2xhc3M9XCJjb25mLWJ0biBidG5cIiA+QWRkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd01vZGFsID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIXByb3RvdHlwZS5hY3RpdmVNb2RhbCl7XG4gICAgICAgICAgICAvL1dFIEJVSUxEIFRIRSBNT0RBTFxuICAgICAgICAgICAgYnVpbGRNb2RhbCgpO1xuICAgICAgICAgICAgLy9NT0RBTCBJUyBBQ1RJVkVcbiAgICAgICAgICAgIHByb3RvdHlwZS5hY3RpdmVNb2RhbD10cnVlO1xuICAgICAgICAgICAgLy9XRSBBREQgVEhFIE1PREFMIFRPIFRIRSBQQUdFXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQocHJvdG90eXBlLm1vZGFsKTtcbiAgICAgICAgICAgIGJpbmRpbmdNb2RhbCgpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnN0IGJpbmRpbmdNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vU0FWRSBTT01FIERPTVxuICAgICAgICBjb25mQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25mLWFkZC1wclwiKTtcbiAgICAgICAgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcbiAgICAgICAgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtYWRkLXByXCIpO1xuICAgICAgICBnb29kTGVuQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByLW5hbWUtbGVuZ3RoXCIpO1xuICAgICAgICAvL1ZBTElEQVRJT05cbiAgICAgICAgcHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsXG4gICAgICAgIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIC8vLy9CSU5ESU5HUyBUSEUgQlVUVE9OUyBPTkNFIFRIRSBNT0RBTCBJUyBBUFBFTkRFRCBPTiBET0NVTUVOVFxuICAgICAgICBjb25mQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uZkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFkZFByb2oocHJvak5hbWUudmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICBwcm90b3R5cGUucmVtb3ZlTW9kYWwpO1xuICAgICAgICAvLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmKHByb2pOYW1lLnZhbHVlLmxlbmd0aD4wICYmIHByb2pOYW1lLnZhbHVlLmxlbmd0aDw1MCl7XG4gICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBnb29kTGVuQ2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmFsaWQ9ZmFsc2U7XG4gICAgICAgICAgICBnb29kTGVuQ2hlY2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGlmKHZhbGlkKXtcbiAgICAgICAgICAgIGNvbmZCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25mQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2ogPSBmdW5jdGlvbihwcm9qTmFtZSl7XG4gICAgICAgIE15UHJvamVjdHMuYWRkUHJvaihwcm9qTmFtZSk7XG4gICAgICAgIHNob3dQcm9qZWN0cyhNeVByb2plY3RzLnByb2plY3RzKTtcbiAgICAgICAgcHJvdG90eXBlLnJlbW92ZU1vZGFsKCk7XG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIHtzaG93TW9kYWx9O1xufVxuXG5jb25zdCBBZGRUb2RvTW9kYWwgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IE1vZGFsKCk7XG4gICAgXG4gICAgbGV0IHByb2pTZWxlY3Q7XG4gICAgbGV0IHRpdGxlSW5wdXQ7XG4gICAgbGV0IGRlc2NyaXB0aW9uVGV4dDtcbiAgICBsZXQgZHVlRGF0ZUlucHV0O1xuICAgIGxldCBwcmlvcml0eVNlbGVjdDtcblxuICAgIGxldCBnb29kTGVuQ2hlY2s7XG4gICAgbGV0IGdvb2REYXRlQ2hlY2s7XG5cbiAgICBsZXQgY29uZkJ0bjtcblxuICAgIGNvbnN0IGJ1aWxkTW9kYWwgPSBmdW5jdGlvbigpe1xuICAgICAgICBwcm90b3R5cGUubW9kYWwuaW5uZXJIVE1MID0gXG4gICAgICAgIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLW1vZGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDI+TmV3IFRPRE8gZm9yOiA8L2gyPmArXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sU3RyaW5nID0gYDxzZWxlY3QgaWQ9XCJwcm9qZWN0cy1mb3ItdG9kb1wiPmA7XG4gICAgICAgICAgICAgICAgICAgIE15UHJvamVjdHMucHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0LGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxTdHJpbmcrPWA8b3B0aW9uIHZhbHVlPVwiJHtpbmRleH1cIj4ke3Byb2plY3QubmFtZX08L29wdGlvbj5gXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBodG1sU3RyaW5nKz1gPC9zZWxlY3Q+YDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxTdHJpbmc7XG4gICAgICAgICAgICAgICAgfSkoKStcbiAgICAgICAgICAgIGA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VE9ETyB0aXRsZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG8tdGl0bGVcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkRlc2NyaXB0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidG9kby1kZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RHVlIGRhdGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0b2RvLWR1ZWRhdGVcIiB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlByaW9yaXR5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRvZG8tcHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2ZXJ5LWxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnkgbG93XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGl1bVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpZ2hcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWlucHV0LWVycm9yc1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLXRpdGxlLWxlbmd0aFwiPlRpdGxlIGJldHdlZW4gMCBhbmQgNTAgY2hhcmFjdGVyczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRvZG8tdGl0bGUtbGVuZ3RoXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLWRhdGVcIj5QaWNrIGEgZGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRvZG8tZGF0ZVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWwtYWRkLXRvZG9cIiBjbGFzcz1cImNhbmNlbC1idG4gYnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbmYtYWRkLXRvZG9cIiBjbGFzcz1cImNvbmYtYnRuIGJ0blwiID5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2Lz5gO1xuICAgIH0gIFxuXG4gICAgY29uc3Qgc2hvd01vZGFsID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIXByb3RvdHlwZS5hY3RpdmVNb2RhbCl7XG4gICAgICAgICAgICAvL1dFIEJVSUxEIFRIRSBNT0RBTFxuICAgICAgICAgICAgYnVpbGRNb2RhbCgpO1xuICAgICAgICAgICAgLy9NT0RBTCBJUyBBQ1RJVkVcbiAgICAgICAgICAgIHByb3RvdHlwZS5hY3RpdmVNb2RhbD10cnVlO1xuICAgICAgICAgICAgLy9XRSBBREQgVEhFIE1PREFMIFRPIFRIRSBQQUdFXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQocHJvdG90eXBlLm1vZGFsKTtcbiAgICAgICAgICAgIGJpbmRpbmdNb2RhbCgpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNvbnN0IGJpbmRpbmdNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vU0FWRSBTT01FIERPTVxuICAgICAgICBcbiAgICAgICAgcHJvalNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtZm9yLXRvZG9cIik7XG4gICAgICAgIHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGVcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWR1ZWRhdGVcIik7XG4gICAgICAgIHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXByaW9yaXR5XCIpO1xuICAgICAgICBnb29kTGVuQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tdGl0bGUtbGVuZ3RoXCIpO1xuICAgICAgICBnb29kRGF0ZUNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIik7XG4gICAgICAgIGNvbmZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmYtYWRkLXRvZG9cIik7XG5cbiAgICAgICAgLy9WQUxJREFUSU9OXG4gICAgICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsXG4gICAgICAgIHZhbGlkYXRpb24pO1xuICAgICAgICBkdWVEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLFxuICAgICAgICB2YWxpZGF0aW9uXG4gICAgICAgICk7XG4gICAgICAgIC8vLy9CSU5ESU5HUyBUSEUgQlVUVE9OUyBPTkNFIFRIRSBNT0RBTCBJUyBBUFBFTkRFRCBPTiBET0NVTUVOVFxuICAgICAgICBjb25mQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgY29uZkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGFkZFRvRG8ocGFyc2VJbnQocHJvalNlbGVjdC52YWx1ZSksdGl0bGVJbnB1dC52YWx1ZSxkZXNjcmlwdGlvblRleHQudmFsdWUsZHVlRGF0ZUlucHV0LnZhbHVlLHByaW9yaXR5U2VsZWN0LnZhbHVlKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtYWRkLXRvZG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIHByb3RvdHlwZS5yZW1vdmVNb2RhbCk7XG4gICAgICAgIC8vLy9cbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNvbmZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmYtYWRkLXRvZG9cIik7XG4gICAgICAgIFxuICAgICAgICBpZih0aXRsZUlucHV0LnZhbHVlLmxlbmd0aD4wICYmIHRpdGxlSW5wdXQudmFsdWUubGVuZ3RoPDUwKXtcbiAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIGdvb2RMZW5DaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YWxpZD1mYWxzZTtcbiAgICAgICAgICAgIGdvb2RMZW5DaGVjay5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihkdWVEYXRlSW5wdXQudmFsdWUhPT1cIlwiKXtcbiAgICAgICAgICAgIHZhbGlkPXRydWU7XG4gICAgICAgICAgICBnb29kRGF0ZUNoZWNrLmNoZWNrZWQ9dHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YWxpZD1mYWxzZTtcbiAgICAgICAgICAgIGdvb2REYXRlQ2hlY2suY2hlY2tlZD1mYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHZhbGlkKXtcbiAgICAgICAgICAgIGNvbmZCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25mQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVG9EbyA9IGZ1bmN0aW9uKHByb2pCZWxvbmcsdGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7XG4gICAgICAgIE15UHJvamVjdHMucHJvamVjdHNbcHJvakJlbG9uZ10uYWRkVG9Ebyhwcm9qQmVsb25nLHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpO1xuICAgICAgICBpZihhY3RpdmVUYWI9PXByb2pCZWxvbmcpe1xuICAgICAgICAgICAgc2hvd1RvRG9zKE15UHJvamVjdHMucHJvamVjdHNbcHJvakJlbG9uZ10udG9kb3MpO1xuICAgICAgICB9XG4gICAgICAgIHByb3RvdHlwZS5yZW1vdmVNb2RhbCgpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtzaG93TW9kYWx9O1xuXG59XG5cbmNvbnN0IEVkaXRUb2RvTW9kYWwgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IE1vZGFsKCk7XG4gICAgXG4gICAgbGV0IHByb2pTZWxlY3Q7XG4gICAgbGV0IHRpdGxlSW5wdXQ7XG4gICAgbGV0IGRlc2NyaXB0aW9uVGV4dDtcbiAgICBsZXQgZHVlRGF0ZUlucHV0O1xuICAgIGxldCBwcmlvcml0eVNlbGVjdDtcblxuICAgIGxldCBnb29kTGVuQ2hlY2s7XG4gICAgbGV0IGdvb2REYXRlQ2hlY2s7XG5cbiAgICBsZXQgY29uZkJ0bjtcblxuICAgIGxldCB0b2RvSW5kLCBwcm9qSW5kO1xuXG4gICAgY29uc3QgYnVpbGRNb2RhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHByb3RvdHlwZS5tb2RhbC5pbm5lckhUTUwgPSBcbiAgICAgICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItbW9kYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMj5FZGl0IFRPRE86IDwvaDI+YCtcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWxTdHJpbmcgPSBgPHNlbGVjdCBpZD1cInByb2plY3RzLWZvci10b2RvXCI+YDtcbiAgICAgICAgICAgICAgICAgICAgTXlQcm9qZWN0cy5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QsaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFN0cmluZys9YDxvcHRpb24gdmFsdWU9XCIke2luZGV4fVwiPiR7cHJvamVjdC5uYW1lfTwvb3B0aW9uPmBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGh0bWxTdHJpbmcrPWA8L3NlbGVjdD5gO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbFN0cmluZztcbiAgICAgICAgICAgICAgICB9KSgpK1xuICAgICAgICAgICAgYDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWluZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5UT0RPIHRpdGxlPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidG9kby10aXRsZVwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RGVzY3JpcHRpb248L2gyPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0b2RvLWRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5EdWUgZGF0ZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG8tZHVlZGF0ZVwiIHR5cGU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+UHJpb3JpdHk8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwidG9kby1wcmlvcml0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZlcnktbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyeSBsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvd1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaXVtXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGlnaFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaW5wdXQtZXJyb3JzXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tdGl0bGUtbGVuZ3RoXCI+VGl0bGUgYmV0d2VlbiAwIGFuZCA1MCBjaGFyYWN0ZXJzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidG9kby10aXRsZS1sZW5ndGhcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tZGF0ZVwiPlBpY2sgYSBkYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidG9kby1kYXRlXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1hZGQtdG9kb1wiIGNsYXNzPVwiY2FuY2VsLWJ0biBidG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY29uZi1lZGl0LXRvZG9cIiBjbGFzcz1cImNvbmYtYnRuIGJ0blwiID5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdi8+YDtcbiAgICB9ICBcblxuICAgIGNvbnN0IHNob3dNb2RhbCA9IGZ1bmN0aW9uKHRvZG9JbmRleCxwcm9qZWN0SW5kZXgpe1xuICAgICAgICBpZighcHJvdG90eXBlLmFjdGl2ZU1vZGFsKXtcbiAgICAgICAgICAgIHRvZG9JbmQgPSB0b2RvSW5kZXg7XG4gICAgICAgICAgICBwcm9qSW5kID0gcHJvamVjdEluZGV4O1xuXG4gICAgICAgICAgICBjb25zdCB0b2RvVG9FZGl0ID0gTXlQcm9qZWN0cy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRvZG9zW3RvZG9JbmRleF07XG4gICAgICAgICAgICAvL1dFIEJVSUxEIFRIRSBNT0RBTFxuICAgICAgICAgICAgYnVpbGRNb2RhbCgpO1xuICAgICAgICAgICAgLy9NT0RBTCBJUyBBQ1RJVkVcbiAgICAgICAgICAgIHByb3RvdHlwZS5hY3RpdmVNb2RhbD10cnVlO1xuICAgICAgICAgICAgLy9XRSBBREQgVEhFIE1PREFMIFRPIFRIRSBQQUdFXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQocHJvdG90eXBlLm1vZGFsKTtcblxuICAgICAgICAgICAgYmluZGluZ01vZGFsKCk7XG5cbiAgICAgICAgICAgIHByb2pTZWxlY3QudmFsdWUgPSB0b2RvVG9FZGl0LnByb2plY3RCZWxvbmc7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kb1RvRWRpdC50aXRsZTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC52YWx1ZSA9IHRvZG9Ub0VkaXQuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b2RvVG9FZGl0LmR1ZURhdGU7XG4gICAgICAgICAgICBwcmlvcml0eVNlbGVjdC52YWx1ZSA9IHRvZG9Ub0VkaXQucHJpb3JpdHk7XG5cbiAgICAgICAgICAgIC8vdmFsaWRhdGUgbW9kYWwgZmlyc3QgYmVjYXVzZSBpbmZvcm1hdGlvbiBpcyBub3QgbWVhbnQgdG8gYmUgZW1wdHlcbiAgICAgICAgICAgIHZhbGlkYXRpb24oKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb25zdCBiaW5kaW5nTW9kYWwgPSBmdW5jdGlvbigpe1xuICAgICAgICAvL1NBVkUgU09NRSBET01cbiAgICAgICAgXG4gICAgICAgIHByb2pTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWZvci10b2RvXCIpO1xuICAgICAgICB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlXCIpO1xuICAgICAgICBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kdWVkYXRlXCIpO1xuICAgICAgICBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1wcmlvcml0eVwiKTtcbiAgICAgICAgZ29vZExlbkNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLXRpdGxlLWxlbmd0aFwiKTtcbiAgICAgICAgZ29vZERhdGVDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1kYXRlXCIpO1xuICAgICAgICBjb25mQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25mLWVkaXQtdG9kb1wiKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL1ZBTElEQVRJT05cbiAgICAgICAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixcbiAgICAgICAgdmFsaWRhdGlvbik7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsXG4gICAgICAgIHZhbGlkYXRpb25cbiAgICAgICAgKTtcbiAgICAgICAgLy8vL0JJTkRJTkdTIFRIRSBCVVRUT05TIE9OQ0UgVEhFIE1PREFMIElTIEFQUEVOREVEIE9OIERPQ1VNRU5UXG4gICAgICAgIGNvbmZCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBjb25mQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZWRpdFRvRG8ocGFyc2VJbnQocHJvalNlbGVjdC52YWx1ZSksdGl0bGVJbnB1dC52YWx1ZSxkZXNjcmlwdGlvblRleHQudmFsdWUsZHVlRGF0ZUlucHV0LnZhbHVlLHByaW9yaXR5U2VsZWN0LnZhbHVlKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtYWRkLXRvZG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIHByb3RvdHlwZS5yZW1vdmVNb2RhbCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBnb29kTGVuQ2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGdvb2REYXRlQ2hlY2suY2hlY2tlZD10cnVlO1xuXG4gICAgICAgIGlmKHRpdGxlSW5wdXQudmFsdWUubGVuZ3RoPT0wIHx8IHRpdGxlSW5wdXQudmFsdWUubGVuZ3RoPj01MCl7XG4gICAgICAgICAgICB2YWxpZD1mYWxzZTtcbiAgICAgICAgICAgIGdvb2RMZW5DaGVjay5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihkdWVEYXRlSW5wdXQudmFsdWU9PVwiXCIpe1xuICAgICAgICAgICAgdmFsaWQ9ZmFsc2U7XG4gICAgICAgICAgICBnb29kRGF0ZUNoZWNrLmNoZWNrZWQ9ZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZih2YWxpZCl7XG4gICAgICAgICAgICBjb25mQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uZkJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGVkaXRUb0RvID0gZnVuY3Rpb24ocHJvakJlbG9uZyx0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KXtcbiAgICAgICAgLy9XZSBlZGl0IHRoZSB0b2RvIGluIHRoZSBwcm9qZWN0IGl0IGJlbG9uZ3NcbiAgICAgICAgTXlQcm9qZWN0cy5wcm9qZWN0c1twcm9qSW5kXS50b2Rvc1t0b2RvSW5kXS5wcm9qQmVsb25nID0gcHJvakJlbG9uZztcbiAgICAgICAgTXlQcm9qZWN0cy5wcm9qZWN0c1twcm9qSW5kXS50b2Rvc1t0b2RvSW5kXS50aXRsZSA9IHRpdGxlO1xuICAgICAgICBNeVByb2plY3RzLnByb2plY3RzW3Byb2pJbmRdLnRvZG9zW3RvZG9JbmRdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIE15UHJvamVjdHMucHJvamVjdHNbcHJvakluZF0udG9kb3NbdG9kb0luZF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIE15UHJvamVjdHMucHJvamVjdHNbcHJvakluZF0udG9kb3NbdG9kb0luZF0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgbGV0IG5ld1ZlclRvZG8gPSBNeVByb2plY3RzLnByb2plY3RzW3Byb2pJbmRdLnRvZG9zW3RvZG9JbmRdO1xuICAgICAgICAvL1dlIHJlbW92ZSB0aGUgdG9kbyBmcm9tIHRoZSBwcm9qZWN0IGl0IHdhcyBvblxuICAgICAgICBNeVByb2plY3RzLnByb2plY3RzW3Byb2pJbmRdLnRvZG9zLnNwbGljZSh0b2RvSW5kLDEpO1xuICAgICAgICBNeVByb2plY3RzLnByb2plY3RzW3Byb2pCZWxvbmddLmFkZFRvRG9JdGVtKG5ld1ZlclRvZG8pO1xuICAgICAgICBcbiAgICAgICAgaWYoYWN0aXZlVGFiPT1wcm9qQmVsb25nKXtcbiAgICAgICAgICAgIHNob3dUb0RvcyhNeVByb2plY3RzLnByb2plY3RzW3Byb2pCZWxvbmddLnRvZG9zKTtcbiAgICAgICAgfVxuICAgICAgICBwcm90b3R5cGUucmVtb3ZlTW9kYWwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3Nob3dNb2RhbH07XG59XG5cbmNvbnN0IHNob3dQcm9qZWN0cyA9IGZ1bmN0aW9uKHByb2plY3RMaXN0KXtcbiAgICBsZXQgcHJvamVjdHNJdGVtcztcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWl0ZW1zXCIpPT09bnVsbCl7XG4gICAgICAgIHByb2plY3RzSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIHByb2plY3RzSXRlbXMuc2V0QXR0cmlidXRlKFwiaWRcIixcInByb2plY3RzLWl0ZW1zXCIpO1xuICAgIH1lbHNle1xuICAgICAgICBwcm9qZWN0c0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1pdGVtc1wiKTtcbiAgICB9XG4gICAgcHJvamVjdHNJdGVtcy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbVByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGl0ZW1Qcm9qLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHNwYW4+JHtpdGVtLm5hbWV9PC9zcGFuPjxzcGFuIHRpdGxlPVwiJHtpdGVtLnRvZG9zLmxlbmd0aH0gdG9kb3NcIj4ke2l0ZW0udG9kb3MubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgYDtcbiAgICAgICAgaXRlbVByb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNob3dUb0RvcyhNeVByb2plY3RzLnByb2plY3RzW2luZGV4XS50b2Rvcyk7XG4gICAgICAgICAgICBhY3RpdmVUYWIgPSBpbmRleDtcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdHNJdGVtcy5hcHBlbmRDaGlsZChpdGVtUHJvaik7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIikuYXBwZW5kQ2hpbGQocHJvamVjdHNJdGVtcyk7XG59XG5cbmNvbnN0IHNob3dUb0Rvcz0gZnVuY3Rpb24odG9kb0xpc3Qpe1xuICAgIGNvbnN0IHByb2pJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWluZm9cIik7XG4gICAgcHJvakluZm8uaW5uZXJIVE1MPVwiXCI7XG4gICAgXG4gICAgdG9kb0xpc3QuZm9yRWFjaChmdW5jdGlvbih0b2RvLGluZGV4KXtcbiAgICAgICAgbGV0IGl0ZW1Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaXRlbVRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIix0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgaXRlbVRvZG8uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+JHt0b2RvLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPGgzPkR1ZTogJHt0b2RvLmR1ZURhdGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaW5mbyBzZWUtZWRpdC10b2RvXCIgdGl0bGU9XCJTZWUgLyBlZGl0XCIgZGF0YS1pZD0ke2luZGV4fSBkYXRhLXByb2plY3Q9JHt0b2RvLnByb2plY3RCZWxvbmd9PjwvaT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgcHJvakluZm8uYXBwZW5kQ2hpbGQoaXRlbVRvZG8pO1xuICAgIH0pO1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWUtZWRpdC10b2RvXCIpKS5mb3JFYWNoKGJ1dHRvbj0+e1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBlZGl0VG9kb01vZGFsID0gRWRpdFRvZG9Nb2RhbCgpO1xuICAgICAgICAgICAgZWRpdFRvZG9Nb2RhbC5zaG93TW9kYWwocGFyc2VJbnQodGhpcy5kYXRhc2V0LmlkKSxwYXJzZUludCh0aGlzLmRhdGFzZXQucHJvamVjdCkpO1xuICAgICAgICAgICAgLy9lZGl0VG9kb01vZGFsLnNob3dNb2RhbCh0aGlzLmRhdGFzZXQuaWQsdGhpcy5kYXRhc2V0LnByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtpbml0aWFsUGFnZSxzaG93UHJvamVjdHN9OyIsImltcG9ydCB7IHNob3dQcm9qZWN0cyB9IGZyb20gXCIuL0RPTVwiO1xuXG5jb25zdCB0b2RvSXRlbSA9IGZ1bmN0aW9uKHByb2plY3RCZWxvbmcsdGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjaGVja2VkID0gZmFsc2Upe1xuXG4gICAgcmV0dXJuIHtwcm9qZWN0QmVsb25nLHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksY2hlY2tlZH07XG59XG5jb25zdCBQcm9qZWN0ID0gZnVuY3Rpb24obmFtZSl7XG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICBjb25zdCBhZGRUb0RvID0gZnVuY3Rpb24ocHJvamVjdEJlbG9uZyx0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KXtcbiAgICAgICAgdG9kb3MucHVzaCh0b2RvSXRlbShwcm9qZWN0QmVsb25nLHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpKTtcbiAgICB9XG4gICAgY29uc3QgYWRkVG9Eb0l0ZW0gPSBmdW5jdGlvbih0b2RvSXRlbSl7XG4gICAgICAgIHRvZG9zLnB1c2godG9kb0l0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4ge25hbWUsYWRkVG9EbyxhZGRUb0RvSXRlbSwgZ2V0IHRvZG9zKCl7cmV0dXJuIHRvZG9zfX07XG59XG5cbmNvbnN0IE15UHJvamVjdHMgPSAoZnVuY3Rpb24oKXtcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgICBcbiAgICBjb25zdCBhZGRQcm9qID0gZnVuY3Rpb24ocHJOYW1lKXtcbiAgICAgICAgcHJvamVjdHMucHVzaChQcm9qZWN0KHByTmFtZSkpO1xuICAgIH1cblxuICAgIGFkZFByb2ooXCJERUZBVUxUXCIpO1xuICAgIFxuICAgIHJldHVybiB7YWRkUHJvaixnZXQgcHJvamVjdHMoKXtyZXR1cm4gcHJvamVjdHN9fTtcbn0pKCk7XG5cbmV4cG9ydCB7TXlQcm9qZWN0c307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0aWFsUGFnZSB9IGZyb20gXCIuL0RPTS5qc1wiO1xuXG5pbml0aWFsUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9