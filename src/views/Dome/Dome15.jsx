import {useMemo, useState} from "react";

const Dome15 = function (props) {
  const [sup, setSup] = useState(10)
  const [protest, setProtest] = useState(10)
  const [other, setOther] = useState(10)
  const percent = useMemo(() => {
    console.log("重新计算")
    return (sup / (sup + protest) * 100).toFixed(2) + "%"
  }, [sup, protest])
  return (
      <>
        <div>
          <p>
            <span>支持人数：{sup}</span>
          </p>
          <p>
            <span>
              反对人数：{protest}
            </span>
          </p>
          <p>
            百分比：{percent}
          </p>
          <p>
            其他数据：{other}
          </p>
          <div>
            <button onClick={() => {
              setSup(sup + 1)
            }}>支持
            </button>
            <button onClick={() => {
              setProtest(protest + 1)
            }}>反对
            </button>
            <button onClick={() => {
              setOther(other + 1)
            }}>其他数据
            </button>
          </div>
        </div>
      </>
  )
}
export default Dome15
