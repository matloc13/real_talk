import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let baseUrl = 'https://matloc13.github.io/real_talk/'

class App extends Component{
  state = {
    blogPosts: []
  }
  getPosts = () => {
    fetch(baseUrl + '/blogposts').then(data => data.json(), err => console.log(err)).then(parsedData => this.setState({
      blogPosts: parsedData
    }))
  }
  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   })
  // }
  componentDidMOunt = () => {
    this.getPosts()
  }
  render() {

  return (
    <div className="App">
      <h1>hello</h1>

      <div className="displayPosts">
        <ul>
          {
            this.state.blogPosts.map(blogPost =>
              <li key={blogPost._id}>
                {blogPost.title}
              </li>
            )
          }
        </ul>
      </div>

      {/* <form onSubmit="">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={this.handleChange}/>
        <label htmlFor="post">Post</label>
        <textarea name="post" id="post"></textarea>
      </form> */}

    </div>
  );
  }
}

export default App;
