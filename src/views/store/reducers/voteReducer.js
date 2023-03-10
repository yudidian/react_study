import {cloneDeep} from "@/utils/comm";
import {OPP_NUM, SUP_NUM} from "@/views/store/actionsTypes";

const initial = {
  oppNum: 10,
  supNum: 0
}

export default function (state = initial, action) {
  state = cloneDeep(state)

  switch (action.type) {
    case OPP_NUM: {
      state.oppNum += 1
      break
    }
    case SUP_NUM: {
      state.supNum += 1
      break
    }
    default: {
    }
  }

  return state
}
