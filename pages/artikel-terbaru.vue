<script>
import { dummyArtikel } from '@/utils/dummyData'

export default {
  data() {
    return {
      artikelData: dummyArtikel,
    }
  },
  computed: {
    artikelTerbaru() {
      const copiedData = this.artikelData.map((artikel) => ({
        ...artikel,
        date: new Date(artikel.date),
      }))

      // Lakukan sorting berdasarkan tanggal terbaru
      const sortedData = copiedData.sort((a, b) => b.date - a.date)

      return sortedData
    },
  },
}
</script>

<template>
  <div>
    <Navigation />
    <Container>
      <section>
        <ArtikelWrapper>
          <ArtikelCard
            v-for="artikel in artikelTerbaru"
            :key="artikel.id"
            :artikel="artikel"
          />
        </ArtikelWrapper>
      </section>
    </Container>
    >>>>>>> cbb957742820b776b9549a4a3c417ad734bdcfc4
  </div>
</template>

<style scoped></style>
