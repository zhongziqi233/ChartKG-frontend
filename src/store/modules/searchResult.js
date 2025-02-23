const state = [];

const mutations = {
  CHANGE_SEARCHRESULT: (state, data) => {
    state = data;
  }
}

const actions = {
  CHANGE_SEARCHRESULT({ commit }, data) {
    commit('CHANGE_ASSETTREE', data)
  }
}

export default { 
  namespaced: true, 
  state,
  actions,
  mutations
};
