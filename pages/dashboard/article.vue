<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      formNewArtikel: {
        name: this.$store.state.userData.name,
        category: 'hiburan',
        title: 'Tes aja coba yaaa',
        important: 0,
        cover: null,
        content: '',
      },
      articles: [],
      pageCreate: true,
      pageList: false,
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
        await this.$axios.post('/addArticle', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      } catch (error) {
        this.messageErr = error.response.data.errors
      }
    },
    handleFileInputChange(event) {
      this.formNewArtikel.cover = event.target.files[0]
    },
    handlePage(page) {
      this.pageCreate = false
      this.pageList = false

      switch (page) {
        case 'create':
          this.pageCreate = true
          break
        case 'list':
          this.pageList = true
          break
      }
    },
  },
  async fetch() {
    await this.$axios
      .get('/articles')
      .then((res) => (this.articles = res.data.data))
  },
  mounted() {
    console.log(this.articles)
  },
  mounted(){
    console.log(this.postArtikel)
  }
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border m-3">
    <div class="flex items-center border-b">
      <div
        class="p-4 cursor-pointer"
        @click="handlePage('create')"
        :class="{ 'bg-slate-50 text-red-600 font-semibold': pageCreate }"
      >
        Buat Artikel
      </div>
      <div
        class="p-4 cursor-pointer"
        @click="handlePage('list')"
        :class="{ 'bg-slate-50 text-red-600 font-semibold': pageList }"
      >
        List Artikel
      </div>
    </div>
    <div v-show="pageCreate" class="flex flex-col gap-4 max-w-2xl mx-auto my-2">
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
    <div v-show="pageList">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">No.</th>
                  <th scope="col" class="px-6 py-4">Judul</th>
                  <th scope="col" class="px-6 py-4">Konten</th>
                  <th scope="col" class="px-6 py-4">Kategori</th>
                  <th scope="col" class="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(article, index) in articles"
                  :key="article.id"
                  class="border-b dark:border-neutral-500"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    {{ index + 1 }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ article.title }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <TruncateContent
                      :articleContent="article.content"
                      :maxWords="5"
                    />
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ article.kategori }}
                  </td>
                  <td
                    class="whitespace-nowrap px-6 py-4 flex items-center gap-2"
                  >
                    <button class="btn btn-info">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
