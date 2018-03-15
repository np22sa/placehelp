<template>
    <div class="posts-page container">
      <div class="intro mb">
        <div class="input-control">
        <input type="text" v-model="search" placeholder="Procurar por palavra relacionada...">
        <button class="button--grey letrasBtn">&times;</button>
        <button class="button--grey letrasBtn" type="submit">&#x2315;</button>
      </div>
      </div>
      <PostList orientation='row' :posts="loadedPosts" />
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
components: {
  PostList
},
data() {
  return {search:''}
},
computed: {
  loadedPosts(){
    var vm=this;
    return this.$store.getters.loadedPosts.filter((cust)=>{return cust.artigoResumo.toLowerCase().indexOf(vm.search.toLowerCase())>=0;});
  }
}
};
</script>

<style scoped>
.posts-page{
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
}
.letrasBtn{
    font-size: 2em;
    padding: 0 8px;
    line-height: 0;
    height: 38px;
}
.input-control {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.input-control input,
.input-control textarea {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}
.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>