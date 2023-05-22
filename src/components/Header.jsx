import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
const Header = () => {
  return (
    <>
    <div className='nav'>
    <Link to={"/login"}>login</Link>
    <Link to={"/signup"}>signup</Link>
    </div>
    </>
  )
}

export default Header