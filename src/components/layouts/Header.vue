<template>
  <div>
    <div class="background-header">
      <img src="../../assets/images/background-header.jpg" class="img-fluid displayoff" v-if="true" />
      <div class="background-head-gradient displayoff" v-if="true"></div>
      <div class="header-content">
        <a href class="annoucement-bar">
          <p class="title-sale">SPRING SALES UP TO 50% OFF! (LIMITED TIME OFFER)</p>
        </a>
        <div class="container">
          <div class="bars-icon">
            <i
              class="fa fa-bars fa-2x"
              aria-hidden="true"
              @click="checkNavbarLeft = !checkNavbarLeft"
              v-if="checkNavbarLeft"
            ></i>
            <div class="navbar-left" v-if="!checkNavbarLeft">
              <div class="input-group input-search">
                <input
                  type="text"
                  class="form-control p-4"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Search our store"
                />
                <div class="input-group-append">
                  <span class="input-group-text p-3" style="background-color: #a56600">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
              <div class="menu-bar">
                <ul>
                  <router-link 
                    tag="li" 
                    to="/" 
                    class="header-bar" 
                    style="cursor: pointer;"
                  >Home
                  </router-link>
                  <li class="header-bar">Catalog</li>
                  <li class="header-bar">Track Your Order</li>
                  <li class="footer-bar">ImmuJet.com</li>
                  <li class="footer-bar">Track Your Order</li>
                  <li class="footer-bar">FAQ</li>
                  <li class="footer-bar">Return Policy</li>
                  <li class="footer-bar">Privacy Policy</li>
                  <li class="footer-bar">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="logo-image" @click="checkNavbarLeft = true">
            <img src="../../assets/images/logo.png" alt />
          </div>
          <div class="nav-bar" @click="checkNavbarLeft = true">
            <ul>
              <router-link tag="li" to="/" class style="cursor: pointer;">
                <a href="#">HOME</a>
              </router-link>
              <li>
                <a href="#">CATALOG</a>
              </li>
              <li>
                <a href="#">TRACK YOUR ORDER</a>
              </li>
            </ul>
          </div>
          <div class="icon" @click="checkNavbarLeft = true">
            <a href="#">
              <i class="fa fa-search search-icon" aria-hidden="true"></i>
            </a>
          </div>
          <div class="icon" @click="checkNavbarLeft = true">
            <i class="fa fa-shopping-cart fa-icon" aria-hidden="true">
              <i class="fa fa-circle fa-icon" aria-hidden="true"></i>
            </i>
          </div>
        </div>
        <div class="title-content" v-if="getImgHeaderFlag">
          <p class="sub-title">TREAT SHOPPING LIKE A TREASURE HUNT</p>
          <p>
            <a href="#">SHOP NOW</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      checkNavbarLeft: true,
      bgImgOn: true
    };
  },
  props: {},
  methods: {
    ...mapActions(["setImgHeaderFlag"]),
    handleDisplayBGImg() {
      this.setImgHeaderFlag(false);
      document.getElementsByClassName("header-content")[0].style.position =
        "relative";
    }
  },
  computed: {
    ...mapGetters(["getImgHeaderFlag"])
  }
};
</script>

<style scoped>
@media only screen and (min-width: 737px) and (max-width: 1024px) {
  .background-header {
    position: none;
    text-align: none;
    margin-bottom: 0px;
  }

  .background-header .header-content .container .nav-bar {
    display: none;
  }
  /* ----- START bar-icon -------- */
  .container .bars-icon {
    position: relative;
    height: 691px;
  }
  .bars-icon .fa {
    color: #ffffff;
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    font-size: 30px;
    font-weight: 500;
  }
  .bars-icon .fa-bars {
    line-height: 80px;
    float: left;
    margin-left: 20px;
    cursor: pointer;
  }
  .icon .search-icon {
    display: none;
  }
  .fa {
    font-size: 24px !important;
  }
  .fa-search {
    font-size: 16px !important;
  }
  .bars-icon .navbar-left {
    padding: 10px 10px;
    background-color: #1f2021;
    font-family: "Arapey", serif;
    height: 100%;
    border-right: 2px solid #a56600;
  }
  .bars-icon .navbar-left .input-search input {
    font-style: italic !important;
  }
  .bars-icon .navbar-left .menu-bar {
    text-align: left;
    margin-top: 15px;
  }
  .bars-icon .navbar-left .menu-bar .header-bar {
    color: #ffffff;
    font-size: 22px;
    margin-bottom: 30px;
  }
  .bars-icon .navbar-left .menu-bar .footer-bar {
    color: #bfbfbf;
    margin-bottom: 15px;
  }
  /* ------ END bar-icon -------*/
  .container {
    display: grid;
    grid-template-columns: 40% 20% 20% 20% !important;
    max-width: 100% !important;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 0px;
    margin-left: 0px;
    max-height: 80px;
  }
  .container .bars-icon {
    display: inline-block !important;
  }
  .background-header .header-content .container .logo-image {
    max-width: 80px;
    margin: 0 auto;
  }
  .icon .fa-shopping-cart {
    transform: translate(-100%, -50%);
    top: 40px;
  }
}

@media only screen and (max-width: 736px) {
  .background-header {
    position: none;
    text-align: none;
    margin-bottom: 0px;
  }

  .background-header .header-content .container .nav-bar {
    display: none;
  }
  /* ----- START bar-icon -------- */
  .container .bars-icon {
    position: relative;
    height: 691px;
  }
  .bars-icon .fa {
    color: #ffffff;
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    font-size: 30px;
    font-weight: 500;
  }
  .bars-icon .fa-bars {
    line-height: 80px;
    float: left;
    margin-left: 20px;
    cursor: pointer;
  }
  .icon .search-icon {
    display: none;
  }
  .fa {
    font-size: 24px !important;
  }
  .fa-search {
    font-size: 16px !important;
  }
  .bars-icon .navbar-left {
    padding: 10px 10px;
    background-color: #1f2021;
    font-family: "Arapey", serif;
    height: 100%;
    border-right: 2px solid #a56600;
  }
  .bars-icon .navbar-left .input-search input {
    font-style: italic !important;
  }
  .bars-icon .navbar-left .menu-bar {
    text-align: left;
    margin-top: 15px;
  }
  .bars-icon .navbar-left .menu-bar .header-bar {
    color: #ffffff;
    font-size: 22px;
    margin-bottom: 30px;
  }
  .bars-icon .navbar-left .menu-bar .footer-bar {
    color: #bfbfbf;
    margin-bottom: 15px;
  }
  /* ------ END bar-icon -------*/
  .container {
    display: grid;
    grid-template-columns: 40% 20% 20% 20% !important;
    max-width: 100% !important;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 0px;
    margin-left: 0px;
    max-height: 80px;
  }
  .container .bars-icon {
    display: inline-block !important;
  }
  .background-header .header-content .container .logo-image {
    max-width: 80px;
    margin: 0 auto;
  }
  .icon .fa-shopping-cart {
    transform: translate(-100%, -50%);
    top: 40px;
  }
}
/* ----------------------------------- Not RESPONSIVE ------------------------------------- */

.background-header {
  position: relative;
  text-align: center;
  margin-bottom: 100px;
}
.background-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 735px;
}
.background-header .background-head-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.25)
  );
}
.background-header .header-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.background-header .header-content .annoucement-bar {
  display: block;
  cursor: pointer;
  font-family: "Arapey", serif;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  padding: 10px 30px;
  background-color: #f7d3d3;
}
.background-header .header-content .annoucement-bar:hover {
  background-color: #fdb0aa;
}
.background-header .header-content .annoucement-bar .title-sale {
  color: #6a2626;
  opacity: 0.8;
}
/* ----- Logo ------ */
.background-header .header-content .container {
  max-height: 180px;
  display: grid;
  grid-template-columns: 20% 60% 3% 7% 10%;
}
.background-header .header-content .container .bars-icon {
  display: none;
}
.background-header .header-content .container .logo-image {
  width: 180px;
}
.background-header .header-content .container .logo-image img {
  width: 100%;
  height: auto;
}
/* ----------- Nav-bar ------ */
.background-header .header-content .container .nav-bar {
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 0.2s;
  font-size: 0.875em;
}
.background-header .header-content .container .nav-bar ul {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.background-header .header-content .container .nav-bar ul li {
  display: inline-block;
  margin: 15px;
}
.background-header .header-content .container .nav-bar ul li a {
  color: rgba(255, 255, 255, 1);
}
.background-header .header-content .container .nav-bar ul li a:hover {
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.5s;
}
.fa {
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  font-size: 18px;
}
.fa .fa-shopping-cart {
  position: relative;
}
.fa .fa-circle {
  position: absolute;
  font-size: 12px !important;
  left: 90%;
  top: 20%;
  color: #a56600;
}
.background-header .header-content .container .icon {
  position: relative;
}

.title-content {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 100px;
  padding: 20px;
  display: grid;
  grid-template-rows: 50% 50%;
}
.title-content .sub-title {
  font-size: 1.125em;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 0.94rem;
}
.title-content a {
  display: inline-block;
  padding: 12px 20px;
  font-size: 0.8125em;
  background-color: rgba(255, 255, 255, 1);
}
</style>