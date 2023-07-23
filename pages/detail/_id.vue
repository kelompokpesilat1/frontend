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
    <!-- <Navigation /> -->

    <div class="max-w-3xl mx-auto flex flex-col gap-10 my-10">
      <div>
        <p class="uppercase font-semibold text-red-600">
          {{ artikel.kategori }}
        </p>
        <h1 class="text-4xl font-bold mb-4 mt-2">{{ artikel.title }}</h1>
        <div>
          <h3 class="font-semibold">{{ artikel.author }}</h3>
          <p>{{ artikel.date }}</p>
        </div>
      </div>

      <img
        :src="artikel.cover"
        alt="Deskripsi Gambar"
        class="w-full object-cover shadow-md"
      />
      <div class="flex flex-col gap-6">
        <p class="text-lg text-gray-700 leading-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
          sem vel tristique tristique. Integer nec volutpat elit, at dignissim
          nulla. Sed sed magna eget sapien dapibus tempus at vel nulla. Quisque
          cursus odio elit, id tincidunt nulla tempor sit amet. Vestibulum eget
          est eget odio convallis fermentum. Integer lacinia lacus nec leo
          feugiat, quis hendrerit quam finibus.
        </p>
        <p class="text-lg text-gray-700 leading-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
          sem vel tristique tristique. Integer nec volutpat elit, at dignissim
          nulla. Sed sed magna eget sapien dapibus tempus at vel nulla. Quisque
          cursus odio elit, id tincidunt nulla tempor sit amet. Vestibulum eget
          est eget odio convallis fermentum. Integer lacinia lacus nec leo
          feugiat, quis hendrerit quam finibus.
        </p>
        <p class="text-lg text-gray-700 leading-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
          sem vel tristique tristique. Integer nec volutpat elit, at dignissim
          nulla. Sed sed magna eget sapien dapibus tempus at vel nulla. Quisque
          cursus odio elit, id tincidunt nulla tempor sit amet. Vestibulum eget
          est eget odio convallis fermentum. Integer lacinia lacus nec leo
          feugiat, quis hendrerit quam finibus.
        </p>

        <p class="text-lg text-gray-700 leading-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
          sem vel tristique tristique. Integer nec volutpat elit, at dignissim
          nulla. Sed sed magna eget sapien dapibus tempus at vel nulla. Quisque
          cursus odio elit, id tincidunt nulla tempor sit amet. Vestibulum eget
          est eget odio convallis fermentum. Integer lacinia lacus nec leo
          feugiat, quis hendrerit quam finibus.
        </p>
        <p class="text-lg text-gray-700 leading-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
          sem vel tristique tristique. Integer nec volutpat elit, at dignissim
          nulla. Sed sed magna eget sapien dapibus tempus at vel nulla. Quisque
          cursus odio elit, id tincidunt nulla tempor sit amet. Vestibulum eget
          est eget odio convallis fermentum. Integer lacinia lacus nec leo
          feugiat, quis hendrerit quam finibus.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
