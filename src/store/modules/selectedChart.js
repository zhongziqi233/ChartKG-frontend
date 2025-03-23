const state = {
  data: ""
};

const mutations = {
  SET_SELECTED_CHART(state, value) {
    state.data = value;
  }
}

const actions = {
  updateSelectedChart({ commit }, data) {
    commit('SET_SELECTED_CHART', data)
  }
}

export default { 
  namespaced: true, 
  state,
  actions,
  mutations
};
