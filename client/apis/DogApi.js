// import request from 'superagent'

// export function getDogBreeds() {
//   return request
//     .get(`http://localhost:3000/api/v1/dogapi/breeds`)
//     .then((response) => {
//       const dogBreedInfo = response.body.text
//       return dogBreedInfo
//     })
//     .catch(errorHandler('GET', '/'))
// }

// function errorHandler(method, route) {
//   return (err) => {
//     if (err.message === 'Not Found') {
//       throw Error(
//         `Error: You need to implement an API route for ${method} ${route}`
//       )
//     } else {
//       throw Error(`${err.message} on ${method} ${route}`)
//     }
//   }
// }
