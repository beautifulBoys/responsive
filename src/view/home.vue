<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" class="row1">
        <div class="item1">
          <div class="tag"><span class="icon cloud"> </span>
            <div class="text-area"><span class="text1 color1">{{item1Data[0].num}}%</span><span class="text2">{{item1Data[0].text}}</span></div>
          </div>
          <div class="tag"><span class="icon people"> </span>
            <div class="text-area"><span class="text1 color2">{{item1Data[1].num}}K</span><span class="text2">{{item1Data[1].text}}</span></div>
          </div>
          <div class="tag"><span class="icon camera"> </span>
            <div class="text-area"><span class="text1 color3">{{item1Data[2].num}}K</span><span class="text2">{{item1Data[2].text}}</span></div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" class="row1">
        <div class="bg-fff" style="height: 250px;">
          <line-chart class="chart-box" :chartData="lineData"></line-chart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" class="row1">
        <div class="bg-fff" style="height: 250px;">
          <gradient-chart class="chart-box" :chartData="gradientData"></gradient-chart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" class="row1">
        <div class="bg-fff item3" style="height: 550px;">
          <div class="top"><gradient-chart class="chart-box" :chartData="pieData"></gradient-chart></div>
          <div class="bottom">
            <div class="item">
              <div class="left">服务器</div>
              <div class="right"><gradient-chart class="chart-box" :chartData="lineAreaData"></gradient-chart></div>
            </div>
            <div class="item">
              <div class="left">技术支持</div>
              <div class="right"><gradient-chart class="chart-box" :chartData="lineAreaData"></gradient-chart></div>
            </div>
            <div class="item">
              <div class="left">配套服务</div>
              <div class="right"><gradient-chart class="chart-box" :chartData="lineAreaData"></gradient-chart></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" class="row1">
        <div class="item4" style="height: 550px;">
          <div class="top">
            <div style="width: 100%;height: 180px;display: block;padding: 15px 0;">
              <ul>
                <li v-for="item in item4Data.top">{{item}}</li>
              </ul>
            </div>
            <gradient-chart class="chart-box" ref="move" :chartData="moveAreaData"></gradient-chart>
            <div style="width: 100%;height: 50px;display: block;background: rgb(188, 129, 245);"></div>
          </div>
          <div class="bottom">
            <div class="item">
              <div class="left">
                <h3>{{item4Data.bottom.title}}</h3>
                <p>{{item4Data.bottom.content}}</p>
              </div>
              <div class="right">
                <gradient-chart class="chart-box" ref="yibiao" :chartData="gaugeData"></gradient-chart>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import gradientChart from '../components/gradient.vue';
  import lineChart from '../components/line_stack.vue';
  import homeData from './home_data';
  export default {
    components: {
      'gradient-chart': gradientChart,
      'line-chart': lineChart
    },
    mounted () {
      var me = this;
      setTimeout(function () {
        me.lineData = data1;
      }, 500);
      setTimeout(function () {
        me.gradientData = data2;
      }, 1000);
      setTimeout(function () {
        me.pieData = data3;
      }, 1500);
      setTimeout(function () {
        me.lineAreaData = data4;
      }, 2000);
      setTimeout(function () {
        me.moveAreaData = data5;
        setInterval(function () {
          data5.series[0].data.push(100 + parseInt(Math.random() * 100));
          data5.series[0].data.shift();
          me.$refs.move.update(data5);
        }, 1000);
      }, 2000);
      setTimeout(function () {
        me.gaugeData = data6;
        me.$notify({
          title: '成功',
          message: '服务器数据获取成功',
          type: 'success',
          offset: 50
        });
        setInterval(function () {
          data6.series[0].data[0].value = parseInt(Math.random() * 100);
          me.$refs.yibiao.update(data6);
        }, 1500);
      }, 2500);
    },
    data () {
      return {
        gradientData: {},
        lineData: {},
        pieData: {},
        lineAreaData: {},
        moveAreaData: {},
        gaugeData: {},
        item1Data: [
          {num: 19.2, text: '云服务器资源占用率'},
          {num: 23.12, text: '在线用户总数'},
          {num: 405.39, text: '图片服务器荷载总数'}
        ],
        item4Data: {
          top: [
            '服务器负荷：12.16%',
            '资源响应：1245K',
            '木马拦截：405次',
            '数据库响应时间：8.33ms',
            '运行状态：正常'
          ],
          bottom: {
            title: 'CPU使用率',
            content: 'CPU的性能指标直接决定了微机系统的性能指标。CPU功能：数据通信，资源共享，分布式处理，提供系统可靠性。'
          }
        }
      };
    }
  };
  var data1 = homeData.data1;
  var data2 = homeData.data2;
  var data3 = homeData.data3;
  var data4 = homeData.data4;
  var data5 = homeData.data5;
  var data6 = homeData.data6;
  
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
        margin-bottom: 20px;
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

  .item3 {
    display: flex;
    flex-flow: column;
    .top {
      width: 100%;
      height: 250px;
    }
    .bottom {
      flex: 1;
      .item {
        width: 100%;
        height: 100px;
        padding: 15px;
        box-sizing: border-box;
        border-top: 1px solid #ddd;
        font-size: 0;
        display: flex;
        .left {
          width: 40%;
          max-width: 150px;
          height: 100%;
          float: left;
          font-size: 16px;
          margin-right: 15px;
          line-height: 70px;
          color: #666;
          text-indent: 10px;
        }
        .right {
          flex: 1;
          height: 100%;
          float: right;
          font-size: 18px;
        }
      }
    }
  }

  .item4 {
    .top {
      width: 100%;
      height: 330px;
      margin-bottom: 20px;
      background: #fff;
      overflow: hidden;
      ul {
        color: #888;
        padding: 0 20px;
        li {
          list-style-type: none;
          line-height: 23px;
        }
      }
      .chart-box {
        height: 100px;
      }
    }
    .bottom {
      width: 100%;
      height: 200px;
      background: #fff;
      .item {
        width: 100%;
        height: 100%;
        display: flex;
        .left {
          width: 50%;
          height: 100%;
          display: block;
          padding: 15px;
          box-sizing: border-box;
          h3 {
            color: #666;
            font-weight: normal;
          }
          p {
            color: #999;
          }
        }
        .right {
          width: 50%;
          height: 100%;
          flex: 1;
          display: block;
        }
      }
    }
  }

  .bg-fff {
    background: #fff;
    overflow: hidden;
  }

  .el-col {
    margin-bottom: 20px;
  }

  .bg-purple {
    background: #d3dce6;
  }
</style>
