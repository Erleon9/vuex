<template>
  <v-container>
    <h1 class="title">Partidos</h1>
    {{ valorStore }}
    <v-btn class="accent" @click="incrementar()">Incrementar</v-btn>
    <v-btn class="accent" @click="incrementarPor(6)">Incrementar por 6</v-btn>
  </v-container>
</template>

<script>
export default {
  computed: {
    valorStore() {
      return this.$store.state.valor;
    },
  },
  methods: {
    incrementar() {
      this.$store.commit("incrementar")
    },
    incrementarPor(numero){
        const payload ={
            numero,
            nombre:"Camila"
        }
        this.$store.commit("incrementarPor", payload)
    }
  },
};
</script>