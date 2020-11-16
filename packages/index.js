import ToSelect from "./select/index";
import ToButton from "./button/index";

const components = [ToSelect, ToButton];

function install(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { ToSelect, ToButton };

export default { install };
