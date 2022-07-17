import React, {useEffect, useState} from 'react'


function App() {
const [data, setData] = useState()

const fetchData = async()=>{
  const response= await fetch('/api')
  const info = await response.json()
  setData(info)
}

useEffect(()=>{
  fetchData()
},[])


console.log('first')

  return <div className='App'>
    <div className='square_1'>
      <div className='int_1'></div>
    </div>
    <div className='square_2'>
    <div className='int_1'></div>

    </div>
    <div className='square_3'>
    <div className='int_1'></div>

    </div>
    <div className='square_4'>
    <div className='int_1'></div>

    </div>
    <div className='square_5'>
    <div className='int_1'></div>

    </div>
    <div className='square_6'>
    <div className='int_1'></div>

    </div>
    <div className='square_7'>
    <div className='int_1'></div>

    </div>
    <div className='square_8'>
    <div className='int_1'></div>

    </div>
    <div className='square_9'>
    <div className='int_1'></div>

    </div>
  </div>
}

export default App
