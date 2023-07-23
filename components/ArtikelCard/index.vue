<script>
export default {
  props: ['artikel'],
}
</script>

<template>
  <div class="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
    <img
      class="w-full h-48 object-cover"
      :src="artikel.cover"
      alt="Gambar Artikel"
    />
    <nuxt-link :to="`/detail/${artikel.id}`">
      <ArtikelCardContent :title="artikel.title" :content="artikel.content" />
    </nuxt-link>

    <div class="px-6 pt-4 pb-4">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >{{ artikel.date }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
        >{{ artikel.kategori }}</span
      >
    </div>
  </div>
</template>

<style scoped></style>
