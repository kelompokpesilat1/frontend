<script>
export default {
  data() {
    return {
      category: ['olahraga', 'seni', 'gaming', 'edukasi'],
    }
  },
}
</script>

<template>
  <ul class="flex item-center gap-3">
    <li
      v-for="value in category"
      :key="value"
      class="text-white capitalize hover:text-red-600"
    >
      <nuxt-link :to="`/kategori/${value}`">{{ value }}</nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
.nuxt-link-active {
  @apply text-red-600;
}
</style>
