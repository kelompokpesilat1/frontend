<script>
import {
  dummyTrendingArticles,
  dummyVisitorArticleData,
} from '~/utils/dummyData'
export default {
  layout: 'dashboard',
  data() {
    return {
      pengunjungArtikel: dummyVisitorArticleData,
      populerArtikel: dummyTrendingArticles,
    }
  },
}
</script>

<template>
  <div>
    <FontHeading class="p-2 mt-3"> Dashboard </FontHeading>
    <section class="grid grid-cols-3 gap-4 m-4">
      <div class="col-span-2">
        <CardsDashbord>
          <h1>Statistik Pengunjung Artikel</h1>
          <ChartPengunjung
            :chartData="dummyVisitorArticleData"
            :chartOption="chartOption"
          />
        </CardsDashbord>
      </div>
      <div>
        <CardsDashbord>
          <h1>Artikel Populer</h1>
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
