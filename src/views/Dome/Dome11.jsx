import {useEffect, useState} from "react";
import {getTackList} from "@/api/TaskDome";

const Dome11 = function (props) {
  const [x, setX] = useState(0), [data, setData] = useState([])
  console.log("render")
  useEffect(() => {
    console.log("componentDidMount")
    // 获取异步数据
    const sendGetTaskList = async () => {
      const res = await getTackList({
        limit: 100,
        page: 1,
        state: 0
      })
      setData(res.list)
    }
    sendGetTaskList()
  }, [])


  return (
      <>
        <div>x:{x}</div>
        <button onClick={() => {
          setX(x + 1)
        }}>增加X
        </button>
        {data.map((item, index) => {
          return (
              <li key={index}>{item.state}</li>
          )
        })}
      </>
  )
}
export default Dome11
