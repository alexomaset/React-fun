import React, { Component } from 'react'
import { render } from 'react-dom'

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  )
}
const Library = () => {
  return (
    <div>
     <Book title="River Between" author="Ngugi" pages="300" />
     <Book title="River and The Source" author="Mary Ogola" pages="400" />
     <Book title="Born a Crime" author="Trevor Noah" pages="500" />
    </div>
  )
}


render(
   <Library />,
  document.getElementById('root')
)