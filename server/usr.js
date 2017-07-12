/**
 * 用于处理活动的后端，采用Express框架
 * @author Seant
 * @date 17/7/10
 */

var fData = require('./data')
var mongoose = require('mongoose')
var option = require('./db/db')

var UsrsSchema = new mongoose.Schema({
  name: String,
  tel: String, // 电话号码
  gender: String, // 性别
  corp: String, // 公司
  nickname: String, // 昵称
  passwd: String
})

var db

var usrUtil = {
  init () {
    var promise = new Promise(function (resolve, reject) {
      mongoose.connect(`mongodb://${option.host}:${option.port}/${option.database}`, {useMongoClient: true})
      db = mongoose.connection
      db.on('error', function (err) {
        console.error.bind(console, 'connection error:' + err)
        reject(err)
      })
      db.on('open', function () {
        resolve()
      })
    })
    return promise
  },
  addNewUsr (data, res) {
    var promise = this.init()
    var UsrsModel = mongoose.model('USRs', UsrsSchema) // 创建对应DB model
    promise.then(function () {
      UsrsModel.find({
        name: data.name
      }, function (err, doc) {
        if (err) {
          console.error(err)
          return
        }
        if (doc.length) {
          res.end(fData('该用户名已经存在！', false))
          return
        }
        var usr = new UsrsModel({
          name: data.name,
          nickname: data.nickname,
          passwd: data.password
        })
        usr.save(function (err) {
          if (err) {
            console.error(err)
            res.end(fData('no', false))
          } else {
            res.end(fData('yes', true))
            console.log('suc')
          }
          db.close()
        })
      })
    }).catch(function (err) {
      console.error('no:' + err)
      res.end(fData('操作失败', false))
    })
  },
  authUsr (data, res) {
    var promise = this.init()
    var UsrsModel = mongoose.model('USRs', UsrsSchema)
    promise.then(function () {
      UsrsModel.find({
        name: data.name
      }, function (err, doc) {
        if (err) {
          console.error(err)
          res.end(fData('操作失败', false))
          db.close()
          return
        }
        if (!doc.length) {
          res.end(fData('登录失败，用户名或密码不正确', false))
          return
        }
        if (doc[0].passwd === data.password) {
          res.end(fData('登录成功', true))
        } else {
          res.end(fData('登录失败，用户名或密码不正确', false))
        }
        db.close()
        return
      })
    }).catch(function (err) {
      console.error('no:' + err)
    })
  }
}

function dealUsr (app) {
  app.route('/usr/register')
     .post(function (req, res) {
       res.setHeader('Content-Type', 'text/plain')
       usrUtil.addNewUsr(req.body, res)
     })
  app.route('/usr/login')
     .post(function (req, res) {
       res.setHeader('Content-Type', 'text/plain')
       usrUtil.authUsr(req.body, res)
     })
}

module.exports = {
  UsrsSchema,
  dealUsr
}
