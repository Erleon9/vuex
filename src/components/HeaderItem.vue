<template>
  <div>
    <v-btn color="primary text">{{nombreUsuario}}</v-btn>
    <v-btn color="indigo lighten-1" dark small to="/" class="pa-md-3 mx-1">Home</v-btn>
    <v-btn color="indigo lighten-1" dark small  to="/match" class="pa-md-3 mx-1">Partidos</v-btn>
    <v-btn color="indigo lighten-1" dark small to="/table" class="pa-md-3 mx-1">Tabla de posiciones</v-btn>
    <v-btn color="indigo lighten-1" dark small to="/stats" class="pa-md-3 mx-1">Estadísticas</v-btn>
    
    
  </div>
</template>

<script>
export default {
  computed:{
    nombreUsuario(){
      return this.$store.getters.nombreInverso
    }
  },
}
</script>