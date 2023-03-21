/*
* target 当前类
*
*
* */
// const test = (target) => {
//   target.prototype.num = 10
//   target.prototype.getNum = function () {
//     return this.num
//   }
// }
//
// const handler = (x, y) => {
//   return (target) => {
//     target.prototype.getSum = function () {
//       return x + y
//     }
//   }
// }
// @test
// @handler(10,20)
// class Dome{
//
//   // getNum() {
//   //   return this.num
//   // }
// }
//
// console.log(new Dome().getSum())

/*
* 给类的属性进行装饰
* */
// const test = (target, name, descriptor) => {
//   /*
//     修饰普通属性
//   * target: Dome.prototype
//   * name: x
//   * descriptor : {configurable: true, enumerable: true, writable: true}
//   *
//   *  */
//
//   /*
//     修饰函数
//   * target: Dome.prototype
//   * name: x
//   * descriptor : {configurable: true, enumerable: false, writable: true, value: 当前函数}
//   * */
// }
const readonly = (_, name, des) => {
  des.writable = false
}
const logger = (_, name, des) => {
  const fun = des.value
  des.value = function (...params) {
    console.time(name)
    fun(...params)
    console.timeEnd(name)
  }
}
class Dome {

  @readonly
  x = 100

  @logger
  getNum() {
    for (let i = 0; i < 100000; i++) {}
    return 0
  }
}
const dome = new Dome()
console.log(dome.getNum())
