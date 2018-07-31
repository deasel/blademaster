/**
 * localStorage 封装类，除了提供通用的get/set/remove之外，还提供一个过期时间的选项
 * 类似cookie的使用方式
 * 
 * timeout默认接受可被new Date()识别的字符串或时间戳两种格式
 */
import _ from 'lodash'

export default {
  get(key) {
    if(!key) return null

    let target = JSON.parse(localStorage.getItem(key) || '{}')
    if(_.isObject(target) && _.isNumber(target.timeout)){
      let now = new Date().getTime()

      if(now >= target.timeout){
        return target.value
      } else {
        localStorage.removeItem(key)
      }
    } else {
      localStorage.removeItem(key)
    }
  },
  set(key, value, timeout) {
    if(!key) return

    if(_.isString(timeout)){
      timeout = new Date(timeout)
      timeout = _.isDate(timeout) ? timeout.getTime() : -1
    }else if(!_.isNumber(timeout)){
      timeout = -1
    }
    
    if(value !== undefined){
      let target = {
        value: value,
        timeout: timeout,
      }

      localStorage.setItem(key, JSON.stringify(target))
    }
  },

  remove(key) {
    if(!key) return
    localStorage.removeItem(key)
  },
}