<template>
    <div>
      <div class="container">
        <h2>Users</h2>
  <div class="row">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Profile</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Gender</th>
      <th scope="col">Cell Number</th>
      <th scope="col">User Role</th>
      <th scope="col">Join Date</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="user in users" :key="user.userID">
      <td> {{ user.userID }}</td>
      <td><i class="fa-solid fa-user"></i></td>
      <td> {{ user.firstName }}</td>
      <td> {{ user.lastName }}</td>
      <td> {{ user.emailAdd }}</td>
      <td> {{ user.gender }}</td>
      <td> {{ user.cellPhoneNumber }}</td>
      <td> {{ user.userRole }}</td>
      <td> {{ user.joinDate }}</td>
      <td><button type="button" class="btn btn-dark">Edit</button></td>
      <div class="modal-dialog modal-dialog-centered">
      <router-link :to="{name: 'deleteUs', params: {id: user.userID}}"><button type="button" class="btn btn-danger">delete</button></router-link></div>
     
    </tr>
  </tbody>
  </table>
  </div>
  </div>
    </div>

    <div>
      <div class="container">
        <h2>Products</h2>
        <button class="btn btn-dark"><router-link to="/addProduct"><i class="fa-solid fa-plus"></i> Add Product</router-link></button>
    
<div class="row">
  <table class="table">
<thead>
  <tr>
    <th scope="col">Product</th>
    <th scope="col">Price</th>
    <th scope="col">Category</th>
    <th scope="col">QTY</th>
    <th scope="col">Edit</th>
    <th scope="col">Delete</th>
  </tr>
</thead>
<tbody>
  <tr  v-for="product in products" :key="product.prodID">
    <td> {{ product.prodID }}</td>
    <td> {{ product.prodName }}</td>
    <td> {{ product.prodPrice }}</td>
    <td> {{ product.category }}</td>
    <td> {{ product.prodQuantity }}</td>
    <td><router-link to="/updateProduct"><button type="button" name="click" class="btn btn-dark">Edit</button></router-link></td>
    <router-link :to="{name: 'delete', params: {id: product.prodID}}"><button type="button" class="btn btn-danger">delete</button></router-link>
    </tr>
</tbody>
</table>
</div>
</div>
</div>

</template>
<script>
import deleteProduct from '@/components/deleteProduct.vue';
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
// import  axios  from 'axios';
export default {

  setup() {
    const store = useStore();
    store.dispatch('fetchUsers');
    store.dispatch('fetchProducts');
    const users =
      computed(() => store.state.users);
    const products =
      computed(() => store.state.products);
    return {
      users, products

    }
    
  },
  component:{deleteProduct}
}

  



</script>
<style>
.btnAddUser, .btnAddProduct, .btnSort{
  border: none;
  color:#633075;
  background-color: transparent;
  font-size: 1.5rem;
  margin:1rem;
  cursor: pointer;
}

.card{
  width: 20px;
  padding-top: 5rem;

}
.container{
  padding-top: 2rem;
  cursor: pointer;
}

table{
  background-color: sandybrown;
}


</style>