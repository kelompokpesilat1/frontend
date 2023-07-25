<script>
import { dummyUsers, headingUsers } from '@/utils/dummyData'
import UpdateUsers from './Modal/UpdateUsers.vue'

export default {
  data() {
    return {
      usersData: dummyUsers,
      headingColomn: headingUsers,
      usersEdit: {
        data: {},
        index: 0,
      },
      isEdit: false,
      isCreate: false,
      inputValue: {
        name: '',
        email: '',
        roles: '',
      },
    }
  },
  computed: {
    //add this function.
  },
  methods: {
    handleCreate() {
      this.usersEdit = {}
      this.inputValue = { name: '', email: '', roles: '', action: '' }
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
      this.usersEdit = { data, index }
      this.isEdit = true
      this.inputValue = {
        name: data.name,
        email: data.email,
        roles: data.roles,
        action: data.action,
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
        case 'name':
          this.inputValue.name = event.target.value
          break
        case 'email':
          this.inputValue.email = event.target.value
          break
        case 'roles':
          this.inputValue.roles = event.target.value
          break

        default:
          break
      }
      this.inputValue.name = event.target.value
    },
    handleSave() {
      if (this.isEdit) {
        const { name, email, roles } = this.inputValue
        const newData = {
          ...this.usersEdit.data,
          name: name === '' ? this.usersEdit.data.name : name,
          email: email === '' ? this.usersEdit.data.email : email,
          roles: roles === '' ? this.usersEdit.roles : roles,
        }
        this.$set(this.usersData, this.usersEdit.index, newData)
        this.inputValue = { name: '', email: '' }
      } else if (this.isCreate) {
        // Handle create mode
        const { name, email, roles } = this.inputValue
        if (name.trim() === '' || email.trim() === '' || roles.trim() === '') {
          // Validation: Make sure title and email are not empty
          alert('name and email cannot be empty.')
          return
        }

        // Create a new data object for the new article
        const newUsers = {
          id: this.usersData.length + 1,
          name,
          email,
          roles,
          // Add other properties for the new article
        }

        // Push the new data to the artikelData array
        this.usersData.push(newUsers)

        // Reset the input values and flags
        this.inputValue = { name: '', email: '', roles: '' }
        this.isCreate = false
        this.isEdit = false
      }
      this.isEdit = false
      this.isCreate = false
    },
    handleRemove(id) {
      this.usersData = this.usersData.filter((item) => item.id !== id)
    },
  },
  components: { UpdateUsers },
}
</script>
<template>
  <div class="min-h-screen mt-5">
    <div class="mx-10 px-2 py-2">
      <div class="flex justify-between items-center">
          <h1 class="text-xl font-bold">User Management</h1>
          <button @click="handleCreate" class=" bg-red-700 text-white p-2 text-sm flex items-center gap-2 rounded-lg"> Tambah Data <span class="material-icons justify-center items-center">
          add_circle
</span></button>
          
        </div>
        <div v-if="isEdit || isCreate">
          <UpdateUsers 
          :usersEdit="usersEdit"
          :handleInputChange="handleInputChange"
          :inputValue="inputValue"
          :handleClose="handleClose"
          :handleSave="handleSave"
          />
        </div>
        <div class="overflow-hidden shadow-md sm:rounded-lg">
        <table class="table-auto w-full mt-5 text-sm text-left text-gray-900 dark:text-gray-900">
          <thead class="text-xs text-gray-100 uppercase border-gray-300 dark:bg-red-500 dark:text-white">
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
                v-for="(item, index) in usersData"
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
                  {{ item.name }}
                </td>
                <td class="px-6 py-4">
                  {{ item.email }}
                </td>
                <td class="px-6 py-4">
                  {{ item.roles }}
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