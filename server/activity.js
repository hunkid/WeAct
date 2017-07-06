/**
 * 用于处理活动的后端，采用Express框架
 * @author Seant
 * @date 17/7/5
 */

var fData = require('./data')

function addNewActivity (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  let data = 'yes'
  res.end(fData(data, 0))
  // TODO: 这地方数据库处理
}

/**
 * @param {Express} app
 */
module.exports = function (app) {
  app.route('/usr/acts')
    .post(addNewActivity)
}
