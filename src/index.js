import React, { Component } from 'react'
import { render } from 'react-dom'


let bookList = [
  {"title":"River Between", "author":"Ngugi", "pages":"300"},
  {"title":"River and The Souce", "author":"Mary Ogola", "pages":"400"},
  {"title":"Born a Crime", "author":"Trevor Noah", "pages":"500"}
]
const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  )
}
const Library = ({books}) => {
  return (
    <div>
       {books.map(
            book => 
              <Book title={book.title} 
              author={book.author} 
              pages={book.pages} />
          )}
    </div>
  )
}


render(
   <Library books={bookList}/>,
  document.getElementById('root')
)