import React from 'react'
import "./login.css"
import background from "../images/image.png"
const login = () => {
  return (
    <>
    <img src={background}/>
   <h1>Login</h1>
<form>
  <div class="row">
    <label for="email">Email</label>
    <input type="email" name="email" autocomplete="off" placeholder="email@example.com"/>
  </div>
  <div class="row">
    <label for="password">Password</label>
    <input type="password" name="password"/>
  </div>
  <button type="submit">Login</button>
</form>

    </>
  )
}

export default login