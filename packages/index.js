import GJSelect from "./select/index";
import GJButton from "./button/index";

const components = [GJSelect, GJButton];

function install(Vue) {
  components.map = (component) => {
    Vue.component(component.name, component);
  };
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export {
  install,
  GJSelect,
  GJButton,
}

export default {
  install,
  GJSelect,
  GJButton,
};
