import Vue from 'vue';
import Vuex from 'vuex';
import DataList from '/data.json';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobsList: DataList,
  },
  getters: {
    fetchOneJob(state, id){
      return state.jobsList.find(x => x.id == id);
    },
  },
});
