import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchDogBreeds} from '../actions/DogApiActions'
import { fetchCatBreeds } from '../actions/CatApiActions'


export default function CatOrDog(props) {
const dispatch = useDispatch()

const catDog = props.animalType

let dogBreeds = useSelector(state => state.dogBreeds)
const dogBreedNames = dogBreeds && dogBreeds.map((breed) => breed.name )

let catBreeds = useSelector(state => state.catBreeds)
const catBreedNames = catBreeds && catBreeds.map((breed) => breed.name)


// const [dogBreed, setdogBreed] = useState('Dog Breed')
// const [catBreed, setCatBreed] = useState('Cat Breed')

// function handleDogChange(evt){
//   // console.log(evt.target.value)
//   setdogBreed(evt.target.value)
// }

// function handleCatChange(evt){
//   console.log(evt.target.value)
//   setCatBreed(evt.target.value)
// }


useEffect(() => {
  dispatch(fetchDogBreeds())
  dispatch(fetchCatBreeds())
}, [])

  
  
  return(

<div>
{catDog === "dog" ? (<div>
<label htmlFor="dogBreed">Dog Breed: </label>
             <select
             value ={props.breed}
            id='dogBreed'
            name="breed"
            onChange={props.handleChange}> 
            {/* todo: set default value on select */}
            <option value="" disabled selected hidden>Choose {props.name}`s breed...</option>
            {dogBreedNames.map((breed, i) => 
          <option value = {breed} key= {i}>{breed}</option>)}
          <option value = "other" key= "other">Other</option>
      </select>
            </div> ): (<div>
<label htmlFor="catBreed">Cat Breed: </label>
             <select
             value = {props.breed}
            id='catBreed'
              name="breed"
              onChange={props.handleChange}
            > 
            <option value="" disabled selected hidden>Choose {props.name}`s breed...</option>
             {catBreedNames.map((breed, i) => 
          <option value = {breed} key= {i}>{breed}</option>)}
            <option value = "other" key= "other">Other</option>
            </select>
            </div> )}

  </div>
  )}


  