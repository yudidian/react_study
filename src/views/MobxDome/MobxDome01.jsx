import {observer} from 'mobx-react'
import store from "@/views/MobxStore"

const MobxDome = observer(function MobxDome(props) {
  const num = store.num

  return(
      <>
        <div>{num}</div>
        <button onClick={() => {
          store.change()
        }}>change</button>
      </>
  )
})

export default MobxDome
