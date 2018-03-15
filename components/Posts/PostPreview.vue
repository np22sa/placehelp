<template>
    
        <figure class="preview mb" :class="'categoria' + calculaCategoria">
           <nuxt-link :to="postLink"> 
            <blockquote class="preview__text">
                <h2>{{artigoTitulo}}</h2>
                <h4>{{hiperligacaoLegenda}}</h4>
                <br>
                <pre>{{artigoResumo}}</pre>             
            </blockquote>
        </nuxt-link>        
            <figcaption class="preview__user">
                <img :src="autorFoto" alt="" class="preview__photo">
                <div class="preview__user-box">
                    <p class="preview__user-name">{{autorNome}}</p>
                    <p class="preview__user-date">{{autorData | date}}</p>
                      
                </div>
                <div class="preview__link">
                    <a v-if="!!$store.state.token" :href="'/admin/' + this.id">&#x270e;</a>
                    <a :href="hiperligacaoLink" :title="hiperligacaoLegenda" target="blank" v-if="!!hiperligacaoLink">&#x26D3;</a>
                    <span>&#8285;</span>
                    <!--  &#x270e;&#x26D3;&#8942;&#9993;&#8801;&#9776;&#9736;&#8644;&#64;&#8285;&#35;&#38;   -->
                </div>
                
            </figcaption>

        </figure>

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
            },
            calculaCategoria(){
                if (this.categoria == 'Legislação') { return '2'} else if (this.categoria == 'Comentários') { return '1'} else {return ''}
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
        /* margin: 3.5rem; */
        width: 420px;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
    .preview__link > * {
        color: green;
        font-size: 2.2rem;
        font-weight: 300;
    }
    .categoria2:before{
        content:"\201C";
        position: absolute;
        top: -2.75rem;
        left: -1rem;
        line-height: 1;
        font-size: 20rem;
        color: #f0f0f0;
        font-family: sans-serif;
    }
    .categoria1:before{
        content:"\0040";
        position: absolute;
        /* top: -1.3rem;
        left: -1rem;
        line-height: 1;
        font-size: 6rem; */
        top: -1.8rem;
        left: -1.4rem;
        line-height: 1;
        font-size: 8rem;
        color: #f0f0f0;
        font-family: sans-serif;
    }
    .categoria:before{
        content:"\0026";
        position: absolute;
        /* top: -1.5rem;
        left: -1rem;
        line-height: 1;
        font-size: 9.4rem; */
        top: -2.5rem;
        left: -1rem;
        line-height: 1;
        font-size: 10.5rem;
        color: #f0f0f0;
        font-family: sans-serif;
    }
    /* .categoria:before{
        content:"\0023";
        position: absolute;
        top: -2.5rem;
        left: -0.2rem;
        line-height: 1;
        font-size: 10.5rem;
        color: #f0f0f0;
        font-family: sans-serif;
    }     */
</style>