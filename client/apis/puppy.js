import request from 'superagent'

const baseUrl = '/api/v1/puppies'

export function getPuppies() {
  return request
    .get(`${baseUrl}`)
    .then((response) => {
      const allPuppies = response.body
      return allPuppies
    })
    .catch(errorHandler('GET', '/'))
}

export function addPuppy(newPuppy) {
  return request
    .post(`${baseUrl}/add`) //do I need a diff path
    .send(newPuppy) //why no {} to get into db?
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('POST', '/'))
}

export function addPuppyI(newPuppy) {
  return request
    .post(`${baseUrl}/add-upload`)
    .send(newPuppy)
    .then((res) => {
      return res.body
    })
    .catch(errorHandler('POST', '/'))
}

export function patchPuppy(puppy) {
  return request.patch(baseUrl + '/' + puppy.id).send(puppy)
}

export function removePuppy(puppyId) {
  return request
    .del(`${baseUrl}/${puppyId}`)
    .then((res) => res)
    .catch(errorHandler('DELETE', '/v1/puppies/:id'))
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
