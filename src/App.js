import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import BookmarkList from './BookmarkList'
// import NewBookmark from './NewBookmark'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmark: this.props.bookmarks
    }
  }
    render() {
      return <div className="App">
      <h1> test</h1>
        <Route path = "/" exact component={BookmarkList} />
        </div>;
    }
  }
  
  export default App;