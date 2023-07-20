<script setup>
import { dummyArtikel } from '../utils/dummyData'
</script>

<template>
  <div>
    <Container class="flex flex-col gap-10 my-10">
      <section>
        <h1 class="text-xl font-bold">Informasi Penting</h1>
        <div
          class="artikel-container grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5"
        >
          <ArtikelCard
            v-for="artikel in dummyArtikel"
            :key="artikel.id"
            a
            :artikel="artikel"
          />
        </div>
      </section>

      <section>
        <h1 class="text-xl font-bold">Artikel Terbaru</h1>
        <div
          class="artikel-container grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5"
        >
          <ArtikelCard
            v-for="artikel in dummyArtikel"
            :key="artikel.id"
            a
            :artikel="artikel"
          />
        </div>
        <div class="text-end">
          <nuxt-link to="/artikel-terbaru"
            ><button
              class="text-red-600 font-semibold hover:underline transition-all"
            >
              Lebih banyak
            </button></nuxt-link
          >
        </div>
      </section>
      <!-- <Modal />      -->
    </Container>
  </div>
</template>
