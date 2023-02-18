import PropTypes from "prop-types"

const Dome01 = function (props) {
  const title = "title"
  const array = [1, 2, 3]
  return (
      <>
        <div>{title}</div>
        <div>
          <ul>
            {array.map(item => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </div>
        <div>
          <p>父组件传递的值</p>
          <p>{props.childName}</p>
          <p>{props.childTitle}</p>
          <p>{props.childAge}</p>
        </div>
      </>
  )
}
Dome01.defaultProps = {
  childName: "default val"
}
Dome01.propTypes = {
  childName: PropTypes.string,
  childTitle: PropTypes.string.isRequired,
  childAge: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default Dome01
