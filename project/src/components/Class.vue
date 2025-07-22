<template>
  <div>
    <h1>Test Fetch Component</h1>
    <div v-if="data">
      <form>
        <select v-model="selectedClass" name="class" id="class">
          <option v-for="item in data.results" :key="item.name" :value="item.name">
            {{ item.name }}
          </option>
        </select>
      </form>
      <div class="info-screen" v-if="selectedClassData">
        <h2>Selected Class Data:</h2>
        <h3>{{ selectedClassData.name }}</h3>
        <p v-html="selectedClassTable"></p>
        <div class="row">
          <p v-html="selectedClassDescription"></p>
          <div v-if="selectedClassData.archetypes && selectedClassData.archetypes.length">
            <form>
              <label for="subclass">Subclass:</label>
              <select v-model="selectedSubClass" name="subclass" id="subclass">
                <option v-for="item in selectedClassData.archetypes" :key="item.name" :value="item.name">
                  {{ item.name }}
                </option>
              </select>
            </form>
            <div v-if="selectedSubClassData">
              <h4>{{ selectedSubClassData.name }}</h4>
              <p v-html="selectedSubClassDescription"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import { fetch5eToolsData, Endpoints } from '../5eToolsFetch.js';
import { markdown } from '../main.js'; // Import the markdown instance

export default {
  name: 'ClassComponent',
  data() {
    return {
      data: null,
      selectedClass: null,
      selectedSubClass: null
    }
  },
  computed: {
    selectedClassData() {
      if (!this.selectedClass || !this.data) return null;
      return this.data.results.find(item => item.name === this.selectedClass);
    },
    selectedClassDescription() {
      if (!this.selectedClassData) return '';
      return this.selectedClassData.desc ? markdown.render(this.selectedClassData.desc) : '';
    },
    selectedClassTable() {
      if (!this.selectedClassData) return '';
      return this.selectedClassData.table ? markdown.render(this.selectedClassData.table) : '';
    },
    selectedSubClassData() {
      if (!this.selectedClassData || !this.selectedSubClass) return null;
      return this.selectedClassData.archetypes?.find(item => item.name === this.selectedSubClass) || null;
    },
    selectedSubClassDescription() {
      if (!this.selectedSubClassData) return '';
      return this.selectedSubClassData.desc ? markdown.render(this.selectedSubClassData.desc) : '';
    }
  },
  watch: {
    selectedClass() {
      // Reset subclass when class changes
      if (this.selectedClassData && this.selectedClassData.archetypes && this.selectedClassData.archetypes.length > 0) {
        this.selectedSubClass = this.selectedClassData.archetypes[0].name;
      } else {
        this.selectedSubClass = null;
      }
    }
  },
  async mounted() {
    try {
      const result = await fetch5eToolsData(Endpoints.CLASSES);
      this.data = result;
      if (result.results.length > 0) {
        this.selectedClass = result.results[0].name; // Default to first class
      }
    } catch (error) {
      this.data = 'Error fetching data';
    }
  }
}
</script>
<style>
.info-screen {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin: 20px;
}
table > tbody tr {
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
}
p {
  margin: 10px 0;
  max-width: 100%;

}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>