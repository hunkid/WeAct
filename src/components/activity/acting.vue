<template>
  <section class="panel acting">
    <newActBtn></newActBtn>
    <h4>正在进行中</h4>
  
    <el-table :data="actingActs" style="width: 100%" border>
      <el-table-column prop="serial" label="序号" width="80" align="center">
      </el-table-column>
      <el-table-column prop="name" label="名称">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="date" label="操作" width="250">
        <template scope="scope">
          <el-button-group>
          <el-button type="primary">查看</el-button>
          <el-button type="primary">编辑<i class="el-icon-edit"></i></el-button>
          <el-button type="primary">取消<i class="el-icon-close"></i></el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  
  </section>
</template>

<script>
import newActBtn from './newActBtn'
export default {
  data () {
    return {
      actingActs: [
        {
          serial: 1,
          name: '夏季热销活动来啦！',
          date: '2017-5-1'
        },
        {
          serial: 2,
          name: '夏季热销活动走啦！',
          date: '2017-5-2'
        }
      ]
    }
  },
  beforeCreate () {
    this.$http.get('/usr/acts?state=1').then(function (res) {
      console.log(res)
    })
  },
  components: {
    newActBtn
  }
}
</script>

