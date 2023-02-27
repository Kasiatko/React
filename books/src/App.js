import React from 'react'
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);


  const createBook = (title) => {
    const updatedBooks = [...books, 
        {
        id: Math.round(Math.random() * 999), 
        title
    }]
        //title:title jezeli wartosc i klucz jest taka sama wystarczy napisac raz
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
        <BookList books={books}/>
        <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App