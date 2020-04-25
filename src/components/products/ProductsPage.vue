<template>
  <div class="container">
    <div class="slide-images">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../assets/images/product1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/product2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/product3.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/product4.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/product11.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../../assets/images/product12.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          role="button"
          href="#carouselExampleControls"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          role="button"
          href="#carouselExampleControls"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="content">
      <div class="left-content">
        <ul>
          <li>
            <img src="../../assets/images/product8.jpg" alt />
          </li>
          <li>
            <img src="../../assets/images/product2.jpg" alt />
          </li>
          <li>
            <img src="../../assets/images/product3.jpg" alt />
          </li>
          <li>
            <img src="../../assets/images/product4.jpg" alt />
          </li>
          <li>
            <img src="../../assets/images/product11.jpg" alt />
          </li>
          <li>
            <img src="../../assets/images/product12.jpg" alt />
          </li>
        </ul>
      </div>
      <div class="right-content">
        <h1 class="product-title">{{getDataAttributes.title}}</h1>
        <div class="product-evaluation">
          <div class="star-evaluation">
            <i v-for="item in 5" :key="item" class="fa fa-star" aria-hidden="true"></i>
            <span class="number-evaluation">(10 reviews)</span>
          </div>
        </div>
        <div class="product-price">
          <div>
            <span class="old-price">{{getOriginPrice}}$</span>
            <span class="new-price">{{getSalePrice}}$</span>
          </div>
        </div>
        <div class="hr-large"></div>
        <div class="product-size-title">Size</div>
        <div class="product-size">
          <div class="product-choose-size">
            <a
              class="button-size size-s"
              :class="{active: checkActive == 1 }"
              @click="chooseSizeS()"
            >
              <b>S</b>
            </a>
            <a
              class="button-size size-m"
              :class="{active: checkActive == 2}"
              @click="chooseSizeM()"
            >
              <b>M</b>
            </a>
            <a
              class="button-size size-l"
              :class="{active: checkActive == 3}"
              @click="chooseSizeL()"
            >
              <b>L</b>
            </a>
            <a
              class="button-size size-xl"
              :class="{active: checkActive == 4}"
              @click="chooseSizeXL()"
            >
              <b>XL</b>
            </a>
          </div>
        </div>
        <div class="product-name">
          <a href="#">POLYGEL NAIL MASTER KIT</a>
        </div>
        <div class="input-group mb-3">
          <div class>
            <span class="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
          </div>
          <input
            type="number"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            v-model="quantity"
          />
        </div>
        <router-link tag="button" 
                     to="/product/01/cart" 
                     class="btn addcart btn-block" 
                    >
                     ADD TO CART</router-link>
        <button type="button" class="btn buynow btn-block">BUY IT NOW</button>
        <div class="paypal">
          <img src="../../assets/images/safepay.png" alt />
        </div>
        <div class="product-discount">
          <h5 class="table-title">85% OF CUSTOMERS BUY 2 SETS OR MORE</h5>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">MINIMUM QTY</th>
                <th scope="col">DISCOUNT</th>
              </tr>
            </thead>
            <tbody v-for="item in 5" :key="item">
              <tr>
                <td>2+</td>
                <td>5% Off</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="product-related">
          <h5
            class="title-related"
            style="color: #ff8000"
          >DO YOUR OWN NAIL EASILY WITH THIS HOME SALON™ - POLYGEL NAIL MASTER KITNO MORE EXPENSIVE SALON</h5>
          <div class="image-related text-center mb-5">
            <img src="../../assets/images/gif1.gif" alt />
          </div>
          <h5
            class="title-related text-left"
          >ALL IN ONE POLYGEL NAIL KIT - BRING YOUR NAIL SALON HOME</h5>
          <div class="image-related text-center mb-5">
            <img src="../../assets/images/product2.jpg" alt />
          </div>
          <p class="content-related">
            With
            <b>Home Salon™</b> All-in-One Polygel Nail Kit, you can create various ornate and beautiful extension nails or other nail art design. It can be easily manipulated into any shape you wish and you won't be rushing against setting times or chasing runny gel around the nail. Just bring your nail salon home.
          </p>
          <div class="image-related text-center mb-3">
            <img src="../../assets/images/product7.jpg" alt />
          </div>
          <h5
            class="title-related text-left"
          >TWO-STEP EXPANSION - STOP WASTING MONEY & TIME AT THE NAIL SALON</h5>
          <p
            class="content-related"
          >PolyGel offers an all-in-one formula, created to work with perfect consistency. You only need to wet a brush in polygel slip solution to guide the product to its site and soften its surface.</p>
          <div class="image-related text-center mb-3">
            <img src="../../assets/images/product8.png" alt />
          </div>
          <p class="content-related">
            PNail salons charge a premium price for their services, with this kit you can do 10 complete manicures without making an appointment and
            <b>10 times cheaper</b>> to get exactly the same result, even if you are a
            <b>beginner.</b>
          </p>
          <h5
            class="title-related text-left"
          >HANDLE & USE EASILY - MAKE POLYGEL NAIL AT HOME STEP-BY-STEP</h5>
          <p
            class="content-related"
          >You now have everything you need to turn any space into a nail salon, and build your polygel nails as it comes with the 15ml polygel liquid, nail tips, nail brushes, UV mini nail lamp for curing, top and base coats for proper application and the slip solution for final touches. Offers an astonishingly simplified application to make your life as easy as possible.</p>
          <div class="image-related text-center mb-3">
            <img src="../../assets/images/product9.jpg" alt />
          </div>
          <p
            class="content-related"
          >Faster and easier to work with than acrylics, especially if you’re a newbie or don’t have a buffer. Shape your forms just right and a regular file- like the one provided, and you’ll be good to go.</p>
          <h5 class="title-related text-left">LONG-LASTING EFFECT & TIPS</h5>
          <div class="image-related text-center mb-3">
            <img src="../../assets/images/product10.jpg" alt />
          </div>
          <p
            class="content-related"
          >Home Salon™ nail extension gel will last up to about one month or longer with proper nail prep (filing, buffering, and cleaning ).</p>
          <p
            class="content-related"
          >For the better adhesion, you can also apply nail dehydrator and primer which can last the nail much longer. Besides, you can refill your nails about every two weeks when the new cuticle area grows.</p>
          <div class="feature">
            <h5 class="title-related text-left">FEATURES:</h5>
            <ul>
              <li>
                <b>TIME-SAVER</b> - Skip the trip to the nail salon, and build your own nails as strong, long, and thick as you want them to be. Easily create beautiful nail extensions or any other nail designs. You will also save money that you would have otherwise spent at the nail salon.
              </li>
              <li>
                <b>LONG-LASTING</b> - With proper nail prep (filing, buffering, and cleaning) these nails can last up to a month or longer. For better adhesion, you can also apply nail dehydrator and primer which can make the nails last much longer.
              </li>
              <li>
                <b>GREAT DESIGN</b> -Perfect for both nail professionals and DIY nail artists at home, wonderful gift for your wife, girlfriend, mother, sister, or simply a friend.
              </li>
              <li>
                <b>MAXIMUM COMFORT</b> - Our durable and comfortable design allows effective assistance while being comfortable to wear. Made
                <b>without</b> acrylic and hard gel!
              </li>
              <li>
                <b>GRAVITY-DEFYING PERFORMANCE</b> - Offers incredible chase-free applications & a premium putty-like viscosity technology, that provide
                <b>smooth and flawless nails that always stay in place and last forever!</b>
              </li>
            </ul>
            <h5 class="title-related text-left">PACKAGE INCLUDES:</h5>
            <ul>
              <li>POLYGEL LIQUID 15ML</li>
              <li>P100 NAIL TIPS</li>
              <li>NAIL BRUSHES AND TIPS</li>
              <li>UV LAMP</li>
              <li>TOP COAT</li>
              <li>BASE COAT</li>
              <li>SLIP SOLUTION</li>
            </ul>
          </div>
          <h5 class="title-related text-left">INSTRUCTIONS:</h5>
          <img src="../../assets/images/instruction.png" alt />
          <div class="warms-tip">
            <h5 class="title-related text-left">WARM TIPS:</h5>
            <h5 class="title-related text-left">1. Sticky?</h5>
            <p
              class="content-related"
            >After finishing the nail extension gel, you can wipe with a slip solution or nail cleanser on both sides of the nail, so that the sticky layer will be removed.</p>
            <h5 class="title-related text-left">2. How to shape poly nail gel with a slip solution?</h5>
            <p
              class="content-related"
            >The brush should not too dry or too wet, press gently, remove any excess product that popped out from the sidewalls.</p>
            <h5 class="title-related text-left">3. How to use the dual forms?</h5>
            <p
              class="content-related"
            >Apply a thicker poly nail gel in your middle nail part and a thinner layer in your nail on both sides.</p>
            <h5 class="title-related text-left">4. How to remove it??</h5>
            <p
              class="content-related"
            >You can file the nail extension gel down and buffer it. a nail drill machine will save your time and help to remove faster and cleaner.</p>
          </div>
          <h5 class="title-related text-left">WORLDWIDE DELIVERY:</h5>
          <p
            class="content-related"
          >Due to extremely high demand, please allow 7-20 days delivery. However, you may receive your items earlier.</p>
          <p
            class="content-related"
          >Do not worry, we ALWAYS send packages with Tracking Numbers so you can track it every step of the way!</p>
          <p
            class="content-related"
          >To return your product, first, contact us via email support@immujet.com then send your item to the address below the website.</p>
        </div>
      </div>
    </div>
    <div class="you-may-also-like">
      <h2 class="top-deals">You may also like</h2>
      <div class="hr-large"></div>
      <div class="products-list">
        <product />
        <product />
        <product />
        <product />
      </div>
    </div>
    <div class="write-review">
      <a href class="btn-write">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Write a review
      </a>
    </div>
    <hr />
    <div class="rate-review">
      <div class="rate-star">
        <page-average />
      </div>
      <div class="person-rate">
        <h5>CUSTOMER PHOTOS</h5>
        <div class="img-customer">
          <ul>
            <li>
              <img class="person-image" src="../../assets/images/review1.jpg" alt />
            </li>
            <li>
              <img class="person-image" src="../../assets/images/review2.jpg" alt />
            </li>
            <li>
              <img class="person-image" src="../../assets/images/review3.jpg" alt />
            </li>
            <li>
              <p class="more-person">...</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="show-review">
      <p>Showing 1 - 10 of 10 reviews</p>
      <div class="button-review">
        <a class="pl-3 pr-2 pt-1 pb-1">
          Filter review
          <span>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </span>
        </a>
        <a class="pl-3 pr-2 pt-1 pb-1">
          Sort by: Lastest
          <span>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="review-comment">
      <div class="comment-product">
        <div class="image-review">
          <img class="img-review" src="../../assets/images/review1.jpg" alt />
        </div>
        <div class="content-review">
          <div class="star-review">
            <span class="five-number">5</span>
            <i class="fa fa-star" aria-hidden="true" v-for="item in 5" :key="item"></i>
            <i class="fa fa-check-circle" aria-hidden="true" style="color: green"></i>
          </div>
          <h5 class="review-title">Very complete product!</h5>
          <p
            class="review-subcontent"
          >it came nicely packed, everything is in there. Cant wait to try it.</p>
          <p class="day-ago">8 days ago</p>
          <div class="like-number">
            <span>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 4
            </span>
            <span>
              <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> 0
            </span>
            <span>
              <i class="fa fa-commenting-o" aria-hidden="true"></i> 10
            </span>
          </div>
        </div>
      </div>
      <div class="comment-product">
        <div class="image-review">
          <img class="img-review" src="../../assets/images/review2.jpg" alt />
        </div>
        <div class="content-review">
          <div class="star-review">
            <span class="five-number">5</span>
            <i class="fa fa-star" aria-hidden="true" v-for="item in 5" :key="item"></i>
            <i class="fa fa-check-circle" aria-hidden="true" style="color: green"></i>
          </div>
          <h5 class="review-title">Very complete product!</h5>
          <p
            class="review-subcontent"
          >it came nicely packed, everything is in there. Cant wait to try it.</p>
          <p class="day-ago">8 days ago</p>
          <div class="like-number">
            <span>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 4
            </span>
            <span>
              <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> 0
            </span>
            <span>
              <i class="fa fa-commenting-o" aria-hidden="true"></i> 10
            </span>
          </div>
        </div>
      </div>
      <div class="comment-product">
        <div class="image-review">
          <img class="img-review" src="../../assets/images/review3.jpg" alt />
        </div>
        <div class="content-review">
          <div class="star-review">
            <span class="five-number">5</span>
            <i class="fa fa-star" aria-hidden="true" v-for="item in 5" :key="item"></i>
            <i class="fa fa-check-circle" aria-hidden="true" style="color: green"></i>
          </div>
          <h5 class="review-title">Very complete product!</h5>
          <p
            class="review-subcontent"
          >it came nicely packed, everything is in there. Cant wait to try it.</p>
          <p class="day-ago">8 days ago</p>
          <div class="like-number">
            <span>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 4
            </span>
            <span>
              <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> 0
            </span>
            <span>
              <i class="fa fa-commenting-o" aria-hidden="true"></i> 10
            </span>
          </div>
        </div>
      </div>
      <div class="comment-product">
        <div class="image-review">
          <img class="img-review" src="../../assets/images/review1.jpg" alt />
        </div>
        <div class="content-review">
          <div class="star-review">
            <span class="five-number">5</span>
            <i class="fa fa-star" aria-hidden="true" v-for="item in 5" :key="item"></i>
            <i class="fa fa-check-circle" aria-hidden="true" style="color: green"></i>
          </div>
          <h5 class="review-title">Very complete product!</h5>
          <p
            class="review-subcontent"
          >it came nicely packed, everything is in there. Cant wait to try it.</p>
          <p class="day-ago">8 days ago</p>
          <div class="like-number">
            <span>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 4
            </span>
            <span>
              <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> 0
            </span>
            <span>
              <i class="fa fa-commenting-o" aria-hidden="true"></i> 10
            </span>
          </div>
        </div>
      </div>
      <div class="comment-product">
        <div class="image-review">
          <img class="img-review" src="../../assets/images/review2.jpg" alt />
        </div>
        <div class="content-review">
          <div class="star-review">
            <span class="five-number">5</span>
            <i class="fa fa-star" aria-hidden="true" v-for="item in 5" :key="item"></i>
            <i class="fa fa-check-circle" aria-hidden="true" style="color: green"></i>
          </div>
          <h5 class="review-title">Very complete product!</h5>
          <p
            class="review-subcontent"
          >it came nicely packed, everything is in there. Cant wait to try it.</p>
          <p class="day-ago">8 days ago</p>
          <div class="like-number">
            <span>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 4
            </span>
            <span>
              <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> 0
            </span>
            <span>
              <i class="fa fa-commenting-o" aria-hidden="true"></i> 10
            </span>
          </div>
        </div>
      </div>
      <div class="comment-product">
        <div class="image-review">
          <img class="img-review" src="../../assets/images/review3.jpg" alt />
        </div>
        <div class="content-review">
          <div class="star-review">
            <span class="five-number">5</span>
            <i class="fa fa-star" aria-hidden="true" v-for="item in 5" :key="item"></i>
            <i class="fa fa-check-circle" aria-hidden="true" style="color: green"></i>
          </div>
          <h5 class="review-title">Very complete product!</h5>
          <p
            class="review-subcontent"
          >it came nicely packed, everything is in there. Cant wait to try it.</p>
          <p class="day-ago">8 days ago</p>
          <div class="like-number">
            <span>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> 4
            </span>
            <span>
              <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> 0
            </span>
            <span>
              <i class="fa fa-commenting-o" aria-hidden="true"></i> 10
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import PageAverage from "./Average";
import { mapGetters, mapActions, mapMutations } from "vuex";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  components: {
    Product,
    PageAverage
  },
  data() {
    return {
      quantity: 1,
      checkActive: 1,
      variantId: "",
    };
  },
  beforeRouteEnter (to, from, next) {
    next();
  },
  beforeRouteLeave (to, from , next) {
    this.addToCart();
    setTimeout(() => {
      next();
    }, 2000)
  },
  methods: {
    ...mapMutations(["setPrice", 
                     "setFirstAddCart", 
                     "setCartID", 
                     "setCartItemInfo"]),
    ...mapActions(["createDataCart"]),

    postDataCart() {
      this.variantId = this.getDataVariant[this.checkActive - 1].id
      let checkPatchDataCart = false;
      if(this.getCartItemInfo.length != 0){
        console.log("this.getCartItemInfo.length != 0 : ", this.getCartItemInfo)
        this.getCartItemInfo.forEach(element => {
          if(element.variantId == this.variantId){
            const url = 'https://homentic.com/api/cart_items/'+ element.cartItemId;
            let dataCart = {
              data: {
                type: 'cart_items',
                attributes: {
                    quantity: String(this.quantity)
                }
              }
            };
            axios.patch(url, dataCart)
            .then(function (response){
              console.log("axios.patch cart_item response = ",response)
            })
            .catch(e => {
                console.log(e);
            });
            checkPatchDataCart = true;     
            return 
          }
        });
        if(checkPatchDataCart){
          return;
        }
      }
      let dataCart = {
          data: {
              type: 'cart_items',
              attributes: {
                  cart_id: this.getCartID,
                  variant_id: this.variantId,
                  quantity: String(this.quantity)
              }
          }
      };
      let main = this;  
      axios.post('https://homentic.com/api/cart_items', dataCart)
        .then(function (response) {  
          console.log("response post cart_item = ",response)
          let cartItemInfo = {
            cartItemId: response.data.data.id,
            variantId: response.data.data.attributes.variant_id
          }
          main.setCartItemInfo(cartItemInfo)
        })
        .catch(e => {
          console.log(e);
        });
    },

    addToCart () {
      let main = this
      let checkFirst = main.getFirstAddCart;
      if(!checkFirst){
        let params = {
          data : {
              type: 'carts',
          }
        };
        axios.post('https://homentic.com/api/carts', params)
        .then(function (response) { 
          let cart_id = response.data.data.id;
          main.setCartID(cart_id);
        })
        .catch(e => {
            console.log(e);
        });
        main.setFirstAddCart(true);
        return;
      }
      else{
        this.postDataCart();
      }
    },
    chooseSizeS() {
      this.checkActive = 1;
      this.variantId = this.getDataVariant[0].id
      let originSale = {
        origin:
          Math.round(
            100 *
              this.getDataVariant[0].attributes.compare_at_price *
              this.quantity
          ) / 100,
        sale:
          Math.round(
            100 * this.getDataVariant[0].attributes.price * this.quantity
          ) / 100
      };
      this.setPrice(originSale);
    },
    chooseSizeM() {
      this.checkActive = 2;
      this.variantId = this.getDataVariant[1].id
      let originSale = {
        origin:
          Math.round(
            100 *
              this.getDataVariant[1].attributes.compare_at_price *
              this.quantity
          ) / 100,
        sale:
          Math.round(
            100 * this.getDataVariant[1].attributes.price * this.quantity
          ) / 100
      };
      this.setPrice(originSale);
    },
    chooseSizeL() {
      this.checkActive = 3;
      this.variantId = this.getDataVariant[2].id
      let originSale = {
        origin:
          Math.round(
            100 *
              this.getDataVariant[2].attributes.compare_at_price *
              this.quantity
          ) / 100,
        sale:
          Math.round(
            100 * this.getDataVariant[2].attributes.price * this.quantity
          ) / 100
      };
      this.setPrice(originSale);
    },
    chooseSizeXL() {
      this.checkActive = 4;
      this.variantId = this.getDataVariant[3].id
      let originSale = {
        origin:
          Math.round(
            100 *
              this.getDataVariant[3].attributes.compare_at_price *
              this.quantity
          ) / 100,
        sale:
          Math.round(
            100 * this.getDataVariant[3].attributes.price * this.quantity
          ) / 100
      };
      this.setPrice(originSale);
    },
  },
  computed: {
    ...mapGetters([
      "getDataAttributes",
      "getDataVariant",
      "getOriginPrice",
      "getSalePrice",
      "getFirstAddCart",
      "getCartID",
      "getCartItemInfo",
      "isShown"
    ]),
  },
  watch: {
    quantity: function(newValue) {
      if(newValue <= 0){
        this.quantity = 0;
      }
      switch(this.checkActive){
        case 1: 
         this.chooseSizeS();
         break;
        case 2: 
         this.chooseSizeM();
         break; 
        case 3: 
         this.chooseSizeL();
         break;
        case 4: 
         this.chooseSizeXL();
         break;  
        default:      
      }
    },
    getCartID: function(newValue) {
      this.postDataCart();
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 736px) {
  .container {
    width: 100%;
  }
  .container .content {
    display: grid;
    grid-template-columns: 100% !important;
  }
  .container .left-content {
    display: none !important;
  }
  .container .slide-images {
    display: block !important;
  }
  .products-list {
    display: grid;
    grid-template-columns: auto !important;
    grid-column-gap: 3%;
  }
  .container .show-review {
    display: grid;
    grid-template-columns: auto !important;
    margin-top: 50px;
  }
  .container .show-review p {
    display: none;
  }
  .review-comment {
    display: grid;
    grid-template-columns: auto !important;
    grid-column-gap: 3%;
    margin: 30px 20px;
    margin-bottom: 200px;
  }
  .review-comment .comment-product {
    border: 1px solid #6d6767;
    border-radius: 5px;
    display: block;
    margin-bottom: 20px !important;
  }
  .rate-review {
    display: grid;
    grid-template-columns: auto !important;
    grid-column-gap: 3%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    width: 100%;
  }
  .products-list {
    display: grid;
    grid-template-columns: auto auto !important;
    grid-column-gap: 3%;
  }
  .container .show-review {
    display: grid;
    grid-template-columns: 30% 70% !important;
    margin-top: 50px;
  }
  .review-comment {
    display: grid;
    grid-template-columns: auto auto !important;
    grid-column-gap: 3%;
    margin: 30px 20px;
    margin-bottom: 200px;
  }
  .review-comment .comment-product {
    border: 1px solid #6d6767;
    border-radius: 5px;
    display: block;
    margin-bottom: 20px !important;
  }
}
/* ------------------------------------ END - Responsive --------------------------------- */
.container {
  font-size: 16px;
  line-height: 1.6;
  font-family: "Arapey", serif;
  color: #1f2021;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
}
.container .content {
  display: grid;
  grid-template-columns: 55% 45%;
}
.container .left-content ul {
  margin-left: 5%;
}
.container .left-content ul li {
  display: block;
  margin-bottom: 10px;
}
.container .left-content ul li img {
  width: 100%;
  height: auto;
}
/* ----------- Right-content -------------- */
.container .right-content {
  padding-top: 70px;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
}

.container .slide-images {
  display: none;
}

.container .right-content .product-evaluation {
  margin-top: 20px;
  cursor: pointer;
}
.fa-star {
  color: rgb(253, 188, 0);
}
.container
  .right-content
  .product-evaluation
  .star-evaluation
  .number-evaluation {
  margin-left: 10px;
}

.container .right-content .product-price {
  font-size: 18px;
  padding: 0px 20px;
  font-weight: bolder;
  font-family: "Montserrat", sans-serif;
}
.container .right-content .product-price .old-price {
  text-decoration: line-through;
}
.container .right-content .product-price .new-price {
  text-decoration: none;
  color: #a56600;
}
.container .right-content .hr-large {
  margin-top: 20px;
  margin-bottom: 20px;
}
.container .right-content .product-size-title {
  margin-bottom: 10px;
}
.container .right-content .product-size {
  display: grid;
  justify-items: center;
}
.container .right-content .product-size .product-choose-size {
  width: 150px;
  display: grid;
  grid-template-columns: 22% 22% 22% 22%;
  grid-column-gap: 3%;
  margin-bottom: 20px;
}
.container .right-content .product-choose-size .button-size {
  padding: 3px 3px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  cursor: pointer;
}
.active {
  background-color: #f3f3f3 !important;
  border: 1px solid #111111 !important;
  outline: none;
}
.container .right-content .product-name {
  margin-bottom: 20px;
}
.container .right-content .product-name a {
  padding: 9px 11px;
  border: 1px solid #1f2021;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: inline-block;
  font-size: 0.8125em;
}
.container .right-content .input-group {
  padding-left: 30px;
  padding-right: 80px;
}
.container .right-content .input-group #inputGroup-sizing-sm {
  background-color: #ffffff;
  border: #ffffff;
  font-style: italic;
}
.btn {
  font-family: "Montserrat", sans-serif;
  font-size: 0.8125em;
  font-weight: bolder;
}
.addcart {
  display: block;
  background-color: #fff;
  border: 1px solid #ff8500;
  color: #ff8500;
  padding: 12px 30px;
}
.addcart:hover {
  opacity: 0.8;
}
.buynow {
  display: block;
  background-color: #ff8500;
  color: #fff;
  padding: 12px 30px;
}
.buynow:hover {
  opacity: 0.8;
}
.product-discount .table-title {
  padding: 0px 50px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
}
.table {
  text-align: left;
}
.table thead {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
}
.product-related {
  margin-bottom: 20px;
  text-align: left;
}
.product-related .title-related {
  font-size: 16px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
}
.feature ul {
  list-style-type: disc;
  padding-right: 20px;
  font-size: 16px;
}
/* ------ you may also like --- */
.you-may-also-like {
  margin-top: 150px;
}
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
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 3%;
}
/* write-review */
.container .write-review {
  display: block;
  height: 50px;
}
.container .write-review .btn-write {
  padding: 10px 12px;
  background-color: rgb(255, 177, 2);
  border-radius: 5px;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 20px;
  float: right;
  margin-bottom: 20px;
}
/* --------rate-review ------- */
.rate-review {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 3%;
}
.rate-review .person-rate .img-customer ul {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-column-gap: 3px;
}
.rate-review .person-rate .img-customer ul li {
  border: 1px solid #1f2021;
  text-align: center;
  width: 50px;
  height: 50px;
}
.rate-review .person-rate .img-customer ul li img {
  width: 100%;
  height: 50px;
  object-fit: cover;
}
.rate-review .person-rate .img-customer ul li .more-person {
  font-size: 22px;
}
/* ----- show-review ------ */
.container .show-review {
  display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 50px;
}
.container .show-review .button-review a {
  float: right;
  margin-left: 12px;
  background-color: #ffffff !important;
  border: 1px solid #6d6767;
  cursor: pointer;
}
/* ----- review-comment ------- */
.review-comment {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 3%;
  margin: 30px 20px;
  margin-bottom: 200px;
}
.review-comment .comment-product {
  border: 1px solid #6d6767;
  border-radius: 5px;
  display: block;
  margin-bottom: 20px;
}
.review-comment .comment-product .image-review {
  max-width: 100%;
  height: auto;
}
.review-comment .comment-product .image-review .img-review {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.content-review {
  padding: 10px 10px;
}
.content-review .star-review .five-number {
  padding: 0px 5px;
  border-radius: 1px;
  font-weight: 300;
  color: #ffffff;
  background-color: rgb(253, 188, 0);
}
.content-review .star-review .fa {
  margin-left: 3px;
}
.content-review .review-title {
  font-weight: 600;
  font-size: 18px;
  margin-top: 10px;
}
.content-review .review-subcontent {
  text-rendering: optimizeLegibility;
  padding-right: 15px;
  margin-bottom: 5px;
}
.content-review .day-ago {
  opacity: 0.5;
  margin-bottom: 5px;
}
.content-review .like-number span {
  margin-right: 10px;
}
</style>