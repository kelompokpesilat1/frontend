<script setup>
import { dummyArtikel } from '../utils/dummyData'
</script>

<template>
  <div>
    <Navigation />
    <Container>
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
        </div>
      </section>
    </Container>
  </div>
</template>

<style lang="scss" scoped></style>
