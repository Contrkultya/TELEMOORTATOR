<template>
  <v-app>
    <v-app-bar app class="green white--text">
      <img class="mr-3" :src="require('./assets/moor.png')" height="60"/>
      <v-toolbar-title class="headline text-uppercase" dark>
        <router-link style="color: white; text-decoration: none" to="/"><span >TELEPORT</span></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn text class=" white--text">Иформация</v-btn>
        <v-btn text class=" white--text">Задания</v-btn>
        <v-btn text class=" white--text"></v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
