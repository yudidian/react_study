import {createUseStyles} from "react-jss";
import React from "react";
class Dome extends React.Component{
  render() {
    const {grand, parent, son} = this.props
    console.log(this.props)
    return(
        <div className={grand}>
          <div className={parent}>
            <div className={son}></div>
          </div>
        </div>
    )
  }
}
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
const ProxyDome = function (props) {
  console.log(props)
  return <Dome {...props}  {...useStyle({
    maxSize: 400,
    minSize: 200
  })}></Dome>
}
export default ProxyDome
