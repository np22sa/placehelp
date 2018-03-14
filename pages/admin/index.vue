<template>
    <div class="admin-page">
        <section class="new-post">
            <app-button btn-style="inverted" @click="$router.push('/admin/new-post')">Nova Entrada</app-button>
        </section>
        <section class="existing-posts">
            <PostList orientation='row' isAdmin :posts="loadedPosts" />
        </section>
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'
    export default {
        components: {
            AppButton,
            PostList
        } ,
        computed: {
        loadedPosts(){
            return this.$store.getters.loadedPosts
        }
}     
    }
</script>

<style scoped>
.new-post{
    margin-top: 30px;
}
.admin-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>