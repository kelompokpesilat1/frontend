<script>
import { dummyArtikel } from '@/utils/dummyData'

export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    artikel() {
      return dummyArtikel.find((value) => value.id === this.id)
    },
  },
}
</script>

<template>
  <div>
    <Navigation />

    <Container>
      <h1>{{ artikel.title }}</h1>
    </Container>
  </div>
</template>

<style scoped></style>
