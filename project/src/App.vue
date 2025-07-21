<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <MainHeader msg="site name"/>
</template>

<script>
import MainHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    MainHeader
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
