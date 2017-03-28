<template>
  <div ref="chart" class="aaaaa"></div>
</template>
<script>
  import charts from 'echarts';
  export default {
    props: ['chartData'],
    data () {
      return {
        chart: {},
        chartDataObj: {}
      };
    },
    mounted () {
      var me = this;
      setTimeout(function () {
        me.chart = charts.init(me.$refs.chart, 'lineTheme');
        me.startLoading();
      }, 200);
    },
    watch: {
      chartData () {
        this.closeLoading();
        this.chartDataObj = this.chartData;
        this.chart.setOption(this.chartDataObj, true);
      }
    },
    methods: {
      startLoading () {
        this.chart.showLoading({
          text: '',
          color: '#0ead1f',
          maskColor: 'rgba(0, 0, 0, 0)'
        });
      },
      closeLoading () {
        this.chart.hideLoading();
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
