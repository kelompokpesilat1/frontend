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
  mounted() {
    console.log(this.artikel.author)
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

        <Card class="w-full lg:w-[800px] mt-5">
          <LayoutFlexRow class="gap-4 mb-4">
            <LayoutFlexRow class="gap-2"
              ><span class="material-icons"> visibility </span>10 Dilihat
            </LayoutFlexRow>
            <LayoutFlexRow class="gap-2">
              <span class="material-icons"> question_answer </span>10 Komentar
            </LayoutFlexRow>
          </LayoutFlexRow>
          <InputField placeholder="Tulis komentar..." />
          <div class="text-end">
            <ButtonBlue>
              <button class="flex items-center gap-3">
                Kirim <span class="material-icons"> send </span>
              </button>
            </ButtonBlue>
          </div>
        </Card>

        <Card class="w-full lg:w-[800px]">
          <LayoutFlexCol class="gap-4">
            <CommentCard :artikel="artikel" :avatarName="avatarName" />
            <CommentCard :artikel="artikel" :avatarName="avatarName" />
            <CommentCard :artikel="artikel" :avatarName="avatarName" />
            <CommentCard :artikel="artikel" :avatarName="avatarName" />
          </LayoutFlexCol>
        </Card>
      </LayoutFlexCol>
      <div v-else>
        <h1>Artikel tidak ditemukan</h1>
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
