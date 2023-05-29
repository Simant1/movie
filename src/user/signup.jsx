import React from 'react'
import background from "../images/image.png"

const signup = () => {
  return (
   <>
   <img src={background}/>
   <h1>Signup</h1>
<form>
  <div class="row">
    <label for="email">Email</label>
    <input type="email" name="email" autocomplete="off" placeholder="email@example.com"/>
  </div>
  <div class="row">
    <label for="username">Username</label>
    <input type="username" name="email" autocomplete="off" placeholder="email@example.com"/>
  </div>
  <div class="row">
    <label for="password">Password</label>
    <input type="password" name="password"/>
  </div>
  <div class="row">
    <label for="c-password">Password</label>
    <input type="password" name="password"/>
  </div>
  <button type="submit">Login</button>
</form>
   </>
  )
}

export default signup