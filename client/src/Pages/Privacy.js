import React from 'react'

function Privacy() {
  return (
    <div className='contacts-page' style={{ textTransform: 'none' }}>
      <article>
        This website does not use cookies and does not require any personal
        information. Use fictitious information when necessary. This website
        only purpose is to access Google books public libries (not user private
        collections) through APIs and to store custom data in a MongoDB
        database. Please do not use any personal information since poor security
        measures are adopted to protect data sent to database. This website is
        the result of a personal attempt from the developer to built a website
        from zero hence the code is pretty light and most best standard pratices
        are not considered.
      </article>
    </div>
  )
}

export default Privacy
