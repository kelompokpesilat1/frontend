<script>
export default {
  data() {
    return {
      value: this.$route.params.value,
      id: this.$route.params.id,
    }
  },
}
</script>

<template>
  <LayoutFlexRow class="justify-between h-[75px] shadow-sm">
    <Container>
      <LayoutFlexRow class="justify-between h-full">
        <nuxt-link to="/" class="flex items-center gap-3">
          <span class="material-icons"> arrow_back </span>
          Kembali
        </nuxt-link>
        <h3 class="font-semibold" v-if="value">Kategori {{ value }}</h3>
        <h3 class="font-semibold" v-else-if="id">Detail Artikel</h3>
        <h3 class="font-semibold" v-else>Artikel Terbaru</h3>
      </LayoutFlexRow>
    </Container>
  </LayoutFlexRow>
</template>
