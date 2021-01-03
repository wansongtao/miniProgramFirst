/**
 * @description 请求封装
 */
class Request {
  /**
   * @description 服务器基础地址
   */
  static baseURL = 'https://api-hmugo-web.itheima.net'

  /**
   * @description get请求
   * @param {String} url 接口地址
   * @param {Object} data 参数对象
   * @returns {Promise} 返回一个promise对象
   */
  static get (url, data) {
    return Request.ajax('GET', url, data)
  }

  /**
   * @description post请求
   * @param {String} url 接口地址
   * @param {Object} data 参数对象
   * @returns {Promise} 返回一个promise对象
   */
  static post (url, data) {
    return Request.ajax('POST', url, data)
  }

  static ajax (method, url, data) {
    return new Promise((resolve, reject) => {
      const reqOption = {
        url: url ? Request.baseURL + url : url,
        header: {
          'content-type': 'application/json' // 默认值
        },
        dataType: 'json',
        method,
        success (res) {
          resolve(res)
        },
        fail (err) {
          reject(err.errMsg)
        }
      }

      if (data) {
        reqOption.data = data
      }

      wx.request(reqOption)
    })
  }
}
 
module.exports = {
  /**
   * @description get请求
   * @param {String} url 接口地址
   * @param {Object} data 参数对象
   * @returns {Promise} 返回一个promise对象
   */
  get: Request.get,
  /**
   * @description post请求
   * @param {String} url 接口地址
   * @param {Object} data 参数对象
   * @returns {Promise} 返回一个promise对象
   */
  post: Request.post
}