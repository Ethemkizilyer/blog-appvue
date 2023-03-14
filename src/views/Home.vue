<template>
  <div class="home">

    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id">
       <SinglePost :post="post"/>
      </div>
    </div>
  </div>
</template>

<script>

import SinglePost from '@/components/SinglePost.vue';

export default {
  name: "Home",
  components: {SinglePost},
  data() {
    return {
      posts: [],
  
    };
  },

 

};
</script>
