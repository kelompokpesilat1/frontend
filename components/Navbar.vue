<script>
export default {
  data() {
    return {
      category: ['olahraga', 'seni', 'gaming', 'edukasi'],
      dropdownActive: false,
    }
  },
  mounted() {
    console.log($nuxt)
  },
}
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
              class="text-white capitalize hover:text-red-600"
            >
              <nuxt-link :to="`/kategori/${value}`">{{ value }}</nuxt-link>
            </li>
          </ul>
          <span
            class="material-icons md-48 text-white cursor-pointer"
            @click="dropdownActive = !dropdownActive"
          >
            account_circle
          </span>
        </LayoutFlexRow>
        <ul
          class="bg-[#26282A] absolute right-0 top-full scale-0 overflow-hidden transition-transform"
          :class="{ 'scale-100': dropdownActive }"
        >
          <li class="py-2 px-8 hover:bg-gray-800 cursor-pointer">
            <nuxt-link to="/auth/login">
              <ButtonGreen>Login</ButtonGreen>
            </nuxt-link>
          </li>
          <li class="py-2 px-4 hover:bg-gray-800 cursor-pointer">
            <nuxt-link to="/auth/register">
              <ButtonBlue>Register</ButtonBlue>
            </nuxt-link>
          </li>
        </ul>
      </LayoutFlexRow>
    </Container>
  </nav>
</template>

<style scoped>
.nuxt-link-active {
  @apply text-red-600;
}
</style>
