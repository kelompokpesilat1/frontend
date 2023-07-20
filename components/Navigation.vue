<script setup>
const { value } = defineProps(['value'])
</script>

<template>
  <div class="flex items-center justify-between h-[75px]">
    <Container>
      <div class="flex items-center justify-between h-full">
        <nuxt-link to="/" class="flex items-center gap-3">
          <span class="material-icons text-red-600"> arrow_back </span>
          <button class="text-red-600">Kembali</button></nuxt-link
        >
        <h3 class="font-semibold" v-if="value">Kategori {{ value }}</h3>
        <h3 class="font-semibold" v-else>Artikel Terbaru</h3>
      </div>
    </Container>
  </div>
</template>
