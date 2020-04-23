<template>
  <div>
	<page-header ></page-header>
	<router-view ></router-view>
	<page-footer/>
  </div>
</template>

<script>
import PageHeader from './components/layouts/Header'
import PageFooter from './components/layouts/Footer'
import PageProducts from "./components/products/ProductsPage"
import PageCart from "./components/products/ProductCartPage"
import { mapActions, mapGetters } from 'vuex'
export default {
	data () {
		return {
      localData: {}
		}
  },
  methods: {
    getData() {
      this.localData = this.getDataAttributes
      console.log("this.localData", this.localData)
    }
  },
  computed: {
    ...mapActions ([
      "loadData",
    ]),
    ...mapGetters ([
      'getDataAttributes'
    ])
  },
	components: {
		PageHeader,
    PageFooter,
    PageProducts,
    PageCart,
  },
  mounted () {
    this.loadData;
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: "Arapey";
  src: url("/src/assets/fonts/Arapey-Regular.ttf");
}
@font-face {
  font-family: "Montserrat";
  src: url("/src/assets/fonts/Montserrat-Regular.ttf");
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  display: block;
  font-family: "Old Standard TT",serif;
  font-weight: 400;
  font-style: normal;
  margin: 0 0 0.5em;
  line-height: 1.4;
  text-rendering: optimizeLegibility;
}

p {
  margin: 0;
  padding: 0;
}
img {
  max-width: 100%;
}
a:hover, a:focus{
  text-decoration: none;
  color: black;
}
a {
	text-decoration: none;
	color: black;
}
ul {
	list-style: none;
}
.hr-large {
  margin: 60px auto;
  width: 50px;
  border-top: 1px solid #1f2021;
  box-sizing: border-box;
}
</style>
