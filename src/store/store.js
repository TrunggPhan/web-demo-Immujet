import Vue from 'vue'
import Vuex from 'vuex'
import Product from './modules/Product'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
    state: {
        dataAttributes: [],
        imgHeaderFlag: true,
    },
    getters : {
        getImgHeaderFlag: state => {
            return state.imgHeaderFlag;
        },
        getDataAttributes: state => {
            console.log("call data getters", state.dataAttributes);
            return state.dataAttributes;
        }

    },
    mutations : {
        setImgHeaderFlag: (state, flag) => {
            state.imgHeaderFlag = flag;
        }
    },
    actions : {
        loadData ({commit}) {
            axios
            .get('https://homentic.com/api/products/dreamcatchers-hm0510064m?fbclid=IwAR3_cIDr3XGAhGoV_eL_7aSqWb0-7qM_Ptgku5zpjt8UedsTq_KwB0YEdp4')
            .then(response => {
                this.dataAttributes = response.data.data.attributes;
                console.log(this.dataAttributes);
            })
        },
        setImgHeaderFlag ({commit}, flag) {
            commit('setImgHeaderFlag', flag)
        }
    },
    modules: {
        Product,
    }
})