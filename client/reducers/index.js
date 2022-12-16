import { combineReducers } from 'redux'

import puppiesReducer from './puppiesReducer'
// import DogApiReducer from './DogApiReducer'

export default combineReducers({
  puppies: puppiesReducer,
  // dogBreeds: DogApiReducer,
})
