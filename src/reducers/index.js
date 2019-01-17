import { combineReducers } from 'redux'
import todoReducer from './manage'
import filterReducer from './filter'

export default combineReducers({
    todoReducer,filterReducer
})