<template>
  <div>
    <section class="container">
      <post-list orientation='row' />                  
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
components: {
  PostList
}
};
</script>

<style>
.container {
  /* min-height: calc(100vh - 85px); */
  display: flex;
  /* justify-content: center; */
  flex-flow: row wrap;
  /* align-items: stretch; */
  text-align: center;
  height: 100%;
}
/* .links {
  padding-top: 15px;
} */
</style>
