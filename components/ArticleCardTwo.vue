<script>
export default {
  props: ['article'],

  filters: {
    truncateContent(content, maxLength) {
      if (content.length <= maxLength) {
        return content
      } else {
        return content.substring(0, maxLength) + '...'
      }
    },
  },

  computed: {
    coverUrl() {
      return 'http://localhost:8080/' + this.article.cover
    },
  },
}
</script>

<template>
  <div
    class="bg-white shadow-lg overflow-hidden flex items-center h-72"
    data-aos="fade-right"
  >
    <client-only
      ><img
        class="artikel-image max-w-lg h-full object-cover"
        :src="coverUrl"
        alt="Article Cover"
      />

      <div>
        <div class="article-body p-8">
          <!-- <p class="text-sm font-bold mb-1 uppercase text-red-600">
            {{ article.Category.name }}
          </p> -->
          <h1 class="text-xl font-bold mb-4">
            {{ article.title }}
          </h1>
          <TruncateContent :articleContent="article.content" :maxWords="50" />
        </div>

        <div
          class="p-8 w-full hover:scale-105 hover:text-red-600 transition-all"
        >
          <nuxt-link
            :to="`/detail/${article.id}`"
            class="flex items-center justify-between font-medium"
          >
            Lihat selengkapnya
            <span class="material-icons"> arrow_right_alt </span></nuxt-link
          >
        </div>
      </div></client-only
    >
  </div>
</template>
