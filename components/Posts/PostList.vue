<template>
   <div class="lista" :style="{ flexFlow: orientation + ' wrap' }"> <!--v-bind:style="{ flex-direction: orientation}" -->
      <post-preview 
                    v-for="post in posts"
                    :key="post.id"
                    :id="post.id"
                    :is-admin="isAdmin"
                    :categoria="post.categoria" 
                    :artigoTitulo="post.artigoTitulo"
                    :hiperligacaoLegenda="post.hiperligacaoLegenda"
                    :hiperligacaoLink="post.hiperligacaoLink" 
                    :artigoResumo="post.artigoResumo"
                    :autorNome="post.autorNome"
                    :autorFoto="post.autorFoto" 
                    :autorData="post.autorData" />                    
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
components: {
  PostPreview
},
// props: ['orientation']
  props: {
    orientation: {
      type: String,
      default: 'column'
    },
    isAdmin:{
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
};

</script>

<style scoped>
.lista{
  display: flex;
  align-content: space-between;
  justify-content: space-between;
}

</style>