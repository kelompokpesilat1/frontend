<script>
export default {
  data() {
    return {
      showLogin: false,
      showRegister: false,
    }
  },
  methods: {
    toggleModalLogin() {
      this.showLogin = !this.showLogin
    },
    toggleModalRegister() {
      this.showRegister = !this.showRegister
    },
    redirectToLogin() {
      this.toggleModalRegister
      this.toggleModalLogin
    },
  },
}
</script>

<template>
  <div>
    <Navbar />
    <Nuxt />
    <!-- <ModalLogin v-show="showLogin" @onClose="toggleModalLogin" />
    <ModalRegister
      v-show="showRegister"
      @onClose="toggleModalRegister"
      @onRegister="redirectToLogin"
    /> -->
  </div>
</template>
