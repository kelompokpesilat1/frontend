<script>
export default {
  props: {
    DoughtData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      DoughtCarts: {
        labels: [],
        datasets: [
          {
            label: 'Visualization',
            data: [],
            backgroundColor: ['rgba(20, 255, 0, 0.85)'],
            borderColor: 'rgba(100, 155, 0, 1)',
            borderWidth: 1,
          },
        ],
      },
      DoughtChartOptions: {
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
    const datas = this.DoughtData
    for (let i = 0; i <= datas.length; i++) {
      if (datas[i]) {
        this.DoughCarts.labels.push(datas[i].title)
        console.log(datas[i])
        this.DoughtChartOptions.datasets[0].data.push(datas[i].favoriteCount)
      }
    }
  },
}
</script>
<template>
  <div>
    <client-only>
      <DoughnutChart
        class="cart-bar"
        :chart-data="DoughtCarts"
        :chart-options="DoughtChartOptions"
      />
    </client-only>
  </div>
</template>
