<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
          <div class="titulo">
            <Logo/>
            <div class="nav-titulo">
                <div class="title">
                    <span class="title-place">place</span>help
                </div>
                <div class="subtitle">
                    Plataforma da Comunidade
                </div>
            </div>
        </div>
        <br><br><br>
        <AppControlInput type="email">Email</AppControlInput>
        <AppControlInput type="password">Password</AppControlInput>
        <br>
        <div class="alinhaBotoes">
        <AppButton
          type="button"
          btn-style="normal"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
          <AppButton btn-style="inverted" type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
      </div></form>
    </div>
  </div>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
import Logo from '@/components/Logo'

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  components: {
    AppControlInput,
    AppButton,
    Logo
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 550px;
  margin: auto;
  padding: 50px;
  box-sizing: border-box;
}
.alinhaBotoes{
    display: flex;
    justify-content: flex-end;
}
.alinhaBotoes > * {
    margin-left: 10px
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
  letter-spacing: 1px;
  margin-top: -15px;
  /* line-height: 0.7; */
  padding-left: 16px;
}
.titulo{
    display: flex;
}
</style>

