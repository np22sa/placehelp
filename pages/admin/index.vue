<template>
    <div class="admin-page">
        <section class="new-post">
            <app-button btn-style="inverted" @click="$router.push('/admin/new-post')">Novo</app-button>
        </section>
        <section class="existing-posts">
            <h1>Lista de Entradas</h1>
            <PostList isAdmin />
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
        }      
    }
</script>

<style scoped>
.admin-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>