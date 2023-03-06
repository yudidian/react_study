import react, {useCallback, useMemo, useState} from "react";

let pre = null

// class Child extends react.PureComponent {
//   render() {
//     console.log("render")
//     const {handle} = this.props
//     if (!pre) {
//       pre = handle
//     }
//     console.log("判断重新渲染的出的handle是否相同", handle === pre)
//     return (
//         <>
//           <div>child</div>
//         </>
//     )
//   }
// }

const Child2 = react.memo(function (props) {
  console.log("render")
  const {obj} = props
  if (!pre) {
    pre = obj.handle
  }
  console.log(obj.num)
  console.log("判断重新渲染的出的handle是否相同", obj.handle === pre)
  return (
      <>
        <div>child</div>
      </>
  )
})


const Dome16 = function (props) {
  const [num, setNum] = useState(0)
  const handle = useCallback(() => {
    console.log("handle函数")
  }, [])
  const obj = useMemo(() => {
    return {
      handle,
      num
    }
  }, [])
  return (
      <>
        <Child2 obj={obj}></Child2>
        <div>num：{num}</div>
        <div>
          <button onClick={() => {
            setNum(num + 1)
          }}>change
          </button>
        </div>
      </>
  )
}
export default Dome16
