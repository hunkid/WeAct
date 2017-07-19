<template>
  <section class="panel acting">
    <newActBtn></newActBtn>
    <h4>草稿</h4>
    <el-table :data="draftActs" style="width: 100%" border>
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
          <el-button type="primary">发布<i class="el-icon-edit"></i></el-button>
          <el-button type="primary">删除<i class="el-icon-close"></i></el-button>
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
      draftActs: []
    }
  },
  beforeCreate () {
    this.$http.get('/usr/acts?state=0').then(function (res) {
      res.body.data.forEach((ele, ind) => {
        this.draftActs.push(
          {
            serial: ind + 1,
            name: ele.name,
            date: ele.estabDate.split('T')[0],
            id: ele._id
          }
        )
      })
    })
  },
  components: {
    newActBtn
  }

}
</script>

