<template>
    <form @submit.prevent="onSave">
        <app-control-input v-model="editedPost.categoria">Categoria</app-control-input>
        <app-control-input v-model="editedPost.artigoTitulo">Título</app-control-input>
        <app-control-input v-model="editedPost.autorNome">Nome</app-control-input>
        <app-control-input v-model="editedPost.hiperligacaoLegenda">Sub-titulo</app-control-input>
        <app-control-input v-model="editedPost.hiperligacaoLink">Link</app-control-input> 
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
                editedPost: this.post
                ? {...this.post}
                : {
                    categoria: '',
                    autorNome: '',
                    artigoTitulo: '',
                    hiperligacaoLegenda: '',
                    hiperligacaoLink:'',

                    artigoResumo: '',
                    artigoTexto: ''
                }
            }
        },
        methods: {
            onSave() {
              console.log(this.editedPost);  
            },
            onCancel() {
                this.$router.push('/admin')
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
</style>