<script>
import { dummyArticles } from '~/utils/dummyData.js'

export default {
  computed: {
    favoriteArticles() {
      return dummyArticles.sort((a, b) => b.favoriteCount - a.favoriteCount)
    },
  },
}
</script>
<template>
  <div>
    <ul>
      <li v-for="article in favoriteArticles" :key="article.title">
        {{ article.title }} - {{ article.favoriteCount }} favorit
      </li>
    </ul>
  </div>
</template>
