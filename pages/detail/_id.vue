<script>
import { dummyArtikel } from '@/utils/dummyData'

export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    artikel() {
      return dummyArtikel.find((value) => value.id === this.id)
    },
  },
}
</script>

<template>
  <div>
    <Navigation />

    <Container>
      <div v-if="artikel" class="sm:px-6 lg:px-8 py-8">
        <div class="max-w-3xl mx-auto">
          <div class="mb-4">
            <span
              class="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold"
              >{{ artikel.kategori }}</span
            >
          </div>
          <h1 class="text-4xl font-bold mb-4">{{ artikel.title }}</h1>
          <p class="text-gray-600 text-sm mb-2">{{ artikel.date }}</p>
          <p class="text-gray-600 text-sm mb-4">By {{ artikel.author }}</p>
          <img
            :src="artikel.cover"
            alt="Cover Image"
            class="w-full h-48 object-cover mb-4"
          />
          <div v-html="artikel.content" class="prose"></div>
        </div>
        <div class="max-w-3xl mx-auto">
          <!-- Konten artikel sebelumnya -->
          <!-- ... -->

          <!-- Input komentar -->
          <div class="mt-8">
            <h2 class="text-2xl font-bold mb-4">Leave a Comment</h2>
            <textarea
              rows="4"
              placeholder="Write your comment here..."
              class="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
        <!-- List komentar -->
        <div class="max-w-3xl mx-auto mt-8">
          <h2 class="text-2xl font-bold mb-4">Comments</h2>
          <ul>
            <li class="border-b pb-2 mb-2">
              <p class="text-sm text-gray-600 font-semibold">
                Lorem ipsum dolor
              </p>
              <p class="text-sm text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quo quasi praesentium a. Temporibus et sint sed, dicta
                ullam sit!
              </p>
            </li>
            <li class="border-b pb-2 mb-2">
              <p class="text-sm text-gray-600 font-semibold">
                Lorem ipsum dolor
              </p>
              <p class="text-sm text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quo quasi praesentium a. Temporibus et sint sed, dicta
                ullam sit!
              </p>
            </li>
            <li class="border-b pb-2 mb-2">
              <p class="text-sm text-gray-600 font-semibold">
                Lorem ipsum dolor
              </p>
              <p class="text-sm text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus quo quasi praesentium a. Temporibus et sint sed, dicta
                ullam sit!
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div v-else>
        <h1>Artikel tidak ditemukan</h1>
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
