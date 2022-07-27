import {
  SET_PUPPIES,
  POST_PUPPY,
  UPDATE_PUPPY,
  RETIRE_PUPPY,
} from '../actions/PuppyActions'

const initialState = []

const puppiesReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_PUPPIES:
      return payload
    case POST_PUPPY:
      return [...state, payload]
    case UPDATE_PUPPY:
      return state.map((puppy) => {
        if (puppy.id === payload.id) {
          return { ...puppy, ...payload }
        }
        return puppy
      })
    case RETIRE_PUPPY:
      return state.filter((puppy) => puppy !== payload)
    default:
      return state
  }
}

export default puppiesReducer
