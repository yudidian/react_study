import {useState, forwardRef, useImperativeHandle} from "react";

const Child = forwardRef(function (props, ref) {
  const [num, setNum] = useState(0)
  const sendValue = () => {
    console.log("返回num值")
    return num
  }
  useImperativeHandle(ref, () => {
    return {
      sendValue
    }
  })
  return (
      <>
        <div>子组件num：{num}</div>
        <button onClick={() => {
          setNum(num + 1)
        }}>增加
        </button>
      </>
  )
})
export default Child
