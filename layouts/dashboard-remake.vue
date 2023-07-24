<template>
  <div>
    <Topbar />
    <div class="flex">
      <!-- <div class=""></div> -->
      <Sidebar2 class="w-[255px] pt-[75px]" />
      <Nuxt
        class="w-[calc(100%-255px)] ms-auto min-h-screen bg-slate-100 p-5"
      />
    </div>
  </div>
</template>

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
    },
  },
}
</script>
