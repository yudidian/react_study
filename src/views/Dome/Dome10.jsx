import {useState} from "react";
import {flushSync} from "react-dom"
const Dome10 = function (props) {
  console.log("render")
  const [obj, setObj] = useState({
    x: 10,
    y: 20,
    z: 30
  })
  return (
      <>
        <div>x:{obj.x},y:{obj.y},z:{obj.z}</div>
        <button onClick={() => {
          for (let i = 0; i < 10; i++) {

            flushSync(() => {
              setObj((prevState) => {
                return {
                  ...obj,
                  x: prevState.x+1
                }
              })
            })
          }
        }}>增加X</button>
      </>
  )
}
// const Dome10 = function (props) {
//   const [sup, setSup] = useState(0),
//       [noSup, setNoSup] = useState(0)
//   return (
//       <>
//         <header>总人数：{sup + noSup}</header>
//         <div>
//           <span>支持人数{sup}</span>
//           <Button type={"primary"} onClick={() => {
//             setSup(sup + 1)
//           }}>增加</Button>
//         </div>
//         <div>
//           <span>反对人数{noSup}</span>
//           <Button type={"primary"} onClick={() => {
//             setNoSup(noSup + 1)
//           }}>增加</Button>
//         </div>
//       </>
//   )
// }

export default Dome10
