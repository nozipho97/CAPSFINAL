<template>
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit Product
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form  @submit.prevent="Edit">
        <div class="field">
          <label class="label">Product Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Product Name"
              v-model="payload.prodName"
            />
          </div>
      </div>
      
        <div class="field">
          <label class="label">Price</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Price"
              v-model="payload.prodPrice"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="category"
              v-model="payload.category"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">QTY</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="quantity"
              v-model="payload.prodQuantity"
            />
          </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="button is-success" action="delete" v-on:click="Edit">SAVE</button>
      </div>
    </form>
    </div>
  </div>
</div>
</div>

 
</template>
  
<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
  setup() {
    const payload = {
      prodName: "",
      prodPrice: "",
      category: "",
      prodQuantity: ""
    };
    const store = useStore();
    const Edit = () => {
      store.dispatch("Edit", payload);
      return (payload);  
      }
      const usermessage= 
      computed( () => store.state.message )
      return {
        payload,
        usermessage,
        Edit
      }
    
      
  },
  
}
 

</script>
  
<style>
</style>