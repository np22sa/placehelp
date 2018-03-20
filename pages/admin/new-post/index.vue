<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm @submit="onSubmitted"/>   
        
        </section>

    </div>
</template>

<script>
    import axios from 'axios';
    import AdminPostForm from '@/components/Admin/AdminPostForm';
    export default {
        components:{
            AdminPostForm
        },
        middleware: ['check-auth','auth'],
        methods:{
            onSubmitted(postData){
                /*axios.post('https://place-63c32.firebaseio.com/posts.json', postData)
                .then(result => this.$router.push('/admin'))
                .catch(e => console.log(e))*/
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
.new-post-form{
    width: 90%;
    margin: 20px auto;
}
@media (min-width: 768px){
    .new-post-form{
        width: 500px;
    }
}
</style>