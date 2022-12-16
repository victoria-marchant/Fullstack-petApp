// import { getDogBreeds } from '../apis/DogApi'

// export const DOG_BREEDS = 'DOG_BREEDS'
// export const DOG_BREED_NAMES = 'DOG_BREED_NAMES'
// // export const REQUEST_INFO = 'REQUEST_INFO'

// // export function requestBreedInfo() {
// //   return {
// //     type: REQUEST_INFO,
// //   }
// // }

// export function dogBreeds(breedData) {
//   return {
//     type: DOG_BREEDS,
//     payload: breedData,
//   }
// }

// export function fetchDogBreeds() {
//   return (dispatch) => {
//     return getDogBreeds()
//       .then((breeds) => {
//         dispatch(dogBreeds(breeds))
//         return null
//       })
//       .catch((err) => {
//         console.error(err.message)
//       })
//   }
// }

// export function dogBreedNames(breedData) {
//   // console.log(breedData)
//   return {
//     type: DOG_BREED_NAMES,
//     payload: breedData.map((breed) => breed.name),
//   }
// }

// export function fetchDogBreedNames() {
//   return (dispatch) => {
//     return getDogBreeds()
//       .then((breedData) => {
//         dispatch(dogBreedNames(breedData))
//         return null
//       })
//       .catch((err) => {
//         console.error(err.message)
//       })
//   }
// }
