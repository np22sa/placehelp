<template>
<div class="header-container">
  <header class="the-header">

    <div class="logo">
      <nuxt-link to="/"><logo/></nuxt-link>
    </div>
    <div class="nav-titulo">
      <div class="title">
          <span class="title-place">place</span>help
      </div>
      <div class="subtitle">
        Plataforma da Comunidade
      </div>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/posts/">Últimas</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/info">Procedimentos</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Editar</nuxt-link></li>
      </ul>
      <!-- <button v-if="!!$store.state.token" class="button--green" @click="onLogout" >Logout</button>
      <button v-else @click="$router.push('/admin')" class="button--green">Login</button> -->
      <button v-if="$store.state.token==null" @click="$router.push('/admin')" class="button--green">Login</button>
      <button v-else class="button--green" @click="onLogout" >Logout</button>
      
    </div>
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />    
  </header>
</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    Logo,
    TheSideNavToggle
  },
  methods: {
    onLogout(){
      this.$store.dispatch("logout");
      this.$router.push("/"); ///admin/auth)
    }
  }
};
</script>


<style scoped>
/*.button {
  font: inherit;
  cursor: pointer;  
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;  
}
 .button:hover,
.button:active {
  color: #fff;
  background-color: #3b8070;  
} */
.header-container {
  padding: 10px;
  /* height: 60px; */
  border-bottom: solid 1px lightgrey;
  box-shadow:  0px 0px 24px 0px rgba(0, 0, 0, 0.20);
  }

.the-header {
  width: 100%;
  /* position: fixed;
  height: 60px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

/* .logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
} */

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: flex;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: #35495e;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #41B883;
}

/*********** Titulo PLACE ***********/
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
  letter-spacing: 1px;
  margin-top: -15px;
  /* line-height: 0.7; */
  padding-left: 16px;
}
</style>
