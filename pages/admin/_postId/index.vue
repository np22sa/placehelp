<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>   
        
        </section>

    </div>
</template>

<script>
import axios from 'axios'
    import AdminPostForm from '@/components/Admin/AdminPostForm'
    export default {
        components:{
            AdminPostForm
        },
        asyncData(context){
            return axios.get('https://place-63c32.firebaseio.com/posts/' + context.params.postId + '.json')
            .then(res=>{
              console.log(res.data)  
            return {
                loadedPost: { 
                    ...res.data,
                    id: context.params.postId
                }
                
            }
            })
            .catch(e => context.error(e))
        },
        methods:{
            onSubmitted(editedPost){
                // axios.put('https://place-63c32.firebaseio.com/posts/' + this.$route.params.postId + '.json', {...editedPost, autorData: new Date()})
                // .then(res=>{
                //     this.$router.push('/admin') 
                //        })
                // .catch(e => console.log(e))
                this.$store.dispatch("editPost", editedPost)
                .then(() => {
                    this.$router.push('/admin')
                })
            }
        }
        // data(){
        //     return {
        //         loadedPost:{
        //             categoria: 'Legislação',
        //             nivel:'Pré-escolar',
        //             artigoTitulo:'Alteração ao currículo',
        //             artigoResumo:"Atualização curricular do	2º ciclo geral e especializado, 3º ciclo geral e especializado e CEFs",
        //             artigoTexto:"a)	2º ciclo geral e especializado (quadro II, III) b)	3º ciclo geral e especializado (quadro IV, V)c)	CEF (quadro VI)a)	2º ciclo geral e especializado (quadro II, III) b)	3º ciclo geral e especializado (quadro IV, V)c)	CEF (quadro VI)a)	2º ciclo geral e especializado (quadro II, III) b)	3º ciclo geral e especializado (quadro IV, V)c)	CEF (quadro VI)",
        //             artigoFoto:'',
        //             artigoFotoLegenda:'',
        //             hiperligacaoLegenda:"Despacho 5908/2017",
        //             hiperligacaoLink:'',
        //             autorNome:"Cristiana Gonçalves",
        //             autorData:"23 de Fevereiro, 2018",
        //             autorFoto:''                    
        //         }
        //     }
        // }
    }
</script>

<style scoped>
.update-form{
    width: 90%;
    margin: 20px auto;
}
@media (min-width: 768px){
    .update-form{
        width: 500px;
    }
}
</style>