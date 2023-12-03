  <template>
      <div class="gallery">
        <div class="filter-buttons">
      <button @click="filterProjects('all')" :class="{ active: selectedCategory === 'all' }">All</button>
      <button @click="filterProjects('wordpress')" :class="{ active: selectedCategory === 'wordpress' }">WordPress</button>
      <button @click="filterProjects('htmlcss')" :class="{ active: selectedCategory === 'htmlcss' }">HTML & CSS</button>
      <button @click="filterProjects('fullstack')" :class="{ active: selectedCategory === 'fullstack' }">FullStack</button>
      <button @click="filterProjects('contributed')" :class="{ active: selectedCategory === 'contributed' }">Contributed</button>
    </div>
        <div class="gallery-grid">
          <div v-for="(item, index) in filteredProjects" :key="index">
          <div class="gallery-items">
            <a :href="item.Link1" :class="item.Category" target="_blank" class="gallery-item">
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
    --gap:2rem;
    --underline-gap: 1rem;
    list-style: none;
    margin: 0;
    background: hsl(0 0% 100% / 0.1);
    backdrop-filter:blur(1rem);
    z-index: 4;
    font-weight: 700;
  }

  .filter-buttons button {
    margin: 0.25rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: hsl(var(--clr-white) /.5);
    border-bottom: .2rem solid hsl(var(--clr-white)/0)
  }

  .filter-buttons button:hover,
  .filter-buttons button:focus {
    border-color: hsl(var(--clr-white) /.5)
  }

  .filter-buttons button.active {
    color: hsl(var(--clr-white));
    border-color: hsl(var(--clr-white) /1);
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
    margin: 1em;
  }

  .gallery-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    transition: background-color 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  @media screen and (min-width: 768px) {
  .gallery-item{
    width: 20rem;
  }
  }

  .gallery-item:hover {
    background-color: #dcdcdc;
  }

  .gallery-item h2 {
    margin-top: 10px;
  }

  .gallery-item img {
  border-radius: 0;
    margin-bottom: 10px;
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
    