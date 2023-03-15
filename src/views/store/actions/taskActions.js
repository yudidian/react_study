import {getTackList} from "@/api/TaskDome";
import {GET_TASK_LIST, DEL_TASK_LIST, UPDATE_TASK_STATE} from "@/views/store/actionsTypes";

const taskActions = {
  async getTaskList(state) {
    const res = await getTackList( {
      limit: 100,
      page: 1,
      state: state
    })
    return {
      type: GET_TASK_LIST,
      list: res.list
    }
  },
  delTaskList(id) {
    return {
      type: DEL_TASK_LIST,
      id
    }
  },
  updateTaskState(id, state) {
    return {
      type: UPDATE_TASK_STATE,
      id,
      state
    }
  }
}

export default taskActions
