<script>
export default {
  methods: {
    showSuccessNotification() {
      this.$toast.success('This is a success notification.')
    },
  },
}
</script>

<template>
  <div>
    <button @click="showSuccessNotification">Tes</button>
  </div>
</template>
