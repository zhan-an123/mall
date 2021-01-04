import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        productList: [],
    },
    mutations: {
        addCart(state, playload) {
            state.productList.push(playload);
        }
    },
    getters: {
        productListLength(state) {
            return state.productList.length;
        }

    },
    actions: {

    }
})
export default store