import React, { useState, useEffect } from 'react'

function VeggieStand({ stand }) {
  console.log('type of stand: ', typeof stand, 'length ', stand.length)
  const [currentPage, setCurrentPage] = useState([])
  const [pageNum, setPageNum] = useState(0)
  const itemDisplayed = 16

  const pageMaker = () => {
    let start = 0 + pageNum
    let end = itemDisplayed - 1 + pageNum
    let temp = stand.slice(start, end + 1)
    if (!temp.length == 0) {
      setCurrentPage(temp)
    } else {
      pageCounter('-')
    }
    console.log('start', start, 'end', end, 'length of temp ', temp.length)
  }

  const pageCounter = (operator) => {
    // switch (operator) {
    //   case '-':
    //     pageNum >= 1 && setPageNum(pageNum - itemDisplayed)
    //     break
    //   case '+':
    //     setPageNum(pageNum + itemDisplayed)
    // }
    operator === '-'
      ? pageNum >= 1 && setPageNum(pageNum - itemDisplayed)
      : setPageNum(pageNum + itemDisplayed)
  }

  useEffect(() => {
    pageMaker()
  }, [stand, pageNum])
  /* Add a "buy" button, more info button */
  return (
    <>
      <section className='stand'>
        {currentPage.map((item, index) => {
          const { vId, vName, vPrice, vUnit, companyName } = item
          return (
            <article key={index}>
              <ul>
                <li>{vId}</li>
                <li>{vName}</li>
                <li>{vPrice}</li>
                <li>{vUnit}</li>
                <li>{companyName}</li>
              </ul>
            </article>
          )
        })}
        {/* DONE //add the page system */}
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
/* create a company page 4 each company with more info and all their products */

export default VeggieStand
