<script>
export default {
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
        @click="submit"
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
