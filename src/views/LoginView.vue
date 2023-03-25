
  <template>
    <div v-if="!loggedUser">
        <!-- Login form -->
    <div class="login-form text-center" style="margin-left:25%;">
      <h1>Login</h1>
      <form  class="row g-3 container fluid" @submit.prevent="login(emailAdd,userPass)" >
        <div class="col-md-4">
          <label for="validationDefaultPassword" class="form-label">EMAIL ADDRESS</label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="email" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="name" required v-model="payload.emailAdd">
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">PASSWORD</label>
          <input type="password" class="form-control"  name="name" required v-model="payload.userPass">
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="text" required>
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="forgotPass">
          <router-link to="/forgot">Forgot Password</router-link>
          
          <br/>
          <p>Don't have an account yet? click here <router-link to="/register">Register</router-link></p>
        </div>
        <div class="row col-md-4">
          <button class="btn btn-dark center align-center" type="submit">Submit form</button>
        </div>
      </form>
     </div>
  </div>

  <div v-else >
    <h1>Hi {{ loggedUser.firstName + ' '+loggedUser.lastName }} <i class="fa-thin fa-face-smile"></i></h1>
  </div>
</template>

<script>
import logoutView from './logoutView.vue';

export default {
    data(){
      return{
        payload:{
          emailAdd:"",
          userPass:""
        },
      };
    },
   computed:{
    loggedUser(){
       return this.$store.state.loggedUser
      
    }
   },
  methods: {
    login() {
      this.$store.dispatch('login', this.payload)
      if (emailAdd === 'emailAdd' && userPass === 'userPass') {
        // store user data in localStorage
        let login = ref(true);
        const loggedUser =JSON.parse(localStorage.setItem('user'));
        router.push({name:'home', path:'/'}).then(() => location.reload())
      } else {
        // show error message
        alert(this.$router.state.message);

      }
    }
  },
  components:{logoutView}
}
</script>

<style scoped>

h1{
  text-align: center;
  margin-right: 10px;
}
p{
  text-align: center;
}




</style>
