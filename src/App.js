import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Create from './Components/Create'
import Home from './Components/Home'
import Read from './Components/Read'
import Update from './Components/Update'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/read/:id' element={<Read />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
    </>
  )
}

export default App