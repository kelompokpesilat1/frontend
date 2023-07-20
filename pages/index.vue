<script>
import { dummyArtikel } from '@/utils/dummyData'

export default {
  data() {
    return {
      artikelData: dummyArtikel,
    }
  },
  computed: {
    artikelPenting() {
      return this.artikelData.filter((artikel) => artikel.penting).slice(0, 8)
    },
    artikelTerbaru() {
      const copiedData = this.artikelData.map((artikel) => ({
        ...artikel,
        date: new Date(artikel.date),
      }))

      // Lakukan sorting berdasarkan tanggal terbaru
      const sortedData = copiedData.sort((a, b) => b.date - a.date)

      const resultData = sortedData.map((artikel) => ({
        ...artikel,
        date: artikel.date.toLocaleDateString(),
      }))

      // Ambil 8 artikel terbaru
      const artikelTerbaru = resultData.slice(0, 8)

      return artikelTerbaru
    },
  },
}
</script>

<template>
  <div>
    <Container class="flex flex-col gap-10 my-10">
      <section>
        <FontHeading>Informasi Penting</FontHeading>
        <ArtikelWrapper>
          <ArtikelCard
            v-for="artikel in artikelPenting"
            :key="artikel.id"
            a
            :artikel="artikel"
          />
        </ArtikelWrapper>
      </section>

      <section>
        <FontHeading>Artikel Terbaru</FontHeading>
        <ArtikelWrapper>
          <ArtikelCard
            v-for="artikel in artikelTerbaru"
            :key="artikel.id"
            a
            :artikel="artikel"
          />
        </ArtikelWrapper>
        <div class="text-end">
          <nuxt-link to="/artikel-terbaru"
            ><button
              class="text-red-600 font-semibold hover:underline transition-all"
            >
              Lebih banyak
            </button></nuxt-link
          >
        </div>
      </section>
      <!-- <Modal />      -->
    </Container>
  </div>
</template>
