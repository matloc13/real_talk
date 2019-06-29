import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NewPost from './components/NewPost.js'
import { getCiphers } from 'tls';
let baseURL = process.env.REACT_APP_BASEURL



if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://realtalkblog.herokuapp.com/'
}

console.log('Current Base URL: ', baseURL)


class App extends Component{
  state = {
    blogPosts: [],
    blogPost: {}
  }

  componentDidMount () {
    this.getBlogPosts()
  }

  getBlogPosts = () => {
    fetch(baseURL + '/blogposts')
    .then(data => {
      return data.json()},
      error => console.error(error))
      .then(parsedData => this.setState({blogPosts: parsedData}),
      error => console.error(error))
  }

  addBlogPost = (blogPost) => {
    const copyBlogPosts = [...this.state.blogPosts]
    copyBlogPosts.unshift(blogPost)
    this.setState({
      blogPosts: copyBlogPosts,
      title: ''
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Real Talk</h1>
        <NewPost
          baseURL={baseURL}
          addBlogPost={this.addBlogPost}
        />
        {
          this.state.blogPosts.map(post => {
            return (
              <div className="container">
                <h2 key={post._id}>{post.title}</h2>
                <h5 key={post._id}>Edit</h5>
                <p>{post.blogPostBody}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
