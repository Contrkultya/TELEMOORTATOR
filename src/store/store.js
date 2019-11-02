import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        mamka: "mamka"
    },
    getters:{},
    mutations:{},
    actions:{},
})