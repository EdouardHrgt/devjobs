import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobsList: null,
  },
  getters: {},
  mutations: {
    UpdateJobsList(state, payload) {
      state.jobsList.push(payload);
    },
  },
  actions: {},
  modules: {},
});
