<template>
  <div class="map-box">
    <div class="top" id="map"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    },
    mounted () {
      /* eslint-disable */
      var map = new BMap.Map('map');
      var point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
      var stCtrl = new BMap.PanoramaControl();
      stCtrl.setOffset(new BMap.Size(20, 20));
      map.addControl(stCtrl);
      var top_right_navigation = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL
      });
      map.addControl(top_right_navigation);// 缩放以及比例尺控件
      map.enableScrollWheelZoom(true);// 缩放
      map.enableDragging();   // 拖拽
      map.enableInertialDragging();   // 惯性拖拽

      var mapType2 = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_LEFT});
      map.addControl(mapType2);          // 左上角，默认地图控件(地图显示类型)
      map.setCurrentCity('北京');        // 由于有3D图，需设置城市
    },
    components: {}
  };
</script>

<style lang="less" scoped>
  .map-box {
    width: 100%;
    height: 100%;
    background: #eee;
    .top {
      width: 100%;
      height: 100%;
      background: #fff;
      border: 1px solid #ccc;
    }
  }
</style>
