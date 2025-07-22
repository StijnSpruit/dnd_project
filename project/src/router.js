import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from './components/Login.vue'
import Header from './components/Header.vue'
import RegisterComponent from './components/Register.vue' // Import Register component
import Class from './components/Class.vue'
import CharacterBuilderComponent from './components/CharacterBuilder.vue'
// Import other components as needed

const routes = [
  { path: '/', component: Header }, 
  { path: '/login', component: LoginComponent }, 
  { path: '/register', component: RegisterComponent},
  { path: '/test', component: Class},
  { path: '/character_builder', component: CharacterBuilderComponent}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router