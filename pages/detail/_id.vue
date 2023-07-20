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

    <Container class="flex flex-col gap-10 items-center my-10">
      <header class="max-w-[800px]">
        <p class="text-xl capitalize text-red-600 font-semibold">
          {{ artikel.kategori }}
        </p>
        <h2 class="text-[42px] leading-[50px] font-bold">
          {{ artikel.title }}
        </h2>
        <div class="flex items-center gap-4 mt-5">
          <div
            class="avatar flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-200"
          >
            <h1 class="text-2xl text-red-600 font-bold">{{ avatarName }}</h1>
          </div>
          <div class="div">
            <h1>{{ artikel.author }}</h1>
            <p class="text-gray-400">{{ artikel.date }}</p>
          </div>
        </div>
      </header>
      <div class="max-w-[1000px]">
        <img :src="artikel.cover" alt="cover artikel" width="100%" />
      </div>
      <div class="flex flex-col gap-4 content max-w-[800px]">
        <p>{{ artikel.content }}</p>
        <p>{{ artikel.content }}</p>
        <p>{{ artikel.content }}</p>
        <p>{{ artikel.content }}</p>
        <p>{{ artikel.content }}</p>
        <p>{{ artikel.content }}</p>
        <p>{{ artikel.content }}</p>
      </div>
      <div class="card py-3 px-6 shadow-lg w-full lg:w-[800px] mt-5">
        <div class="flex items-center gap-4 mb-4">
          <p class="flex items-center gap-2">
            <span class="material-icons"> visibility </span>10 Dilihat
          </p>
          <p class="flex items-center gap-2">
            <span class="material-icons"> question_answer </span>10 Komentar
          </p>
        </div>
        <input
          type="text"
          placeholder="Tulis komentar..."
          class="w-full py-2 px-4 mb-5 border-gray-500"
        />
        <div class="flex items-center justify-end">
          <button class="flex items-center gap-3">
            Kirim <span class="material-icons"> send </span>
          </button>
        </div>
      </div>
      <div class="card py-3 px-6 shadow-lg w-full lg:w-[800px]">
        <div class="flex flex-col gap-4">
          <CommentCard :artikel="artikel" :avatarName="avatarName" />
          <CommentCard :artikel="artikel" :avatarName="avatarName" />
          <CommentCard :artikel="artikel" :avatarName="avatarName" />
          <CommentCard :artikel="artikel" :avatarName="avatarName" />
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
