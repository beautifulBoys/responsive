/**
 * Created by user on 2017/3/27.
 */
exports.data1 = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  grid: {
    left: '-22px',
    right: '7px',
    bottom: '-13px',
    top: '5px',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    axisLine: {lineStyle: {color: '#ccc'}},
    splitLine: {
      show: true,
      lineStyle: {color: ['#f8f8f8']}
    },
    axisTick: {show: false}
  },
  yAxis: {
    type: 'value',
    axisLine: {lineStyle: {color: '#ccc'}},
    splitLine: {
      show: true,
      lineStyle: {color: ['#f8f8f8']}
    },
    axisLabel: {show: false},
    axisTick: {show: false}
  },
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      data: [120, 132, 111, 134, 120, 130, 110, 122, 101, 134, 120, 130, 110, 134],
      itemStyle: {
        normal: {
          lineStyle: {
            color: '#999',
            width: 2
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
      data: [220, 182, 191, 234, 290, 330, 310, 232, 301, 234, 290, 330, 210, 300],
      itemStyle: {
        normal: {
          lineStyle: {
            color: '#0ead1f',
            width: 2
          },
          color: '#0ead1f',
          label: {show: true}
        }
      }
    }
  ]
};
exports.data2 = {
  title: {
    text: '19.21%',
    subtext: '近30天用户数量平均增长值',
    textStyle: {
      color: '#7c38bc'
    }
  },
  grid: {
    left: '0',
    right: '0',
    bottom: '2%',
    top: '0',
    containLabel: false
  },
  xAxis: {
    data: [],
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  dataZoom: [{type: 'inside'}],
  series: [
    {
      type: 'bar',
      itemStyle: {
        normal: {
          color: '#9044d8',
          label: {show: true}
        }
      },
      barGap: '-100%',
      barCategoryGap: '40%',
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149],
      animation: true
    }
  ]
};
exports.data3 = {
  series: [
    {
      name: '业务收入行业占比',
      type: 'pie',
      radius: ['20%', '35%'],
      data: [
        {value: 135, name: '电商服务'},
        {value: 310, name: '视频服务'},
        {value: 234, name: '直播服务'},
        {value: 135, name: '生活服务'},
        {value: 135, name: '传统行业'}
      ]
    },
    {
      name: '收入来源占比',
      type: 'pie',
      radius: ['45%', '60%'],
      data: [
        {value: 335, name: '配套服务'},
        {value: 1548, name: '服务器'},
        {value: 679, name: '技术支持'}
      ]
    }
  ]
};
exports.data4 = {
  grid: {
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    containLabel: false
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {show: false},
      axisLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      smooth: true,
      areaStyle: {
        normal: {
          color: '#28cc39'
        }
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
};
exports.data5 = {
  grid: {
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    containLabel: false
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: []
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {show: false},
      axisLine: {show: false}
    }
  ],
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      lineStyle: {
        normal: {
          color: '#a04bf1',
          width: '1'
        }
      },
      areaStyle: {
        normal: {
          color: '#a04bf1'
        }
      },
      animation: false,
      data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210, 132, 101]
    },
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      lineStyle: {
        normal: {
          color: '#c798f5',
          width: '1'
        }
      },
      areaStyle: {
        normal: {
          color: '#c798f5'
        }
      },
      animation: false,
      data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 230, 210, 134, 90, 230, 210, 132, 101]
    }

  ]
};
exports.data6 = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: '业务指标',
      type: 'gauge',
      detail: {formatter: '{value}%', fontSize: 15},
      data: [{value: 50, name: ''}],
      axisLine: {
        lineStyle: {
          width: 10
        }
      },
      splitLine: {
        length: 10
      }
    }
  ]
};

