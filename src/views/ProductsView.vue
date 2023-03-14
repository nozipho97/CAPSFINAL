<template>
    <Products/>
    <Spinner/>
    <!-- <SingleProduct/> -->
  </template>
  
  <script>
//   import SingleProduct from '../components/singleProduct.vue';
  import Spinner from '@/components/Spinner.vue';
  import Products from '../components/Products.vue';
  
  
  export default {
      
      components: { Products,Spinner, }
  }
  
  </script>