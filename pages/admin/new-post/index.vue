<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <form @submit.prevent="onSave">
                <app-control-input v-model="editedPost.categoria">categoria</app-control-input>
                <app-control-input v-model="editedPost.artigoTitulo">Título</app-control-input>
                <app-control-input v-model="editedPost.autorNome">nome</app-control-input>
                <app-control-input v-model="editedPost.hiperligacaoLegenda">sub-titulo</app-control-input>
                <app-control-input v-model="editedPost.hiperligacaoLink">link</app-control-input> 
                <app-control-input control-type="textarea" v-model="editedPost.artigoResumo">Resumo</app-control-input>               
                <app-control-input control-type="textarea" v-model="editedPost.artigoTexto">Texto</app-control-input>               
                <app-button type="button" btn-style="cancel" @click="onCancel">Cancelar</app-button>
                <app-button type="submit" style="margin-left: 10px">Gravar</app-button>
            </form>
        
        </section>

    </div>
</template>

<script>
    import AppButton from '@/components/UI/AppButton'
    import AppControlInput from '@/components/UI/AppControlInput'
    export default {
        components:{
            AppButton,
            AppControlInput
        },
        data () {
            return {
                editedPost: {
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

</style>