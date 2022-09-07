import React, { useEffect, useState } from 'react'
import quoteRequest from '../services/quoteRequest'

const Quote = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    quoteRequest()
      .then(res => setState(res))
  }, [])

  const handleClick = async () => {
    quoteRequest()
      .then(res => setState(res))
  }

  return (
    <article id='quote-box'>
      <h2 className='text-center' id='text'>{state.text}</h2>
      <div className='containerAnchorAndAuthor'>
        <a href="twitter.com/intent/tweet" id='tweet-quote' target='_blank'><i className="fa-brands fa-twitter"></i> Twitter</a>
        <h4 className='right-text' id='author'> - {state.author}</h4>
      </div>
      <button onClick={handleClick} id='new-quote'>new Quote</button>
    </article>
  )
}

export default Quote