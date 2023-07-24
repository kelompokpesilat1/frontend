<script>
export default {
  data() {
    return {
      showMenu: false,
      categories: ['olahraga', 'teknologi', 'edukasi', 'hiburan', 'gaya hidup'],
      auth: true,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
      console.log(this.showMenu)
    },
  },
}
</script>

<template>
  <nav class="bg-white border p-4 sticky w-full top-0 z-10 shadow-sm">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="text-red-600 text-2xl font-bold">RagamArtikel</a>

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
      <div v-if="!auth" class="hidden md:flex space-x-4">
        <nuxt-link to="/auth/login">
          <Button label="Login" variant="save" />
        </nuxt-link>
        <nuxt-link to="/auth/register">
          <Button label="Register" variant="primary" text="white" />
        </nuxt-link>
      </div>
      <div v-if="auth" class="hidden md:flex space-x-4">
        <nuxt-link to="/dashboard">
          <Button label="Dashboard" icon="dashboard" text="blue-500" />
        </nuxt-link>
      </div>

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

      <div v-if="auth" class="flex flex-col space-y-4 p-4">
        <nuxt-link to="/dashboard-remake">
          <Button label="Dashboard" icon="dashboard" text="blue-500" />
        </nuxt-link>
      </div>
      <div v-else class="flex flex-col space-y-4 p-4">
        <nuxt-link to="/auth/login">
          <Button label="Login" variant="save" />
        </nuxt-link>
        <nuxt-link to="/auth/register">
          <Button label="Register" variant="primary" text="white" />
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply text-red-600;
}
</style>
