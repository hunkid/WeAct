<template>
  <!--TODO:未来新增项目：1.海报 2.其他供用户填写项-->
  <el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动地址" prop="address">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="活动时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2"></el-col>
      <el-col :span="11">
        <el-form-item>
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="活动性质" prop="type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="大促销活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        <el-checkbox label="促销活动" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="活动规模" prop="size">
      <el-radio-group v-model="form.size">
        <el-radio label="<50人" name="type"></el-radio>
        <el-radio label="50-100人" name="type"></el-radio>
        <el-radio label="100-200人" name="type"></el-radio>
        <el-radio label="200-500人" name="type"></el-radio>
        <el-radio label=">500人" name="type"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式" prop="formua">
      <el-input type="textarea" v-model="form.formua"></el-input>
    </el-form-item>
    <el-form-item id="fromActBTG">
      <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss">
#fromActBTG {
  text-align: center;
}
</style>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        address: '',
        date1: '',
        date2: '',
        type: [],
        formua: '',
        size: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入活动地址', trigger: 'blur' },
          { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        size: [
          { required: true, message: '请选择活动规模', trigger: 'blur' }
        ],
        formua: [
          { required: true, message: '请输入活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      if (!this.formValidate(formName)) {
        return false
      }
      let formData = JSON.stringify(this.form)
      this.$http.post('/usr/acts', formData).then(
        res => {
          alert('新增成功') // TODO:可以用弹出框，以后再说；另外跳转页面
        }
      ).catch(
        res => {
          alert('新增失败！') // TODO:可以用弹出框，以后再说
        }
      )
    },
    formValidate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          return true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

