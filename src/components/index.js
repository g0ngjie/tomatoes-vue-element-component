import Select from "./select/index";

const components = [Select];

function install(Vue) {
  components.map = (component) => {
    Vue.component(component.name, component);
  };
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Select,
};
