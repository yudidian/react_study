import {OPP_NUM, SUP_NUM} from "@/views/store/actionsTypes";

const personActions = {
  support(value) {
    return {
      type: SUP_NUM,
      payload: value
    }
  },
  oppose(value) {
    return {
      type: OPP_NUM,
      payload: value
    }
  }
}
export default personActions
