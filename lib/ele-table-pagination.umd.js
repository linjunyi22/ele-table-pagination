(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ele-table-pagination"] = factory();
	else
		root["ele-table-pagination"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23025ab1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/table-pagination/table.vue?vue&type=template&id=4b6943ea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.tableLoading),expression:"tableLoading"}],attrs:{"element-loading-text":_vm.loadingText,"data":_vm.tableData,"height":_vm.height,"max-height":_vm.maxHeight,"stripe":_vm.stripe,"border":_vm.border,"size":_vm.size,"fit":_vm.fit,"show-header":_vm.showHeader,"highlight-current-row":_vm.highlightCurrentRow,"current-row-key":_vm.currentRowKey,"row-class-name":_vm.rowClassName,"row-style":_vm.rowStyle,"cell-class-name":_vm.cellClassName,"cell-style":_vm.cellStyle,"header-row-class-name":_vm.headerRowClassName,"header-row-style":_vm.headerRowStyle,"header-cell-class-name":_vm.headerCellClassName,"header-cell-style":_vm.headerCellStyle,"row-key":_vm.rowKey,"empty-text":_vm.emptyText,"default-expand-all":_vm.defaultExpandAll,"expand-row-keys":_vm.expandRowKeys,"default-sort":_vm.defaultSort,"tooltip-effect":_vm.tooltipEffect,"show-summary":_vm.showSummary,"sum-text":_vm.sumText,"summary-method":_vm.summaryMethod,"span-method":_vm.spanMethod,"select-on-indeterminate":_vm.selectOnIndeterminate,"indent":_vm.indent,"lazy":_vm.lazy,"load":_vm.load,"tree-props":_vm.treeProps},on:{"select":function (selection, row) { return _vm.emitEventHandler('select', selection, row); },"select-all":function (selection) { return _vm.emitEventHandler('select-all', selection); },"selection-change":function (selection) { return _vm.emitEventHandler('selection-change', selection); },"cell-mouse-enter":function (row, column, cell, event) { return _vm.emitEventHandler('cell-mouse-enter', row, column, cell, event); },"cell-mouse-leave":function (row, column, cell, event) { return _vm.emitEventHandler('cell-mouse-leave', row, column, cell, event); },"cell-click":function (row, column, cell, event) { return _vm.emitEventHandler('cell-click', row, column, cell, event); },"cell-dblclick":function (row, column, cell, event) { return _vm.emitEventHandler('cell-dblclick', row, column, cell, event); },"row-click":function (row, event, column) { return _vm.emitEventHandler('row-click', row, event, column); },"row-dblclick":function (row, event) { return _vm.emitEventHandler('row-dblclick', row, event); },"row-contextmenu":function (row, event) { return _vm.emitEventHandler('row-contextmenu', row, event); },"header-click":function (column, event) { return _vm.emitEventHandler('header-click', column, event); },"header-contextmenu":function (column, event) { return _vm.emitEventHandler('header-contextmenu', column, event); },"sort-change":function (args) { return _vm.emitEventHandler('sort-change', args); },"filter-change":function (filters) { return _vm.emitEventHandler('filter-change', filters); },"current-change":function (currentRow, oldCurrentRow) { return _vm.emitEventHandler('current-change', currentRow, oldCurrentRow); },"header-dragend":function (newWidth, oldWidth, column, event) { return _vm.emitEventHandler('header-dragend', newWidth, oldWidth, column, event); },"expand-change":function (row, expandedRowsOrexpanded) { return _vm.emitEventHandler('expand-change', row, expandedRowsOrexpanded); }}},[_vm._t("default"),_vm._t("append")],2),_c('div',{style:({'text-align':_vm.paginationPosition,'margin-top':'15px'})},[_c('el-pagination',{attrs:{"total":_vm.dataCount,"page-size":_vm.internalPageSize,"small":_vm.small,"page-count":_vm.pageCount,"pager-count":_vm.pagerCount,"current-page":_vm.internalCurrentPage,"layout":_vm.layout,"page-sizes":_vm.pageSizes,"popper-class":_vm.popperClass,"prev-text":_vm.prevText,"next-text":_vm.nextText,"background":_vm.background,"disabled":_vm.disabled,"hide-on-single-page":_vm.hideOnSinglePage},on:{"update:pageSize":function($event){_vm.internalPageSize=$event},"update:page-size":function($event){_vm.internalPageSize=$event},"update:currentPage":function($event){_vm.internalCurrentPage=$event},"update:current-page":function($event){_vm.internalCurrentPage=$event},"size-change":function (page) { return _vm.emitEventHandler('size-change',page); },"current-change":function (currentPage) { return _vm.emitEventHandler('current-change',currentPage); },"prev-click":function (currentPage) { return _vm.emitEventHandler('prev-click',currentPage); },"next-click":function (currentPage) { return _vm.emitEventHandler('next-click',currentPage); }}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/table-pagination/table.vue?vue&type=template&id=4b6943ea&scoped=true&

// CONCATENATED MODULE: ./packages/table-pagination/props.js
// Element UI Table attributes
let ElementUITableProps = {
  size: String,

  height: [String, Number],

  maxHeight: [String, Number],

  fit: {
    type: Boolean,
    default: true
  },

  stripe: Boolean,

  border: Boolean,

  rowKey: [String, Function],

  showHeader: {
    type: Boolean,
    default: true
  },

  showSummary: Boolean,

  sumText: String,

  summaryMethod: Function,

  rowClassName: [String, Function],

  rowStyle: [Object, Function],

  cellClassName: [String, Function],

  cellStyle: [Object, Function],

  headerRowClassName: [String, Function],

  headerRowStyle: [Object, Function],

  headerCellClassName: [String, Function],

  headerCellStyle: {
    type: [Object, Function],
    default: () => {
      return { background: "rgba(240, 242, 245, 1)", color: "#606266" };
    }
  },

  highlightCurrentRow: Boolean,

  currentRowKey: [String, Number],

  emptyText: String,

  expandRowKeys: Array,

  defaultExpandAll: Boolean,

  defaultSort: Object,

  tooltipEffect: String,

  spanMethod: Function,

  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },

  indent: {
    type: Number,
    default: 16
  },

  treeProps: {
    type: Object,
    default() {
      return {
        hasChildren: "hasChildren",
        children: "children"
      };
    }
  },

  lazy: Boolean,

  load: Function
};

// Element UI Pagination attributes
let ElementUIPaginationProps = {
  pageSize: {
    type: Number,
    default: 10
  },

  small: Boolean,

  pageCount: Number,

  pagerCount: {
    type: Number,
    validator(value) {
      return (
        (value | 0) === value && value > 4 && value < 22 && value % 2 === 1
      );
    },
    default: 7
  },

  currentPage: {
    type: Number,
    default: 1
  },

  layout: {
    default: "prev, pager, next, jumper, ->, total"
  },

  pageSizes: {
    type: Array,
    default() {
      return [10, 20, 30, 40, 50, 100];
    }
  },

  popperClass: String,

  prevText: String,

  nextText: String,

  background: Boolean,

  disabled: Boolean,

  hideOnSinglePage: Boolean
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/table-pagination/table.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//



/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name: "EleTablePagination",
  props: {
    ...ElementUITableProps,
    ...ElementUIPaginationProps,

    // custom attribute
    // 分页组件的位置，可选值：left,right,center
    paginationPosition: {
      type: String,
      default: "center"
    },

    // 加载文字
    loadingText: {
      type: String,
      default: "正在加载中"
    },

    // 当组件挂载完成后是否自动进行一次数据查询的标志
    autoLoad: {
      type: Boolean,
      default: true
    },

    // 表格查询回调函数，必填，函数需要返回一个 Promise，否则无法正确加载 loading 动画
    queryMethod: {
      type: Function,
      required: true,
      default: () => {
        return async ({ currentPage, pageSize }) => {
          return {
            tableData: [],
            dataCount: 0
          };
        };
      }
    }
  },
  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0,
      tableData: [], // 表格数据
      dataCount: 0, // 数据总数
      tableLoading: false // 表格加载动画 boolean
    };
  },
  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = val;
      }
    },
    internalCurrentPage: {
      immediate: true,
      handler(newVal) {
        this.$emit("update:currentPage", newVal);
      }
    },
    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = val;
      }
    },
    internalPageSize: {
      immediate: true,
      handler(newVal) {
        this.$emit("update:pageSize", newVal);
      }
    },
    "pageParams.pageSize"(n, o) {
      this.internalCurrentPage = 1;
    },
    "pageParams.currentPage"(n, o) {
      this.queryMethodWorking();
    }
  },
  computed: {
    // 分页参数，主要用于查询数据时提供页码和每页数量
    pageParams() {
      return {
        pageSize: this.internalPageSize,
        currentPage: this.internalCurrentPage
      };
    }
  },
  methods: {
    // 封装查询的回调函数，调用过程中加载 loading
    async queryMethodWorking() {
      try {
        this.tableLoading = true;
        const { tableData, dataCount } = await this.queryMethod(
          this.pageParams
        );
        this.dataCount = dataCount;
        this.tableData = tableData;
        this.tableLoading = false;
      } catch (e) {
        this.dataCount = 0;
        this.tableData = [];
        this.tableLoading = false;
        throw e;
      }
    },
    // emit 事件处理
    emitEventHandler(event, ...args) {
      this.$emit(event, ...args);
    },
    // 刷新表格数据
    refreshQueryMethod() {
      this.queryMethodWorking();
    }
  },
  created() {},
  mounted() {
    // 自动加载
    if (this.autoLoad) {
      this.queryMethodWorking();
    }
  }
});

// CONCATENATED MODULE: ./packages/table-pagination/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_pagination_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/table-pagination/table.vue





/* normalize component */

var component = normalizeComponent(
  table_pagination_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4b6943ea",
  null
  
)

/* harmony default export */ var table = (component.exports);
// CONCATENATED MODULE: ./packages/table-pagination/index.js


table.install = function(Vue) {
  Vue.component(table.name, table);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var table_pagination = (table);

// CONCATENATED MODULE: ./packages/index.js


const components = [table_pagination];

const packages_install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  packages_install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  install: packages_install,
  EleTablePagination: table_pagination
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});