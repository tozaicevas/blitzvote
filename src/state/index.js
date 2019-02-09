import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore(preLoadedState) {
  const store = createStore(
    createRootReducer(history),
    preLoadedState,
    compose(applyMiddleware(routerMiddleware(history)))
  )

  return store
}