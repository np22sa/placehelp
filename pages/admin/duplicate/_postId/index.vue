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
        //props:{ duplicate: {
        //         type: Boolean,
        //         default: false
        //         }},
        asyncData(context){
            return axios.get('https://place-63c32.firebaseio.com/posts/' + context.params.postId + '.json')
            .then(res=>{
            //   console.log(res.data)  
            return {loadedPost: res.data}
            })
            .catch(e => context.error(e))
        },
        middleware: ['check-auth','auth'],
        methods:{
            onSubmitted(postData){
                this.$store.dispatch("addPost", postData)
                .then(() => {
                    //this.$router.push('/admin')
                    this.$router.push('/posts')
                })
            }
        }
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