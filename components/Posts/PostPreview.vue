<template>
    <nuxt-link :to="postLink">
        <figure class="preview">
            <blockquote class="preview__text">
                <h2>{{artigoTitulo}}</h2>
                <h4>{{hiperligacaoLegenda}}</h4>
                <br>
                <pre>{{artigoResumo}}</pre>                
            </blockquote>
            <figcaption class="preview__user">
                <img src="~assets/images/FotoHandler.jpg" alt="" class="preview__photo">
                <div class="preview__user-box">
                    <p class="preview__user-name">{{autorNome}}</p>
                    <p class="preview__user-date">{{autorData | date}}</p>
                      
                </div>
                <div class="preview__link">&infin;</div>  
            </figcaption>

        </figure>
    </nuxt-link>
</template>
<script>
//import { faAngleDoubleDown } from '@fortawesome/fontawesome-pro-regular'
    export default{
        name: 'PostPreview',
        props:{
            id: {
                type:String,
                required: true
            },

            isAdmin:{
                type: Boolean,
                required:true
                },

            categoria: {
                type:String,
                required:true
            },
            nivel: {
                type:String,
                required:false
            },
            artigoTitulo: {
                type: String,
                required: true               
            },
            artigoResumo: {
                type: String,
                required: true
            },            
            artigoTexto: {
                type:String,
                required:false
            },            
            artigoFoto: {
                type: String,
                required: false
            },
            artigoFotoLegenda: {
                type: String,
                required: false
            },            
            hiperligacaoLegenda: {
                type: String,
                required: false
            },
            hiperligacaoLink: {
                type: String,
                required: false
            },
            autorNome: {
                type: String,
                required: true
            },
            autorData: {
                type:undefined,
                required: true
            },
            autorFoto: {
                type: String,
                required: false
            }                        
        },
        computed: {
            postLink(){
                return this.isAdmin ? '/admin/' + this.id : '/posts/' +this.id
            }
        },
        filters: {
            formataData(dados){
                //.split("").reverse().join("")
                return new Date(dados).toString().slice(0,10)
            }
        }
    }
</script>
<style scoped>
    a {
    text-decoration: none;
    color: #35495e;
    }
    .preview {
        background-color: white;
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
        padding: 3rem;
        margin: 3.5rem;
        width: 450px;
        position: relative;
        overflow: hidden;
        /* height: 100%; */
    }
    .preview__text{
        margin-bottom:3rem;
        z-index: 10;
        text-align: justify;
        
        
        position: relative;
    }

    .preview__user{
        display: flex;
        align-items: center;
        text-align: left;
        justify-content: space-between;
    }
    .preview__user-box {
        margin-right: auto;
    }
    .preview__photo {
        border-radius: 50%;
        margin-right: 1.5rem;
    }
    .preview__user-name{
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: .4rem;
    }
    .preview__user-date{
        font-size:0.7rem; 
    }
    .preview__link{
        color: green;
        font-size: 2.2rem;
        font-weight: 300;
    }
    .preview:before{
        content:"\201C";
        position: absolute;
        top: -2.75rem;
        left: -1rem;
        line-height: 1;
        font-size: 20rem;
        color: #f0f0f0;
        font-family: sans-serif;
    }
</style>