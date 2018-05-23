import React, { Component } from 'react'

import Alert from './Alert'

import './PostForm.css'

export default class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      savingPost: false,
      savedPost: undefined,
      successMessage: false
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit(event) {
    this.setState({
      savingPost: true
    })
    event.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.content
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      body: JSON.stringify(post),
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
    .then(response => {
      return response.json()
    })
    .then(post => {
      this.setState({
        title: '',
        content: '',
        savingPost: false,
        savedPost: post,
        successMessage: true
      })
      setTimeout(() => {
        this.setState({
          successMessage: false
        })
      }, 4000)
    })
  }

  render() {
    return (
      <form className="post-form" onSubmit={this.onSubmit}>
        <h2 className="form-title">Create new post</h2>
        {this.state.successMessage? <Alert post={this.state.savedPost} /> : ""}
        <p className="post-title">
            <label className="post-form__label" htmlFor="title">Title</label>
            <input onChange={this.onChange} className="post-form__input" id="title" type="text" name="title" placeholder="Enter title..." value={this.state.title} />
        </p>
        <textarea onChange={this.onChange} rows="4" cols="50" className="content-textarea" name="content" placeholder="Enter content here..." value={this.state.content}></textarea>
        {this.state.savingPost? <input className="post-form__submit-btn" disabled type="submit" value="Saving..." /> : <input className="post-form__submit-btn" type="submit" value="Save" />}
      </form>
    )
  }
}
