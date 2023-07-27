<script>
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
      title: '',
      content: '',
      penulis: '',
      published: '',
    }
  },
  methods: {
    showData() {
      console.log(this.content)
    },
    submit() {
      this.$emit('onSubmit')
    },
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<template>
  <div>
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
            id="countries"
            class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Pilih Kategori</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <button
          @click="submit"
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
