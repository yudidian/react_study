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

### js 内置对象分类
#### 值属性
+ Infinity
+ NaN
+ undefined
#### 函数类型 
+ _**全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果直接返回给调用者。**_
+ eval()
  + 函数会将传入的字符串当做 JavaScript 代码进行执行
  ```js
    console.log(eval('2 + 2'));
    // Expected output: 4
  ```
+ isFinite()
  + 判断一个值是否是有效数值
  + 会进行数值转换
  ```js
    console.log(isFinite(123)) // true
    console.log(isFinite("123")) // true
    console.log(isFinite("123a")) // false
  ```
+ isNaN()
  + 判断一个值是否是NaN
+ parseFloat()
  + 函数解析一个参数（必要时先转换为字符串）并返回一个浮点数
  ```js
  console.log(parseFloat(4.567)); // 4.567

  console.log(parseFloat('4.5a67abcdefgh')); // 4.5

  console.log(parseFloat('abcdefgh')); // NaN
  ```
+ parseInt(string, radix)
  + 解析一个字符串并返回指定基数的十进制整数
  + radix => 2-36 表示进制
+ decodeURL(string) 特殊字符也会转码
  + 生成一个统一标准的url
+ decodeURLComponent()
  + 对decodeURL 生成的url 进行解码
+ encodeURL() 特殊字段进行保留
+ encodeURLComponent()
  + encodeURL 生成的url 进行解码

#### 基本对象
+ Object
+ Function
+ Boolean
+ Symbol
