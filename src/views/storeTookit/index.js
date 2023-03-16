import {configureStore} from "@reduxjs/toolkit"
import taskSlice from "@/views/storeTookit/features/taskSlice";
import reduxLogger from "redux-logger"
import reduxThunk from "redux-thunk"
import reduxPromise from "redux-promise"

export default configureStore({
  reducer: {
    task: taskSlice
  },
  middleware: [reduxLogger,reduxThunk,reduxPromise]
})
