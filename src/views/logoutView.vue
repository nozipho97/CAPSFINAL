<template>
    <div  class="logout">
    <button @click="logout" class="btn btn-dark">Logout</button>
    </div>
</template>

<script>

export default {
  computed:{
    logout(){
      return this.$store.state
     
    }
   },
}
</script>