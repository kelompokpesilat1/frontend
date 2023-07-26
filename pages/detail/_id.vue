<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      article: null,
    }
  },
  async fetch() {
    await this.$axios
      .get('/articles/' + this.id)
      .then((res) => (this.article = res.data.data))
  },
}
</script>

<template>
  <div>
    <!-- <Navigation /> -->

    <div
      class="max-w-3xl mx-auto flex flex-col gap-10 my-10"
      data-aos="flip-right"
      data-aos-duration="1000"
    >
      <div>
        <p class="uppercase font-semibold text-red-600">
          {{ article?.category }}
        </p>
        <h1 class="text-4xl font-bold mb-4 mt-2">{{ article?.title }}</h1>
        <div>
          <h3 class="font-semibold">{{ article?.author }}</h3>
          <p>{{ article?.createdAt }}</p>
        </div>
      </div>

      <img
        :src="article?.cover"
        alt="Deskripsi Gambar"
        class="w-full object-cover shadow-md"
      />

      <div
        class="flex flex-col gap-6 prose text-lg text-gray-700 leading-[32px]"
        v-html="article?.content"
      ></div>

      <form class="mt-20">
        <textarea
          class="w-full py-4 px-2 border-b"
          placeholder="Tulis Komentar..."
        ></textarea>
        <div class="flex justify-end">
          <button class="flex items-center gap-3">
            Kirim <span class="material-icons"> send </span>
          </button>
        </div>
      </form>

      <div class="my-2">
        <div class="flex items-center mb-2">
          <div>
            <p class="font-semibold">Zulfikar Muhamad</p>
            <p class="text-gray-500 text-sm">{{ article?.date }}</p>
          </div>
        </div>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati
          perspiciatis nihil vero beatae? Ea distinctio error facilis. Omnis
          aspernatur deserunt, nesciunt at velit saepe rem. Laborum ipsum rem
          facilis!
        </p>
        <hr class="mt-4" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
