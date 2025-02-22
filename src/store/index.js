import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const store = new Vuex.Store({
  modules: {},
  actions,
  getters,
  mutations,
})

export default store;