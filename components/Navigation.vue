<script>
export default {
  data() {
    return {
      kategori: this.$route.params.kategori,
      id: this.$route.params.id,
    }
  },
}
</script>

<template>
  <div class="flex items-center justify-between h-[75px] shadow-sm">
    <Container>
      <div class="flex items-center justify-between h-full">
        <nuxt-link to="/" class="flex items-center gap-3">
          <span class="material-icons text-red-600"> arrow_back </span>
          <button class="text-red-600">Kembali</button></nuxt-link
        >
        <h3 class="font-semibold" v-if="kategori">Kategori {{ kategori }}</h3>
        <h3 class="font-semibold" v-else-if="id">Detail Artikel</h3>
        <h3 class="font-semibold" v-else>Artikel Terbaru</h3>
      </div>
    </Container>
  </div>
</template>
