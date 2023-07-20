<script setup>
const { artikel } = defineProps(['artikel'])
</script>

<template>
  <div class="group shadow-md cursor-pointer">
    <nuxt-link :to="`/detail/${artikel.id}`"
      ><div class="image-wrapper h-[200px] overflow-hidden">
        <img
          :src="artikel.cover"
          alt="cover artikel"
          class="group-hover:scale-105 transition-transform"
          width="100%"
        />
      </div>

      <div class="card-body py-8 px-5">
        <h3
          class="text-red-600 group-hover:text-black font-semibold transition-all"
        >
          {{ artikel.kategori }}
        </h3>
        <h1 class="mt-1 mb-3 group-hover:text-red-600 transition-all">
          {{ artikel.title }}
        </h1>
        <!-- <p class="max-h-20 overflow-hidden">{{ artikel.content }}</p> -->
      </div></nuxt-link
    >
  </div>
</template>

<style scoped></style>
