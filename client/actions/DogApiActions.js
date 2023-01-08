import { getDogBreeds } from '../apis/DogApi'

export const DOG_BREEDS = 'DOG_BREEDS'
// export const DOG_BREED_NAMES = 'DOG_BREED_NAMES'
// export const REQUEST_INFO = 'REQUEST_INFO'

// export function requestBreedInfo() {
//   return {
//     type: REQUEST_INFO,
//   }
// }

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

// export function dogBreedNames(breedNames) {
//   // console.log(breedData)
//   return {
//     type: DOG_BREED_NAMES,
//     payload: breedNames,
//   }
// }

// export function fetchDogBreedNames() {
//   return (dispatch) => {
//     return getDogBreeds()
//       .then((breedData) => {
//         breedData.map((dogs) => dogs.name)
//       })
//       .then((names) => {
//         dispatch(dogBreedNames(names))
//         return null
//       })
//       .catch((err) => {
//         console.error(err.message)
//       })
//   }
// }
