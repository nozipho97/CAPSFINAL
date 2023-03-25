<template>
  
    <div>
      <div class="field">
        <label class="label">Product Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Product Name"
            v-model="prodName"
          />
        </div>
      </div>
    
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Price"
            v-model="prodPrice"
          />
        </div>
      </div>
      <div class="control">
        <button class="button is-success" @click="updateProduct">UPDATE</button>
      </div>
    </div>
  </template>
    
  <script>
  // import axios
  import axios from "axios";
    
  export default {
    name: "EditProduct",
    data() {
      return {
        prodName: "",
        prodPrice: "",
      };
    },
    created: function () {
      this.getProduct(product.prodID);
    },
    methods: {
    
      async getProduct() {
        try {
          const response = await axios.get(
            `https://finalcap.onrender.com/${this.$route.params.prodID}`
          );
          this.prodName = response.data.prodName;
          this.prodPrice = response.data.prodPrice;
        } catch (err) {
          console.log(err);
        }
      },
    
      // Update product
      async updateProduct() {
        try {
          await axios.put(
            `https://finalcap.onrender.com/${this.$route.params.prodID}`,
            {
              prodName: this.prodName,
              prodPice: this.prodPrice,
            }
          );
          this.prodName = "";
          this.prodPrice = "";
          this.$router.push("/");
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
  </script>
    
  <style>
  </style>