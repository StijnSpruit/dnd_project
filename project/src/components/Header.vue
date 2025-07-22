<template>
  <div class="header">
    <h1>header</h1>  
    <nav>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/test">Class</RouterLink>
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
  color: #0996ce;
  font-size: 2em;
  margin: 0;
  
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
  color: #0996ce;
  margin: 10px 0px 10px 0px ;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
}
.header {
  text-align: center;
  background-color: #5a257e;
  color: white;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
