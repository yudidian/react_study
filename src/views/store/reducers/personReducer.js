import {cloneDeep} from "@/utils/comm";

const initial = {
  age: 10
}

export default function (state = initial, action) {
  state = cloneDeep(state)

  switch (action.type) {
    case "change_age": {
      state.age = action.payload
      break
    }
    default: {
    }
  }

  return state
}
