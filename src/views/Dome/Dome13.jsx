import React, {useEffect, useRef, useState} from "react";
let copy_box1 = null
let copy_box2 = null
export default function Dome12() {
  const content = useRef(null)
  const box1 = useRef(null)
  const box2 = React.createRef()
  const [num, setNum] = useState(0)

  useEffect(() => {
    if (!copy_box1 && !copy_box2) {
      copy_box1 = box1
      copy_box2 = box2
    }
    console.log(content.current)
    console.log(box1 === copy_box1)
    console.log(box2 === copy_box2)
  })
  return (
      <>
        <div ref={content}>
          <span ref={box1} onClick={() => {
            const node = document.createElement("span")
            node.innerText = "新增child"
            console.log(content.current.appendChild(node))
            setNum(num+1)
          }}>span1 : {num}</span>
          <span ref={box2}>span2</span>
        </div>

      </>
  )
};
