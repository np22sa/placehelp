<template>
    <div class="posts-page">
      <PostList orientation='column' />
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

<style scoped>
.posts-page{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
</style>