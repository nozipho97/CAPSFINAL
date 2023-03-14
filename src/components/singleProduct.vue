<template>
    



















    <!-- <div class="product-details">
      <h2>{{ product.prodName }}</h2>
      <p>{{ product.prodDescription }}</p>
      <p>Price: ${{ product.prodPrice }}</p>
      <button @submit.prevent="addToCart">Add to cart</button>
    </div> -->
  </template>
  
  <script>

  export default {
    data() {
    return {
      product: {
        prodID: "",
        prodName: '',
        prodDescription: '',
        prodPrice: "",
        
      }
    }
  },
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
          addToCart() {
            
      }
    }
  }
  </script>
  
  <style scoped>
  .product-details {
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  