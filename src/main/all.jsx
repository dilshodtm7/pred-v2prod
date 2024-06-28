import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../header/index.jsx'
import Footer from '../footer/index.jsx'
import Body from '../body/index.jsx'
import Firstjet from '../alls/1win/jet.jsx'
import Firstavia from '../alls/1win/aviator.jsx'
import Firstrocket from '../alls/1win/queen.jsx'
import Aviator from '../alls/all/aviator.jsx'
import Activate from '../register/activate.jsx'
import Register1win from '../register/register1win.jsx'
import Buy from '../buy/index.jsx'
import  Buyorregister from '../register/buyorregister.jsx'
import Active from "../alls/1win/active.jsx"

const all = () => {
  return (
   <>
   <Header/>
<Routes>
    <Route path="/" element={<Body />} />
    <Route path="/1win/jet" element={<Firstjet />} />
    <Route path="/1win/aviator" element={<Firstavia />} />
    <Route path="/1win/rocket" element={<Firstrocket />} />
    <Route path="/aviator" element={<Aviator />} />
    <Route path="/activate" element={<Activate />} />
    <Route path="/register1win" element={<Register1win />} />
    <Route path="/buy" element={<Buy />} />
    <Route path="/buyorregister" element={<Buyorregister />} />
    <Route path="/active" element={<Active />} />


    

</Routes>


   <Footer/>
   </>
  )
}

export default all