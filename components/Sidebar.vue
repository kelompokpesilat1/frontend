<script>
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
}
</script>
<template>
  <div class="flex min-h-screen">
    <!-- sidebar -->
    <div class="bg-red-500 text-white w-64 px-4 py-4 space-y-6">
      <div class="flex justify-between">
        <FontHeading>ADMIN</FontHeading>
        <span class="material-icons cursor-pointer">dehaze</span>
      </div>

      <nav class="mt-5">
        <ul>
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4 rounded-lg"
              to="/dashboard"
              ><span class="material-icons"> analytics </span>
              Analytics</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4 rounded-lg"
              to="/dashboard/article"
              ><span class="material-icons"> article </span> Artikel</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4 rounded-lg"
              to="/dashboard/seo"
              ><span class="material-icons"> text_fields </span>Seo
              Settings</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="flex items-center gap-3 p-4 rounded-lg"
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
  @apply text-red-500 bg-white;
}
</style>
