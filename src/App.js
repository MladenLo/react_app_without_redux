import React, { Component } from 'react';
import { Route } from "react-router-dom";

import SinglePost from './components/SinglePost'

import './App.css';

import Header from './components/Header'
import Posts from './components/Posts'
import PostForm from './components/PostForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Route exact path="/" component={Posts} />
          <Route exact path="/add" component={PostForm} />
          <Route exact path="/post/:id" component={SinglePost} />
        </div>
      </div>
    );
  }
}

export default App;
