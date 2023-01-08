import { DOG_BREEDS } from '../actions/DogApiActions'

const initialState = []

const DogApiReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case DOG_BREEDS:
      return payload
    default:
      return state
  }
}

export default DogApiReducer
