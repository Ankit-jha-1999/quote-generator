import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [newQuote,setNewQuote] = useState();
  const [quoteAuthor,setQuoteAuthor] = useState();

  const getNewQuote = async () => {
     try{
       let res = await fetch('https://api.quotable.io/random');
       let data = await res.json();
       console.log(data);
       const author = data.author;
       const content = data.content;
      setNewQuote(content)
      setQuoteAuthor(author)
     }catch (error){
       console.log(error);
     }
  }

  useEffect( () => {
    const fetchData = async () => {
      await getNewQuote()
    }
    fetchData()
  }, [])
  

  return (
    <>
      <div className='main-container'>
      <div className='quote-main'>
            <h1 className='quote'>"{newQuote}"</h1>
            </div>
            <span className='author'>
            <h3><strong>-- {quoteAuthor}</strong></h3>
            </span>
        <div className='btn-container'>
        <button className='btn' onClick={getNewQuote}>next</button>
        </div>
      </div>
    </>
  )
}

export default App

