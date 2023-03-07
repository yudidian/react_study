import {createUseStyles} from "react-jss"

const useStyle = createUseStyles({
  grand: (props) => {
    return {
      width: `${props.maxSize}px`,
      height: "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red"
    }
  },
  son: (props) => {
    return {
      width: `${props.minSize}px`,
      height: "200px",
      backgroundColor: "aquamarine",
      "&:hover": {
        backgroundColor: "red"
      }
    }
  },
  parent: {
    width: "300px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1df593"
  }
})
const ReactJssDome = function (props) {
  const style = useStyle({
    maxSize: 400,
    minSize: 200
  })
  return (
      <>
        <div className={style.grand}>
          <div className={style.parent}>
            <div className={style.son}></div>
          </div>
        </div>
      </>
  )
}
export default ReactJssDome
