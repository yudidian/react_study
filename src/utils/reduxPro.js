import { createStore, combineReducers, applyMiddleware } from 'redux';
import React from "react";
// 中间件函数
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

// 封装 createStore() 函数
const createAppStore = (initialState = {}, reducers = {}, middlewares = []) => {
  const rootReducer = combineReducers(reducers);
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares, logger));
  return store;
};

// 封装 connect() 函数
const connect = (mapStateToProps = null, mapDispatchToProps = null) => {
  return (Component) => {
    return class extends React.Component {
      componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {};
        const dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {};
        return <Component {...this.props} {...stateProps} {...dispatchProps} />;
      }
    };
  };
};

// 封装 createAction() 函数
const createAction = (type, ...args) => {
  return { type, payload: args };
};

// 封装 createReducer() 函数
const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, ...action.payload) : state;
  };
};
