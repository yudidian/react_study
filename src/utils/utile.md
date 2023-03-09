### 对象深克隆
### for in 和 for of 的区别
#### for in
+ for in 是ES5标准， for of 是ES6 标准
+ for in 可遍历数组 顺序不能保证
+ 会遍历数组所有可枚举属性， 通常配合hasOwnProperty(key) 来将原型对象踢出
+ for in 不适合遍历数组 适合遍历对象
```js
const arr = [1,2,3,4,5]
for (const arrKey in arr) {
  console.log(arrKey)
  console.log(typeof arrKey)
}
```
#### for of
+ 只会遍历数组内部的值
+ 返回的就是数组的值
+ 与forEach不同的是 可使用break， continue， return 语句
