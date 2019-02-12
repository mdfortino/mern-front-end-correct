import React, { Component } from 'react';
import axios from 'axios'

class Bookmark extends Component {
  componentDidMount() {
    const bookmarkId = this.props.match.params.id
    const bookmarks = this.props.bookmarks
    const url = `${bookmarksURL}${bookmarks}`
    
    axios.get(url)
    .then((res) => {
        console.log(res)
        this.setState({
          bookmarkId: res.data, 
          bookmarks: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {

  }

export default Bookmark;


    

    