<script>
export default {
  data() {
    return {
      showMenu: false,
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
  <nav class="bg-[#26282A] p-4 sticky w-full top-0 z-10">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="text-red-600 text-2xl font-bold">RagamArtikel</a>

      <!-- Menu Tampilan Desktop -->
      <div class="hidden md:flex space-x-4">
        <a href="#" class="text-white">Home</a>
        <a href="#" class="text-white">About</a>
        <a href="#" class="text-white">Blog</a>
        <a href="#" class="text-white">Contact</a>
      </div>

      <!-- Tombol Login/Register Tampilan Desktop -->
      <div class="hidden md:flex space-x-4">
        <nuxt-link to="/auth/login">
          <Button label="Login" variant="save" />
        </nuxt-link>
        <nuxt-link to="/auth/register">
          <Button label="Register" variant="primary" text="white" />
        </nuxt-link>
      </div>

      <!-- Tombol Menu Hamburger untuk Tampilan Mobile -->
      <div class="md:hidden flex items-center" @click="toggleMenu">
        <Button icon="menu" text="white" />
      </div>
    </div>

    <!-- Menu Dropdown untuk Tampilan Mobile -->
    <div v-show="showMenu" class="md:hidden text-center">
      <div class="flex flex-col space-y-4 p-4">
        <a href="#" class="text-white">Home</a>
        <a href="#" class="text-white">About</a>
        <a href="#" class="text-white">Blog</a>
        <a href="#" class="text-white">Contact</a>
      </div>

      <div class="flex flex-col space-y-4 p-4">
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
