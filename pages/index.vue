<template>
  <div>
    <section class="container">
      <post-preview id="1" title="ahaha" previewText="lorem50" categoria="legislacao" />
      <post-preview id="2" title="ehehe" previewText="lorem50" categoria="legislacao" />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
components: {
  PostPreview
}
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.links {
  padding-top: 15px;
}
</style>
