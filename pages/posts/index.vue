<template>
    <div class="posts-page">
      <post-preview id="1"
                    categoria="legislacao" 
                    artigoTitulo="ahaha" 
                    artigoResumo="lorem50"
                    autorNome="Cristiana Silva" 
                    autorData="28 de Fevereiro, 2018" />
      <post-preview id="2"
                    categoria="legislacao" 
                    artigoTitulo="Alteração ao currículo"
                    hiperligacaoLegenda="Despacho 5908/2017" 
                    artigoResumo="a)	2º ciclo geral e especializado (quadro II, III)
                                  b)	3º ciclo geral e especializado (quadro IV, V)
                                  c)	CEF (quadro VI)
                                  "
                    autorNome="Cristiana Silva" 
                    autorData="21 de Fevereiro, 2018" />
      <post-preview id="3"
                    categoria="legislacao" 
                    artigoTitulo="Alteração ao currículo"
                    hiperligacaoLegenda="Despacho 5908/2017" 
                    artigoResumo="a)	2º ciclo geral e especializado (quadro II, III)
                                  b)	3º ciclo geral e especializado (quadro IV, V)
                                  c)	CEF (quadro VI)
                                  "
                    autorNome="Cristiana Silva" 
                    autorData="21 de Fevereiro, 2018" />
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

<style scoped>
.posts-page{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
</style>