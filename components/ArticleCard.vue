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
  <div class="bg-white shadow-lg overflow-hidden" data-aos="fade-right">
    <img
      class="artikel-image w-full h-48 object-cover"
      :src="article.cover"
      alt="Article Cover"
    />

    <div class="article-body p-8 h-[220px]">
      <p class="text-sm font-bold mb-1 uppercase text-red-600">
        {{ article.kategori }}
      </p>
      <h1 class="text-xl font-bold mb-4">
        {{ article.title | truncateContent(60) }}
      </h1>
      <p>{{ article.content | truncateContent(120) }}</p>
    </div>

    <div class="p-8 w-full hover:scale-105 hover:text-red-600 transition-all">
      <nuxt-link
        :to="`/detail/${article.id}`"
        class="flex items-center justify-between"
      >
        Lihat selengkapnya
        <span class="material-icons"> arrow_right_alt </span></nuxt-link
      >
    </div>
  </div>
</template>
