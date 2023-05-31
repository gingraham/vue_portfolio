<template>
    <div class="gallery">
      <div class="filter-buttons">
        <button @click="filterProjects('all')">All</button>
        <button @click="filterProjects('wordpress')">WordPress</button>
        <button @click="filterProjects('htmlcss')">HTML & CSS</button>
        <button @click="filterProjects('fullstack')">FullStack</button>
        <button @click="filterProjects('contributed')">Contributed</button>
      </div>
      <div class="gallery-grid">
        <div v-for="(item, index) in filteredProjects" :key="index">
        <div class="gallery-items">
          <a :href="item.Link1" :class="item.Category" target="_blank" class="gallery-item">
            <h2>{{ item.Title }}</h2>
            <img :src="item.Image" :alt="item.Title" />
          </a>
        </div>
      </div>
      </div>
      
    </div>
  </template>
  
  <style>
  .gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-buttons button {
  margin: 0.25rem;
  background-color: #eaeaea;
  border: none;
  cursor: pointer;
}

.filter-buttons button:hover {
  background-color: #ccc;
}

.gallery-grid{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
        justify-content: center;
}

.gallery-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem;
  padding: 10px;
  width: 200px;
  border-radius: 8px;
  background-color: #f2f2f2;
  transition: background-color 0.3s ease;
}

.gallery-item:hover {
  background-color: #dcdcdc;
}

.gallery-item h2 {
  margin-top: 10px;
}

.gallery-item img {
  width: 150px;
  height: auto;
  margin-top: 10px;
}

  </style>
  
  <script>
  import { ref, computed } from 'vue';
  import jsonData from '/projects.json';
  
  export default {
    setup() {
      const projectData = ref(jsonData);
      const selectedCategory = ref('all');
  
      const filteredProjects = computed(() => {
        if (selectedCategory.value === 'all') {
          return projectData.value.ProjectsArray;
        } else {
          return projectData.value.ProjectsArray.filter(item => item.Category === selectedCategory.value);
        }
      });
  
      const filterProjects = (category) => {
        selectedCategory.value = category;
      };
  
      return {
        projectData,
        selectedCategory,
        filteredProjects,
        filterProjects
      };
    }
  };
  </script>
  