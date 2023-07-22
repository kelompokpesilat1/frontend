<script>
export default {
  props: ['label', 'icon', 'variant'],
  computed: {
    color() {
      switch (this.variant) {
        case 'primary':
          return 'bg-blue-600'
        case 'secondary':
          return 'bg-gray-600'
        case 'success':
          return 'bg-green-600'
        case 'danger':
          return 'bg-red-600'
      }
    },
  },
}
</script>

<template>
  <button
    class="flex items-center justify-center text-white gap-3 p-3 rounded-lg hover:opacity-90"
    :class="color"
  >
    {{ label }}
    <span v-if="icon" class="material-icons">{{ icon }} </span>
  </button>
</template>
