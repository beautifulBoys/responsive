<template>
  <div class="box">

    <div :class="['left-sidebar', {'fold': sidebarFoldState}]" v-show="sidebarShowState">
      <div :class="['logo', {'fold-logo': sidebarFoldState}]">LIXIN <span class="glyphicon glyphicon-cog"> </span></div>
      <ul>
        <li v-for="item in sidebarData"><a href="JavaScript:void(0)" @click="sideBarCheckEvent(item.id)"
                                           :class="{'fold-li': sidebarFoldState}"><span
                :class="item.css"></span>　{{item.text}}</a></li>
      </ul>
    </div>
    <div class="right-main">
      <nav class="navbar navbar-default bg">
        <div class="navbar-header">
          <a href="JavaScript:void(0)" class="navbar-brand back" @click="menuFoldEvent" data-toggle="collapse"
             data-target="#sidebar-collapse"><span
                  class="glyphicon glyphicon-menu-hamburger icon"></span></a>
          <a href="JavaScript:void(0)" class="navbar-brand dgem"><span
                  class="glyphicon glyphicon-credit-card dge"></span><span
                  class="badge">3</span></a>
          <a href="JavaScript:void(0)" class="navbar-brand dgem"><span
                  class="glyphicon glyphicon-comment dge"></span><span
                  class="badge">3</span></a>
          <a href="JavaScript:void(0)" class="navbar-brand dgem"><span class="glyphicon glyphicon-bell dge"></span><span
                  class="badge">31</span></a>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <!--这是sidebar的折叠菜单-->
        <div class="collapse navbar-collapse navbar-right" id="sidebar-collapse" style="margin:0 10px 0 0;"
             v-if="!sidebarShowState">
          <ul class="nav navbar-nav">
            <li v-for="item in sidebarData"><a href="JavaScript:void(0)" @click="sideBarCheckEvent(item.id)"><span
                    :class="item.css"></span>　{{item.text}}</a></li>
          </ul>
        </div>
        <!--这是navbar的折叠菜单-->
        <div class="collapse navbar-collapse navbar-right" id="navbar-collapse" style="padding-left: 0;padding-right: 0;">
          <ul class="nav navbar-nav" style="margin: 0;">
            <li>
              <form class="navbar-form navbar-right" style="border: none;margin-right: 0;margin-left: 0;">
                <div class="input-group">
                  <input type="text" class="form-control">
                  <div class="input-group-btn">
                    <button class="btn btn-success"><span class="glyphicon glyphicon-search"></span></button>
                  </div>
                </div>
              </form>
            </li>
            <li class="dropdown">
              <a href="JavaScript:void(0)" data-toggle="dropdown" class="back" @click="menuIndexEvent(2)">
                <span class="glyphicon glyphicon-user" style="font-size: 17px"></span> JackLiXin <span
                      class="caret"></span></a>
              <ol class="dropdown-menu">
                <li><a href="JavaScript:void(0)"><span class="glyphicon glyphicon-edit"></span>　修改名称</a></li>
                <li><a href="JavaScript:void(0)"><span class="glyphicon glyphicon-asterisk"></span>　个人设置</a></li>
                <li><a href="JavaScript:void(0)"><span class="glyphicon glyphicon-leaf"></span>　主题设置</a></li>
                <li><a href="JavaScript:void(0)"><span class="glyphicon glyphicon-exclamation-sign"></span>　退出</a></li>
              </ol>
            </li>
            <li><a href="JavaScript:void(0)" @click="menuIndexEvent(3)"><span
                    class="glyphicon glyphicon-briefcase" style="font-size: 17px"></span> 工具</a></li>
          </ul>
        </div>
      </nav>

      <div class="router-view">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import b from '../lib/bootstrap/js/bootstrap.min';
  export default {
    name: 'app',
    created () {
      console.log(b);
    },
    data () {
      return {
        menuIndex: 0,
        sidebarFoldState: false,
        sidebarShowState: true,
        sidebarData: [
          {id: 1, text: '表格', css: 'glyphicon glyphicon-list-alt'},
          {id: 2, text: '图表', css: 'glyphicon glyphicon-stats'},
          {id: 3, text: '地图', css: 'glyphicon glyphicon-map-marker'},
          {id: 4, text: '项目一', css: 'glyphicon glyphicon-list-alt'},
          {id: 5, text: '项目二', css: 'glyphicon glyphicon-stats'},
          {id: 6, text: '项目三', css: 'glyphicon glyphicon-map-marker'}
        ],
        bodyWidth: ''
      };
    },
    watch: {
      bodyWidth (n) {
        this.bodyWidth = n;
        if (n === 'lg') {
          this.sidebarShowState = true;
          this.sidebarFoldState = false;
        } else if (n === 'md') {
          this.sidebarShowState = true;
          this.sidebarFoldState = true;
        } else if (n === 'sm') {
          this.sidebarFoldState = true;
          this.sidebarShowState = true;
        } else if (n === 'xs') {
          this.sidebarShowState = false;
        }
      }
    },
    mounted () {
      this.bodyWidth = this.widthResize(document.body.clientWidth);
      var me = this;
      window.onresize = function () {
        me.bodyWidth = me.widthResize(document.body.clientWidth);
      };
    },
    methods: {
      menuFoldEvent () {
        this.sidebarFoldState = !this.sidebarFoldState;
      },
      menuIndexEvent (num) {
        this.menuIndex = num;
      },
      widthResize (width) {
        if (width >= 1200) {
          return 'lg';
        } else if (width >= 992 && width < 1200) {
          return 'md';
        } else if (width >= 768 && width < 992) {
          return 'sm';
        } else if (width < 768) {
          return 'xs';
        } else {
          return '获取浏览器尺寸级别时出现未知错误';
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../lib/bootstrap/css/bootstrap.min.css";

  #sidebar-collapse {
    background: #fff;
    margin-right: 0 !important;
  }
  #navbar-collapse {
    background: #fff;
    margin-right: 0 !important;
    ul> li a {
      border-bottom: 1px solid #eee;
    }
  }



  .box {
    width: 100%;
    height: 100%;
    background: #eee;
    display: flex;
    font-family: "Microsoft YaHei";
    button {
      outline: none;
    }
    .left-sidebar {
      width: 300px;
      height: 100%;
      background: #333;
      transition: width 0.3s;
      .logo {
        font-size: 30px;
        width: 100%;
        line-height: 60px;
        height: 100px;
        overflow: hidden;
        color: #fff;
        display: block;
        text-indent: 30px;
        padding: 20px;
        transition: all 0.3s;
        &.fold-logo {
          padding: 20px 0;
          text-indent: 8px;
          font-size: 20px;
        }
        span {
          font-size: 20px;
          float: right;
          line-height: 30px;
          padding: 15px;
          color: #aaa;
          cursor: pointer;
          &:hover {
            color: #fff;
          }
        }
      }
      &.fold {
        width: 70px;
      }
      ul {
        padding: 0;
        margin: 0;
        li {
          padding: 0 25px;
          box-sizing: border-box;
          margin: 0;
          list-style-type: none;
          a {
            line-height: 50px;
            font-size: 16px;
            color: #aaa;
            height: 50px;
            overflow: hidden;
            display: block;
            text-indent: 20px;
            border-bottom: 1px solid #434343;
            text-decoration: none;
            transition: text-indent 0.3s;
            &:hover {
              color: #fff;
              border-bottom: 1px solid #888;
            }
            &.fold-li {
              text-indent: 0;
            }
          }
        }
      }
    }
    .right-main {
      flex: 1;
      height: 100%;
      background: #eee;
      display: flex;
      flex-flow: column;
      #navbar-collapse {
        margin-right: 0 !important;
      }

      .router-view {
        width: 100%;
        flex: 1;
        background: red;
      }

      .collapse {
        .dropdown-menu {
          border: none;
          li {
            &:last-child a {
              border: none;
            }
            a {
              line-height: 30px;
              color: #888;
              border-bottom: 1px solid #efefef;
              &:hover {
                color: #333;
              }
            }
          }
        }
      }
      .navbar {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #ddd;
        box-shadow: 0 0px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 0;
        height: 54px;
        &.bg {
          background: #fff;
        }
        .navbar-header {
          a {
            color: #333;
            padding: 15px 8px;
          }
          .navbar-brand {
            &.dgem {
              color: #888;
              &:hover .dge {
                color: #333;
              }
            }
            .badge {
              background: #0ead1f;
              transform: translate3d(-5px, -15px, 0px);
              box-shadow: 3px 3px 5px rgba(14, 173, 31, 0.25);
            }
            &.back {
              padding: 8px 15px;
              .icon {
                transition: background 0.5s;
                background: #ff5200;
                border-radius: 50%;
                padding: 10px;
                color: #fff;
                font-size: 14px;
              }
              &:hover .icon {
                background: #aaa;
              }
            }
          }
        }
      }
    }
  }
</style>
