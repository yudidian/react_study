import {cloneDeep} from "@/utils/comm";
import {GET_TASK_LIST, DEL_TASK_LIST, UPDATE_TASK_STATE} from "@/views/store/actionsTypes"

const initState = {
  taskList: undefined
}
const taskReducer = function (state = initState, action) {

  const newState = cloneDeep(state)
  switch (action.type) {
    case GET_TASK_LIST: {
      newState.taskList = action.list
      break
    }
    case DEL_TASK_LIST: {
      newState.taskList = state.taskList.filter(item => {
        return item.id !== action.id
      })
      break
    }
    case UPDATE_TASK_STATE: {
      for (const item of newState.taskList) {
        if (item.id === action.id) {
          item.state = action.state
          break
        }
      }
      break
    }
    default: {}
  }
  return newState
}
export default taskReducer
