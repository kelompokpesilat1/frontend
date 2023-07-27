<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: '',
      content: '',
      desc: '', // Add desc data property
      penulis: '',
    }
  },
  head() {
    return {
      title: this.title, // Set the page title dynamically from the data property
      meta: [
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
    async submitSEO() {
      // Prepare the SEO data to be sent to the server
      const seoData = {
        title: this.title,
        description: this.desc,
        keywords: this.keywords,
      }

      try {
        // Make an Axios POST request to send the SEO data to the server
        const response = await axios.post('/article/:id/seo', seoData)
        // Optionally, you can show a success message to the user
        alert('SEO settings updated successfully!')
        // Clear the form fields
        this.title = ''
        this.desc = ''
        this.keywords = ''
      } catch (error) {
        // Handle any errors that occur during the request
        console.error(error)
        // Optionally, you can show an error message to the user
        alert('An error occurred while updating SEO settings.')
      }
    },
    async updateSEO() {
      // ... Your existing updateSEO method ...
    },
    showData() {
      console.log(this.content)
    },
    submit() {
      this.updateSEO() // Call the updateSEO method when the Submit SEO button is clicked
    },
    async fetchSEOSettings() {
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

    <div class="mt-20">
      <h1 class="text-4xl font-bold mb-4 mt-2">{{ title }}</h1>
      <div v-html="content" class="text-lg text-gray-700 leading-[32px]"></div>
    </div>
  </div>
</template>
