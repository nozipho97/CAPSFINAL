<template>
  <div class="wrapper">
    <h1>Your Cart</h1>
    <div class="cart">

    <ul>
      <li v-for="(product, index) in cart" :key="index">
        <p>{{ prodName }} - {{prodPrice}}</p>
        <img src="imgURL" alt="PICTURE">
      </li>
    </ul>
    <button v-on:click="removeItem(index)" type="button" class="btn btn-dark">Remove Item</button>
  </div>
  </div>
</template>
  
  <script>
import {computed} from '@vue/runtime-core';
import { useStore } from 'vuex';
import singleProductView from './singleProductView.vue';
  export default {
    props: ['cart'],
    method: {
        remmoveItem(product) {
          this.$emit('removeItem',product)
    }
  },
   components :{singleProductView}
}
  </script>