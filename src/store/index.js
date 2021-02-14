import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedin: false,
    user: {},
    countries: [
      { id: 'TR', name: 'Turkey' },
      { id: 'US', name: 'United States of America' },
      { id: 'GB', name: 'United Kingdom' },
      { id: 'DE', name: 'Germany' },
      { id: 'SE', name: 'Sweden' },
      { id: 'KE', name: 'Kenya' },
      { id: 'BR', name: 'Brazil' },
      { id: 'ZW', name: 'Zimbabwe' },
    ],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsLoggedin(state, payload) {
      state.isLoggedin = payload;
    },
  },
  actions: {
    save({ commit }, form) {
      commit('setIsLoggedin', true);
      commit('setUser', form);
    },
  },
  modules: {
  },
});
