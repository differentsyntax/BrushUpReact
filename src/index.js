import React, { Component } from "react"
import { render } from "react-dom"
import PropTypes from "prop-types"

const bookList = [
  // in the event one value (pages here) is not given, default props come handy
  {"title":"The Ugly Truth", "author":"Minisha Augustine"},
  {"title":"The Ugly Truth 2", "author":"Minisha Augustine", "pages": 250},
  {"title":"The Ugly Truth 3", "author":"Minisha Augustine", "pages": 250}
]

// const Book = ({ title, author, pages, freeBookmark }) => {
const Book = ({ title = "No Title Given", author = "No Author", pages = 0, freeBookmark }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p> By: {author}</p>
      <p> Pages: {pages}</p>
      <p> Free Bookmark Today?: {freeBookmark ? "Yes" : "No"} </p>
    </div>
  )
}

// notice two different ways of component defining syntax below

const Hiring = () => 
<div>
  <p> The library is hiring. Go to www.library.com/jobs for more.</p> 
</div>

const NotHiring = () => 
<div>
  <p> The library is not hiring anymore. Check back later at www.library.com/jobs for more.</p> 
</div>

class Library extends Component {
  
  static defaultProps = {
    books:[
      {"title" : "The Pretty Lie", "author": "Minisha Augustine", "pages": 251}
    ]
  }
  
  state = { 
    open: false,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
   }
  
  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  // Common Component Life Cycle Functions, in-built

  componentDidMount(){
    this.setState({loading:true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
          .then(data => data.json())
          .then(data => this.setState({data, loading: false}))
    
  }

  componentDidUpdate(){
    console.log("The component just updated")
  }

  render(){
    var style = {
      backgroundColor: 'Orange'
    }
    const {books} = this.props // const books = this.props.books
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading ?
          "loading..." :
          <div>
            {this.state.data.map( 
              product => {
                return (
                  <div key = {product.id} >
                    <h3>Library Product of the Week!</h3>
                    <h4>{product.name}</h4>
                    <img alt= {product.name} src = {product.image} height = {100} />
                  </div> 
                )
              })}
          </div>
        }
        <h1 style = {style} >The library is {this.state.open ? "open" : "closed" }</h1>
    <button onClick = {this.toggle}>{this.state.open ? "Shut Down" : "Open Library"}</button>
        {books.map(
          (book,i) => <Book key = {i} // unique identifier key for mapping
                            title = {book.title} 
                            author = {book.author} 
                            pages = {book.pages}>
                            freeBookmark = {this.state.freeBookmark}
                      </Book>
        )}
      </div>
    )
  }
}

Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
}
render(
  // in the event component is not referenced (books = {bookList} here) is not given, default props in Library component come handy
  // < Library />,
  < Library books = {bookList}/>,
  document.getElementById("root")
  )
