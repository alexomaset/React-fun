import React, { Component } from 'react'
import { render } from 'react-dom'

const Library = () => {
  return (
    <div>
      Welcome to the library
    </div>
  )
}


render(
  <div>
    <Library />
    <Library />
    <Library />
    <Library />
  </div>
,
  document.getElementById('root')
)