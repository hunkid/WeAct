/**
 * 用于处理活动的后端，采用Express框架
 * @author Seant
 * @date 17/7/5
 */

// var fData = require('./data')
var option = require('./db/db')
var mongoose = require('mongoose')

var UsrsSchema = require('./usr').UsrsSchema

var ActsSchema = new mongoose.Schema({
  name: String, // 活动名
  usr: UsrsSchema, // 创建/发布人
  address: String,
  actingDate1: Date, // 活动时间
  actingDate2: Date,
  actingType: Array, // 活动性质
  actingSize: String, // 活动规模
  actingFormua: String, // 活动形式
  state: Number // 状态： 0:正创建（草稿箱），1：已发布，2：垃圾箱，没有3，是彻底删除
})

var db

/**
 * 创建数据库中的文档
 * @param {Object} data
 */
// function addNewActivityDB (data, res) {
//   var act = new ActsDB({
//     name: data.name,
//     usr: { // TODO: 要查找的
//       name: 'zhangsan',
//       tel: '12345607894', // 电话号码
//       gender: 'male', // 性别
//       corp: 'BD' // 公司
//     },
//     address: data.address,
//     actingDate1: data.date1,
//     actingDate2: data.date2,
//     actingType: data.type,
//     actingSize: data.size,
//     actingFormua: data.formua
//   })
//   act.save(function (err) {
//     console.log('save')
//     if (err) {
//       console.log('not')
//       res.end(fData('yes', 0))
//       return console.error(err)
//     } else {
//       res.end(fData('no', 1))
//     }
//     return true
//   })
// }

// function addNewActivity (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   addNewActivityDB(req.body, res)
// }

var activityUtil = {
  init () {
    var promise = new Promise(function (resolve, reject) {
      mongoose.connect(`mongodb://${option.host}:${option.port}/${option.database}`, {useMongoClient: true})
      db = mongoose.connection
      db.on('error', function (err) {
        console.error.bind(console, 'connection error:' + err)
        reject(err)
      })
      db.on('open', function (err) {
        resolve(err)
      })
    })
    return promise
  },
  addNewActivityDB (data, res) {
    var promise = this.init()
    var ActsDB = mongoose.model('activities', ActsSchema) // 创建对应DB model
    promise.then(function () {
      var act = new ActsDB({
        name: data.name,
        usr: { // TODO: 要查找的
          name: 'zhangsan',
          tel: '12345607894', // 电话号码
          gender: 'male', // 性别
          corp: 'BD' // 公司
        },
        address: data.address,
        actingDate1: data.date1,
        actingDate2: data.date2,
        actingType: data.type,
        actingSize: data.size,
        actingFormua: data.formua
      })
      act.save(function (err) {
        if (err) {
          console.error(err)
        } else {
          console.log('suc')
        }
        db.close()
      })
    }).catch(function (err) {
      console.error('no:' + err)
    })
  }
}

/**
 * @param {Express} app
 */
module.exports = function (app) {
  app.route('/usr/acts')
     .post(function (req, res) {
       res.setHeader('Content-Type', 'text/plain')
       activityUtil.addNewActivityDB(req.body, res)
     })
}
