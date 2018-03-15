<template>
    <div class="single-post-page">
        <section class="post">
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
        loadedPost: res.data
      }
    })
    .catch(e => context.error(e))
  }}
</script>

<style scoped>
.single-post-page {


  display: flex;
  justify-content: center;

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
}

/* @media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
} */

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
</style>