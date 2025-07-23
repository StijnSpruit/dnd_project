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
                <select v-model="selectedSubClass" name="subclass" id="subclass">
                    <option v-for="item in selectedClassData.archetypes" :key="item.name" :value="item.name">
                        {{ item.name }}
                    </option>
                </select>
            </div>
            <h2>Select a species:</h2>
            <div class="form-row" v-if="species">
                <label for="species">Species: </label>
                <select v-model="selectedRace" name="species" id="species">
                    <option v-for="item in species" :key="item.name" :value="item.name">
                        {{ item.name }}
                    </option>
                </select>
            </div>
            <div class="form-row" v-if="subracesByRace != []">
                <label for="species">subpecies: </label>
                <select v-model="selectedSubRace" name="species" id="species">
                    <option v-for="item in subracesByRace" :key="item.name" :value="item.name">
                        {{ item.name }}
                    </option>
                </select>
            </div>
            <div v-else class="configure">
                Loading species...
            </div>
        </div>

        <div class="col-center">
            <div class="details">
                <!-- Row 1: Title and general info -->
                <div class="row-center">
                    <h2>Character Details</h2>
                </div>
                <div class="general-info">
                    <div class="row">
                        <p><strong>Name:</strong> {{ getCharacter.name }}</p>
                        <p><strong>Level:</strong> {{ getCharacter.level }}</p>
                        <p><strong>Background:</strong> {{ getCharacter.background }}</p>
                    </div>

                    <p><strong>Feats:</strong> {{ getCharacter.feats.join(', ') }}</p>
                    <p><strong>Skills:</strong> {{ getCharacter.skills.join(', ') }}</p>
                </div>
            </div>
            <!-- Row 2: Two columns for class and species info -->
            <div class="row-two-cols">
                <div class="col">
                    <div class="details">
                        <h3>Class Information</h3>
                        <p><strong>Class:</strong> {{ getCharacter.class }}</p>
                        <p v-if="getCharacter.subclass"><strong>Subclass:</strong> {{ getCharacter.subclass }}</p>
                        <p v-html="selectedClassTable"></p>
                    </div>
                    <!-- Add more class info here if needed -->
                </div>
                <div class="col">
                    <div class="details">
                       <h3>Species Information</h3>
                        <p><strong>Species:</strong> {{ getCharacter.species }}</p> 
                        <h4>Traits (main species) </h4>
                        <div v-if="species">
                            <div  v-for="item in selectedSpeciesTraits" :key="item.name">
                            <strong>{{ item.name }}:</strong> 
                            <p v-html="item.desc"></p>
                            </div>
                        </div>
                        <h4>Additional traits:</h4>
                        <div v-if="subracesByRace">
                            <div  v-for="item in selectedSubSpeciesTraits" :key="item.name">
                            <div v-if="item.name != 'Age'|| 'Speed' || 'Size'">
                                <strong >{{ item.name }}</strong> 
                                <p v-html="item.desc"></p>
                            </div>
                            
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    <!-- Add more species info here if needed -->
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { fetch5eToolsData, Endpoints } from '../5eToolsFetch.js';                
import { auth } from '../main.js' // Adjust path if needed
import { onAuthStateChanged } from 'firebase/auth'
import { markdown } from '../main.js'; // Import the markdown instance


export default {
  name: 'CharacterBuilderComponent',
  data() {
    return {
      classes: null,
      species: null,
      races: null,
      subraces: null,
      subracesByRace: null,
      selectedClass: null,
      selectedRace: null,
      selectedSubClass: null,
      selectedSubRace: null,
      character: {
        userId: null, // This will hold the user's email or ID
        name: '',
        class: '',
        subclass: '',
        species: '',
        subrace: '',
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
        getSpeciesData() {
         if (!this.selectedRace || !this.species) return null;
            return this.species.find(item => item.name === this.selectedRace);
        },
        selectedClassData() {
            if (!this.selectedClass || !this.classes) return null;
            return this.classes.find(item => item.name === this.selectedClass);
            
        },
        selectedSpeciesData() {
            if (!this.selectedRace || !this.species) return null;
            return this.species.find(item => item.name === this.selectedRace);
        },
        selectedSubSpeciesData() {
            if (!this.selectedSubRace || !this.subracesByRace) return null;
            return this.subraces.find(item => item.name === this.selectedSubRace);
        },
        
        selectedClassTable() {
            if (!this.selectedClassData) return '';
            return this.selectedClassData.table ? markdown.render(this.selectedClassData.table) : '';
        },
        selectedSpeciesTraits() {
            if (!this.selectedSpeciesData) return [];
            let traits = this.selectedSpeciesData.traits.map(trait => {
                return {
                    name: trait.name,
                    desc: markdown.render(trait.desc)
                };
            });
            return traits || [];
        },
        selectedSubSpeciesTraits() {
            if (!this.selectedSubSpeciesData) return [];
            let traits = this.selectedSpeciesData.traits.map(trait => {
                if (trait.name === 'Age' || 
                trait.name === 'Speed' ||
                 trait.name === 'Size' ||
                  trait.name === 'Languages' ||
                   trait.name === 'Ability Score Increase' ||
                    trait.name === 'Darkvision' ||
                     trait.name === 'Alignment') {
                    return {
                        name:'',
                        desc: '',
                    }; // Skip these traits
                }
                return {
                    name: trait.name + ':',
                    desc: markdown.render(trait.desc)
                };
            });
            return traits || [];
        }
    },
    watch: {
      selectedClass() {
        this.character.class = this.selectedClass;

      },
      selectedRace() {
        this.character.species = this.selectedRace;
        this.subracesByRace = this.subspecies();
      },
      selectedSubClass(newSubClass) {
        if (this.selectedClass) {
            this.character.subclass = newSubClass;
            } else {
            console.warn("No class selected to assign subclass.");
        }
        this.character.subclass = newSubClass;
      },
      
    },
     methods: {
    subspecies() {
            let sub_races = [];
            
            for (let sub_species of this.subraces) { 
                console.log("selected species: ", this.getSpeciesData);
                console.log("is same link: ", this.getSpeciesData.url == sub_species.subrace_of);
                console.log("is link 1 ", this.selectedRace.url);
                console.log("is link 2 ", sub_species.subrace_of);


            if (this.getSpeciesData.url === sub_species.subrace_of) {
                sub_races.push(sub_species);
                console.log("Subrace found: ", sub_species.name);
            }
            
            }
            console.log("current subraces ", sub_races);
            return sub_races || [];
        },
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
      const raceResponse = await fetch5eToolsData(Endpoints.RACES);
      const allRaces = raceResponse.results;
      this.species = allRaces.filter(r => !r.is_subrace);
      this.subraces = allRaces.filter(r => r.is_subrace);
      if (this.species.length > 0) {
        this.selectedRace = this.species[0].name;
      }
    } catch (error) {
      console.error("Error fetching races:", error);
    }
      
    },
}
</script>
<style>
.row-left {
    display: flex;
    flex-direction: row;
  float: left;
  width: 100%;
}
.form-row {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.details {
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
    margin: 20px;
    width: 80%;
}
.row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
.col-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
.general-info {
    margin-bottom: 20px;

}
.row-two-cols {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.col {
    flex: 1;
    margin: 0 10px;
}
</style>