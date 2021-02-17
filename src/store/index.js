import Vue from 'vue'
import Vuex from 'vuex'
import json from '../../public/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: json.products
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
