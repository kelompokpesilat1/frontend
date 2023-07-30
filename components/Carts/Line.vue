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
            backgroundColor: ['rgb(250, 152, 132)'],
            borderColor: 'rgb(231, 70, 70)',
            borderWidth: '7',
          },
        ],
      },
      LineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        offset: 10,
        radius: 5,
        spacing: 2,
        hoverOffset: 32,
        hoverBorderWidth: 1,
        weight: 1,
      },
    }
  },
  computed: {},
  created() {
    const datas = this.DataCarts
    for (let i = 0; i <= datas.length; i++) {
      if (datas[i]) {
        this.LineChartData.labels.push(datas[i].month)
        this.LineChartData.datasets[0].data.push(datas[i].views)
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
