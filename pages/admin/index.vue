<template>
    <div class="admin-page">
        <section class="new-post">
            <button @click="$router.push('/admin/new-post')">Novo</button>
        </section>
        <section class="existing-posts">
            <h1>Lista de Entradas</h1>
            <PostList isAdmin />
        </section>
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
    export default {
        components: {
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