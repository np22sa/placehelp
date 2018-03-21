<template>
    <form @submit.prevent="onSave" class="post">
        <div class="post-images mb">
            <img :src="Marco.foto" @click="mudaAutor(Marco)" :title="Marco.nome" :class="{imgActive : editedPost.autorNome==Marco.nome}" class="img">
            <img :src="Camacho.foto" @click="mudaAutor(Camacho)" :title="Camacho.nome" :class="{imgActive : editedPost.autorNome==Camacho.nome}" class="img">
            <img :src="Cristiana.foto" @click="mudaAutor(Cristiana)" :title="Cristiana.nome" :class="{imgActive : editedPost.autorNome==Cristiana.nome}" class="img">
            <img :src="JP.foto" @click="mudaAutor(JP)" :title="JP.nome" :class="{imgActive : editedPost.autorNome==JP.nome}" class="img">
            <img :src="Justino.foto" @click="mudaAutor(Justino)" :title="Justino.nome" :class="{imgActive : editedPost.autorNome==Justino.nome}" class="img">                                             
            <img :src="Goncalo.foto" @click="mudaAutor(Goncalo)" :title="Goncalo.nome" :class="{imgActive : editedPost.autorNome==Goncalo.nome}" class="img">
        </div>
        <div class="input-control">
            <label for="select">Categoria</label>
            <select name="select" v-model="editedPost.categoria">
                <option>Legislação</option>
                <option>Comentários</option>
                <option>Procedimentos</option>
            </select>
        </div>
        <!-- <app-control-input v-model="editedPost.categoria">Categoria</app-control-input> -->
        <app-control-input v-model="editedPost.nivel">Nível</app-control-input>
        <!-- <app-control-input disabled v-model="editedPost.autorData">Data de publicação</app-control-input> -->
        <app-control-input v-model="editedPost.artigoTitulo">Título</app-control-input>
        <!-- <app-control-input v-model="editedPost.autorNome">Nome</app-control-input>
        <app-control-input v-model="editedPost.autorFoto">Foto do Autor</app-control-input> -->
        <app-control-input v-model="editedPost.hiperligacaoLegenda">Sub-titulo</app-control-input>
        <app-control-input v-model="editedPost.hiperligacaoLink">Link</app-control-input>
        <app-control-input v-model="editedPost.artigoFotoLegenda">Foto</app-control-input> 
        <app-control-input v-model="editedPost.artigoFoto">Legenda da Foto</app-control-input> 
        <app-control-input control-type="textarea" v-model="editedPost.artigoResumo">Resumo</app-control-input>               
        <app-control-input control-type="textarea" v-model="editedPost.artigoTexto">Texto</app-control-input>               
        <div class="alinhaBotoes">
        <app-button type="button" btn-style="normal" @click="onCancel">Cancelar</app-button>
        <app-button type="submit" btn-style="inverted">Gravar</app-button></div>
    </form>
</template>

<script>
    import AppButton from '@/components/UI/AppButton'
    import AppControlInput from '@/components/UI/AppControlInput'
    export default {
        components:{
            AppButton,
            AppControlInput
        },       
        props: {
            post:{
                type: Object,
                required: false
            }
        },
        data () {
            return {
                teste: true,
                Goncalo: {
                    foto:'/_nuxt/img/Foto-goncalo.6c9d481.jpg',
                    nome: 'Gonçalo Freitas'
                    },
                Marco: {
                    foto:'/_nuxt/img/Foto-marco.7c49f81.jpg',
                    nome: 'Marco Olim'
                },
                Cristiana: {
                    foto:'/_nuxt/img/Foto-cristiana.4f24c3a.jpg',
                    nome: 'Cristiana Gonçalves'
                },
                JP: {
                    foto:'/_nuxt/img/Foto-jp.75d1f49.jpg',
                    nome: 'João Pereira'
                },
                Camacho: {
                    foto:'/_nuxt/img/Foto-duarte.faded93.jpg',
                    nome: 'Duarte Camacho'
                },
                Justino: {
                    foto:'/_nuxt/img/Foto-justino.2646645.jpg',
                    nome: 'Justino Mendes'
                },                                                                
                editedPost: this.post
                ? {...this.post}
                : {
                    categoria: '',
                    nivel:'',
                    autorNome: 'Marco Olim',
                    autorFoto: '/_nuxt/img/Foto-marco.7c49f81.jpg',
                    autorData: new Date(),
                    artigoTitulo: '',
                    hiperligacaoLegenda: '',
                    hiperligacaoLink:'',

                    artigoFoto:'',
                    artigoFotoLegenda:'',
                    artigoResumo: '',
                    artigoTexto: ''
                }
            }
        },
        methods: {
            onSave() {
              //console.log(this.editedPost);
                this.$emit('submit', this.editedPost)    
            },
            onCancel() {
                //this.$router.push('/admin')
                this.$router.go(-1)
            },
            mudaAutor(pessoa) {
                this.editedPost.autorNome = pessoa.nome;
                this.editedPost.autorFoto = pessoa.foto;
            }
        }
    }
</script>

<style scoped>
.alinhaBotoes{
    display: flex;
    justify-content: flex-end;
}
.alinhaBotoes > * {
    margin-left: 10px
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
.post-images{
    display: flex;
    justify-content: space-between;
}
img {
  box-sizing: content-box;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  border-width: 5px; 
  border-style: solid;
}
.img {
    border-color: #41B883;
    filter:grayscale();
    opacity: 0.5;
}
.imgActive {
     /*border-color:lightgrey;
     #35495E; #41B883;*/
    border-color:#3B8070;;
    filter: none;
    opacity: 1;
}
</style>