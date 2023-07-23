<script>
export default {
  name: 'IndexPage',
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
      LineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        offset: 8,
        radius: 1,
        spacing: 4,
        hoverOffset: 32,
        hoverBorderWidth: 1,
        weight: 0,
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
      :chart-data="LineChartData"
      :chart-options="LineChartOptions"
      :height="430"
    />
  </client-only>
</template>
