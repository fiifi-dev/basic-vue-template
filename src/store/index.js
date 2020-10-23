import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations } from "vuexfire";
Vue.use(Vuex);

//modules
export default new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {},
});
