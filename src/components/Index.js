import React, { Component } from 'react'

class Index extends Component {
  render(){
    return (
      <div className="container">


        {
          this.props.blogPosts.map(post => {
            return (
              <div className="indexPage" key={post._id}>


                <h2 onClick={()=> this.props.showPost(post)}>{post.title}</h2>

                <span onClick={() => this.props.deleteBlogPost(post._id)}>X</span>

                <span onClick={() => this.props.showPost(post)}>Edit</span>

                <p>{post.blogPostBody.toString()}</p>
              </div>
            )
          })

        }
      </div>
    )
  }
}
export default Index