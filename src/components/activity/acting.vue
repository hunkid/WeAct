<template>
  <section class="panel acting">
      <h4>正在进行中</h4>
      <ul class="panel-bd">
        <div class="panel-title">
          <span>序号</span>
          <span>活动名</span>
          <span>操作</span>
        </div>
        <li v-for="(item, index) in actingActs">
          <span class="num">{{index + 1}}</span>
          <a href="">{{item.name}}</a>
          <el-button-group class="panel-bd-oper">
            <el-button type="primary">查看</el-button>
            <el-button type="primary">编辑
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button type="primary">取消
              <i class="el-icon-close"></i>
            </el-button>
          </el-button-group>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  data () {
    return {
      actingActs: [
        {
          name: '夏季热销活动来啦！'
        },
        {
          name: '夏季热销活动走啦！'
        }
      ]
    }
  }
}
</script>

