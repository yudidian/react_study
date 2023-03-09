import { createStore } from "redux"
import {cloneDeep} from "@/utils/comm";

const init = {
  oppNum: 10,
  supNum: 20
}

const reducer = function (state = init, action) {
  state = cloneDeep(state)
  switch (action.type) {
    case "OPP_NUM": {
      state.oppNum = action.payload
      break
    }
    case "SUP_NUM": {
      state.supNum = action.payload
      break
    }
    default: {

    }
  }
  return state
}
const store = createStore(reducer)

export default store
