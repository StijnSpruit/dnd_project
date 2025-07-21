<template>
  <div class="login">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../main'; // Adjust the path as necessary

export default {
  name: 'RegisterComponent',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async registerUser() {
        try {
            const email = this.newEmail;
            const password = this.newPassword;

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("New user registered and logged in:", user.uid);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Registration error:", errorCode, errorMessage);
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