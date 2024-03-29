import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { addNewPuppy, addNewPuppyI } from '../actions/PuppyActions'
import AddImage from './AddImage'
import CatorDog from './CatOrDog'


export default function Newpuppy() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [newEntry, setNewEntry] = useState({
    // id: '',
    name: '',
    owner: '',
    animalType: '',
    breed: '',
    imagePath: '',
  })
  const [isOtherType, setOtherType] = useState('other')
  const [isImageType, setImageType] = useState('URL')




  function onSubmit(evt) {
    
evt.preventDefault()
console.log(newEntry)
const formData = new FormData()
if (isImageType === 'URL') {
  dispatch(addNewPuppy(newEntry))
} else {
  Object.entries(newEntry).forEach(([key, value]) =>
    formData.append(key, value)
    
  
  )
  for(let entry of formData){console.log(entry)}
  
  dispatch(addNewPuppyI(formData))
}
navigate('/')  
}

  function handleiChange(e) {
   
  
    const newForm = {
      ...newEntry,
      imagePath: e.target.files[0], 
    }
  
    
    setNewEntry(newForm)
  }


const handleChange=(evnt)=>{
        
  const inputFieldValue = evnt.target.value;
  const inputFieldName = evnt.target.name;
  const NewInputValue = {...newEntry,[inputFieldName]:inputFieldValue}
  setNewEntry(NewInputValue);
  }

function handleTypeChange(e) {
  
  setOtherType(e.target.value)
  

}

function handleiTypeChange(e){
  setImageType(e.target.value)
  
 
}

return(

<>
<div className='puppycontainer'>
  <a href="/">Home</a>

<form  onSubmit={onSubmit} encType="multipart/form-data" method="post">
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

          
           <div className="pure-control-group">
            <label htmlFor='animalType'>Pet Type: </label>
          <input
            type="radio"
            name="animalType"
            id= "catSelect"
            value="cat"
            onClick={handleTypeChange}
            onChange={handleChange}
          />
          <label htmlFor="catSelect">Cat</label>
          <input
            type="radio"
            name="animalType"
            id= "dogSelect"
            value="dog"
            onClick={handleTypeChange}
            onChange={handleChange}
          /> 
          <label htmlFor="dogSelect">Dog</label>
          <input
            type="radio"
            name="animalType"
            id= "otherSelect"
            value="other"
            // checked={isOtherType === "other"}
            onClick={handleTypeChange}
            onChange={handleChange}
          />
          <label htmlFor="otherSelect">Other</label>
        </div>
        <div>
{isOtherType === 'other' ? ( <div> <label htmlFor="other">Animal Breed: </label>
             <input
            id='other'
              className="primary-button"
              type="text"
              name="breed"
              value = {newEntry.breed}
              onChange={handleChange}
            /> </div> ) : (<CatorDog animalType = {isOtherType} breed = {newEntry.breed} name ={newEntry.name}  handleChange = {handleChange}/>)}
           </div>

        <div className="pure-control-group">
          <label htmlFor='pet_type'>Image Upload Format: </label>
          <input
            type="radio"
            name="image_type"
            id= "URLSelect"
            value="URL"
            checked={isImageType === "URL"}
            onChange={handleiTypeChange}
          />
          <label htmlFor="URLSelect">URL</label>

          <input
            type="radio"
            name="image_type"
            id= "uploadSelect"
            value="upload"
            onChange={handleiTypeChange}
          /> 
          <label htmlFor="uploadSelect">Upload</label>
         <AddImage imageType = {isImageType} imagePath = {newEntry.imagePath} handleChange = {handleChange} handleiChange ={handleiChange}/>
          {/* <AddImage/> */}
          {/* <label htmlFor="imagePath">Image URL </label>
          <input
            name="imagePath"
            value={newEntry.imagePath}
            onChange={handleChange}
          ></input> */}
        </div>

        <div className="pure-controls">
          <input className="pure-button" type="submit" />
        </div>
    
      </form>
     
      </div>
      </>
)  
}