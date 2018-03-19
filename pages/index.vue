<template>
  <div>
    <section class="container">
      <div class="intro mr mb landing-main">
        <div>
          <p class="paragraph">A plataforma PLACE consiste numa diversidade de serviços e recursos destinados à Comunidade Educativa da Região Autónoma da Madeira, sobretudo ao nível da disponibilização de diversas aplicações web com vista a facilitar o processo de gestão escolar.</p>
          <p class="paragraph">O objetivo da aplicação é ajudar as escolas, fornecendo informações úteis para gestão correta das informações contidas no PLACE e promover uma partilha de informação entre os intervenientes no processo educativo na RAM</p>
        </div> 
        <div class="cartoes">
          <div class="cartao">
            <div class="cartao-logo">
                &#64;
            </div>
            <div class="cartao-titulo">
                Comentários
            </div>
            <div class="cartao-texto">
              Informações, Alertas, Perguntas Frequentes e descrição de bugs que ocorrem na Plataforma
            </div>
          </div>
          <div class="cartao">
            <div class="cartao-logo2">
              &#8220;
            </div>
            <div class="cartao-titulo">
                Legislação            
            </div>
            <div class="cartao-texto">
              Análise resumida da Legislação sobre Educação, a qual norteia todas as funcionalidades desenvolvidas pela Plataforma
            </div>
          </div>
          <div class="cartao">
            <div class="cartao-logo">
                &#38;
            </div>
            <div class="cartao-titulo">
                Procedimentos            
            </div>
            <div class="cartao-texto">
              Disponibiliza uma funcionalidade interativa de alguns dos procedimentos constantes no PLACE
            </div>
          </div>
        </div>
        <div class="equipa">
          <div class="equipa-texto">
            Desde 2001 a servir o ensino na RAM :: plataforma.place@gmail.com
          </div>
          <div class="equipa-fotos">
              <img src="~assets/images/Foto-marco.jpg" alt="" class="equipa-foto">   
              <img src="~assets/images/Foto-duarte.jpg" alt="" class="equipa-foto">
              <img src="~assets/images/Foto-cristiana.jpg" alt="" class="equipa-foto"> 
              <img src="~assets/images/Foto-jp.jpg" alt="" class="equipa-foto">
              <img src="~assets/images/Foto-justino.jpg" alt="" class="equipa-foto">
              <img src="~assets/images/Foto-goncalo.jpg" alt="" class="equipa-foto">
          </div>
        </div>

      </div>
      <post-list orientation='column' :posts="filteredPosts" />
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
components: {
  PostList
},
created() {
  this.$store.dispatch('setPosts', this.loadedPosts)
},
computed: {
  loadedPosts() {
    return this.$store.getters.loadedPosts
  },
  filteredPosts(){
    return this.$store.getters.loadedPosts.sort((a,b)=>{return Date.parse(b.autorData) - Date.parse(a.autorData)}).slice(0,3);
  }
}
};
</script>

<style scoped>
.landing-main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
}

.paragraph {
  margin-bottom: 2rem;
  color: grey;
  font-style: italic
}

.cartoes{
  /* border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray; */
  margin: 2.5rem;
  margin-top: 0.5rem;
  /* padding-top: 2.5rem;
  padding-bottom: 5.5rem; */
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  text-align: center;
  color: black;
}
.cartao{
  padding: 2.5rem;
  flex:1;  
}
.cartao-logo{
  font-size: 3.5rem;
  color: green;
  /* font-family:  sans-serif; */
}
.cartao-logo2{
  font-size: 10rem;
  color: green;
  font-family:  sans-serif;
  line-height: 0;
  margin-top: 4.6rem;
}
.cartao-titulo{
  font-weight: 400;
  line-height: 0.7;
}
.cartao-texto{
  font-size: 0.8rem;
  padding-top:1rem;
}

/* .links {
  padding-top: 15px;
} */

.equipa{
  font-size: 1.3rem;
  color: grey;
  display: flex;
  align-items: center;
}
.equipa-foto {
  box-sizing: content-box;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 3px solid white;

}
.equipa-fotos{
 min-width: 300px;
}
.equipa-texto{
  margin-right: auto;
  color: #3B8070;
}
.equipa-foto:not(:last-child){
  margin-right: -1.5rem;

}
@media (max-width: 768px) {
  .container {
    display: block;
  }
  .intro{
    /*display block*/
    margin-bottom: 1rem;
    width: 420px;
  }
  .equipa{
    flex-direction: column;
  }
  .cartoes{
    flex-direction: column;
  }
}
</style>