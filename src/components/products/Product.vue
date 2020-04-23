<template>
  <router-link tag="div" 
               to="/product/01" 
               class="product-item"
  >
    <div class="product-image">
      <img src="../../assets/images/product8.jpg" alt />
      <div class="save-price">
        <p>
          SAVE
          <br />
          <span>{{getDataAttributes.min_price}}$</span>
        </p>
      </div>
    </div>
    <div class="product-description"
         @click="setDataPrice()"
    >
      <a href="#">
        <span class="product-name">{{getDataAttributes.title}}</span>
        <span class="long-sash">-</span>
        <span class="product-price">{{getDataAttributes.min_price_compare_at}}$</span>
      </a>
    </div>
  </router-link>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      productData: {},
    };
  },
  props: {
    checkBGHeader: Boolean
  },
  methods: {
    ...mapMutations(["setPrice"]),
    displayOffBGHeader() {
      checkBGHeader = false;
    },
    setDataPrice(){
      let originSale = {
        origin: this.getDataAttributes.min_price,
        sale: this.getDataAttributes.min_price_compare_at
      }
      this.setPrice(originSale);
    }
  },
  computed: {
    ...mapGetters(["getDataAttributes"]),
    productTitle() {
      return this.productData.title;
    }
  },
  watch: {
    getDataAttributes: (newValue, oldValue) => {
      if(newValue){
        this.productData = newValue;
      }
    },
    productData: () => {
      this.productTitle;
    }
  }
};
</script>

<style>
.product-item {
  margin-bottom: 40px;
}
.product-item .product-image {
  position: relative;
  cursor: pointer;
}
.product-item .product-image .save-price {
  position: absolute;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: #a56600;
  border: 1px solid #a56600;
  font-weight: 600 !important;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.6875em;
  line-height: 1.3;
  position: absolute;
  min-width: 50px;
  border-radius: 25px;
  top: -8px;
  left: -8px;
}
.product-item .product-image .save-price p {
  padding: 12px 8px 10px 9px;
  margin: 0;
  letter-spacing: 1px;
}
.product-item .product-description {
  display: block;
  text-align: center;
  padding: 0px 20px;
}
.product-item .product-description .product-name {
  font-style: italic;
  font-size: 1.25em;
  font-family: "Arapey", serif;
  color: #1f2021;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
.product-item .product-description .long-dash {
  margin: 0 4px;
}
.product-item .product-description .product-price {
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1em;
  font-weight: bold;
}
</style>