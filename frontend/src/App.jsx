import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeholder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <div className='app'>
       {showLogin
       ?<LoginPopUp setShowLogin={setShowLogin}/>
        :<>
          <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeholder/>}/>
        </Routes>
        <Footer/>
        </>}
    </div>
  )
}

export default App