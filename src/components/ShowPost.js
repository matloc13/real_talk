import React, { Component } from 'react'

class ShowPost extends Component {
  render() {
    return (
      <div className="showPost">
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.blogPostBody}</p>
        <span>X</span>
      </div>
    )
  }
}

export default ShowPost
