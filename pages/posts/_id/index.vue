<template>
    <div class="single-post-page">
        <section class="post" :class="'categoria' + calculaCategoria">
          <div class="conteudo">
            <h1 class="post-title">{{loadedPost.artigoTitulo}}</h1>
            <h3>{{loadedPost.hiperligacaoLegenda}}</h3>
            <div class="post-details">
                <img :src="loadedPost.autorFoto" alt="" class="preview__photo">
                <div class="post-detail"><small>por</small></div>
                <div><strong>{{loadedPost.autorNome}}</strong></div>
                <div class="post-detail"><small>- {{loadedPost.autorData | date}}</small></div>
            </div>
            <br><br>
            <pre class="blockquote">{{loadedPost.artigoResumo}}</pre>
            <br><br>
            <pre class="post-content">{{loadedPost.artigoTexto}}</pre>
            <div class="post-details"></div>
            <div class="post__link">
              
                <a :href="loadedPost.hiperligacaoLink" :title="loadedPost.hiperligacaoLegenda" target="blank" v-if="!!loadedPost.hiperligacaoLink">&#x26D3;</a>
                <a v-if="!!$store.state.token" :href="'/admin/duplicate/' + loadedPost.id" title="Duplicar">&#9844;</a>
                <a v-if="!!$store.state.token" :href="'/admin/' + loadedPost.id" title="Editar">&#x270e;</a>
              
                <!--  &#x270e;&#x26D3;&#8942;&#9993;&#8801;&#9776;&#9736;&#8644;&#64;&#8285;&#35;&#38;   -->
            </div></div>            
        </section>
        <section class="post-feedback">

        </section>
    </div>
</template>

<script>
import axios from 'axios'
// categoria
// nivel
// artigoTitulo
// artigoResumo
// artigoTexto
// artigoFoto
// artigoFotoLegenda
// hiperligacaoLegenda
// hiperligacaoLink
// autorNome
// autorData
// autorFoto
export default {
  asyncData(context){
    return axios.get('https://place-63c32.firebaseio.com/posts/' + context.params.id + '.json')
    .then(res=>{
      return {
        loadedPost: { ...res.data, id:context.params.id}
      }
    })
    .catch(e => context.error(e))
  },
  computed: {
    calculaCategoria(){
        if (this.loadedPost.categoria == 'Legislação') { return '2'} else if (this.loadedPost.categoria == 'Comentários') { return '1'} else {return ''}
    }
}}
</script>

<style scoped>
.single-post-page {
  display: flex;
  justify-content: center;
}
.post__link{
  text-align: right;
}
.post__link > * {
    color: green;
    font-size: 2.2rem;
    font-weight: 300;
    text-decoration: none;
}
.post {
  max-width: 550px;  
  box-sizing: border-box;
  margin: 30px;
  margin-top: 60px;
  padding: 30px;
  text-align: justify;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  width: 100%;
  position: relative;
  overflow: hidden;
}

/* @media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
} */
.conteudo{
  position: relative;
  z-index: 999;
}
.post-title {
  color:green;
  font-size: 2rem;
  margin: 0;
}

.post-details {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid green;
  display: flex;
  align-items: center;
  color:green;
  font-size: 0.8rem;
}
.post-details img{
  border-radius: 50%;
  width: 2rem;
  margin-right: 0.5rem;
}

/* @media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
} */

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 5px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}
.blockquote {
  font-style: italic;
  color: grey;
}
.blockquote:before{
        content:"\201C";
        }
.blockquote:after{
        content:"\201C";
        }
.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
.categoria2:before{
        content:"\201C";
        position: absolute;
        top: -2.75rem;
        left: -1rem;
        line-height: 1;
        font-size: 20rem;
        color: #f0f0f0;
        font-family: sans-serif;
}
.categoria1:before{
    content:"\0040";
    position: absolute;
    top: -1.8rem;
    left: -1.4rem;
    line-height: 1;
    font-size: 8rem;
    color: #f0f0f0;
    font-family: sans-serif;
}
.categoria:before{
    content:"\0026";
    position: absolute;
    top: -2.5rem;
    left: -1rem;
    line-height: 1;
    font-size: 10.5rem;
    color: #f0f0f0;
    font-family: sans-serif;
}
</style>