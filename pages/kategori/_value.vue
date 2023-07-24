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
      const result = dummyArtikel.filter((data) => data.kategori === this.value)
      if (result.length > 0) return result
    },
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
          {{ value }}
        </h1>
      </div>
    </section>
    <section v-if="filteredArtikel" class="py-12 px-8 md:px-16">
      <ArticleWrapper>
        <ArticleCard
          v-for="article in filteredArtikel"
          :article="article"
          :key="article.id"
        />
      </ArticleWrapper>
    </section>
  </div>
</template>
