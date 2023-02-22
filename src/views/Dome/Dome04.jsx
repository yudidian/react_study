import react from 'react'

// export const ClassGetRef = react.forwardRef(function (props, ref) {
//   // const three = react.createRef()
//   console.log(ref)
//   return(
//       <>
//         <div title="方式一" ref="first">通过this.refs获取</div>
//         {/*<div title="方式二" ref={x => this.tow = x}>通过回调函数</div>*/}
//         {/*<div title="方式三" ref={three}>通过createRef获取</div>*/}
//       </>
//   )
// })

export class ClassGetRef extends react.PureComponent {
  constructor(props) {
    super(props);
    this.three = react.createRef()
  }
  componentDidMount() {
    console.log(this.refs.first)
    console.log(this.tow)
    console.log(this.three.current)
  }

  render() {
    return(
        <>
          <div title="方式一" ref="first">通过this.refs获取</div>
          <div title="方式二" ref={x => this.tow = x}>通过回调函数</div>
          <div title="方式三" ref={this.three}>通过createRef获取</div>
        </>
    )
  }
}
