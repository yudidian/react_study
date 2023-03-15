import { combineReducers } from "redux"

import voteReducer from "@/views/store/reducers/voteReducer"
import personReducer from "@/views/store/reducers/personReducer";
import taskReducer from "@/views/store/reducers/taskReducer";

const reducers = combineReducers({
  vote: voteReducer,
  person: personReducer,
  task: taskReducer
})

export default reducers
