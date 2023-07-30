<script>
export default {
  data() {
    return {
      value: this.$route.params.value,
      articles: [],
      categoryName: '',
    }
  },
  async fetch() {
    await this.$axios.get('/category/' + this.value).then((res) => {
      this.articles = res.data.data.article
      this.categoryName = res.data.data.kategory
    })
  },
}
</script>

<template>
  <div>
    <section
      class="hero py-24 px-8 md:px-16 min-h-screen grid place-items-center"
    >
      <div
        class="container mx-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1
          class="text-4xl md:text-8xl font-bold mb-4 text-red-600 capitalize text-center"
        >
          {{ categoryName }}
        </h1>
      </div>
    </section>
    <section v-if="articles.length > 0" class="py-12 px-8 md:px-16">
      <ArticleWrapper>
        <ArticleCard
          v-for="article in articles"
          :article="article"
          :key="article.id"
        />
      </ArticleWrapper>
    </section>
    <section v-else class="py-12 px-8 md:px-16">
      <h1 class="text-bold text-lg text-red-600">Tidak ada Artikel</h1>
    </section>
  </div>
</template>
