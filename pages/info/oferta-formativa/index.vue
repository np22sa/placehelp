<template>
    <div class="posts-page container">
      <div class="intro mb">
        <div class="input-control">
        <input type="text" v-model="search" placeholder="Procurar por palavra relacionada...">
        <button class="button--grey letrasBtn">&times;</button>
        <button class="button--grey letrasBtn" type="submit">&#x2315;</button>
      </div>
      </div>
      
    </div>
</template>
<script>
export default {
data() {
  return {
    search:'',
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
  display: flex;
  justify-content: space-between;
}
.input-control input,
.input-control textarea {
  display: flex;
}

</style>