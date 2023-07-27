<script>
import {
  dummyArtikel,
  headingArtikel,
  kategoriOptions,
} from '@/utils/dummyData'
import UpdateArtikel from './Modal/UpdateArtikel.vue'
import axios from 'axios'

export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10, // Adjust this value as needed
      // declare nama artikel bebas
      articles: [],
      artikelData: dummyArtikel,
      headingColomn: headingArtikel,
      artikelEdit: {
        data: {},
        index: 0,
      },
      isEdit: false,
      isCreate: false,
      inputValue: {
        title: '',
        content: '',
        kategori: '',
        author: '',
        date: '',
      },
      kategoriOptions: [],
      showForm: false,
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.artikelData.length / this.itemsPerPage)
    },
    displayedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.artikelData.slice(startIndex, endIndex)
    },
    increment() {
      return this.totalPages >= 1
    },
    //add this function.
  },
  mounted() {
    this.fetchArticle()
  },
  methods: {
    async fetchArticle() {
      try {
        // Menggunakan Axios untuk mengambil data artikel dari backend
        const response = await this.$axios.get('/articles')
        this.articles = response.data.data
        console.log(response.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    onSubmit() {
      this.isCreate = !this.isCreate
      this.isEdit = !this.isEdit
    },

    onEdit() {
      this.isEdit = !this.isEdit
    },
    changePage(page) {
      this.currentPage = page
    },
    sliceString(str, maxLength) {
      if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...' // Add ellipsis if the string is longer than 10 characters
      } else {
        return str
      }
    },
    handleCreate() {
      this.artikelEdit = {}
      this.inputValue = {
        title: '',
        content: '',
        kategori: '',
        author: '',
        date: '',
      }
      this.isCreate = !this.isCreate
      this.showForm = true

      // this.artikelData.push({
      //   id: this.artikelData.length + 1,
      //   title: this.newArticle.title,
      //   kategori: this. newArticle.kategori,
      //   author: this. newArticle.author,
      //   date: new Date().toISOString().slice(0, 10),
      // })
    },

    async handleSave() {
      // Lakukan validasi untuk memastikan semua input telah diisi
      if (
        this.inputValue.title.trim() === '' ||
        this.inputValue.content.trim() === '' ||
        this.inputValue.kategori.trim() === '' ||
        this.inputValue.author.trim() === '' ||
        this.inputValue.date.trim() === ''
      ) {
        alert('Semua field harus diisi')
        return
      }

      // Kirim permintaan POST ke backend untuk menyimpan data artikel baru
      try {
        const response = await axios.post('/articles', this.inputValue)
        // Jika penyimpanan berhasil, tambahkan data artikel baru ke daftar artikel yang ditampilkan
        this.articles.push(response.data)
        // Reset nilai input dan flag
        this.inputValue = {
          title: '',
          content: '',
          kategori: '',
          author: '',
          date: '',
        }
        this.isCreate = false
        this.showForm = false
      } catch (error) {
        console.error(error)
      }
    },

    handleEdit(data, index) {
      this.artikelEdit = { data, index }
      this.isEdit = true
      this.inputValue = {
        title: data.title,
        kategori: data.kategori,
        content: data.content,
        author: data.author,
        date: data.date,
      }
      this.showForm = true
    },
    handleClose() {
      this.isEdit = false
      this.isCreate = false
      this.showForm = false // Hide the form when closing
    },
    handleInputChange(event, type) {
      // A lógica para lidar com a alteração do valor do input vai aqui.
      console.log('Novo valor:', event.target.value, type)
      switch (type) {
        case 'title':
          this.inputValue.title = event.target.value
          break
        case 'content':
          this.inputValue.content = event.target.value
          break
        case 'kategori':
          this.inputValue.kategori = event.target.value
          break
        case 'author':
          this.inputValue.author = event.target.value
          break
        case 'date':
          this.inputValue.date = event.target.value
          break
        default:
          break
      }
      this.inputValue.name = event.target.value
    },

    handleRemove(id) {
      this.artikelData = this.artikelData.filter((item) => item.id !== id)
    },
  },

  async handleRemove(id) {
    try {
      // Send a DELETE request to the backend to remove the article with the given ID
      await axios.delete(`/articles/${id}`)

      // Remove the article from the frontend by filtering the articles array
      this.articles = this.articles.filter((article) => article.id !== id)
    } catch (error) {
      console.error(error)
    }
  },

  components: { UpdateArtikel },
}
</script>

<template>
  <div class="min-h-screen mt-5">
    <div class="mx-10 px-2 py-2">
      <div class="flex justify-between items-center">
        <h1
          v-if="!isCreate && !isEdit"
          class="text-xl font-bold flex items-center"
        >
          List Artikel
        </h1>
        <button
          v-if="!isCreate && !isEdit"
          @click="isCreate = !isCreate"
          class="bg-red-700 text-white p-2 text-sm flex items-center gap-2 rounded-lg"
        >
          Tambah Data
          <span class="material-icons justify-center items-center">
            add_circle
          </span>
        </button>
      </div>
      <div v-if="isCreate">
        <NewArticle @onSubmit="onSubmit" />
      </div>
      <div v-else-if="isEdit">
        <div>
          <NewArticle :data="artikelEdit.data" @onEdit="onEdit" editMode />
        </div>
      </div>
      <div v-else class="overflow-hidden shadow-md sm:rounded-lg">
        <table
          class="table-auto w-full mt-5 text-sm text-left text-gray-900 dark:text-gray-900"
        >
          <thead
            class="text-xs text-gray-100 uppercase border-gray-300 dark:bg-red-500 dark:text-white"
          >
            <tr>
              <th
                v-for="item in headingColomn"
                :key="item.index"
                scope="col"
                class="px-6 py-3"
              >
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in articles"
              :key="index"
              class="bg-white border-b dark:bg-gray-100 dark:border-gray-100 transition duration-300 ease-in-out hover:bg-gray-300"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900"
              >
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </th>
              <td class="px-6 py-4">
                {{ sliceString(item.title, 10) }}
              </td>
              <td class="px-6 py-4">
                {{ sliceString(item.content, 10) }}
              </td>
              <td class="px-6 py-4">
                {{ item.id_category }}
              </td>
              <td class="px-6 py-4">
                {{ item.author }}
              </td>
              <td class="px-6 py-4">
                {{ item.createdAt }}
              </td>
              <td class="px-6 py-4">
                <button @click="isEdit = !isEdit">
                  <span class="material-icons">edit </span>
                </button>
                <button @click="handleRemove(item.id)">
                  <span class="material-icons">delete </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination
          v-if="increment"
          :currentPage="currentPage"
          :totalPages="totalPages"
          @page-change="changePage"
        />
      </div>
    </div>
  </div>
</template>
