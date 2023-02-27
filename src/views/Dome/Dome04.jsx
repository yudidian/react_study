import react, {useState, useRef, useEffect, forwardRef, useImperativeHandle} from 'react'

export const FunGetRef = forwardRef(function (props, ref) {
  const myEl = useRef()
  const [count, setCount] = useState(0)
  useImperativeHandle(ref, () => ({
    setElement(val) {
      return setCount(val)
    },
    getElement() {
      return count
    }
  }))
  useEffect(() => {
    console.log(myEl.current)
  })
  return (
      <>
        <div title="函数式组件获取ref" ref={myEl}>函数式组件获取ref</div>
        <p>{count}</p>
        <button onClick={() => {
          setCount((val) => {
            return val + 1
          })
        }}>增加
        </button>
      </>
  )
})

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
    return (
        <>
          <div title="方式一" ref="first">通过this.refs获取</div>
          <div title="方式二" ref={x => this.tow = x}>通过回调函数</div>
          <div title="方式三" ref={this.three}>通过createRef获取</div>
        </>
    )
  }
}
