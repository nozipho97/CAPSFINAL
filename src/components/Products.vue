<template>
    <h2>Our Menu</h2>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" style="width:7rem; justify-content:left; margin-left:50rem;" aria-label="Search" v-model="SearchItem">
  </form>
  <button  class="btnSort">
        <i class="fas fa-sort"></i> Sort by beverage
      </button>
    <div class="row">
      <div class="col-6 col-sm-4 " v-for="product in products" :key="product.prodID">
          <div class="card">
            <img v-bind:src="product.imgURL" class="card-img-top" alt="product" >
            <div class="card-body">
              <h5 class="card-title">{{product.prodName}}</h5>
              <p class="card-text">R{{product.prodPrice}}</p>
              <a href="#" class="btn btn-dark">More details</a>
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
      const store = useStore();
      store.dispatch("fetchProducts");
      const products =
        computed(() => store.state.products);
      return {
        products
      }
    },
    
  }

  </script>



  <style scoped>
  
  .card{
    padding: 1rem;
    width:25rem;
    padding-top: 1rem;
  
  }
  form{
    padding-top: 10rem;
    
  }
 
      
  </style>