<script setup>
const category = ['olahraga', 'seni', 'gaming', 'edukasi']
</script>

<template>
  <nav class="bg-[#26282A] h-[75px]">
    <div class="container mx-auto h-full flex items-center justify-between">
      <h1 class="logo text-2xl text-red-600 font-bold">
        <nuxt-link to="/">RagamArtikel</nuxt-link>
      </h1>
      <ul class="flex item-center gap-5">
        <li
          v-for="value in category"
          :key="value"
          class="text-white capitalize"
        >
          <nuxt-link :to="`/kategori/${value}`">{{ value }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
