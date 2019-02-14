import React, { Component } from 'react';
import axios from 'axios'
import Bookmark from './Bookmark'

class BookmarkList extends Component {
    constructor() {
        super()
        this.state = {
            bookmarks: []
        }
    }
    componentDidMount() {
        axios.get('http:/localhost:4000/api/bookmarks')
      .then((res) => {
        console.log(res)
        this.setState({
          bookmarks: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
    
      render () {
          console.log(this.props.bookmarks)
        let bookmarkList = this.props.bookmarks.map((bookmark, index) => {
          return (
            <Bookmark key = {index} />
          )
        })
        return (
          <div className = "bookmark-list">
          {bookmarkList}
          </div>
        )  
      }      
    }
    
    

export default BookmarkList; 
