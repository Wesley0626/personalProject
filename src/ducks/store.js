import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import jobReducer from './jobReducer'


const rootReducer = combineReducers({
  user: userReducer,
  jobs: jobReducer
})

// export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(promiseMiddleware)))