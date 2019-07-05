import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import {Editor,
//         EditorState,
//         RichUtils,
//         convertToRaw,
//         convertFromRaw} from 'draft-js'

import './App.css';

import MyEditor from './components/MyEditor.js'
// import NewPost from './components/NewPost.js'

import Header from './components/Header.js'

import Nav from './components/Nav.js'

import ShowPost from './components/ShowPost.js'

import UpdatePost from './components/UpdatePost.js'

import RegisterUser from './components/RegisterUser.js'

import Index from './components/Index.js'

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
    users: [],
    blogPosts: [],
    blogPost: {}
  }

  componentDidMount () {
    this.getBlogPosts()
  }

  getBlogPosts = () => {
    fetch(baseURL + '/blogposts')
    .then(data => {
      console.log(data)
      return data.json()},
      error => console.error(error))
      .then(parsedData => this.setState({
        blogPosts: parsedData
      }),
      error => console.error(error))
  }

  addUser = (user) => {
   const copyUsers = [...this.state.users]
   copyUsers.unshift(user)
   this.setState({
     users: copyUsers
   })
 }

  addBlogPost = (blogPost) => {
    const copyBlogPosts = [...this.state.blogPosts]
    copyBlogPosts.unshift(blogPost)
    this.setState({
      blogPosts: copyBlogPosts
    })
  }

  handleChange = (event) => {
    this.setState({
        [event.target.id]: event.target.value
    })
  }

  deleteBlogPost = (id) => {
    fetch(baseURL + '/blogposts/' + id, {
      method: 'DELETE'})
      .then(response => {
        const index = this.state.blogPosts.findIndex(blogPost => blogPost._id === id)
        const copyBlogPosts = [...this.state.blogPosts]
        copyBlogPosts.splice(index, 1)
        this.setState({blogPost: copyBlogPosts})
    })
  }

  showPost = (blogPost) => {
    this.setState({
      blogPost: blogPost
    })
  }

  render() {
    return (

<Router>
  <div className="App">
    {/* <h1>Real Talk</h1> */}
    <a className="btn" href="/"><h1>Real Talk</h1></a>
    <Header
      // currentUser={this.state.users}
    />
    <Nav user={this.state.users.username}/>
    <Switch>
      <Route path="/register" render={(props) => <RegisterUser {...props} handleChange={this.handleChange} baseURL={baseURL} addUser={this.addUser}/>}/>

      {
        this.state.blogPosts ?
          <Route path="/index" render={(props) => <Index {...props} blogPosts={this.state.blogPosts}/>}/>: "no content"
      }
      <Route path="/newPost" render={(props) => <MyEditor {...props} baseURL={baseURL} addBlogPost={this.addBlogPost}/>}/>

      <Route path="/showPost" render={(props) => <ShowPost {...props} post={this.state.blogPost}/>}/>

      <Route path="/update" render={(props) => <UpdatePost {...props} post={this.state.blogPost} baseURL={baseURL} posts={this.state.blogPosts}/>}/>

    </Switch>
    {/* <MyEditor
      baseURL={baseURL}
      addBlogPost={this.addBlogPost}
    /> */}

    {/* <ShowPost
      posts={this.state.blogPosts}
      post={this.state.blogPost}

    /> */}

    {/* <UpdatePost
      post={this.state.blogPost}
      baseURL={baseURL}
      posts={this.state.blogPosts}
      handleChange={this.handleChange}
    /> */}

    {/* {
      this.state.blogPosts ?
        <Index
      blogPosts={this.state.blogPosts}
      deleteBlogPost={this.deleteBlogPost}
      showPost={this.showPost}
        />:" no content"
    } */}

  </div>
</Router>
    );
  }
}

export default App;
