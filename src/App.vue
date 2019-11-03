<template>
  <v-app>
    <v-app-bar app class="green white--text">
      <img class="mr-3" :src="require('./assets/moor.png')" height="60"/>
      <v-toolbar-title class="headline text-uppercase" dark>
        <router-link style="color: white; text-decoration: none" to="/"><span >TELEPORT</span></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field label="Поиск" class="mt-6"></v-text-field>
      <v-toolbar-items >
        <v-btn text class=" white--text" to="/info">Информация</v-btn>
        <v-btn text class=" white--text" to="/tasks">Задания</v-btn>
        <v-btn text class=" white--text" to="/account">Аккаунт</v-btn>
        <v-btn text class="white--text"  @click="logout" id="cock">Выйти</v-btn>
        <v-btn text class=" white--text" to="/account"> <img class="mr-3" :src="require('./assets/money.png')" height="40"/> 300</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      });
      document.getElementById("cock").innerText = "Войти";
    }
  }
};
</script>
