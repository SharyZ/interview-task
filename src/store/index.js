import Vue from "vue";
import Vuex from "vuex";

import cartModule from "./modules/cart";
import eCommerceModule from "./modules/eCommerce";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cartModule,
    eCommerceModule,
  },
});
