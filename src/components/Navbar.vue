<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <img src="https://i.postimg.cc/Y9JfqQx7/logo-seek-fococlipping-standard.png" alt="Logo" width="70" height="50" class="d-inline-block align-text-top">
        
    
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <div class="">
            
          </div>
          <li class="nav-item">
           <RouterLink to="/"><i class="fa fa-house"></i>HOME</RouterLink>
          </li> 
          <li class="nav-item">
           <RouterLink to="/about"><i class="fa fa-house"></i>ABOUT</RouterLink>
          </li> 
          <li class="nav-item">
           <router-link to="/products"><i class=" fa fa-basket-shopping"></i>MENU</router-link> 
          </li>
          <li  class="nav-item">
              <RouterLink to="/Admin"><i class="fa fa-user-pen"></i>ADMIN</RouterLink>
          </li>
          <li class="nav-item">
            <li class="nav-item end">
              <router-link to="/contact"><i class="fa-sharp fa-solid fa-phone"></i>CONTACT US</router-link>
            </li>
            <li class="nav-item end">
            <router-link to="/wish"><i class="fa-sharp fa-solid fa-phone"></i>WISHLIST</router-link>
          </li>
          <li class="nav-item end">
            <router-link to="/cart"><i class="fa-sharp fa-solid fa-phone"></i>CART</router-link>
          </li>
          
        <RouterLink to="/register"><i class="fa fa-pen-to-square"></i>REGISTER</RouterLink>
        </li>
        <li class="nav-item end">
          <RouterLink to="/login"><i class="fa-sharp fa-solid fa-user"></i>LOGIN</RouterLink>
        </li>
            </ul>
  
        
      </div>
    </div>
  </nav>
</template>

<style scope>
</style>

<script>
export default {
  // data() {
  //   return {
  //     userRole:false
  //   }
  // }
}


</script>
