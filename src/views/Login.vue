<template>
  <div class="login">
    <h3>Вход</h3>
    <v-text-field type="text" v-model="email" placeholder="Email"><br></v-text-field>
    <v-text-field type="password" v-model="password" placeholder="Пароль"><br></v-text-field>
    <v-btn @click="login">Войти</v-btn>
    <p> У вас нет аккаунта? Вы можете <router-link to="/sign-up">создать учетную запись</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import db from '../firebase'
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          () => {
            this.$router.replace('account')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
        db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        console.log(this.$store.state.mamka.toString());
    });
});
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
  .login {
    margin-top: 40px;
    text-align: center;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>