<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      articles: [],
      seoData: [],
      title: 'Ragam Artikel',
    }
  },

  method: {
    ...mapActions(['setUser']),
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser', 'getUserRole']),
    ...mapState(['userData']),

    artikelPenting() {
      return this.articles.filter((artikel) => artikel.important).slice(0, 3)
    },
    artikelTerbaru() {
      return this.articles.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      ) // Urutkan berdasarkan tanggal terbaru
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
          v-for="article in artikelPenting"
          :article="article"
          :key="article.id"
        />
      </ArticleWrapperTwo>
    </section>
    <section class="px-8 md:px-16">
      <h1 class="font-bold text-red-600 text-2xl mb-10">Artikel Terbaru</h1>
      <ArticleWrapper>
        <ArticleCard
          v-for="article in artikelTerbaru"
          :article="article"
          :key="article.id"
        />
      </ArticleWrapper>
    </section>
  </div>
</template>
