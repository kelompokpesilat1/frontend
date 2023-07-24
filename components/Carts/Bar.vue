<script>
export default {
  props: {
    BarData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      BarCarts: {
        labels: [],
        datasets: [
          {
            label: 'Visualization',
            data: [],
            backgroundColor: [
              'rgba(20, 255, 0, 0.85)',
              'rgba(200, 5, 0, 0.85)',
              'rgba(10, 220, 0, 0.85)',
              'rgba(2, 100, 0, 0.85)',
              'rgba(20, 55, 0, 0.85)',
              'rgba(120, 155, 0, 0.85)',
            ],
            borderColor: 'rgba(100, 155, 0, 1)',
            borderWidth: 1,
          },
        ],
      },
      BarChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        offset: 20,
        radius: 10,
        spacing: 2,
        hoverOffset: 32,
        hoverBorderWidth: 1,
        weight: 2,
      },
    }
  },
  computed: {},
  created() {
    const datas = this.BarData
    for (let i = 0; i <= datas.length; i++) {
      if (datas[i]) {
        this.BarCarts.labels.push(datas[i].title)
        console.log(datas[i])
        this.BarCarts.datasets[0].data.push(datas[i].favoriteCount)
      }
    }
  },
}
</script>
<template>
  <div>
    <client-only placeholder="Loading...">
      <BarChart
        class="cart-bar"
        :chart-data="BarCarts"
        :chart-options="BarChartOptions"
      />
    </client-only>
  </div>
</template>
