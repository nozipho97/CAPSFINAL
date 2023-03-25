
  
  
  <script>
   export default {
      computed: {
       loggedUser() {
          const data = JSON.parse(localStorage.getItem('user'));
          console.log(this.$store.state.loggedUser);
          return this.$store.state.user || data
         
       }
      
      },
      mounted() {
        this.$store.dispatch('fetchUser')
    }
    }
  
  </script>
      
  <style scoped>
      .col{
        text-align: start;
        margin-top: 7px;
      }
     
      </style>
      