<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      formNewArtikel: {
        name: this.$store.state.userData.name,
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
      formData.append('cover', this.formNewArtikel.cover)
      formData.append('name', this.formNewArtikel.name)
      formData.append('category', this.formNewArtikel.category)
      formData.append('title', this.formNewArtikel.title)
      formData.append('important', this.formNewArtikel.important)
      formData.append('content', this.formNewArtikel.content)
      console.log(token)
      console.log(this.formNewArtikel)
      try {
        await this.$axios.post('/articles', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        this.$toast.success('Artikel berhasil dibuat')
      } catch (error) {
        this.$toast.error('Artikel gagal dibuat')
      }
    },
    handleFileInputChange(event) {
      this.formNewArtikel.cover = event.target.files[0]
    },
  },
}
</script>

<template>
  <form
    @submit.prevent="postArtikel"
    class="create-form flex flex-col gap-4 max-w-2xl mx-auto my-2"
  >
    <h1 class="text-lg font-semibold">Menulis Artikel</h1>
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
          v-model="formNewArtikel.category"
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
          v-model="formNewArtikel.important"
        />
      </div>
    </div>
    <div class="h-[300px]">
      <label> <h1 class="text-sm font-semibold mb-2">Content</h1></label>
      <quill-editor v-model="formNewArtikel.content" class="h-2/3" />
    </div>

    <button class="py-2 px-4 border-2 w-full text-center bg-red-600 text-white">
      Submit
    </button>
  </form>
</template>

<style scoped></style>
