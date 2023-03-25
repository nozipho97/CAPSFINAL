<template>
  <div class="delete">
    <button type="button" class="btn btn-danger" v-if="$route.params.id"  @click="deleteProduct"> <i class="fa-solid fa-trash"></i></button>
    </div>
  </template>
  
  <script>
  

export default {
 
      methods: {
      deleteProduct() {
        this.$store.dispatch('deleteProduct', this.$route.params.id);
      }
    },
    computed: {
      product() {
        return this.$store.state.product
      }   
    },
   
}

  </script>
  <style scoped>
.delete{
  padding-top: 5rem;
}
</style>
  
