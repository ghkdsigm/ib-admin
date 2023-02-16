import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchVal: "",
    searchList: 0,
  },
  mutations: {
    SET_SEARCHVAL(state, payload) {
      state.searchVal = payload;
    },
  },
  actions: {
    toggleStateUser({ commit }, payload) {
      commit("SET_SEARCHVAL", payload);
    },
  },
  modules: {},
});
