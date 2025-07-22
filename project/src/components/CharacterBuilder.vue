<template>
    <div class="row-left">
        <div class="configure">
            <h1>Character Builder</h1>
            <div class="form- row">
                <input type="text" v-model="character.name" placeholder="Character Name" />
                <select v-model="character.level" name="level" id="level">
                    <option v-for="level in 20" :key="level" :value="level">
                        Level {{ level }}
                    </option>
                </select>
            </div>
            
            <h2>Select a class:</h2>
        <div class="form-row" v-if="classes">
            <label for="class">Class: </label>
        <select v-model="selectedClass" name="class" id="class">
            <option v-for="item in classes" :key="item.name" :value="item.name">
                {{ item.name }}
            </option>
        </select>
        
         
        
    </div>
    <div v-else class="configure">
        Loading classes...
    </div>
    <div class="form-row" v-if="character.level >= 3">
            <label for="subclass">Subclass: </label>
              <select  v-model="selectedSubClass" name="subclass" id="subclass">
                <option v-for="item in selectedClassData.archetypes" :key="item.name" :value="item.name">
                  {{ item.name }}
                </option>
              </select>
        </div>
        <h2>Select a species:</h2>
    <div class="form-row" v-if="species">
            <label for="species">Species: </label>
              <select  v-model="selectedRace" name="species" id="species">
                <option v-for="item in species" :key="item.key" :value="item.key">
                  {{ item.name }}
                </option>
              </select>
        </div>
        <div v-else class="configure">
        Loading species...
    </div>
    </div>
        {{ JSON.stringify(getCharacter, null, 2) }}
    </div>
    
</template>
<script>
import { fetch5eToolsData, Endpoints } from '../5eToolsFetch.js';                
import { auth } from '../main.js' // Adjust path if needed
import { onAuthStateChanged } from 'firebase/auth'

export default {
  name: 'CharacterBuilderComponent',
  data() {
    return {
      classes: null,
      species: null,
      selectedClass: null,
      selectedRace: null,
      selectedSubClass: null,
      character: {
        userId: null, // This will hold the user's email or ID
        name: '',
        class: '',
        subclass: '',
        species: '',
        background: '',
        feats: [],
        skills: [],
        level: 1,
            },
        }
    },
    computed: {
        getCharacter() {
            return this.character
        },
        selectedClassData() {
            if (!this.selectedClass || !this.classes) return null;
            return this.classes.find(item => item.name === this.selectedClass);
            
        },
        selectedSpeciesData() {
            if (!this.selectedRace || !this.species) return null;
            return this.species.find(item => item.name === this.selectedClass);
            
        }
    },  
    watch: {
      selectedClass() {
        this.character.class = this.selectedClass;

      },
      selectedRace() {
        this.character.species = this.selectedRace;

      },
      selectedSubClass(newSubClass) {
        if (this.selectedClass) {
            this.character.subclass = newSubClass;
            } else {
            console.warn("No class selected to assign subclass.");
        }
        this.character.subclass = newSubClass;
      }
    },
    async mounted() {
      onAuthStateChanged(auth, user => {
        if (user) {
          this.character.userId = user.email; // Example: use email as character name
        } else {
          this.$router.push('/login'); // Redirect to login if not authenticated
        }
      });
      try {
        const response = await fetch5eToolsData(Endpoints.CLASSES);
        const data = response;
        if (data.results.length > 0) {
        this.selectedClass = data.results[0].name; // Default to first class
      }
        this.classes = data.results;
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
      try {
        const response = await fetch5eToolsData(Endpoints.RACES);
        const data = response;
        if (data.results.length > 0) {
        this.selectedRace = data.results[0].name; // Default to first class
      }
        this.species = data.results;
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
      
    },
}
</script>
<style>
.row-left {
    display: flex;
    flex-direction: row;
  float: left;
}
.form-row {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.form-row input, .form-row select {
    margin: 10px;   
}
.configure {
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  
}
</style>