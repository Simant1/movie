import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signup from "./user/signup"
import Login from "./user/login"
import Header from './components/Header'
import Footer from './components/Footer'



export default function App() {
  return (
   <Router>
<Header/>
   <Routes>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route>
   </Routes>
<Footer/>
   </Router>
  )
}
