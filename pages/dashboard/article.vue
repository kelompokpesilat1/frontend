<script>
import { mapState } from 'vuex'

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
      formEditArtikel: {
        name: this.$store.state.userData.name,
        category: 'hiburan',
        title: 'Tes aja coba yaaa',
        important: 0,
        cover: null,
        content: '',
      },
      articles: [],
      currentArtikelId: 27,
      isCreating: false,
      isEdit: false,
      showList: true,
    }
  },
  watch: {
    isCreating(newValue) {
      this.showList = !newValue && !this.isEdit
    },
    isEdit(newValue) {
      this.showList = !newValue && !this.isCreating
    },
  },
  computed: {
    ...mapState(['userData']),
    articleToEdit() {
      return this.articles.find(
        (article) => article.id === this.currentArtikelId
      )
    },
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
    async deleteArtikel(id) {
      const token = this.$auth.strategy.token.get()

      try {
        await this.$axios.delete('/articles/delete/' + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        this.articles = this.articles.filter((article) => article.id !== id)
      } catch (error) {
        this.messageErr = error.response.data.errors
      }
    },
    handleFileInputChange(event) {
      this.formNewArtikel.cover = event.target.files[0]
    },
    toggleCreate() {
      this.isCreating = !this.isCreating
    },
    toggleEdit() {
      this.isEdit = !this.isEdit
    },
  },
  async fetch() {
    await this.$axios.get('/articles').then((res) => {
      this.articles = res.data.data.filter(
        (article) => article.author === this.userData.name
      )
    })
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
    <div class="flex items-center justify-end border-b p-4">
      <button class="btn btn-success" @click="toggleCreate">
        Buat Artikel
        <span class="material-icons-outlined"> add_circle </span>
      </button>
    </div>
    <div v-show="isCreating" class="flex flex-col gap-4 max-w-2xl mx-auto my-2">
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
        />
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
      <div class="h-[300px]">
        <label> <h1 class="text-sm font-semibold mb-2">Content</h1></label>
        <quill-editor v-model="formNewArtikel.content" class="h-2/3" />
      </div>

      <button
        @click="postArtikel"
        class="py-2 px-4 border-2 w-full text-center bg-red-600 text-white"
      >
        Submit
      </button>
    </div>
    <div v-show="isEdit" class="flex flex-col gap-4 max-w-2xl mx-auto my-2">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold">Edit Artikel</h1>
        <button class="btn btn-dark" @click="toggleEdit">
          <span class="material-icons-outlined"> close </span>
        </button>
      </div>

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
      <div class="h-[300px]">
        <label> <h1 class="text-sm font-semibold mb-2">Content</h1></label>
        <quill-editor v-model="formNewArtikel.content" />
      </div>

      <button
        @click="postArtikel"
        class="py-2 px-4 border-2 w-full text-center bg-red-600 text-white"
      >
        Submit
      </button>
    </div>
    <div>
      <div v-show="showList" class="w-full min-h-screen overflow-y-scroll">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">No.</th>
                  <th scope="col" class="px-6 py-4">Judul</th>
                  <th scope="col" class="px-6 py-4">Konten</th>
                  <th scope="col" class="px-6 py-4">Penulis</th>
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
                    {{ article.author }}
                  </td>
                  <td
                    class="whitespace-nowrap px-6 py-4 flex items-center gap-2"
                  >
                    <button class="btn btn-info" @click="toggleEdit">
                      Edit
                    </button>
                    <button
                      class="btn btn-danger"
                      @click="deleteArtikel(article.id)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        class="modal-content bg-white py-6 px-4 max-w-lg rounded-md shadow-lg"
      >
        <div class="text-end">
          <span
            class="material-icons cursor-pointer"
            @click="modalDeleteOpen = !modalDeleteOpen"
            >close</span
          >
        </div>
        <div class="flex items-center justify-between mb-10">
          <h1 class="text-lg font-bold">
            Apakah anda yakin ingin menghapus user?
          </h1>
        </div>

        <div class="flex items-center gap-5 justify-between">
          <button @click="deleteUser" class="btn btn-dark w-1/2">Hapus</button>
          <button
            @click="modalDeleteOpen = !modalDeleteOpen"
            class="btn btn-danger w-1/2"
          >
            Batal
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>
