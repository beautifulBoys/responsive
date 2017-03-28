<template>
  <div>
    <el-row :gutter="15">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" class="row1">
        <div>
          <div class="tag"><span class="icon cloud"> </span>
            <div class="text-area"><span class="text1 color1">19.4%</span><span class="text2">云服务器资源占用率</span></div>
          </div>
          <div class="tag"><span class="icon people"> </span>
            <div class="text-area"><span class="text1 color2">23.12K</span><span class="text2">在线用户总数</span></div>
          </div>
          <div class="tag"><span class="icon camera"> </span>
            <div class="text-area"><span class="text1 color3">405.39K</span><span class="text2">图片服务器荷载总数</span></div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" class="row1">
        <div class="bg-fff" style="height: 240px;">
          <line-chart class="chart-box" :chartData="lineData"></line-chart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" class="row1">
        <div class="bg-fff" style="height: 240px;">
          <!--<gauge-chart class="chart-box" :chartData="chartData"></gauge-chart>-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import gaugeChart from 'gradient.vue';
  import lineChart from '../components/line_stack.vue';
  export default {
    components: {
      'gauge-chart': gaugeChart,
      'line-chart': lineChart
    },
    mounted () {
      var me = this;
      setTimeout(function () {
        me.lineData = {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          grid: {
            left: '2%',
            right: '2%',
            bottom: '0%',
            top: '2%',
            containLabel: false
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {lineStyle: {color: '#0ead1f'}},
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {lineStyle: {color: '#fff'}},
            splitLine: {
              show: false
            }
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210],
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#999',
                    width: 1
                  },
                  color: '#999',
                  label: {show: true}
                }
              }
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310, 232, 301, 234, 290, 330, 210],
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#0ead1f',
                    width: 1
                  },
                  color: '#0ead1f',
                  label: {show: true}
                }
              }
            }
          ]
        };
      }, 2000);
    },
    data () {
      return {
        chartData: {
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              name: '业务指标',
              type: 'gauge',
              data: [{value: 50, name: '完成率'}]
            }
          ]
        },
        lineData: {}
      };
    }
  };

</script>

<style lang="less" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .row1 {
      .tag {
        width: 100%;
        line-height: 40px;
        background: #fff;
        margin-bottom: 15px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        &:last-child {
          margin-bottom: 0;
        }
        .icon {
          height: 44px;
          width: 44px;
          margin: 3px;
          border-radius: 50%;
          display: block;
          &.cloud {
            background: #0ead1f url(../images/svg/cloud.svg) no-repeat center center;
            background-size: 35px;
          }
          &.people {
            background: #7c38bc url(../images/svg/people.svg) no-repeat center center;
            background-size: 25px;
          }
          &.camera {
            background: #40bbea url(../images/svg/camera.svg) no-repeat center center;
            background-size: 28px;
          }
        }
        .text-area {
          height: 50px;
          flex: 1;
          text-indent: 15px;
          .text1 {
            width: 100%;
            display: block;
            font-size: 26px;
            line-height: 28px;
            &.color1 {
              color: #0ead1f;
            }
            &.color2 {
              color: #7c38bc;
            }
            &.color3 {
              color: #40bbea;
            }
          }
          .text2 {
            width: 100%;
            display: block;
            font-size: 12px;
            line-height: 25px;
            color: #888;
          }
        }
      }
      .chart-box {
        width: 100%;
        height: 100%;
        div, canvas {
          width: 100% !important;
          height: 100%;
        }
      }
    }
  }

  .bg-fff {
    background: #fff;
    overflow: hidden;
  }

  .el-col {
    margin-bottom: 15px;
  }

  .bg-purple {
    background: #d3dce6;
  }
</style>
