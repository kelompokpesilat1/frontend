<script>
export default {
  props: ['cover'],
}
</script>

<template>
  <div class="max-w-[1000px]">
    <img :src="cover" alt="cover artikel" width="100%" />
  </div>
</template>
