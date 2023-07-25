<script>
import Avatar from '@/components/Avatar.vue'

export default {
  components: {
    Avatar,
  },
  props: {
    userProps: {
      type: Object,
      required: true,
    },
    onLogout: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isLogin: false,
      dataUser: {},
    }
  },
  methods: {},
  created() {
    this.dataUser = this.userProps
  },
}
</script>

<template>
  <nav class="bg-white border p-4 sticky w-full top-0 z-3">
    <div class="flex items-center justify-between">
      <a href="/" class="text-red-600 text-2xl font-bold">RagamArtikel</a>

      <div class="flex gap-3">
        <div class="hidden md:flex space-x-4">
          <Avatar :name="dataUser.username" />
        </div>

        <div
          class="bg-white shadow-md rounded-lg p-2 text-black cursor-pointer"
          @click="onLogout"
        >
          Logout
        </div>
      </div>
    </div>
  </nav>
</template>
