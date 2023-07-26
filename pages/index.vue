<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      articles: [],
    }
  },
  method: {
    ...mapActions(['setUser']),
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser', 'getUserRole']),
    ...mapState(['userData']),

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

  async fetch() {
    await this.$axios
      .get('/articles')
      .then((res) => (this.articles = res.data.data))
  },
}
</script>

<template>
  <div class="flex flex-col gap-20 pb-10">
    <HeroSection />

    <section class="px-8 md:px-16">
      <h1 class="font-bold text-red-600 text-2xl mb-10">Informasi Penting</h1>
      <ArticleWrapperTwo>
        <ArticleCardTwo
          v-for="article in articles"
          :article="article"
          :key="article.id"
        />
      </ArticleWrapperTwo>
    </section>
    <section class="px-8 md:px-16">
      <h1 class="font-bold text-red-600 text-2xl mb-10">Artikel Terbaru</h1>
      <ArticleWrapper>
        <ArticleCard
          v-for="article in articles"
          :article="article"
          :key="article.id"
        />
      </ArticleWrapper>
    </section>
  </div>
</template>
