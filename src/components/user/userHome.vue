<template>
  <div>
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
    <section class="panel draft">
      <h4>草稿箱</h4>
      <ul class="panel-bd">
        <div class="panel-title">
          <span>序号</span>
          <span>活动名</span>
          <span>操作</span>
        </div>
        <li v-for="(item, index) in draftActs">
          <span class="num">{{index + 1}}</span>
          <a href="">{{item.name}}</a>
          <el-button-group class="panel-bd-oper">
            <el-button type="primary">查看</el-button>
            <el-button type="primary">编辑
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button type="primary">删除
              <i class="el-icon-delete"></i>
            </el-button>
          </el-button-group>
        </li>
      </ul>
    </section>
    <section class="panel garbage">
      <h4>垃圾箱</h4>
      <ul class="panel-bd">
        <div class="panel-title">
          <span>序号</span>
          <span>活动名</span>
          <span>操作</span>
        </div>
        <li v-for="(item, index) in garbageActs">
          <span class="num">{{index + 1}}</span>
          <a href="">{{item.name}}</a>
          <el-button-group class="panel-bd-oper">
            <el-button type="primary">查看</el-button>
            <el-button type="primary">彻底删除
              <i class="el-icon-delete"></i>
            </el-button>
          </el-button-group>
        </li>
      </ul>
    </section>
  </div>
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
      ],
      draftActs: [
        {
          name: '秋季活动筹备中！'
        },
        {
          name: '秋季活动再次筹备中！'
        }
      ],
      garbageActs: [
        {
          name: '一次失败的活动'
        },
        {
          name: '两次失败的活动'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.panel {
  width: 100%;
  .panel-bd {
    width: 100%;
    .panel-title {
      font-size: 17px;
      color: #000;
      font-weight: 700;
      height: 40px;
      background-color: #ccc;
      span {
        display: inline-block;
        position: absolute;
        line-height: 40px;
        &:first-child {
        left: 2px;
        }
        &:nth-child(2) {
          left: 60px;
        }
        &:last-child {
          left: 70%;
        }
      }
      
    }
    li {
      font-size: 16px;
      position: relative;
      border-bottom: 1px solid #eee;
      padding: 0 1em;
      height: 38px;
      .num {
        line-height: 38px;
        position: absolute;
        left: 1em;
      }
      a {
        position: absolute;
        line-height: 38px;
        left: 60px;
        display: inline-block;
        text-align: left;
        &:hover {
          color: #20a0ff;
        }
      }
      .panel-bd-oper {
        position: absolute;
        left: 70%;
      }
    }
  }
}
</style>
