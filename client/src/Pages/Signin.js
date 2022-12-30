import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [password, setPassword] = useState('')
  const [matchPsw, setMatchPsw] = useState('')

  const submitToDB = async (url, data) => {
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === matchPsw) {
      const data = { username, password, companyName }
      submitToDB('http://localhost:4500/login', data)
    } else console.log('password mismatch')
  }

  return (
    <>
      <div>Signin</div>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          required
        />
        <label htmlFor='companyName'>Company Name</label>
        <input
          type='text'
          id='companyName'
          name='companyName'
          value={companyName}
          onChange={(e) => {
            setCompanyName(e.target.value)
          }}
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          required
        />
        <label htmlFor='matchPsw'>Confirm Password</label>
        <input
          type='password'
          id='matchPsw'
          name='matchPsw'
          value={matchPsw}
          onChange={(e) => {
            setMatchPsw(e.target.value)
          }}
          required
        />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Login
