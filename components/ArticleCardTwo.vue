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
}
</script>

<template>
  <div
    class="bg-white shadow-lg overflow-hidden flex items-center h-72"
    data-aos="fade-right"
  >
    <img
      class="artikel-image max-w-lg h-full object-cover"
      :src="article.cover"
      alt="Article Cover"
    />

    <div>
      <div class="article-body p-8">
        <p class="text-sm font-bold mb-1 uppercase text-red-600">
          {{ article.kategori }}
        </p>
        <h1 class="text-xl font-bold mb-4">
          {{ article.title | truncateContent(100) }}
        </h1>
        <p>{{ article.content | truncateContent(200) }}</p>
      </div>

      <div class="p-8 w-full hover:scale-105 hover:text-red-600 transition-all">
        <nuxt-link
          :to="`/detail/${article.id}`"
          class="flex items-center justify-between font-medium"
        >
          Lihat selengkapnya
          <span class="material-icons"> arrow_right_alt </span></nuxt-link
        >
      </div>
    </div>
  </div>
</template>
