import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Puppies from "./Puppies"
import Newpuppy from './Newpuppy'
import Editpuppy from './Editpuppy'

function App () {

  return (
    <>

     <Routes>
          <Route path="/" element={<Puppies/>}/>
          <Route path=":id/edit" element={<Editpuppy/>}/>
          <Route path="/newpuppy" element={<Newpuppy/>} />
     </Routes>

    </>
  )
}

export default App

