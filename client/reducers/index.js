import { combineReducers } from 'redux'

import puppiesReducer from './puppiesReducer'
import DogApiReducer from './DogApiReducer'
import CatApiReducer from './CatApiReducer'

export default combineReducers({
  puppies: puppiesReducer,
  dogBreeds: DogApiReducer,
  catBreeds: CatApiReducer,
})
