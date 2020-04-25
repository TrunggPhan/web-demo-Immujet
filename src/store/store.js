import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
    state: {
        dataAttributes: [],
        dataVariant: [],
        originPrice: 49.95,
        salePrice: 99.95,
        checkFirstAddCart: false,
        cartId: "",
        cartItemInfo: [],
        isShownCartPage: false,
        totalPrice: 0,
    },
    getters : {
        getImgHeaderFlag: state => {
            return state.imgHeaderFlag;
        },
        getDataAttributes: state => {
            return state.dataAttributes;
        },
        getDataVariant: state => {
            return state.dataVariant.filter(x => x.type == "variants")
        },
        getOriginPrice: state => {
            return state.originPrice;
        },
        getSalePrice: state => {
            return state.salePrice;
        },
        getFirstAddCart: state => {
            return state.checkFirstAddCart;
        },
        getCartID: state => {
            return state.cartId;
        },
        getCartItemInfo: state => {
            console.log("getCartItemInfo called", state.cartItemInfo)
            return state.cartItemInfo;
        },
        isShown: state => {
            console.log("isShownCartPage called", state.isShownCartPage)
            return state.isShownCartPage;
        },
        getTotalPrice: state => {
            return state.totalPrice;
        }
    },
    mutations : {
        setImgHeaderFlag: (state, flag) => {
            state.imgHeaderFlag = flag;
        },
        setDataAttribute: (state, data) => {
            state.dataAttributes = data.data.attributes;
            state.dataVariant = data.included;
        },
        setPrice: (state, originSale) => {
            state.originPrice = originSale.origin;
            state.salePrice = originSale.sale;
        },
        setFirstAddCart: (state, flag) => {
            state.checkFirstAddCart = flag;
        },
        setCartID: (state, cartID) => {     
            state.cartId = cartID;
        },
        setCartItemInfo: (state, cartItemInfosetted) => {
            state.cartItemInfo.push(cartItemInfosetted)
        },
        setShowCartPage: (state, isShown) => {
            state.isShownCartPage = isShown;
        },
        setTotalPrice: (state, total) => {
            state.totalPrice = Math.round(total*100)/100;
        }
    },
    actions : {
        loadData ({commit}) {
            axios
            .get('https://homentic.com/api/products/dreamcatchers-hm0510064m?fbclid=IwAR3_cIDr3XGAhGoV_eL_7aSqWb0-7qM_Ptgku5zpjt8UedsTq_KwB0YEdp4')
            .then(response => {
                commit("setDataAttribute", response.data);
            })

        },
        setImgHeaderFlag ({commit}, flag) {
            commit('setImgHeaderFlag', flag)
        },



    }
})