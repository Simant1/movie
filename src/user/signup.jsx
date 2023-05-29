import React from 'react'
import Header from '../components/Header';

const signup = () => {
  return (
    <container>
      <backgroundimg/>
      <Header/>
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited Movie, Series, cartoons & more..</h1>
          <h4>Watch Anywhere</h4>
          <h6>Excited to watch? Enter your email to create or restart</h6>
        </div>
        <div className="">
          <input type ="email"placeholder='Email Address' name="email"/>
          <input type="password" placeholder='password' name='password'/>
          <button>Get Started</button>
        </div>
        <button>Log In</button>
      </div>

    </container>
  )
}

export default signup