<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p v-if="error">{{ error }}</p>
    </form>
    <p>Don't have an account? <RouterLink to="/register">Register</RouterLink></p>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../main'; // Adjust the path as necessary

export default {
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/'); // Redirect to home or another page after login
      } catch (err) {
        this.error = err.message;
      }
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  background: #2c3e50;
  color: white;
  border-radius: 8px;
}
input {
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
}
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}
</style>