<script>
export default {
  middleware: 'guest',
}
</script>

<template>
  <div>
    <div class="flex">
      <Sidebar />

      <div class="w-full">
        <Topbar />
        <Nuxt />
      </div>
    </div>
  </div>
</template>
