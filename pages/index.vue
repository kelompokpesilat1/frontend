<script>
import { dummyArtikel } from '@/utils/dummyData'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      artikelData: dummyArtikel,
    }
  },
  method: {
    ...mapActions(['setUser']),
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),

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
  async asyncData({ $axios, $auth, store }) {
    try {
      // Ambil token dari Nuxt Auth
      const token = $auth.strategy.token.get()

      // Lakukan permintaan dengan token sebagai header
      const response = await $axios.$get('/userByAuth', {
        headers: {
          Authorization: `Bearer ${token}`,
          // Tambahan headers lainnya...
        },
      })

      console.log(response.data)
      store.dispatch('setUser', response.data)
    } catch (error) {
      console.error('Error fetching user data:', error)
      return { userData: null }
    }
  },
}
</script>

<template>
  <div class="flex flex-col gap-20 pb-10">
    <HeroSection />

    <section class="px-8 md:px-16">
      <h1 class="font-bold text-red-600 text-2xl mb-10">Informasi Penting</h1>
      <ArticleWrapperTwo>
        <ArticleCardTwo
          v-for="article in artikelTerbaru"
          :article="article"
          :key="article.id"
        />
      </ArticleWrapperTwo>
    </section>
    <section class="px-8 md:px-16">
      <h1 class="font-bold text-red-600 text-2xl mb-10">Artikel Terbaru</h1>
      <ArticleWrapper>
        <ArticleCard
          v-for="article in artikelTerbaru"
          :article="article"
          :key="article.id"
        />
      </ArticleWrapper>
    </section>
  </div>
</template>
