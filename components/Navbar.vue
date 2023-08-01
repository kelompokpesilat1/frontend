<script>
import { mapGetters, mapState } from 'vuex'

import 'vue-toastification/dist/index.css'

export default {
  data() {
    return {
      isDropdownOpen: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    handleLogout() {
      this.$auth.logout()
      this.$toast.success('Anda berhasil logout.')
      this.$router.push('/')
    },
  },

  computed: {
    ...mapState(['categories']),
    ...mapGetters(['isAuthenticated', 'getUserRole']),
  },
  mounted() {},
}
</script>

<template>
  <nav
    class="bg-white border py-4 px-8 md:px-16 sticky w-full top-0 z-10 shadow-sm"
  >
    <div class="w-full flex items-center justify-between">
      <!-- LOGO -->
      <nuxt-link to="/" class="text-2xl font-bold text-red-600"
        >RagamArtikel</nuxt-link
      >

      <!-- Navbar Links Desktop -->
      <div class="hidden lg:flex items-center space-x-6">
        <nuxt-link
          v-for="category in categories"
          @click="toggleDropdown"
          class="capitalize text-black hover:text-red-600 transition-all"
          :key="category.name"
          :to="`/kategori/${category.name}`"
          >{{ category.name }}</nuxt-link
        >
      </div>

      <!-- Navbar Buttons Desktop -->
      <div class="hidden lg:flex">
        <div v-if="!isAuthenticated" class="flex items-center space-x-4 w-fit">
          <nuxt-link to="/auth/login">
            <button class="btn btn-info">Login</button>
          </nuxt-link>
          <nuxt-link to="/auth/register">
            <button class="btn btn-dark">Register</button>
          </nuxt-link>
        </div>

        <div v-else class="flex items-center space-x-4 w-fit">
          <Avatar v-if="getUserRole == 'user'" />
          <nuxt-link v-else to="/dashboard">
            <button class="btn btn-warning w-full">
              Dashboard <span class="material-icons"> dashboard </span>
            </button>
          </nuxt-link>
          <button class="btn btn-danger w-full" @click="handleLogout">
            <span class="material-icons-outlined"> logout </span>
          </button>
        </div>
      </div>

      <!-- Menu Icon -->
      <button @click="toggleDropdown" class="btn btn-light flex lg:hidden">
        <span class="material-icons-outlined"> menu </span>
      </button>
    </div>

    <!-- Menu Dropdown -->
    <div
      v-show="isDropdownOpen"
      class="absolute flex lg:hidden flex-col gap-5 items-center right-0 top-full w-full md:w-1/2 min-h-screen bg-white z-20 p-5"
    >
      <!-- Navbar Links Mobile -->
      <div class="flex flex-col w-full space-y-6">
        <nuxt-link
          v-for="category in categories"
          @click="toggleDropdown"
          class="capitalize text-black hover:text-red-600 transition-all"
          :key="category.name"
          :to="`/kategori/${category.name}`"
          >{{ category.name }}</nuxt-link
        >
      </div>

      <hr />
      <!-- Navbar Buttons Mobile -->
      <div class="w-full">
        <div v-if="!isAuthenticated" class="flex flex-col w-full space-y-4">
          <nuxt-link to="/auth/login">
            <button class="btn btn-info w-full">Login</button>
          </nuxt-link>
          <nuxt-link to="/auth/register">
            <button class="btn btn-dark w-full">Register</button>
          </nuxt-link>
        </div>

        <div v-else class="flex flex-col w-full space-y-4">
          <Avatar v-if="getUserRole == 'user'" />
          <nuxt-link v-else to="/dashboard">
            <button class="btn btn-warning w-full">
              Dashboard <span class="material-icons"> dashboard </span>
            </button>
          </nuxt-link>
          <button class="btn btn-danger w-full" @click="handleLogout">
            <span class="material-icons-outlined"> logout </span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply text-red-600;
}
</style>
