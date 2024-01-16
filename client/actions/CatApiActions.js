import { getCatBreeds } from '../apis/CatApi'

export const CAT_BREEDS = 'CAT_BREEDS'

export function catBreeds(breedData) {
  return {
    type: CAT_BREEDS,
    payload: breedData,
  }
}

export function fetchCatBreeds() {
  return (dispatch) => {
    return getCatBreeds()
      .then((catdata) => {
        dispatch(catBreeds(catdata))
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}
