<script>
import { dummyArtikel } from '@/utils/dummyData'

export default {
  data() {
    return {
      kategori: this.$route.params.kategori,
    }
  },
  computed: {
    filteredArtikel() {
      return dummyArtikel.filter((value) => value.kategori === this.kategori)
    },
  },
}
</script>

<template>
  <div>
    <Navigation />

    <Container>
      <div
        class="artikel-container grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5"
      >
        <ArtikelCard
          v-for="artikel in filteredArtikel"
          :key="artikel.id"
          a
          :artikel="artikel"
        />
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
