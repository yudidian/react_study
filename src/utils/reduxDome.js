export const createStore = function (reducer) {
  if (typeof reducer !== "function") {
    throw new Error("reducer必须是函数")
  }
  let state = undefined, listeners = []

  const getState = function () {
    return state
  }

  const subscribe = function (callBack) {
    if (typeof callBack !== "function") {
      throw new Error("必须是函数")
    }
    if(!listeners.includes(callBack)) {
      listeners.push(callBack)
    }

    return function () {
      const index = listeners.indexOf(callBack)
      listeners.splice(index, 1)
    }
  }

  const dispatch = function (action) {
    if (typeof action !== "object") {
      throw new Error("action必须是对象")
    }
    if(typeof action.type === "undefined") {
      throw new Error("type 值是必须的")
    }

    state = reducer(state, action)
    listeners.forEach(listener => {
      listener()
    })
    return action
  }
  dispatch({
    type: Symbol()
  })
  return {
    dispatch,
    subscribe,
    getState
  }
}


