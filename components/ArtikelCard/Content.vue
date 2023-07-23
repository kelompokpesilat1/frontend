<script>
export default {
  props: ['title', 'content'],
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
  <div class="px-6 py-4">
    <h3 class="font-bold text-xl mb-2">
      {{ 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet' | truncateContent(30) }}
    </h3>
    <p class="text-gray-700 text-base">
      {{ content | truncateContent(120) }}
    </p>
  </div>
</template>
