import React, { Component } from 'react';

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
      // title: ''
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
              <div className="container" key={post._id}>
                <h2>{post.title}</h2>
                <span>{post.date}</span>
                <h5>{post.author}</h5><span>Edit</span>
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
