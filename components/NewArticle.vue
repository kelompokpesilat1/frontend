<script>
import axios from 'axios'
export default {
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    // Add any other props as needed
  },
  data() {
    return {
      category: [],
      title: '',
      cover: '',
      content: '',
      penulis: '',
      published: '',

      inputValue: {
        title: '',
        cover: '',
        content: '',
        penulis: '',
        published: '',
      },
    }
  },
  mounted() {
    this.fetchKategori()
    console.log(this.fetchKategori)
  },
  methods: {
    async fetchKategori() {
      try {
        const response = await this.$axios.get('/category')
        this.category = response.data.data
        console.log(response.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async handleSave() {
      // Lakukan validasi untuk memastikan semua input telah diisi
      if (
        this.inputValue.title.trim() === '' ||
        this.inputValue.content.trim() === '' ||
        this.inputValue.category.trim() === '' ||
        this.inputValue.penulis.trim() === '' ||
        this.inputValue.published.trim() === ''
      ) {
        alert('Semua field harus diisi')
        return
      }

      if (this.editMode) {
        // Handle edit mode
        try {
          const response = await axios.put(
            `/articles/${this.inputValue.id}`,
            this.inputValue
          )

          // Find the edited article in the list and update it
          const editedArticleIndex = this.articles.findIndex(
            (article) => article.id === response.data.id
          )
          if (editedArticleIndex !== -1) {
            this.articles.splice(editedArticleIndex, 1, response.data)
          }

          // Reset nilai input dan flag
          this.inputValue = {
            title: '',
            content: '',
            category: '',
            penulis: '',
            published: '',
          }
          this.isEdit = false
          this.showForm = false
        } catch (error) {
          console.error(error)
        }
      } else {
        // Handle create mode
        try {
          const response = await this.$axios.post('/articles', this.inputValue)
          // Jika penyimpanan berhasil, tambahkan data artikel baru ke daftar artikel yang ditampilkan
          this.articles.push(response.data)
          // Reset nilai input dan flag
          this.inputValue = {
            title: '',
            content: '',
            category: '',
            penulis: '',
            published: '',
          }
          this.isCreate = false
          this.showForm = false
        } catch (error) {
          console.error(error)
        }
      }
    },
    // handleSave() {
    //   if (this.isEdit) {
    //     const { title, kategori, author, date } = this.inputValue
    //     const newData = {
    //       ...this.artikelEdit.data,
    //       title: title === '' ? this.artikelEdit.data.title : title,
    //       content: content === '' ? this.artikelEdit.data.content : content,
    //       kategori: kategori === '' ? this.artikelEdit.data.kategori : kategori,
    //       author: author === '' ? this.artikelEdit.author : author,
    //       date: date === '' ? this.artikelEdit.date : date,
    //     }
    //     this.$set(this.artikelData, this.artikelEdit.index, newData)
    //     this.inputValue = { title: '', kategori: '' }
    //   } else if (this.isCreate) {
    //     // Handle create mode
    //     const { title, kategori, author, date } = this.inputValue
    //     if (
    //       title.trim() === '' ||
    //       content.trim() === '' ||
    //       kategori.trim() === '' ||
    //       author.trim() === '' ||
    //       date.trim() === ''
    //     ) {
    //       // Validation: Make sure title and kategori are not empty
    //       alert('Title and kategori cannot be empty.')
    //       return
    //     }

    //     // Create a new data object for the new article
    //     const newArticle = {
    //       id: this.artikelData.length + 1,
    //       title,
    //       content,
    //       kategori,
    //       author,
    //       date,
    //       // Add other properties for the new article
    //     }

    //     // Push the new data to the artikelData array
    //     this.artikelData.push(newArticle)

    //     // Reset the input values and flags
    //     this.inputValue = { title: '', kategori: '', author: '', date: '' }
    //     this.isCreate = false
    //     this.isEdit = false
    //   }
    //   this.isEdit = false
    //   this.isCreate = false
    // },
    showData() {
      console.log(this.content)
    },
    submit() {
      this.$emit('onSubmit')
    },
    goBack() {
      this.$router.go(-1)
    },
    // async handleSave() {
    //   // Lakukan validasi untuk memastikan semua input telah diisi
    //   if (
    //     this.inputValue.title.trim() === '' ||
    //     this.inputValue.content.trim() === '' ||
    //     this.inputValue.kategori.trim() === '' ||
    //     this.inputValue.author.trim() === '' ||
    //     this.inputValue.date.trim() === ''
    //   ) {
    //     alert('Semua field harus diisi')
    //     return
    //   }

    //   // Kirim permintaan POST ke backend untuk menyimpan data artikel baru
    //   try {
    //     const response = await axios.post('/articles', this.inputValue)
    //     // Jika penyimpanan berhasil, tambahkan data artikel baru ke daftar artikel yang ditampilkan
    //     this.articles.push(response.data)
    //     // Reset nilai input dan flag
    //     this.inputValue = {
    //       title: '',
    //       content: '',
    //       kategori: '',
    //       author: '',
    //       date: '',
    //     }
    //     this.isCreate = false
    //     this.showForm = false
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
  },
}
</script>

<template>
  <div>
    <button @click="goBack">
      <span class="material-icons"> arrow_back </span>
    </button>
    <div class="max-w-2xl mx-auto my-2">
      <h1 class="font-bold text-red-600 text-xl mb-10">
        {{ editMode ? 'Edit Artikel' : 'Membuat Artikel' }}
      </h1>
      <div class="flex flex-col gap-4">
        <div>
          <label for="title">
            <h1 class="text-sm font-semibold mb-2">Judul Artikel</h1></label
          >
          <input
            type="text"
            class="w-full border py-2 px-4 bg-white"
            id="title"
            placeholder="Tulis Judul..."
            v-model="title"
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
            v-on:change="cover"
          />
        </div>
        <div>
          <label for="content">
            <h1 class="text-sm font-semibold mb-2">Content</h1></label
          >
          <quill-editor v-model="content" id="content" />
        </div>
        <div>
          <label for="penulis">
            <h1 class="text-sm font-semibold mb-2">Penulis</h1></label
          >
          <input
            type="text"
            class="w-full border py-2 px-4 bg-white"
            id="title"
            placeholder="Andrea Hirata"
            v-model="penulis"
            required
          />
        </div>
        <div>
          <label for="date">
            <h1 class="text-sm font-semibold mb-2">Published</h1></label
          >
          <input
            type="date"
            class="w-full border py-2 px-4 bg-white"
            v-model="published"
            required
          />
        </div>
        <div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Pilih Kategori</label
          >
          <select
            id="kategori"
            class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            v-model="inputValue.category"
            required
          >
            <option
              v-for="category in category"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
        <button
          @click="handleSave"
          class="py-2 px-4 border-2 w-full text-center bg-red-600 text-white"
        >
          Submit
        </button>
      </div>
      <div class="mt-20">
        <h1 class="text-4xl font-bold mb-4 mt-2">{{ title }}</h1>
        <div
          v-html="content"
          class="text-lg text-gray-700 leading-[32px]"
        ></div>
      </div>
    </div>
  </div>
</template>
