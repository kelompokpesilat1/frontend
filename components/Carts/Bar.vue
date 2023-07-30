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
            backgroundColor: ['red'],
            borderColor: 'red',
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
