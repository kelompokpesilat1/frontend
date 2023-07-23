<script>
import { dummyArtikel } from '@/utils/dummyData'

export default {
  data() {
    return {
      value: this.$route.params.value,
    }
  },
  computed: {
    filteredArtikel() {
      const result = dummyArtikel.filter((data) => data.kategori === this.value)
      if (result.length > 0) return result
    },
  },
}
</script>

<template>
  <div>
    <Navigation />

    <Container>
      <ArtikelWrapper v-if="filteredArtikel">
        <ArtikelCard
          v-for="artikel in filteredArtikel"
          :key="artikel.id"
          :artikel="artikel"
        />
      </ArtikelWrapper>
      <div v-else class="h-[80vh] flex items-center justify-center">
        <h1>Tidak ada artikel pada kategori ini</h1>
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
