<template>
  <v-col cols="auto">
    <v-card class="teal lighten-3 my-2" min-width="350">
      <v-card-title class="caption"> Fecha </v-card-title>
      <v-card-text class="black--text">
        <v-row justify="space-between" align="center">
          <v-col cols="4" align="center">
            <v-avatar :color="equipo1.color" class="white--text">{{equipo1.code}}</v-avatar
            ><br>{{equipo1.team}}
          </v-col>
          <v-col cols="4" align="center"> <v-btn @click="jugar()" v-if="!partidoJugado">VS</v-btn>
          <strong v-else>VS</strong>
          </v-col>
          <v-col cols="4" align="center">
            <v-avatar :color="equipo2.color" class="white--text">{{equipo2.code}}</v-avatar
            ><br>{{equipo2.team}}
          </v-col>
        </v-row>

         <v-row justify="space-between" align="center" v-if="partidoJugado">
          <v-col cols="4" align="center"> {{partidoJugado.score1}} </v-col>
          <v-col cols="4" align="center"> - </v-col>
          <v-col cols="4" align="center"> {{partidoJugado.score2}} </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default{
    props:{
        numberGame:Number,
        grupo:String,
        title:{
            type:String,
            default:'Fecha'
        },
        equipo1:{
            type:Object,
            default:()=>({
                color:'#4527A0',
                team:'Equipo 1',
                code:'EQ1',
                id:"0"
            })
        },
        equipo2:{
            type:Object,
            default:()=>({
                color:'#9E9D24',
                team:'Equipo 2',
                code:'EQ2',
                id:"1"
            })
        }
    },
    computed:{
        partidos(){
            return this.$store.getters.getMatchs(this.grupo)
        },
        partidoJugado(){
            var partidoJugado = this.partidos.find(partido => partido.numberGame == this.numberGame)
            if(partidoJugado){
                return partidoJugado
            } else {
                return false
            }
            
        }
    },
    methods:{
        jugar(){
            let scoreTeam1 = Math.floor(Math.random() * 3)
            let scoreTeam2 = Math.floor(Math.random() * 3)

            const payload1 = {
                index:this.equipo1.id-1,
                goals_for:scoreTeam1,
                goals_against:scoreTeam2,
                points:0
            }

             const payload2 = {
                index:this.equipo2.id-1,
                goals_for:scoreTeam2,
                goals_against:scoreTeam1,
                points:0
            }

            if(scoreTeam1 > scoreTeam2){
                payload1.points += 3
            }else if(scoreTeam1 < scoreTeam2){
                payload2.points += 3
            }else if(scoreTeam1 == scoreTeam2){
                payload1.points += 1
                payload2.points += 1
            } 
            
            this.$store.dispatch('finalizarPartido', payload1)
            this.$store.dispatch('finalizarPartido', payload2)


            const resultadoMatch = {
                numberGame: this.numberGame,
                grupo: this.grupo,
                score1:scoreTeam1,
                score2:scoreTeam2
            }

            this.$store.commit('addPlayedGame', resultadoMatch)


            // console.log(scoreTeam1, '  ', scoreTeam2 )
        }
    }
}

</script>