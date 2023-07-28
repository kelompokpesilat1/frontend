<script>
import { mapState } from 'vuex'
export default {
  props: ['articleId'],
  data() {
    return {
      formEditArtikel: {
        category: 'olahraga',
        title: '',
        important: 0,
        cover: null,
        content: '',
      },
    }
  },
  computed: {
    ...mapState(['categories', 'userData']),
  },
  methods: {
    async postArtikel() {
      const token = this.$auth.strategy.token.get()
      const formData = new FormData()
      formData.append('cover', this.formEditArtikel.cover)
      formData.append('category', this.formEditArtikel.category)
      formData.append('title', this.formEditArtikel.title)
      formData.append('important', this.formEditArtikel.important)
      console.log(token)
      console.log(this.formEditArtikel)
      try {
        const response = await this.$axios.put(
          '/articles/update/' + this.articleId,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        console.log(response)
      } catch (error) {
        this.messageErr = error.response.data.errors
      }
    },
    handleFileInputChange(event) {
      this.formNewArtikel.cover = event.target.files[0]
    },
  },
  async fetch() {
    const response = await this.$axios.get('/articles/' + this.articleId)

    this.formEditArtikel.title = response.data.article.title
    this.formEditArtikel.important = response.data.article.important
    this.formEditArtikel.content = response.data.article.content
    this.formEditArtikel.cover = response.data.article.cover
  },
  mounted() {
    console.log(this.formEditArtikel)
  },
}
</script>

<template>
  <form
    @submit.prevent="postArtikel"
    class="create-form flex flex-col gap-4 max-w-2xl mx-auto my-2"
  >
    <h1 class="text-lg font-semibold">Edit Artikel</h1>
    <div>
      <label for="title">
        <h1 class="text-sm font-semibold mb-2">Judul Artikel</h1></label
      >
      <input
        type="text"
        class="w-full border py-2 px-4 bg-white"
        id="title"
        v-model="formEditArtikel.title"
        placeholder="Tulis Judul..."
        required
      />
    </div>

    <div class="grid grid-cols-2 gap-5">
      <div>
        <label
          for="kategori"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Pilih Kategori</label
        >
        <select
          v-model="formEditArtikel.category"
          id="kategori"
          class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option v-for="category in categories" :value="category.name">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="important">Penting?</label>
        <input
          type="checkbox"
          name="important"
          id="important"
          v-model="formEditArtikel.important"
        />
      </div>
    </div>
    <div class="h-[300px]">
      <label> <h1 class="text-sm font-semibold mb-2">Content</h1></label>
      <quill-editor v-model="formEditArtikel.content" class="h-2/3" />
    </div>

    <button class="py-2 px-4 border-2 w-full text-center bg-red-600 text-white">
      Submit
    </button>
  </form>
</template>

<style scoped></style>
