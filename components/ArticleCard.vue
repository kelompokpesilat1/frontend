<script>
import striptags from 'striptags'

export default {
  props: ['article'],

  filters: {
    truncateContentTitle(content, maxLength) {
      if (content.length <= maxLength) {
        return content
      } else {
        return content.substring(0, maxLength) + '...'
      }
    },
  },
  data() {
    return {
      maxWords: 25,
      cover: '',
    }
  },
  computed: {
    truncatedContent() {
      const plainTextContent = striptags(this.article.content)
      const words = plainTextContent.trim().split(' ')

      if (words.length <= this.maxWords) {
        return this.article.content
      } else {
        return words.slice(0, this.maxWords).join(' ') + '...'
      }
    },
    coverUrl() {
      return 'http://localhost:8080/' + this.article.cover
    },
  },
}
</script>

<template>
  <div class="bg-white shadow-lg overflow-hidden" data-aos="fade-right">
    <client-only>
      <img
        class="artikel-image w-full h-48 object-cover"
        :src="coverUrl"
        alt="Article Cover"
      />

      <div class="article-body p-8 h-[240px]">
        <p class="text-sm font-bold mb-1 uppercase text-red-600">
          {{ article.kategori }}
        </p>
        <h1 class="text-xl font-bold mb-4">
          {{ article.title }}
        </h1>
        <p v-html="truncatedContent"></p>
      </div>

      <div
        class="p-8 w-full hover:translate-x-5 hover:text-red-600 transition-all"
      >
        <nuxt-link
          :to="`/detail/${article.id}`"
          class="flex items-center justify-between font-medium"
        >
          Lihat selengkapnya
          <span class="material-icons"> arrow_right_alt </span></nuxt-link
        >
      </div></client-only
    >
  </div>
</template>
