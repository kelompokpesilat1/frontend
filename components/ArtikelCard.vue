<script>
export default {
  props: ['artikel'],
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
  <div>
    <div class="image-wrapper overflow-hidden rounded-2xl border">
      <img
        :src="artikel.cover"
        alt="cover artikel"
        class="group-hover:scale-105 transition-transform"
        width="100%"
      />
    </div>

    <LayoutFlexRow class="artikel-subtitle text-gray gap-3 mt-8 mb-4">
      <p class="text-sm">
        {{ artikel.date }}
      </p>
      <nuxt-link :to="`/kategori/${artikel.kategori}`">
        <p
          class="py-1 px-2 rounded-full bg-gray-100 text-sm text-red-600 cursor-pointer"
        >
          {{ artikel.kategori }}
        </p></nuxt-link
      >
    </LayoutFlexRow>

    <nuxt-link :to="`/detail/${artikel.id}`">
      <LayoutFlexCol class="gap-4">
        <h1 class="hover:opacity-80">
          {{ artikel.title | truncateContent(100) }}
        </h1>
        <p class="text-sm">
          {{ artikel.content | truncateContent(120) }}
        </p>
      </LayoutFlexCol>
    </nuxt-link>
  </div>
</template>

<style scoped></style>
