<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      roles: '',
      foto: '',
    }
  },
  methods: {
    showData() {
      console.log(this.content)
    },
    submit() {
      this.$emit('onSubmit')
      console.log('-->')
    },
  },
}
</script>

<template>
  <div class="max-w-2xl mx-auto my-10">
    <h1 class="font-bold text-red-600 text-xl mb-10">Menambah User</h1>

    <div>
      <label for="cover">
        <h1 class="text-sm font-semibold mb-2">Upload Foto</h1></label
      >
      <input type="file" class="w-full border py-2 px-4 bg-white" id="cover" />
    </div>

    <div class="flex flex-col gap-4 mt-4">
      <div>
        <label for="nama">
          <h1 class="text-sm font-semibold mb-2">Nama User</h1></label
        >
        <input
          type="text"
          class="w-full border py-2 px-4 bg-white"
          placeholder="Nama"
          v-model="nama"
          required
        />
      </div>

      <div>
        <label for="email">
          <h1 class="text-sm font-semibold mb-2">Email</h1></label
        >
        <input
          type="email"
          class="w-full border py-2 px-4 bg-white"
          placeholder="Email"
          v-model="email"
          required
        />
      </div>
      <div>
        <label for="roles" class="block mb-2 text-sm font-medium text-gray-900"
          >Pilih Roles</label
        >
        <select
          class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>Pilih Roles</option>
          <option value="admin">Admin</option>
          <option value="author">Author</option>
          <option value="user">User</option>
        </select>
      </div>

      <button @click="submit" class="py-2 px-4 border-2 w-full text-center">
        Submit Artikel
      </button>
    </div>

    <div class="mt-20">
      <h1 class="text-4xl font-bold mb-4 mt-2">{{ title }}</h1>
      <div v-html="content" class="text-lg text-gray-700 leading-[32px]"></div>
    </div>
  </div>
</template>
