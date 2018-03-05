<template>
   <div class="lista" :style="{ flexFlow: orientation + ' wrap' }"> <!--v-bind:style="{ flex-direction: orientation}" -->
      <post-preview id="1"
                    :is-admin="isAdmin"
                    categoria="legislacao" 
                    artigoTitulo="ahaha" 
                    artigoResumo="lorem50"
                    autorNome="Cristiana Silva" 
                    autorData="28 de Fevereiro, 2018" />
      <post-preview id="2"
                    :is-admin="isAdmin"      
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
                    :is-admin="isAdmin"      
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
    }
  }
};
</script>

<style scoped>
.lista{
  display: flex;
}

</style>