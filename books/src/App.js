import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  },[]);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title:newTitle
    })
    const updatedBooks = books.map((book) =>{
      if(book.id === id) {
        return {...book, ...response.data};
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  

  const deleteBookById = async(id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedList = books.filter((book) => {
        return book.id !== id;
    })
    setBooks(updatedList);
  }


  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data]
    //     {
    //     id: Math.round(Math.random() * 999), 
    //     title
    // }]
        //title:title jezeli wartosc i klucz jest taka sama wystarczy napisac raz
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App