<script>
export default {
  props: ['placeholder'],
}
</script>

<template>
  <input
    type="text"
    :placeholder="placeholder"
    class="w-full py-2 px-4 mb-5 border-gray-500"
  />
</template>
