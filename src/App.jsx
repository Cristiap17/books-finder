import { useState } from 'react';
import './App.css'
import { CardsBook } from './CardsBook/CardsBook';
import { TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'

function App() {

  const [newSeach, setNewSearch] = useState('');
  const [books, setBooks] = useState([])
  const [showText, setSowText] = useState('Nothing to show...')

  const handleChange = (event) =>{
    setNewSearch(event.target.value);
  }

  const handleClick = (event) =>{
    event.preventDefault() 
    setSowText('')
    setBooks([])
    setTimeout(()=>{  
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${newSeach}&maxResults=20`)
      .then((response)=> response.json())
      .then((data)=>{
        setBooks(data.items)
        setNewSearch("")
      })
    }, 1000)
  }

  return (
    <>
      <div className='HeaderContainer'>
          <h1>Book Finder</h1>
          <form action="" className='Search-container'>
            <input 
            type="text" 
            placeholder='Type author, book name, subject...' onChange={handleChange} 
            value={newSeach}
            />
            <button 
              onClick={handleClick}
              disabled={!newSeach}
              >
              Search
            </button>
          </form>
      </div>

          {books.length === 0 
            ? <h2>{showText 
                    ? showText
                    :<TripleMaze 
                    text={'Content is loading...'}
                    width={"150px"} 
                    height={"150px"}
                    />}
              </h2> 
            :
            <div className='MainContainer'>
              
                {books.map((book)=>(             
                <article key={book.id}>{
                  
                  <CardsBook 
                    urlInfo={book.volumeInfo.previewLink}
                    titleBook={book.volumeInfo.title}
                    image={book?.volumeInfo?.imageLinks?.thumbnail}
                    authors={book.volumeInfo.authors}
                    publisher={book.volumeInfo.publisher}
                    published={book.volumeInfo.publishedDate}
                    subtitle={book.volumeInfo.subtitle}                  
                  />}
                  </article>
                ))}
                </div>          
                }     
    </>
  )
}

export default App
