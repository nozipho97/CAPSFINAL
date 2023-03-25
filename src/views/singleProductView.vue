<template>
  <div>
    <button v-on:click="navigateTo('cart')" class="btn btn-dark align-right">View in Cart</button>
    <div class="container">
      <div class="image">
        <img v-bind:src="product.imgURL" class="" alt="product" style="height:25rem; width:25rem;" ></div>
      </div>
      <div class="description" >
          <h2>{{ product.prodName }}</h2>
          <p>Price: R{{ product.prodPrice }}</p>
          <p>Description: {{ product.prodDescription }}</p>
          <p><em>{{ product.prodQuantity }} left in stock</em></p>
          <button v-on:click="addToCart(product)" class="btn btn-dark">Add to Cart</button>
      </div>
    </div>
  
</template>
  
  <script>
  export default {
    computed: {
      product() {
        return this.$store.state.product
      }
    },
    created() {
      this.$store.dispatch('fetchSingleProduct', this.$route.params.id)
    },
    methods: {
      addToCart(product) {
          // this.cart.push(product);
          console.log(product);
          alert(('Added to Cart'));
        },
        removeItem(index) {
          this.cart.splice(index)
        },
        
        
  },
   
  }
 

  </script>
 <style scoped>
.description{
  color: sandybrown;
}

</style>
  
  