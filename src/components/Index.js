import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import ShowEditor from './ShowEditor.js'

class Index extends Component {
  render(){
    return (
      <div className="container">

        {
          this.props.blogPosts.map(post => {
            return (
              <div className="indexItem" key={post._id}>

                <h2 onClick={()=> this.props.showPost(post)}>{post.title}</h2>

                <div className="indexBar">
                  {/* <span></span> */}
                  <span>{post.createdAt}</span>
                  <Link
                    to="/showPost"
                    onClick={() => this.props.showPost(post)}
                  >View
                  </Link>

                  <Link
                    to="/update"
                    onClick={()=>this.props.showPost(post)}
                  >Edit
                  </Link>

                  <button onClick={() => this.props.deleteBlogPost(post._id)}>X</button>

                </div>

                <ShowEditor
                  content={post.blogPostBody}
                />




              </div>
            )
          })

        }
      </div>
    )
  }
}
export default Index
