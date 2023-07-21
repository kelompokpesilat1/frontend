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
      return dummyArtikel.filter((data) => data.kategori === this.value)
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
