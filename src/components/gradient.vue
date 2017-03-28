<template>
  <div ref="chart" class="aaaaa"></div>
</template>
<script>
  import charts from 'echarts';
  import theme from '../../echart.json';
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
        charts.registerTheme('walden', theme);
        me.chart = charts.init(me.$refs.chart, 'walden');
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
      },
      update (obj) {
        this.chart.setOption(obj, true);
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
