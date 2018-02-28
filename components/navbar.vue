<template>
    <header>  
      <div class="nav">
          <nuxt-link to="/">
            <logo/>
          </nuxt-link>  
        <div class="nav-titulo">
          <div class="title">
             <span class="title-place">place</span>help
          </div>
          <div class="subtitle">
            Plataforma da Comunidade
          </div>
        </div>
        <div class="nav-buttons">
          <nuxt-link :to="'/posts/' + 1" class="button--green">FAQs</nuxt-link>
          <nuxt-link to="/info" class="button--grey">Informações</nuxt-link>
        </div>
      </div>
    </header>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style scoped>
.nav-buttons{
  margin-left:auto;
  display: flex;
  align-items: center;
}
.nav{
  padding: 10px;
  display: flex;
  border-bottom: solid 1px lightgrey;
}
.nav-titulo{
  padding-left: 20px;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
  margin-top:-7px;  
  font-weight: 100;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}
.title-place{
  font-weight: 700;
  letter-spacing: -2px;  
}
.subtitle {
  font-weight: 100;
  font-size: 12px;
  color: #41B883;
  /* word-spacing: 3px; */
  letter-spacing: 2px;
  margin-top: -15px;
  /* line-height: 0.7; */
  padding-left: 16px;
}

</style>