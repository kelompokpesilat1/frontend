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
      <ArtikelWrapper>
        <ArtikelCard
          v-for="artikel in filteredArtikel"
          :key="artikel.id"
          :artikel="artikel"
        />
      </ArtikelWrapper>
    </Container>
  </div>
</template>

<style scoped></style>
