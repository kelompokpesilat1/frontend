<script>
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

  computed: {
    coverUrl() {
      return 'http://localhost:8080/' + this.article.cover
    },
  },
}
</script>

<template>
  <div
    class="bg-white border rounded-md shadow-lg overflow-hidden"
    data-aos="fade-right"
  >
    <client-only>
      <img
        class="artikel-image w-full h-48 object-cover"
        :src="coverUrl"
        alt="Article Cover"
      />

      <div class="article-body p-4 lg:p-8">
        <nuxt-link
          :to="`/detail/${encodeURIComponent(article.title)}`"
          class="font-medium hover:text-red-600 transition-all"
        >
          <h1 class="text-xl font-bold mb-4">
            {{ article.title }}
          </h1></nuxt-link
        >
        <div class="text-gray-500">
          {{ $utils.formatDateShort(article?.createdAt)
          }}<span class="text-xl font-bold"> . </span>{{ article.author }}
        </div>
      </div>
    </client-only>
  </div>
</template>
