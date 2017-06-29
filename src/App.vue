<template>
  <div id="app">
    <el-col id="sidebar">
      sss
      <el-menu default-active="1" class="el-menu-vertical-demo" theme="light" router="router">
        <el-menu-item index="1">导航一</el-menu-item>
        <el-menu-item index="2">导航二</el-menu-item>
        <el-menu-item index="3">导航三</el-menu-item>
      </el-menu>
    </el-col>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#sidebar {
  position: fixed;
  width: 200px;
  height: 100%;
  background-color: #eef1f6;
}
</style>
