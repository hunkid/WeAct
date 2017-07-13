/**
 * @author Seant
 * @date 17/7/12
 */

var moment = require('moment')
var jwt = require('jwt-simple')

const jwtTokenSecret = require('../config/index').jwtTokenSecret
/**
 * token生成器
 * @param {Object} usr
 * @param {Number} time
 * @return {String}
 */
function tokenMaker (usr, time) {
  var expires = moment().add(time, 'days').valueOf()
  var token = jwt.encode({
    iss: usr.name,
    exp: expires
  }, jwtTokenSecret)
  return token
}
/**
 * 验证token
 */
function authToken (req, res, next) {
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token']
  if (token) {
    try {
      var decoded = jwt.decode(token, jwtTokenSecret)
      if (decoded.exp <= Date.now()) {
        res.end('Access token has expired', 400)
      }
    } catch (err) {
      return next()
    }
  } else {
    next()
  }
}

module.exports = {
  tokenMaker,
  authToken
}
