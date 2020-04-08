import EleTablePagination from "./table-pagination/index.js";

const components = [EleTablePagination];

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  EleTablePagination
};
