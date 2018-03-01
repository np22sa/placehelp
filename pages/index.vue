<template>
  <div>
    <section class="container">
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
  /* min-height: calc(100vh - 85px); */
  display: flex;
  /* justify-content: center; */
  flex-flow: row wrap;
  /* align-items: stretch; */
  text-align: center;
  height: 100%;
}
.links {
  padding-top: 15px;
}
</style>
