<template>
    <!-- Button trigger modal -->
    <!-- <button
      type="button"
      class="btn btn-dark"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add Product
    </button> -->
  
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Products!</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProduct">
              <div class="form-group">
                <label for="prodName">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="prodName"
                  v-model="payload.prodName"
                />
              </div>
              <div class="form-group">
                <label for="prodID">Product ID</label>
                <input
                  type="number"
                  class="form-control"
                  id="prodID"
                  v-model="payload.prodID"
                />
              </div>
              <div class="form-group">
                <label for="prodDescription">Product Description</label>
                <textarea
                  class="form-control"
                  id="prodDescription"
                  rows="3"
                  v-model="payload.prodDescription"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="category">Category</label>
                <select class="form-control" id="category" v-model="payload.category">
                  <option value="laptops">Laptops</option>
                  <option value="tablets">tablets</option>
                  <option value="gaming">gaming</option>
                  <option value="vr">vr</option>
                </select>
              </div>
              <div class="form-group">
                <label for="quantity">Quantity</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  v-model="payload.prodQuantity"
                />
              </div>
              <div class="form-group">
                <label for="price">Price</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  v-model="payload.prodPrice"
                />
              </div>
              <div class="form-group">
                <label for="URL">URL</label>
                <input
                  type="number"
                  class="form-control"
                  id="imgURL"
                  v-model="payload.imgURL"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="addProduct">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {computed} from '@vue/runtime-core';
  import {useStore} from 'vuex';
  export default {
    setup (){
    const payload= {
      prodID:'',
      prodName:'',
      prodDescription:'',
      category:'',
      prodPrice:'',
      prodQuantity:'',
      imgURL:'https://i.postimg.cc/mDk93cjN/gadget_logo-removebg-preview.png'
    }
    const store= useStore();
    const addProduct = () => {
      store.dispatch('addProduct',payload);
      console.log(payload);
    }
    const usermessage= 
      computed( () => store.state.message )
    return{
      payload,
      addProduct,
      usermessage

    }
  }};
  </script>