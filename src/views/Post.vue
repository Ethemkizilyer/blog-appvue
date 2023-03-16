<template>
 <div class="post">
  <div>
 <h3>{{ post.title }}</h3>
 <div class="content">
  <p>{{ post.content }}</p>
 </div>
</div>
 
<svg :class="iconClass"><path :d="iconPath" /></svg>

 </div>
</template>

<script>
import getPosts from '@/composables/getPosts';
import { ref } from 'vue';
import {

    mdiDelete,
    mdiPencil,

  } from '@mdi/js'


export default {
  props: ["id"],
 setup(props) {
    const iconPath = ref(mdiDelete);
    const iconClass = ref('my-icon-class');
  const post = ref("");
    getPosts().then((data) => {
      post.value = data.find(item=>item.id==props.id);
    });
    return {post,iconPath,iconClass}
 }

};
</script>

<style>
.post {
  margin: 20px auto;
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #ff5500;
display: flex;
align-items: center;
justify-content:space-between;
}
h3 {
  cursor: pointer;
}
.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-icons{
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
.material-icons:hover{
color: #777;
}
.my-icon-class {
width: 35px;
height: 35px;

}

</style>
