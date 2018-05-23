import React, { Component } from 'react'

import './SinglePost.css'

class SinglePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: []
    }
  }
  componentWillMount() {
    const id = this.props.match.params.id
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then((post) => {
                this.setState({
                    post: post,
                })
            })
  }

  render() {
    return (
      <div className="post">
        <h2 className="post__title">{this.state.post.title}</h2>
        <p className="post__content">{this.state.post.body}</p>
      </div>
    )
  }
}

export default SinglePost
