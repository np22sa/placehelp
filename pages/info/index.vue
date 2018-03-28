<template>
    <div>
        <section class="featured-posts">
            <nuxt-link to="info/cnp/">
                <article class="post-preview">
                    <div class="post-thumbnail">
                        <img src="@/assets/images/cnp.jpg" alt="">
                    </div>
                    <div class="post-content">
                        <h2>Catálogo Nacional de Profissões</h2>
                        <p>Auxiliar no preenchimento do Inquérito aos Encarregados de Educação</p>
                    </div>
                </article>
            </nuxt-link>

            <nuxt-link to="info/oferta-formativa/">
                <article class="post-preview">
                    <div class="post-thumbnail">
                        <img src="@/assets/images/of.jpg" alt="">
                    </div>
                    <div class="post-content">
                        <h2>Oferta Formativa 2018/2019</h2>
                        <pre>A matrícula é obrigatória e confere o estatuto do aluno, o qual, para além dos direitos e deveres previstos na lei, designadamente no estatuto do aluno, integra os que estão contemplados no regulamento interno da escola.</pre>
                    </div>
                </article>
            </nuxt-link>
        </section>

    </div>
    
</template>
<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

/* @media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
} */

.featured-posts {
  display: flex;
  padding: 3rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items:unset;
  justify-content: space-around;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  /* width: 90%; */
      width: 400px;
    margin: 10px;
  height: 100%;
  display: flex;
flex-direction: column;
}

a {
  text-decoration: none;
  color: black;
}

/* @media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  } */
@media (max-width: 960px) {  
    .featured-posts{
      flex-direction: column;
      align-items: center;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
  flex:1;
}

a:hover .post-content,
a:active .post-content {
  background-color: #35495e;
  color: white;
}
</style>
