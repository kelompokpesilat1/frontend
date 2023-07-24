<script>
import Topbar from '@/components/Topbar.vue'

export default {
  components: {
    Topbar,
  },

  data() {
    return {
      isLogin: false,
      dataUser: {},
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('isLogin')
      localStorage.removeItem('dataAccount')
      window.location.assign('/auth/login')
    },
  },
  created() {
    if (process.client) {
      if (localStorage.getItem('isLogin') === 'true') {
        const dataUser = localStorage.getItem('dataAccount')
        this.isLogin = true
        this.dataUser = JSON.parse(dataUser)
      } else {
        console.log('belum login')
        window.location.assign('/auth/login')
      }
    }
  },
}
</script>

<template>
  <div>
    <div v-if="isLogin" class="flex">
      <Sidebar />

      <div class="w-full">
        <Topbar :userProps="dataUser" :onLogout="handleLogout" />
        <Nuxt />
      </div>
    </div>
    <div v-else><p>Loading ...</p></div>
  </div>
</template>
