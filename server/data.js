/**
 * 返回格式定义
 * @author Seant
 * @date 17/7/6
 */

/**
 * @param {String | JSON | Object} data
 * @param {Boolean} OKFlag
 * @return {String} Stringify的JSON格式
 */
module.exports = function (data, OKFlag) {
  var ret = {
    status: 0, // 0代表失败，1代表成功
    data
  }
  if (OKFlag) {
    ret.status = 1
  }
  return JSON.stringify(ret)
}
