import Vuex from 'vuex';
import getters from './getters';
import searchResult from './modules/searchResult';

const store = new Vuex.Store({
  modules: {
    searchResult
  },
  getters,
})

export default store;