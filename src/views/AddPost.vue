<template>
  <form>
    <label>Title</label>
    <input v-model="title" required type="text">
    <label>Content</label>
    <textarea v-model="content"></textarea>
    <button>Add Post</button>
  </form>
</template>

<script>
export default {
data(){
  return{
    title:"",
    content:""
  }
},

}
</script>

<style>
form{
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
label{
  display:block;
  color:#bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0px 10px 0;
}
input{
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea{
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button{
  display: block;
  margin: 20px auto 0px;
  background:#76dd78;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 7px;
  font-size: 16px;
}
</style>