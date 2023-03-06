import { useState, useContext } from 'react';
import React from 'react'
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useContext(BooksContext);

    const handleEditClick = (id, title) => {
        setShowEdit(!showEdit)
      };

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleSubmit = () => {
      setShowEdit(false)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
      content = <BookEdit onSubmit={handleSubmit} book={book}/>;
    }



  return (
    <div className='book-show'>
        <img 
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/200/100`}
        />
        <div>{content}</div>
        <div className='actions'>
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
            <button className='delete' onClick={handleDeleteClick}>
                Delete
            </button >
            
        </div>
    </div>
  )
}

export default BookShow