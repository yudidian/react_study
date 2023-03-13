import {OPP_NUM, SUP_NUM} from "@/views/store/actionsTypes";

const deplay = (time = 1000) => {
    return new Promise(resolve => {
      setTimeout(()=> {
        resolve({
          val: 123446
        })
      }, time)
    }, reject =>{
      reject(new Error("test"))
    })
}
const getInfo = async () => {
  const res = await deplay()
  return {
    val: res
  }
}

const voteActions = {
  async support(value) {
    const res = await getInfo()
    console.log(res.val)
    return {
      type: SUP_NUM,
      payload: value
    }
  },
  oppose(value) {
    return async (dispatch) => {
      const res = await getInfo()
      console.log(res.val)
      dispatch({
        type: OPP_NUM,
        payload: value
      })
    }
  }
}
export default voteActions
