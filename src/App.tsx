import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import { Link, Route, Routes } from 'react-router-dom'
import AboutUs from './components/aboutus'
import Flower from './components/flower'

function App() {
 

  return (
  
      <div>

         
        <Routes>
         

          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/flower' element={<Flower />}></Route>
        </Routes>

        <Link to='/about'><button>About Us</button></Link>
          <Link to='/flower'><button>Flower</button ></Link>
        <Header></Header>

        <Footer></Footer>
      </div>
      
  )
}

export default App
