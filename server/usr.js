/**
 * 用于处理活动的后端，采用Express框架
 * @author Seant
 * @date 17/7/10
 */

// var fData = require('./data')
var mongoose = require('mongoose')

var UsrsSchema = new mongoose.Schema({
  name: String,
  tel: String, // 电话号码
  gender: String, // 性别
  corp: String // 公司
})

var UsrsModel = mongoose.model('USRs', UsrsSchema)

var eg1Entity = new UsrsModel({
  name: 'YH',
  tel: '12345678911',
  gender: 'male',
  copr: 'BD'
})
eg1Entity.save(function (err, eg1Entity) {
  if (err) return console.error(err)
})

module.exports = {
  UsrsSchema
}
