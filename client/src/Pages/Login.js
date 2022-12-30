import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
  const navigate = useNavigate()
  return (
    <>
      <div>Signin</div>
      <form>
        <label>Username</label>
        <input type='text'></input>
        <label>Password</label>
        <input type='text'></input>
      </form>
      <button onClick={() => navigate('/signin')}>Register Now</button>
    </>
  )
}

export default Signin
