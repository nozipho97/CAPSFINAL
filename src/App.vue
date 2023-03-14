<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>


<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar, Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  scroll-snap-type: mandatory;
  scroll-behavior: smooth;
  
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
