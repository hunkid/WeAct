/**
 * 操控数据库
 * @author Seant
 * @date 17/7/6
 */

var option = {
  host: '127.0.0.1',
  port: 27017,
  user: 'admin',
  password: 'admin',
  database: 'WeAct'
}
var mongoose = require('mongoose')
mongoose.connect(`monogodb://${option.host}:${option.port}/${option.database}`)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

module.exports = mongoose
