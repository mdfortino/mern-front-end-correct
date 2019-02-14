import React, { Component } from 'react';
import axios from 'axios'
const bookmarksURL = 'http:///localhost:4000/api/bookmarks'

class Bookmark extends Component {
  constructor(props){ 
    super(props)
    this.state = {
      note: []
    }
  }
  componentDidMount() {
    const bookmarkId = this.props.match.params.id
    console.log(`${bookmarksURL}${bookmarkId}`)
    const url = `${bookmarksURL}${bookmarkId}`
    
    axios.get(url)
    .then((res) => {
        console.log(res)
        this.setState({
          bookmark: res.data
        })
        console.log(this.state.bookmark)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {

    return( 
    <div key = {this.state.bookmark.id}>
    <p>{this.state.bookmark.title}</p> 
    <p>{this.state.bookmark.author}</p>
    <p>{this.state.bookmark.content}</p>

    </div> 

    )
  }
}

export default Bookmark;


    

    