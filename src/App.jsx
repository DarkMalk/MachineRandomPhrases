import React from 'react'
import Quote from './components/Quote'
import './assets/css/global.css'

const App = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Machine Random Phrases</h1>
      <Quote />
    </div>
  )
}

export default App