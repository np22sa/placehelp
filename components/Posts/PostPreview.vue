<template>
    <nuxt-link :to="'/posts/'+id">
        <article>
            <div>
                <h1>{{title}}</h1>
                <p>{{previewText}}</p>
            </div>
        </article> 
    </nuxt-link>
</template>
<script>
    export default{
        name: 'PostPreview',
        props:{
            id: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true               
            },
            previewText: {
                type: String,
                required: true
            },
            categoria: {
                type: String,
                required: true
            }
        }
    }
</script>
<style>
    
</style>