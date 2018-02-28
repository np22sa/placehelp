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
        <li class="nav-item"><nuxt-link :to="'/posts/'+ 1">Blog</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/info">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
      </ul>
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
  }
};
</script>


<style scoped>
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
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
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
