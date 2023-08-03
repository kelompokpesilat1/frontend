<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">{{ text }}</h2>
      <div class="grid grid-cols-2 gap-5 mt-10">
        <button class="btn btn-success" @click="$emit('confirm')">Yes</button>
        <button class="btn btn-danger" @click="$emit('close')">No</button>
      </div>
    </div>
  </div>
</template>

<!-- <style scoped>
/* Styling modal backdrop */
:host {
  z-index: 9999;
}
</style> -->
