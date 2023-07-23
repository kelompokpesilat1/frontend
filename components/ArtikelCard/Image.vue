<script>
export default {
  props: ['cover'],
}
</script>

<template>
  <div class="image-wrapper overflow-hidden border">
    <img
      :src="cover"
      alt="cover artikel"
      class="group-hover:scale-105 transition-transform"
      width="100%"
    />
  </div>
</template>
