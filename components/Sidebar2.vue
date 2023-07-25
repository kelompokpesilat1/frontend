<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user']),
  },
}
</script>

<template>
  <div class="min-h-screen fixed top-0 left-0 border">
    <nav class="p-4">
      <ul v-if="user.role === 'admin'" class="flex flex-col gap-2">
        <li class="text-gray-600 hover:text-[#111827]">
          <nuxt-link
            class="flex items-center gap-3 p-2 rounded-lg"
            to="/dashboard-remake"
            ><span class="material-icons"> home </span> Home</nuxt-link
          >
        </li>
        <li class="text-gray-600 hover:text-[#111827]">
          <nuxt-link
            class="flex items-center gap-3 p-2 rounded-lg"
            to="/dashboard-remake/article"
            ><span class="material-icons"> article </span> Artikel</nuxt-link
          >
        </li>
        <li class="text-gray-600 hover:text-[#111827]">
          <nuxt-link
            class="flex items-center gap-3 p-2 rounded-lg"
            to="/dashboard-remake/seo"
            ><span class="material-icons"> text_fields </span>Seo
            Settings</nuxt-link
          >
        </li>
        <li class="text-gray-600 hover:text-[#111827]">
          <nuxt-link
            class="flex items-center gap-3 p-2 rounded-lg"
            to="/dashboard-remake/user-management"
            ><span class="material-icons"> manage_accounts </span> User
            Management</nuxt-link
          >
        </li>
      </ul>
      <ul v-if="user.role === 'author'" class="flex flex-col gap-2">
        <li class="text-gray-600 hover:text-[#111827]">
          <nuxt-link
            class="flex items-center gap-3 p-2 rounded-lg"
            to="/dashboard-remake"
            ><span class="material-icons"> home </span> Home</nuxt-link
          >
        </li>
        <li class="text-gray-600 hover:text-[#111827]">
          <nuxt-link
            class="flex items-center gap-3 p-2 rounded-lg"
            to="/dashboard-remake/article"
            ><span class="material-icons"> article </span> Artikel</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply bg-slate-100 text-red-600;
}
</style>
