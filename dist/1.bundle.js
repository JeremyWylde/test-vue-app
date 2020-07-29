(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ListOfBooks.vue?vue&type=template&id=759b91cb&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [_vm._v("Books")]),
    _vm._v(" "),
    this.$store.state.books.length
      ? _c("table", [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(this.$store.state.books, function(book, i) {
              return _c("tr", { key: book.id }, [
                _c("td", [
                  _c("img", {
                    staticClass: "logo",
                    attrs: { src: book.logoUrl }
                  })
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(i + 1))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(book.title))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(book.author))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(new Date(book.date).toLocaleDateString()))
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-small",
                        attrs: { tag: "button", to: "/editBook/" + book.id }
                      },
                      [_vm._v("\n              Edit book\n            ")]
                    )
                  ],
                  1
                )
              ])
            }),
            0
          )
        ])
      : _c("p", [_vm._v("There is no books")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "btn-container" },
      [
        _c(
          "router-link",
          {
            staticClass: "btn btn-small1",
            attrs: { tag: "button", to: "/addBook" }
          },
          [_vm._v("\n      Add new book\n    ")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Logo")]),
        _vm._v(" "),
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Author")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Edit")])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./src/views/ListOfBooks.vue?vue&type=template&id=759b91cb&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ListOfBooks.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ListOfBooksvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/views/ListOfBooks.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_ListOfBooksvue_type_script_lang_js_ = (ListOfBooksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/ListOfBooks.vue?vue&type=style&index=0&id=759b91cb&lang=scss&scoped=true&
var ListOfBooksvue_type_style_index_0_id_759b91cb_lang_scss_scoped_true_ = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(107);

// CONCATENATED MODULE: ./src/views/ListOfBooks.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_ListOfBooksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "759b91cb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/ListOfBooks.vue"
/* harmony default export */ var ListOfBooks = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(174).default
var update = add("fa6a53d4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListOfBooks_vue_vue_type_style_index_0_id_759b91cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListOfBooks_vue_vue_type_style_index_0_id_759b91cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListOfBooks_vue_vue_type_style_index_0_id_759b91cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ListOfBooks_vue_vue_type_style_index_0_id_759b91cb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".logo[data-v-759b91cb]{height:50px}.btn-container[data-v-759b91cb]{margin-top:10px}\n", "",{"version":3,"sources":["D:/projects/tesonero-test-task/src/views/ListOfBooks.vue"],"names":[],"mappings":"AA6CA,uBACI,WAAY,CACf,gCAEG,eAAgB","file":"ListOfBooks.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.logo {\n    height: 50px;\n}\n.btn-container{\n    margin-top: 10px;\n}\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map