import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import MyEditor from './components/MyEditor.js'

import Header from './components/Header.js'

import InfoNav from './components/Nav.js'

import ShowPost from './components/ShowPost.js'

// import ShowEditor from './components/ShowEditor.js'

import UpdatePost from './components/UpdatePost.js'

import Index from './components/Index.js'

// import { getCiphers } from 'tls';
let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://realtalkblog.herokuapp.com'
}

console.log('Current Base URL: ', baseURL)

class App extends Component{
  state = {
    users: [],
    user: {
      name: '',
      username: '',
      password: ''
    },
    blogPosts: [],
    blogPost: {},
    content: ''
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

  getUser = (desiredUser) => {
    fetch(baseURL + '/users/' + desiredUser)
    .then(data => {
      console.log(data)
      return data.json()},
      error => console.error(error))
      .then(parsedData => this.setState({user: parsedData}),
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
        this.setState({blogPosts: copyBlogPosts})
    })
  }

  //// May need to simply remove this.
    showPost = (post) => {
      const index = this.state.blogPosts.findIndex(blogPosts => blogPosts._id === post._id)
      const content = this.state.blogPosts[index].blogPostBody
      this.setState({
        blogPost: post,
        content: content
      })
    }


  render() {
    return (
<Router>
  <div className="App">
    {/* <h1>Real Talk</h1> */}
    {/* <a className="btn" href="/"><h1>Real Talk</h1></a> */}
    <Header
      baseURL={baseURL}
      handleChange = {this.handleChange}
      addUser = {this.addUser}
      user = {this.state.user}
      // currentUser={this.state.users}
    />
    <InfoNav user={this.state.users.username}/>
    <Switch>


      {
        this.state.blogPosts ?
          <Route path="/index" render={(props) => <Index {...props} blogPosts={this.state.blogPosts} showPost={this.showPost} deleteBlogPost={this.deleteBlogPost}/>}/>: "no content"
      }
      <Route path="/newPost" render={(props) => <MyEditor {...props} baseURL={baseURL} addBlogPost={this.addBlogPost}/>}/>

      <Route path="/showPost" render={(props) => <ShowPost {...props} post={this.state.blogPost} posts={this.state.blogPosts} content={this.state.content}/>}/>

      <Route path="/update"
        render={(props) => <UpdatePost {...props} post={this.state.blogPost}
        baseURL={baseURL}
        posts={this.state.blogPosts}
        content={this.state.content}
        addBlogPost={this.addBlogPost}
        />}/>

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
