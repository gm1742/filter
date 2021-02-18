import Vue from 'vue'
import Vuex from 'vuex'
import json from '../json/products'

Vue.use(Vuex)

const exchangeRate = 30

export default new Vuex.Store({
  state: {
    products: json.products,
    currency: 'UAN',
    cureen: {
      uan: true,
      usd: false
    }
  },
  mutations: {
    to (state, payload) {
      var mass = []
      json.products.map(p => {
        if (payload.from <= p.price && p.price <= payload.to) {
          mass.push(p)
        }
        state.products = state.products = mass
      })
      return state.products
    },
    createProduct (state, payload) {
      state.products.push(payload)
    },
    usd (state, payload) {
      state.currency = payload
      state.cureen.uan = false
      state.cureen.usd = true
      return state.products.forEach(p => {
        const result = p.price / exchangeRate
        p.price = result
      })
    },
    uan (state, payload) {
      state.currency = payload
      state.cureen.uan = true
      state.cureen.usd = false
      return state.products.forEach(p => {
        const result = p.price * exchangeRate
        p.price = result
      })
    },
    ascending (state) {
      return state.products.sort((a, b) => a.price < b.price ? 1 : -1)
    },
    descending (state) {
      return state.products.sort((a, b) => a.price > b.price ? 1 : -1)
    },
    alphabet (state) {
      return state.products.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })
    }
  },
  actions: {
    to ({ commit }, payload) {
      commit('to', payload)
    },
    createProduct ({ commit }, payload) {
      commit('createProduct', payload)
    },
    usd ({ commit }, payload) {
      commit('usd', payload)
    },
    uan ({ commit }, payload) {
      commit('uan', payload)
    },
    ascending ({ commit }) {
      commit('ascending')
    },
    descending ({ commit }) {
      commit('descending')
    },
    alphabet ({ commit }) {
      commit('alphabet')
    }
  },
  getters: {
    products (state) {
      return state.products
    },
    currency (state) {
      return state.currency
    }
  }
})
