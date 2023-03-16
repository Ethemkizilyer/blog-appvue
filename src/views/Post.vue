<template>
 <div class="post">
  <div>
 <h3>{{ post.title }}</h3>
 <div class="content">
  <p>{{ post.content }}</p>
 </div>
</div>
 <div>
<svg   @click="
                () => {
                  showModal = true;
                  return nam(id, (s = 'update'));
                }
              "  :class="iconClass"><path :d="iconPathE" /></svg>
<svg @click="nam(id, (s = 'delete'))" :class="iconClass"><path :d="iconPathD" /></svg>
</div>
 </div>
</template>

<script>
import getPosts from '@/composables/getPosts';
import { ref,onMounted } from 'vue';
import {

    mdiDelete,
    mdiPencil,

  } from '@mdi/js'
import { collection, deleteDoc, doc, getFirestore, updateDoc } from '@firebase/firestore';
import { fb } from '@/firebase/config';
import { useRouter } from 'vue-router';


export default {
  props: ["id"],
 setup(props) {
    const iconPathD = ref(mdiDelete);
    const iconPathE = ref(mdiPencil);
    const router=useRouter()
    const iconClass = ref('my-icon-class');
  const post = ref("");
    getPosts().then((data) => {
      post.value = data.find(item=>item.id==props.id);
    });
const db = getFirestore(fb);
        const nam = (id, s) => {
    
      if (s == "update") {
          const docRef = doc(db, "posts", id);
      updateDoc(docRef, { title: "BAKARLAR" });
 router.push({ name: 'Home' })
    
      }
      if (s == "delete") {
        const docRef = doc(db, "posts", id);
        deleteDoc(docRef);
   router.push({ name: 'Home' })
      }
      console.log(asd.value[0].name);
    };


      onMounted(async () => {
      const db = getFirestore(fb);
      const fbRef = collection(db, "books")})

    return {post,iconPathD,iconPathE,iconClass,nam}
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
