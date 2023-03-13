import {cloneDeep} from "@/utils/comm";
import {OPP_NUM, SUP_NUM} from "@/views/store/actionsTypes";

const initial = {
  oppNum: 10,
  supNum: 0
}

export default function voteReducer(state = initial, action) {
  state = cloneDeep(state)
  console.log("voteReducer")
  switch (action.type) {
    case OPP_NUM: {
      state.oppNum = action.payload
      break
    }
    case SUP_NUM: {
      state.supNum = action.payload
      break
    }
    default: {
    }
  }

  return state
}
