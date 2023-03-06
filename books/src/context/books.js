import { createContext, useState} from "react";
import axios from 'axios';

const BooksContext = createContext();


function Provider({children}) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    }
  
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
      await axios.delete(`http://localhost:3001/books/${id}`);
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

    const valueToShare = {
        books, 
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return <BooksContext.Provider value={{valueToShare}}>
            {children}
            </BooksContext.Provider >

}

export {Provider};
export default BooksContext;