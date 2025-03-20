const state = {
  data: []
};

const mutations = {
  SET_SEARCHRESULT(state, value) {
    state.data = value;
  }
}

const actions = {
  updateSearchResult({ commit }, data) {
    commit('SET_SEARCHRESULT', data)
  }
}

export default { 
  namespaced: true, 
  state,
  actions,
  mutations
};
