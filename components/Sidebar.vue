=======
<script></script>
<template>
  <div class="relative flex min-h-screen">
    <!-- sidebar -->
    <div class="bg-red-500 text-white w-64 px-4 py-4 space-y-6">
      <h1 class="text-2xl font-bold">Admin</h1>
      <nav class="mt-5">
        <ul>
          <li>
            <nuxt-link class="flex items-center gap-3 p-4" to="/dashboard"
              ><span class="material-icons"> home </span> Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4"
              to="/dashboard/article"
              ><span class="material-icons"> article </span> Artikel</nuxt-link
            >
          </li>
          <li>
            <nuxt-link class="flex items-center gap-3 p-4" to="/dashboard/seo"
              ><span class="material-icons"> text_fields </span>Seo
              Settings</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4"
              to="/dashboard/user-management"
              ><span class="material-icons"> manage_accounts </span> User
              Management</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply text-red-600 bg-white;
}
</style>
>>>>>>> bfd2b784bedfa97362194008906906593f1310c6
