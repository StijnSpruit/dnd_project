<template>
  <div class="header">
    <h1>header</h1>  
    <nav>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <h1>{{ loggedIn }}</h1>  
  </div>
  
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    loggedIn: {
      type: String,
      default: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header h1 {
  color: #42b983;
  font-size: 2em;
  margin: 0;
  display: flex;
  flex-direction: row;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header {
  text-align: center;
  background-color: #2c3e50;
  color: white;
  margin: 0px;
}
</style>
