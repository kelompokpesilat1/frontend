<script>
export default {
  props: ['avatarName'],
}
</script>

<template>
  <div
    class="avatar flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-200"
  >
    <h1 class="text-2xl text-red-600 font-bold">{{ avatarName }}</h1>
  </div>
</template>
