<script>
export default {
  props: ['image'],
}
</script>

<template>
  <div
    class="avatar flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-200"
  >
    <img v-if="image" :src="image" alt="" />
  </div>
</template>
