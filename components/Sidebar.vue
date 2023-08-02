<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showSidebar: true,
      isSmallScreen: false,
    }
  },
  mounted() {
    // Check if the initial screen width is smaller than a certain value (e.g., 768px)
    this.checkScreenSize()
    // Add a listener to check the screen size whenever the window is resized
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeUnmount() {
    // Remove the resize event listener when the component is about to be destroyed
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 768
      // If the screen size becomes larger, always show the sidebar
      if (!this.isSmallScreen) {
        this.showSidebar = true
      }
    },
  },
  computed: {
    ...mapGetters(['getUserRole']),
  },
  mounted() {},
}
</script>
<template>
  <div class="">
    <!-- sidebar -->
    <div
      class="bg-white flex h-screen sticky top-0 left-0 text-gray-700 p-4 space-y-6 shadow"
    >
      <nav class="w-fit">
        <ul v-if="getUserRole == 'admin'">
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4 rounded-lg hover:translate-x-4 transition-all"
              to="/dashboard"
              ><span class="material-icons"> analytics </span>
              Analisis</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4 rounded-lg hover:translate-x-4 transition-all"
              to="/dashboard/article"
              ><span class="material-icons"> article </span> Artikel</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4 rounded-lg hover:translate-x-4 transition-all"
              to="/dashboard/seo"
              ><span class="material-icons"> text_fields </span>Seo
              Settings</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4 rounded-lg hover:translate-x-4 transition-all"
              to="/dashboard/user-management"
              ><span class="material-icons"> manage_accounts </span> Management
              User</nuxt-link
            >
          </li>
        </ul>
        <ul v-if="getUserRole == 'author'">
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4 rounded-lg hover:translate-x-4 transition-all"
              to="/dashboard"
              ><span class="material-icons"> analytics </span>
              Analytics</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4 rounded-lg hover:translate-x-4 transition-all"
              to="/dashboard/article"
              ><span class="material-icons"> article </span> Artikel</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  @apply text-red-500 bg-white border shadow-sm;
}
</style>
