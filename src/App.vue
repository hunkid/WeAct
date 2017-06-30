<template>
  <div id="app">
    <header id="header">
      <span class="title">我的主页</span>
      <div class="logout userAction">
        <a href="javascript:;">退出</a>
      </div>
    </header>
    <el-col id="sidebar">
      <span class="sidebar-title">我的活动</span>
      <el-menu default-active="/act/doing" class="el-menu-vertical-demo" theme="light" router="router">
        <el-menu-item index="/act/doing">进行中</el-menu-item>
        <el-menu-item index="2">草稿箱</el-menu-item>
        <el-menu-item index="3">垃圾箱</el-menu-item>
      </el-menu>
    </el-col>
    <div class="content clearfix">
      <div class="add clearfix">
        <el-button class="fr">新增活动
          <i class="el-icon-plus"></i>
        </el-button>
      </div>
      <div class="content-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './assets/scss/config.scss';
#app {
  font-family: $fBaseFaimly;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#header {
  background-color: #fff;
  -webkit-box-shadow: 0 0 2px #ddd;
  -moz-box-shadow: 0 0 2px #ddd;
  box-shadow: 0 0 2px #ddd;
  font-size: 18px;
  font-family: "Microsoft Yahei";
  text-align: center;
  height: $headerH;
  line-height: $headerH;
  min-width: $headerMinW;
  .userAction {
    float: right;
    margin-right: 2em;
  }
}

#sidebar {
  position: fixed;
  width: $sideBarMaxW;
  height: 100%;
  text-align: center;
  background-color: #eef1f6;
  z-index: 999999;
  span {
    cursor: default;
  }
  .sidebar-title {
    display: block;
    height: 100px;
    line-height: 100px;
    font-size: 20px;
  }
  .el-menu-item {
    font-size: 17px;
  }
}

.content {
  width: calc(100% - 200px);
  min-width: $mainMinW;
  position: absolute;
  left: $sideBarMaxW;
  .empty {
    max-width: $sideBarMaxW;
    min-width: $sideBarMinW;
    width: 19%;
    float: left;
    height: 1px;
  }
  .add {
    padding: 1em 1em;
    &:after {
      content: '';
      clear: both;
    }
  }
}
</style>
