<template>
  <ProductsView/>
  <Spinner/>
  <!-- <SingleProduct/> -->
</template>

<script>
// import SingleProduct from '../components/singleProduct.vue';
import Spinner from '@/components/Spinner.vue';
import ProductsView from '../components/ProductsView.vue';


export default {
    
    components: { ProductsView,Spinner, }
}

</script>