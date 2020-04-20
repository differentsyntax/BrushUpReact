import React, { Component } from "react"
import { render } from "react-dom"

const bookList = [
  {"title":"The Ugly Truth", "author":"Minisha Augustine", "pages": 250},
  {"title":"The Ugly Truth 2", "author":"Minisha Augustine", "pages": 250},
  {"title":"The Ugly Truth 3", "author":"Minisha Augustine", "pages": 250}
]

const Book = ({ title, author, pages }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p> By: {author}</p>
      <p> Pages: {pages}</p>
    </div>
  )
}

const Library = ({books}) => {
  return (
    <div>
      {books.map(
        (book,i) => <Book key = {i} 
                          title = {book.title} 
                          author = {book.author} 
                          pages = {book.pages}>
                    </Book>
      )}
    </div>
  )
}

render(
  <Library books = {bookList} />, 
  document.getElementById("root")
  )
