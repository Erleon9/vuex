<template>
  <v-container class="mt-2">
    <h1 class="title">Tabla de posiciones</h1>
    <h3 class="caption">Frutas y verduras</h3>
    <v-expansion-panels multiple>
      <v-expansion-panel>
        <v-expansion-panel-header> Grupo A </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Equipo</th>
                  <th class="text-left">Puntos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="equipo in posicionesA" :key="equipo.id">
                  <td>{{ equipo.team }}</td>
                  <td>{{ equipo.points }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Grupo B </v-expansion-panel-header>
        <v-expansion-panel-content>
           <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Equipo</th>
                  <th class="text-left">Puntos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="equipo in posicionesB" :key="equipo.id">
                  <td>{{ equipo.team }}</td>
                  <td>{{ equipo.points }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Grupo C </v-expansion-panel-header>
        <v-expansion-panel-content>
           <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Equipo</th>
                  <th class="text-left">Puntos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="equipo in posicionesC" :key="equipo.id">
                  <td>{{ equipo.team }}</td>
                  <td>{{ equipo.points }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Grupo D </v-expansion-panel-header>
        <v-expansion-panel-content>
           <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Equipo</th>
                  <th class="text-left">Puntos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="equipo in posicionesD" :key="equipo.id">
                  <td>{{ equipo.team }}</td>
                  <td>{{ equipo.points }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["grupoA", "grupoB", "grupoC", "grupoD"]),
    posicionesA(){
        const copiaGrupo = [...this.grupoA]
        return copiaGrupo.sort((a,b)=> b.points - a.points)
    },
        posicionesB(){
        const copiaGrupo = [...this.grupoB]
        return copiaGrupo.sort((a,b)=> b.points - a.points)
    },
        posicionesC(){
        const copiaGrupo = [...this.grupoC]
        return copiaGrupo.sort((a,b)=> b.points - a.points)
    },
        posicionesD(){
        const copiaGrupo = [...this.grupoD]
        return copiaGrupo.sort((a,b)=> b.points - a.points)
    }
  },
};
</script>