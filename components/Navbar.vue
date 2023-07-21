<script setup>
const category = ['olahraga', 'seni', 'gaming', 'edukasi']
</script>

<template>
  <nav class="bg-[#26282A] h-[75px]">
    <Container>
      <LayoutFlexRow class="justify-between h-full relative">
        <LayoutFlexRow class="gap-4">
          <h1 class="logo text-2xl text-red-600 font-bold">
            <nuxt-link to="/">RagamArtikel</nuxt-link>
          </h1>
          <div class="flex items-center border w-[600px]">
            <span class="material-icons md-48 text-white px-2"> search </span>
            <input
              type="text"
              placeholder="Cari Artikel..."
              class="bg-transparent py-2 px-4 text-white outline-none w-full"
            />
          </div>
        </LayoutFlexRow>

        <LayoutFlexRow class="gap-4">
          <ul class="flex item-center gap-3">
            <li
              v-for="value in category"
              :key="value"
              class="text-white capitalize"
            >
              <nuxt-link :to="`/${value}`">{{ value }}</nuxt-link>
            </li>
          </ul>
          <span class="material-icons md-48 text-white"> account_circle </span>
        </LayoutFlexRow>
      </LayoutFlexRow>
    </Container>
  </nav>
</template>

<style scoped>
.nuxt-link-active {
  @apply text-red-600;
}
</style>
