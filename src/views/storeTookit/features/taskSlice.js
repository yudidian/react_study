import {createSlice} from "@reduxjs/toolkit"
import {getTackList} from "@/api/TaskDome";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    taskList: null
  },
  reducers: {
    sendGetTaskList(state, action) {
      const {list} = action.payload
      state.taskList = list
    },
    delTaskList(state, action) {
      state.taskList = state.taskList.filter(item => {
        return item.id !== action.payload.id
      })
    },
    updateTaskState(state, action) {
      const {id, type} = action.payload
      for (const item of state.taskList) {
        if (item.id === id) {
          item.state = type
          break
        }
      }
    }
  }
})
const {sendGetTaskList, delTaskList, updateTaskState} = taskSlice.actions
const getTaskListAsync = (params) => {
  return async dispatch => {
    let list = []
    const res = await getTackList(params)
    if (res.code === 0) {
      list = res.list
    }
    dispatch(sendGetTaskList({list}))
  }
}
export {getTaskListAsync, delTaskList, updateTaskState}
export default taskSlice.reducer
