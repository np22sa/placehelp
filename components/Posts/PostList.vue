<template>
   <div class="lista" :style="{ flexFlow: orientation + ' wrap' }"> <!--v-bind:style="{ flex-direction: orientation}" -->
      <post-preview 
                    v-for="post in posts"
                    :key="post.id"
                    :id="post.id"
                    :is-admin="isAdmin"
                    :categoria="post.categoria" 
                    :artigoTitulo="post.artigoTitulo"
                    :artigoTexto="post.artigoTexto"
                    :hiperligacaoLegenda="post.hiperligacaoLegenda"
                    :hiperligacaoLink="post.hiperligacaoLink" 
                    :artigoResumo="post.artigoResumo"
                    :autorNome="post.autorNome"
                    :autorFoto="post.autorFoto" 
                    :autorData="post.autorData" /> 
      <div v-if="!!$store.state.token" class="new-post mb" @click="$router.push('/admin/new-post')" title="nova entrada">+</div> 
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
.new-post {
        background-color: white;
        color: lightgrey;
        font-size: 20rem;
        line-height: 0;
        padding-bottom: 68px;
        cursor: pointer;
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);

        width: 420px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* height: 100%; */
    }
</style>