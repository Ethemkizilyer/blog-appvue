<template>
  <div class="home">

    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
       <SingleProject :project="project"/>
      </div>
    </div>
  </div>
</template>

<script>

import SingleProject from '@/components/SingleProject.vue';

export default {
  name: "Home",
  components: {SingleProject},
  data() {
    return {
      projects: [],
      current:"all"
    };
  },

 

};
</script>
