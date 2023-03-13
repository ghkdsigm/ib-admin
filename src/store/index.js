import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchVal: "",
    searchList: 0,
    loginActive: false,
    userLevel: "",
  },
  mutations: {
    SET_SEARCHVAL(state, payload) {
      state.searchVal = payload;
    },
    SET_USERLOGIN(state, payload) {
      state.loginActive = payload;
    },
    SET_USERLEVEL(state, payload) {
      state.userLevel = payload;
    },
  },
  actions: {
    toggleStateUser({ commit }, payload) {
      commit("SET_SEARCHVAL", payload);
    },
    loginUser({ commit }, payload) {
      commit("SET_USERLOGIN", payload);
    },
    userLevel({ commit }, payload) {
      commit("SET_USERLEVEL", payload);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
