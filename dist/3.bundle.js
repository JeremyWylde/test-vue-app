(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/EditBook.vue?vue&type=template&id=42d758cd&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.book
      ? _c("div", [_c("h1", [_vm._v(_vm._s(_vm.book.title))])])
      : _c("p", [_vm._v("book not found")]),
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
            attrs: {
              id: "title",
              type: "text",
              required: "",
              value: "book.title"
            },
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
          _vm._v("Update book")
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/EditBook.vue?vue&type=template&id=42d758cd&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/EditBook.vue?vue&type=script&lang=js&
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
/* harmony default export */ var EditBookvue_type_script_lang_js_ = ({
  computed: {
    book: function book() {
      return this.$store.getters.bookById(+this.$route.params.id);
    }
  },
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
    this.logoUrl = this.book.logoUrl;
    this.title = this.book.title;
    this.author = this.book.author;
    this.date = M.Datepicker.init(this.$refs.dateOfCreate, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(this.book.date),
      setDefaultDate: true
    });
  },
  methods: {
    submit: function submit() {
      this.$store.dispatch('updateBook', {
        logoUrl: this.logoUrl,
        id: this.book.id,
        title: this.title,
        author: this.author,
        date: this.date.date
      });
      this.$router.push('/');
    }
  },
  destroyed: function destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy();
    }
  }
});
// CONCATENATED MODULE: ./src/views/EditBook.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_EditBookvue_type_script_lang_js_ = (EditBookvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(107);

// CONCATENATED MODULE: ./src/views/EditBook.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_EditBookvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "42d758cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/EditBook.vue"
/* harmony default export */ var EditBook = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map