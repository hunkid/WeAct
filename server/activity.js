/**
 * 用于处理活动的后端，采用Koa框架
 * @author Seant
 * @date 17/7/5
 */

function addNewActivity (req, res) {
  console.log(req)
}

/**
 * @param {Express} app
 */
module.exports = function (app) {
  app.route('/usr/acts')
    .get(addNewActivity)
}
