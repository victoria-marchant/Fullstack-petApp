import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { addNewPuppy } from '../actions/PuppyActions'
import CatorDog from './CatOrDog'


export default function Newpuppy() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [newEntry, setNewEntry] = useState({
    id: '',
    name: '',
    owner: '',
    animalType: '',
    breed: '',
    imagePath: '',
  })
  const [isOtherType, setOtherType] = useState('other')

// console.log(isOtherType)

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

function handleTypeChange(e) {
  setOtherType(e.target.value)

}

return(

<>
<div className='puppycontainer'>
  <a href="/">Home</a>

<form  onSubmit={onSubmit}>
        <h2 className="post-title">Add Your New Pet</h2>
        <img src="/images/dogpaw.png" alt="paw print"/>

        <div className="pure-control-group">
          <label htmlFor="name">Pet Name </label>
          <input
            type="text"
            name="name"
            value={newEntry.name}
            onChange={handleChange}
          />
        </div>
        
     

        <div className="pure-control-group">
          <label htmlFor="owner">Pet Owner </label>
          <input
            name="owner"
            value={newEntry.owner}
            onChange={handleChange}
          ></input>
        </div>

           {/* cat or dog encorp futher external api for cat switch with radio button */}
           <div className="pure-control-group">
            <label htmlFor='pet_type'>Pet Type: </label>
          <input
            type="radio"
            name="pet_type"
            id= "catSelect"
            value="cat"
            onChange={handleTypeChange}
          />
          <label htmlFor="catSelect">Cat</label>
          <input
            type="radio"
            name="pet_type"
            id= "dogSelect"
            value="dog"
            onChange={handleTypeChange}
          /> 
          <label htmlFor="dogSelect">Dog</label>
          <input
            type="radio"
            name="pet_type"
            id= "otherSelect"
            value="other"
            checked={isOtherType === "other"}
            onChange={handleTypeChange}
          />
          <label htmlFor="otherSelect">Other</label>
        </div>
        <div>
{isOtherType === 'other' ? ( <div> <label htmlFor="other">Animal Breed: </label>
             <input
            id='other'
              className="primary-button"
              type="text"
              name="animalbreed"
              onChange={handleChange}
            /> </div> ) : (<CatorDog animalType = {isOtherType}/>)}
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