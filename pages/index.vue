<template>
  <div>
    <section class="container">
      <post-list orientation='row' :posts="loadedPosts" />                  
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
components: {
  PostList
},
data(){
  return{
    loadedPosts: [
        {
          id:"1",
          categoria:"legislacao", 
          artigoTitulo:"ahaha",
          hiperligacaoLegenda:"", 
          artigoResumo:"lorem50",
          autorNome:"Cristiana Silva", 
          autorData:new Date()
        },
        {
          id:"2",
          categoria:"legislacao", 
          artigoTitulo:"Alteração ao currículo",
          hiperligacaoLegenda:"Despacho 5908/2017", 
          artigoResumo:"a)	2º ciclo geral e especializado (quadro II, III) b)	3º ciclo geral e especializado (quadro IV, V)  c)	CEF (quadro VI)",
          autorNome:"Cristiana Silva", 
          autorData:new Date()
        },
        {
          id:"3",
          categoria:"legislacao", 
          artigoTitulo:"Alteração ao currículo",
          hiperligacaoLegenda:"Despacho 5908/2017", 
          artigoResumo:"a)	2º ciclo geral e especializado (quadro II, III) b)	3º ciclo geral e especializado (quadro IV, V)  c)	CEF (quadro VI)",
          autorNome:"Cristiana Silva", 
          autorData:new Date()
        }                
    ]
  }
},
created() {
  this.$store.dispatch('setPosts', this.loadedPosts)
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