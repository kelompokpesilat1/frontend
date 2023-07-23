<script>
export default {
  props: ['label', 'icon', 'variant', 'text'],
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
        case 'save':
          return 'bg-white'
      }
    },
  },
}
</script>

<template>
  <button
    class="flex items-center justify-center gap-3 py-2 px-4 font-semibold rounded-lg hover:opacity-90"
    :class="[`${color}`, `text-${text}`]"
  >
    {{ label }}
    <span v-if="icon" class="material-icons">{{ icon }} </span>
  </button>
</template>
