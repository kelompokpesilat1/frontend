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
      <LayoutFlexCol v-if="artikel" class="gap-10 items-center my-10">
        <DetailHeader
          :title="artikel.title"
          :kategori="artikel.kategori"
          :author="artikel.author"
          :date="artikel.date"
        />
        <DetailCover :cover="artikel.cover" />

        <DetailContent :content="artikel.content" />
      </LayoutFlexCol>
      <div v-else>
        <h1>Artikel tidak ditemukan</h1>
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
