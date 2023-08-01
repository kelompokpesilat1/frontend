<script>
export default {
  data() {
    return {
      title: '',
      urlImg: '',
      desc: '', // Add desc data property
      keywords: '',
      imagePreview: null,
    }
  },
  methods: {
    getImg(event) {
      this.urlImg = event.target.files[0]
    },
    previewImage(event) {
      this.urlImg = event.target.files[0]
      const file = event.target.files[0]
      if (file) {
        // Buat objek FileReader untuk membaca file gambar
        const reader = new FileReader()

        // Ketika proses pembacaan selesai, set pratinjau gambar
        reader.onload = (e) => {
          this.imagePreview = e.target.result
        }

        // Membaca file gambar sebagai URL data
        reader.readAsDataURL(file)
      } else {
        this.imagePreview = null
      }
    },
    async submitSEO() {
      // Prepare the SEO data to be sent to the server
      const formData = new FormData()
      formData.append('logo', this.urlImg)
      formData.append('title', this.title)
      formData.append('desc', this.desc)
      formData.append('keywords', this.keywords)

      console.log(formData)
      try {
        // Make an Axios POST request to send the SEO data to the server
        const token = this.$auth.strategy.token.get()
        await this.$axios.put(`/updateseo/${1}`, formData, {
          headers: {
            Authorization: 'Bearer' + token,
            'Content-Type': 'multipart/form-data',
          },
        })

        // Optionally, you can show a success message to the user
        alert('SEO settings updated successfully!')
        // Clear the form fields
        this.title = ''
        this.desc = ''
        this.keywords = ''
        this.urlImg = ''

        location.reload()
      } catch (error) {
        alert('An error occurred while updating SEO settings.')
      }
    },
  },
  async fetch() {
    const response = await this.$axios.get('/seo')
    console.log(response.data)
    this.title = response.data.data[0].title
    this.desc = response.data.data[0].desc
    this.urlImg = response.data.data[0].logo
    this.keywords = response.data.data[0].keywords
  },
  computed: {
    logoUrl() {
      if (this.urlImg) {
        return 'http://localhost:8080/' + this.urlImg
      }
      return ''
    },
  },
}
</script>

<template>
  <div class="max-w-2xl mx-auto my-10">
    <h1 class="font-bold text-red-600 text-xl mb-10">SEO Setting</h1>

    <div class="flex flex-col gap-4">
      <div>
        <label for="title">
          <h1 class="text-sm font-semibold mb-2">Site Title</h1></label
        >
        <input
          type="text"
          class="w-full border py-2 px-4 bg-white"
          id="title"
          placeholder="7 Keajaiban Dunia"
          v-model="title"
          required
        />
      </div>
      <div>
        <label for="desc">
          <h1 class="text-sm font-semibold mb-2">Site Description</h1></label
        >
        <textarea
          type="text"
          class="w-full border py-2 px-4 bg-white min-h-[200px]"
          id="desc"
          placeholder="7 Keajaiban Dunia yang tidak diketahui oleh orang banyak yang tidak disangka sangka ada di Indonesia"
          v-model="desc"
          required
        />
      </div>

      <div class="flex items-center gap-5">
        <label for="cover">
          <h1 class="text-sm font-semibold mb-2">Favicon</h1></label
        >
        <input
          type="file"
          class="w-full border py-2 px-4 bg-white"
          id="cover"
          @change="previewImage"
        />
        <img
          v-if="imagePreview"
          :src="imagePreview"
          alt="Image Preview"
          width="100px"
        />
        <img v-if="!imagePreview" :src="logoUrl" alt="favicon" width="100px" />
      </div>

      <div>
        <label for="keywords">
          <h1 class="text-sm font-semibold mb-2">Site Keywords</h1></label
        >
        <input
          type="text"
          class="w-full border py-2 px-4 bg-white"
          id="title"
          placeholder="fiksi, heboh, gempar, viral"
          v-model="keywords"
          required
        />
      </div>

      <button
        @click="submitSEO"
        class="py-2 px-4 border-2 w-full text-center text-white bg-red-600"
      >
        Submit SEO
      </button>
    </div>
  </div>
</template>
