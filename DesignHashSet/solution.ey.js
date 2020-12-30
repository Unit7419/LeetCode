/*
 * @Date: 2020-12-30 11:10:43
 * @LastEditors: elegantYu
 * @LastEditTime: 2020-12-30 11:31:17
 * @Description: 补做作业
 */

class HashEy {
  constructor () {
    this.obj = {}
  }

  add(value) {
    this.obj[value] = value
  }

  contains(value) {
    return !!this.obj[value]
  }

  remove(value) {
    delete this.obj[value]
  }
}