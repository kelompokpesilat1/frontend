<script>
import { dummyVisitors } from '@/utils/dummyData'
import CartsLine from '@/components/Carts/Line.vue'

export default {
  layout: 'dashboard-remake',
  components: {
    CartsLine,
  },
  data() {
    return {
      dataCartLine: dummyVisitors,
    }
  },
  created() {},
}
</script>

<template>
  <div>
    <section class="grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <CardsDashbord>
          <h1>Statistik Pengunjung Artikel</h1>
          <CartsLine :DataCarts="dataCartLine" />
        </CardsDashbord>
      </div>
      <div>
        <CardsDashbord>
          <h1 class="text-2xl font-bold">Artikel Populer</h1>
          <hr />
          <ArtikelPopuler class="mt-5" />
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
