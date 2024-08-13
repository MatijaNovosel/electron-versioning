import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { store } from "quasar/wrappers";
import { Router } from "vue-router";

declare module "pinia" {
  export interface PiniaCustomProperties {
    readonly router: Router;
  }
}

export default store(() => {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  return pinia;
});
