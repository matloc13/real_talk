import React, { Component } from 'react'



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

                <span onClick={() => this.props.deleteBlogPost(post._id)}>X</span>

                <a onClick={() => this.props.showPost(post)}>Edit</a>
                {/* <Link to={{
                  pathname: '/showPost',
                  state: {
                    post: post
                  }
                }}>Edit</Link> */}

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
