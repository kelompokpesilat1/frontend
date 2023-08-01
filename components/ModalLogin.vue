<script>
import { mapActions, mapState } from 'vuex'

export default {
  layout: 'empty',
  data() {
    return {
      inputValue: {
        email: '',
        password: '',
      },
      messageErr: '',
    }
  },
  computed: {
    //add this function.
    ...mapState(['userData']),
  },
  methods: {
    ...mapActions(['setUser']),

    handleInputChange(event, type) {
      if (type === 'email') this.inputValue.email = event.target.value
      if (type === 'password') this.inputValue.password = event.target.value
    },

    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.inputValue,
          redirect: false,
        })

        // Show success notification after successful login
        this.$toast.success('Selamat, anda sukses login.')
        this.$emit('onClose')
      } catch (e) {
        this.messageErr = e.response.data.errors
        this.$toast.error(this.messageErr)
      }
      //   this.$emit('onClose')
    },

    handleFocus() {
      if (this.messageErr !== '') this.messageErr = ''
    },
  },
}
</script>

<template>
  <div
    class="modal fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="modal-content bg-white p-9 w-[700px] rounded-md shadow-lg">
      <div class="flex justify-end">
        <span class="material-icons cursor-pointer" @click="$emit('onClose')"
          >close</span
        >
      </div>
      <h2 class="text-[32px] font-bold mb-4">Login</h2>
      <form @submit.prevent="login">
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
            v-model="inputValue.email"
            @change="(event) => handleInputChange(event, 'email')"
            @focus="handleFocus"
          />
        </div>
        <div class="mb-4">
          <label for="password">
            <h1 class="text-sm font-semibold mb-2">Password</h1></label
          >
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
        <div class="flex items-center justify-between">
          <nuxt-link to="/auth/register" class="text-blue-700 hover:underline"
            >Belum punya akun ? Daftar disini</nuxt-link
          >
          <button type="submit" class="btn btn-info">
            Masuk<span class="material-icons"> login </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
