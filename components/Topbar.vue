<script>
export default {
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
  <section
    class="flex py-2 px-4 bg-[#cd1867] text-white justify-between items-center"
  >
    <div class="flex gap-4 items-center">
      <h1>Selamat Datang {{ dataUser.username }}</h1>
    </div>
    <div class="flex gap-4 items-center justify-end">
      <span class="material-icons-round">notifications_active</span>

      <div
        class="bg-white shadow-md rounded-lg p-2 text-black flex gap-2 items-center cursor-pointer"
        @click="onLogout"
      >
        Logout
      </div>
    </div>
  </section>
</template>
