import { createStore } from "redux"
import reducers from "@/views/store/reducers";

const store = createStore(reducers)
export default store
