<template>
  <div class="box">

    <div :class="['left-sidebar', {'fold': sidebarFoldState}]" v-show="sidebarShowState">
      <div :class="['logo', {'fold-logo': sidebarFoldState}]">LIXIN <span class="glyphicon glyphicon-cog"> </span></div>
      <ul>
        <li v-for="item in sidebarData">
          <a href="JavaScript:void(0)" @click="sideBarCheckEvent(item)" :class="{'fold-li': sidebarFoldState}">
            <span :class="item.css"></span>　{{item.text}}
          </a>
        </li>
      </ul>
    </div>
    <div class="right-main">
      <nav class="navbar navbar-default bg">
        <div class="navbar-header" :class="{'left-need': bodyWidth !== 'xs'}">
          <a href="JavaScript:void(0)" class="navbar-brand back" v-show="bodyWidth === 'xs'" data-toggle="collapse"
             data-target="#sidebar-collapse">
            <span class="glyphicon glyphicon-menu-hamburger icon"></span>
          </a>
          <a href="JavaScript:void(0)" class="navbar-brand dgem" title="待处理" @click="waitDo = true" style="width: 62px;">
            <span class="glyphicon glyphicon-credit-card dge"></span>
            <span class="badge" v-show="waitDoDataChange()">{{waitDoDataChange()}}</span>
          </a>
          <a href="JavaScript:void(0)" class="navbar-brand dgem" @click="message = true" title="未读消息" style="width: 62px;">
            <span class="glyphicon glyphicon-comment dge"></span>
            <span class="badge" v-show="messageData.length">{{messageData.length}}</span>
          </a>
          <a href="JavaScript:void(0)" class="navbar-brand dgem" title="提醒" style="width: 65px;">
            <span class="glyphicon glyphicon-bell dge"></span>
            <span class="badge"></span>
          </a>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <!--这是sidebar的折叠菜单-->
        <div class="collapse navbar-collapse navbar-right" id="sidebar-collapse" style="margin:0 10px 0 0;" v-if="!sidebarShowState">
          <ul class="nav navbar-nav">
            <li v-for="item in sidebarData">
              <a href="JavaScript:void(0)" @click="sideBarCheckEvent(item)"><span :class="item.css"></span>　{{item.text}}</a>
            </li>
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
                <span class="glyphicon glyphicon-user" style="font-size: 17px"></span> JackLiXin <span class="caret"></span>
              </a>
              <ol class="dropdown-menu">
                <li v-for="item in mineInfo"><a :href="item.link" target="_black"><span class="glyphicon" :class="item.css"></span>　{{item.text}}</a></li>
              </ol>
            </li>
            <li>
              <a href="JavaScript:void(0)" @click="menuIndexEvent(3)"><span class="glyphicon glyphicon-briefcase" style="font-size: 17px"></span> 工具</a>
            </li>
          </ul>
        </div>
      </nav>
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </div>


    <!--待处理弹出窗口-->
    <el-dialog title="待处理" v-model="waitDo">
      <table class="table table-me table-striped table-hover">
        <thead>
        <tr>
          <th>标题</th>
          <th>概要</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in waitDoData" v-if="item.state">
          <td>{{item.type}}</td>
          <td>{{item.main}}</td>
          <td>
            <button class="btn btn-success" @click="waitDoYesEvent(item)">同 意</button>
            <button class="btn btn-danger" @click="waitDoFalseEvent(item.id)">拒 绝</button>
          </td>
        </tr>
        </tbody>
      </table>
    </el-dialog>

    <el-dialog title="请输入拒绝理由" v-model="waitDoFalse">
      <input type="text" class="form-control" v-model="waitDoFalseReason"/>
      <div slot="footer" class="dialog-footer">
        <el-button @click="waitDoFalse = false">取 消</el-button>
        <el-button type="primary" @click="waitDoFalseReasonYesEvent">确 定</el-button>
      </div>
    </el-dialog>

    <!--未读消息弹出窗口-->
    <el-dialog title="待处理" v-model="message">
      <table class="table table-me table-striped table-hover">
        <thead>
        <tr>
          <th>姓名</th>
          <th>内容</th>
          <th>回复</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in messageData">
          <td>{{item.user}}</td>
          <td>{{item.main}}</td>
          <td><button class="btn btn-success">回 复</button></td>
        </tr>
        </tbody>
      </table>
    </el-dialog>


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
        message: false,
        waitDo: false,
        waitDoFalse: false,
        waitDoIndex: -1,
        waitDoFalseReason: '',
        menuIndex: 0,
        sidebarFoldState: false,
        sidebarShowState: true,
        sidebarData: [
          {id: 1, text: '表格', css: 'glyphicon glyphicon-list-alt', link: ''},
          {id: 2, text: '图表', css: 'glyphicon glyphicon-stats', link: '/chart'},
          {id: 3, text: '地图', css: 'glyphicon glyphicon-map-marker', link: '/map'},
          {id: 4, text: '项目一', css: 'glyphicon glyphicon-list-alt', link: ''},
          {id: 5, text: '项目二', css: 'glyphicon glyphicon-stats', link: ''},
          {id: 6, text: '项目三', css: 'glyphicon glyphicon-map-marker', link: ''}
        ],
        bodyWidth: '',
        waitDoData: [
          {id: 0, type: '采购申请', main: '***组的负责人申请采购**25件，总价格预算***元。', state: true},
          {id: 1, type: '采购申请', main: '***组的负责人申请采购**25件，总价格预算***元。', state: true},
          {id: 2, type: '采购申请', main: '***组的负责人申请采购**25件，总价格预算***元。', state: true},
          {id: 3, type: '采购申请', main: '***组的负责人申请采购**25件，总价格预算***元。', state: true},
          {id: 4, type: '采购申请', main: '***组的负责人申请采购**25件，总价格预算***元。', state: true}
        ],
        messageData: [
          {id: 0, user: '张三', main: '三号仓库的申请请批复一下。'},
          {id: 1, user: '李四', main: '四号仓库的申请请批复一下。'},
          {id: 2, user: '王五', main: '五号仓库的申请请批复一下。'}
        ],
        mineInfo: [
          {link: 'https://beautifulboys.github.io/html/home/', css: 'glyphicon-edit', text: '个人主页'},
          {link: 'https://github.com/beautifulBoys', css: 'glyphicon-asterisk', text: 'GitHub'},
          {link: 'JavaScript:void(0)', css: 'glyphicon-leaf', text: '主题设置'},
          {link: 'JavaScript:void(0)', css: 'glyphicon-exclamation-sign', text: '退出'}
        ]
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
      waitDoDataChange () {
        var a = true;
        var b = 0;
        for (let i = 0; i < this.waitDoData.length; i++) {
          if (this.waitDoData[i].state) {
            a = false;
            b += 1;
          }
        }
        if (a) this.waitDo = false;
        return b;
      },
      waitDoFalseEvent (id) {
        this.waitDoIndex = id;
        this.waitDoFalse = true;
      },
      waitDoYesEvent (item) {
        item.state = false;
        this.$notify({
          title: '成功',
          message: '申请已通过',
          type: 'success',
          offset: 50
        });
        this.waitDoDataChange();
      },
      waitDoFalseReasonYesEvent () {
        this.waitDoFalse = false;
        this.waitDoData[this.waitDoIndex].state = false;
        this.$notify({
          title: '成功',
          message: '申请已拒绝，拒绝理由：' + this.waitDoFalseReason,
          type: 'success',
          offset: 50
        });

        this.waitDoFalseReason = '';
        this.waitDoIndex = -1;
        this.waitDoDataChange();
      },
      sideBarCheckEvent (item) {
        if (item.link !== '') this.$router.push({ path: item.link });
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

    .table-me {
      border: 1px solid #ddd;
      th {
        line-height: 30px;
      }
      td {
        line-height: 30px;
      }
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
        padding: 20px;
        box-sizing: border-box;
        overflow: hidden;
        overflow-y: scroll;
        /*&::-webkit-scrollbar-track {*/
        /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        /*border-radius: 10px;*/
        /*background-color: #F5F5F5;*/
        /*}*/

        /*&::-webkit-scrollbar {*/
        /*width: 10px;*/
        /*background-color: #F5F5F5;*/
        /*}*/

        /*&::-webkit-scrollbar-thumb {*/
        /*border-radius: 10px;*/
        /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);*/
        /*background-color: #0688ff;*/
        /*}*/
      }

      .collapse {
        z-index: 10;
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
        z-index: 100;
        &.bg {
          background: #fff;
        }
        .navbar-header {
          &.left-need {
            margin-left: 15px;
          }
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
              &:active .icon {
                background: #aaa;
              }
            }
          }
        }
      }
    }
  }
</style>
