<template>
  <v-container>
    <h1 class="title">Copa mundo</h1>
    <h3 class="caption">Frutas y verduras</h3>
    <v-divider class="my-3" />

    <v-row>
      <v-col cols="6">
        <v-card-title class="accent white--text">Grupo A</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="equipo in grupoA" :key="equipo.id">
              <v-avatar color="primary" size="36" class="mr-5">
                <span class="black--text text-h7">{{ equipo.code }}</span>
              </v-avatar>
              <v-list-item-content>
                {{ equipo.team }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-col>
      <v-col cols="6">
        <v-card-title class="accent white--text">Grupo B</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="equipo in grupoB" :key="equipo.id">
              <v-avatar color="primary" size="36" class="mr-5">
                <span class="black--text text-h7">{{ equipo.code }}</span>
              </v-avatar>
              <v-list-item-content>
                {{ equipo.team }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card-title class="accent white--text">Grupo C</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="equipo in grupoC" :key="equipo.id">
              <v-avatar color="primary" size="36" class="mr-5">
                <span class="black--text text-h7">{{ equipo.code }}</span>
              </v-avatar>
              <v-list-item-content>
                {{ equipo.team }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-col>
      <v-col cols="6">
        <v-card-title class="accent white--text">Grupo D</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="equipo in grupoD" :key="equipo.id">
              <v-avatar color="primary" size="36" class="mr-5">
                <span class="black--text text-h7">{{ equipo.code }}</span>
              </v-avatar>
              <v-list-item-content>
                {{ equipo.team }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    equipos() {
      return this.$store.getters.getTeams;
    },
    grupoA() {
      return this.$store.getters.getTeamByGroup(1);
    },
    grupoB() {
      return this.$store.getters.getTeamByGroup(2);
    },
    grupoC() {
      return this.$store.getters.getTeamByGroup(3);
    },
    grupoD() {
      return this.$store.getters.getTeamByGroup(4);
    },
  },
};
</script>