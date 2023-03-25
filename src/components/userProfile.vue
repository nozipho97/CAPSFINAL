<template>
  <h2>Your Profile</h2>
  <userProfile/>
</template>

<script>
import userProfile from '@/components/userProfile.vue';
export default {
  name:'userProfileView',
  components: {
      userProfile
  },
  computed: {
      loggedUser() {
      return this.$store.state.user
     
   }
  
  },
  created() {
    this.$store.dispatch('fetchUser')
  }
}

</script>





































