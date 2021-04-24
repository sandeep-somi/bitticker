import { combineReducers } from 'redux'
import app from '../containers/App/reducer'
import widget from '../containers/Widget/reducer'

export default combineReducers({
  app,
  widget
})