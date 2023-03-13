import { createStore } from 'vuex'
import axios from 'axios'
const finalCapURL = 'https://finalcap.onrender.com/';

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
  },
  getters: {
    getProducts: (state) => state.products,
    getUsers: (state) => state.users
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, values) {
      state.user = values;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, values) {
      state.product = values;
    },
    setMessage(state, value) {
      state.message = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
    }
  },
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${finalCapURL}users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit(`setUsers`, results)
      } else {
        context.commit('setMessege', err)
      }
    },
    fetchProducts: async (context) => {
      const response = await axios.get(`${finalCapURL}Products`);
      const { results } = response.data;
      context.commit("setProducts", results);
    },
    async register(context, payload) {
      const res = await axios.post(`${finalCapURL}register`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async login(context, payload) {
      const res = await axios.post(`${finalCapURL}login`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async deleteUser(context, payload) {
      const res = await axios.post(`${finalCapURL}delete`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async UpdateUser(context, payload) {
      const res = await axios.put(`${finalCapURL}UpdateUser`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async updateProduct(context, payload) {
      const res = await axios.put(`${finalCapURL}updateProduct`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
  },
    modules: {
      
  }
});
