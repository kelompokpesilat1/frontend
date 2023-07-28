<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      desc: '', // Add desc data property
      penulis: '',
      urlImg: '',
    }
  },
  head() {
    return {
      title: this.title, // Set the page title dynamically from the data property
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          href: 'http://localhost:8080/' + this.urlImg,
        },
      ],
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: this.desc, // Set the meta description dynamically from the data property
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.penulis, // Set the meta keywords dynamically from the data property
        },
        // Add other meta tags as needed
      ],
    }
  },
  methods: {
    // getImg(event) {
    //   const file = event.target.files[0]
    //   this.urlImg = file
    //   // this.createBase64Image(file)
    // },
    // createBase64Image(fileObject) {
    //   const render = new FileReader()

    //   render.onload = (e) => {
    //     this.urlImg = e.target.result
    //   }
    //   render.readAsBinaryString(fileObject)
    // },
    getImg(event) {
      this.urlImg = event.target.files[0]
    },
    async submitSEO() {
      // Prepare the SEO data to be sent to the server
      const formData = new FormData()
      formData.append('logo', this.urlImg)
      formData.append('title', this.title)
      formData.append('desc', this.desc)
      formData.append('keywords', this.penulis)

      try {
        // Make an Axios POST request to send the SEO data to the server
        const token = this.$auth.strategy.token.get()
        const response = await this.$axios.put(`/updateseo/${1}`, formData, {
          headers: {
            Authorization: 'Bearer' + token,
            'Content-Type': 'multipart/form-data',
          },
        })
        console.log('-->', response)
        // Optionally, you can show a success message to the user
        alert('SEO settings updated successfully!')
        // Clear the form fields
        this.title = ''
        this.desc = ''
        this.keywords = ''
        this.penulis = ''
        this.urlImg = ''

        location.reload()
      } catch (error) {
        // Handle any errors that occur during the request
        console.error(error)
        // Optionally, you can show an error message to the user
        alert('An error occurred while updating SEO settings.')
      }
    },

    async fetchSEOSettings() {
      const token = this.$auth.strategy.token.get()
      console.log('-->', token)
      await this.$axios
        .get('/seo', {
          headers: {
            Authorization: 'Bearer' + token,
          },
        })
        .then((res) => {
          const data = res.data.data
          this.title = data[0].title
          this.desc = data[0].desc
          this.penulis = data[0].keywords
          this.content = data[0].keywords
          this.urlImg = data[0].logo

          console.log('-->', data[0].logo)
        })
      // ... Your existing fetchSEOSettings method ...
    },
  },
  mounted() {
    // Fetch the initial SEO settings when the component is mounted
    this.fetchSEOSettings()
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
        <label for="title">
          <h1 class="text-sm font-semibold mb-2">Site Description</h1></label
        >
        <input
          type="text"
          class="w-full border py-2 px-4 bg-white"
          id="title"
          placeholder="7 Keajaiban Dunia yang tidak diketahui oleh orang banyak yang tidak disangka sangka ada di Indonesia"
          v-model="desc"
          required
        />
      </div>

      <div>
        <label for="cover">
          <h1 class="text-sm font-semibold mb-2">Site Logo</h1></label
        >
        <input
          type="file"
          class="w-full border py-2 px-4 bg-white"
          id="cover"
          @change="getImg"
        />
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
          v-model="penulis"
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
