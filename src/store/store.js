import Vue from 'vue'
import Vuex from 'vuex'
import teams from '../assets/teams.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        valor:10,
        nombre:"Federico",
        teams
    },
    getters:{
        valorDoble:state=>{
            return state.valor * 2
        },
        nombreInverso:state=> {
            return state.nombre
        },
        getTeams:state =>{
            return state.teams
        },
        getTeamByGroup:(state) => (group) => {
            return state.teams.filter(equipo => equipo.group_id == group)
        }
     },
    mutations:{
        incrementar:state =>{
            state.valor += 3
        },
        incrementarPor:(state, payload)=>{
            state.valor += payload.numero
            state.nombre = payload.nombre
        }
    },
    actions:{
        prueba:(context, payload)=>{
            setTimeout(()=>{
                context.commit('incrementar')
                context.commit('incrementarPor', payload)
            }, 3000)
        }
    }
})