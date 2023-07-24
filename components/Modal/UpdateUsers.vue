<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-slate-200 rounded-lg shadow-lg p-6 w-96">
      <h2 class="text-xl font-semibold mb-4">Edit Form</h2>
      <div>
        <label class="block text-gray-700 font-semibold mb-2">Name</label>
        <input type="text" placeholder="title" @change="event => handleInputChange(event, 'title')" v-model="inputValue.nama" class="w-full"/>
      <div class="mt-4">
        <label class="block text-gray-700 font-semibold mb-2">Email</label>
        <input type="text" placeholder="kategori" @change="event => handleInputChange(event, 'kategori')" v-model="inputValue.email"/>
        <select> <option v-for="kategori of kategoriOptions" :key="kategori" value="kategori">kategori</option></select>
        <label class="block text-gray-700 font-semibold mb-2">Roles</label>
        <input type="text" placeholder="Roles" @change="event => handleInputChange(event, 'roles')" v-model="inputValue.roles"/>
        
      <div class="mt-6 flex justify-end">
        <button @click="handleClose" class="px-4 py-2 mr-2 rounded text-white bg-gray-500">Cancel</button>
        <button @click="handleSave" class="px-4 py-2 rounded text-white bg-blue-500">Save</button>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    usersEdit: {
      type: Object,
      required: true,
    },
    handleInputChange : {
      type: Function,
      required: true,
    },
    inputValue : {
      type: Object,
      required: true,
    },
    handleClose: {
      type: Function,
      required: true,
    },
    handleSave : {
      type: Function,
      required: true,
    }
  }
}
  
</script>