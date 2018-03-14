<template>
<div class="centrado">
    <div class="info-page">
            <h1 class="post-title">{{loadedPostProvisorio.artigoTitulo}}</h1>
            <h3>{{loadedPostProvisorio.hiperligacaoLegenda}}</h3>
            <div class="post-details">
                <div><strong>{{loadedPostProvisorio.autorNome}}</strong></div>
                <div><small>: {{loadedPostProvisorio.autorData | date}}</small></div>
            </div>
            <br>
          <ais-index :search-store="searchStore">
            <!--<ais-search-box></ais-search-box>
            <ais-results>
            <template slot-scope="{ result }">
                <h6>{{ result.Descricao }}</h6>
            </template>
            </ais-results> -->
            <ais-search-box>
                    <div class="input-control">
                        <ais-input placeholder="Procurar por profissão ou referência..." :class-names="{'ais-input': 'input'}"></ais-input>
                        <ais-clear :class-names="{'ais-clear': 'button--grey letrasBtn'}">&times;</ais-clear>
                        <button class="button--grey letrasBtn" type="submit">&#x2315;</button>
                    </div><!-- /input-group -->
            </ais-search-box>
            <small><ais-stats></ais-stats></small>
            <br>
            <div class="centrado">
                <div class="f1">
                    <small>
                    <ais-refinement-list attribute-name="Grande_Grupo" class="text-left" :class-names="{'ais-refinement-list__count': 'badge badge-secondary','ais-refinement-list__item': 'checkbox'}">
                        <h5 slot="header">Grande Grupo</h5>
                    </ais-refinement-list>
                    <br>
                    <ais-refinement-list attribute-name="Nivel" class="centrado" :class-names="{'ais-refinement-list__count': 'badge badge-secondary','ais-refinement-list__item': 'checkbox'}">
                        <h5 slot="header">Precisão</h5>
                    </ais-refinement-list>
                    <!-- <ais-tree-menu :attributes="['Grande_Grupo', 'Sub_Grande_Grupo']" class="text-left" :class-names="{'ais-tree-menu__list': 'list-group','ais-tree-menu__item--active':'active','ais-tree-menu__item':'list-group-item','ais-tree-menu__count': 'badge badge-secondary'}">
                        <h3 slot="header">Categorias</h3>
                    </ais-tree-menu> 
                    <ais-powered-by></ais-powered-by>-->
                    </small>   
                </div>  
                <div class="f2">
                    <!-- <ais-results-per-page-selector class="ml-auto" :options="[10, 25, 50]"></ais-results-per-page-selector> -->
                    <ais-results>
                    <template slot-scope="{ result }">
                        <div class="f2_template">
                        <strong><ais-highlight :result="result" attribute-name="Codigo"></ais-highlight></strong>
                        
                        <ais-highlight :result="result" attribute-name="Descricao"></ais-highlight>
                        </div>
                    </template>
                    </ais-results>
                </div>
            </div>
            <br>
            
            <ais-pagination :class-names="{'ais-pagination':'pagination','ais-pagination__item--active':'active','ais-pagination__item':'page-item','ais-pagination__link':'page-link'}"></ais-pagination>
            
        </ais-index>
    </div>
</div>
</template>

<script>
import { createFromAlgoliaCredentials, createFromSerialized } from 'vue-instantsearch'
const searchStore = createFromAlgoliaCredentials('H0KPLT3U6D', '932517888cb6033c8456aec3a7e158dc')
searchStore.indexName = 'cnp3'

export default {
  async asyncData () {
    searchStore.start()
    searchStore.refresh()
    await searchStore.waitUntilInSync()

    return { serializedSearchStore: searchStore.serialize() }
  },

  data () {
    return {
      searchStore: null,
      loadedPostProvisorio: {
          artigoTitulo: 'Catálogo Nacional de Profissões',
          hiperligacaoLegenda: 'Auxiliar no preenchimento do Inquérito aos Encarregados de Educação',
          autorNome: 'Duarte Camacho',
          autorData: new Date()
      }
    }
  },

  created () {
    this.searchStore = createFromSerialized(this.serializedSearchStore)
  }
}
</script>

<style scoped>
.post-title {
  margin: 0;
}

.post-details {
  padding-top: 10px;
  border-bottom: 3px solid green;
  display: flex;
  color:green;
}
.letrasBtn{
    font-size: 2em;
    padding: 0 8px;
    line-height: 0;
    height: 33px;
}
.info-page{
  max-width: 1550px;  
  box-sizing: border-box;
  margin: 30px;
  margin-top: 60px;
  padding: 30px;
  text-align: justify;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  width: 100%;
}
.input-control {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}

.input-control label {
  display: block;
  font-weight: bold;
  color: #3b8070;
}

.input-control input,
.input-control textarea {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
.f1{
    flex:1;
    color: grey;
    line-height: 1.8
}
.f2{
    margin-left: 40px;
    flex:2;

}
.f2_template {
     display: block; 
}
.pagination{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style-type: none;

    }
/*    .badge-secondary {
        background-color: grey;
        color: white;
    }
 a.page-link {
    color: green;
    text-decoration: none;
    outline: none;    
}     */

</style>