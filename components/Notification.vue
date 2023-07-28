<script>
export default {
  methods: {
    showSuccessNotification() {
      this.$toast.success('This is a success notification.')
    },

    showErrorNotification() {
      this.$toast.error('This is an error notification.')
    },

    showCustomNotification() {
      this.$toast.info('This is a custom notification.', {
        timeout: 5000, // Custom timeout for this notification
        position: 'bottom-center', // Custom position for this notification
        showCloseButton: false, // Hide the close button for this notification
      })
    },
  },
}
</script>

<template>
  <div>
    <button @click="showSuccessNotification">Submit</button>
    <button @click="showErrorNotification">Submit</button>
  </div>
</template>
