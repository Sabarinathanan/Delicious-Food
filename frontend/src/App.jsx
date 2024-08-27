import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeholder from './pages/PlaceOrder/Placeholder'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='app'>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeholder/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App