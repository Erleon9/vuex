<template>
  <v-container>
    <h1 class="title">Copa mundo</h1>
    <h3 class="caption">Frutas y verduras</h3>
    <v-divider class="my-3" />
    <v-card-title class="accent white--text">Grupo A</v-card-title>
    <v-card-text>
        <v-list>
            <v-list-item v-for="equipo in grupoA" :key="equipo.id">
                {{equipo}}
            </v-list-item>
        </v-list>
    </v-card-text>
    {{equipos[0]}}
  </v-container>
</template>

<script>
export default {
  computed: {
    equipos(){
      return this.$store.getters.getTeams;
    },
    grupoA(){
        return this.$store.getters.getTeamByGroup(1);
    }
  }
}
</script>