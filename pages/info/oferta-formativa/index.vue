<template>
    <div class="posts-page container">
      <div class="intro mb">
        <div class="input-control">
        <input type="text" v-model="search" placeholder="Procurar por palavra relacionada...">
        <button class="button--grey letrasBtn">&times;</button>
        <button class="button--grey letrasBtn" type="submit">&#x2315;</button>
      </div>

    </div>
    <div class="listas">
      <div class="filtros intro mr">
        <h5>TIPO DE CURSO</h5>
        <br>
        <label class="checkbox-container">Científico-Humanístico
          <input type="checkbox" checked="checked" @click="tipoCursoFiltro('Científico-Humanístico')">
          <span class="checkmark"></span>
        </label>
        <label class="checkbox-container">Profissionais
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label> 
        <label class="checkbox-container">CEF
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label>
        <div v-show="mostraCurso">
          <label class="checkbox-container">CEF Adultos
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
          </label>
          <label class="checkbox-container">Formação Modular
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
          </label>         
          <label class="checkbox-container">Curso de Aprendizagem
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
          </label>
        </div>
        <div v-show="!mostraCurso" @click="mostraCurso=!mostraCurso">
          <h1 style="line-height: 0.5">...</h1>
        </div>                           
        <br><br>
        <h5>CONCELHO</h5>
        <br>
        <label class="checkbox-container">Funchal
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label>
        <label class="checkbox-container">Câmara de Lobos
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label> 
        <label class="checkbox-container">Santa Cruz
          <input type="checkbox" checked="checked">
          <span class="checkmark"></span>
        </label>
        <div v-show="mostraConcelho"> 
              <label class="checkbox-container">Ribeira Brava
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-container">Machico
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
              </label>         
              <label class="checkbox-container">Ponta do Sol
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-container">Calheta
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-container">Porto Moniz
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
              </label>         
              <label class="checkbox-container">São Vicente
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
              </label> 
              <label class="checkbox-container">Santana
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
              </label>         
              <label class="checkbox-container">Porto Santo
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
              </label>                            
        </div> 
        <div v-show="!mostraConcelho" @click="mostraConcelho=!mostraConcelho">
          <h1 style="line-height: 0.5">...</h1>
        </div>
      </div>
      <div class="intro painel-lista">
        <div class="" v-for="(curso, index) in cursosFiltrados" :key="index">
          {{curso.nomeCurso}}
          <hr>
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
      mostraCurso: false,
      mostraConcelho: false,
      tipoCurso:[],
      cursos:[
        {
          concelho:'Câmara de Lobos',
          escola:'Escola Básica 123/PE e Creche do Curral das Freiras',
          tipoCurso:'Profissionais',
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
      ]
    };
  },
  methods: {
    tipoCursoFiltro(tipo){
      console.log(tipo);
      if (!this.tipoCurso.length){
        return true;
      } else {
        return this.tipoCurso.find(tipoCurso => tipo.tipoCurso === tipoCurso)
      }
    }
  },
  computed: {
    cursosFiltrados(){
      var vm=this;
      return this.cursos.filter((cust)=>{return cust.nomeCurso.toLowerCase().indexOf(vm.search.toLowerCase())>=0;});//.filter(tipoCursoFiltro)
    }
  }
};
</script>
<style scoped>
.listas{
  display: flex;
  justify-content: flex-start;
}
.painel-lista{
  flex: 1;
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