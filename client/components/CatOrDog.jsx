
import React, { useState} from 'react'

import { useParams,  useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { editPuppy, deletePuppy  } from '../actions/PuppyActions'





export default function CatOrDog(props) {

  const catDog = props.animalType
  console.log(catDog)
  return(

<div>
{catDog === "dog" ? (<div>
<label htmlFor="dogBreed">Dog Breed: </label>
             <select
            id='dogBreed'
              name="dogType"
              // onChange={handleChange}
            > 
            <option value="Pug">Pug</option>
            <option value="GermanShepard">GermanShepard</option>
            </select>
            </div> ): (<div>
<label htmlFor="catBreed">Cat Breed: </label>
             <select
            id='catBreed'
              name="catType"
              // onChange={handleChange}
            > 
            <option value="cornishRex">Cornish Rex</option>
            <option value="Birman">Birman</option>
            </select>
            </div> )}

  </div>
  )}


  {/* create drop down with prefilled dog breeds from external 
        <div className = "pure-control-group">
        <label htmlFor="breed">Puppies Breed</label>
      <select id="puppiesBreed" name="Breed">
      {breeds.map((breed) => (
        // console.log(wombat)
          <option key={breed}>
            {breed} 
          </option>
        ))}
      </select>
      <input id='breedName' type='text' name='breed' value={newBreed} onChange={e => setNewWombat(e.target.value)} />
    <input type="submit" value="Edit"/>
    </div> */}

{/* <label htmlFor="cat">Cat Breed: </label>
          
<input
  id="cat"
  type="text"
  onChange={handleChange}
  name="catbreed"
/>
<label htmlFor="dog">Dog Breed: </label>
<input
id='dog'
  className="primary-button"
  type="text"
  name="dogbreed"
  onChange={handleChange}

/> */}