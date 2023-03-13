<template>
    <Products/>
    <Spinner/>
  </template>
  
  <script>
  import Spinner from '@/components/Spinner.vue';
  import Products from '../components/Products.vue';
  
  
  export default {
      
      components: { Products,Spinner  }
  }
  
  </script>