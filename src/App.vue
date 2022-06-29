<!-- <template>
  <v-app>
    <v-app-bar
    app
    color="#ff000"
    dark
    >
    <app-header />
    </v-app-bar>

    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/HeaderItem.vue"

export default {
  components:{
    "app-header" : Header
  },
};
</script> -->
<template>
<v-app id="inspire">
    <v-app-bar
      app
      color="#235c7a"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-5"
          color="teal darken-1"
          rounded
          size="40"
        ><span class="white--text text-h5">JC</span></v-avatar>
          <app-header />
        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="primary lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
           <router-view></router-view>
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/HeaderItem.vue"

export default {
  components:{
    "app-header" : Header
  },
};
</script>