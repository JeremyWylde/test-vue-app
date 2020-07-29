(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AddBook.vue?vue&type=template&id=692cbe40&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col s6 offset-s3" },
      [
        _c("H1", [_vm._v("Add Book")]),
        _vm._v(" "),
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit($event)
              }
            }
          },
          [
            _c("div", { staticClass: "input-field" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.logoUrl,
                    expression: "logoUrl"
                  }
                ],
                staticClass: "validate",
                attrs: { id: "LogoURL", type: "text", required: "" },
                domProps: { value: _vm.logoUrl },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.logoUrl = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "LogoURL" } }, [_vm._v("LogoURL")]),
              _vm._v(" "),
              _c("span", {
                staticClass: "helper-text",
                attrs: { "data-error": "LogoURL is required" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-field" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.title,
                    expression: "title"
                  }
                ],
                staticClass: "validate",
                attrs: { id: "title", type: "text", required: "" },
                domProps: { value: _vm.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.title = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "title" } }, [_vm._v("Title")]),
              _vm._v(" "),
              _c("span", {
                staticClass: "helper-text",
                attrs: { "data-error": "Title is required" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-field" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.author,
                    expression: "author"
                  }
                ],
                staticClass: "validate",
                attrs: { id: "author", type: "text", required: "" },
                domProps: { value: _vm.author },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.author = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "author" } }, [_vm._v("Author")]),
              _vm._v(" "),
              _c("span", {
                staticClass: "helper-text",
                attrs: { "data-error": "Field 'Author' is required" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-field" }, [
              _c("input", { ref: "dateOfCreate", attrs: { type: "text" } })
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "btn", attrs: { type: "submit" } }, [
              _vm._v("Add book")
            ])
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/AddBook.vue?vue&type=template&id=692cbe40&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/AddBook.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AddBookvue_type_script_lang_js_ = ({
  name: 'addBook',
  data: function data() {
    return {
      logoUrl: '',
      title: '',
      author: '',
      date: null
    };
  },
  mounted: function mounted() {
    this.date = M.Datepicker.init(this.$refs.dateOfCreate, {
      logoUrl: '',
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    });
  },
  methods: {
    submit: function submit() {
      var book = {
        logoUrl: this.logoUrl,
        id: this.$store.state.books.length,
        title: this.title,
        author: this.author,
        date: this.date.date
      };
      this.$store.dispatch('addBook', book);
      this.$router.push('/');
    }
  },
  destroyed: function destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy();
    }
  }
});
// CONCATENATED MODULE: ./src/views/AddBook.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_AddBookvue_type_script_lang_js_ = (AddBookvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(107);

// CONCATENATED MODULE: ./src/views/AddBook.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_AddBookvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/AddBook.vue"
/* harmony default export */ var AddBook = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map