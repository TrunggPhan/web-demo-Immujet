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
        postDataCart ({commit},data ) {
            axios.post('/cart', {
                method: 'post',
                url: 'https://homentic.com/api/carts',
                data: {
                    data : {
                        type: 'carts'
                    }
                }

              }).then(function (response) {
                    console.log(response);
        })
        }



    }
})