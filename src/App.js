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
        <NewPost
          baseuURL={baseURL}
          addBlogPost={this.addBlogPost}
        />
      </div>
    );
  }
}

export default App;
