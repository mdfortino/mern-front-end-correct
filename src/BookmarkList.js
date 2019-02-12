import React, { Component } from 'react';
import axios from 'axios'
// import Bookmark from './Bookmark'

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
          console.log(this.state.bookmarks)
        const bookmarks = this.state.bookmarks.map((bookmark, index) => {
          return (
            <div className= "bookmark">
                }}
              />
            </div>
          )
        })
    
        return (
          <div>
            <h1>Saved Bookmarks</h1>
            { bookmarks }
          </div>
        )
      }
    }
    render() {
        return (
            <div>
               <h1> bookmark</h1> 
            </div>
        );
    }
}

export default BookmarkList; 
