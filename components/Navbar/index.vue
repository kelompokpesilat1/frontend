<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      showMenu: false,
      categories: ['olahraga', 'teknologi', 'edukasi', 'hiburan', 'gaya hidup'],
    }
  },
  computed: {
    ...mapState(['auth']),
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    logout() {
      console.log('logout')
      this.$auth.logout()
    },
  },
}
</script>

<template>
  <nav class="bg-white border p-4 sticky w-full top-0 z-10 shadow-sm">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <nuxt-link to="/" class="text-red-600 text-2xl font-bold"
        >RagamArtikel</nuxt-link
      >

      <!-- Menu Tampilan Desktop -->
      <div class="hidden md:flex space-x-8">
        <nuxt-link
          v-for="category in categories"
          class="capitalize hover:text-red-600 transition-all"
          :key="category"
          :to="`/kategori/${category}`"
          >{{ category }}</nuxt-link
        >
      </div>

      <!-- Tombol Login/Register Tampilan Desktop -->
      <NavbarMenuDesktop @onLogout="logout" />

      <!-- Tombol Menu Hamburger untuk Tampilan Mobile -->
      <div class="md:hidden flex items-center" @click="toggleMenu">
        <Button icon="menu" text="red-600" />
      </div>
    </div>

    <!-- Menu Dropdown untuk Tampilan Mobile -->
    <div v-show="showMenu" class="md:hidden text-center">
      <div class="flex flex-col space-y-4 p-4">
        <nuxt-link
          v-for="category in categories"
          class="capitalize hover:text-red-600 transition-all"
          :key="category"
          :to="`/kategori/${category}`"
          >{{ category }}</nuxt-link
        >
      </div>

      <NavbarMenuMobile @onLogout="logout" />
    </div>
  </nav>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply text-red-600;
}
</style>
