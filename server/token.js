/**
 * @author Seant
 * @date 17/7/12
 */

var moment = require('moment')
var jwt = require('jwt-simple')
/**
 * token生成器
 * @param {Express} app
 * @param {Object} usr
 * @param {Number} time
 * @return {Object}
 */
export function tokenMaker (app, usr, time) {
  app.get('jwtTokenSecret')
  var expires = moment().add('days', time).valueOf()
  var token = jwt.encode({
    iss: usr.name,
    exp: expires
  }, app.get('jwtTokenSecret'))
  return {
    token: token,
    expires: expires,
    user: usr.toJSON()
  }
}
