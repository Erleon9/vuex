<template>
  <v-container>
    <h1 class="title">Partidos</h1>
    <h3 class="caption">Frutas y verduras</h3>
      <h1>Grupo A</h1>
    <v-row >
        <app-partido
         v-for="(Partido, i) in partidos" 
         :key="i + 'GRUPO A'"
         :equipo1="grupoA[Partido[0]]"
         :equipo2="grupoA[Partido[1]]"
          grupo="grupoA"
         :numberGame="i"
         >
        </app-partido>
    </v-row>
      <h1>Grupo B</h1>
    <v-row >
        <app-partido
         v-for="(Partido, i) in partidos" 
         :key="i + 'GRUPO B'"
         :equipo1="grupoB[Partido[0]]"
         :equipo2="grupoB[Partido[1]]"
          grupo="grupoB"
         :numberGame="i"
         >
        </app-partido>
    </v-row>
    <h1>Grupo C</h1>
    <v-row >
        <app-partido
         v-for="(Partido, i) in partidos" 
         :key="i + 'GRUPO C'"
         :equipo1="grupoC[Partido[0]]"
         :equipo2="grupoC[Partido[1]]"
          grupo="grupoC"
         :numberGame="i"
         >
        </app-partido>
    </v-row>
    <h1>Grupo D</h1>
    <v-row >
        <app-partido
         v-for="(Partido, i) in partidos" 
         :key="i + 'GRUPO D'"
         :equipo1="grupoD[Partido[0]]"
         :equipo2="grupoD[Partido[1]]"
          grupo="grupoD"
         :numberGame="i"
         >
        </app-partido>
    </v-row>
  </v-container>
</template>

<script>
  import Partido from '../components/PartidoItem.vue';
  import { mapGetters } from "vuex";

  export default{
    data(){
      return{
        partidos:[[0,1],[2,3],[0,2],[1,3],[0,3],[1,2]]
      }
    },
    components:{
      'app-partido': Partido
    },
    computed:{
      ...mapGetters(["grupoA", "grupoB", "grupoC", "grupoD", "getMatch"])
    }
  };

</script>