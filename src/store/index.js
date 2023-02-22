import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchVal: "",
    searchList: 0,
    loginActive: false,
  },
  mutations: {
    SET_SEARCHVAL(state, payload) {
      state.searchVal = payload;
    },
    SET_USERLOGIN(state, payload) {
      state.loginActive = payload;
    },
  },
  actions: {
    toggleStateUser({ commit }, payload) {
      commit("SET_SEARCHVAL", payload);
    },
    loginUser({ commit }, payload) {
      commit("SET_USERLOGIN", payload);
    },
  },
  modules: {},
});
