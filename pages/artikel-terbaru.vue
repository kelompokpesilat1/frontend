<script setup>
import { dummyArtikel } from '../utils/dummyData'
</script>

<template>
  <div class="container mx-auto my-10">
    <section class="flex items-center justify-between h-[75px]">
      <nuxt-link to="/artikel-terbaru"
        ><button class="text-red-600">Kembali</button></nuxt-link
      >
      <button class="text-gray-800">Detail Artikel</button>
    </section>

    <section>
      <div
        class="artikel-container grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5"
      >
        <ArtikelCard
          v-for="artikel in dummyArtikel"
          :key="artikel.id"
          a
          :artikel="artikel"
        />
        <ArtikelCard
          v-for="artikel in dummyArtikel"
          :key="artikel.id"
          a
          :artikel="artikel"
        />
        <ArtikelCard
          v-for="artikel in dummyArtikel"
          :key="artikel.id"
          a
          :artikel="artikel"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
