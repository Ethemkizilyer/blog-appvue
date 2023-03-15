<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";
import getPosts from "@/composables/getPosts";
import { ref } from "vue";

export default {
  name: "Home",
  components: { SinglePost },
  setup() {
    const posts = ref([]);
    getPosts().then((data) => {
      posts.value = data;
    });
    console.log(posts);
    return { posts };
  },
};
</script>
