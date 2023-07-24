<script>
import { dummyArtikel, headingArtikel, kategoriOptions } from '@/utils/dummyData'
import UpdateArtikel from './Modal/UpdateArtikel.vue';

export default {
    data() {
        return {
            artikelData: dummyArtikel,
            headingColomn: headingArtikel,
            artikelEdit: {
                data: {},
                index: 0
            },
            isEdit: false,
            isCreate: false,
            inputValue: {
                title: "",
                kategori: ""
            },
            kategoriOptions: []
        };
    },
    computed: {
    //add this function.
  },
  methods: {
    sliceString(str, maxLength) {
      if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...' // Add ellipsis if the string is longer than 10 characters
      } else {
        return str
      }
    },
    handleCreate() {
      this.artikelEdit = {}
      this.inputValue = { title: '', kategori: '', author: '', date: '' }
      this.isCreate = true

      // this.artikelData.push({
      //   id: this.artikelData.length + 1,
      //   title: this.newArticle.title,
      //   kategori: this. newArticle.kategori,
      //   author: this. newArticle.author,
      //   date: new Date().toISOString().slice(0, 10),
      // })
    },
    handleEdit(data, index) {
      this.artikelEdit = { data, index }
      this.isEdit = true
      this.inputValue = {
        title: data.title,
        kategori: data.kategori,
        author: data.author,
        date: data.date,
      }
    },
    handleClose() {
      this.isEdit = false
      this.isCreate = false
    },
    handleInputChange(event, type) {
      // A lógica para lidar com a alteração do valor do input vai aqui.
      console.log('Novo valor:', event.target.value, type)
      switch (type) {
        case 'title':
          this.inputValue.title = event.target.value
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
    handleSave() {
      if (this.isEdit) {
        const { title, kategori, author, date } = this.inputValue
        const newData = {
          ...this.artikelEdit.data,
          title: title === '' ? this.artikelEdit.data.title : title,
          kategori: kategori === '' ? this.artikelEdit.data.kategori : kategori,
          author: author === '' ? this.artikelEdit.author : author,
          date: date === '' ? this.artikelEdit.date : date,
        }
        this.$set(this.artikelData, this.artikelEdit.index, newData)
        this.inputValue = { title: '', kategori: '' }
      } else if (this.isCreate) {
        // Handle create mode
        const { title, kategori, author, date } = this.inputValue
        if (
          title.trim() === '' ||
          kategori.trim() === '' ||
          author.trim() === '' ||
          date.trim() === ''
        ) {
          // Validation: Make sure title and kategori are not empty
          alert('Title and kategori cannot be empty.')
          return
        }

        // Create a new data object for the new article
        const newArticle = {
          id: this.artikelData.length + 1,
          title,
          kategori,
          author,
          date,
          // Add other properties for the new article
        }

        // Push the new data to the artikelData array
        this.artikelData.push(newArticle)

        // Reset the input values and flags
        this.inputValue = { title: '', kategori: '', author: '', date: '' }
        this.isCreate = false
        this.isEdit = false
      }
      this.isEdit = false
      this.isCreate = false
    },
    handleRemove(id) {
      this.artikelData = this.artikelData.filter((item) => item.id !== id)
    },
  },
  components: { UpdateArtikel },
}
</script>

<template>
  <div class="min-h-screen mt-5">
    <div class="mx-10 px-2 py-2">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold flex items-center">List Artikel</h1>
        <button @click="handleCreate" class=" bg-red-700 text-white p-2 text-sm flex items-center gap-2 rounded-lg"> Tambah Data <span class="material-icons justify-center items-center">
          add_circle
</span></button>
      </div>
      <div v-if="isEdit || isCreate">
        <UpdateArtikel
          :artikelEdit="artikelEdit"
          :handleInputChange="handleInputChange"
          :inputValue="inputValue"
          :handleClose="handleClose"
          :handleSave="handleSave"
        />
      </div>
      <div class="overflow-x-hidden shadow-md sm:rounded-lg">
        <table
          class="table-auto w-3/4 mt-5 text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
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
              v-for="(item, index) in artikelData"
              :key="index"
              class="bg-white border-b dark:bg-gray-100 dark:border-gray-100 transition duration-300 ease-in-out hover:bg-gray-300"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900"
              >
                {{ index + 1 }}
              </th>
              <td class="px-6 py-4">
                {{ sliceString(item.title, 10) }}
              </td>
              <td class="px-6 py-4">
                {{ item.kategori }}
              </td>
              <td class="px-6 py-4">
                {{ item.author }}
              </td>
              <td class="px-6 py-4">
                {{ item.date }}
              </td>
              <td class="px-6 py-4">
                <button @click="handleEdit(item, index)"> <span class="material-icons">edit
</span></button>
                <button  @click="handleRemove(item.id)" > <span class="material-icons">delete
</span></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
