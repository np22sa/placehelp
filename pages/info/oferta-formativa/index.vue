<template>
    <div class="posts-page container">
      <div class="intro mb">
        <div class="input-control">
          <input type="text" v-model="search" class="mr" placeholder="Procurar por curso ou escola...">
          <!-- <button class="button--grey letrasBtn">&times;</button>
          <button class="button--grey letrasBtn" type="submit">&#x2315;</button>&#9733; -->
          <button class="button--green" @click="mostraFavorito=!mostraFavorito">&#9733;favoritos</button>
        </div>
      </div>
      <div class="listas" v-show='mostraFavorito'>
        <div class="filtros intro mr">
          <h5>TIPO DE CURSO</h5>
          <br>
          <label class="checkbox-container">Científico-Humanístico
            <input type="checkbox" @click="categoriaFiltro($event,'tipoCurso','Científico-Humanístico')">
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">Profissionais
            <input type="checkbox" @click="categoriaFiltro($event,'tipoCurso','Profissionais')">
            <span class="checkmark"></span>
          </label> 
          <label class="checkbox-container">CEF
            <input type="checkbox" @click="categoriaFiltro($event,'tipoCurso','CEF')">
            <span class="checkmark"></span>
          </label>
          <div v-show="mostraCurso">
            <label class="checkbox-container">CEF Adultos
              <input type="checkbox" @click="categoriaFiltro($event,'tipoCurso','CEFA')">
              <span class="checkmark"></span>
            </label>
            <label class="checkbox-container">Formação Modular
              <input type="checkbox" @click="categoriaFiltro($event,'tipoCurso','Formação Modular')">
              <span class="checkmark"></span>
            </label>         
            <label class="checkbox-container">Curso de Aprendizagem
              <input type="checkbox" @click="categoriaFiltro($event,'tipoCurso','Curso de Aprendizagem')">
              <span class="checkmark"></span>
            </label>
          </div>
          <div v-show="!mostraCurso" @click="mostraCurso=!mostraCurso">
            <h1 style="line-height: 0.5; cursor: pointer;">...</h1>
          </div>                           
          <br><br>
          <h5>CONCELHO</h5>
          <br>
          <label class="checkbox-container">Funchal
            <input type="checkbox" @click="categoriaFiltro($event,'concelho','Funchal')">
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">Câmara de Lobos
            <input type="checkbox" @click="categoriaFiltro($event,'concelho','Câmara de Lobos')">
            <span class="checkmark"></span>
          </label> 
          <label class="checkbox-container">Santa Cruz
            <input type="checkbox" @click="categoriaFiltro($event,'concelho','Santa Cruz')">
            <span class="checkmark"></span>
          </label>
          <div v-show="mostraConcelho"> 
                <label class="checkbox-container">Ribeira Brava
                  <input type="checkbox" @click="categoriaFiltro($event,'concelho','Ribeira Brava')" >
                  <span class="checkmark"></span>
                </label>
                <label class="checkbox-container">Machico
                  <input type="checkbox" @click="categoriaFiltro($event,'concelho','Machico')">
                  <span class="checkmark"></span>
                </label>         
                <label class="checkbox-container">Ponta do Sol
                  <input type="checkbox" @click="categoriaFiltro($event,'concelho','Ponta do Sol')">
                  <span class="checkmark"></span>
                </label>
                <label class="checkbox-container">Calheta
                  <input type="checkbox" @click="categoriaFiltro($event,'concelho','Calheta')">
                  <span class="checkmark"></span>
                </label>
                <label class="checkbox-container">Porto Moniz
                  <input type="checkbox" @click="categoriaFiltro($event,'concelho','Porto Moniz')">
                  <span class="checkmark"></span>
                </label>         
                <label class="checkbox-container">São Vicente
                  <input type="checkbox" @click="categoriaFiltro($event,'concelho','São Vicente')">
                  <span class="checkmark"></span>
                </label> 
                <label class="checkbox-container">Santana
                  <input type="checkbox" @click="categoriaFiltro($event,'concelho','Santana')">
                  <span class="checkmark"></span>
                </label>         
                <label class="checkbox-container">Porto Santo
                  <input type="checkbox" @click="categoriaFiltro($event,'concelho','Porto Santo')">
                  <span class="checkmark"></span>
                </label>                            
          </div> 
          <div v-show="!mostraConcelho" @click="mostraConcelho=!mostraConcelho">
            <h1 style="line-height: 0.5; cursor: pointer;">...</h1>
          </div>
        </div>
        <div class="intro painel-lista">
          <div class="ficha-lista" v-for="(curso, index) in cursosFiltrados" :key="index">
            <img :src="curso.foto" alt="" class="preview__photo">
            <div>
              {{curso.nomeCurso}}
              <p>{{curso.escola}}</p>
            </div>
            <div class="ficha-lista__link">
              <!--a :href="curso.hiperligacaoLink" :title="curso.hiperligacaoLink" target="blank" >&#x26D3;</a>
              <span style="font-size: 1rem; margin-top:2px">&#x26D3;</span> &emsp;<span style="font-size: 1.2rem">&#10224;</span> &emsp; <span  style="font-size: 1.5rem; margin-top:-3px;">&#9734;</span>--> 
              <span v-if="!curso.favorito" @click="$store.dispatch('editFavoritos', curso.favorito=!curso.favorito)">&#9734;</span>
              <span v-else @click="$store.dispatch('editFavoritos', curso.favorito=!curso.favorito)">&#9733;</span>
            </div>
          </div>
        </div>
      </div>
      <div class="favoritos" v-show='!mostraFavorito'>
        <div v-if="cursosFavoritos.length==0">Não foram selecionados nenhum dos cursos como favorito</div>
        <div class="ficha-escola mr" v-for="(curso, index) in cursosFavoritos" :key="index">
          <!-- <img :src="curso.foto" alt=""> -->
          <div :style="{backgroundImage: 'url('+curso.foto+')'}" class="ficha-escola__header">
            <br>
            <div class="ficha-escola__tituloImg">
              <div class="ficha-escola__tituloImgOrdem">0{{index+1}}</div>
              <div>{{curso.escola}}</div>
            </div>
          </div>
          <div class="ficha-escola__texto">
            <p style="color: #35495e"><strong>{{curso.nomeCurso}}</strong></p>
            <p style="color: #41B883"><span  style="font-size: 1.5rem; margin-top:-3px;">&#9733;</span> &emsp;<span style="font-size: 1.2rem">&#10224;</span> &ensp; <span style="font-size: 1rem; margin-top:2px">&#x26D3;</span>&ensp;  <span style="font-size: 1.5rem; margin-top:2px">&#9786;</span> </p>
            <br>
            <hr>
            <br>
            <p>&#8711; Formação Sócio-cultural</p>
              <div class="ficha-disciplinas">
                <p>Alemão*</p>
                <p>Área de Integração</p>
                <p>Educação Física</p>
                <p>Espanhol*</p>   
                <p>Francês*</p>
                <p>Inglês*</p>
                <p>Português</p>
                <p>TIC</p>     
              </div>
            <p>&#8711; Formação Científica</p>
              <div class="ficha-disciplinas">
                <p>Física</p>
                <p>HCA</p>
                <p>Matemática</p>
              </div>            
            <p>&#8711; Formação Técnica</p>
              <div class="ficha-disciplinas">
                <p>Sistemas de Informação</p>
                <p>DCA</p>
                <p>Técnicas de Multimédia</p>
                <p>Projeto</p>   
                <p>FCT</p>
              </div>            
          </div>
        </div>
      </div>      
    </div>
</template>
<script>

export default {
  data() {
    return {
      search: "",
      mostraFavorito:true,
      mostraCurso: false,
      mostraConcelho: false,
      tipoCurso:[],
      concelho:[],
      cursos:[
        {
          concelho:'Câmara de Lobos',
          escola:'Escola Básica 123/PE e Creche do Curral das Freiras',
          tipoCurso:'Profissionais',
          url:'',
          foto:'',
          nomeCurso:'Técnico de Turismo Ambiental e Rural'
        },
        {
          concelho:'Funchal',
          escola:'Conservatório + Escola Profissional de Artes',
          tipoCurso:'Profissionais',
          nomeCurso:'Curso Profissional Instrumentista de Jazz (NOVO)'
        },
        {
          concelho:'Santa Cruz',
          escola:'Escola Básica e Secundária de Santa Cruz',
          tipoCurso:'Científico-Humanístico',
          nomeCurso:'Científico-Humanístico de Ciências e Tecnologias'
        },
        {
          concelho:'Santa Cruz',
          escola:'Escola Básica e Secundária de Santa Cruz',
          tipoCurso:'Científico-Humanístico',
          nomeCurso:'Científico-Humanístico de Ciências e Tecnologias'
        },                
      ]
    };
  },
  methods: {
    categoriaFiltro($event, categoria, tipo){
      //console.log($event.toElement.checked, tipo);
      if ($event.toElement.checked){
        this[categoria].push(tipo)
      } else {
        let index = this[categoria].indexOf(tipo);
        if (index >=-1){
          this[categoria].splice(index,1);
        }
      }
        console.log(categoria, this.tipoCurso)
    },
    tipoCursoFiltrado(tipo){
      if (!this.tipoCurso.length){
        return true;
      } else {
        return this.tipoCurso.find(tipoCurso => tipo.tipoCurso === tipoCurso)
      }
    },
    concelhoFiltrado(tipo){
      if (!this.concelho.length){
        return true;
      } else {
        return this.concelho.find(concelho => tipo.concelho === concelho)
      }
    }
  },
  computed: {
    cursosFiltrados(){
      var vm=this;
      return this.$store.getters.ofertaFormativa
                        .filter((cust)=>{return cust.nomeCurso.toLowerCase().indexOf(vm.search.toLowerCase())>=0 | cust.escola.toLowerCase().indexOf(vm.search.toLowerCase())>=0})
                        .filter(this.tipoCursoFiltrado)
                        .filter(this.concelhoFiltrado)
                        //.filter((v.nomeCurso, i, a) => a.indexOf(v) === i);
    },
    cursosFavoritos(){
      return this.$store.getters.ofertaFormativa.filter(a=> {return a.favorito})
    }
  }
};
</script>
<style scoped>
.favoritos{
  display: flex;
  flex-direction: row;
}
.ficha-disciplinas{
  color:grey;
  font-size: 0.8rem;
  padding-left:25px;
}
.ficha-escola{
    /*introduzir flex column vh e justifycontent spacebetween*/
    width: 235px;
    display:flex;
    flex-direction: column;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
    /* margin: 3.5rem 0 3.5rem 3.5rem ; 
    padding: 3rem;*/
}
.ficha-escola__header{
  width: 235px;
  height: 235px;
  display: flex;
  align-items: flex-end;
}
.ficha-escola__texto{
    font-size: 1rem;
    text-align: left;
    padding: 1rem;
}
.ficha-escola__tituloImg{
  display: flex;
  align-items: center;
  flex: 1;
  padding: 5px;
  font-size: 0.7rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: left;
}
.ficha-escola__tituloImgOrdem{
  color: #41B883;
  font-weight: 700;
  font-size: 2rem;
  line-height: 0.9;
  margin-top: -2px;
  margin-right: 6px;
}
.preview__photo {
    box-sizing: content-box;
    border-radius: 50%;
    margin-right: 1.5rem; 
    width: 50px;
    height: 50px;
    border: 3px solid green;
}
.listas{
  display: flex;
  justify-content: flex-start;
}
.painel-lista{
  flex: 1;
}
.ficha-lista{
  padding: 10px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  text-align: left;
  /* justify-content: space-between; */
}
.ficha-lista p{
  font-size: 0.9rem;
  color: lightgrey;
}
.ficha-lista__link  {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: green;
    line-height: 0;
    cursor: pointer;
    font-size: 2.2rem;
    font-weight: 300;
}
.posts-page {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
}
.filtros {
  max-width: 335px;
  /* height: 61vh; */
}

.letrasBtn {
  font-size: 2em;
  padding: 0 8px;
  line-height: 0;
  height: 38px;
}
.input-control {
  display: flex;
  justify-content: space-between;
}
.input-control input {
  display: flex;
}
/******* CheckBox **********/
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px solid #3b8070;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}
.checkbox-container:hover {
  color: #41B883;
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background-color: #3b8070;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 8px;
  top: 4px;
  width: 8px;
  height: 13px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>