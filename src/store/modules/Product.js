const state = {
    priceTotal: 0,
    number: 0,
}

const getters = {
    getPriceTotal: state => {
        return state.priceTotal;
    }
}

const mutations = {
    changeNumber(state, newNum) {
        state.number += newNum;
    }
}

const actions = {
    changeNumber(state, newNum) {
        state.commit('changeNumber', newNum);
    }
}

export default {
    state, 
    getters, 
    mutations, 
    actions
}