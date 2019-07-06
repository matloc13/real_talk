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


                <Link
                  to="/showPost"
                  onClick={() => this.props.showPost(post)}
                >All</Link>

                <ShowEditor
                  content={post.blogPostBody}
                />

                <span onClick={() => this.props.deleteBlogPost(post._id)}>X</span>

                <Link
                  to="/update"
                  onClick={()=>this.props.showPost(post)}
                  >Edit 
                </Link>
              </div>
            )
          })

        }
      </div>
    )
  }
}
export default Index
