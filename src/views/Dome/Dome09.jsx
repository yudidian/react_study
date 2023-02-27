import react from "react";
import "@/style/Dome09.scss"
class Dome09 extends react.Component {
  render() {
    const root = () => {
      console.log("root：冒泡阶段")
    }
    const rootCapture = (ev) => {
      console.log("rootCapture：捕获阶段")
    }
    const prent = () => {
      console.log("prent：冒泡阶段")
    }
    const prentCapture = () => {
      console.log("prentCapture：捕获阶段")
    }
    const child = () => {
      console.log("child：冒泡阶段")
    }
    const childCapture = () => {
      console.log("childCapture：捕获阶段")
    }
    return(
        <>
          <div className="root" onClick={root} onClickCapture={rootCapture}>
            <div className="prent" onClick={prent} onClickCapture={prentCapture}>
              <div className="child" onClick={child} onClickCapture={childCapture}></div>
            </div>
          </div>

        </>
    )
  }
}

export default Dome09
