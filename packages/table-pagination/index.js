import EleTablePagination from "./table.vue";

EleTablePagination.install = function(Vue) {
  Vue.component(EleTablePagination.name, EleTablePagination);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default EleTablePagination;
