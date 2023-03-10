import { combineReducers } from "redux"

import voteReducer from "@/views/store/reducers/voteReducer"
import personReducer from "@/views/store/reducers/personReducer";

const reducers = combineReducers({
  vote: voteReducer,
  person: personReducer
})

export default reducers
