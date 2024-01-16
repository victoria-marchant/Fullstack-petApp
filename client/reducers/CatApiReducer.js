import { CAT_BREEDS } from '../actions/CatApiActions'

const initialState = []

const CatApiReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CAT_BREEDS:
      return payload
    default:
      return state
  }
}

export default CatApiReducer
