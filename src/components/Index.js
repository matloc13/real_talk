import React, { Component } from 'react'
import ShowEditor from './ShowEditor'

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
