import {createStore, applyMiddleware} from "redux"
import reducers from "@/views/store/reducers";
import reduxLogger from "redux-logger"
import reduxThunk from "redux-thunk"
import reduxPromise from "redux-promise"

const store = createStore(reducers, applyMiddleware(reduxLogger, reduxThunk, reduxPromise))
export default store
