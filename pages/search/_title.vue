<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      title: this.$route.params.title,
      articles: null,
    }
  },
  async fetch() {
    const response = await this.$axios
      .get('/articles/search/' + this.title)
      .then((res) => {
        this.articles = res.data?.data
      })
    console.log(response)
  },

  computed: {
    ...mapState(['userData', 'auth']),
    coverUrl() {
      if (this.article?.cover) {
        return 'http://localhost:8080/' + this.article?.cover
      }
      return ''
    },
  },
}
</script>

<template>
  <div>
    <section v-if="articles?.length > 0" class="px-8 md:px-16 mt-10 mb-20">
      <h1 class="font-bold text-red-600 text-2xl mb-10">Hasil pencarian</h1>
      <ArticleWrapper>
        <ArticleCard
          v-for="article in articles"
          :article="article"
          :key="article.id"
        />
      </ArticleWrapper>
    </section>
    <section v-else class="py-12 px-8 md:px-16">
      <h1 class="text-bold text-lg text-red-600">Artikel tidak ditemukan</h1>
    </section>
  </div>
</template>
