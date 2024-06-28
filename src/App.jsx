import { useState } from 'react'
import { BrowserRouter,  } from 'react-router-dom'
import './App.css'
import All from './main/all.jsx'

function App() {


  return (
    <>
    <BrowserRouter>
    <All/>
    </BrowserRouter>
    </>
  )
}

export default App
