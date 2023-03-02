import {useEffect, useRef, useState} from "react";
import Child from "@/views/Dome/Child";



const Dome14 = function () {
  const box = useRef(null)
  useEffect(() => {
    console.log(box.current.sendValue())
  },[])
  return(
      <>
        <Child ref={box}></Child>
        <div>
          <button onClick={() => {
            console.log(box.current.sendValue())
          }}>获取组件值</button>
        </div>
      </>

  )
}
export default Dome14
