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
    getUsers: (state) => state.users,
    getCartItems: (state) => state.cartItems,
    getSingleProduct:(state)=>state.singleProduct,
    getSingleUser:(state)=>state.user
  },
  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, values) {
      state.product = values;
    },
    setCartItems(state, values) {
      state.cartItems = values;
    },
    setSingleProduct(state, value) {
      state.singleProduct = value;
    },
    setSingleUser(state, value) {
      state.singleUser = value;
    },
    setCartItem(state, value) {
      state.cartItem = value;
    },
    setLoggedUser(state, value) {
      state.loggedUser = value;
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
    async Edit(context, payload) {
      const res = await axios.post(`${finalCapURL}Edit`, payload);
      const { msg, err } = await res.data;
      if (msg) {
        context.commit('setMessage', msg)
      } else {
        context.commit('setMessage', err)
      }
    },
    async login(context, payload) {
      const res = await axios.post(`${finalCapURL}login`, payload);
      const { result, err } = await res.data;
      console.log(result);
      if (result) {
        context.commit("setUserLoggedIn", result);
        context.commit("setMessage", result);
      } else {
        context.commit("setMessage", err);
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
    async deleteProduct(context,id) {
      const res = await axios.delete(`${finalCapURL}product/${id}`);
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
    async fetchSingleProduct(context, id) {
      const res = await axios.get(`${finalCapURL}product/${id}`,);
      const { results, err } = await res.data;
      if (results) {
        context.commit('setProduct', results[0])
      } else {
        context.commit('setMessage', err)
      }
    },
    async login (context, payload) {
      const res = await axios.post(`${finalCapURL}login`,payload);
      const { result, err } = await res.data;
      console.log(result);
      if (result) {
        context.commit("setLoggedUser", result);
        context.commit("setMessage", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchUser(context, id) {
      const res = await axios.get(`${finalCapURL}user/${id}`);
      const { results, err } = await res.data;
      if (results) {
        context.commit('setUser', results)
      } else {
        context.commit('setMessage', err)
      }
    }
  },
  fetchtCartItem: async(context, payload) => {
    const res = await axios.get(`finalCapURL}user/${payload?.userID}/cart`);
    const {results} = await res.data;
    console.log("Results from cart : ", results)
    if(results) {
      console.log(results)
      context.commit('setCart', results);
    }
  },
  fetchCartItems: async(context) => {
    let loggedUser = JSON.parse(localStorage.getItem('user'));
    const res = await axios.get(`${finalCapURL}user/${loggedUser?.userID}/cart`);
    const {results} = await res.data;
    if(results) {
      console.log("cart - results: ", results)
      context.commit('setCart', results);
    }
  },
  async addToCart(context, payload) {
    let res = await axios.post(`${finalCapURL}user/${payload.userID}/cart`, payload);
    let {msg, err} = await res.data;
    if(msg) {
      context.commit('setCart', msg);
    }else{
      context.commit('setMessage', err);
    }
  },
  async editCart (context, payload) {
    console.log(payload)
    const res = await axios.put(`${finalCapURL}user/${payload.prodID}/cart/${id}`, payload)
    console.log(res)
    const { msg, err } = await res.data
    if (results) {
      context.commit('setCart', message)
    } else {
      context.commit('setMessage', err)
    }
  },
  async removeCartItem(context) {
    let loggedUser = JSON.parse(localStorage.getItem('user'));
    const res =  await axios .delete(`${finalCapURL}user/${loggedUser?.userID}/cart`)
    const { msg, err } = await res.data
    if (msg) {
      console.log("delete - results: ", msg)
      context.commit('setCart', msg)
    } else {
      context.commit('setMessage', err)
    }
  },
    modules: {
      
  }
});
