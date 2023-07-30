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
  <div class="bg-white shadow-lg overflow-hidden" data-aos="fade-right">
    <div class="flex flex-col lg:flex-row">
      <!-- Bagian Kiri (Gambar) -->
      <div class="w-full lg:w-1/3">
        <client-only>
          <img
            class="h-72 object-cover w-full"
            :src="coverUrl"
            alt="Article Cover"
          />
        </client-only>
      </div>

      <!-- Bagian Kanan (Konten) -->
      <div class="p-8 flex flex-col w-full lg:w-2/3 justify-between gap-10">
        <div class="article-body">
          <h1 class="text-xl font-bold mb-4">{{ article.title }}</h1>
          <TruncateContent :articleContent="article.content" :maxWords="50" />
        </div>

        <div class="hover:scale-105 hover:text-red-600 transition-all">
          <nuxt-link
            :to="`/detail/${article.id}`"
            class="flex items-center justify-between font-medium"
          >
            Lihat selengkapnya
            <span class="material-icons">arrow_right_alt</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <div
    class="bg-white shadow-lg overflow-hidden grid grid-cols-2 h-72"
    data-aos="fade-right"
  >
    <client-only
      ><img
        class="artikel-image w-1/4 h-full object-cover"
        :src="coverUrl"
        alt="Article Cover"
      />

      <div class="w-3/4">
        <div class="article-body p-8">
          tes
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
</template> -->
