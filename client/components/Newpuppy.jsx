import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { addNewPuppy } from '../actions/PuppyActions'


export default function Newpuppy() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [newEntry, setNewEntry] = useState({
    id: "",
    name: '',
    owner: '',
    breed: '',
    imagePath: '',
  })


  function onSubmit(evt) {
evt.preventDefault()
dispatch(addNewPuppy(newEntry))
setNewEntry(newEntry)
navigate(`/`)
  }

function handleChange(evt){
  console.log(evt.target.name)
setNewEntry({
  ...newEntry,
  [evt.target.name]: evt.target.value,
})
}

return(

<>
<div className='puppycontainer'>
  <a href="/">Home</a>

<form  onSubmit={onSubmit}>
        <h2 className="post-title">Add Your New Doggo</h2>
        <img src="/images/dogpaw.png" alt="paw print"/>

        <div className="pure-control-group">
          <label htmlFor="name">Puppy Name </label>
          <input
            type="text"
            name="name"
            value={newEntry.name}
            onChange={handleChange}
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="owner">Puppies Owner </label>
          <input
            name="owner"
            value={newEntry.owner}
            onChange={handleChange}
          ></input>
        </div>

        <div className="pure-control-group">
          <label htmlFor="breed">Puppies Breed </label>
          <input
            name="breed"
            value={newEntry.breed}
            onChange={handleChange}
          ></input>
        </div>

        <div className="pure-control-group">
          <label htmlFor="imagePath">Image URL </label>
          <input
            name="imagePath"
            value={newEntry.imagePath}
            onChange={handleChange}
          ></input>
        </div>

        <div className="pure-controls">
          <input className="pure-button" type="submit" />
        </div>
    
      </form>
     
      </div>
      </>
)  
}