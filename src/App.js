import React, { Component } from 'react';
<<<<<<< HEAD

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import {Editor,
//         EditorState,
//         RichUtils,
//         convertToRaw,
//         convertFromRaw} from 'draft-js'

=======
import {BrowserRouter as Router, Route } from "react-router-dom"
>>>>>>> 235afbe86cf32d2aee9af9353bf3b6906d4f9823
import './App.css';
import MyEditor from './components/MyEditor.js'
// import NewPost from './components/NewPost.js'
<<<<<<< HEAD
import Nav from './components/Nav.js'

=======
>>>>>>> 235afbe86cf32d2aee9af9353bf3b6906d4f9823
import ShowPost from './components/ShowPost.js'
import UpdatePost from './components/UpdatePost.js'
import Login from './components/NewSession.js'
import Register from './components/RegisterUser.js'
import Index from './components/Index.js'
import { getCiphers } from 'tls';
import Header from './components/Header';
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

  addUser = (user) => {
    const copyUsers = [...this.state.users]
    copyUsers.unshift(user)
    this.setState({
      users: copyUsers
    })
  }

  getBlogPosts = () => {
    fetch(baseURL + '/blogposts')
    .then(data => {
      console.log(data)
      return data.json()},
      error => console.error(error))
      .then(parsedData => this.setState({blogPosts: parsedData}),
      error => console.error(error))
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
<<<<<<< HEAD
=======
      <div className="App">
        <Router>
          <Header
            baseURL={baseURL}
            handleChange={this.handleChange}
            currentUser={this.state.currentUser}
          />

          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Router>


        <MyEditor
          baseURL={baseURL}
          addBlogPost={this.addBlogPost}
        />

        <ShowPost
          posts={this.state.blogPosts}
          post={this.state.blogPost}

        />

        <UpdatePost
          post={this.state.blogPost}
          baseURL={baseURL}
          posts={this.state.blogPosts}
          handleChange={this.handleChange}
        />
>>>>>>> 235afbe86cf32d2aee9af9353bf3b6906d4f9823

<Router>
  <div className="App">
    <h1>Real Talk</h1>
    <Nav />
    <Switch>
      
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
