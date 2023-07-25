<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
  >
    <div class="bg-white rounded-lg shadow-lg p-6 w-[600px] h-[550px]">
      <h2 class="text-xl font-semibold mb-4">Edit Form</h2>
      <div>
        <label class="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          type="text"
          placeholder="title"
          @change="(event) => handleInputChange(event, 'title')"
          v-model="inputValue.title"
          class="w-full border py-2 px-4 bg-white"
        />

        <div class="mt-4">
          <label class="block text-gray-700 font-semibold mb-2">Konten</label>
        </div>

        <div class="mt-4">
          <label class="block text-gray-700 font-semibold mb-2">Kategori</label>
          <select
            class="w-full border py-2 px-4 bg-white"
            id="kategori"
            v-model="inputValue.kategori"
          >
            <option
              v-for="kategori of kategoriOptions"
              :key="kategori"
              value="kategori"
            >
              {{ kategori }}
            </option>
          </select>
          <div class="mt-4">
            <label class="block text-gray-700 font-semibold mb-2"
              >Penulis</label
            >
            <input
              type="text"
              placeholder="Penulis"
              @change="(event) => handleInputChange(event, 'author')"
              v-model="inputValue.author"
              class="w-full border py-2 px-4 bg-white"
            />
          </div>
          <div class="mt-4">
            <label class="block text-gray-700 font-semibold mb-2"
              >Tanggal Publish</label
            >
            <input
              type="text"
              placeholder="27 juni 2022"
              @change="(event) => handleInputChange(event, 'date')"
              v-model="inputValue.date"
              class="w-full border py-2 px-4 bg-white"
            />
          </div>
          <div class="mt-6 flex justify-end">
            <button
              @click="handleClose"
              class="px-4 py-2 mr-2 rounded text-white bg-gray-500"
            >
              Cancel
            </button>
            <button
              @click="handleSave"
              class="px-4 py-2 rounded text-white bg-blue-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {kategoriOptions} from "@/utils/dummyData"
export default {
  data() {
    return {
      kategoriOptions: ['Gaming', 'Olahraga', 'Seni', 'Politik', 'Teknologi'],
    }
  },

  props: {
    showForm: {
      type: Boolean,
      required: true,
    },
    artikelEdit: {
      type: Object,
      required: true,
    },
    handleInputChange: {
      type: Function,
      required: true,
    },
    inputValue: {
      type: Object,
      required: true,
    },
    handleClose: {
      type: Function,
      required: true,
    },
    handleSave: {
      type: Function,
      required: true,
    },
  },
  mounted() {
    console.log(this.kategoriOptions)
  },
}
</script>
