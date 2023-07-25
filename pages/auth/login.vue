<script>
export default {
  layout: 'empty',
  data() {
    return {
      inputValue: {
        email: '',
        password: '',
      },
      user: {},
      messageErr: '',
    }
  },
  computed: {
    //add this function.
  },
  methods: {
    handleInputChange(event, type) {
      if (type === 'email') this.inputValue.email = event.target.value
      if (type === 'password') this.inputValue.password = event.target.value
    },

    async handleLogin() {},

    handleFocus() {
      if (this.messageErr !== '') this.messageErr = ''
    },
  },
}
</script>

<template>
  <div
    class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="modal-content bg-white p-9 w-[700px] rounded-md shadow-lg">
      <div class="flex justify-end">
        <nuxt-link to="/">
          <span class="material-icons cursor-pointer">close</span>
        </nuxt-link>
      </div>
      <h2 class="text-[32px] font-bold mb-4">Masuk dulu gais</h2>
      <h3 v-if="messageErr !== ''">{{ messageErr }}</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <input
            type="email"
            id="email"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="Email"
            v-model="inputValue.email"
            @change="(event) => handleInputChange(event, 'email')"
            @focus="handleFocus"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="Password"
            v-model="inputValue.password"
            @change="(event) => handleInputChange(event, 'password')"
            @focus="handleFocus"
          />
        </div>
        <div class="flex justify-between">
          <nuxt-link to="/auth/register" class="text-blue-700"
            >Belum punya akun ?</nuxt-link
          >
          <button type="submit" class="text-black font-bold px-4 py-2 rounded">
            Masuk
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
