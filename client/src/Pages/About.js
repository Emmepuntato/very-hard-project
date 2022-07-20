import React, { useState, useEffect } from 'react'

function About() {
  const [profile, setProfile] = useState()

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/about')
      //const data = await response.json()
      setProfile(response.data)
    } catch (err) {}
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  //fetch data from server w/ useEffect
  //store in useState or globalContext
  //display inside component
  return (
    <section className='about-page'>
      <ul>
        {profile.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img} alt='image' />
              <p>{profile.name}</p>
              <div>{profile.bio}</div>
            </div>
          )
        })}
      </ul>
    </section>
  )
}

export default About
