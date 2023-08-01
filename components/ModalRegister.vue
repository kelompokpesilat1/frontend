<script>
export default {
  layout: 'empty',
  data() {
    return {
      registerData: {
        name: '',
        email: '',
        password: '',
      },
      messageErr: '',
    }
  },
  methods: {
    async register() {
      try {
        const response = await this.$axios.post('/register', this.registerData)

        this.$emit('onRegister')
      } catch (error) {
        this.messageErr = error.response.data.errors
      }
    },
  },
  handleFocus() {
    if (this.messageErr !== '') this.messageErr = ''
  },
}
</script>

<template>
  <div
    class="modal fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="modal-content bg-white p-9 w-[700px] rounded-md shadow-lg">
      <div class="flex justify-end mb-2">
        <span class="material-icons cursor-pointer" @click="$emit('onClose')"
          >close</span
        >
      </div>
      <h2 class="text-[32px] font-bold mb-4">Daftar dulu ya</h2>
      <h3 v-if="messageErr !== ''" class="text-red-500 mb-2">
        {{ messageErr }}
      </h3>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label for="name">
            <h1 class="text-sm font-semibold mb-2">Username</h1></label
          >
          <input
            id="name"
            type="text"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="name"
            v-model="registerData.name"
          />
        </div>
        <div class="mb-4">
          <label for="email">
            <h1 class="text-sm font-semibold mb-2">Email</h1></label
          >
          <input
            type="email"
            id="email"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="Email"
            v-model="registerData.email"
          />
        </div>
        <div class="mb-4">
          <label for="password">
            <h1 class="text-sm font-semibold mb-2">Password</h1></label
          >
          <input
            type="password"
            id="password"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="Password"
            v-model="registerData.password"
          />
        </div>

        <div class="flex justify-between">
          <p class="text-blue-700">Sudah punya akun ?</p>
          <button type="submit" class="btn btn-success">Daftar</button>
        </div>
      </form>
    </div>
  </div>
</template>
