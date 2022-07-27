import React, { useState} from 'react'

import { useParams,  useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { editPuppy, deletePuppy  } from '../actions/PuppyActions'



export default function Editpuppy() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const puppies = useSelector(state => state.puppies)

  const puppy =  puppies.find((item) =>
  (params.id == item.id))

  const [updateEntry, setUpdateEntry] = useState(puppy)


  function onSubmit(evt) {
    evt.preventDefault()
    dispatch(editPuppy(updateEntry))
    navigate(`/`)
  }


  function handleChange(evt){
    setUpdateEntry({
      ...updateEntry,
      [evt.target.name]: evt.target.value,
    })
  }


    function handleDelete(evt){
    evt.preventDefault()
    dispatch(deletePuppy(params.id))
    navigate(`/`)
    }

  return(
<>
<div className='puppycontainer'>
<a href="/">Home</a>
<form  onSubmit={onSubmit}>
        <h2 className="post-title">Update Your Doggo</h2>
        <img src={puppy.imagePath} alt="paw print"/>

        <div className="pure-control-group">
          <label htmlFor="name">Puppy Name </label>
          <input
            placeholder={puppy.name}
            type="text"
            name="name"
            value={updateEntry.name}
            onChange={handleChange}
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="owner">Puppies Owner </label>
          <input
            type="text"
            name="owner"
            value={updateEntry.owner}
            onChange={handleChange}
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="breed">Puppies Breed </label>
          <input
            type="text"
            name="breed"
            value={updateEntry.breed}
            onChange={handleChange}
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="URL">Puppy Pic URL </label>
          <input
            type="text"
            name="URL"
            value={updateEntry.imagePath}
            onChange={handleChange}
          />
        </div>

    
        <div className="pure-controls">
          <input className="pure-button" type="submit" />
        </div>
    
      </form>
      <br></br>
      <br></br>
      <div className="pure-controls">
      <button aria-label="deletepuppy" onClick={handleDelete}>
        Delete Puppy
      </button>
        </div>
      </div>
      </>
      )}
