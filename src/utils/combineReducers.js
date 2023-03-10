const combineReducers = function (reducers) {
  const reducerKeys = Reflect.ownKeys(reducers)
  return function (state = {}, action) {
    let nextStore = {}
    reducerKeys.forEach(key =>{
      const reducer = reducers[key]
      nextStore[key] = reducer(state[key], action)
    })
    return nextStore
  }
}

combineReducers({
  vote: {
    a: 1
  },
  person: {
    age: 20
  }
})
