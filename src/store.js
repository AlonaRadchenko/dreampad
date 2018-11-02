import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dreams: [],

  },
  mutations: {
    saveDream(state,data){
      state.dreams.push(data);
      console.log('all dreams:',state.dreams);

    }

  },
  actions: {
    actionSaveDream({ commit }, data){
      commit('saveDream',data)
    }

  }
})
