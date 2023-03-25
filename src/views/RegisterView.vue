<template>
    <div class="box">
      <form @submit.prevent="registration">
        <h2>Register</h2>
        <label for="firstname">First Name:</label>
        <input type="text" id="firstname" name="firstname" v-model="payload.firstName" required>
    
        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" v-model="payload.lastName" required>

        <label for="gender">Gender:</label>
        <input type="text" id="gender" name="gender" v-model="payload.gender" required>

        <label for="userRole">User Role:</label>
        <input type="text" id="role" name="role" v-model="payload.userRole" required>
    
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="payload.emailAdd" required>
    
        <label for="number">Contact no:</label>
        <input type="number" id="number" name="number" v-model="payload.cellPhoneNumber" required>
    
        <label for="date">JoinDate:</label>
        <input type="date" id="date" name="date" v-model="payload.joinDate" required>

        <label for="userProfile">User Profile:</label>
        <input type="profile" id="profile" name="profile" v-model="payload.userProfile" required>
    
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" v-model="payload.userPass" required>
        
        <button type="button"  class="btn btn-dark" v-on:click="submit">Register</button>
      </form>
    </div>
    
    
</template>

<script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
  setup() {
      const payload = {
          firstName: '',
          lastName: '',
          gender: '',
          cellPhoneNumber: '',
          emailAdd: '',
          userPass: '',
          userRole:'',
          userProfile: '',
          joinDate: ''
        };
      const store = useStore();
      const registration = () => {
      store.dispatch("register", payload);
      return (payload);  
      }
      const usermessage= 
      computed( () => store.state.message )
      return {
        payload,
        usermessage,
        registration,
      }
    
      
  },
  
   
    
}
</script>
<style scoped>
.box {
  width: 400px;
  height: auto;
  margin: 0 auto;
  padding: 30px;
  box-shadow: 30px 0px 10px rgb(#633075);
  border-radius: 5px;
  margin-bottom: 5%;
  margin-top:5% ;
  
}



label {
  display: block;
  margin-bottom: 10px;
  color: #633075;
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #633075;
}

button[type="submit"] {
  background-color: #633075;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  
}


</style>