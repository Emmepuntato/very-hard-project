import React, { useState, useEffect } from 'react'

function About() {
  const [profile, setProfile] = useState([])

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/api/about')
      const data = await response.json()
      setProfile(data)
    } catch (err) {}
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <>
      <div style={{ textAlign: 'center', fontSize: '35px' }}>
        illustrative purpose only
      </div>
      <section className='about-page'>
        <ul>
          {profile.map((item, index) => {
            return (
              <div key={index} className='profile-box'>
                <img src={item.img} alt='profile pic not found' />
                <div className='profile-text'>
                  <p>{item.name}</p>
                  <div>{item.bio}</div>
                </div>
              </div>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default About
