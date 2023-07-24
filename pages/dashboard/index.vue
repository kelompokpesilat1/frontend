<script>
import { dummyArticles, dummyVisitors } from '@/utils/dummyData'
import CartsLine from '@/components/Carts/Line.vue'
import CartsBar from '@/components/Carts/Bar.vue'
export default {
  layout: 'dashboard',
  components: {
    CartsLine,
    CartsBar,
  },
  data() {
    return {
      dataCartLine: dummyVisitors,
      dataCartBar: dummyArticles,
    }
  },
  created() {},
}
</script>

<template>
  <div>
    <h1 class="p-5 text-4xl font-bold text-center">Dashboard</h1>
    <section class="grid grid-cols-3 gap-4 m-4">
      <div class="col-span-2">
        <CardsDashbord>
          <h1>Statistik Pengunjung Artikel</h1>
          <CartsLine :DataCarts="dataCartLine" />
        </CardsDashbord>
      </div>
      <div>
        <CardsDashbord>
          <h5 class="font-bold">Artikel Populer</h5>
          <hr />
          <!-- <ArtikelPopuler class="mt-5" /> -->
          <CartsBar :BarData="dataCartBar" />
        </CardsDashbord>
      </div>

      <div class="col-span-2">
        <CardsDashbord>03</CardsDashbord>
      </div>
      <div>
        <CardsDashbord>
          <h1>Grafik Artikel Perkategori</h1>
        </CardsDashbord>
      </div>
      <div><CardsDashbord>05</CardsDashbord></div>
      <div><CardsDashbord>06</CardsDashbord></div>
      <div><CardsDashbord>07</CardsDashbord></div>
    </section>
  </div>
</template>
