<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      formNewArtikel: {
        name: 'Admin ganteng',
        category: 'hiburan',
        title: 'Tes aja coba yaaa',
        important: 0,
        cover: null,
        content: '',
      },
    }
  },

  methods: {
    async postArtikel() {
      const token = this.$auth.strategy.token.get()
      const formData = new FormData()
      formData.append('cover', this.formNewArtikel.cover)
      formData.append('name', this.formNewArtikel.name)
      formData.append('category', this.formNewArtikel.category)
      formData.append('title', this.formNewArtikel.title)
      formData.append('important', this.formNewArtikel.important)
      formData.append('content', this.formNewArtikel.content)
      console.log(token)
      console.log(this.formNewArtikel)
      try {
        const response = await this.$axios.post('/addArticle', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(response)
      } catch (error) {
        this.messageErr = error.response.data.errors
      }
    },
    handleFileInputChange(event) {
      this.formNewArtikel.cover = event.target.files[0]
    },
  },
}
</script>

<template>
  <div>
    <div class="flex flex-col gap-4 max-w-2xl mx-auto my-2">
      <div>
        <label for="title">
          <h1 class="text-sm font-semibold mb-2">Judul Artikel</h1></label
        >
        <input
          type="text"
          class="w-full border py-2 px-4 bg-white"
          id="title"
          v-model="formNewArtikel.title"
          placeholder="Tulis Judul..."
          required
        />
      </div>
      <div>
        <label for="cover">
          <h1 class="text-sm font-semibold mb-2">Cover Artikel</h1></label
        >
        <input
          type="file"
          class="w-full border py-2 px-4 bg-white"
          id="cover"
          name="cover"
          @change="handleFileInputChange"
        />
      </div>
      <div>
        <label> <h1 class="text-sm font-semibold mb-2">Content</h1></label>
        <quill-editor v-model="formNewArtikel.content" />
      </div>

      <div>
        <label
          for="kategori"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Pilih Kategori</label
        >
        <select
          id="kategori"
          class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>Pilih Kategori</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <button
        @click="postArtikel"
        class="py-2 px-4 border-2 w-full text-center bg-red-600 text-white"
      >
        Submit
      </button>
    </div>
    <!-- <ListArtikel /> -->
  </div>
</template>
