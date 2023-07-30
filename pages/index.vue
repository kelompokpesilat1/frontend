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
    const token = this.$auth.strategy.token.get()

    await this.$axios
      .get('/articles')
      .then((res) => (this.articles = res.data.data))

    // await this.$axios.get('/seo').then((res) => {
    //   const data = res.data.data
    //   const metaDataConverd = [
    //     { charset: 'utf-8' },
    //     {
    //       name: 'viewport',
    //       content: 'width=device-width, initial-scale=1',
    //     },
    //   ]

    //   const formatData = {
    //     hid: data[0].keywords,
    //     name: data[0].title,
    //     content: data[0].desc,
    //   }
    //   metaDataConverd.push(formatData)

    //   this.seoData = metaDataConverd
    // })
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
