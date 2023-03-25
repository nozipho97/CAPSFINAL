<template>
  <nav class="navbar navbar-expand-lg  fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://i.postimg.cc/Y9JfqQx7/logo-seek-fococlipping-standard.png"
          height="70"
          alt="Logo"
          loading="lazy"
        />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
           <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact Us</router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <!-- Icon -->
          <a class="text-reset me-3" href="/cart">
            <i class="fas fa-shopping-cart"></i>
          </a>
          <a class="text-reset me-3" href="/login">
            <i class="fa-solid fa-right-to-bracket"></i>
          </a>
          <a class="text-reset me-3" href="/userProf">
            <i class="fa-solid fa-user"></i>
          </a>
          <a class="text-reset me-3" href="/logout">
            <i class="fa-solid fa-right-from-bracket"></i>
          </a>
        </div>
      </div>
    </div>
</nav>

</template>

<style scope>

  @media screen and (max-width: 500px) {
      a{
      float: none;
      display: block;
    }
  }

</style>

<script>
export default {
 
}


</script>
