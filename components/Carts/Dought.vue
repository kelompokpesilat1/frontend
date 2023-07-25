<script>
export default {
  props: {
    dataDought: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      doughChartData: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: ['red'],
            borderColor: 'red',
            borderWidth: 0,
          },
        ],
      },
      doughChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        offset: 8,
        radius: 80,
        spacing: 4,
        hoverOffset: 32,
        hoverBorderWidth: 1,
        weight: 0,
      },
    }
  },
  created() {
    const datas = this.dataDought
    console.log(datas)
    for (let i = 0; i <= datas.length; i++) {
      if (datas[i]) {
        this.doughChartData.labels.push(datas[i].name)
        this.doughChartData.datasets[0].data.push(datas[i].disukai)
      }
    }
  },
}
</script>

<template>
  <client-only>
    <DoughnutChart
      :chart-data="doughChartData"
      :chart-options="doughChartOptions"
    />
  </client-only>
</template>
