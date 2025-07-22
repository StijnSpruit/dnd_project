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
        <p v-html="selectedClassData.desc"></p>
        <pre>{{ selectedClassData }}</pre>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import { fetch5eToolsData, Endpoints } from '../5eToolsFetch.js';

export default {
  name: 'ClassComponent',
  data() {
    return {
      data: null,
      selectedClass: null
    }
  },
  computed: {
    selectedClassData() {
      if (!this.selectedClass || !this.data) return null;
      return this.data.results.find(item => item.name === this.selectedClass);
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

</style>