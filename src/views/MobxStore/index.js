import {observable, action, autorun} from "mobx";

class Store {
  @observable
  num = 10

  @action
  change() {
    this.num++
  }
}

const store = new Store()
autorun(() => {
  console.log("autorun:", store)
})
export default store

/*
* observable 把状态变为可监测的
*
* autorun 开始会执行一次，后续依赖值变化又会执行
* autorun(() => {
*
*
* })
* computed 计算属性
*
* reaction 和autorun 一样 只是初始化时不会执行
*
* */
