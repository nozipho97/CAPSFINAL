<template>
    <h2>Our Menu</h2>
  <form class="d-flex align-items-center" style="width:7rem; margin-bottom:20px;">
    <input  class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="sortedProducts">
  </form>
  
    <div class="row">
      <div class="col-4 col-sm-4 " v-for="product in products" :key="product.prodID">
          <div class="card" style="">
            <img v-bind:src="product.imgURL" class="card-img" alt="product" >
            <div class="card-body">
              <h5 class="card-title">{{product.prodName}}</h5>
              <p class="card-text">R{{product.prodPrice}}</p>
              <router-link :to="{name: 'single', params: {id: product.prodID}}"><button type="button" class="btn btn-dark">More details</button></router-link>
            </div> 
          </div>
          </div>
        </div>
    
    
  </template>
  <script>
  import { computed } from '@vue/runtime-core';
  import { useStore } from 'vuex';
  import singleProductView from '../views/singleProductView.vue';
    
  
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
    computed: {
	sortedArray() {
		let sortedProducts = this.products;
		sortedProducts = sortedProducts.sort((a,b) => {
			let fa = a.prodName.toLowerCase(), fb = b.prodName.toLowerCase();
			if (fa < fb) {
				return -1
			}
			if (fa > fb) {
				return 1
			}
			return 0
		})
	}
},
    components: { singleProductView },
    
    
  }

  </script>



  <style scoped>
  
  .card{
    width:25rem;
    background-color: sandybrown;
   justify-content: space-evenly;
   transition: 0.5s;
    
  }
  .card:hover {
    transform: translateY(-10px);
  }
  
  img{
    height:20rem;
  }
  .col-4{
    padding-left: 2.5rem;
    padding-bottom: 2rem;
  }
  </style>



























