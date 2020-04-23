<template>
  <div class="container">
    <h2 class="top-deals">Top Deals</h2>
    <div class="hr-large"></div>
    <div class="products-list">
      <product />
      <product />
      <product />
      <product />
      <product />
      <product />
    </div>
  </div>
</template>

<script>
import Product from "./products/Product";
export default {
  components: {
    Product
  },
  computed: {
  },
};
</script>

<style scoped>
.top-deals {
  text-align: center;
  color: #1f2021;
  display: block;
  font-family: "Old Standard TT", serif;
  font-style: normal;
  margin: 0 0 0.5em;
  margin-bottom: 12px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
.hr-large {
  margin-top: 0px;
}
.products-list {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 3%;
}
@media only screen and (min-width: 737px) and (max-width: 1024px) {
  .container {
    max-width: 100%;
  }
  .products-list {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 5%;
  }
}

@media only screen and (max-width: 736px) {
  .container {
    max-width: 100%;
  }
  .products-list {
    display: grid;
    grid-template-columns: 90%;
    grid-column-gap: 0%;
  }
}
</style>