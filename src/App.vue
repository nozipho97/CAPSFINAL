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
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: sandybrown;
  text-align: center;
  scroll-snap-type: mandatory;
  scroll-behavior: smooth;
  scrollbar-color: sandybrown;
  padding-top: 100px;
  background-color: saddlebrown;
  color: saddlebrown;
  font-weight: bolder;
  font-size: larger;
  background-image:url(https://i.postimg.cc/RCWWyz93/picture-blur.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  
}

nav {
  padding: 10px;
  background-color: sandybrown;
}

nav a {
  font-weight: bold;
  color: #000;
  padding-left: 50px;
  justify-items:space;
  margin-top: 10px;
}
nav a:hover{
  color: white;
}

nav a.router-link-exact-active {
  color: saddlebrown;
}
</style>
