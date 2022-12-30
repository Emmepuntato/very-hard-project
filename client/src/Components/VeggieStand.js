import React, { useState, useEffect } from 'react'

function VeggieStand({ stand }) {
  const [currentPage, setCurrentPage] = useState([])
  const [pageNum, setPageNum] = useState(0)
  const itemDisplayed = 16

  const pageMaker = () => {
    let start = 0 + pageNum
    let end = itemDisplayed - 1 + pageNum
    let temp = stand.slice(start, end + 1)
    if (!temp.length == 0) {
      setCurrentPage(temp)
      console.log('currpag', currentPage)
    } else {
      pageCounter('-')
    }
  }

  const pageCounter = (operator) => {
    operator === '-'
      ? pageNum >= 1 && setPageNum(pageNum - itemDisplayed)
      : setPageNum(pageNum + itemDisplayed)
  }

  useEffect(() => {
    pageMaker()
    //console.log('stand', stand)
  }, [stand, pageNum])
  if (stand.length === 0) {
    return <div className='alert-red'>No Item Found</div>
  }

  return (
    <>
      <section className='stand'>
        {currentPage.map((item, index) => {
          const { vId, vName, vPrice, vUnit, companyName } = item
          return (
            <article key={index}>
              <ul>
                <li style={{ fontSize: '12px' }}>{vId}</li>
                <li style={{ fontSize: '30px', fontWeight: '800' }}>{vName}</li>
                <li>{vPrice}</li>
                <li style={{ fontSize: '12px' }}>{vUnit}</li>
                <li style={{ fontWeight: '600', fontStyle: 'italic' }}>
                  {companyName}
                </li>
              </ul>
            </article>
          )
        })}
      </section>
      <footer className='veg-footer'>
        <div>
          <button
            onClick={() => {
              pageCounter('-')
            }}
          >
            previous page
          </button>
          {Math.floor(pageNum / itemDisplayed + 1)}
          <button
            onClick={() => {
              pageCounter('+')
            }}
          >
            next page
          </button>
        </div>
      </footer>
    </>
  )
}

export default VeggieStand
