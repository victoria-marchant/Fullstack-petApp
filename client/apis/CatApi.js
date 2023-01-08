import request from 'superagent'

export function getCatBreeds() {
  return request
    .get(`http://localhost:3000/api/v1/catapi/breeds`)
    .then((response) => {
      const catBreedInfo = response.body
      return catBreedInfo
    })
    .catch(errorHandler('GET', '/'))
}

function errorHandler(method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(
        `Error: You need to implement an API route for ${method} ${route}`
      )
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
