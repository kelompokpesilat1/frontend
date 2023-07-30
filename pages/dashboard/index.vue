<script>
import {
  dummyArticles,
  dummyNewArticles,
  dummyVisitors,
  newArticles,
} from '@/utils/dummyData'
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
      dataCartLine: [],
      dataCartBar: dummyArticles,
      dataCartsDought: dummyNewArticles,
    }
  },
  async fetch() {
    const responseDataViews = await this.$axios.get('/view')
    const responseDataArticle = await this.$axios.get('/articles')

    const sortedArticles = [...responseDataArticle.data.data]
    sortedArticles.sort((a, b) => b.views - a.views)
    const top3Articles = sortedArticles.slice(0, 3)
    this.dataCartLine = responseDataViews?.data?.resultsWithMonthNames
    this.dataCartBar = top3Articles
    console.log(top3Articles)
  },
  mounted() {
    console.log(this.dataCartLine)
  },
}
</script>

<template>
  <div>
    <client-only>
      <section
        class="grid grid-cols-2 gap-2 m-4"
        v-if="dataCartLine.length > 0"
      >
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

        <div>
          <CardsDashbord>
            <h1>Grafik Artikel Perkategori</h1>
            <DoughnutChart :dataDought="dataCartsDought" />
          </CardsDashbord>
        </div>
        <div><CardsDashbord>COMINGSOON</CardsDashbord></div>
        <div><CardsDashbord>COMINGSOON</CardsDashbord></div>
      </section>
    </client-only>
  </div>
</template>
