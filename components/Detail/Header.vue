<script>
export default {
  props: ['kategori', 'title', 'author', 'date'],
}
</script>

<template>
  <div class="max-w-[800px]">
    <p class="text-xl capitalize text-red-600 font-semibold">{{ kategori }}</p>
    <h2 class="text-[42px] leading-[50px] font-bold">{{ title }}</h2>
    <LayoutFlexRow class="gap-4 mt-5">
      <div>
        <h1>{{ author }}</h1>
        <p class="text-gray-400">{{ date }}</p>
      </div>
    </LayoutFlexRow>
  </div>
</template>
