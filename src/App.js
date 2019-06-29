import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render() {


  return (
    <div className="App">
      <h1>hello</h1>

      <form onSubmit="">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={}/>
        <label htmlFor="post">Post</label>
        <textarea name="post" id="post"></textarea>
      </form>

    </div>
  );
  }
}

export default App;
