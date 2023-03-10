<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Navbar/>
  <router-view/>
</template>


<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#e8bf07; height: 100vh;
  
}

nav {
  padding: 50px;
  

}

nav a {
  font-weight: bold;
  color: #000;
  padding-left: 50px;
  justify-items:space;
  margin-top: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
