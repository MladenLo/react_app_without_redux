import React, { Component } from 'react'

import Post from './Post'
import Loader from './Loader'

import './Posts.css'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            loader: true
        }
    }

    componentWillMount() {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts) => {
                this.setState({
                    posts: posts,
                    loader: false
                })
            })
        }, 1500)
    }


  render() {
      let posts = this.state.posts.map((post, key) => {
          return <Post key={key} post={post} />
      })
    return (
      <div className="posts">
        <h2 className="posts__title">Posts</h2>
        {this.state.loader ? <Loader /> : ""}
        {posts}
      </div>
    )
  }
}

export default Posts

