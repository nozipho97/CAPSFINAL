<template>
  <div class="delete">
    <button type="button" class="btn btn-danger" v-if="$route.params.id"  @click="deleteUser"> <i class="fa-solid fa-trash"></i></button>
    </div>
  </template>
  
  <script>
  

export default {
 
      methods: {
      deleteUser() {
        this.$store.dispatch('deleteUser', this.$route.params.id);
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }   
    },
   
}

  </script>
  <style scoped>
.delete{
  padding-top: 5rem;
}
</style>
  
