import { getDogBreeds } from '../apis/DogApi'

export const DOG_BREEDS = 'DOG_BREEDS'

export function dogBreeds(breedData) {
  return {
    type: DOG_BREEDS,
    payload: breedData,
  }
}

export function fetchDogBreeds() {
  return (dispatch) => {
    return getDogBreeds()
      .then((dogdata) => {
        dispatch(dogBreeds(dogdata))
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}
