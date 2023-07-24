<script>
import { dummyArticles, dummyVisitors } from '@/utils/dummyData'
import CartsLine from '@/components/Carts/Line.vue'
import CartsBar from '@/components/Carts/Bar.vue'
import DoughnutChart from '@/components/Carts/Dought.vue'
export default {
  layout: 'dashboard',
  components: {
    CartsLine,
    CartsBar,
    DoughnutChart,
  },
  data() {
    return {
      dataCartLine: dummyVisitors,
      dataCartBar: dummyArticles,
      dataCartsDought: dummyArticles,
    }
  },
  created() {},
}
</script>

<template>
  <div>
    <section class="grid grid-cols-3 gap-4 m-4">
      <div class="col-span-2">
        <CardsDashbord>
          <h1>Statistik Pengunjung Artikel</h1>
          <CartsLine :DataCarts="dataCartLine" />
        </CardsDashbord>
      </div>
      <div>
        <CardsDashbord>
          <h5>Artikel Populer</h5>
          <CartsBar :BarData="dataCartBar" />
        </CardsDashbord>
      </div>

      <div class="col-span-2">
        <CardsDashbord>COMINGSOOON</CardsDashbord>
      </div>
      <div>
        <CardsDashbord>
          <h1>Grafik Artikel Perkategori</h1>
          <!-- <DoughnutChart :DoughtCarts="dataCartsDought" /> -->
        </CardsDashbord>
      </div>
      <div><CardsDashbord>COMINGSOON</CardsDashbord></div>
      <div><CardsDashbord>COMINGSOON</CardsDashbord></div>
      <div><CardsDashbord>COMINGSOON</CardsDashbord></div>
    </section>
  </div>
</template>
