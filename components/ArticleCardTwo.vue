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
  <div class="bg-white border shadow-lg overflow-hidden" data-aos="fade-right">
    <div class="flex flex-col lg:flex-row">
      <!-- Bagian Kiri (Gambar) -->
      <div class="w-full lg:w-1/3">
        <client-only>
          <img
            class="h-full object-cover w-full"
            :src="coverUrl"
            alt="Article Cover"
          />
        </client-only>
      </div>

      <!-- Bagian Kanan (Konten) -->
      <div
        class="p-4 lg:p-8 flex flex-col w-full lg:w-2/3 justify-between gap-10"
      >
        <div class="article-body">
          <nuxt-link
            :to="`/detail/${encodeURIComponent(article.title)}`"
            class="hover:text-red-600 transition-all"
          >
            <h1 class="text-xl font-bold mb-4">
              {{ article.title }}
            </h1></nuxt-link
          >
          <TruncateContent :articleContent="article.content" :maxWords="30" />
        </div>

        <div class="text-gray-500">
          {{ $utils.formatDateShort(article?.createdAt)
          }}<span class="text-xl font-bold"> . </span>{{ article.author }}
        </div>
      </div>
    </div>
  </div>
</template>
