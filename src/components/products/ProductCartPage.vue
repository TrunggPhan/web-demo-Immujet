<template>
  <div class="container">
    <h1 class="cart-title">Your cart</h1>
    <div class="hr-large"></div>
    <div class="quantity-total">
      <div>QUANTITY</div>
      <div>TOTAL</div>
    </div>
    <div class="cart-products">
      <div class="product-item">
        <div class="product-image">
          <img src="../../assets/images/product1.jpg" alt />
        </div>
        <div class="product-description">
          <a href="#">
            <h1 class="product-name">Home Salon - Polygel Nail Master Kit</h1>
            <h1 class="product-name" style="color: #d54f4c;">ENJOY YOUR SAVINGS! :)</h1>
            <p class="product-remove">Remove</p>
          </a>
        </div>
      </div>
      <div class="cart-container">
        <div class="cart-number">
          <input class="input-number" type="number" value="1" />
        </div>
        <div class="cart-price-container">
          <div class="cart-price">
            <div class="old-price">936.527,95 VND</div>
            <div class="sale-price">655.686,95 VND</div>
          </div>
        </div>
      </div>
    </div>
    <p
      class="description"
    >All orders are processed in USD. While the content of your cart is currently displayed in VND, you will checkout using USD at the most current exchange rate.</p>
    <div class="cart-subtotal">
      <div class="left-subtotal"></div>
      <div class="right-subtotal">
        <div class="price-total">
          <div class="title-total">
            <h5>SUBTOTAL</h5>
          </div>
          <div class="money-total">
            <div class="old-total">
              27.173.352,95
              <br />VND
            </div>
            <div class="new-total">
              19.023.339,95
              <br />VND
            </div>
          </div>
        </div>
        <div class="note-total">Taxes and shipping calculated at checkout</div>
        <div class="ship-checkout">
          <button class="update-cart">UPDATE CART</button>
          <button class="checkout">CHECK OUT</button>
          <div class="empty"></div>
          <button class="paypal">
            <div class="images">
              <img src="../../assets/images/paypal-icon.png" alt />
              <img src="../../assets/images/paypal-text.png" alt />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../products/Product";
export default {
  components: {
    Product
  }
};
</script>

<style scoped>

@media only screen and (max-width: 736px) {
  .container {
    width: 100%;
  }
  .container .quantity-total {
    display: none;
  }
  .container .cart-products {
    border-top: none;
    display: grid;
    grid-template-columns: auto ;
    min-height: 300px;
    margin-bottom: 20px !important;
  }
  .container .cart-products .product-item {
    margin-bottom: 30px;
  }
  .container .cart-products .cart-container {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    height: 50px;
  }
  .container .cart-products .cart-container .cart-number{
    margin-left: 15%;
  }
  .container .cart-products .cart-container .cart-number input {
    width: 70px;
  }
  .container .cart-products .cart-container .cart-price-container {
    margin-left: 0%;
  }
  .container .cart-subtotal {
    display: grid;
    grid-template-columns: auto !important;
    text-align: center !important;
  }
  .container .cart-subtotal .left-subtotal {
    display: none;
  }
  .container .cart-subtotal .right-subtotal {
    display: block;
  }
  .container .cart-subtotal .right-subtotal .price-total{
    display: grid;
    grid-template-columns: 30% 70% !important;
  }
  .container .cart-subtotal .right-subtotal .price-total .title-total {
    margin-left: 0%;
  }
  .container .cart-subtotal .right-subtotal .price-total .money-total {
    margin-right: 0%;
  }
  .container .cart-subtotal .right-subtotal .price-total .money-total br {
    display: none;
  }
  .container .cart-subtotal .right-subtotal .note-total {
    text-align: left;
    margin-left: 3%;
  }
  .container .cart-subtotal .right-subtotal .ship-checkout {
    display: inline-block !important;
  }
  .container .cart-subtotal .right-subtotal .ship-checkout .empty {
    display: none;
  }
  .container .cart-subtotal .right-subtotal .ship-checkout button {
    width: 130px;
    font-size: 10px !important;
    text-align: center;
  }
  .container .cart-subtotal .right-subtotal .ship-checkout .update-cart {
    float: left;
    margin-left: 10px;
  }
  .container .cart-subtotal .right-subtotal .ship-checkout .paypal {
    width: 280px;
    height: 50px;
  }
  .container .cart-subtotal .right-subtotal .ship-checkout .paypal .images {
    width: 70%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 100%;
  }
  .container .quantity-total {
    display: none;
  }
  .container .cart-products {
    border-top: none;
    display: grid;
    grid-template-columns: auto ;
    min-height: 300px;
    margin-bottom: 20px !important;
  }
  .container .cart-products .cart-container {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    height: 50px;
  }
  .container .cart-products .cart-container .cart-number{
    margin-left: 30%;
  }
  .container .cart-products .cart-container .cart-price-container {
    margin-left: 50%;
  }
  .container .cart-subtotal {
    display: grid;
    grid-template-columns: auto !important;
    text-align: center !important;
  }
  .container .cart-subtotal .left-subtotal {
    display: none;
  }
  .container .cart-subtotal .right-subtotal .price-total{
    display: grid;
    grid-template-columns: 30% 70% !important;
  }
  .container .cart-subtotal .right-subtotal .price-total .title-total {
    margin-left: 50%;
  }
  .container .cart-subtotal .right-subtotal .price-total .money-total {
    margin-right: 20%;
  }
  .container .cart-subtotal .right-subtotal .price-total .money-total br {
    display: none;
  }
  .container .cart-subtotal .right-subtotal .note-total {
    text-align: center !important;
  }
  .container .cart-subtotal .right-subtotal .ship-checkout .empty {
    display: none;
  }
  .container .cart-subtotal .right-subtotal .ship-checkout button {
    width: 150px;
  }
  .container .cart-subtotal .right-subtotal .ship-checkout .update-cart {
    margin-left: 40%;
  }
  .container .cart-subtotal .right-subtotal .ship-checkout .paypal {
    margin-left: 75%;
  }
}
/* -------------------------- END - Responsive ---------------------- */
.container {
  color: #1f2021;
  padding-left: 10%;
  padding-right: 10%;
}
.cart-title {
  text-align: center;
  font-size: 1.875em;
}
.hr-large {
  margin-top: 20px;
}
.quantity-total {
  display: grid;
  grid-template-columns: 70% 30%;
  text-align: right;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-bottom: 12px;
}
.cart-products {
  padding-top: 20px;
  border-top: 1px solid #1f2021;
  display: grid;
  grid-template-columns: 60% 40%;
}
.cart-products .cart-container {
  display: grid;
  grid-template-columns: 60% 40%;
}
.product-item {
  display: grid;
  grid-template-columns: 40% 60%;
}
.product-item .product-image {
  padding: 10% 10%;
}

.product-item .product-description {
  position: relative;
}

.product-item .product-description .product-name {
  font-style: italic;
  font-size: 1.1875em;
  font-family: "Montserrat", sans-serif;
  color: #1f2021;
  font-weight: bold;
  letter-spacing: 0.1em;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: uppercase;
}
.product-description a {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  text-align: left;
  padding-right: 2%;
}
.product-description a .product-remove {
  font-size: 16px;
  font-family: "Arapey", serif;
  text-decoration: none;
  font-style: normal;
  opacity: 0.8;
}
.cart-products .cart-number {
  text-align: left;
  padding-left: 2%;
  position: relative;
}
.cart-products .cart-number .input-number {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30%;
  padding: 5px 0px;
  text-align: center;
  background-color: #f6f6f6;
  border: #f6f6f6;
}
.cart-products .cart-price-container {
  position: relative;
  text-align: right;
}
.cart-products .cart-price-container .cart-price {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.cart-products .cart-price-container .cart-price .old-price {
  font-family: "Arapey", serif;
  font-size: 18px;
  text-decoration: line-through;
}
.cart-products .cart-price-container .cart-price .sale-price {
  font-size: 14px;
  font-weight: 600;
}
.description {
  color: #f6f6f6;
  background-color: #333333;
  padding: 10px 10px;
  display: block;
  text-align: left;
  font-family: "Arapey", serif;
  border-radius: 3px;
}
/* Cart ------- subTotal  ------ */
.cart-subtotal {
  margin-top: 5px;
  padding-top: 10px;
  border-top: 1px solid #1f2021;
  display: grid;
  grid-template-columns: 60% 40%;
}
.price-total {
  display: grid;
  grid-template-columns: 50% 50%;
}
.price-total .title-total {
  position: relative;
}
.price-total .title-total h5 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.price-total .money-total {
  text-align: right;
}
.price-total .money-total .old-total {
  font-size: 16px;
  font-weight: 600;
  text-decoration: line-through;
  margin-bottom: 10px;
}
.price-total .money-total .new-total {
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 10px;
}
.right-subtotal .note-total {
  font-family: "Arapey", serif;
  font-style: italic;
  opacity: 0.8;
  text-align: right;
  margin-bottom: 10px;
}
.right-subtotal .ship-checkout {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 5%;
  margin-bottom: 10px;
}
.right-subtotal .ship-checkout button {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 12px 20px;
  font-size: 0.8125em;
  color: #ffffff;
  transition: all 0.3s;
  margin-bottom: 10px;
}
.right-subtotal .ship-checkout button:hover {
  opacity: 0.8;
}
.right-subtotal .ship-checkout .update-cart {
  background-color: #a56600;
  border: #a56600;
}
.right-subtotal .ship-checkout .checkout {
  background-color: #ff8500;
  border: #ff8500;
}
.right-subtotal .ship-checkout .paypal {
  border-radius: 5px;
  text-align: right;
  background-color: #ffc439;
  border: #ffc439;
}
.right-subtotal .ship-checkout .paypal .images {
  display: grid;
  width: 90%;
  padding: 0% 15%;
  grid-template-columns: 20% 80%;
  margin: 0 auto;
}
</style>