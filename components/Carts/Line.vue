<script>
export default {
  props: {
    DataCarts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      LineChartData: {
        labels: [],
        datasets: [
          {
            label: 'Statistic',
            data: [],
            backgroundColor: ['green'],
            borderColor: 'rgba(100, 155, 0, 1)',
            borderWidth: '2',
          },
        ],
      },
      LineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        offset: 30,
        radius: 1,
        spacing: 2,
        hoverOffset: 32,
        hoverBorderWidth: 1,
        weight: 40,
      },
    }
  },
  computed: {},
  created() {
    const datas = this.DataCarts
    for (let i = 0; i <= datas.length; i++) {
      if (datas[i]) {
        this.LineChartData.labels.push(datas[i].month)
        this.LineChartData.datasets[0].data.push(datas[i].visitors)
      }
    }
  },
  beforeDestroy() {
    console.log('---> Component will be destroyed soon')
  },
}
</script>

<template>
  <client-only placeholder="Loading...">
    <LineChart
      class="canvas-carts"
      :chart-data="LineChartData"
      :chart-options="LineChartOptions"
    />
  </client-only>
</template>
