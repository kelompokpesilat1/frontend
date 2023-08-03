<script>
import { mapState, mapGetters } from 'vuex'
export default {
  props: ['articleTitle'],
  data() {
    return {
      author: '',
      formEditArtikel: {
        category: '',
        title: '',
        important: 0,
        content: '',
        cover: '',
        publish: 0,
      },
    }
  },
  computed: {
    ...mapState(['categories', 'userData']),
    ...mapGetters(['getUserRole']),
    coverUrl() {
      if (this.cover) {
        return 'http://localhost:8080/' + this.cover
      }
      return ''
    },
    isAdmin() {
      if (this.getUserRole === 'admin') return true
    },
    isAuthorArticle() {
      if (this.isAdmin && this.userData.name !== this.author) return true
    },
  },
  methods: {
    async postArtikel() {
      const token = this.$auth.strategy.token.get()
      const formData = new FormData()
      formData.append('content', this.formEditArtikel.content)
      formData.append('category', this.formEditArtikel.category)
      formData.append('title', this.formEditArtikel.title)
      formData.append('important', this.formEditArtikel.important)
      formData.append('publish', this.formEditArtikel.publish)

      try {
        const encodedTitle = encodeURIComponent(this.articleTitle)
        await this.$axios.put('/articles/update/' + encodedTitle, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        this.$emit('onPost')
        this.$toast.success('Artikel berhasil di edit')
      } catch (error) {
        this.$toast.error('Artikel gagal di edit')
        this.messageErr = error.response.data.errors
      }
    },
    handleFileInputChange(event) {
      this.formNewArtikel.cover = event.target.files[0]
    },
  },
  async fetch() {
    const encodedTitle = encodeURIComponent(this.articleTitle)
    const response = await this.$axios.get(`/articles/${encodedTitle}`)

    this.formEditArtikel.title = response.data.article.title
    this.formEditArtikel.important = response.data.article.important
    this.formEditArtikel.content = response.data.article.content
    this.formEditArtikel.category = response.data.category
    this.formEditArtikel.publish = response.data.article.publish
    this.author = response.data.article.author
    console.log(this.author)
  },
  mounted() {
    console.log(this.userData)
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
        :disabled="isAuthorArticle"
      />
    </div>

    <div class="grid grid-cols-2 justify-center gap-5">
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
          <option
            v-for="category in categories"
            v-bind:value="category.name"
            :disabled="isAuthorArticle"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="flex items-center gap-2">
        <label for="important">
          <h1 class="text-sm font-semibold">Informasi Penting?</h1></label
        >
        <input
          type="checkbox"
          name="important"
          id="important"
          v-model="formEditArtikel.important"
        />
      </div>
      <div class="flex items-center gap-2" v-if="isAdmin">
        <label for="publish">
          <h1 class="text-sm font-semibold">Publish</h1></label
        >
        <input
          type="checkbox"
          name="publish"
          id="publish"
          v-model="formEditArtikel.publish"
        />
      </div>
    </div>

    <div class="h-[300px]">
      <label> <h1 class="text-sm font-semibold mb-2">Content</h1></label>
      <quill-editor
        v-model="formEditArtikel.content"
        class="h-2/3"
        :disabled="isAuthorArticle"
      />
    </div>

    <button class="py-2 px-4 border-2 w-full text-center bg-red-600 text-white">
      Submit
    </button>
  </form>
</template>

<style scoped></style>
