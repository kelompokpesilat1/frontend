<script>
export default {
  methods: {
    handleLogout() {
      this.$auth.logout()
      this.$toast.success('Anda berhasil logout.')
    },
  },
}
</script>

<template>
  <nav class="bg-white border p-4 sticky w-full top-0 z-3">
    <div class="flex items-center justify-between">
      <nuxt-link to="/" class="text-red-600 text-2xl font-bold"
        >RagamArtikel</nuxt-link
      >

      <div class="flex gap-3">
        <div class="hidden md:flex space-x-4">
          <Avatar />
        </div>

        <button class="btn btn-danger" @click="handleLogout">
          <span class="material-icons-outlined"> logout </span>
        </button>
      </div>
    </div>
  </nav>
</template>
