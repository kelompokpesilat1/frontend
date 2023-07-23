<script>
import { dummyArtikel } from '@/utils/dummyData'

export default {
  data() {
    return {
      artikelData: dummyArtikel,
    }
  },
  computed: {
    artikelPenting() {
      return this.artikelData.filter((artikel) => artikel.penting).slice(0, 8)
    },
    artikelTerbaru() {
      const copiedData = this.artikelData.map((artikel) => ({
        ...artikel,
        date: new Date(artikel.date),
      }))

      // Lakukan sorting berdasarkan tanggal terbaru
      const sortedData = copiedData.sort((a, b) => b.date - a.date)

      const resultData = sortedData.map((artikel) => ({
        ...artikel,
        date: artikel.date.toLocaleDateString(),
      }))

      // Ambil 8 artikel terbaru
      const artikelTerbaru = resultData.slice(0, 8)

      return artikelTerbaru
    },
  },
}
</script>

<template>
  <div class="bg-gray-100">
    <!-- Header Section -->

    <!-- Hero Section -->

    <section
      class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-8 md:px-16"
    >
      <div class="container mx-auto grid md:grid-cols-2 gap-8">
        <!-- Cover Image -->
        <div class="flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Cosmos"
            class="w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <!-- Content -->
        <div>
          <!-- Title and Category -->
          <div class="text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold mb-2">
              Unraveling the Mysteries of the Cosmos
            </h1>
            <p class="text-xl font-semibold">Category: Space & Science</p>
          </div>

          <!-- Author and Date -->
          <div class="flex items-center justify-center md:justify-start mt-4">
            <img
              src="author.jpg"
              alt="Author"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p class="text-lg font-semibold">Written by John Smith</p>
              <p class="text-gray-400">Published on July 17, 2023</p>
            </div>
          </div>

          <!-- Content -->
          <div class="mt-8 md:mt-4 text-xl">
            <p>
              The cosmos has always held a sense of wonder and mystery for
              humanity. From the dazzling dance of stars in the night sky to the
              enigmatic black holes that lurk in the depths of space, the
              universe continues to fascinate and inspire us.
            </p>
            <!-- Add the rest of the content here -->
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 px-8 md:px-16">
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <!-- Artikel 1 -->
        <div
          v-for="artikel in artikelPenting"
          class="bg-white rounded-lg shadow-lg"
        >
          <img
            :src="artikel.cover"
            alt="Article 1"
            class="w-full h-48 object-cover rounded-t-lg"
          />
          <div class="p-6">
            <p class="text-blue-600 font-semibold">{{ artikel.kategori }}</p>
            <h2 class="text-2xl font-bold mt-2">
              {{ artikel.title }}
            </h2>
            <p class="text-gray-600 mt-2">
              {{ artikel.content }}
            </p>
            <div class="mt-4 flex items-center justify-between">
              <div class="flex items-center">
                <AvatarName name="Zul" />
                <p class="text-sm text-gray-600">{{ artikel.author }}</p>
              </div>
              <p class="text-sm text-gray-400">{{ artikel.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
