import {
  getPuppies,
  addPuppy,
  addPuppyI,
  patchPuppy,
  removePuppy,
} from '../apis/puppy'

export const SET_PUPPIES = 'SET_PUPPIES'
export const POST_PUPPY = 'POST_PUPPY'
export const UPDATE_PUPPY = 'UPDATE_PUPPY'
export const RETIRE_PUPPY = 'RETIRE_PUPPY'

export function setPuppies(puppies) {
  return {
    type: SET_PUPPIES,
    payload: puppies,
  }
}

export function fetchPuppies() {
  return (dispatch) => {
    return getPuppies()
      .then((Puppies) => {
        dispatch(setPuppies(Puppies))
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}

export function postPuppy(puppy) {
  return {
    type: POST_PUPPY,
    payload: {
      // id: puppy.id,
      name: puppy.name,
      owner: puppy.owner,
      breed: puppy.breed,
      imagePath: puppy.imagePath,
    },
  }
}

export function addNewPuppy(newPuppy) {
  return (dispatch) => {
    return addPuppy(newPuppy)
      .then((puppy) => {
        dispatch(postPuppy(puppy))
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}

export function addNewPuppyI(newPuppy) {
  // console.log(newPuppy)
  return (dispatch) => {
    return addPuppyI(newPuppy)
      .then((puppy) => {
        dispatch(postPuppy(puppy))
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}

export function updatePuppy(puppy) {
  return {
    type: UPDATE_PUPPY,
    payload: puppy,
  }
}

export function editPuppy(puppy) {
  return (dispatch) => {
    return patchPuppy(puppy)
      .then(() => {
        dispatch(updatePuppy(puppy))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function retirePuppy(id) {
  return {
    type: RETIRE_PUPPY,
    payload: id,
  }
}

export function deletePuppy(id) {
  return (dispatch) => {
    return removePuppy(id)
      .then(() => {
        dispatch(retirePuppy(id))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
