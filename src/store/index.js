import Vuex from 'vuex';
import getters from './getters';
import searchResult from './modules/searchResult';
import selectedChart from './modules/selectedChart';

const store = new Vuex.Store({
  modules: {
    searchResult,
    selectedChart,
  },
  getters,
})

export default store;