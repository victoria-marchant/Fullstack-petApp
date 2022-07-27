import { combineReducers } from 'redux'

import puppiesReducer from './puppiesReducer'

export default combineReducers({
  puppies: puppiesReducer,
})
