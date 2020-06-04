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

class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
  render() {
    const { books } = this.props
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
         {books.map(
              (book, i) =>
                <Book 
                key={i}
                title={book.title} 
                author={book.author} 
                pages={book.pages} />
            )}
      </div>
    )
  }
}
// const Library = ({books}) => {
//   return (
//     <div>
//        {books.map(
//             (book, i) =>
//               <Book 
//               key={i}
//               title={book.title} 
//               author={book.author} 
//               pages={book.pages} />
//           )}
//     </div>
//   )
// }


render(
   <Library books={bookList}/>,
  document.getElementById('root')
)