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
  <div class="container mx-auto my-10">
    <section class="flex items-center justify-between h-[75px]">
      <nuxt-link to="/artikel-terbaru"
        ><button class="text-red-600">Kembali</button></nuxt-link
      >
      <button class="text-gray-800">Detail Artikel</button>
    </section>

    <section>
      <div
        class="artikel-container grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5"
      >
        <ArtikelCard
          v-for="artikel in dummyArtikel"
          :key="artikel.id"
          a
          :artikel="artikel"
        />
        <ArtikelCard
          v-for="artikel in dummyArtikel"
          :key="artikel.id"
          a
          :artikel="artikel"
        />
        <ArtikelCard
          v-for="artikel in dummyArtikel"
          :key="artikel.id"
          a
          :artikel="artikel"
        />
      </div>
    </section>

    <div>
      <Navigation />
      <Container>
        <section>
          <div
            class="artikel-container grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5"
          >
            <ArtikelCard
              v-for="artikel in dummyArtikel"
              :key="artikel.id"
              a
              :artikel="artikel"
            />
          </div>
        </section>
      </Container>
    </div>
  </div>
</template>

<style scoped></style>
