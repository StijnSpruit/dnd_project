<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <MainHeader :logged-in="email" />
    <main>
    <RouterView />
  </main>
</template>

<script>
import MainHeader from './components/Header.vue'
import { auth } from './main.js' // Adjust path if needed
import { onAuthStateChanged } from 'firebase/auth'

export default {
  name: 'App',
  components: {
    MainHeader,
  },
  data() {
    return {
      uid: null,
      email: null
    }
  },
  mounted() {
    onAuthStateChanged(auth, user => {
      this.uid = user ? user.uid : null
      this.email = user ? user.email : null
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
