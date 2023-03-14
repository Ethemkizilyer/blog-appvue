<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current"/>
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
       <SingleProject @delete="handleDelete" @complete="handleComplete" :project="project"/>
      </div>
    </div>
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue';
import SingleProject from '@/components/SingleProject.vue';

export default {
  name: "Home",
  components: {SingleProject,FilterNav},
  data() {
    return {
      projects: [],
      current:"all"
    };
  },
  mounted() {
     fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id){
      this.projects=this.projects.filter((item)=>item.id!=id)
    },
    handleComplete(id){
      let p= this.projects.find(project=>project.id === id)
      p.complete=!p.complete
    }
  },
  computed:{
    filteredProjects(){
      if(this.current == 'completed'){
        return this.projects.filter(item=>item.complete)
      }
      if(this.current == 'ongoing'){
        return this.projects.filter(item=>!item.complete)
      }
      return this.projects
    }
  }
};
</script>
