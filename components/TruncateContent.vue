<script>
import striptags from 'striptags'

export default {
  props: ['articleContent', 'maxWords'],
  computed: {
    truncatedContent() {
      const plainTextContent = striptags(this.articleContent)
      const words = plainTextContent.trim().split(' ')

      if (words.length <= this.maxWords) {
        return this.articleContent
      } else {
        return words.slice(0, this.maxWords).join(' ') + '...'
      }
    },
  },
  mounted() {
    console.log(this.articleContent)
  },
}
</script>

<template>
  <div v-html="truncatedContent"></div>
</template>

<style scoped></style>
