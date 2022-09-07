const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
  }
}

const quoteRequest = async () => {
  let newQuote
  await fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=1', OPTIONS)
    .then(res => res.json())
    .then(res => newQuote = res[0])
  return newQuote
}

export default quoteRequest