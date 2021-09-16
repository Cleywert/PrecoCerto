import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    produtos: {}
  },
  mutations: {
    SET_PRODUTOS(state, payload) {
      state.produtos = payload
    }
  },
  actions: {
    GET_PRODUTOS(context) {
      axios.get('http://localhost:3000/rows').then(response=>{
        context.commit('SET_PRODUTOS', response.data);
      });
    }
  },
  modules: {
  }
})
