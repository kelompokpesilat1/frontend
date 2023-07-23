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
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      class="artikel-image w-full h-48 object-cover"
      :src="article.cover"
      alt="Article Cover"
    />

    <div class="article-body p-4 h-[300px] flex flex-col justify-between">
      <div class="article-content">
        <p class="text-red-600 font-semibold capitalize">
          {{ article.kategori }}
        </p>

        <nuxt-link :to="`/detail/${article.id}`">
          <h3 class="text-xl font-bold mt-2">
            {{ article.title | truncateContent(70) }}
          </h3>
          <p class="text-gray-600 mt-2">
            {{ article.content | truncateContent(100) }}
          </p>
        </nuxt-link>
      </div>

      <div class="article-author mt-4 flex items-center justify-between">
        <div class="flex items-center">
          <p class="text-sm text-gray-600">{{ article.author }}</p>
        </div>
        <p class="text-sm text-gray-400">July 15, 2023</p>
      </div>
    </div>
  </div>
</template>
