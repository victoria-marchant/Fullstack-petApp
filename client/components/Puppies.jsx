import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link } from "react-router-dom"
import {fetchPuppies} from '../actions/PuppyActions'
// import {fetchDogBreeds} from '../actions/DogApiActions'
import { getDogBreeds } from '../apis/DogApi'


export default function Puppies() {
const dispatch = useDispatch()

const puppies = useSelector(state => state.puppies)



useEffect(() => {
  dispatch(fetchPuppies())
}, [])


getDogBreeds() 

  return (
    <>
      <header className="header">
        <h1>My Collection...of puppies!</h1>
        <div className='button'>
        <Link to= {`/newpuppy`}><button>Add Puppy</button></Link>
        </div>
      </header>
      <section className="main">

    {puppies && puppies.map((puppies) => (
  <div key={puppies.id} className='col'>
    <div  className="card">
    <img src={puppies.imagePath} className="card-img-top img-fluid" alt="..."/>
    <div className="card-body align-bottom d-flex flex-column">
    <h3 className="card-title">{puppies.name}</h3>
    <p className="card-text">{puppies.name}'s breed is: {puppies.breed}</p>
    <p className="card-text">{puppies.name}'s family is: {puppies.owner}</p>
   
    
    <Link to= {`/${puppies.id}/edit`}>
          <button>Edit Puppy</button>
        </Link>
    </div>
    </div>
  </div>
    ))}
      </section>
    </>
  )
}

