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
    avatarName() {
      return this.artikel.author.split('')[0]
    },
  },
}
</script>

<template>
  <div>
    <Navigation />

    <Container>
      <LayoutFlexCol v-if="artikel" class="gap-10 items-center my-10">
        <header class="max-w-[800px]">
          <DetailKategori>
            {{ artikel.kategori }}
          </DetailKategori>
          <DetailTitle>
            {{ artikel.title }}
          </DetailTitle>

          <LayoutFlexRow class="gap-4 mt-5">
            <AvatarName :avatarName="avatarName" />
            <div>
              <h1>{{ artikel.author }}</h1>
              <p class="text-gray-400">{{ artikel.date }}</p>
            </div>
          </LayoutFlexRow>
        </header>
        <div class="max-w-[1000px]">
          <img :src="artikel.cover" alt="cover artikel" width="100%" />
        </div>

        <LayoutFlexCol class="gap-4 max-w-[800px]">
          <p>{{ artikel.content }}</p>
          <p>{{ artikel.content }}</p>
          <p>{{ artikel.content }}</p>
          <p>{{ artikel.content }}</p>
          <p>{{ artikel.content }}</p>
          <p>{{ artikel.content }}</p>
          <p>{{ artikel.content }}</p>
        </LayoutFlexCol>

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

      <div>
        <h1>Artikel tidak ditemukan</h1>
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
