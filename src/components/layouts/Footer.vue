<template>
  <div id="page-footer">
    <div class="container">
      <div class="hr-large"></div>
      <div class="footer-content">
        <div class="left-footer">
          <ul class="about-us">
            <li>
              <a href="#">ImmuJet.com</a>
            </li>
            <li>
              <a href="#">Track Your Order</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div class="middle-footer">
          <ul class="footer-policy">
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="right-footer">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-copyright"></i>2020, Immune Jet
              </a>
            </li>
            <li>
              <a href="#">Powered by Shopify</a>
            </li>
            <li class="clearfix">
              <div class="images clearfix">
                <img src="../../assets/images/paypal-icon.png" alt />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 736px) {
  .footer-content {
    display: grid;
    grid-template-columns: 100% !important;
    text-align: center;
  }
  .footer-content .right-footer {
    text-align: center !important;
  }
  .footer-content .right-footer ul li .images {
    width: 5%;
    height: auto;
    float: none !important;
    margin: 0 auto;
  }
}

.container {
  margin-bottom: 30px;
}
.footer-content {
  display: grid;
  grid-template-columns: 35% 35% 30%;
}
.footer-content ul {
  font-family: "Arapey", serif;
  color: #1f2021;
}
.footer-content ul li a {
  font-size: 16px;
  font-weight: 100 !important;
  font-style: normal;
  opacity: 0.7;
}
.footer-content ul li a:hover {
  opacity: 0.5;
}
.footer-content .right-footer {
  text-align: right;
}
.footer-content .right-footer ul li a {
  position: relative;
}
.footer-content .right-footer ul li .images {
  width: 5%;
  height: auto;
  float: right;
  margin-top: 10px;
}
.fa-copyright {
  position: absolute;
  top: 0;
  left: -10%;
  font-size: 10px !important;
}
</style>