import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeFBTuZeg0HCzNQYXywkczDp9P5wHSPNQ",
  authDomain: "dnd-project-free.firebaseapp.com",
  projectId: "dnd-project-free",
  storageBucket: "dnd-project-free.firebasestorage.app",
  messagingSenderId: "1092249995951",
  appId: "1:1092249995951:web:e0ea449ccd15f720eb625a",
  measurementId: "G-9CMESMKH01"
};
 // Adjust the path as necessary
// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const auth = getAuth(firebase_app); // Initialize Firebase Auth
export let uid = null
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in!
    uid = user.uid; // This is the user's unique ID!
    console.log("Current user UID:", uid);
    // You can now use this 'uid' to fetch/store user-specific data.
    // For example, when creating a new character, you'd save it under:
    // `characters/${uid}/[character-name]` in your Realtime Database.

    // Store the user object globally (e.g., in a Vuex store or Pinia store)
    // so other components can access it.
  } else {
    // User is signed out.
    console.log("No user signed in.");
    // Clear any user-specific data from your app state.
  }
});
createApp(App)
.use(router)
.mount('#app')
