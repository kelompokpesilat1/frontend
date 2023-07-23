<script>
import { dummyArtikel, headingArtikel } from '@/utils/dummyData'

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
      inputValue: {
        title: '',
        kategori: ''
      }
    }
  },
  computed: {
    //add this function.
  },
  methods: {
    sliceString(str, maxLength) {
      if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...'; // Add ellipsis if the string is longer than 10 characters
      } else {
        return str;
      }
    },

    handleEdit(data, index){
      this.artikelEdit = {data, index}
      this.isEdit = true 
      this.inputValue = {title: data.title, kategori: data.kategori}
    },

    handleClose(){
      this.isEdit = false
    },

    handleInputChange(event, type) {
      // A lógica para lidar com a alteração do valor do input vai aqui.
      console.log('Novo valor:', event.target.value, type);
      switch(type){
        case 'title':
        this.inputValue.title = event.target.value  
        break;
        case 'kategori' :
          this.inputValue.kategori = event.target.value
          break;
        default:
          break;

      }
      this.inputValue.name = event.target.value
    },

    handleSave(){
      this.isEdit = false
      const { title, kategori} = this.inputValue
      const newData = {
        ...this.artikelEdit.data, 
        title: title === '' ? this.artikelEdit.data.title : title, 
        kategori: kategori === '' ? this.artikelEdit.data.kategori : kategori
      }

      this.$set(this.artikelData, this.artikelEdit.index, newData);
      this.inputValue = {title: '', kategori: ''}
    },

    handleRemove(id){
      this.artikelData = this.artikelData.filter((item) => item.id !== id);
    }
  
  }
}
</script>


<template>
  <div class="min-h-screen w-screen mt-20">
    <div class="mx-10 px-2 py-2">
      <h1 class="text-xl font-bold">List Artikel</h1>
      <div v-if="isEdit">
        <p>{{ artikelEdit.data.id }}</p>
        <input type="text" placeholder="title" @change="event => handleInputChange(event, 'title')" v-model="inputValue.title"/>
        <input type="text" placeholder="kategori" @change="event => handleInputChange(event, 'kategori')" v-model="inputValue.kategori"/>
        <button @click="handleClose">close</button>
        <button @click="handleSave">save</button>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-3/4 mt-5 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th v-for="item in headingColomn" :key="item.index" scope="col" class="px-6 py-3">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in artikelData" :key="index"
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                <button class="bg-blue-500 text-white p-2" @click="handleEdit(item, index)">Edit</button>
                <button class="bg-red-500 text-white p-2" @click="handleRemove(item.id)">delete</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>