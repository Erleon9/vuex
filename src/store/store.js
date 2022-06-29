/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import moduloCampeonato from './modulos/campeonato'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        valor:10,
        nombre:"Federico",
    },
    getters,
    mutations,
    actions,
    modules:{
        b:moduloCampeonato
    }
})